import { legacyContent } from "./data.js";
import { renderPage } from "./render.js";
import { initThemeToggle } from "./theme.js";

document.querySelector("#app").innerHTML = renderPage(legacyContent);
initThemeToggle();
