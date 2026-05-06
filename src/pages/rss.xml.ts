import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../config";
import { sortMDByDate } from "../utils";

export async function GET(context: { site: URL | undefined }) {
  const all = await getCollection("blog");
  const posts = sortMDByDate(all).filter((p) => p.data.published !== false);

  return rss({
    title: `${SITE_NAME} — Blog`,
    description: SITE_DESCRIPTION,
    site: context.site ?? new URL(SITE_URL),
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
    })),
    trailingSlash: true,
  });
}
