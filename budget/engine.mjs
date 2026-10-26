export const FIXED = Object.freeze([
  {name:'房租及物业',amount:3950,note:'按目前房租水平预留'},
  {name:'车贷',amount:449.95,note:'每月付款'},
  {name:'Tesla FSD',amount:108.28,note:'每月订阅'},
  {name:'AT&T 网费',amount:110,note:'固定月费'},
  {name:'汽车保险',amount:376.47,note:'续保预留 · 暂按历史均值'},
  {name:'租客保险',amount:21.91,note:'按近期每月扣款'},
  {name:'手机费预留',amount:14,note:'暂按最近一笔 US Mobile 扣款'},
  {name:'信用卡年费',amount:7.92,note:'$95 年费按12个月预留'}
]);
export const FLEX = Object.freeze([
  {
    "name": "超市与日用品",
    "weight": 1064.718,
    "reserved": 900
  },
  {
    "name": "餐饮与自付工作餐",
    "weight": 1552.014,
    "reserved": 1300
  },
  {
    "name": "充电、打车与停车",
    "weight": 312.622
  },
  {
    "name": "宠物用品与医疗储备",
    "weight": 869.198
  },
  {
    "name": "本人医疗与药房",
    "weight": 145.086
  },
  {
    "name": "购物与家居",
    "weight": 2843.918
  },
  {
    "name": "兴趣、运动与娱乐",
    "weight": 427.188
  },
  {
    "name": "旅行储备",
    "weight": 654.212
  },
  {
    "name": "其他订阅与学习",
    "weight": 92.172
  },
  {
    "name": "水电与其他机动",
    "weight": 111.378
  }
]);
export const fixedCents = FIXED.reduce((s,r)=>s+Math.round(r.amount*100),0);
export function splitBudget(target){
 const available=Math.max(0,Math.round(target*100)-fixedCents),reserved=FLEX.map(r=>Math.round((r.reserved||0)*100)),reserveTotal=reserved.reduce((s,v)=>s+v,0);
 const cents=Array(FLEX.length).fill(0);let raw;
 if(available<reserveTotal){raw=reserved.map(v=>available*v/reserveTotal);}
 else{const remaining=available-reserveTotal,weights=FLEX.reduce((s,r)=>s+(r.reserved?0:r.weight),0);raw=FLEX.map((r,i)=>reserved[i]+(r.reserved?0:remaining*r.weight/weights));}
 for(let i=0;i<raw.length;i++)cents[i]=Math.floor(raw[i]);
 const rest=available-cents.reduce((s,v)=>s+v,0),order=raw.map((v,i)=>({i,f:v-Math.floor(v)})).sort((a,b)=>b.f-a.f);
 for(let n=0;n<rest;n++)cents[order[n].i]++;
 return cents;
}
export function validPlan(p){return !!p&&typeof p.target==='number'&&Number.isFinite(p.target)&&p.target>=0&&p.target<=1000000&&Array.isArray(p.amounts)&&p.amounts.length===FLEX.length&&p.amounts.every(v=>Number.isSafeInteger(v)&&v>=0&&v<=100000000);}
export function summary(target,amounts){const flex=amounts.reduce((s,v)=>s+v,0),assigned=fixedCents+flex;return{fixed:fixedCents/100,flex:flex/100,assigned:assigned/100,available:(Math.round(target*100)-fixedCents)/100,left:(Math.round(target*100)-assigned)/100};}
