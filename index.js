import{a as q,S as w,i as c}from"./assets/vendor-CiduK07e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const B="48902989-5d77fe06f72350c30855133ec";async function m(r,a,l){const n="https://pixabay.com/api/",e={key:B,q:r,per_page:l,page:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return await q.get(n,{params:e})}function f(r){const a={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function l(i){const{webformatURL:h,largeImageURL:y,tags:v,likes:L,views:b,comments:R,downloads:S}=i;return`<li class="gallery-item">
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
`}function n(i){return i.map(l).join("")}const e=n(r);a.list.insertAdjacentHTML("beforeend",e),new w(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh()}const o={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),input:document.querySelector(".input-field"),loaderImage:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load"),gallery:document.querySelector(".gallery"),loaderBtn:document.querySelector(".loader2")},t={query:null,page:1,total:null,perPage:40};o.form.addEventListener("submit",P);async function P(r){r.preventDefault(),t.query=o.input.value.trim(),t.page=1,t.query===""&&c.warning({position:"topRight",title:"WARN",message:"You have not specified any search parameters."}),u(),E();try{const a=await m(t.query,t.page,t.perPage);a.data.hits.length===0&&(u(),d(),c.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),f(a.data.hits),t.total=a.data.totalHits,g()}catch{u(),d(),c.error({title:"ERROR",message:`Error fetching images: ${error}`,position:"topRight"})}d(),r.target.reset()}o.btnLoadMore.addEventListener("click",M);async function M(){t.page+=1,I(),g();try{const r=await m(t.query,t.page,t.perPage);f(r.data.hits),x()}catch{p(),c.error({title:"ERROR",message:`Failed to load more images! ${error}`,position:"topRight"})}p()}function E(){o.loaderImage.classList.remove("visually-hidden")}function d(){o.loaderImage.classList.add("visually-hidden")}function u(){o.gallery.innerHTML=""}function O(){o.btnLoadMore.classList.remove("visually-hidden")}function $(){o.btnLoadMore.classList.add("visually-hidden")}function g(){const r=Math.ceil(t.total/t.perPage);t.page>=r?($(),c.info({position:"topRight",title:"INFO",message:"We're sorry, but you've reached the end of search results."})):O()}function I(){o.loaderBtn.classList.remove("visually-hidden")}function p(){o.loaderBtn.classList.add("visually-hidden")}function x(){const a=o.gallery.lastElementChild.getBoundingClientRect().height+100;scrollBy({behavior:"smooth",top:a*3})}
//# sourceMappingURL=index.js.map
