import{b as l}from"./blogs-fd0723f8.js";import{_ as a,o as c,c as i,a as s,t as e}from"./index-efb38aee.js";const n={props:["id"],name:"BlogData",data(){return{blog:null}},async created(){this.blog=l.find(o=>o.id===parseInt(this.id))}},d={id:"blog-header"},r={class:"container"},_={class:"row"},p={class:"col-sm-12"},g={class:"top-head"},h={id:"blog-inner",class:"py-5"},b={class:"container"},u={class:"row g-5"},m={class:"col-sm-12 border p-4"},v={class:"card border-0 rounded-0"},f=["src"],y={class:"card-body text-center"},B={class:"card-title pb-3"},D={class:"card-text"};function $(o,k,w,x,t,H){return c(),i("main",null,[s("div",d,[s("div",r,[s("div",_,[s("div",p,[s("h1",g,e(o.$t("blogH")),1),s("h3",null,e(o.$t("blogH3")),1),s("p",null,e(o.$t("blogP")),1)])])])]),s("div",h,[s("div",b,[s("div",u,[s("div",m,[s("div",v,[s("img",{height:"240px",src:t.blog.imgUrl,class:"card-img-top rounded-0 h-100",alt:"posts"},null,8,f),s("div",y,[s("h5",B,e(o.$i18n.locale==="ar"?t.blog.ar.title:t.blog.title),1),s("p",D,e(o.$i18n.locale==="ar"?t.blog.ar.parag:t.blog.parag),1)])])])])])])])}const N=a(n,[["render",$],["__scopeId","data-v-b659671a"]]);export{N as default};
