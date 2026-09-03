import DefaultTheme from 'vitepress/theme'
import BlogMeta from './components/BlogMeta.vue'
import './crypto.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogMeta', BlogMeta)
  }
}