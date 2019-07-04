<template>
  <div id='online-friends'>
    <h2>Online Friends</h2>
    <div v-for='({name, online}, index) in friends' :key='index'>
      <span v-if='online'> {{name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineFriends',
  props: ['friends']
}

</script>

<style scoped lang='scss'>
</style>
