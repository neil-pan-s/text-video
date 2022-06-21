<template>
  <text-video :contents="contents" :loop="true" :random="true" v-if="contents.length"></text-video>
</template>

<script>
import TextVideo from './src/TV.vue'
import ContentsLoader from './contents'

export default {
  name: 'App',
  components: {
    TextVideo,
  },
  data() {
    return {
      random: true,
      loop: true,
      contents: [],
    }
  },
  async created() {

    if (this.$route.query.random) { this.random = this.$route.query.random }
    if (this.$route.query.loop) { this.loop = this.$route.query.loop }
    if (this.$route.query.contents) { this.contents = JSON.parse(this.$route.query.contents) } 

    const type = this.$route.query.type || 'poems'
    if (type) {
      const { default: contents } = await ContentsLoader[type]()
      this.contents = contents
    }
  },
}
</script>

<style>
  * { padding: 0px; margin: 0px; }

  html,body {
    width: 100%;
    height: 100%;
  }
</style>
