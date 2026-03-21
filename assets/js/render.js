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
    <section class="hero" id="top">
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

function renderProject(project) {
  const links = project.links?.length
    ? `
      <div class="project-links">
        ${project.links.map((link) => createLink(link)).join("")}
      </div>
    `
    : "";

  if (project.featured) {
    const idAttr = project.id ? ` id="${esc(project.id)}"` : "";
    return `
      <article class="project-card featured"${idAttr}>
        <div>
          <p class="project-type">${esc(project.type)}</p>
          <h3>${esc(project.title)}</h3>
          <p>${esc(project.body)}</p>
          ${links}
        </div>
        <div class="featured-note">${esc(project.note ?? "")}</div>
      </article>
    `;
  }

  return `
    <article class="project-card">
      <p class="project-type">${esc(project.type)}</p>
      <h3>${esc(project.title)}</h3>
      <p>${esc(project.body)}</p>
      ${links}
    </article>
  `;
}

function renderSection(section) {
  return `
    <section class="section" id="${esc(section.id)}">
      <div class="section-header">
        <div>
          <p class="section-label">${esc(section.label)}</p>
          <h2>${esc(section.title)}</h2>
        </div>
        <p>${esc(section.description)}</p>
      </div>
      <div class="project-grid">
        ${section.projects.map(renderProject).join("")}
      </div>
    </section>
  `;
}

export function renderPage(content) {
  return `
    ${renderHero(content.hero)}
    ${content.sections.map(renderSection).join("")}
    <footer class="footer">
      <p>${esc(content.footer)}</p>
    </footer>
  `;
}
