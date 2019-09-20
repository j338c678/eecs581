<template>
  <div class="message-container" :style="styleObject">
    <div>
      <div style="height: 1rem;"><!-- out of header --></div>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import SoulChatMessageItem from './MessageItem'
export default {
  name: 'SoulChatContent',
  components: {
    SoulChatMessageItem
  },
  data () {
    return {
      styleObject: {
        height: (window.innerHeight - 50) + 'px'
      }
    }
  },
  methods: {
    initBScroll () {
      this.bScrollMessage = new BScroll('.message-container', {click: true, tap: true})
      this.bScrollMessage.on('scrollStart', () => {
        this.bScrollMessage.refresh()
      })
    }
  },
  mounted () {
    this.initBScroll()
  }
}
</script>

<style>
.message-container {
  overflow: hidden;
}
</style>
