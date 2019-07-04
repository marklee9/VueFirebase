import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/content/Content.vue'
import Blogs from '../components/content/blog/Blogs.vue'
import Blog from '../components/content/blog/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // Removing hash on url.
  routes: [
    {
      path: '/friends',
      name: 'mainContent',
      component: Content
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/blog/:blog_id',
      name: 'blog',
      component: Blog
    }
  ]
})
