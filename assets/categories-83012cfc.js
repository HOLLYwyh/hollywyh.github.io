import{f as x,a2 as K,v as Y,k as z,ad as L,M as N,l as w,o,h as r,a as _,t as g,j as s,F as y,i as S,ae as U,c as v,w as f,m as B,d as p,a6 as q,D,u as F,$ as P,af as R,a1 as T,ab as V,ac as M,aa as W}from"./app-6c00e386.js";import{_ as H}from"./YunCard.vue_vue_type_script_setup_true_lang-d066a5e5.js";import{_ as O}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-edf2c65d.js";import{_ as A}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-07c4885b.js";const G={class:"category-list-item inline-flex items-center cursor-pointer"},J={key:0,"i-ri-folder-add-line":""},Q={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},X={key:0},Z=_("div",{"i-ri-file-text-line":""},null,-1),I={m:"l-1",font:"serif black"},ee=x({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(C){const u=K(),i=Y(!0),{t:c}=z(),{locale:m}=z();function n(e){const t=m.value==="zh-CN"?"zh":m.value;return e[`title_${t}`]?e[`title_${t}`]:e.title}const l=Y(),{show:k}=L(l);function h(e){u.push({query:{category:e}}),k()}return N(()=>{const e=document.querySelector(".post-collapse-container");e&&(l.value=e)}),(e,t)=>{const d=w("YunCategory",!0),$=w("router-link");return o(),r(y,null,[_("li",G,[_("span",{class:"folder-action inline-flex",onClick:t[0]||(t[0]=a=>i.value=!i.value)},[i.value?(o(),r("div",J)):(o(),r("div",Q))]),_("span",{class:"category-name",m:"l-1",onClick:t[1]||(t[1]=a=>h(e.parentKey))},g(e.category.name==="Uncategorized"?s(c)("category.uncategorized"):e.category.name)+" ["+g(e.category.total)+"] ",1)]),i.value?B("v-if",!0):(o(),r("ul",X,[(o(!0),r(y,null,S(e.category.children,(a,b)=>(o(),r("li",{key:b,class:"post-list-item",m:"l-4"},[s(U)(a)?(o(),v(d,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a},null,8,["parent-key","category"])):(o(),r(y,{key:1},[a.title?(o(),v($,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:f(()=>[Z,_("span",I,g(n(a)),1)]),_:2},1032,["to"])):B("v-if",!0)],64))]))),128))]))],64)}}}),te=x({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(C){const i=Y(C.collapsable);return(c,m)=>{const n=ee;return o(!0),r(y,null,S(c.categories,l=>(o(),r("ul",{key:l.name,class:"category-list",m:"l-4"},[p(n,{"parent-key":l.name,category:l,level:c.level+1,collapsable:i.value},null,8,["parent-key","category","level","collapsable"])]))),128)}}});const oe={text:"center",class:"yun-text-light",p:"2"},re=x({__name:"categories",setup(C){const{t:u}=z(),i=q(),c=D(),m=F(),n=P(()=>m.query.category||""),l=R(),k=P(()=>i.postList.filter(t=>t.categories&&n.value!=="Uncategorized"?typeof t.categories=="string"?t.categories===n.value:t.categories.join("/").startsWith(n.value)&&t.categories[0]===n.value.split("/")[0]:!t.categories&&n.value==="Uncategorized"?t.categories===void 0:!1)),h=T(c);return V([M({"@type":"CollectionPage"})]),(e,t)=>{const d=A,$=te,a=w("router-view"),b=O,j=H,E=W;return o(),v(E,null,{"main-header":f(()=>[p(d,{title:s(h)||s(u)("menu.categories"),icon:s(c).icon||"i-ri-folder-2-line",color:s(c).color},null,8,["title","icon","color"])]),"main-content":f(()=>[_("div",oe,g(s(u)("counter.categories",s(l).children.length)),1),p($,{categories:s(l).children},null,8,["categories"]),p(a)]),"main-nav-before":f(()=>[n.value?(o(),v(j,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:f(()=>[p(d,{title:n.value==="Uncategorized"?s(u)("category.uncategorized"):n.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),p(b,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:k.value},null,8,["posts"])]),_:1})):B("v-if",!0)]),_:1})}}});export{re as default};
