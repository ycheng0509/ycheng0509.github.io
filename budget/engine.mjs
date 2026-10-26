export const numeric = (v) => typeof v === 'number' && Number.isFinite(v) && v >= 0;
export const monthly = (row) => row.frequency === 'annual' ? row.amount / 12 : row.amount;
export function incomeTotals(incomes) {
  const annual = incomes.reduce((s,r) => s+r.amount*r.payments,0);
  const ordinary = incomes.reduce((s,r) => s+r.amount*r.regular,0);
  return {annual, average:annual/12, ordinary, extra:annual-ordinary*12};
}
export function allocate(rows, target, mode='fixed') {
  const base = rows.map(monthly);
  const fixed = mode === 'all' ? 0 : base.reduce((s,v,i)=>s+(rows[i].locked?v:0),0);
  const flexible = base.reduce((s,v,i)=>s+((mode==='all'||!rows[i].locked)?v:0),0);
  const available = Math.max(0,target-fixed);
  const result = base.map((v,i)=>mode!=='all'&&rows[i].locked?v:(flexible?v*available/flexible:0));
  // Allocate integer cents with the largest remainder method, keeping locked amounts unchanged to cents.
  const adjustable=result.map((v,i)=>({i,v})).filter(x=>mode==='all'||!rows[x.i].locked);
  const cents=result.map(v=>Math.round(v*100));
  if(flexible>0 && fixed<=target){
    for(const {i,v} of adjustable)cents[i]=Math.floor(v*100+1e-7);
    const rest=Math.round(target*100)-cents.reduce((s,v)=>s+v,0);
    adjustable.sort((a,b)=>(b.v*100-Math.floor(b.v*100))-(a.v*100-Math.floor(a.v*100)));
    for(let n=0;n<rest;n++)cents[adjustable[n%adjustable.length].i]++;
  }
  const amounts=cents.map(v=>v/100),total=cents.reduce((s,v)=>s+v,0)/100;
  return {amounts,total,fixed,baseline:base.reduce((s,v)=>s+v,0),unallocated:Math.max(0,target-total),overFixed:fixed>target,factor:flexible?available/flexible:0};
}
export function taxReserve(tax) {
  if([tax.total,tax.withheld,tax.paid].some(v=>!numeric(v)))return null;
  return Math.max(0,tax.total-tax.withheld-tax.paid);
}
export function validateProfile(p) {
  if(!p||p.version!==1||!Array.isArray(p.incomes)||!Array.isArray(p.rows)||p.rows.length>80||p.incomes.length>10||!numeric(p.target)||p.target>1e8)throw Error('配置格式或预算金额不正确。');
  const label=v=>typeof v==='string'&&v.trim().length>0&&v.length<=80;
  const incomes=p.incomes.map(r=>{
    if(!label(r.name)||!numeric(r.amount)||!Number.isInteger(r.payments)||r.payments<1||r.payments>366||!Number.isInteger(r.regular)||r.regular<0||r.regular>31||r.regular*12>r.payments)throw Error('收入的金额或发薪次数不正确。');
    return {name:r.name,amount:r.amount,payments:r.payments,regular:r.regular};
  });
  const rows=p.rows.map(r=>{
    if(!label(r.name)||!numeric(r.amount)||r.amount>1e8||!['monthly','annual'].includes(r.frequency)||typeof r.locked!=='boolean')throw Error('分类金额、周期或固定标记不正确。');
    return {name:r.name,amount:r.amount,frequency:r.frequency,locked:r.locked,paid:!!r.paid};
  });
  const raw=p.tax||{},tax={};
  for(const key of ['total','withheld','paid']){if(raw[key]!=null&&!numeric(raw[key]))throw Error('税款必须为非负金额或留空。');tax[key]=raw[key]??null;}
  tax.months=Number.isInteger(raw.months)&&raw.months>=1&&raw.months<=24?raw.months:12;
  const scenarios=(Array.isArray(p.scenarios)?p.scenarios:[]).slice(0,8).map(r=>{if(!label(r.name)||!numeric(r.total))throw Error('税款情景不正确。');return{name:r.name,total:r.total};});
  const course=p.course||{amount:0,frequency:'none'};
  if(!numeric(course.amount)||!['none','annual','monthly'].includes(course.frequency))throw Error('课程金额不正确。');
  const custom=Array.isArray(p.custom)&&p.custom.length===rows.length&&p.custom.every(numeric)?p.custom:null;
  return {version:1,target:p.target,incomes,rows,tax,scenarios,course:{amount:course.amount,frequency:course.frequency},mode:['fixed','all','manual'].includes(p.mode)?p.mode:'fixed',custom};
}
export const courseMonthly=c=>c.frequency==='annual'?c.amount/12:c.frequency==='monthly'?c.amount:0;

