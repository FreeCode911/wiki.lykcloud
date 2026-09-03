import DefaultTheme from 'vitepress/theme'
import BlogMeta from './components/BlogMeta.vue'
import VPPage from './components/VPPage.vue'
import './crypto.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogMeta', BlogMeta)
    app.component('VPPage', VPPage)
    app.component('page', VPPage)
  }
}