import{S as mo,i as no,s as ho,F as pi,y as co,z as Lo,A as Io,N as bo,R as vo,g as Uo,d as ko,B as wo,Q as po,k as i,q as s,a as _,l as o,m as r,r as a,h as t,c as v,n as m,b as u,J as e,X as Ho}from"./index.da3d1cc8.js";import{M as yo}from"./mdsvex.c7ff0795.js";function Co(Y){let p,h,c,d,E,n,Z,We,nl,Xl,je,hl,De,Me,cl,Oe,Gl,q,Se,Vl,$,Ne,Yl,g,Ll,Be,Zl,W,Pe,gl,w,Il,Qe,ze,bl,Ae,le,j,Fe,ee,ll,D,Je,Ul,Ke,Re,te,M,Xe,ie,el,L,kl,Ge,Ve,wl,Ye,Ze,Hl,ge,oe,O,lt,re,S,et,se,N,tt,ae,B,it,fe,P,ot,ue,H,yl,rt,st,Cl,at,_e,Q,ft,ve,z,ut,pe,A,_t,Ee,y,tl,vt,I,Tl,pt,Et,xl,mt,dt,ql,nt,ht,il,ct,F,$l,Lt,It,Wl,bt,me,J,Ut,de,C,ol,kt,b,jl,wt,Ht,Dl,yt,Ct,Ml,Tt,xt,rl,qt,K,Ol,$t,Wt,Sl,jt,ne,R,Dt,he,T,sl,Mt,U,Nl,Ot,St,Bl,Nt,Bt,Pl,Pt,Qt,al,zt,X,Ql,At,Ft,zl,Jt,ce,G,Kt,Le,x,fl,Rt,k,Al,Xt,Gt,Fl,Vt,Yt,Jl,Zt,gt,ul,li,V,Kl,ei,ti,Rl,ii;return{c(){p=i("h2"),h=s("What is Temporal"),c=_(),d=i("ul"),E=i("li"),n=i("code"),Z=s("Uber Cadence"),We=s("의 fork open service"),nl=i("ul"),Xl=i("li"),je=_(),hl=i("li"),De=s("Temporal은 분산 이벤트 워크플로우를 실행하는데 최적화된 완전 관리 서비스"),Me=_(),cl=i("li"),Oe=s("강력한 상태 관리, 워크플로우 재시작 및 오류 처리 기능을 제공"),Gl=_(),q=i("h3"),Se=s("More Detail"),Vl=_(),$=i("h4"),Ne=s("temporal client"),Yl=_(),g=i("ul"),Ll=i("li"),Be=s("워크플로우를 시작하고 상태를 확인하고 작업을 완료"),Zl=_(),W=i("h4"),Pe=s("temporal server"),gl=_(),w=i("ul"),Il=i("li"),Qe=s("워크플로우를 저장 관리"),ze=_(),bl=i("li"),Ae=s("모니터링"),le=_(),j=i("h2"),Fe=s("Who use temporal: UseCase"),ee=_(),ll=i("ul"),D=i("li"),Je=s("the most valuable "),Ul=i("code"),Ke=s("mission-critical"),Re=s(" workloads in any software company are long-running and tie together multiple services"),te=_(),M=i("h3"),Xe=s("HashiCorp"),ie=_(),el=i("blockquote"),L=i("ul"),kl=i("li"),Ge=s("HashiCorp needed to build long-running, reliable, fault-tolerant tasks for the HashiCorp Cloud Platform."),Ve=_(),wl=i("li"),Ye=s("Temporal’s technology satisfied all of these requirements out of the box and allowed our developers to focus on business logic."),Ze=_(),Hl=i("li"),ge=s("Without Temporal’s technology, we would’ve spent a significant amount of time rebuilding Temporal and would’ve very likely done a worse job."),oe=_(),O=i("h3"),lt=s("Uber"),re=_(),S=i("h3"),et=s("Netflix"),se=_(),N=i("h3"),tt=s("Coinbase"),ae=_(),B=i("h3"),it=s("Stripe"),fe=_(),P=i("h3"),ot=s("Checker"),ue=_(),H=i("ul"),yl=i("li"),rt=s("미국 범죄기록(?) 조회 플랫폼"),st=_(),Cl=i("li"),at=s("미국에서 해당 기록을 조회하는데 오래 걸림(~15일)  -> long running"),_e=_(),Q=i("h3"),ft=s("yum"),ve=_(),z=i("h2"),ut=s("Temporal vs others"),pe=_(),A=i("h4"),_t=s("temporal"),Ee=_(),y=i("ul"),tl=i("li"),vt=s("pros:"),I=i("ul"),Tl=i("li"),pt=s("장기 실행되는 워크플로우에 대한 내결함성, 유지관리, 상태 추적등을 지원"),Et=_(),xl=i("li"),mt=s("업무 프로세스를 코드로 모델링 -> 복잡한 비지니스 관리하기 쉬움"),dt=_(),ql=i("li"),nt=s("activity와 workflow가 실패하더라도 자동적으로 재시도"),ht=_(),il=i("li"),ct=s("cons:"),F=i("ul"),$l=i("li"),Lt=s(`서버와 클라이언트를 모두 관리 해야 됨으로 운영 부하
-> temporal cloud`),It=_(),Wl=i("li"),bt=s(`서버리스 환경에서 사용하기 어려울 수 있음
-> client에서 풀링을 사용하기 때문에 람다환경과 안맞을 수 있음`),me=_(),J=i("h4"),Ut=s("sqs"),de=_(),C=i("ul"),ol=i("li"),kt=s("pros:"),b=i("ul"),jl=i("li"),wt=s("분산 시스템에서 메시지를 안정적으로"),Ht=_(),Dl=i("li"),yt=s("대기열 메시징에 대해 높은 확장성과 내구성"),Ct=_(),Ml=i("li"),Tt=s("완전히 관리되는 서비스 -> 인프라 부담 적음"),xt=_(),rl=i("li"),qt=s("cons:"),K=i("ul"),Ol=i("li"),$t=s("복잡한 워크프롤우 관리나 상태 추적 기능이 없음"),Wt=_(),Sl=i("li"),jt=s("메시지 처리가 순차적이지 않을 수 있으며, 중복 처리 발생 가능성(멱등성 이슈)  -> 상태 관리 어렵"),ne=_(),R=i("h4"),Dt=s("kafka"),he=_(),T=i("ul"),sl=i("li"),Mt=s("pros"),U=i("ul"),Nl=i("li"),Ot=s("실시간 데이터를 스트리밍 처리하는데 특화"),St=_(),Bl=i("li"),Nt=s("대용량 데이터 처리에 대한 높은 처리량과 성능 지원"),Bt=_(),Pl=i("li"),Pt=s("데이터 레코드에 대한 내구성 & 장애 복구"),Qt=_(),al=i("li"),zt=s("cons"),X=i("ul"),Ql=i("li"),At=s("설정과 운영 부담"),Ft=_(),zl=i("li"),Jt=s("메시지 삭제 시점 관리, 파티셔닝, 복제 등 세부 설정 필요"),ce=_(),G=i("h4"),Kt=s("step function"),Le=_(),x=i("ul"),fl=i("li"),Rt=s("pros"),k=i("ul"),Al=i("li"),Xt=s("복잡한 업무 프로세스를 모델링 & 관리"),Gt=_(),Fl=i("li"),Vt=s("aws와 통합이 잘 되어 있음"),Yt=_(),Jl=i("li"),Zt=s("인프라 관리 부담이 적음"),gt=_(),ul=i("li"),li=s("cons"),V=i("ul"),Kl=i("li"),ei=s("비용 부담"),ti=_(),Rl=i("li"),ii=s("복잡한 애플리케이션에 적합하지 않음 -> json 기반 시스템은 복잡한 로직을 효율적으로 표현하기 어려움"),this.h()},l(l){p=o(l,"H2",{id:!0});var f=r(p);h=a(f,"What is Temporal"),f.forEach(t),c=v(l),d=o(l,"UL",{});var _l=r(d);E=o(_l,"LI",{});var Ie=r(E);n=o(Ie,"CODE",{});var Ei=r(n);Z=a(Ei,"Uber Cadence"),Ei.forEach(t),We=a(Ie,"의 fork open service"),nl=o(Ie,"UL",{});var mi=r(nl);Xl=o(mi,"LI",{}),r(Xl).forEach(t),mi.forEach(t),Ie.forEach(t),je=v(_l),hl=o(_l,"LI",{});var di=r(hl);De=a(di,"Temporal은 분산 이벤트 워크플로우를 실행하는데 최적화된 완전 관리 서비스"),di.forEach(t),Me=v(_l),cl=o(_l,"LI",{});var ni=r(cl);Oe=a(ni,"강력한 상태 관리, 워크플로우 재시작 및 오류 처리 기능을 제공"),ni.forEach(t),_l.forEach(t),Gl=v(l),q=o(l,"H3",{id:!0});var hi=r(q);Se=a(hi,"More Detail"),hi.forEach(t),Vl=v(l),$=o(l,"H4",{id:!0});var ci=r($);Ne=a(ci,"temporal client"),ci.forEach(t),Yl=v(l),g=o(l,"UL",{});var Li=r(g);Ll=o(Li,"LI",{});var Ii=r(Ll);Be=a(Ii,"워크플로우를 시작하고 상태를 확인하고 작업을 완료"),Ii.forEach(t),Li.forEach(t),Zl=v(l),W=o(l,"H4",{id:!0});var bi=r(W);Pe=a(bi,"temporal server"),bi.forEach(t),gl=v(l),w=o(l,"UL",{});var be=r(w);Il=o(be,"LI",{});var Ui=r(Il);Qe=a(Ui,"워크플로우를 저장 관리"),Ui.forEach(t),ze=v(be),bl=o(be,"LI",{});var ki=r(bl);Ae=a(ki,"모니터링"),ki.forEach(t),be.forEach(t),le=v(l),j=o(l,"H2",{id:!0});var wi=r(j);Fe=a(wi,"Who use temporal: UseCase"),wi.forEach(t),ee=v(l),ll=o(l,"UL",{});var Hi=r(ll);D=o(Hi,"LI",{});var Ue=r(D);Je=a(Ue,"the most valuable "),Ul=o(Ue,"CODE",{});var yi=r(Ul);Ke=a(yi,"mission-critical"),yi.forEach(t),Re=a(Ue," workloads in any software company are long-running and tie together multiple services"),Ue.forEach(t),Hi.forEach(t),te=v(l),M=o(l,"H3",{id:!0});var Ci=r(M);Xe=a(Ci,"HashiCorp"),Ci.forEach(t),ie=v(l),el=o(l,"BLOCKQUOTE",{});var Ti=r(el);L=o(Ti,"UL",{});var vl=r(L);kl=o(vl,"LI",{});var xi=r(kl);Ge=a(xi,"HashiCorp needed to build long-running, reliable, fault-tolerant tasks for the HashiCorp Cloud Platform."),xi.forEach(t),Ve=v(vl),wl=o(vl,"LI",{});var qi=r(wl);Ye=a(qi,"Temporal’s technology satisfied all of these requirements out of the box and allowed our developers to focus on business logic."),qi.forEach(t),Ze=v(vl),Hl=o(vl,"LI",{});var $i=r(Hl);ge=a($i,"Without Temporal’s technology, we would’ve spent a significant amount of time rebuilding Temporal and would’ve very likely done a worse job."),$i.forEach(t),vl.forEach(t),Ti.forEach(t),oe=v(l),O=o(l,"H3",{id:!0});var Wi=r(O);lt=a(Wi,"Uber"),Wi.forEach(t),re=v(l),S=o(l,"H3",{id:!0});var ji=r(S);et=a(ji,"Netflix"),ji.forEach(t),se=v(l),N=o(l,"H3",{id:!0});var Di=r(N);tt=a(Di,"Coinbase"),Di.forEach(t),ae=v(l),B=o(l,"H3",{id:!0});var Mi=r(B);it=a(Mi,"Stripe"),Mi.forEach(t),fe=v(l),P=o(l,"H3",{id:!0});var Oi=r(P);ot=a(Oi,"Checker"),Oi.forEach(t),ue=v(l),H=o(l,"UL",{});var ke=r(H);yl=o(ke,"LI",{});var Si=r(yl);rt=a(Si,"미국 범죄기록(?) 조회 플랫폼"),Si.forEach(t),st=v(ke),Cl=o(ke,"LI",{});var Ni=r(Cl);at=a(Ni,"미국에서 해당 기록을 조회하는데 오래 걸림(~15일)  -> long running"),Ni.forEach(t),ke.forEach(t),_e=v(l),Q=o(l,"H3",{id:!0});var Bi=r(Q);ft=a(Bi,"yum"),Bi.forEach(t),ve=v(l),z=o(l,"H2",{id:!0});var Pi=r(z);ut=a(Pi,"Temporal vs others"),Pi.forEach(t),pe=v(l),A=o(l,"H4",{id:!0});var Qi=r(A);_t=a(Qi,"temporal"),Qi.forEach(t),Ee=v(l),y=o(l,"UL",{});var we=r(y);tl=o(we,"LI",{});var oi=r(tl);vt=a(oi,"pros:"),I=o(oi,"UL",{});var pl=r(I);Tl=o(pl,"LI",{});var zi=r(Tl);pt=a(zi,"장기 실행되는 워크플로우에 대한 내결함성, 유지관리, 상태 추적등을 지원"),zi.forEach(t),Et=v(pl),xl=o(pl,"LI",{});var Ai=r(xl);mt=a(Ai,"업무 프로세스를 코드로 모델링 -> 복잡한 비지니스 관리하기 쉬움"),Ai.forEach(t),dt=v(pl),ql=o(pl,"LI",{});var Fi=r(ql);nt=a(Fi,"activity와 workflow가 실패하더라도 자동적으로 재시도"),Fi.forEach(t),pl.forEach(t),oi.forEach(t),ht=v(we),il=o(we,"LI",{});var ri=r(il);ct=a(ri,"cons:"),F=o(ri,"UL",{});var He=r(F);$l=o(He,"LI",{});var Ji=r($l);Lt=a(Ji,`서버와 클라이언트를 모두 관리 해야 됨으로 운영 부하
-> temporal cloud`),Ji.forEach(t),It=v(He),Wl=o(He,"LI",{});var Ki=r(Wl);bt=a(Ki,`서버리스 환경에서 사용하기 어려울 수 있음
-> client에서 풀링을 사용하기 때문에 람다환경과 안맞을 수 있음`),Ki.forEach(t),He.forEach(t),ri.forEach(t),we.forEach(t),me=v(l),J=o(l,"H4",{id:!0});var Ri=r(J);Ut=a(Ri,"sqs"),Ri.forEach(t),de=v(l),C=o(l,"UL",{});var ye=r(C);ol=o(ye,"LI",{});var si=r(ol);kt=a(si,"pros:"),b=o(si,"UL",{});var El=r(b);jl=o(El,"LI",{});var Xi=r(jl);wt=a(Xi,"분산 시스템에서 메시지를 안정적으로"),Xi.forEach(t),Ht=v(El),Dl=o(El,"LI",{});var Gi=r(Dl);yt=a(Gi,"대기열 메시징에 대해 높은 확장성과 내구성"),Gi.forEach(t),Ct=v(El),Ml=o(El,"LI",{});var Vi=r(Ml);Tt=a(Vi,"완전히 관리되는 서비스 -> 인프라 부담 적음"),Vi.forEach(t),El.forEach(t),si.forEach(t),xt=v(ye),rl=o(ye,"LI",{});var ai=r(rl);qt=a(ai,"cons:"),K=o(ai,"UL",{});var Ce=r(K);Ol=o(Ce,"LI",{});var Yi=r(Ol);$t=a(Yi,"복잡한 워크프롤우 관리나 상태 추적 기능이 없음"),Yi.forEach(t),Wt=v(Ce),Sl=o(Ce,"LI",{});var Zi=r(Sl);jt=a(Zi,"메시지 처리가 순차적이지 않을 수 있으며, 중복 처리 발생 가능성(멱등성 이슈)  -> 상태 관리 어렵"),Zi.forEach(t),Ce.forEach(t),ai.forEach(t),ye.forEach(t),ne=v(l),R=o(l,"H4",{id:!0});var gi=r(R);Dt=a(gi,"kafka"),gi.forEach(t),he=v(l),T=o(l,"UL",{});var Te=r(T);sl=o(Te,"LI",{});var fi=r(sl);Mt=a(fi,"pros"),U=o(fi,"UL",{});var ml=r(U);Nl=o(ml,"LI",{});var lo=r(Nl);Ot=a(lo,"실시간 데이터를 스트리밍 처리하는데 특화"),lo.forEach(t),St=v(ml),Bl=o(ml,"LI",{});var eo=r(Bl);Nt=a(eo,"대용량 데이터 처리에 대한 높은 처리량과 성능 지원"),eo.forEach(t),Bt=v(ml),Pl=o(ml,"LI",{});var to=r(Pl);Pt=a(to,"데이터 레코드에 대한 내구성 & 장애 복구"),to.forEach(t),ml.forEach(t),fi.forEach(t),Qt=v(Te),al=o(Te,"LI",{});var ui=r(al);zt=a(ui,"cons"),X=o(ui,"UL",{});var xe=r(X);Ql=o(xe,"LI",{});var io=r(Ql);At=a(io,"설정과 운영 부담"),io.forEach(t),Ft=v(xe),zl=o(xe,"LI",{});var oo=r(zl);Jt=a(oo,"메시지 삭제 시점 관리, 파티셔닝, 복제 등 세부 설정 필요"),oo.forEach(t),xe.forEach(t),ui.forEach(t),Te.forEach(t),ce=v(l),G=o(l,"H4",{id:!0});var ro=r(G);Kt=a(ro,"step function"),ro.forEach(t),Le=v(l),x=o(l,"UL",{});var qe=r(x);fl=o(qe,"LI",{});var _i=r(fl);Rt=a(_i,"pros"),k=o(_i,"UL",{});var dl=r(k);Al=o(dl,"LI",{});var so=r(Al);Xt=a(so,"복잡한 업무 프로세스를 모델링 & 관리"),so.forEach(t),Gt=v(dl),Fl=o(dl,"LI",{});var ao=r(Fl);Vt=a(ao,"aws와 통합이 잘 되어 있음"),ao.forEach(t),Yt=v(dl),Jl=o(dl,"LI",{});var fo=r(Jl);Zt=a(fo,"인프라 관리 부담이 적음"),fo.forEach(t),dl.forEach(t),_i.forEach(t),gt=v(qe),ul=o(qe,"LI",{});var vi=r(ul);li=a(vi,"cons"),V=o(vi,"UL",{});var $e=r(V);Kl=o($e,"LI",{});var uo=r(Kl);ei=a(uo,"비용 부담"),uo.forEach(t),ti=v($e),Rl=o($e,"LI",{});var _o=r(Rl);ii=a(_o,"복잡한 애플리케이션에 적합하지 않음 -> json 기반 시스템은 복잡한 로직을 효율적으로 표현하기 어려움"),_o.forEach(t),$e.forEach(t),vi.forEach(t),qe.forEach(t),this.h()},h(){m(p,"id","what-is-temporal"),m(q,"id","more-detail"),m($,"id","temporal-client"),m(W,"id","temporal-server"),m(j,"id","who-use-temporal-usecase"),m(M,"id","hashicorp"),m(O,"id","uber"),m(S,"id","netflix"),m(N,"id","coinbase"),m(B,"id","stripe"),m(P,"id","checker"),m(Q,"id","yum"),m(z,"id","temporal-vs-others"),m(A,"id","temporal"),m(J,"id","sqs"),m(R,"id","kafka"),m(G,"id","step-function")},m(l,f){u(l,p,f),e(p,h),u(l,c,f),u(l,d,f),e(d,E),e(E,n),e(n,Z),e(E,We),e(E,nl),e(nl,Xl),e(d,je),e(d,hl),e(hl,De),e(d,Me),e(d,cl),e(cl,Oe),u(l,Gl,f),u(l,q,f),e(q,Se),u(l,Vl,f),u(l,$,f),e($,Ne),u(l,Yl,f),u(l,g,f),e(g,Ll),e(Ll,Be),u(l,Zl,f),u(l,W,f),e(W,Pe),u(l,gl,f),u(l,w,f),e(w,Il),e(Il,Qe),e(w,ze),e(w,bl),e(bl,Ae),u(l,le,f),u(l,j,f),e(j,Fe),u(l,ee,f),u(l,ll,f),e(ll,D),e(D,Je),e(D,Ul),e(Ul,Ke),e(D,Re),u(l,te,f),u(l,M,f),e(M,Xe),u(l,ie,f),u(l,el,f),e(el,L),e(L,kl),e(kl,Ge),e(L,Ve),e(L,wl),e(wl,Ye),e(L,Ze),e(L,Hl),e(Hl,ge),u(l,oe,f),u(l,O,f),e(O,lt),u(l,re,f),u(l,S,f),e(S,et),u(l,se,f),u(l,N,f),e(N,tt),u(l,ae,f),u(l,B,f),e(B,it),u(l,fe,f),u(l,P,f),e(P,ot),u(l,ue,f),u(l,H,f),e(H,yl),e(yl,rt),e(H,st),e(H,Cl),e(Cl,at),u(l,_e,f),u(l,Q,f),e(Q,ft),u(l,ve,f),u(l,z,f),e(z,ut),u(l,pe,f),u(l,A,f),e(A,_t),u(l,Ee,f),u(l,y,f),e(y,tl),e(tl,vt),e(tl,I),e(I,Tl),e(Tl,pt),e(I,Et),e(I,xl),e(xl,mt),e(I,dt),e(I,ql),e(ql,nt),e(y,ht),e(y,il),e(il,ct),e(il,F),e(F,$l),e($l,Lt),e(F,It),e(F,Wl),e(Wl,bt),u(l,me,f),u(l,J,f),e(J,Ut),u(l,de,f),u(l,C,f),e(C,ol),e(ol,kt),e(ol,b),e(b,jl),e(jl,wt),e(b,Ht),e(b,Dl),e(Dl,yt),e(b,Ct),e(b,Ml),e(Ml,Tt),e(C,xt),e(C,rl),e(rl,qt),e(rl,K),e(K,Ol),e(Ol,$t),e(K,Wt),e(K,Sl),e(Sl,jt),u(l,ne,f),u(l,R,f),e(R,Dt),u(l,he,f),u(l,T,f),e(T,sl),e(sl,Mt),e(sl,U),e(U,Nl),e(Nl,Ot),e(U,St),e(U,Bl),e(Bl,Nt),e(U,Bt),e(U,Pl),e(Pl,Pt),e(T,Qt),e(T,al),e(al,zt),e(al,X),e(X,Ql),e(Ql,At),e(X,Ft),e(X,zl),e(zl,Jt),u(l,ce,f),u(l,G,f),e(G,Kt),u(l,Le,f),u(l,x,f),e(x,fl),e(fl,Rt),e(fl,k),e(k,Al),e(Al,Xt),e(k,Gt),e(k,Fl),e(Fl,Vt),e(k,Yt),e(k,Jl),e(Jl,Zt),e(x,gt),e(x,ul),e(ul,li),e(ul,V),e(V,Kl),e(Kl,ei),e(V,ti),e(V,Rl),e(Rl,ii)},p:Ho,d(l){l&&t(p),l&&t(c),l&&t(d),l&&t(Gl),l&&t(q),l&&t(Vl),l&&t($),l&&t(Yl),l&&t(g),l&&t(Zl),l&&t(W),l&&t(gl),l&&t(w),l&&t(le),l&&t(j),l&&t(ee),l&&t(ll),l&&t(te),l&&t(M),l&&t(ie),l&&t(el),l&&t(oe),l&&t(O),l&&t(re),l&&t(S),l&&t(se),l&&t(N),l&&t(ae),l&&t(B),l&&t(fe),l&&t(P),l&&t(ue),l&&t(H),l&&t(_e),l&&t(Q),l&&t(ve),l&&t(z),l&&t(pe),l&&t(A),l&&t(Ee),l&&t(y),l&&t(me),l&&t(J),l&&t(de),l&&t(C),l&&t(ne),l&&t(R),l&&t(he),l&&t(T),l&&t(ce),l&&t(G),l&&t(Le),l&&t(x)}}}function To(Y){let p,h;const c=[Y[0],Eo];let d={$$slots:{default:[Co]},$$scope:{ctx:Y}};for(let E=0;E<c.length;E+=1)d=pi(d,c[E]);return p=new yo({props:d}),{c(){co(p.$$.fragment)},l(E){Lo(p.$$.fragment,E)},m(E,n){Io(p,E,n),h=!0},p(E,[n]){const Z=n&1?bo(c,[n&1&&vo(E[0]),n&0&&vo(Eo)]):{};n&2&&(Z.$$scope={dirty:n,ctx:E}),p.$set(Z)},i(E){h||(Uo(p.$$.fragment,E),h=!0)},o(E){ko(p.$$.fragment,E),h=!1},d(E){wo(p,E)}}}const Eo={title:"Temporal study",description:"temporal에 대해 알아보자 01",date:"2023-07-03",categories:["cadence","temporal"],published:!0};function xo(Y,p,h){return Y.$$set=c=>{h(0,p=pi(pi({},p),po(c)))},p=po(p),[p]}class Wo extends mo{constructor(p){super(),no(this,p,xo,To,ho,{})}}export{Wo as default,Eo as metadata};