import { homeContent } from "./data.js";
import { initThemeToggle } from "./theme.js";

function createLink(link, className = "") {
  const rel = link.external ? ' target="_blank" rel="noreferrer"' : "";
  const classAttr = className ? ` class="${className}"` : "";
  return `<a${classAttr} href="${link.href}"${rel}>${link.label}</a>`;
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
          <strong>${item.title}</strong>
          <p>${item.body}</p>
        </div>
      `
    )
    .join("");

  return `
    <section class="hero" id="top">
      <div class="hero-grid">
        <div>
          <p class="eyebrow">${hero.eyebrow}</p>
          <h1>${hero.name}</h1>
          <p class="intro">${hero.intro}</p>
          <div class="links">${heroLinks}</div>
        </div>
        <div class="hero-meta">${metaCards}</div>
      </div>
    </section>
  `;
}

function renderSummaryCard(section) {
  const highlights = section.highlights
    .map((item) => `<li class="summary-chip">${item}</li>`)
    .join("");
  const meta = section.meta?.length
    ? `<div class="summary-meta">${section.meta
        .map((item) => `<span class="summary-meta-item">${item}</span>`)
        .join("")}</div>`
    : "";
  const projects = section.projects?.length
    ? `
      <div class="summary-project-list">
        ${section.projects
          .map(
            (project) => `
              <article class="summary-project-item">
                <div class="summary-project-copy">
                  <h3>${project.title}</h3>
                  <p>${project.body}</p>
                </div>
                <a class="summary-project-link" href="${project.href}">${project.cta}</a>
              </article>
            `
          )
          .join("")}
      </div>
    `
    : "";
  const secondaryLink = section.secondaryLink
    ? createLink(section.secondaryLink, "text-link")
    : "";

  return `
    <section class="section summary-card" id="${section.id}">
      <div class="summary-top">
        <div>
          <p class="section-label">${section.label}</p>
          <h2>${section.title}</h2>
        </div>
        <p class="summary-description">${section.description}</p>
      </div>
      ${meta}
      ${projects}
      <ul class="summary-highlights">${highlights}</ul>
      <div class="summary-actions">
        ${secondaryLink}
      </div>
    </section>
  `;
}

function renderPage(content) {
  return `
    ${renderHero(content.hero)}
    <div class="overview-grid">
      ${content.sections.map(renderSummaryCard).join("")}
    </div>
    <footer class="footer">
      <p>${content.footer}</p>
    </footer>
  `;
}

document.querySelector("#app").innerHTML = renderPage(homeContent);
initThemeToggle();
