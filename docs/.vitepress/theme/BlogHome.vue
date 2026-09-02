<script setup lang="ts">
import { data as posts } from './posts.data.js'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="blog-landing">
    <div class="blog-landing-hero">
      <h1 class="gradient-text">{{ frontmatter.title }}</h1>
      <p class="blog-landing-subtitle">{{ frontmatter.subtext }}</p>
    </div>

    <div v-if="posts.length" class="blog-grid">
      <div v-for="post in posts" :key="post.url" class="blog-grid-item">
        <a :href="post.url" class="glass-card blog-card">
          <div class="blog-card-header">
            <h2>{{ post.title }}</h2>
            <div class="blog-card-meta">
              <time :datetime="post.date.time.toString()">{{ post.date.string }}</time>
              <span v-if="post.author" class="blog-card-author">{{ post.author }}</span>
            </div>
          </div>
          <p class="blog-card-excerpt" v-html="post.excerpt"></p>
          <div v-if="post.tags?.length" class="blog-card-tags">
            <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
          </div>
        </a>
      </div>
    </div>
    <div v-else class="blog-empty">
      <p>No posts found.</p>
    </div>
  </div>
</template>

<style scoped>
.blog-landing {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.blog-landing-hero {
  text-align: center;
  margin-bottom: 64px;
}

.blog-landing-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.blog-landing-subtitle {
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.blog-grid-item {
  display: flex;
}

.blog-card {
  display: flex;
  flex-direction: column;
  padding: 28px;
  text-decoration: none;
  color: inherit;
  flex: 1;
}

.blog-card-header h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 8px 0;
}

.blog-card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  margin-bottom: 12px;
}

.blog-card-excerpt {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex: 1;
  margin: 0 0 16px 0;
}

.blog-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
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

@media (max-width: 640px) {
  .blog-landing-hero h1 {
    font-size: 2rem;
  }
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
