import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: { time: number; string: string }
  excerpt: string
  tags?: string[]
  author?: string
}

declare const data: Post[]
export { data }

export default createContentLoader('blog/posts/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title as string,
        url,
        excerpt: excerpt || '',
        date: formatDate(frontmatter.date as string),
        tags: (frontmatter.tags as string[]) || [],
        author: frontmatter.author as string | undefined,
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(0, 0, 0, 0)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
