import{a as R,S as w,i as c}from"./assets/vendor-CiduK07e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const P="48902989-5d77fe06f72350c30855133ec";async function m(s,t,l){const i="https://pixabay.com/api/",e={key:P,q:s,per_page:l,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return await R.get(i,{params:e})}function f(s){const t={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function l(n){const{webformatURL:h,largeImageURL:y,tags:L,likes:v,views:b,comments:S,downloads:q}=n;return`<li class="gallery-item">
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
`}function i(n){return n.map(l).join("")}const e=i(s);t.list.insertAdjacentHTML("beforeend",e),new w(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh()}const r={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),input:document.querySelector(".input-field"),loaderImage:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load"),gallery:document.querySelector(".gallery"),loaderBtn:document.querySelector(".loader2")},a={query:null,page:1,total:null,perPage:40};r.form.addEventListener("submit",M);async function M(s){s.preventDefault(),a.query=r.input.value.trim(),a.page=1,a.query===""&&c.warning({position:"topRight",title:"WARN",message:"You have not specified any search parameters."}),u(),g();try{const t=await m(a.query,a.page,a.perPage);t.data.hits.length===0&&(u(),d(),c.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),f(t.data.hits),a.total=t.data.totalHits,p(),console.log(p)}catch{u(),d(),c.error({title:"ERROR",message:`Error fetching images: ${error}`,position:"topRight"})}d(),s.target.reset()}r.btnLoadMore.addEventListener("click",B);async function B(){a.page+=1,g();const s=await m(a.query,a.page);f(s.data.hits),p(),d(),I()}function g(){r.loaderImage.classList.remove("hidden")}function d(){r.loaderImage.classList.add("hidden")}function u(){r.gallery.innerHTML=""}function E(){r.btnLoadMore.classList.remove("hidden"),r.loaderBtn.classList.add("hidden")}function O(){r.btnLoadMore.classList.add("hidden"),r.loaderBtn.classList.remove("hidden")}function p(){const s=a.perPage,t=Math.ceil(a.total/s);a.page>=t?(O(),c.info({position:"topRight",title:"INFO",message:"We're sorry, but you've reached the end of search results."})):E()}function I(){const t=r.gallery.lastElementChild.getBoundingClientRect().height+100;scrollBy({behavior:"smooth",top:t*3})}
//# sourceMappingURL=index.js.map
