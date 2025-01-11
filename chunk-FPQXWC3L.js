import{a as K}from"./chunk-KLROM45S.js";import{A as c,B as S,C as i,D as e,E as p,F as V,H as t,I as u,J as o,K as z,L as G,N as w,O as I,S as H,T as $,U as L,V as q,Y as J,aa as Q,g as B,k as M,m as A,n as m,o as P,r as U,s as R,v as x,w as n,z as g}from"./chunk-IQCAHYDB.js";import"./chunk-2VMXMS7J.js";var f=class l{apiService=m(Q);initialState={data:null,status:"loading"};state=K({initialState:this.initialState,actionSources:{getById:(d,a)=>a.pipe(M(s=>this.apiService.GetServiceDetailById(s)),B(s=>({data:s,status:"success"})))}});static \u0275fac=function(a){return new(a||l)};static \u0275prov=A({token:l,factory:l.\u0275fac,providedIn:"root"})};function Y(l,d){l&1&&(i(0,"div",0)(1,"div",3),U(),i(2,"svg",4),p(3,"circle",5)(4,"path",6),e(),R(),i(5,"p",7),t(6,"Cargando..."),e()()())}function Z(l,d){if(l&1&&(i(0,"div",24)(1,"div",25),p(2,"img",10),e(),i(3,"div",26)(4,"h3",27),t(5),e(),i(6,"p",16)(7,"strong"),t(8,"Costo de Entrada:"),e(),t(9),w(10,"currency"),e(),i(11,"p",16)(12,"strong"),t(13,"Incluye Entrada:"),e(),t(14),e(),i(15,"p",16)(16,"strong"),t(17,"Orden de Visita:"),e(),t(18),e(),i(19,"p",16)(20,"strong"),t(21,"Notas:"),e(),t(22),e()()()),l&2){let a=d.$implicit;n(2),c("src",a.imageUrl,x),n(3),u(a.destinationName),n(4),o(" ",I(10,6,a.entryCost),""),n(5),o(" ",a.includesEntry?"S\xED":"No",""),n(4),o(" ",a.visitOrder,""),n(4),o(" ",a.notes,"")}}function ee(l,d){if(l&1&&(i(0,"li"),t(1),e()),l&2){let a=d.$implicit;n(),u(a.name)}}function te(l,d){if(l&1&&(i(0,"div",1)(1,"div",8)(2,"div",9),p(3,"img",10),e(),i(4,"div",11)(5,"div")(6,"h1",12),t(7),e(),i(8,"p",13)(9,"strong"),t(10,"Tipo de Servicio:"),e(),t(11),e(),i(12,"p",14),t(13),e()(),i(14,"div",15)(15,"p",16)(16,"strong"),t(17,"Precio Base:"),e(),t(18),w(19,"currency"),e(),i(20,"p",16)(21,"strong"),t(22,"Duraci\xF3n:"),e(),t(23),e(),i(24,"p",16)(25,"strong"),t(26,"Capacidad:"),e(),t(27),e(),i(28,"p",16)(29,"strong"),t(30,"Notas:"),e(),t(31),e()()()(),i(32,"div",17)(33,"h2",12),t(34,"Transporte"),e(),i(35,"div",18)(36,"div",19),p(37,"img",10),e(),i(38,"div")(39,"p",16)(40,"strong"),t(41,"Tipo:"),e(),t(42),e(),i(43,"p",16)(44,"strong"),t(45,"Veh\xEDculo:"),e(),t(46),e(),i(47,"p",16)(48,"strong"),t(49,"Seguro de Viaje:"),e(),t(50),e(),i(51,"p",16)(52,"strong"),t(53,"Aire Acondicionado:"),e(),t(54),e(),i(55,"p",16)(56,"strong"),t(57,"Notas:"),e(),t(58),e()()()(),i(59,"div",17)(60,"h2",12),t(61,"Destinos"),e(),i(62,"div",20),g(63,Z,23,8,"div",21),e()(),i(64,"div",17)(65,"h2",12),t(66,"Incluye"),e(),i(67,"ul",22),g(68,ee,2,1,"li",23),e()()()),l&2){let a,s,C,k,F,N,v,T,E,_,y,D,b,h,j,O,r=V();n(3),c("src",(a=r.serviceDetailState.data())==null?null:a.imageUrl,x),n(4),u((s=r.serviceDetailState.data())==null?null:s.serviceName),n(4),o(" ",(C=r.serviceDetailState.data())==null?null:C.serviceType," "),n(2),u((k=r.serviceDetailState.data())==null?null:k.description),n(5),o(" ",I(19,17,(F=r.serviceDetailState.data())==null?null:F.basePrice),""),n(5),o(" ",(N=r.serviceDetailState.data())==null?null:N.durationHours," horas"),n(4),z(" De ",(v=r.serviceDetailState.data())==null?null:v.minCapacity," a ",(v=r.serviceDetailState.data())==null?null:v.maxCapacity," personas"),n(4),o(" ",(T=r.serviceDetailState.data())==null?null:T.notes,""),n(6),c("src",(E=r.serviceDetailState.data())==null||E.transport==null?null:E.transport.imageUrl,x),n(5),o(" ",(_=r.serviceDetailState.data())==null||_.transport==null?null:_.transport.transportType,""),n(4),o(" ",(y=r.serviceDetailState.data())==null||y.transport==null?null:y.transport.vehicle,""),n(4),o(" ",!((D=r.serviceDetailState.data())==null||D.transport==null)&&D.transport.travelInsurance?"S\xED":"No",""),n(4),o(" ",!((b=r.serviceDetailState.data())==null||b.transport==null)&&b.transport.hasAirConditioning?"S\xED":"No",""),n(4),o(" ",(h=r.serviceDetailState.data())==null||h.transport==null?null:h.transport.notes,""),n(5),c("ngForOf",(j=r.serviceDetailState.data())==null?null:j.destinations),n(5),c("ngForOf",(O=r.serviceDetailState.data())==null?null:O.items)}}function ie(l,d){l&1&&(i(0,"div",2),t(1,` Ocurri\xF3 un error al obtener los datos. Por favor, int\xE9ntalo de nuevo m\xE1s tarde.
`),e())}var W=class l{serviceDetailState=m(f).state;activatedRoute=m(J);id;constructor(){this.activatedRoute.paramMap.subscribe(d=>{let a=d.get("id");a?(this.id=+a,this.serviceDetailState.getById(this.id)):console.warn("No ID provided in route")}),H(()=>{this.serviceDetailState.getById(this.id)})}ngOnInit(){}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=P({type:l,selectors:[["app-service-detail"]],standalone:!0,features:[G],decls:3,vars:3,consts:[[1,"flex","items-center","justify-center",2,"min-height","calc(100vh - 4rem)","overflow","hidden"],[1,"container","mx-auto","p-6"],[1,"bg-red-500","text-white","p-4","rounded-md","mx-4"],[1,"flex","items-center","space-x-2","text-green-500"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"animate-spin","h-10","w-10","text-green-500"],["cx","12","cy","12","r","10","stroke-width","4",1,"opacity-25"],["d","M4 12a8 8 0 018-8","stroke-width","4",1,"opacity-75"],[1,"text-xl"],[1,"flex","flex-col","md:flex-row","bg-gray-900","border","border-gray-900","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700","overflow-hidden"],[1,"md:w-1/2","p-6","flex","justify-center","items-center"],[1,"w-full","rounded-md",3,"src"],[1,"md:w-2/3","p-6","flex","flex-col","justify-between"],[1,"mb-2","text-2xl","font-bold","tracking-tight","text-green-500","dark:text-white","line-clamp-2"],[1,"text-sm","text-gray-400","mb-3"],[1,"mb-3","font-normal","text-white","dark:text-gray-400"],[1,"space-y-2"],[1,"text-lg","text-white"],[1,"bg-gray-900","border","border-gray-900","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700","p-6","mt-6"],[1,"flex","flex-col","md:flex-row"],[1,"md:w-1/4","pr-6","flex","justify-center","items-center"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4"],["class","bg-slate-800 border border-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4",4,"ngFor","ngForOf"],[1,"list-disc","list-inside","text-white-600"],[4,"ngFor","ngForOf"],[1,"bg-slate-800","border","border-gray-900","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700","p-4"],[1,"p-6","flex","justify-center","items-center"],[1,"pl-6"],[1,"mb-2","text-2xl","font-bold","tracking-tight","text-white","dark:text-white","line-clamp-2"]],template:function(a,s){a&1&&g(0,Y,7,0,"div",0)(1,te,69,19,"div",1)(2,ie,2,0,"div",2),a&2&&(S(s.serviceDetailState.status()=="loading"?0:-1),n(),S(s.serviceDetailState.status()=="success"?1:-1),n(),S(s.serviceDetailState.status()=="error"?2:-1))},dependencies:[q,$,L]})};export{W as ServiceDetailComponent};
