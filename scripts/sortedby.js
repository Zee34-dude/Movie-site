import { movies } from "./movies.js";
const url = new URL(window.location.href);
const sortedId = url.searchParams.get('sort_by')
export function sortMovies() {

  let newMovie = []
  movies.forEach((movie) => {
    if (sortedId) {
      if (movie.sort === sortedId) {
        newMovie.unshift(movie)
      }
    }
    else if (!sortedId) {
      newMovie = movies
    }

  });
  return newMovie
};

const sorts = [
  {
    name: 'popularity',
    id:''
  },
  {
    name: 'Trending',
    id: '?sort_by=Trending'

  },
  {
    name: 'Alphabetical',
    id: '?sort_by=alphabet'

  },
  {
    name: 'Release Year',
    id: '?sort_by=release'

  },
  {
    name: 'IMDB score',
    id: '?sort_by=imdb'

  },
  {
    name: 'Rotten Tomatoes score',
    id: '?sort_by=Rotten'

  },
  {
    name: 'TMDB Popularity',
    id:  '?sort_by=tmdb'

  },

  {
    name: 'Random',
    id:  '?sort_by=Random'

  }
]
let optionSummary = ''
sorts.forEach((option) => { 
  optionSummary+=
  `
  <a href="movies.html${option.id}"class
  ="sort-options" data-sort-id="${option.id}"><li>${option.name}</li></a>`
  document.querySelector('.js-dropdown-menu').innerHTML=optionSummary
 
});

const sortSummary=document.querySelector('.js-sorted-by')
if(sortSummary){
sortSummary.innerHTML=`sorted by ${sortedId}`
if(sortedId===null){
  sortSummary.innerHTML=`sorted by popularity`
}
}
