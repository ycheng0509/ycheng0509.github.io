import { operatorToolingContent } from "./data.js";
import { initThemeToggle } from "./theme.js";
import { initPageTransitions } from "./transitions.js";
import { esc, safeHref } from "./utils.js";

function createLink(link, className = "") {
  const rel = link.external ? ' target="_blank" rel="noreferrer"' : "";
  const classAttr = className ? ` class="${esc(className)}"` : "";
  return `<a${classAttr} href="${safeHref(link.href)}"${rel}>${esc(link.label)}</a>`;
}

function renderHero(hero) {
  const heroLinks = hero.links
    .map((link) =>
      createLink(link, link.variant === "primary" ? "button" : "button-secondary")
    )
    .join("");

  const metaCards = hero.meta
    .map(
      (item) => `
        <div class="meta-card">
          <strong>${esc(item.title)}</strong>
          <p>${esc(item.body)}</p>
        </div>
      `
    )
    .join("");

  return `
    <section class="hero hero-project" id="top">
      <div class="hero-grid">
        <div>
          <p class="eyebrow">${esc(hero.eyebrow)}</p>
          <h1>${esc(hero.name)}</h1>
          <p class="intro">${esc(hero.intro)}</p>
          <div class="links">${heroLinks}</div>
        </div>
        <div class="hero-meta">${metaCards}</div>
      </div>
    </section>
  `;
}

function renderPage(content) {
  const snapshot = content.snapshot
    .map(
      (item) => `
        <article class="project-card">
          <p class="project-type">${esc(item.label)}</p>
          <h3>${esc(item.value)}</h3>
        </article>
      `
    )
    .join("");

  const narrative = content.sections
    .map(
      (section) => `
        <article class="project-card">
          <p class="project-type">${esc(section.title)}</p>
          <p>${esc(section.body)}</p>
        </article>
      `
    )
    .join("");

  const pillars = content.pillars
    .map(
      (item) => `
        <article class="project-card">
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.body)}</p>
        </article>
      `
    )
    .join("");

  const outcomes = content.outcomes
    .map((item) => `<li class="detail-list-item">${esc(item)}</li>`)
    .join("");

  return `
    ${renderHero(content.hero)}
    <section class="section">
      <div class="section-header">
        <div>
          <p class="section-label">Snapshot</p>
          <h2>Project Overview</h2>
        </div>
      </div>
      <div class="project-grid">${snapshot}</div>
    </section>
    <section class="section">
      <div class="section-header">
        <div>
          <p class="section-label">Context</p>
          <h2>Why This Product Exists</h2>
        </div>
      </div>
      <div class="project-grid">${narrative}</div>
    </section>
    <section class="section">
      <div class="section-header">
        <div>
          <p class="section-label">System</p>
          <h2>Core Product Areas</h2>
        </div>
      </div>
      <div class="project-grid">${pillars}</div>
    </section>
    <section class="section">
      <div class="section-header">
        <div>
          <p class="section-label">Goals</p>
          <h2>Target Outcomes</h2>
        </div>
      </div>
      <ul class="detail-list">${outcomes}</ul>
    </section>
    <footer class="footer">
      <p>This page is the first standalone Digital Product case study and can be used as the template for future project pages.</p>
    </footer>
  `;
}

document.querySelector("#app").innerHTML = renderPage(operatorToolingContent);
initThemeToggle();
initPageTransitions();
