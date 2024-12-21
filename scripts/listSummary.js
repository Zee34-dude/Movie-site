
import { getMovie} from "./movies.js"
import { removeFromWatchlist} from "./watchlist.js";
import {search,runMenu5Btn,renderWatchlist} from "./utils/dropdowns.js";
 

function renderWatchlistSummary() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  console.log(watchlist)
  let watchlistSummary = '';
  
  watchlist.forEach((movie, index) => {
    const movieId = movie.movieId
    const matchingMovie = getMovie(movieId)
    watchlistSummary += ` 
  
        <div class="movie-container mv-container${matchingMovie.id}">   
            <div class="image-container">
  
          <a href=tracking.html?movieId=${matchingMovie.id}>
              <img class="image-fix" src="${matchingMovie.Image}" alt="">
          </a>
              </div>
              
               <div class="movie-info">
                 <h1 class="mv-title">${matchingMovie.name}</h1>
                 <div class="genre grey margin-top">
                  ${matchingMovie.genre}
                 </div>
                 <div class="grey flex-row margin-top">
                   <span class="mv-year">${matchingMovie.year}</span>
                   <span>${matchingMovie.rating}</span>
                 </div>
                 <div class="flex-row margin-top watchlist-div">
                   <span class="watch-list js-watch-list" data-movie-id="${matchingMovie.id}">
                     <svg data-v-6419283a="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="ribbon svg-inline--fa fa-bookmark ribbon--left"><path data-v-6419283a="" fill="currentColor" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" class=""></path>
                    </svg>                 
                    
                    <div class="watchlist-tooltip">Remove from Watchlist</div>
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
               </div>
          </div>
  `


  });
  runMenu5Btn()
  const watchSummary = document.querySelector('.js-watchlist-grid')

  watchSummary.innerHTML = watchlistSummary;


  const watchBtn = document.querySelectorAll('.js-watch-list')
  watchBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const { movieId } = btn.dataset
      removeFromWatchlist(movieId);
      renderWatchlist()
      renderWatchlistSummary();
    });
  });

};
renderWatchlistSummary()
search()
renderWatchlist()