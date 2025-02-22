import{a as R,S as w,i as c}from"./assets/vendor-CiduK07e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const P="48902989-5d77fe06f72350c30855133ec";async function p(n,t,l){const i="https://pixabay.com/api/",e={key:P,q:n,pageSize:l,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return await R.get(i,{params:e})}function f(n){const t={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function l(o){const{webformatURL:h,largeImageURL:y,tags:L,likes:v,views:b,comments:S,downloads:q}=o;return`<li class="gallery-item">
          <a class="gallery-link" href="${y}">
            <img class="gallery-image" src="${h}" alt="${L}"/>
          </a>
          <div class="gallery-list-container">
            <div class="field">
              <span class="name-field">Likes</span>
              <span class="value">${v}</span>
            </div>
            <div class="field">
              <span class="name-field">Views</span>
              <span class="value">${b}</span>
            </div>
            <div class="field">
              <span class="name-field">Comments</span>
              <span class="value">${S}</span>
            </div>
            <div class="field">
              <span class="name-field">Downloads</span>
              <span class="value">${q}</span>
            </div>
          </div>
          </li>
`}function i(o){return o.map(l).join("")}const e=i(n);t.list.insertAdjacentHTML("beforeend",e),new w(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh()}const s={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),input:document.querySelector(".input-field"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load"),gallery:document.querySelector(".gallery"),loaderBtn:document.querySelector(".loader2")},a={query:null,page:null,total:null,perPage:40};s.form.addEventListener("submit",B);async function B(n){n.preventDefault(),a.query=s.input.value.trim(),a.page=1,a.query===""&&c.warning({position:"topRight",title:"WARN",message:"You have not specified any search parameters."}),u(),m(),O();try{const t=await p(a.query,a.page,a.perPage);t.data.hits.length===0&&(u(),d(),c.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),f(t.data.hits),a.total=t.data.totalHits,g()}catch{u(),d(),c.error({title:"ERROR",message:`Error fetching images: ${error}`,position:"topRight"})}d(),n.target.reset()}s.btnLoad.addEventListener("input",E);async function E(n){a.page+=1,x(),g();const t=await p(a.query,a.page,a.perPage);f(t.data.hits),T(),A()}function O(){s.loader.classList.remove("hidden")}function d(){s.loader.classList.add("hidden")}function u(){s.gallery.innerHTML=""}function $(){s.btnLoad.disabled=!1}function m(){s.btnLoad.disabled=!0}function g(){const t=Math.ceil(a.total/40);a.page>=t?(m(),c.info({position:"topRight",title:"INFO",message:"We're sorry, but you've reached the end of search results."})):$()}function x(){s.loaderBtn.classList.remove("hidden")}function T(){s.loaderBtn.classList.add("hidden")}function A(){const t=s.gallery.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*2})}
//# sourceMappingURL=index.js.map
