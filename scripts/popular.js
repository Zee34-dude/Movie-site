import { renderFilterSummary } from './filter.js'
import { runDropDownBtn } from './dropdowns.js'
import { sortMovies } from './sortedby.js'
import { movies } from './movies.js'

let newMovies = sortMovies()
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
  console.log(filteredMovies)
  filteredMovies.forEach((movie) => {
    movieSummary +=
      `
    <div class="mv-container">
    <a href=tracking.html?movieId=${movie.id}>
    <div class="image-container">
        <img class="image-fix" src="${movie.Image}" alt="">
        <svg data-v-6419283a="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="ribbon svg-inline--fa fa-bookmark ribbon--left"><path data-v-6419283a="" fill="currentColor" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" class=""></path>
        </svg>
      </div>
      </a>
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
  document.querySelector('.movies-count').innerHTML = `${filteredMovies.length} titles`
}


const filterSelectors = document.querySelectorAll('.filter-option');
filterSelectors.forEach((selector) => {
  selector.addEventListener('click', () => {
    const { movieId } = selector.dataset
    renderMovieSummary(movieId)
  })
});

const resetBtn = document.querySelector('.js-reset-btn');
resetBtn.addEventListener('click', () => {
  window.location.href = `#1`
})
runDropDownBtn()




