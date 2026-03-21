const ESC_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ESC_MAP[c]);
}

const SAFE_PROTOCOLS = new Set(["https:", "http:", "mailto:"]);

export function safeHref(href) {
  if (!href) return "#";
  try {
    const url = new URL(href, window.location.href);
    return SAFE_PROTOCOLS.has(url.protocol) || url.origin === window.location.origin
      ? esc(href)
      : "#";
  } catch {
    return "#";
  }
}
