<template>
  <div>
    <soul-base-header>
      <template slot="left">
        <div @click="handleClickCancel"><span>Cancel</span></div>
      </template>
      <template slot="center">Recording</template>
      <span slot="right" style="color: #26D4D0;">LT</span>
    </soul-base-header>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SoulBaseHeader from '@/components/common/SoulBaseHeader'
export default {
  name: 'SoulAddHeader',
  components: {
    SoulBaseHeader
  },
  computed: {
    ...mapState(['soulAdd'])
  },
  methods: {
    handleClickCancel () {
      this.changeSoulAddIsShow(!this.soulAdd.isShow)
    },
    ...mapMutations(['changeSoulAddIsShow'])
  }
}
</script>

<style>
</style>
