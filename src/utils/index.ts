import type { CollectionEntry } from "astro:content";
import path from "path";

const blogImages = import.meta.glob("../content/blog/**/*.{webp,jpg,png,svg,gif,avif,jpeg}");
const supportedImageExtensions = [".webp", ".jpg", ".png", ".svg", ".gif", ".avif", ".jpeg"];

export function sortMDByDate(posts: CollectionEntry<"blog">[] = []) {
  return posts.sort(
    (a, b) =>
      new Date(b.data.publishDate).valueOf() -
      new Date(a.data.publishDate).valueOf()
  );
}

export function getBlogImage(contentId: string, fileName: string) {
  const normalizedContentId = contentId.replaceAll("\\", "/");
  const contentDirectory = path.posix.dirname(normalizedContentId);
  const normalizedFileName = fileName.replaceAll("\\", "/").replace(/^\.\//, "");
  const requestedExt = path.posix.extname(normalizedFileName).toLowerCase();
  const imagePathWithoutExt = requestedExt
    ? normalizedFileName.slice(0, -requestedExt.length)
    : normalizedFileName;
  const imageExt = supportedImageExtensions.includes(requestedExt)
    ? requestedExt
    : ".jpg";
  const imageDirectory = contentDirectory === "." ? "" : `${contentDirectory}/`;
  const imagePath = `../content/blog/${imageDirectory}${imagePathWithoutExt}${imageExt}`;
  const importer = blogImages[imagePath];

  if (!importer) {
    throw new Error(`Blog image not found for ${contentId}: ${fileName}`);
  }

  return importer();
}
