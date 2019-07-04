<template>
  <div id="content">
    <h1>{{ title }}</h1>
    <form @submit='changeTitle'>
      <input type='text' v-model='changingTitle'>
      <input type='submit' value='Submit'>
    </form>
    <AllFriends :friends='friends' @delete='deleteFriends'></AllFriends>
    <OnlineFriends :friends='friends'></OnlineFriends>
  </div>
</template>

<script>
import AllFriends from './friends/AllFriends'
import OnlineFriends from './friends/OnlineFriends'

export default {
  name: 'contents',

  components: {
    AllFriends, OnlineFriends
  },

  data () {
    return {
      friends: [
        {name: 'Mario', online: true},
        {name: 'Mark', online: false},
        {name: 'Bei', online: false},
        {name: 'Peter', online: true}
      ],
      title: 'Mark Lee\'s Project',
      changingTitle: ''
    }
  },

  methods: {
    deleteFriends ({name}) {
      this.friends = this.friends.filter((friend) => friend.name !== name)
    },

    changeTitle (e) {
      e.preventDefault()
      this.title = this.changingTitle
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
