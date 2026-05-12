/**
 * Base path for GitHub Pages static export (see next.config).
 * Mirrors usage in pages; set NEXT_BASE_PATH at build time when needed.
 */
export function getBasePath(): string {
  return process.env.NEXT_BASE_PATH ?? "";
}

/** Public asset URL (leading slash on path). */
export function assetUrl(path: string): string {
  const base = getBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/**
 * Strip configured basePath from Next pathname for route matching (client).
 */
export function routePath(pathname: string | null): string {
  if (!pathname) return "/";
  const base = getBasePath();
  if (!base) return pathname || "/";
  if (pathname === base || pathname === `${base}/`) return "/";
  if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length) || "/";
  return pathname;
}
