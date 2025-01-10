const watchlist = JSON.parse(localStorage.getItem('watchlist'))
console.log(watchlist)

export function renderHeaderSummary() {
  let headerSummary = ''

  headerSummary =

   ` <nav>
      <div class="logo">
        <div class="box"></div>Climax
      </div>
      <span class='nav-container'>
        <ul class="nav-bar">

          <li class="nav-btn active">
            <a id="home" class="myLink " href="home.html">Home</a>
          </li>

          <li id="about" class="nav-btn active">
            <a class="myLink" href="about.html">About</a>
          </li>

          <li class="nav-btn ">
            <a id="popular" href="popular.html" class="myLink ">
              Popular
            </a>
          </li>
          <li class="nav-btn">
            <a id="contact" class="myLink" href="">
              Contact
            </a>
          </li>
          <li class="nav-btn">
            <a id="watchlist" class="myLink" href="watchlist.html">
              Watchlist
            </a>
            <div class="watchlist-count">1</div>
          </li>

        </ul>
        <div class="right-section">
          <ul>
            <li class="type-selection">
              <span class="js-search-btn">
                <svg id="menu5-btn" aria-hidden="true" class="js-search-btn search-btn " fill="currentColor"
                  height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M45.5 43.3788L34.1718 32.0507C36.8939 28.7827 38.2513 24.5911 37.9616 20.3479C37.672 16.1046 35.7575 12.1364 32.6166 9.26865C29.4757 6.40093 25.35 4.85455 21.098 4.95117C16.846 5.04779 12.7948 6.77999 9.78742 9.78742C6.77999 12.7948 5.04779 16.846 4.95117 21.098C4.85455 25.35 6.40093 29.4757 9.26865 32.6166C12.1364 35.7575 16.1046 37.672 20.3479 37.9616C24.5911 38.2513 28.7827 36.8939 32.0507 34.1718L43.3788 45.5L45.5 43.3788ZM7.99999 21.5C7.99999 18.8299 8.79175 16.2199 10.2751 13.9998C11.7585 11.7797 13.867 10.0494 16.3338 9.02762C18.8006 8.00583 21.515 7.73849 24.1337 8.25939C26.7525 8.78029 29.1579 10.066 31.0459 11.954C32.9339 13.8421 34.2197 16.2475 34.7406 18.8663C35.2615 21.485 34.9941 24.1994 33.9724 26.6662C32.9506 29.133 31.2202 31.2414 29.0002 32.7248C26.7801 34.2082 24.17 35 21.5 35C17.9208 34.996 14.4893 33.5724 11.9584 31.0415C9.42755 28.5107 8.00396 25.0792 7.99999 21.5Z"
                    fill="currentColor"></path>
                </svg>
              </span>
              <div class=" input-dropdown" id="menu5-content">
                <input id="search-input" class="search-input" placeholder="Search here" type="text">
              </div>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </li>
            <li>
              <a href="">
                Account
              </a>
            </li>
          </ul>
        </div>
      </span>

      <div class="hamburger">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-bars"
          style="width: 20px; font-size: 16px; margin: 0px; margin-inline-start: 3px;" data-v-701c8f36="">
          <path fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            data-v-701c8f36="" class="">
          </path>
        </svg>
      </div>
    </nav>`


  return headerSummary
}

