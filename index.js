import{a as q,S as R,i as c}from"./assets/vendor-CiduK07e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const w="48902989-5d77fe06f72350c30855133ec";async function p(s,a,l){const i="https://pixabay.com/api/",e={key:w,q:s,per_page:l,page:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return await q.get(i,{params:e})}function f(s){const a={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function l(n){const{webformatURL:g,largeImageURL:h,tags:y,likes:v,views:L,comments:b,downloads:S}=n;return`<li class="gallery-item">
          <a class="gallery-link" href="${h}">
            <img class="gallery-image" src="${g}" alt="${y}"/>
          </a>
          <div class="gallery-list-container">
            <div class="field">
              <span class="name-field">Likes</span>
              <span class="value">${v}</span>
            </div>
            <div class="field">
              <span class="name-field">Views</span>
              <span class="value">${L}</span>
            </div>
            <div class="field">
              <span class="name-field">Comments</span>
              <span class="value">${b}</span>
            </div>
            <div class="field">
              <span class="name-field">Downloads</span>
              <span class="value">${S}</span>
            </div>
          </div>
          </li>
`}function i(n){return n.map(l).join("")}const e=i(s);a.list.insertAdjacentHTML("beforeend",e),new R(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh()}const r={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),input:document.querySelector(".input-field"),loaderImage:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load"),gallery:document.querySelector(".gallery"),loaderBtn:document.querySelector(".loader2")},t={query:null,page:1,total:null,perPage:40};r.form.addEventListener("submit",B);async function B(s){s.preventDefault(),t.query=r.input.value.trim(),t.page=1,t.query===""&&c.warning({position:"topRight",title:"WARN",message:"You have not specified any search parameters."}),u(),M();try{const a=await p(t.query,t.page,t.perPage);a.data.hits.length===0&&(u(),d(),c.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),f(a.data.hits),t.total=a.data.totalHits,m()}catch{u(),d(),c.error({title:"ERROR",message:`Error fetching images: ${error}`,position:"topRight"})}d(),s.target.reset()}r.btnLoadMore.addEventListener("click",P);async function P(){t.page+=1,I(),m(),console.log(t.page);const s=await p(t.query,t.page,t.perPage);f(s.data.hits),$(),x()}function M(){r.loaderImage.classList.remove("visually-hidden")}function d(){r.loaderImage.classList.add("visually-hidden")}function u(){r.gallery.innerHTML=""}function E(){r.btnLoadMore.classList.remove("visually-hidden")}function O(){r.btnLoadMore.classList.add("visually-hidden")}function m(){const s=Math.ceil(t.total/t.perPage);t.page>=s?(O(),c.info({position:"topRight",title:"INFO",message:"We're sorry, but you've reached the end of search results."})):E()}function I(){r.loaderBtn.classList.remove("visually-hidden")}function $(){r.loaderBtn.classList.add("visually-hidden")}function x(){const a=r.gallery.lastElementChild.getBoundingClientRect().height+100;scrollBy({behavior:"smooth",top:a*3})}
//# sourceMappingURL=index.js.map
