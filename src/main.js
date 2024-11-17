
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { serverRequest } from "./js/pixabay-api";
import { renderMarkup } from "./js/render-functions";

const BASE_URL = "https://pixabay.com/api/"
let page = 1;
let per_page = 15;
let query = "";

const loader = document.querySelector(".loader")

const loadMore = document.querySelector(".js-load-more");

const form = document.querySelector(".search-form")

const list = document.querySelector(".gallery-list")


form.addEventListener("submit", onSubmit);

loadMore.addEventListener("click", onLoadMore);
let simpleLightBox = new SimpleLightbox(`.gallery a`, {
                captionsData: 'alt',
                captionDelay: 250,
            });


 function onSubmit(event) {
    event.preventDefault();
     page = 1;
     
    query = document.querySelector(".search-input").value.trim();
    if (query === "") {
        return;
    }
    loader.textContent = "Loading images, please wait..."
    form.reset()
    
    const params = new URLSearchParams({
    q: query,
    image_type: "photo",
    orientation:"horizontal",
    safesearch: "true",
    page,
    per_page
})

    list.innerHTML = "";

    serverRequest(`${BASE_URL}?${params}`)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.warning({
                    title: 'Caution',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
            else {
                
                list.insertAdjacentHTML("beforeend", renderMarkup(data.hits))
                simpleLightBox.refresh();
            };
            
            if(page * per_page < data.totalHits) {
            loadMore.classList.replace("load-more-hidden", "load-more");
            };

        })
        .catch(error => {
            console.log(error);
        
        })
    .finally(() => {
loader.textContent = ""
    })
     
}

    async function onLoadMore() {
        page += 1;
         loadMore.disabled = true;
        const params = new URLSearchParams({
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            page,
            per_page
     })
   
    try {
        const data = await serverRequest(`${BASE_URL}?${params}`);
        list.insertAdjacentHTML("beforeend", renderMarkup(data.hits));
                simpleLightBox.refresh();

        if (page * per_page >= data.totalHits) {
            iziToast.warning({
                    title: 'Caution',
                    message: "We're sorry, but you've reached the end of search results."
                });
            loadMore.classList.replace("load-more", "load-more-hidden");
        }
        const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
            left: 0,
            top: cardHeight*4,
            behavior: "smooth"
        })
    }
    catch (error) {
        iziToast.error({
    title: 'Error',
    message: 'Illegal operation',
});
        }
        finally {
        loadMore.disabled = false;
    }
    }
