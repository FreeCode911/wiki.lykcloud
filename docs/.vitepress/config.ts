import { defineConfig } from 'vitepress'
import { genFeed } from './theme/genFeed.js'

export default defineConfig({
  lang: 'en-US',
  title: 'LykCloud Wiki',
  description: 'Guides, tutorials, and insights from the LykCloud team',
  base: '/',

  appearance: 'dark',

  sitemap: {
    hostname: 'https://wiki.lykcloud.int.yt',
    lastmodDateOnly: false,
  },

  lastUpdated: true,
  themeConfig: {
    logo: { src: '/logo.png', width: 32, height: 32, alt: 'LykCloud Logo' },

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Blog', link: '/blog/' },
      {
        text: 'GitHub',
        link: 'https://github.com/lykcloud/lykcloud',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Deployment', link: '/guide/deployment' },
          ],
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Security', link: '/guide/security' },
          ],
        },
        {
          text: 'Advanced',
          collapsed: false,
          items: [
            { text: 'Advanced Overview', link: '/guide/advanced/' },
            { text: 'API Integration', link: '/guide/advanced/api-integration' },
            { text: 'Performance', link: '/guide/advanced/performance' },
          ],
        },
      ],
      '/blog/': [],
    },

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present LykCloud Team',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
      },
    },
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  transformHead({ pageData }) {
    if (!pageData.frontmatter) return []
    const ogImage = pageData.frontmatter.image
      ? `https://wiki.lykcloud.int.yt${pageData.frontmatter.image}`
      : `https://wiki.lykcloud.int.yt/og.png`

    return [
      [
        'meta',
        {
          property: 'og:image',
          content: ogImage,
        },
      ],
    ]
  },

  transformPageData(pageData) {
    const { frontmatter } = pageData
    if (frontmatter.layout === 'page' && frontmatter.date) {
      const date = new Date(frontmatter.date)
      frontmatter.formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
  },

  buildEnd: genFeed,
})
