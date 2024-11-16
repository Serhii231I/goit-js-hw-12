export function renderMarkup(arr) {
    return arr
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `
       <li class="gallery-item">
       <a href="${largeImageURL}">
        <img
        class = "gallery-image"
        src = "${webformatURL}"
        data-source = "${largeImageURL}"
        alt = "${tags}"
        width= 360;
        height= 200;
        />
        </a>
        <div class="main-review-container">
         <div class="review-container">
         <h3 class="review-header">Likes</h3>
         <p class="review-text">${likes}</p>
         </div>
         <div class="review-container">
         <h3 class="review-header">Views</h3>
         <p class="review-text">${views}</p>
         </div>
         <div class="review-container">
         <h3 class="review-header">Comments</h3>
         <p class="review-text">${comments}</p>
         </div>
         <div class="review-container">
         <h3 class="review-header">Downloads</h3>
         <p class="review-text">${downloads}</p>
         </div>
          </div>
        </li>
        
        `}).join("");
    
}
