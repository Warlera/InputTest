"use strict";(self["webpackChunkempower"]=self["webpackChunkempower"]||[]).push([[855],{3794:function(s,n,e){e.r(n),e.d(n,{default:function(){return H}});var t=e(6252),i=e(3577),a=e(9963),r=e.p+"img/277.a5244973.svg",o=e.p+"img/276.1d85c24d.svg",u=e(6793),l=e(3337),d=e(7662);const c={class:"container"},w=(0,t._)("div",{class:"head_block"},[(0,t._)("div",{class:"head back_quizzes"},[(0,t._)("div",{class:"head_text"},"Онбординг")])],-1),h={key:0},_={class:"membr_table_question"},m=["onClick"],p={class:"answer"},g=(0,t._)("p",null,"отправить",-1),b={class:"step"},k=(0,t._)("img",{src:r},null,-1),v=[k],f=(0,t._)("img",{src:o},null,-1),x=[f],y={class:"footer"},C={class:"footer_block"},D=(0,t._)("img",{src:u},null,-1),q=(0,t._)("p",null,"онбординг",-1),z=[D,q],A=(0,t._)("div",null,[(0,t._)("img",{src:l}),(0,t._)("p",null,"структура")],-1),T=(0,t._)("div",null,[(0,t._)("img",{src:d}),(0,t._)("p",null,"команда")],-1);function I(s,n,e,r,o,u){const l=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",c,[w,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.onboarding,(s=>((0,t.wg)(),(0,t.iD)("div",{class:"question",key:s},[s.number==o.n?((0,t.wg)(),(0,t.iD)("p",h,(0,i.zw)(s.text),1)):(0,t.kq)("",!0)])))),128)),(0,t._)("div",_,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.answers[o.n-1],(s=>((0,t.wg)(),(0,t.iD)("div",{onClick:n=>(o.answer=s.text)&&(o.answerId=o.onboarding[o.n-1].id),class:"membr_question",key:s},[(0,t._)("div",null,(0,i.zw)(s.text),1)],8,m)))),128))]),(0,t.wy)((0,t._)("div",{onClick:n[0]||(n[0]=s=>u.put()),class:"membr_question membr_answer"},[(0,t._)("div",p,[(0,t.Uk)(" мой ответ ответ: "+(0,i.zw)(o.answer)+" ",1),g])],512),[[a.F8,""!=o.answer]]),(0,t._)("div",b,[(0,t.wy)((0,t._)("div",{onClick:n[1]||(n[1]=s=>u.back()),class:"step_arrow_back"},v,512),[[a.F8,o.n>1]]),(0,t.wy)((0,t._)("div",{onClick:n[2]||(n[2]=s=>u.next()),class:"step_arrow_next"},x,512),[[a.F8,o.n<this.onboarding.length]])])]),(0,t._)("div",y,[(0,t._)("div",C,[(0,t._)("div",{onClick:n[3]||(n[3]=s=>u.rout("/quizzes?sign="+this.token))},z),(0,t.Wm)(l,{to:"/Structute?sign="+this.token},{default:(0,t.w5)((()=>[A])),_:1},8,["to"]),(0,t.Wm)(l,{to:"/?sign="+this.token},{default:(0,t.w5)((()=>[T])),_:1},8,["to"])])])],64)}e(7658);var U={data(){return{onboarding:[],answers:[],n:"1",answer:"",answerId:"",user:[],token:window.location.hash.split("=")[1]}},async mounted(){const s=await fetch("https://dev6.automatisation.art/empower/api/onboardings?user_id=1227049925&user_sign="+this.token),n=await s.json();for(let e=0;e<=n.length;e++){const s={id:n[e].id,text:n[e].text,number:n[e].number,answers:n[e].answers};this.onboarding.push(s),this.answers.push(s.answers)}},methods:{Answers(){setTimeout((async()=>{console.log(this.answers)}),500)},put(){fetch("https://dev6.automatisation.art/empower/api/onboardings/"+this.answerId+"?user_id="+window.Telegram.WebApp.initDataUnsafe.user.id+"&user_sign="+this.token+"&answer_id="+this.answerId+"&answer_value="+this.answer,{method:"PUT"})},next(){this.n=Number(this.n),this.n=this.n+1},back(){this.n=Number(this.n),this.n=this.n-1},rout(s){this.$router.push(s)},useR(){setTimeout((async()=>{const s=await fetch("https://dev6.automatisation.art/empower/api/users/"+window.Telegram.WebApp.initDataUnsafe.user.id+"?user_sign="+this.user),n=await s.json();for(let e=0;e<=n.length;e++){const s={n:n[e].onboardingArticle};this.user.push(s)}}),5)}},beforeMount(){this.Answers(),this.useR()}},W=e(3744);const F=(0,W.Z)(U,[["render",I]]);var H=F}}]);
//# sourceMappingURL=855.44bdf35d.js.map