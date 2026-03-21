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

function renderProject(project) {
  const links = project.links?.length
    ? `
      <div class="project-links">
        ${project.links.map((link) => createLink(link)).join("")}
      </div>
    `
    : "";

  if (project.featured) {
    return `
      <article class="project-card featured">
        <div>
          <p class="project-type">${project.type}</p>
          <h3>${project.title}</h3>
          <p>${project.body}</p>
          ${links}
        </div>
        <div class="featured-note">${project.note ?? ""}</div>
      </article>
    `;
  }

  return `
    <article class="project-card">
      <p class="project-type">${project.type}</p>
      <h3>${project.title}</h3>
      <p>${project.body}</p>
      ${links}
    </article>
  `;
}

function renderSection(section) {
  return `
    <section class="section" id="${section.id}">
      <div class="section-header">
        <div>
          <p class="section-label">${section.label}</p>
          <h2>${section.title}</h2>
        </div>
        <p>${section.description}</p>
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
      <p>${content.footer}</p>
    </footer>
  `;
}
