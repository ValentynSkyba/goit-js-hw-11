import{S as m,i as p}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function f(t){const r="42801322-2062a11e10d8e6d4e2ccea576",n="https://pixabay.com/",o="api/",e=new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${n}${o}/?${e}`;return fetch(s).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const g=new m(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".js-gallery");function h(t){const r=y(t);u.innerHTML=r,g.refresh()}function y(t){return t.map(L).join(`
`)}function L({webformatURL:t,largeImageURL:r,tags:n,likes:o,views:e,comments:s,downloads:i}){return` <li class="gallery-item">
      <a href="${r}" class="gallery-link">
        <img src="${t}" alt="${n}" class="gallery-image" />
        <ul class="description">
          <li class="desc-item">
            <p class="des-p">Likes</p> ${o}
          </li>
          <li class="desc-item">
            <p class="des-p">Views</p> ${e}
          </li>
          <li class="desc-item">
            <p class="des-p">Comments</p> ${s}
          </li>
          <li class="desc-item">
            <p class="des-p">Downloads</p> ${i}
          </li>
        </ul>
      </a>
    </li>`}function c(){u.innerHTML=""}const E=document.querySelector(".js-search-form"),d=document.querySelector(".loader"),S="Sorry, there are no images matching your search query. Please try again!",w="Error, empty field";E.addEventListener("submit",$);function $(t){t.preventDefault(),b(),c();const n=t.target.elements.data.value.trim().split(" ").filter(o=>o).join("+");if(!n){c(),l(w),a();return}f(n).then(o=>{o.hits.length===0?(a(),l(S)):h(o.hits)}).catch(console.log).finally(()=>{a()}),t.target.reset()}function b(t){d.classList.remove("is-hide")}function a(t){d.classList.add("is-hide")}function l(t){const r={message:t,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};p.show(r)}
//# sourceMappingURL=commonHelpers.js.map
