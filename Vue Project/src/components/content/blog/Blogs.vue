<template>
  <div id='blogs'>
    <input type="text" v-model="searchInput">
    <div v-for='({title, body}, index) in filteredPosts' :key='index'>
      <h6>{{ title }}</h6>
      <p>{{ body | snippet }}</p> <!-- using Vue.filter -->
      <router-link :to='{ name: "blog", params: { blog_id: index }}'>Go to this blog</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'blogs',
  data: () => ({
    blogs: [],
    error: '',
    searchInput: ''
  }),
  computed: {
    filteredPosts () {
      return this.blogs.filter((blog) => blog.title.match(this.searchInput))
    }
  },
  async created () {
    try {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.blogs = data
    } catch (error) {
      this.error = error
    }
  }
}
</script>

<style scoped lang="scss">
</style>
