import { homeContent } from "./data.js";
import { renderPage } from "./render.js";

document.querySelector("#app").innerHTML = renderPage(homeContent);
