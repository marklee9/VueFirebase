<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/navBar/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
