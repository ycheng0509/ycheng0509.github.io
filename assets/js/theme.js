const STORAGE_KEY = "portfolio-theme";

function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY) || "dark";
}

function getNextLabel(theme) {
  return theme === "dark" ? "Light mode" : "Dark mode";
}

function applyTheme(theme, button) {
  document.documentElement.setAttribute("data-theme", theme);

  if (button) {
    const nextLabel = getNextLabel(theme);
    button.textContent = nextLabel;
    button.setAttribute("aria-label", `Switch to ${nextLabel.toLowerCase()}`);
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

    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme, button);
  });
}
