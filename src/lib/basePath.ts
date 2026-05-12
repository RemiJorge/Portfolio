/** Base path for static hosting (e.g. GitHub Pages). Empty in dev at /. */
export function getBasePath(): string {
  return process.env.NEXT_BASE_PATH ?? "";
}

export function publicAsset(path: string): string {
  const bp = getBasePath();
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return bp ? `${bp}/${clean}` : `/${clean}`;
}
