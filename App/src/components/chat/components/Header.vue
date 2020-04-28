<template>
  <soul-base-header fixed>
    <template slot="left">
      <div>
        Match
        <i>∨</i>
      </div>
    </template>
    <template slot="center">Chat</template>
    <template slot="right">
      <div>
        <i></i>
        Follow
      </div>
    </template>
  </soul-base-header>
</template>

<script>
import SoulBaseHeader from '@/components/common/SoulBaseHeader'
export default {
  name: 'SoulChatHeader',
  components: {
    SoulBaseHeader
  }
}
</script>

<style>

</style>
