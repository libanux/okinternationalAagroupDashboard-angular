"use strict";(self.webpackChunkflexy=self.webpackChunkflexy||[]).push([[520],{6520:(st,C,s)=>{s.r(C),s.d(C,{AuthenticationModule:()=>at});var m=s(1236),_=s(1368),G=s(1560),$=s(2080),p=s(7536),h=s(3840),c=s(7816),o=s(6504),A=s(7528),x=s(3372),d=s(6088),t=s(4496);const O=()=>["/dashboards/dashboard1"];let y=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-error"]],standalone:!0,features:[t.UHJ],decls:11,vars:2,consts:[[1,"blank-layout-container","justify-content-center"],[1,"row"],[1,"col-12","text-center","error-card"],[1,"f-s-24","m-b-20","f-w-500"],[1,"f-s-15","m-b-30","f-w-400"],["mat-flat-button","","color","primary",3,"routerLink"]],template:function(i,r){1&i&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t.OEk(4,"404"),t.C$Y(),t.I0R(5,"h2",3),t.OEk(6,"Page Not Found !"),t.C$Y(),t.I0R(7,"p",4),t.OEk(8," You seem to be trying to find this way to home "),t.C$Y(),t.I0R(9,"a",5),t.OEk(10,"Back to Home"),t.C$Y()()()()),2&i&&(t.yG2(9),t.E7m("routerLink",t.q4q(1,O)))},dependencies:[m.qQ,m.ER,d.y,c.EB],encapsulation:2})}return e})();const q=()=>["/"];let v=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-maintenance"]],standalone:!0,features:[t.UHJ],decls:10,vars:2,consts:[[1,"blank-layout-container","justify-content-center"],[1,"row"],[1,"col-12","text-center"],["src","/assets/images/backgrounds/maintenance.svg","alt","error-bg"],[1,"auth-title","f-w-600"],[1,"f-s-20","f-w-600","m-b-30"],["mat-flat-button","","color","primary",3,"routerLink"]],template:function(i,r){1&i&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2),t.wR5(3,"img",3),t.I0R(4,"h2",4),t.OEk(5,"Maintenance Mode!!!"),t.C$Y(),t.I0R(6,"h6",5),t.OEk(7,"Website is Under Construction. Check back later!"),t.C$Y(),t.I0R(8,"a",6),t.OEk(9,"Go back to Home"),t.C$Y()()()()),2&i&&(t.yG2(8),t.E7m("routerLink",t.q4q(1,q)))},dependencies:[m.qQ,m.ER,d.y,c.EB],encapsulation:2})}return e})();var u=s(1564),l=s(4060);const w=()=>["/"];function L(e,a){1&e&&(t.I0R(0,"a",4),t.wR5(1,"img",19),t.C$Y()),2&e&&t.E7m("routerLink",t.q4q(1,w))}function T(e,a){1&e&&(t.I0R(0,"a",4),t.wR5(1,"img",20),t.C$Y()),2&e&&t.E7m("routerLink",t.q4q(1,w))}function j(e,a){1&e&&(t.I0R(0,"div",23),t.OEk(1," Email is required. "),t.C$Y())}function F(e,a){if(1&e&&(t.I0R(0,"mat-hint",21),t.yuY(1,j,2,0,"div",22),t.C$Y()),2&e){const n=t.GaO();t.yG2(),t.C0Y(1,n.f.email.errors&&n.f.email.errors.required?1:-1)}}const W=()=>["/authentication/login"];let R=(()=>{class e{constructor(n,i){this.settings=n,this.router=i,this.options=this.settings.getOptions(),this.form=new o.WC({email:new o.Ku("",[o.AQ.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboards/dashboard1"])}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(u.Y),t.GI1(m.E5))};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-forgot"]],standalone:!0,features:[t.UHJ],decls:26,vars:7,consts:[[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-7","col-xl-8","bg-gredient","p-0"],[1,"p-24","h-100"],[3,"routerLink"],[1,"align-items-center","justify-content-center","img-height","d-none","d-lg-flex"],["src","/assets/images/backgrounds/login-bg.svg","alt","login",2,"width","100%","max-width","600px"],[1,"col-lg-5","col-xl-4","p-0"],[1,"p-32","d-flex","align-items-start","align-items-lg-center","justify-content-center","h-100"],[1,"row","justify-content-center","w-100"],[1,"col-lg-9","max-width-form"],[1,"f-w-700","f-s-24","m-0"],[1,"f-s-16","d-block","mat-body-1","m-t-16"],[1,"m-t-30","p-t-20",3,"formGroup","ngSubmit"],["appearance","outline","color","primary",1,"w-100"],["matInput","","type","email","formControlName","email"],["class","m-b-16 error-msg"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],["mat-stroked-button","","color","primary",1,"w-100","m-t-8",3,"routerLink"],["src","./assets/images/logos/logo-dark.svg","alt","logo",1,"align-middle","m-2"],["src","./assets/images/logos/logo-light.svg","alt","logo",1,"align-middle","m-2"],[1,"m-b-16","error-msg"],["class","text-error"],[1,"text-error"]],template:function(i,r){1&i&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.yuY(4,L,2,2,"a",4)(5,T,2,2,"a",4),t.I0R(6,"div",5),t.wR5(7,"img",6),t.C$Y()()(),t.I0R(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10)(12,"h4",11),t.OEk(13,"Forgot your password?"),t.C$Y(),t.I0R(14,"span",12),t.OEk(15,"Please enter the email address associated with your account and We will email you a link to reset your password."),t.C$Y(),t.I0R(16,"form",13),t.qCj("ngSubmit",function(){return r.submit()}),t.I0R(17,"mat-form-field",14)(18,"mat-label"),t.OEk(19,"Email Adddress"),t.C$Y(),t.wR5(20,"input",15),t.yuY(21,F,2,1,"mat-hint",16),t.C$Y(),t.I0R(22,"button",17),t.OEk(23," Forgot Password "),t.C$Y(),t.I0R(24,"a",18),t.OEk(25," Back to Login "),t.C$Y()()()()()()()()),2&i&&(t.yG2(4),t.C0Y(4,"light"===r.options.theme?4:-1),t.yG2(),t.C0Y(5,"dark"===r.options.theme?5:-1),t.yG2(11),t.E7m("formGroup",r.form),t.yG2(5),t.C0Y(21,r.f.email.touched&&r.f.email.invalid?21:-1),t.yG2(),t.E7m("disabled",!r.form.valid),t.yG2(2),t.E7m("routerLink",t.q4q(6,W)))},dependencies:[m.qQ,m.ER,d.y,l.Up,l.w5,l.MX,p.yi,c.EB,c.Gw,o.y,o.sz,o.ot,o.ue,o.u,o.sl,o.uW,o.Wo],encapsulation:2})}return e})();var f=s(4736),Q=s(5359);function N(e,a){1&e&&(t.I0R(0,"div",20),t.OEk(1,"Name is required."),t.C$Y())}function P(e,a){1&e&&(t.I0R(0,"div",20),t.OEk(1,"Name should be 6 character."),t.C$Y())}function S(e,a){if(1&e&&(t.I0R(0,"mat-hint",18),t.yuY(1,N,2,0,"div",19)(2,P,2,0,"div",19),t.C$Y()),2&e){const n=t.GaO();t.yG2(),t.C0Y(1,n.f.uname.errors&&n.f.uname.errors.required?1:-1),t.yG2(),t.C0Y(2,n.f.uname.errors&&n.f.uname.errors.minlength?2:-1)}}function U(e,a){1&e&&(t.I0R(0,"div",20),t.OEk(1,"Password is required."),t.C$Y())}function M(e,a){if(1&e&&(t.I0R(0,"mat-hint",18),t.yuY(1,U,2,0,"div",19),t.C$Y()),2&e){const n=t.GaO();t.yG2(),t.C0Y(1,n.f.password.errors&&n.f.password.errors.required?1:-1)}}let Y=(()=>{class e{get f(){return this.form.controls}constructor(n,i,r){this.authserivece=n,this.settings=i,this.router=r,this.options=this.settings.getOptions(),this.form=new o.WC({uname:new o.Ku("",[o.AQ.required,o.AQ.minLength(6)]),password:new o.Ku("",[o.AQ.required])}),this.loading=!1}login(){this.router.navigate(["/apps/products"]).then(()=>{window.scrollTo(0,0)})}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(Q.o),t.GI1(u.Y),t.GI1(m.E5))};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-login"]],standalone:!0,features:[t.UHJ],decls:27,vars:4,consts:[[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-7","col-xl-8","p-0"],[1,"image-container"],["src","/assets/images/logos/signIn_BG.png","alt","login",2,"width","100%","max-width","600px"],[1,"col-lg-5","col-xl-4","p-0"],[1,"p-32","d-flex","align-items-start","align-items-lg-center","justify-content-center","h-100"],[1,"row","justify-content-center","w-100"],[1,"col-lg-9","max-width-form"],[1,"f-w-700","f-s-24","m-0"],[1,"m-t-30",3,"formGroup","ngSubmit"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","uname"],["class","m-b-16 error-msg"],["matInput","","type","password","formControlName","password"],[1,"d-flex","align-items-center","m-b-12"],["color","primary"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],[1,"m-b-16","error-msg"],["class","text-error"],[1,"text-error"]],template:function(i,r){1&i&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.wR5(4,"img",4),t.C$Y()(),t.I0R(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"h4",9),t.OEk(10,"Welcome to OK International"),t.C$Y(),t.I0R(11,"form",10),t.qCj("ngSubmit",function(){return r.login()}),t.I0R(12,"mat-form-field",11)(13,"mat-label"),t.OEk(14,"Username"),t.C$Y(),t.wR5(15,"input",12),t.yuY(16,S,3,2,"mat-hint",13),t.C$Y(),t.I0R(17,"mat-form-field",11)(18,"mat-label"),t.OEk(19,"Password"),t.C$Y(),t.wR5(20,"input",14),t.yuY(21,M,2,1,"mat-hint",13),t.C$Y(),t.I0R(22,"div",15)(23,"mat-checkbox",16),t.OEk(24,"Remember this Device"),t.C$Y()(),t.I0R(25,"button",17),t.OEk(26,"Sign In"),t.C$Y()()()()()()()()),2&i&&(t.yG2(11),t.E7m("formGroup",r.form),t.yG2(5),t.C0Y(16,r.f.uname.touched&&r.f.uname.invalid?16:-1),t.yG2(5),t.C0Y(21,r.f.password.touched&&r.f.password.invalid?21:-1),t.yG2(4),t.E7m("disabled",!r.form.valid))},dependencies:[m.qQ,d.y,h.WK,l.Up,l.w5,l.MX,p.yi,c.Gw,o.y,o.sz,o.ot,o.ue,o.u,o.sl,o.uW,o.Wo,f._],encapsulation:2})}return e})();const b=()=>["/"];function K(e,a){1&e&&(t.I0R(0,"a",4),t.wR5(1,"img",31),t.C$Y()),2&e&&t.E7m("routerLink",t.q4q(1,b))}function H(e,a){1&e&&(t.I0R(0,"a",4),t.wR5(1,"img",32),t.C$Y()),2&e&&t.E7m("routerLink",t.q4q(1,b))}function J(e,a){1&e&&(t.I0R(0,"div",35),t.OEk(1," Name is required. "),t.C$Y())}function B(e,a){1&e&&(t.I0R(0,"div",35),t.OEk(1," Name should be 6 character. "),t.C$Y())}function X(e,a){if(1&e&&(t.I0R(0,"mat-hint",33),t.yuY(1,J,2,0,"div",34)(2,B,2,0,"div",34),t.C$Y()),2&e){const n=t.GaO();t.yG2(),t.C0Y(1,n.f.uname.errors&&n.f.uname.errors.required?1:-1),t.yG2(),t.C0Y(2,n.f.uname.errors&&n.f.uname.errors.minlength?2:-1)}}function z(e,a){1&e&&(t.I0R(0,"div",35),t.OEk(1," Email is required. "),t.C$Y())}function D(e,a){if(1&e&&(t.I0R(0,"mat-hint",33),t.yuY(1,z,2,0,"div",34),t.C$Y()),2&e){const n=t.GaO();t.yG2(),t.C0Y(1,n.f.email.errors&&n.f.email.errors.required?1:-1)}}function V(e,a){1&e&&(t.I0R(0,"div",35),t.OEk(1," Password is required. "),t.C$Y())}function Z(e,a){if(1&e&&(t.I0R(0,"mat-hint",33),t.yuY(1,V,2,0,"div",34),t.C$Y()),2&e){const n=t.GaO();t.yG2(),t.C0Y(1,n.f.password.errors&&n.f.password.errors.required?1:-1)}}const tt=()=>["/authentication/login"];let I=(()=>{class e{constructor(n,i){this.settings=n,this.router=i,this.options=this.settings.getOptions(),this.form=new o.WC({uname:new o.Ku("",[o.AQ.required,o.AQ.minLength(6)]),email:new o.Ku("",[o.AQ.required]),password:new o.Ku("",[o.AQ.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboards/dashboard1"])}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(u.Y),t.GI1(m.E5))};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-register"]],standalone:!0,features:[t.UHJ],decls:54,vars:9,consts:[[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-7","col-xl-8","bg-gredient","p-0"],[1,"p-24","h-100"],[3,"routerLink"],[1,"align-items-center","justify-content-center","img-height","d-none","d-lg-flex"],["src","/assets/images/backgrounds/login-bg.svg","alt","login",2,"width","100%","max-width","600px"],[1,"col-lg-5","col-xl-4","p-0"],[1,"p-32","d-flex","align-items-start","align-items-lg-center","justify-content-center","h-100"],[1,"row","justify-content-center","w-100"],[1,"col-lg-9","max-width-form"],[1,"f-w-700","f-s-24","m-0"],[1,"d-block","f-w-500","d-block","m-t-10"],[1,"text-decoration-none","text-accent","f-w-500","f-s-14",3,"routerLink"],[1,"m-t-30",3,"formGroup","ngSubmit"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","uname"],["class","m-b-16 error-msg"],["matInput","","type","email","formControlName","email"],["matInput","","type","password","formControlName","password"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],[1,"or-border","m-t-30"],[1,"row","m-t-24"],[1,"col-12","m-b-24"],["mat-stroked-button","",1,"w-100"],[1,"d-flex","align-items-center","gap-6"],["name","github",1,"icon-18"],[1,"col-12","col-sm-6"],["name","facebook",1,"icon-18","text-primary"],["mat-stroked-button","",1,"w-100","d-flex","align-items-center"],["name","twitter",1,"icon-18","text-accent"],["src","./assets/images/logos/logo-dark.svg","alt","logo",1,"align-middle","m-2"],["src","./assets/images/logos/logo-light.svg","alt","logo",1,"align-middle","m-2"],[1,"m-b-16","error-msg"],["class","text-error"],[1,"text-error"]],template:function(i,r){1&i&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.yuY(4,K,2,2,"a",4)(5,H,2,2,"a",4),t.I0R(6,"div",5),t.wR5(7,"img",6),t.C$Y()()(),t.I0R(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10)(12,"h4",11),t.OEk(13,"Welcome to Flexy"),t.C$Y(),t.I0R(14,"span",12),t.OEk(15,"Already have an Account? "),t.I0R(16,"a",13),t.OEk(17," Sign In"),t.C$Y()(),t.I0R(18,"form",14),t.qCj("ngSubmit",function(){return r.submit()}),t.I0R(19,"mat-form-field",15)(20,"mat-label"),t.OEk(21,"Name"),t.C$Y(),t.wR5(22,"input",16),t.yuY(23,X,3,2,"mat-hint",17),t.C$Y(),t.I0R(24,"mat-form-field",15)(25,"mat-label"),t.OEk(26,"Email Address"),t.C$Y(),t.wR5(27,"input",18),t.yuY(28,D,2,1,"mat-hint",17),t.C$Y(),t.I0R(29,"mat-form-field",15)(30,"mat-label"),t.OEk(31,"Password"),t.C$Y(),t.wR5(32,"input",19),t.yuY(33,Z,2,1,"mat-hint",17),t.C$Y(),t.I0R(34,"button",20),t.OEk(35," Sign Up "),t.C$Y()(),t.I0R(36,"div",21),t.OEk(37,"or sign up with"),t.C$Y(),t.I0R(38,"div",22)(39,"div",23)(40,"button",24)(41,"div",25),t.wR5(42,"i-feather",26),t.OEk(43," Github "),t.C$Y()()(),t.I0R(44,"div",27)(45,"button",24)(46,"div",25),t.wR5(47,"i-feather",28),t.OEk(48," Facebook "),t.C$Y()()(),t.I0R(49,"div",27)(50,"button",29)(51,"div",25),t.wR5(52,"i-feather",30),t.OEk(53," Twitter "),t.C$Y()()()()()()()()()()),2&i&&(t.yG2(4),t.C0Y(4,"light"===r.options.theme?4:-1),t.yG2(),t.C0Y(5,"dark"===r.options.theme?5:-1),t.yG2(11),t.E7m("routerLink",t.q4q(8,tt)),t.yG2(2),t.E7m("formGroup",r.form),t.yG2(5),t.C0Y(23,r.f.uname.touched&&r.f.uname.invalid?23:-1),t.yG2(5),t.C0Y(28,r.f.email.touched&&r.f.email.invalid?28:-1),t.yG2(5),t.C0Y(33,r.f.password.touched&&r.f.password.invalid?33:-1),t.yG2(),t.E7m("disabled",!r.form.valid))},dependencies:[m.qQ,m.ER,d.y,l.Up,l.w5,l.MX,p.yi,c.Gw,o.y,o.sz,o.ot,o.ue,o.u,o.sl,o.uW,o.Wo,f._,f.E],encapsulation:2})}return e})();const k=()=>["/"];function et(e,a){1&e&&(t.I0R(0,"a",4),t.wR5(1,"img",19),t.C$Y()),2&e&&t.E7m("routerLink",t.q4q(1,k))}function ot(e,a){1&e&&(t.I0R(0,"a",4),t.wR5(1,"img",20),t.C$Y()),2&e&&t.E7m("routerLink",t.q4q(1,k))}function nt(e,a){1&e&&(t.I0R(0,"div",23),t.OEk(1," Email is required. "),t.C$Y())}function it(e,a){if(1&e&&(t.I0R(0,"mat-hint",21),t.yuY(1,nt,2,0,"div",22),t.C$Y()),2&e){const n=t.GaO();t.yG2(),t.C0Y(1,n.f.email.errors&&n.f.email.errors.required?1:-1)}}let E=(()=>{class e{constructor(n,i){this.settings=n,this.router=i,this.options=this.settings.getOptions(),this.form=new o.WC({email:new o.Ku("",[o.AQ.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboards/dashboard1"])}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(u.Y),t.GI1(m.E5))};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-lockscreen"]],standalone:!0,features:[t.UHJ],decls:24,vars:5,consts:[[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-7","col-xl-8","bg-gredient","p-0"],[1,"p-24","h-100"],[3,"routerLink"],[1,"align-items-center","justify-content-center","img-height","d-none","d-lg-flex"],["src","/assets/images/backgrounds/login-bg.svg","alt","login",2,"width","100%","max-width","600px"],[1,"col-lg-5","col-xl-4","p-0"],[1,"p-32","d-flex","align-items-start","align-items-lg-center","justify-content-center","h-100"],[1,"row","justify-content-center","w-100"],[1,"col-lg-9","max-width-form"],[1,"text-center"],["src","assets/images/profile/user-1.jpg","width","80",1,"rounded-circle"],[1,"f-w-500","f-s-20","m-0","m-t-10"],[1,"m-t-30","p-t-20",3,"formGroup","ngSubmit"],["appearance","outline","color","primary",1,"w-100"],["matInput","","type","email","formControlName","email"],["class","m-b-16 error-msg"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],["src","./assets/images/logos/logo-dark.svg","alt","logo",1,"align-middle","m-2"],["src","./assets/images/logos/logo-light.svg","alt","logo",1,"align-middle","m-2"],[1,"m-b-16","error-msg"],["class","text-error"],[1,"text-error"]],template:function(i,r){1&i&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.yuY(4,et,2,2,"a",4)(5,ot,2,2,"a",4),t.I0R(6,"div",5),t.wR5(7,"img",6),t.C$Y()()(),t.I0R(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10)(12,"div",11),t.wR5(13,"img",12),t.I0R(14,"h4",13),t.OEk(15,"Julia Roberts"),t.C$Y()(),t.I0R(16,"form",14),t.qCj("ngSubmit",function(){return r.submit()}),t.I0R(17,"mat-form-field",15)(18,"mat-label"),t.OEk(19,"Email Adddress"),t.C$Y(),t.wR5(20,"input",16),t.yuY(21,it,2,1,"mat-hint",17),t.C$Y(),t.I0R(22,"button",18),t.OEk(23," Unlock "),t.C$Y()()()()()()()()),2&i&&(t.yG2(4),t.C0Y(4,"light"===r.options.theme?4:-1),t.yG2(),t.C0Y(5,"dark"===r.options.theme?5:-1),t.yG2(11),t.E7m("formGroup",r.form),t.yG2(5),t.C0Y(21,r.f.email.touched&&r.f.email.invalid?21:-1),t.yG2(),t.E7m("disabled",!r.form.valid))},dependencies:[m.qQ,m.ER,d.y,l.Up,l.w5,l.MX,p.yi,c.Gw,o.y,o.sz,o.ot,o.ue,o.u,o.sl,o.uW,o.Wo],encapsulation:2})}return e})();const rt=[{path:"",children:[{path:"error",component:y},{path:"maintenance",component:v},{path:"forgot",component:R},{path:"login",component:Y},{path:"register",component:I},{path:"lockscreen",component:E}]}];let at=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.a4G({type:e});static#o=this.\u0275inj=t.s3X({imports:[_.MD,m.qQ.forChild(rt),G.oB,$.NR,p.cN,h.Vn,c.oJ,o.y,o.sl,A.m2.pick(x),y,v,R,Y,I,E]})}return e})()}}]);