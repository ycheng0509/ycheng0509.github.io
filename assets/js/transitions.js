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

function storageGet(storage, key) {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(storage, key, value) {
  try {
    storage.setItem(key, value);
  } catch {
    // ignore
  }
}

function storageRemove(storage, key) {
  try {
    storage.removeItem(key);
  } catch {
    // ignore
  }
}

export function initPageTransitions() {
  if (storageGet(sessionStorage, TRANSITION_KEY) === "enter") {
    document.documentElement.setAttribute("data-page-state", "enter");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.setAttribute("data-page-state", "idle");
        storageRemove(sessionStorage, TRANSITION_KEY);
      });
    });
  } else {
    document.documentElement.setAttribute("data-page-state", "idle");
  }

  document.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    const link = event.target.closest("a");

    if (!isInternalNavigation(link)) {
      return;
    }

    event.preventDefault();
    storageSet(sessionStorage, TRANSITION_KEY, "enter");
    document.documentElement.setAttribute("data-page-state", "exit");

    requestAnimationFrame(() => {
      window.setTimeout(() => {
        window.location.href = link.href;
      }, TRANSITION_MS);
    });
  });
}
