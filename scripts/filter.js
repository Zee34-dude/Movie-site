 export function renderFilterSummary() {
  const filterOptions = [
    {
      name: 'All',
      id: '1'
    },
    {
      name: 'Movies',
      id: '2'
    },
    {
      name: 'TV Shows',
      id: '3'
    },
  ]
  let filterSummary = ''

  filterOptions.forEach((filterOption) => {

    filterSummary +=
      `
     <h1 class="filter-option js-filter-option-${filterOption.id}" data-movie-id="${filterOption.id}" id="${filterOption.id}">${filterOption.name}</h1>
  `
    const filter=document.querySelector('.js-filter-container');
    if(filter){
    filter.innerHTML = filterSummary;
    }



  });
  const active=
  document.querySelector('.js-filter-option-1');
  if(active){
  active.classList.add('action')
  }

  const filterSelectors = document.querySelectorAll('.filter-option');
  filterSelectors.forEach((selector) => {
    selector.addEventListener('click', () => {
      const { movieId } = selector.dataset

      const filterChoice = document.querySelector(`.js-filter-option-${movieId}`);
      console.log(filterChoice)
      if (!filterChoice.classList.contains('action')) {
        turnOffPreviousButton()
        filterChoice.classList.add('action')
      }

    });
  });

  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.action')
    if (previousButton) {
      previousButton.classList.remove('action')
    }
  }
  
}
