import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = 'https://wiki.lykcloud.int.yt'

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'LykCloud Wiki',
    description: 'Guides, tutorials, and insights from the LykCloud team',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    favicon: `${baseUrl}/favicon.ico`,
  })

  const posts = await createContentLoader('blog/posts/*.md', {
    excerpt: true,
    render: true,
  }).load()

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title as string,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html?.replaceAll('&ZeroWidthSpace;', ''),
      author: frontmatter.author ? [{ name: frontmatter.author as string }] : undefined,
      date: new Date(frontmatter.date as string),
    })
  }

  writeFileSync(`${config.outDir}/feed.rss`, feed.rss2())
}
