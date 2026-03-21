import { legacyContent } from "./data.js";
import { renderPage } from "./render.js";
import { initThemeToggle } from "./theme.js";
import { initPageTransitions } from "./transitions.js";

document.querySelector("#app").innerHTML = renderPage(legacyContent);
initThemeToggle();
initPageTransitions();
