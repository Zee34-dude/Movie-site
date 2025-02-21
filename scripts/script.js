import { movies } from "./movies.js";
import { search } from "./utils/dropdowns.js";
import { runMenu5Btn, showHeader,renderWatchlist } from "./utils/dropdowns.js";
import { renderHeaderSummary } from "./utils/header.js";
const divs = document.getElementById('div-container')
const slides = document.querySelectorAll('.slide-1');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
document.querySelector('.header').innerHTML=renderHeaderSummary()
renderPage()
function renderPage() {
  let idx = 0
  let interval = setInterval(run, 5000)
  function run() {
    idx++
    changeSlide()
  }
  function changeSlide() {
    if (idx > slides.length - 1) {
      idx = 0
    }
    else if (idx < 0) {
      idx = slides.length - 1
    }
    divs.style.transform = `translateX(${-idx * 100}dvw)`
  }
  function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 5000)
  }
  rightBtn.addEventListener('click', () => {
    idx++
    changeSlide()
    resetInterval()
  });
  leftBtn.addEventListener('click', () => {
    idx--
    changeSlide()
    resetInterval()
  })
  runMenu5Btn()
  // const menu5Btn = document.getElementById('menu5-btn');
  // const menu5Content = document.getElementById('menu5-content');

  // menu5Btn.addEventListener('click', () => {
  //   menu5Content.classList.toggle('active')
  // });

  // document.addEventListener('click', (event) => {
  //   if (!menu5Btn.contains(event.target) && !menu5Content.contains(event.target)) {
  //     menu5Content.classList.remove('active')
  //   }
  // });
}

function renderMovieSummary() {
  let movieSummary = ''
  movies.slice(0, 12).forEach(movie => {

    movieSummary += `

           <div class="mv-container">
           <div class="image-container">
              <img class="image-fix" src="${movie.Image}" alt="">
            </div>
            <div class="mv-description">
              <span class="left-span">
                <div class="duration">
                  ${movie.duration},<p>${movie.genre}</p>
                </div>
                <div class="movie-title font-16">${movie.name}</div>
              </span>
              <span class="rating font-16">${movie.rating}</span>
            </div>
          </div>
    `

    document.querySelector('.grid-display').innerHTML = movieSummary
  });

  document.querySelector('.browse-btn').addEventListener('click', () => {
    window.location.href = `popular.html`
  })
};
renderMovieSummary()
search()

showHeader()

const windowWidth = window.innerWidth

const playBtn = document

if (windowWidth < 768) {

  slides.forEach((slide) => {
    const detailsEl = slide.querySelector('.details')
    if (detailsEl.offsetHeight < 200) {
      slide.querySelector('.play-btn').style.marginTop = '100px'
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.dataset.page;
  console.log(currentPage)
  const activeLink = document.getElementById(currentPage);
  if (activeLink) {
      activeLink.classList.add('active');
  }
});
renderWatchlist()
//factorials
/*let n=5
let result=1
while(n >1){
result*=n
n--
console.log(result)
}*/