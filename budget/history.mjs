import {HISTORY} from './history-data.mjs?v=3';
const $=id=>document.getElementById(id),usd=(c,d=2)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:d,maximumFractionDigits:d}).format(c/100),NS='http://www.w3.org/2000/svg';
export function initHistory(){
 let mode='calendar',selected='all';
 const rows=()=>HISTORY[mode];
 function svgEl(name,attrs={},content){const e=document.createElementNS(NS,name);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,String(v));if(content!==undefined)e.textContent=content;return e;}
 function drawChart(){
  const container=$('history-chart'),W=container.clientWidth;if(W<100)return;
  const narrow=W<480,H=285,L=53,R=12,T=32,B=58,plotW=W-L-R,plotH=H-T-B,values=rows(),max=Math.max(...values.map(x=>x.total),1),ceiling=Math.ceil(max/200000)*200000,slot=plotW/values.length,barW=Math.min(54,slot*.56);
  const svg=svgEl('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,role:'img','aria-label':mode==='calendar'?'按自然月的Robinhood净消费柱状图，4月与10月不完整':'按信用卡跨月账单周期的净消费柱状图'});
  svg.append(svgEl('title',{},'Robinhood净消费趋势'),svgEl('desc',{},values.map(x=>`${x.label} ${usd(x.total)}${x.complete?'':'，不完整月份'}`).join('；')));
  for(let i=0;i<=4;i++){const value=ceiling*i/4,y=T+plotH-value/ceiling*plotH;svg.append(svgEl('line',{x1:L,y1:y,x2:W-R,y2:y,class:'history-grid'}),svgEl('text',{x:L-8,y:y+4,'text-anchor':'end',class:'axis-label'},usd(value,0)));}
  svg.append(svgEl('text',{x:L,y:14,class:'axis-label'},'净消费 / USD'));
  values.forEach((r,i)=>{const x=L+slot*(i+.5),height=r.total/ceiling*plotH,y=T+plotH-height;
   const a=svgEl('a',{href:'#history-detail',role:'button','aria-label':`查看${r.label}分类，${usd(r.total)}${r.complete?'':'，月份不完整'}`});a.addEventListener('click',e=>{e.preventDefault();selected=String(i);$('history-month').value=selected;render();});
   a.append(svgEl('rect',{x:x-barW/2,y,width:barW,height,rx:3,class:'history-bar'+(r.complete?'':' partial')+(selected===String(i)?' selected':'')}));
   a.append(svgEl('rect',{x:x-slot/2+1,y:T,width:slot-2,height:plotH,fill:'transparent'}));
   const valueText=narrow?usd(r.total,0):usd(r.total,0);svg.append(a);if(!narrow)svg.append(svgEl('text',{x,y:y-8,'text-anchor':'middle',class:'value-label'},valueText));
   svg.append(svgEl('text',{x,y:H-32,'text-anchor':'middle',class:'axis-label'},r.label.replace('账单','')));
   if(!r.complete)svg.append(svgEl('text',{x,y:H-15,'text-anchor':'middle',class:'partial-label'},'不完整'));
  });
  svg.append(svgEl('text',{x:W-R,y:H-1,'text-anchor':'end',class:'axis-label'},mode==='calendar'?'2026 / 入账自然月':'2026 / 跨月账单'));
  container.replaceChildren(svg);
 }
 function renderCategories(){
  const periods=selected==='all'?rows():[rows()[Number(selected)]],categories={};for(const r of periods)for(const [k,v]of Object.entries(r.categories))categories[k]=(categories[k]||0)+v;
  const total=periods.reduce((s,r)=>s+r.total,0),ordered=Object.entries(categories).sort((a,b)=>b[1]-a[1]),max=Math.max(...ordered.map(x=>Math.abs(x[1])),1),holder=$('history-categories');holder.replaceChildren();
  $('history-selected').textContent=(selected==='all'?'全部已提供期间':periods[0].label+' · '+periods[0].coverage)+' · 净消费 '+usd(total);
  for(const [name,value]of ordered){const row=document.createElement('div');row.className='history-category-row';const labels=document.createElement('div');labels.className='category-labels';const label=document.createElement('span'),amount=document.createElement('span');label.textContent=name;amount.textContent=usd(value)+' · '+(value/total*100).toFixed(1)+'%';labels.append(label,amount);
   const track=document.createElement('div');track.className='category-track';const bar=document.createElement('span');bar.className='category-bar'+(name==='宠物年保险'?' annual':'')+(value<0?' credit':'');bar.style.width=(Math.abs(value)/max*100)+'%';track.append(bar);row.append(labels,track);holder.append(row);
  }
 }
 function table(){const body=$('history-table');body.replaceChildren();for(const r of rows()){const tr=document.createElement('tr');for(const v of [r.label+(r.complete?'':' *'),usd(r.gross),usd(r.credits),usd(r.total)]){const td=document.createElement('td');td.textContent=v;tr.append(td);}body.append(tr);}}
 function render(){const r=rows(),complete=r.filter(x=>x.complete);$('history-total').textContent=usd(r.reduce((s,v)=>s+v.total,0));$('history-average').textContent=usd(complete.reduce((s,v)=>s+v.total,0)/complete.length);$('history-average-label').textContent=mode==='calendar'?'完整自然月均':'完整结算期均值';$('history-average-note').textContent=mode==='calendar'?'仅5–9月，排除不完整月份':'6个完整账单周期，非自然月';
 $('history-comparison').textContent=mode==='calendar'?'8月 $6,702.84 → 9月 $4,681.06，减少 $2,021.78。主要是宠物医疗、餐饮和网购回落。':'8月账单 $3,684.75 → 9月账单 $6,400.69。9月账单包含8/22与8/27的宠物费用；账单标题不代表消费自然月。';
 drawChart();renderCategories();table();}
 function rebuildMonths(){const select=$('history-month');select.replaceChildren(new Option('全部期间','all'));rows().forEach((r,i)=>select.add(new Option(r.label+(r.complete?'':'（不完整）'),String(i))));select.value=selected;}
 for(const m of ['calendar','statement'])$(m+'-mode').addEventListener('click',()=>{mode=m;selected='all';for(const v of ['calendar','statement'])$(v+'-mode').setAttribute('aria-pressed',String(v===mode));rebuildMonths();render();});
 $('history-month').addEventListener('change',()=>{selected=$('history-month').value;render();});
 new ResizeObserver(()=>{if(!$('history-view').hidden)drawChart();}).observe($('history-chart'));
 rebuildMonths();render();return {render};
}
