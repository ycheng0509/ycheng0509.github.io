const TRANSITION_KEY = "portfolio-page-transition";
const TRANSITION_MS = 320;

function isInternalNavigation(link) {
  if (!link || !link.href) {
    return false;
  }

  const url = new URL(link.href, window.location.href);

  if (url.origin !== window.location.origin) {
    return false;
  }

  if (link.target && link.target !== "_self") {
    return false;
  }

  if (link.hasAttribute("download")) {
    return false;
  }

  if (url.pathname === window.location.pathname && url.hash) {
    return false;
  }

  return true;
}

export function initPageTransitions() {
  if (sessionStorage.getItem(TRANSITION_KEY) === "enter") {
    document.documentElement.setAttribute("data-page-state", "enter");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.setAttribute("data-page-state", "idle");
        sessionStorage.removeItem(TRANSITION_KEY);
      });
    });
  } else {
    document.documentElement.setAttribute("data-page-state", "idle");
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!isInternalNavigation(link)) {
      return;
    }

    event.preventDefault();
    sessionStorage.setItem(TRANSITION_KEY, "enter");
    document.documentElement.setAttribute("data-page-state", "exit");

    requestAnimationFrame(() => {
      window.setTimeout(() => {
        window.location.href = link.href;
      }, TRANSITION_MS);
    });
  });
}
