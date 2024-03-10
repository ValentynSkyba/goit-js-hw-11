import{S as m,i as d}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function p(t){const o="42801322-2062a11e10d8e6d4e2ccea576",i="https://pixabay.com/",s="api/",e=new URLSearchParams({key:o,q:"userQuery",image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${i}${s}?${e}`;return fetch(r).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}const g=new m(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".js-gallery");function h(t){const o=y(t);u.innerHTML=o,g.refresh()}function y(t){return t.map(L).join(`
`)}function L({webformatURL:t,largeImageURL:o,tags:i,likes:s,views:e,comments:r,downloads:n}){return` <li class="gallery-item">
      <a href="${o}" class="gallery-link">
        <img src="${t}" alt="${i}" class="gallery__image" />
        <ul class="info">
          <li class="info-item">
            <p>Likes</p> ${s}
          </li>
          <li class="info-item">
            <p>Views</p> ${e}
          </li>
          <li class="info-item">
            <p>Comments</p> ${r}
          </li>
          <li class="info-item">
            <p>Downloads</p> ${n}
          </li>
        </ul>
      </a>
    </li>`}function c(){u.innerHTML=""}const E=document.querySelector(".js-search-form"),f=document.querySelector(".loader"),S="Sorry, there are no images matching your search query. Please try again!",w="Error, empty field";E.addEventListener("submit",$);function $(t){if(t.preventDefault(),b(),c(),!t.target.elements.data.value.trim().split(" ").filter(s=>s).join("+")){c(),l(w),a();return}p().then(s=>{s.hits.length===0?(a(),l(S)):h(s.hits)}).catch(console.log).finally(()=>{a()}),t.target.reset()}function b(t){f.classList.remove("is-hide")}function a(t){f.classList.add("is-hide")}function l(t){const o={message:t,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};d.show(o)}
//# sourceMappingURL=commonHelpers.js.map
