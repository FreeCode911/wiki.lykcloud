<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="blog-meta" v-if="frontmatter.date || frontmatter.author || frontmatter.tags">
    <time v-if="frontmatter.date" :datetime="frontmatter.date">
      {{ new Date(frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
    </time>
    <span v-if="frontmatter.author" class="author">{{ frontmatter.author }}</span>
    <div v-if="frontmatter.tags && frontmatter.tags.length" class="tags">
      <span v-for="tag in frontmatter.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>