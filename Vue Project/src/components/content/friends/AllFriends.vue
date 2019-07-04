<template>
  <div id='all-friends'>
    <h2>All Friends</h2>
    <div v-for='({ name, online }, index) in friends' :key="index">
      <span @click="unfriend(name)"> {{name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllFriends',
  props: ['friends'],
  methods: {
    unfriend (name) {
      this.$emit('delete', { name })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
