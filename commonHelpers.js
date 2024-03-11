import{S as d,i as f}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function p(t){const s="42801322-2062a11e10d8e6d4e2ccea576",n="https://pixabay.com/",o="api/",e=new URLSearchParams({key:s,q:"userQuery",image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${n}${o}?${e}`;return fetch(r).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const g=new d(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".js-gallery");function h(t){const s=y(t);u.innerHTML=s,g.refresh()}function y(t){return t.map(L).join(`
`)}function L({webformatURL:t,largeImageURL:s,tags:n,likes:o,views:e,comments:r,downloads:i}){return` <li class="gallery-item">
      <a href="${s}" class="gallery-link">
        <img src="${t}" alt="${n}" class="gallery-image" />
        <ul class="description">
          <li class="desc-item">
            <p>Likes</p> ${o}
          </li>
          <li class="desc-item">
            <p>Views</p> ${e}
          </li>
          <li class="desc-item">
            <p>Comments</p> ${r}
          </li>
          <li class="desc-item">
            <p>Downloads</p> ${i}
          </li>
        </ul>
      </a>
    </li>`}function c(){u.innerHTML=""}const E=document.querySelector(".js-search-form"),m=document.querySelector(".loader"),S="Sorry, there are no images matching your search query. Please try again!",w="Error, empty field";E.addEventListener("submit",$);function $(t){if(t.preventDefault(),b(),c(),!t.target.elements.data.value.trim().split(" ").filter(o=>o).join("+")){c(),l(w),a();return}p().then(o=>{o.hits.length===0?(a(),l(S)):h(o.hits)}).catch(console.log).finally(()=>{a()}),t.target.reset()}function b(t){m.classList.remove("is-hide")}function a(t){m.classList.add("is-hide")}function l(t){const s={message:t,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};f.show(s)}
//# sourceMappingURL=commonHelpers.js.map
