<script setup lang="ts">
defineProps<{
  title: string
  url: string
  date: { time: number; string: string }
  excerpt: string
  tags?: string[]
  author?: string
}>()
</script>

<template>
  <a :href="url" class="blog-card-inner glass-card">
    <div class="blog-card-top">
      <h3>{{ title }}</h3>
      <div class="blog-card-meta">
        <time :datetime="date.time.toString()">{{ date.string }}</time>
        <span v-if="author" class="blog-card-author">{{ author }}</span>
      </div>
    </div>
    <p class="blog-card-excerpt" v-html="excerpt"></p>
    <div v-if="tags?.length" class="blog-card-tags">
      <span v-for="tag in tags" :key="tag" class="blog-tag">{{ tag }}</span>
    </div>
  </a>
</template>

<style scoped>
.blog-card-inner {
  display: flex;
  flex-direction: column;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.blog-card-top {
  margin-bottom: 12px;
}

.blog-card-top h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--vp-c-text-1);
}

.blog-card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8125rem;
  color: var(--vp-c-text-3);
}

.blog-card-author {
  color: var(--vp-c-brand-2);
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
  gap: 6px;
  margin-top: auto;
}

.blog-tag {
  font-size: 0.7rem;
  font-family: var(--vp-font-family-mono);
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border: 1px solid rgba(0, 212, 255, 0.2);
}
</style>
