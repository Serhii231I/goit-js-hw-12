import{a as w,i as m,S as L}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();async function p(i,t){const r="46875254-682524027d328dbaad660da8e";try{const{data:o}=await w(i,{params:{key:r,...t}});return o}catch(o){throw o}}function f(i){return i.map(({webformatURL:t,largeImageURL:r,tags:o,likes:e,views:a,comments:n,downloads:v})=>`
       <li class="gallery-item">
       <a href="${r}">
        <img
        class = "gallery-image"
        src = "${t}"
        data-source = "${r}"
        alt = "${o}"
        width= 360;
        height= 200;
        />
        </a>
        <div class="main-review-container">
         <div class="review-container">
         <h3 class="review-header">Likes</h3>
         <p class="review-text">${e}</p>
         </div>
         <div class="review-container">
         <h3 class="review-header">Views</h3>
         <p class="review-text">${a}</p>
         </div>
         <div class="review-container">
         <h3 class="review-header">Comments</h3>
         <p class="review-text">${n}</p>
         </div>
         <div class="review-container">
         <h3 class="review-header">Downloads</h3>
         <p class="review-text">${v}</p>
         </div>
          </div>
        </li>
        
        `).join("")}const y="https://pixabay.com/api/";let s=1,d=15,l="";const h=document.querySelector(".loader"),c=document.querySelector(".js-load-more"),g=document.querySelector(".search-form"),u=document.querySelector(".gallery-list");g.addEventListener("submit",b);c.addEventListener("click",S);function b(i){if(i.preventDefault(),s=1,l=document.querySelector(".search-input").value.trim(),l==="")return;h.textContent="Loading images, please wait...",g.reset();const t=new URLSearchParams({q:l,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:d});u.innerHTML="",p(`${y}?${t}`).then(r=>{r.hits.length===0?m.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"}):u.insertAdjacentHTML("beforeend",f(r.hits)),new L(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),s*d<r.totalHits&&c.classList.replace("load-more-hidden","load-more")}).catch(r=>{console.log(r)}).finally(()=>{h.textContent=""})}async function S(){s+=1,c.disabled=!0;const i=new URLSearchParams({q:l,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:d});try{const t=await p(`${y}?${i}`);console.log(t),u.insertAdjacentHTML("beforeend",f(t.hits)),s*d>=t.totalHits&&(m.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),c.classList.replace("load-more","load-more-hidden"));const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*4,behavior:"smooth"})}catch(t){alert(t.message)}finally{c.disabled=!1}}
//# sourceMappingURL=index.js.map