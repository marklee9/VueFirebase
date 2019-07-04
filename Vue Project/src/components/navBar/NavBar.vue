<template>
  <nav>
    <h2>{{ navBarTitle }}</h2>
    <ul>
      <router-link to="/friends">Friend</router-link>
      <router-link :to="{ name: 'blogs'}">Blogs</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navar',
  data () {
    return {
      navBarTitle: 'NavBar!'
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    text-align: center;

    ul {
      a {
        margin: 0 10px;
      }
    }
  }
</style>
