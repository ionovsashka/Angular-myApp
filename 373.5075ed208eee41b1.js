"use strict";(self.webpackChunkfindteam=self.webpackChunkfindteam||[]).push([[373],{373:(j,m,a)=>{a.r(m),a.d(m,{AuthModule:()=>L});var l=a(9808),c=a(8845),d=a(4466),t=a(1223);let _=(()=>{class u{constructor(){}ngOnInit(){}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-about-us"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"about-us works!"),t.qZA())}}),u})();var r=a(2382),g=a(629);function f(u,n){if(1&u&&(t.TgZ(0,"p",8),t._uU(1),t.qZA()),2&u){const e=t.oxw();t.xp6(1),t.Oqu(e.error)}}let h=(()=>{class u{constructor(e,o){this.router=e,this.authService=o,this.accName="",this.password="",this.error="",this.token="-"}ngOnInit(){this.form=new r.cw({accountName:new r.NI("",[r.kI.required]),password:new r.NI(null,[r.kI.required])})}login(){this.form.invalid||this.authService.getUsers().subscribe(e=>{let o=e.find(i=>i.accName==this.accName);if(!o||o.password!=this.password)return this.error="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c";{this.submitted=!1,this.form.reset(),this.router.navigate(["/"]);let i="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789-";for(;this.token.length<30;)this.token+=i[Math.floor(Math.random()*i.length)];this.tokenTime=new Date((new Date).getTime()+36e5),localStorage.setItem("fb-token",this.token),localStorage.setItem("fb-token-time",this.tokenTime)}})}}return u.\u0275fac=function(e){return new(e||u)(t.Y36(c.F0),t.Y36(g.e))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-login"]],decls:15,vars:8,consts:[[1,"form__container"],[1,"main__form","form",3,"formGroup","ngSubmit"],[1,"form__title"],[1,"form__control"],["type","text","formControlName","accountName",1,"form__email",3,"ngModel","ngModelChange"],["type","password","formControlName","password",1,"form__password",3,"ngModel","ngModelChange"],["class","form__error",4,"ngIf"],["type","submit",1,"form__button"],[1,"form__error"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return o.login()}),t.TgZ(2,"h2",2),t._uU(3,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),t.qZA(),t.TgZ(4,"div",3)(5,"label"),t._uU(6,"\u0418\u043c\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"),t.qZA(),t.TgZ(7,"input",4),t.NdJ("ngModelChange",function(s){return o.accName=s}),t.qZA()(),t.TgZ(8,"div",3)(9,"label"),t._uU(10,"\u041f\u0430\u0440\u043e\u043b\u044c"),t.qZA(),t.TgZ(11,"input",5),t.NdJ("ngModelChange",function(s){return o.password=s}),t.qZA()(),t.YNc(12,f,2,1,"p",6),t.TgZ(13,"button",7),t._uU(14,"\u0412\u043e\u0439\u0442\u0438"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",o.form),t.xp6(6),t.ekj("submitted",o.submitted),t.Q6J("ngModel",o.accName),t.xp6(4),t.ekj("submitted",o.submitted),t.Q6J("ngModel",o.password),t.xp6(1),t.Q6J("ngIf",o.error))},dependencies:[l.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".form[_ngcontent-%COMP%]{width:400px;display:flex;flex-direction:column}.form__title[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:2.5rem;font-weight:700;margin-bottom:3rem}.form__control[_ngcontent-%COMP%]{margin-bottom:1rem}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#fff;background-color:transparent;border-bottom:2px solid white;padding-bottom:5px;width:100%;height:2.5rem;font-size:1.125rem;line-height:100%;margin-bottom:.625rem}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;display:inline-block;margin-bottom:.625rem}.form__error[_ngcontent-%COMP%]{margin-bottom:1rem}.form__button[_ngcontent-%COMP%]{background-color:transparent;border:1px solid white;color:#fff;border-radius:5px;width:10rem;height:3rem;margin:0 auto;transition:.3s all ease}.form__button[_ngcontent-%COMP%]:hover{background-color:#fff;color:green}"]}),u})();class p{static PasswordConfirmed(n,e){return o=>{const i=o.get(n),s=o.get(e);return s.errors&&!s.errors.confirmThePassword?null:i.value!==s.value?(s.setErrors({confirmThePassword:!0}),{confirmThePassword:!0}):(s.setErrors(null),null)}}static LoginMatch(n){return function(e){return new Promise(o=>{n.getUsers().subscribe(i=>{let s=i.find(S=>S.accName==e.value.toString());o(s?{loginMatch:!0}:null)})})}}}var C=a(4004),b=a(520);let w=(()=>{class u{constructor(e){this.http=e}create(e){return this.http.post("https://findteam-808e2-default-rtdb.firebaseio.com/users.json",e).pipe((0,C.U)(o=>Object.assign(Object.assign({},e),{id:o.name})))}}return u.\u0275fac=function(e){return new(e||u)(t.LFG(b.eN))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})();function v(u,n){1&u&&(t.TgZ(0,"small"),t._uU(1,"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t.qZA())}function Z(u,n){if(1&u&&(t.TgZ(0,"div",14),t.YNc(1,v,2,0,"small",15),t.qZA()),2&u){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.registration.get("name").errors.required)}}function x(u,n){1&u&&(t.TgZ(0,"small"),t._uU(1,"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t.qZA())}function T(u,n){if(1&u&&(t.TgZ(0,"div",14),t.YNc(1,x,2,0,"small",15),t.qZA()),2&u){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.registration.get("surname").errors.required)}}function E(u,n){1&u&&(t.TgZ(0,"small"),t._uU(1,"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t.qZA())}function B(u,n){1&u&&(t.TgZ(0,"small"),t._uU(1,"\u0414\u0430\u043d\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0443\u0436\u0435 \u0437\u0430\u043d\u044f\u0442"),t.qZA())}function A(u,n){if(1&u&&(t.TgZ(0,"div",14),t.YNc(1,E,2,0,"small",15),t.YNc(2,B,2,0,"small",15),t.qZA()),2&u){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.registration.get("accName").errors.required),t.xp6(1),t.Q6J("ngIf",e.registration.get("accName").errors.loginMatch)}}function F(u,n){1&u&&(t.TgZ(0,"small"),t._uU(1,"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t.qZA())}function N(u,n){1&u&&(t.TgZ(0,"small"),t._uU(1,"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u0443 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0438 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u0447\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443 \u0438 \u043e\u0434\u043d\u0443 \u0446\u0438\u0444\u0440\u0443. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b (a\u2013z, A\u2013Z) \u0438 \u0446\u0438\u0444\u0440\u044b"),t.qZA())}function M(u,n){if(1&u&&(t.TgZ(0,"div",14),t.YNc(1,F,2,0,"small",15),t.YNc(2,N,2,0,"small",15),t.qZA()),2&u){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.registration.get("password").errors.required),t.xp6(1),t.Q6J("ngIf",e.registration.get("password").errors.pattern)}}function U(u,n){1&u&&(t.TgZ(0,"small"),t._uU(1,"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t.qZA())}function k(u,n){if(1&u&&(t.TgZ(0,"div",14),t.YNc(1,U,2,0,"small",15),t.qZA()),2&u){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.registration.get("passwordConfirmed").errors.required)}}function y(u,n){1&u&&(t.TgZ(0,"small"),t._uU(1,"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"),t.qZA())}function D(u,n){if(1&u&&(t.TgZ(0,"div",14),t.YNc(1,y,2,0,"small",15),t.qZA()),2&u){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.registration.get("passwordConfirmed").errors.confirmThePassword)}}function q(u,n){if(1&u){const e=t.EpF();t.TgZ(0,"div")(1,"span",4),t._uU(2,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),t.qZA(),t.TgZ(3,"span",16),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.recovery="email")}),t._uU(4,"\u0423\u043a\u0430\u0437\u0430\u0442\u044c email"),t.qZA(),t._UZ(5,"input",17),t.qZA()}if(2&u){const e=t.oxw();t.xp6(5),t.ekj("submitted",e.submitted)}}function I(u,n){if(1&u){const e=t.EpF();t.TgZ(0,"div")(1,"span",4),t._uU(2,"\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0439 Email"),t.qZA(),t.TgZ(3,"span",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.recovery="tel")}),t._uU(4,"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u0435\u043b\u0435\u0444\u043e\u043d"),t.qZA(),t._UZ(5,"input",19),t.qZA()}if(2&u){const e=t.oxw();t.xp6(5),t.ekj("submitted",e.submitted)}}let O=(()=>{class u{constructor(e,o,i){this.router=e,this.users=o,this.auth=i,this.submitted=!1,this.recovery="email"}ngOnInit(){this.registration=new r.cw({name:new r.NI("",[r.kI.required]),surname:new r.NI("",[r.kI.required]),accName:new r.NI("",[r.kI.required],p.LoginMatch(this.auth)),password:new r.NI(null,[r.kI.required,r.kI.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),passwordConfirmed:new r.NI(null,[r.kI.required]),phone:new r.NI(null),email:new r.NI(null)},{validators:[p.PasswordConfirmed("password","passwordConfirmed")]})}submit(){if(this.submitted=!0,this.registration.invalid)return;const e={name:this.registration.get("name").value,surname:this.registration.get("surname").value,accName:this.registration.get("accName").value,password:this.registration.get("passwordConfirmed").value};this.users.create(e).subscribe(()=>{this.registration.reset(),this.submitted=!1,this.router.navigate(["/auth","login"])})}}return u.\u0275fac=function(e){return new(e||u)(t.Y36(c.F0),t.Y36(w),t.Y36(g.e))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-registration-base"]],decls:31,vars:20,consts:[[1,"registration"],[1,"registration__container",3,"formGroup","ngSubmit"],[1,"registration__base"],[1,"registration__title"],[1,"registration__fieldname"],["type","text","formControlName","name","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f*",1,"registration__field"],["class","registration__validation",4,"ngIf"],["type","text","formControlName","surname","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0444\u0430\u043c\u0438\u043b\u0438\u044e*",1,"registration__field"],["type","text","formControlName","accName","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",1,"registration__field"],["type","password","formControlName","password","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c*",1,"registration__field"],["type","password","formControlName","passwordConfirmed","placeholder","\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c*",1,"registration__field"],[3,"ngSwitch"],[4,"ngSwitchCase"],["type","submit",1,"registration__button"],[1,"registration__validation"],[4,"ngIf"],[1,"registration__recovery",3,"click"],["type","tel","formControlName","phone","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",1,"registration__field"],["href","",1,"registration__recovery",3,"click"],["type","email","formControlName","email","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email",1,"registration__field"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(2,"div",2)(3,"h2",3),t._uU(4,"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),t.qZA(),t.TgZ(5,"p",4),t._uU(6,"\u0418\u043c\u044f"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,Z,2,1,"div",6),t.TgZ(9,"p",4),t._uU(10,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,T,2,1,"div",6),t.TgZ(13,"p",4),t._uU(14,"\u041b\u043e\u0433\u0438\u043d"),t.qZA(),t._UZ(15,"input",8),t.YNc(16,A,3,2,"div",6),t.TgZ(17,"p",4),t._uU(18,"\u041f\u0430\u0440\u043e\u043b\u044c"),t.qZA(),t._UZ(19,"input",9),t.YNc(20,M,3,2,"div",6),t.TgZ(21,"p",4),t._uU(22,"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),t.qZA(),t._UZ(23,"input",10),t.YNc(24,k,2,1,"div",6),t.YNc(25,D,2,1,"div",6),t.TgZ(26,"div",11),t.YNc(27,q,6,2,"div",12),t.YNc(28,I,6,2,"div",12),t.qZA()(),t.TgZ(29,"button",13),t._uU(30,"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",o.registration),t.xp6(6),t.ekj("submitted",o.submitted),t.xp6(1),t.Q6J("ngIf",o.registration.get("name").invalid&&o.submitted),t.xp6(3),t.ekj("submitted",o.submitted),t.xp6(1),t.Q6J("ngIf",o.registration.get("surname").invalid&&o.submitted),t.xp6(3),t.ekj("submitted",o.submitted),t.xp6(1),t.Q6J("ngIf",o.registration.get("accName").invalid&&o.submitted),t.xp6(3),t.ekj("submitted",o.submitted),t.xp6(1),t.Q6J("ngIf",o.registration.get("password").invalid&&o.registration.get("password").touched),t.xp6(3),t.ekj("submitted",o.submitted),t.xp6(1),t.Q6J("ngIf",o.registration.get("passwordConfirmed").errors&&o.submitted),t.xp6(1),t.Q6J("ngIf",o.registration.get("passwordConfirmed").errors&&o.registration.get("passwordConfirmed").touched),t.xp6(1),t.Q6J("ngSwitch",o.recovery),t.xp6(1),t.Q6J("ngSwitchCase","tel"),t.xp6(1),t.Q6J("ngSwitchCase","email"))},dependencies:[l.O5,l.RF,l.n9,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".registration__title[_ngcontent-%COMP%]{color:#fff;font-size:36px;margin:0 0 15px}.registration__fieldname[_ngcontent-%COMP%]{color:#fff}.registration__field[_ngcontent-%COMP%]{margin-top:.5rem;padding:.5rem 0;position:relative;width:100%;height:25px;background-color:transparent;border-bottom:2px solid white;margin-bottom:20px;color:#fff;font-size:16px}.registration__field.ng-invalid.submitted[_ngcontent-%COMP%]{border-bottom:2px solid black}.registration__field[_ngcontent-%COMP%]::placeholder{color:#fff;font-style:italic;opacity:.8}.registration__validation[_ngcontent-%COMP%]{margin:-10px 0 10px}.registration__recovery[_ngcontent-%COMP%]{color:#fff;cursor:pointer;position:absolute;right:0}.registration__button[_ngcontent-%COMP%]{color:#fff;background-color:transparent;border:1px solid white;font-size:16px;padding:10px;position:absolute;right:0;transition:.3s all ease}.registration__button[_ngcontent-%COMP%]:hover{background-color:#fff;color:green}"]}),u})();const P=function(){return["/auth","login"]},Y=function(){return["/auth","registrationbase"]},Q=function(){return["/auth","about"]},R=[{path:"",component:(()=>{class u{constructor(){}ngOnInit(){}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-auth-layout"]],decls:3,vars:0,consts:[[1,"auth"],[1,"auth__container"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[c.lC],styles:[".auth[_ngcontent-%COMP%]{position:relative;width:100vw;height:100vh;background-color:green}.auth__container[_ngcontent-%COMP%]{width:400px;position:absolute;top:45%;right:20%;transform:translateY(-50%)}"]}),u})(),children:[{path:"",redirectTo:"/auth/welcome",pathMatch:"full"},{path:"about",component:_},{path:"login",component:h},{path:"registrationbase",component:O},{path:"welcome",component:(()=>{class u{constructor(){}ngOnInit(){}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-welcome"]],decls:12,vars:6,consts:[[1,"welcome"],[1,"welcome__logo"],[1,"welcome__title"],["type","button",1,"welcome__signin",3,"routerLink"],["type","button",1,"welcome__signup",3,"routerLink"],[1,"welcome__about",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"findTeam"),t.qZA(),t.TgZ(3,"p",2),t._uU(4,"\u041d\u0430\u0439\u0434\u0438 \u0441\u0432\u043e\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443!"),t.qZA(),t.TgZ(5,"button",3),t._uU(6,"\u0412\u043e\u0439\u0442\u0438"),t.qZA(),t.TgZ(7,"button",4),t._uU(8,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"button",5),t._uU(11,"\u041e \u043d\u0430\u0441"),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(3,P)),t.xp6(2),t.Q6J("routerLink",t.DdM(4,Y)),t.xp6(3),t.Q6J("routerLink",t.DdM(5,Q)))},dependencies:[c.rH],styles:[".welcome__logo[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:4rem;font-weight:700;margin-bottom:1rem}.welcome__title[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:1.6rem;margin-bottom:1.5rem}.welcome__signin[_ngcontent-%COMP%]{position:absolute;width:45%;margin-right:5%;left:0;color:#fff;background-color:transparent;height:30px;border:2px solid white}.welcome__signin[_ngcontent-%COMP%]:hover{transition:all .3s ease;background-color:#fff;color:green}.welcome__signup[_ngcontent-%COMP%]{position:absolute;width:45%;right:0;color:#fff;background-color:transparent;height:30px;border:2px solid white}.welcome__signup[_ngcontent-%COMP%]:hover{transition:all .3s ease;background-color:#fff;color:green}.welcome__about[_ngcontent-%COMP%]{margin-top:2.5rem;position:absolute;width:100%;color:#fff;background-color:transparent;height:30px;border:2px solid white}.welcome__about[_ngcontent-%COMP%]:hover{transition:all .3s ease;background-color:#fff;color:green}"]}),u})()}]}];let L=(()=>{class u{}return u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[c.Bz.forChild(R),l.ez,d.m]}),u})()}}]);