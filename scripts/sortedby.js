import { movies } from "./movies.js";

const sorts = [
  {
    name: 'popularity',
    id: 'popular'
  },
  {
    name: 'Trending',
    id: 'Trending'

  },
  {
    name: 'Alphabetical',
    id: 'alphabet'

  },
  {
    name: 'Release Year',
    id: 'release'

  },
  {
    name: 'IMDB score',
    id: 'imdb'

  },
  {
    name: 'Rotten Tomatoes score',
    id: 'Rotten'

  },
  {
    name: 'TMDB Popularity',
    id: 'tmdb'

  },

  {
    name: 'Random',
    id: 'Random'

  }
]
let optionSummary = ''
sorts.forEach((option) => {
  optionSummary +=
    `
  <a id="${option.id}"class
  ="sort-options" data-sort-id="${option.id}"><li>${option.name}</li></a>`
  document.querySelector('.js-dropdown-menu').innerHTML = optionSummary

});

const sortSummary = document.querySelector('.js-sorted-by')

function updateURl(param, value) {
  const url = new URL(window.location);
  url.searchParams.set(param, value);
  // Update the URL and reload the page
  // window.location.href = url;
  // window.history.replaceState({}, "", url);
 window.history.pushState({}, '', url)
}
// window.addEventListener("DOMContentLoaded", updateURl);

// Reinitialize slider on window resize
window.addEventListener("resize", updateURl);
window.addEventListener("resize",getQueryParam);
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
function updateGenres(newGenre) {
  const url = new URL(window.location);
  let genres = getQueryParam('genres');
  // If genres exist, append the new genre, otherwise set it
  if (genres) {
    let genresArray = genres.split(',');
    if (!genresArray.includes(newGenre)) {
      genresArray.push(newGenre);
    }
    url.searchParams.set('genres', genresArray.join(','));
  } else {
    url.searchParams.set('genres', newGenre);
  }
  // Update the URL without reloading the page
  window.history.pushState({ genres }, '', url);
}
window.addEventListener('popstate', (event) => {
  const url = new URL(window.location);
  if (event.state) {
    // Force reload the page with the new state in URL
    window.location.href = url.href;
  }
});
let newMovie = []
export function sortMovies() {
  let genres = getQueryParam('genres')
  if (genres) {
    genres = genres.split(',')
  }
  console.log(genres)
  const sortBy = getQueryParam('sort_by');
  const rating = getQueryParam('rating');
  const releaseYear = getQueryParam('year');
  const search = getQueryParam('search');

  newMovie = movies

  if (genres) {
    newMovie = movies.filter((movie) => {
      // Check if movie.sort exists and is an array
      if (Array.isArray(movie.sort)) {
        // Check if there's any overlap between genres and movie.sort

        return genres.some((genre) => movie.sort.includes(genre));
      }
      return false;
    });
  }

  if (sortBy) {
    newMovie = newMovie.filter((movie) => {
      if (Array.isArray(movie.sort)) {
        // Check if there's any overlap between genres and movie.sort
        return movie.sort.includes(sortBy);
      };
    });
  };
  if (rating) {
    newMovie = newMovie.filter((movie) => {
      if (Array.isArray(movie.sort)) {
        // Check if there's any overlap between genres and movie.sort

        return movie.sort.includes(rating);
      };
    });
  };
  if (releaseYear) {
    newMovie = findAllCloseValues(releaseYear, 10)
  }
  if (search) {
    newMovie = newMovie.filter(movie => {
      return movie.name.toLowerCase().includes(search.toLowerCase()) || movie.sort.includes(search.toLowerCase())

    });

  }
  if (sortSummary) {
    sortSummary.innerHTML = `sorted by ${sortBy}`
    if (sortBy === null) {
      sortSummary.innerHTML = `sorted by popularity`
    }
  };
 
  return newMovie
};
console.log(movies)

// genres DOM selector object
{
  document.getElementById('animation').addEventListener('click', () => {
    updateGenres('animation')
  });
  document.getElementById('anime').addEventListener('click', () => {
    updateGenres('anime')
  });
  document.getElementById('action').addEventListener('click', () => {
    updateGenres('action')
  })
  document.getElementById('thrl').addEventListener('click', () => {
    updateGenres('thrl')
  });
  document.getElementById('adv').addEventListener('click', () => {
    updateGenres('adv')
  });
  document.getElementById('cmdy').addEventListener('click', () => {
    updateGenres('cmdy')
  });
  document.getElementById('rmnce').addEventListener('click', () => {
    updateGenres('rmnce');
  });
  document.getElementById('crm').addEventListener('click', () => {
    updateGenres('crm')
  });
  document.getElementById('drm').addEventListener('click', () => {
    updateGenres('drm')
  })
}
//sort_by DOM selector object
{
  document.getElementById('popular').addEventListener('click', () => {

    const url = new URL(window.location);
    // Remove the specific query parameter
    url.searchParams.delete('sort_by');
    window.history.pushState({}, '', url);
    window.location.href = ''

  })
  document.getElementById('Trending').addEventListener('click', () => {
    updateURl('sort_by', 'Trending')
  });
  document.getElementById('alphabet').addEventListener('click', () => {
    updateURl('sort_by', 'alphabet')
  });

  document.getElementById('alphabet').addEventListener('click', () => {
    updateURl('sort_by', 'alphabet')
  });

  document.getElementById('imdb').addEventListener('click', () => {
    updateURl('sort_by', 'imdb')
  });
  document.getElementById('release').addEventListener('click', () => {
    updateURl('sort_by', 'year')
  });
  document.getElementById('Random').addEventListener('click', () => {
    updateURl('sort_by', 'Random')
  });
}

// DOM selection by rating
{
  const slider = document.getElementById('slider')
  const valueDisplay = document.getElementById('display')
  valueDisplay.textContent = slider.value
  window.addEventListener('load', () => {
    const savedValue = JSON.parse(localStorage.getItem('Value'));

    if (savedValue !== null) {
      slider.value = savedValue;
      valueDisplay.textContent = savedValue
    }
  });
  slider.addEventListener('input', () => {
    const currentValue = slider.value
    valueDisplay.textContent = currentValue
    localStorage.setItem('Value', JSON.stringify(currentValue));
  });
  slider.addEventListener('click', () => {
    updateURl('rating', slider.value)

  })
}


{
  const slider1 = document.getElementById('slider1')
  const valueDisplay = document.getElementById('year-display');
  window.addEventListener('load', () => {
    const savedValue = JSON.parse(localStorage.getItem('sliderValue'));
    console.log(savedValue)
    if (savedValue !== null) {
      slider1.value = savedValue;
      valueDisplay.textContent = savedValue
    }
  })
  slider1.addEventListener('input', () => {
    const currentValue = slider1.value
    valueDisplay.textContent = currentValue
    localStorage.setItem('sliderValue', JSON.stringify(currentValue));
  });
  slider1.addEventListener('click', () => {
    updateURl('year', slider1.value)
  })
}

function findAllCloseValues(target, threshold) {
  let yearArray = []

  return newMovie.filter(movie => {
    let finalYear;
    console.log(finalYear)
    yearArray.push(movie.year);
    const years = getFirstNumbers(yearArray)
    years.filter((year) => {

      if (Math.abs(target - year).toString() <= threshold) {
        finalYear = year
      }

    });
    return movie.year.includes(finalYear)
  }
  );

}


function getFirstNumbers(arr) {
  return arr.map(str => {
    console.log(arr)
    const match = str.match(/\d+/);
    console.log(match)
    return match ? match[0] : null;
  });
};


