import{a as R,S as w,i as c}from"./assets/vendor-CiduK07e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const P="48902989-5d77fe06f72350c30855133ec";async function f(o,t,l){const i="https://pixabay.com/api/",e={key:P,q:o,per_page:l,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return await R.get(i,{params:e})}function m(o){const t={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function l(n){const{webformatURL:h,largeImageURL:y,tags:L,likes:v,views:b,comments:S,downloads:q}=n;return`<li class="gallery-item">
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
`}function i(n){return n.map(l).join("")}const e=i(o);t.list.insertAdjacentHTML("beforeend",e),new w(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh()}const s={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),input:document.querySelector(".input-field"),loaderImage:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load"),gallery:document.querySelector(".gallery"),loaderBtn:document.querySelector(".loader2")},a={query:null,page:1,total:null,perPage:40};s.form.addEventListener("submit",M);async function M(o){o.preventDefault(),a.query=s.input.value.trim(),a.page=1,a.query===""&&c.warning({position:"topRight",title:"WARN",message:"You have not specified any search parameters."}),u(),g();try{const t=await f(a.query,a.page,a.perPage);t.data.hits.length===0&&(u(),d(),c.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),m(t.data.hits),a.total=t.data.totalHits,p(),console.log(p)}catch{u(),d(),c.error({title:"ERROR",message:`Error fetching images: ${error}`,position:"topRight"})}d(),o.target.reset()}s.btnLoadMore.addEventListener("click",E);async function E(){a.page+=1,g(),p();const o=await f(a.query,a.page);m(o.data.hits),d(),$()}function g(){s.loaderImage.classList.remove("hidden")}function d(){s.loaderImage.classList.add("hidden")}function u(){s.gallery.innerHTML=""}function O(){s.btnLoadMore.classList.remove("hidden")}function I(){s.btnLoadMore.classList.add("hidden")}function p(){const o=a.perPage,t=Math.ceil(a.total/o);a.page>=t?(I(),c.info({position:"topRight",title:"INFO",message:"We're sorry, but you've reached the end of search results."})):O()}function $(){const t=s.gallery.lastElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*3})}
//# sourceMappingURL=index.js.map
