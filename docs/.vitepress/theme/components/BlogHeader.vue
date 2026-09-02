<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout === 'page' && frontmatter.date" class="blog-post-header">
    <h1 class="gradient-text">{{ frontmatter.title }}</h1>
    <div class="blog-post-meta">
      <time>{{ frontmatter.formattedDate }}</time>
      <span v-if="frontmatter.author">by {{ frontmatter.author }}</span>
      <div v-if="frontmatter.tags?.length" class="blog-post-tags">
        <span v-for="tag in frontmatter.tags" :key="tag" class="blog-tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-post-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--vp-c-border);
}

.blog-post-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 16px 0;
}

.blog-post-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  flex-wrap: wrap;
}

.blog-post-tags {
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

@media (max-width: 640px) {
  .blog-post-header h1 {
    font-size: 1.75rem;
  }
}
</style>
