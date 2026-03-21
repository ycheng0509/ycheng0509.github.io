const STORAGE_KEY = "portfolio-theme";

function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  } catch {
    return "dark";
  }
}

function applyTheme(theme, button) {
  document.documentElement.setAttribute("data-theme", theme);

  if (button) {
    button.textContent = theme === "dark" ? "☀️" : "🌙";
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

export function initThemeToggle() {
  const button = document.querySelector("[data-theme-toggle]");
  const initialTheme = getStoredTheme();

  applyTheme(initialTheme, button);

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // ignore
    }
    applyTheme(nextTheme, button);
  });
}
