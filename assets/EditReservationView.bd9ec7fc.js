import{l as m,ai as h,A as w,Z as e,z as C,s as a,F as R,p as y,aU as E,aV as S,v as g,E as _,aW as d,ah as k}from"./index.de5639c8.js";import{E as I,a as b,R as x}from"./ReservationDetailsEdit.d338235b.js";import{u as V}from"./reservation.b320720d.js";import{R as B}from"./ReservationApiClient.8b57791d.js";import"./el-form-item.15914f90.js";import"./BaseApiClient.94d471cc.js";const N=t=>(E("data-v-eff3c9ca"),t=t(),S(),t),D=N(()=>g("h1",null,"Schimba rezervare",-1)),z=_("Salveaza modificari"),A=_("Sterge rezervarea"),F=m({__name:"EditReservationView",props:{reservationId:String},setup(t){const o=t,n=V();let s;const r=new B;n.fetchReservationDetails(Number(o.reservationId));function p(i){s=i}async function u(){await r.update(Number(o.reservationId),s),d.back()}async function v(){await r.delete(Number(o.reservationId)),d.back()}return(i,T)=>{const c=h,l=I,f=b;return y(),w(R,null,[D,e(x,{onChange:p,"reservation-data":C(n).reservationDetails},null,8,["reservation-data"]),e(f,{class:"container"},{default:a(()=>[e(l,{span:16,style:{"padding-right":"10px"}},{default:a(()=>[e(c,{style:{width:"100%"},type:"primary",onClick:u},{default:a(()=>[z]),_:1})]),_:1}),e(l,{span:8},{default:a(()=>[e(c,{style:{width:"100%"},type:"danger",onClick:v},{default:a(()=>[A]),_:1})]),_:1})]),_:1})],64)}}});const H=k(F,[["__scopeId","data-v-eff3c9ca"]]);export{H as default};
