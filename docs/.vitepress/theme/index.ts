import DefaultTheme from 'vitepress/theme'
import BlogHeader from './components/BlogHeader.vue'
import './crypto.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogHeader', BlogHeader)
  },
}
