<template>
  <div>
    <soul-chat-header></soul-chat-header>
    <soul-chat-content></soul-chat-content>
    <soul-Nav></soul-Nav>
  </div>
</template>

<script>
import SoulChatHeader from './components/Header'
import SoulChatContent from './components/Content'
import SoulNav from '../common/SoulNav'
export default {
  name: 'SoulChat',
  components: {
    SoulNav,
    SoulChatHeader,
    SoulChatContent
  }
}
</script>

<style>
</style>
