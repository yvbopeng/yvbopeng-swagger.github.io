import{a as u}from"./axios-4a70c6fc.js";import{_,r as d,u as l,o as s,c as n,d as m,F as p,b as f}from"./index-3778e496.js";const g={class:"home"},h={class:"img-wrap"},v=["src","onClick"],y="https://date.nager.at/Api/v3/AvailableCountries",C={__name:"Home",setup(k){const r=d([]);function a(){const e=Date.now().toString(36),t=Math.random().toString(36).substring(2,5);return`${e}-${t}`}const c=new l;u({url:y,method:"get"}).then(e=>{e.data.forEach(t=>{t.countryCode!=="SJ"&&r.push({id:a(),info:t,url:`https://date.nager.at/images/circle-flags/flags/${t.countryCode.toLowerCase()}.svg`})})});function i(e){c.push("/showInfo?year=2023&countryCode="+e.info.countryCode)}return(e,t)=>(s(),n("div",g,[m("div",h,[(s(!0),n(p,null,f(r,o=>(s(),n("img",{src:o.url,key:o.id,onClick:w=>i(o)},null,8,v))),128))])]))}},S=_(C,[["__scopeId","data-v-00a26908"]]);export{S as default};
