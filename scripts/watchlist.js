
export let watchlist;

loadFromStorage()

function loadFromStorage() {

  watchlist = JSON.parse(localStorage.getItem('watchlist'));
  if (!watchlist) {
    watchlist = []
  }
}
function saveToStorage() {
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

export function addToWatchlist(movieId) {
  let matchingMovie;
  watchlist.forEach((movie) => {
    if (movieId === movie.movieId) {
      matchingMovie = movie
    }

  });

  if (!matchingMovie) {
    watchlist.push({
      movieId: movieId,

    })
  }
  saveToStorage()
};


export function removeFromWatchlist(movieId) {
 
  const newWatchlist = [];
  // watchlist.forEach((movie) => {
  //   if (movie.movieId !== movieId) {
  //     newWatchlist.push(movie);
  //   }
  // });
  // watchlist = newWatchlist;
  watchlist.filter((movie) => {
    if (movie.movieId !== movieId) {
      newWatchlist.push(movie)
    }
  });
  watchlist = newWatchlist
  saveToStorage(newWatchlist);
}

