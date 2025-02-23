import{a as q,S as w,i as c}from"./assets/vendor-CiduK07e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const B="48902989-5d77fe06f72350c30855133ec";async function m(r,t,l){const i="https://pixabay.com/api/",e={key:B,q:r,per_page:l,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return await q.get(i,{params:e})}function f(r){const t={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function l(n){const{webformatURL:h,largeImageURL:y,tags:v,likes:L,views:b,comments:R,downloads:S}=n;return`<li class="gallery-item">
          <a class="gallery-link" href="${y}">
            <img class="gallery-image" src="${h}" alt="${v}"/>
          </a>
          <div class="gallery-list-container">
            <div class="field">
              <span class="name-field">Likes</span>
              <span class="value">${L}</span>
            </div>
            <div class="field">
              <span class="name-field">Views</span>
              <span class="value">${b}</span>
            </div>
            <div class="field">
              <span class="name-field">Comments</span>
              <span class="value">${R}</span>
            </div>
            <div class="field">
              <span class="name-field">Downloads</span>
              <span class="value">${S}</span>
            </div>
          </div>
          </li>
`}function i(n){return n.map(l).join("")}const e=i(r);t.list.insertAdjacentHTML("beforeend",e),new w(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh()}const o={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),input:document.querySelector(".input-field"),loaderImage:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load"),gallery:document.querySelector(".gallery"),loaderBtn:document.querySelector(".loader2")},a={query:null,page:1,total:null,perPage:40};o.form.addEventListener("submit",P);async function P(r){if(r.preventDefault(),a.query=o.input.value.trim(),a.page=1,a.query==="")return c.warning({position:"topRight",title:"WARN",message:"You have not specified any search parameters."});u(),E();try{const t=await m(a.query,a.page,a.perPage);if(t.data.hits.length===0)return u(),d(),c.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});f(t.data.hits),a.total=t.data.totalHits,g()}catch(t){return u(),d(),c.error({title:"ERROR",message:`Error fetching images: ${t}`,position:"topRight"})}d(),r.target.reset()}o.btnLoadMore.addEventListener("click",M);async function M(){a.page+=1,I(),g();try{const r=await m(a.query,a.page,a.perPage);f(r.data.hits),x()}catch{return p(),c.error({title:"ERROR",message:`Failed to load more images! ${error}`,position:"topRight"})}p()}function E(){o.loaderImage.classList.remove("visually-hidden")}function d(){o.loaderImage.classList.add("visually-hidden")}function u(){o.gallery.innerHTML=""}function O(){o.btnLoadMore.classList.remove("visually-hidden")}function $(){o.btnLoadMore.classList.add("visually-hidden")}function g(){const r=Math.ceil(a.total/a.perPage);if(a.page>=r)return $(),c.info({position:"topRight",title:"INFO",message:"We're sorry, but you've reached the end of search results."});O()}function I(){o.loaderBtn.classList.remove("visually-hidden")}function p(){o.loaderBtn.classList.add("visually-hidden")}function x(){const t=o.gallery.lastElementChild.getBoundingClientRect().height+100;scrollBy({behavior:"smooth",top:t*3})}
//# sourceMappingURL=index.js.map
