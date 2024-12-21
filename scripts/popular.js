import { renderFilterSummary } from './filter.js'
import { runDropDownBtn, runMenu5Btn, search } from './utils/dropdowns.js'
import { sortMovies } from './sortedby.js'
import { addToWatchlist, removeFromWatchlist, watchlist } from './watchlist.js'

runMenu5Btn()
runDropDownBtn()
let newMovies = sortMovies();
renderMovieSummary()
renderFilterSummary()
function renderMovieSummary(productId) {
  let movieSummary = ''
  let filteredMovies = newMovies


  if (productId === '2' || productId === '3') {
    filteredMovies = newMovies.filter((movie) => {
      return movie.type === productId
    })

  }

  filteredMovies.forEach((movie) => {
    movieSummary +=
      `
    <div class="mv-container">
    
    <div class="image-container" data-test-id="${movie.id}">
      <a href=tracking.html?movieId=${movie.id}>
        <img class="image-fix" src="${movie.Image}" alt="">
        </a>
      <span class="${watchlist?.map(el => el.movieId)?.includes(movie.id) ? "active" : ""} js-watch-btn js-watch-btn${movie.id}" data-movie-id="${movie.id}">
        <svg data-v-6419283a="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="ribbon svg-inline--fa fa-bookmark ribbon--left"><path data-v-6419283a="" fill="currentColor" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" class=""></path>
        </svg>
     </span>
      </div>
      
       <div class="mv-description">
        <span class="left-span">
          <div class="duration">
            ${movie.duration} ,<p>${movie.genre}</p>
          </div>
          <div class="movie-title font-16 text-overflow">${movie.name}</div>
        </span>
        <span class="rating">${movie.rating}</span>
      </div>

    </div>
  `
    document.querySelector('.js-grid-display').innerHTML = movieSummary

  });
  if (filteredMovies.length === 0) {
    document.querySelector('.js-grid-display').innerHTML = 'No results found'
  }
  document.querySelector('.movies-count').innerHTML = `${filteredMovies.length} titles`
  const addBtn = document.querySelectorAll('.js-watch-btn');
  addBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const { movieId } = btn.dataset

      if (watchlist?.map(el => el.movieId)?.includes(movieId)) {
        removeFromWatchlist(movieId)
        document.querySelector(`.js-watch-btn${movieId}`).classList.remove('active')
      }
      else {
        addToWatchlist(movieId)
        document.querySelector(`.js-watch-btn${movieId}`).classList.add('active')
      }


    });

  });
  

  // addBtn.forEach(btn => {
  //   if (localStorage.getItem(`isActive-${btn.dataset.movieId}`) === 'true') {
  //     btn.classList.add('active');
  //   }
  // });



};
const filterSelectors = document.querySelectorAll('.filter-option');
filterSelectors.forEach((selector) => {
  selector.addEventListener('click', () => {
    const { movieId } = selector.dataset
    renderMovieSummary(movieId)
  })
});

const resetBtn = document.querySelector('.js-reset-btn');
resetBtn.addEventListener('click', () => {
  window.location.href = `home.html`

});

search();







