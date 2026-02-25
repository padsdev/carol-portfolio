const isProd = process.env.NODE_ENV === "production"
const BASE_PATH = isProd ? "/carol-portfolio" : ""

/**
 * Prefixes a path with the basePath for production (GitHub Pages).
 * Use for public assets (images, icons, etc.) in `src` props.
 *
 * @example assetPath("/caroline-assis.png") => "/carol-portfolio/caroline-assis.png"
 */
export function assetPath(path: string): string {
    if (path.startsWith("http")) return path
    return `${BASE_PATH}${path}`
}
