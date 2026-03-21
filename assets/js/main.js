import { homeContent, projectDetails } from "./data.js";
import { initThemeToggle } from "./theme.js";
import { initPageTransitions } from "./transitions.js";

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
                ${
                  project.id
                    ? `<button class="summary-project-link" type="button" data-project-open="${project.id}">${project.cta}</button>`
                    : `<span class="summary-project-muted">${project.cta}</span>`
                }
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

function renderProjectPanel(project) {
  const snapshot = project.snapshot
    .map(
      (item) => `
        <article class="project-card">
          <p class="project-type">${item.label}</p>
          <h3>${item.value}</h3>
        </article>
      `
    )
    .join("");

  const narrative = project.sections
    .map(
      (section) => `
        <article class="project-card">
          <p class="project-type">${section.title}</p>
          <p>${section.body}</p>
        </article>
      `
    )
    .join("");

  const pillars = project.pillars
    .map(
      (item) => `
        <article class="project-card">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");

  const outcomes = project.outcomes
    .map((item) => `<li class="detail-list-item">${item}</li>`)
    .join("");

  return `
    <div class="project-panel-shell">
      <div class="project-panel-top">
        <div>
          <p class="eyebrow">${project.hero.eyebrow}</p>
          <h2 class="project-panel-title">${project.hero.name}</h2>
          <p class="project-panel-intro">${project.hero.intro}</p>
        </div>
        <button class="project-panel-close" type="button" data-project-close aria-label="Close project detail">Close</button>
      </div>
      <div class="summary-meta">
        ${project.hero.meta
          .map((item) => `<span class="summary-meta-item">${item.title}</span>`)
          .join("")}
      </div>
      <section class="section project-panel-section">
        <div class="section-header">
          <div>
            <p class="section-label">Snapshot</p>
            <h2>Project Overview</h2>
          </div>
        </div>
        <div class="project-grid">${snapshot}</div>
      </section>
      <section class="section project-panel-section">
        <div class="section-header">
          <div>
            <p class="section-label">Context</p>
            <h2>Why This Product Exists</h2>
          </div>
        </div>
        <div class="project-grid">${narrative}</div>
      </section>
      <section class="section project-panel-section">
        <div class="section-header">
          <div>
            <p class="section-label">System</p>
            <h2>Core Product Areas</h2>
          </div>
        </div>
        <div class="project-grid">${pillars}</div>
      </section>
      <section class="section project-panel-section">
        <div class="section-header">
          <div>
            <p class="section-label">Goals</p>
            <h2>Target Outcomes</h2>
          </div>
        </div>
        <ul class="detail-list">${outcomes}</ul>
      </section>
    </div>
  `;
}

function renderPage(content) {
  return `
    ${renderHero(content.hero)}
    <div class="overview-grid">
      ${content.sections.map(renderSummaryCard).join("")}
    </div>
    <div class="project-panel-backdrop" data-project-backdrop hidden></div>
    <section class="project-panel" data-project-panel hidden aria-hidden="true"></section>
    <footer class="footer">
      <p>${content.footer}</p>
    </footer>
  `;
}

function initProjectPanel() {
  const panel = document.querySelector("[data-project-panel]");
  const backdrop = document.querySelector("[data-project-backdrop]");

  if (!panel || !backdrop) {
    return;
  }

  function closePanel() {
    document.body.classList.remove("project-panel-open");
    panel.classList.remove("is-visible");
    backdrop.classList.remove("is-visible");

    window.setTimeout(() => {
      panel.hidden = true;
      backdrop.hidden = true;
      panel.setAttribute("aria-hidden", "true");
      panel.innerHTML = "";
    }, 260);
  }

  function openPanel(projectId) {
    const project = projectDetails[projectId];

    if (!project) {
      return;
    }

    panel.innerHTML = renderProjectPanel(project);
    panel.hidden = false;
    backdrop.hidden = false;
    panel.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
      document.body.classList.add("project-panel-open");
      panel.classList.add("is-visible");
      backdrop.classList.add("is-visible");
    });
  }

  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-project-open]");

    if (opener) {
      openPanel(opener.getAttribute("data-project-open"));
      return;
    }

    if (
      event.target.closest("[data-project-close]") ||
      event.target.closest("[data-project-backdrop]")
    ) {
      closePanel();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      closePanel();
    }
  });
}

document.querySelector("#app").innerHTML = renderPage(homeContent);
initThemeToggle();
initPageTransitions();
initProjectPanel();
