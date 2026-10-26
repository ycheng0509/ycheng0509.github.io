export const FIXED = Object.freeze([
  {name:'房租及物业',amount:3950,note:'按目前房租水平预留'},
  {name:'车贷',amount:449.95,note:'每月付款'},
  {name:'Tesla FSD',amount:108.28,note:'每月订阅'},
  {name:'AT&T 网费',amount:110,note:'固定月费'},
  {name:'汽车保险',amount:376.47,note:'续保预留 · 暂按历史均值'},
  {name:'租客保险',amount:21.91,note:'按近期每月扣款'}
]);
export const FLEX = Object.freeze([
  {name:'超市与日用品',weight:1104.465},
  {name:'餐饮与饮品',weight:1218.125},
  {name:'充电、打车与停车',weight:305.265},
  {name:'宠物用品与医疗储备',weight:760.3666666667},
  {name:'本人医疗与药房',weight:126.4533333333},
  {name:'购物与家居',weight:924.0433333333},
  {name:'兴趣、运动与娱乐',weight:463.6933333333},
  {name:'旅行储备',weight:378.6583333333},
  {name:'其他订阅与学习',weight:59.3266666667},
  {name:'水电、手机与其他机动',weight:128.1966666667}
]);
export const fixedCents = FIXED.reduce((s,r)=>s+Math.round(r.amount*100),0);
export function splitBudget(target){
 const available=Math.max(0,Math.round(target*100)-fixedCents),weights=FLEX.reduce((s,r)=>s+r.weight,0);
 const raw=FLEX.map(r=>available*r.weight/weights),cents=raw.map(Math.floor);
 const rest=available-cents.reduce((s,v)=>s+v,0),order=raw.map((v,i)=>({i,f:v-Math.floor(v)})).sort((a,b)=>b.f-a.f);
 for(let n=0;n<rest;n++)cents[order[n].i]++;
 return cents;
}
export function validPlan(p){return !!p&&typeof p.target==='number'&&Number.isFinite(p.target)&&p.target>=0&&p.target<=1000000&&Array.isArray(p.amounts)&&p.amounts.length===FLEX.length&&p.amounts.every(v=>Number.isSafeInteger(v)&&v>=0&&v<=100000000);}
export function summary(target,amounts){const flex=amounts.reduce((s,v)=>s+v,0),assigned=fixedCents+flex;return{fixed:fixedCents/100,flex:flex/100,assigned:assigned/100,available:(Math.round(target*100)-fixedCents)/100,left:(Math.round(target*100)-assigned)/100};}
