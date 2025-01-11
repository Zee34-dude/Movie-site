import { watchlist } from "../watchlist";
export function runDropDownBtn() {
  // Get buttons and dropdowns
  const menu1Btn = document.getElementById('menu1-btn');
  const menu2Btn = document.getElementById('menu2-btn');
  const menu3Btn = document.getElementById('menu3-btn');
  const menu4Btn = document.getElementById('menu4-btn');
  const menu5Btn = document.getElementById('menu5-btn');
  const menu1Content = document.getElementById('menu1-content');
  const menu2Content = document.getElementById('menu2-content');
  const menu3Content = document.getElementById('menu3-content');
  const menu4Content = document.getElementById('menu4-content');
  const menu5Content = document.getElementById('menu5-content');
  const overlay = document.querySelector('.overlay')
  // Function to toggle dropdown visibility
  function toggleDropdown(menuContent) {
    // Close both dropdowns
    const isActive = menuContent.classList.contains('active');
    menu1Content.classList.remove('active');
    menu2Content.classList.remove('active');
    menu3Content.classList.remove('active');
    // menu4Content.classList.remove('active');

    overlay.classList.remove('active')

    // Open the selected dropdown

    if (!isActive && !(menuContent === menu5Content)) {
      menuContent.classList.add('active');
      overlay.classList.add('active');
    }
    else if (!isActive) {
      menuContent.classList.add('active');

    }
    // else if (isActive) {
    //   menuContent.classList.remove('active');
    //   overlay.classList.remove('active')

    // }

  }

  // Add event listeners for dropdown buttons
  menu1Btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from reaching the document
    toggleDropdown(menu1Content);

  });

  menu2Btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(menu2Content);


  });
  menu3Btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(menu3Content);

  });

  menu4Btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(menu4Content);

  });
  menu5Btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(menu5Content);

  });
  // Close dropdowns when clicking anywhere on the document
  document.addEventListener('click', () => {

  });
  document.addEventListener('click', (event) => {
    menu1Content.classList.remove('active');
    menu2Content.classList.remove('active');
    menu3Content.classList.remove('active');
    overlay.classList.remove('active')

    if (!menu4Btn.contains(event.target) && !menu4Content.contains(event.target)) {
      menu4Content.classList.remove('active')
    }
  })
}
export function runMenu5Btn() {
  const menu5Btn = document.getElementById('menu5-btn');
  const menu5Content = document.getElementById('menu5-content');
  menu5Btn.addEventListener('click', () => {
    menu5Content.classList.toggle('active');
  });
  document.addEventListener('click', (event) => {
    if (!menu5Btn.contains(event.target) && !menu5Content.contains(event.target)) {
      menu5Content.classList.remove('active')
    }
  });

  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-container').classList.toggle('active')
  });
};
export function search() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const search = document.querySelector('.search-input').value
      window.location.href = `popular.html?search=${search}`
    }

  })
}
export function renderWatchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  document.querySelector('.watchlist-count').innerHTML = `${watchlist.length}`
}
export function showHeader() {
  const header = document.querySelector('header');
  const scrollPosition = 200; // Adjust this value to your desired scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY >= scrollPosition) {
      header.classList.add('fixed-header');

    } else {
      header.classList.remove('fixed-header');
    }
  });

}
