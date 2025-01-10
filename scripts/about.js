import { renderHeaderSummary } from "./utils/header.js";
import { runMenu5Btn, showHeader,renderWatchlist } from "./utils/dropdowns.js";
import { search } from "./utils/dropdowns.js";

document.querySelector('header').innerHTML=renderHeaderSummary()
runMenu5Btn()
showHeader()
renderWatchlist()
search()