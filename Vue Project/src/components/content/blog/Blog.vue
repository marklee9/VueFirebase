<template>
  <div class="blog">
    <h3>Blog number : {{ blogId }}</h3>
    <h2 @click="goHome">Go Home</h2>
    <h2 @click="goBack">Go Back</h2>
    <h2 @click="goForward">Go Forward</h2>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      blogId: this.$route.params.blog_id
    }
  },
  methods: {
    watchBlogId () {
      this.blogId = this.$route.params.blog_id
    },
    goHome () {
      // this.$router.push("/")
      this.$router.push({name: 'mainContent'})
    },
    goBack () {
      this.$router.go(-1)
    },
    goForward () {
      this.$router.go(1)
    }
  },
  watch: {
    $route: 'watchBlogId'
  }
}
</script>
