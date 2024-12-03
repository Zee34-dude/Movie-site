
import { getMovie } from "./movies.js";
const url = new URL(window.location.href);
const movieId = url.searchParams.get('movieId')
const movie = getMovie(movieId);

let movieSummary = ''
movieSummary = `

<div class="mv-summary-container">
        <div class="image-container">
          <img class="mv-img" src="${movie.Image}" alt="">
          <div class="dark-container"></div>
          <svg class="MetadataPosterCardActions-playCircle-rOnuVA playButton MetadataPosterCardCircle-cardCircle-gBHNQG" viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg"><path d="M216 170l190.5 110L216 390z"></path>
          </svg>
        </div>
        <div class="mv-summary">
          <h1 class="mv-title">${movie.name}</h1>
          <div class="grey  director ">Directed by ${movie.director}</div>
          <div class="grey flex-row margin-top">
            <span class="mv-year">${movie.year}</span>
            <span>${movie.duration}</span>
            <span> ${movie.rating}</span>
          </div>
          <div class="grey margin-top">
            <span>${movie.genre}</span>
           
            <span></span>
          </div>
          <div class="option-list flex-row">
            <button class="play-btn">Play Movie</button>
            <span class="watch-list">
              <svg aria-hidden="true" class="rkbrtb0 rkbrtb1 rkbrtb3 _1v25wbq5k" fill="currentColor" height="48"
                viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M38 6V40.125L24.85 33.74L23.5 33.065L22.15 33.74L9 40.125V6H38ZM38 3H9C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6V45L23.5 36.5L41 45V6C41 5.20435 40.6839 4.44129 40.1213 3.87868C39.5587 3.31607 38.7957 3 38 3Z"
                  fill="currentColor"></path>
              </svg>
              <div class="watchlist-tooltip">Add to Watchlist</div>
            </span>
            <span class="trailer">
              <svg aria-hidden="true" class="rkbrtb0 rkbrtb1 rkbrtb3 _1v25wbq5k" fill="currentColor" height="48"
                viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="M42 24C42 31.2328 38.3435 37.6115 32.7782 41.3886C33.1935 41.2738 33.602 41.1447 34 41C45.1693 36.9384 47 32 47 32L48 35C48 35 44.3832 40.459 34.5 43.5C28 45.5 21 45 21 45C9.40202 45 0 35.598 0 24C0 12.402 9.40202 3 21 3C32.598 3 42 12.402 42 24ZM21 19C24.3137 19 27 16.3137 27 13C27 9.68629 24.3137 7 21 7C17.6863 7 15 9.68629 15 13C15 16.3137 17.6863 19 21 19ZM10 30C13.3137 30 16 27.3137 16 24C16 20.6863 13.3137 18 10 18C6.68629 18 4 20.6863 4 24C4 27.3137 6.68629 30 10 30ZM38 24C38 27.3137 35.3137 30 32 30C28.6863 30 26 27.3137 26 24C26 20.6863 28.6863 18 32 18C35.3137 18 38 20.6863 38 24ZM21 26C22.1046 26 23 25.1046 23 24C23 22.8954 22.1046 22 21 22C19.8954 22 19 22.8954 19 24C19 25.1046 19.8954 26 21 26ZM27 35C27 38.3137 24.3137 41 21 41C17.6863 41 15 38.3137 15 35C15 31.6863 17.6863 29 21 29C24.3137 29 27 31.6863 27 35Z"
                  fill="currentColor" fill-rule="evenodd"></path>
              </svg>
               <div class="watchlist-tooltip tooltip trailer-tooltip">Watch Trailer</div>
              </span>
               <span class="mark">
                <svg aria-hidden="true" class="rkbrtb0 rkbrtb1 rkbrtb3 _1v25wbq5k" fill="currentColor" height="48"
                  viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 24.6195L21 32.121L34.5 18.6225L32.3775 16.5L21 27.879L15.6195 22.5L13.5 24.6195Z"
                    fill="currentColor"></path>
                  <path clip-rule="evenodd"
                    d="M12.333 6.53914C15.7865 4.23163 19.8466 3 24 3C29.5696 3 34.911 5.21249 38.8493 9.15076C42.7875 13.089 45 18.4305 45 24C45 28.1534 43.7684 32.2135 41.4609 35.667C39.1534 39.1204 35.8736 41.812 32.0364 43.4015C28.1991 44.9909 23.9767 45.4068 19.9031 44.5965C15.8295 43.7862 12.0877 41.7861 9.15077 38.8492C6.21386 35.9123 4.21381 32.1705 3.40352 28.0969C2.59323 24.0233 3.0091 19.8009 4.59854 15.9636C6.18798 12.1264 8.8796 8.84665 12.333 6.53914ZM13.9997 38.9665C16.9598 40.9443 20.4399 42 24 42C28.7739 42 33.3523 40.1036 36.7279 36.7279C40.1036 33.3523 42 28.7739 42 24C42 20.4399 40.9443 16.9598 38.9665 13.9997C36.9886 11.0397 34.1774 8.73255 30.8883 7.37017C27.5992 6.00779 23.98 5.65133 20.4884 6.34586C16.9967 7.0404 13.7894 8.75473 11.2721 11.2721C8.75474 13.7894 7.04041 16.9967 6.34587 20.4884C5.65134 23.98 6.0078 27.5992 7.37018 30.8883C8.73256 34.1774 11.0397 36.9886 13.9997 38.9665Z"
                    fill="currentColor" fill-rule="evenodd"></path>
                </svg>
                <div class="watchlist-tooltip tooltip">Mark as Watched</div>
            </span>

          </div>
          <div class="mv-description expanded ">
           ${movie.summary}
          </div>
          <div class="more-less-div">
           <div class="more-less-btn">More
           </div>
           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline fa fa-chevron-down ">
                <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" class="">
                </path>
              </svg>
          </div>
        </div>
      </div>
      <div class="watchTrailer">Watch Trailer</div>
      <iframe  width="500" height="315" src="https://www.youtube.com/embed/${movie.code}"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
   
`
document.querySelector('.js-section-1').innerHTML = movieSummary
const moreDiv = document.querySelector('.more-less-div');
const moreBtn = document.querySelector('.more-less-btn');
const mvDescription = document.querySelector('.mv-description');
const svg = document.querySelector('.svg-inline');

moreDiv.addEventListener('click', () => {

  if (mvDescription.classList.contains('expanded')) {
    mvDescription.classList.remove('expanded')
    moreBtn.textContent = 'Less'
    svg.style.transform = `rotate(${180}deg)`
  }
  else {
    mvDescription.classList.add('expanded')
    moreBtn.textContent = 'More'
    svg.style.transform = `rotate(${360}deg)`
  }
});
const menu5Btn = document.getElementById('menu5-btn');
const menu5Content = document.getElementById('menu5-content');
menu5Btn.addEventListener('click',()=>{
  menu5Content.classList.toggle('active');
});
document.addEventListener('click',(event)=>{
  if(!menu5Btn.contains(event.target)&&!menu5Content.contains(event.target)){
    menu5Content.classList.remove('active')
  }
})