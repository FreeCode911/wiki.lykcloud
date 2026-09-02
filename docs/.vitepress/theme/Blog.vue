<script setup lang="ts">
import { Content, useData, useRoute } from 'vitepress'
import { data as posts } from './posts.data.js'

const { frontmatter } = useData()
const route = useRoute()

const currentIndex = posts.findIndex(p => p.url === route.path)
const nextPost = posts[currentIndex - 1]
const prevPost = posts[currentIndex + 1]
</script>

<template>
  <article class="blog-article">
    <header class="blog-article-header">
      <h1 class="gradient-text">{{ frontmatter.title }}</h1>
      <div class="blog-article-meta">
        <time v-if="frontmatter.date">{{ frontmatter.date }}</time>
        <span v-if="frontmatter.author">by {{ frontmatter.author }}</span>
        <div v-if="frontmatter.tags?.length" class="blog-article-tags">
          <span v-for="tag in frontmatter.tags" :key="tag" class="blog-tag">{{ tag }}</span>
        </div>
      </div>
    </header>

    <Content class="blog-article-content" />

    <footer class="blog-article-nav">
      <a v-if="nextPost" :href="nextPost.url" class="blog-nav-link">
        <span class="blog-nav-label">← Previous</span>
        <span class="blog-nav-title">{{ nextPost.title }}</span>
      </a>
      <a v-if="prevPost" :href="prevPost.url" class="blog-nav-link blog-nav-link-next">
        <span class="blog-nav-label">Next →</span>
        <span class="blog-nav-title">{{ prevPost.title }}</span>
      </a>
    </footer>
  </article>
</template>

<style scoped>
.blog-article {
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
}

.blog-article-header {
  margin-bottom: 40px;
  border-bottom: 1px solid var(--vp-c-border);
  padding-bottom: 24px;
}

.blog-article-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 16px 0;
}

.blog-article-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
}

.blog-article-tags {
  display: flex;
  gap: 8px;
}

.blog-tag {
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  padding: 2px 10px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border: 1px solid rgba(0, 212, 255, 0.2);
}

.blog-article-content {
  line-height: 1.8;
  font-size: 1.0625rem;
}

.blog-article-nav {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-border);
}

.blog-nav-link {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  color: var(--vp-c-text-2);
  transition: color 0.3s ease;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(17, 17, 24, 0.4);
  border: 1px solid var(--vp-c-border);
}

.blog-nav-link:hover {
  color: var(--vp-c-brand-1);
  border-color: rgba(0, 212, 255, 0.3);
}

.blog-nav-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.blog-nav-title {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.blog-nav-link-next {
  margin-left: auto;
  text-align: right;
}

@media (max-width: 640px) {
  .blog-article-header h1 {
    font-size: 1.75rem;
  }
  .blog-article-nav {
    flex-direction: column;
  }
}
</style>
