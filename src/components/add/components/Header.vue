<template>
  <div>
    <soul-base-header>
      <span slot="left" style="color: #26D4D0;">music</span>
      <template slot="center">
        <div @click="handleClickCancel"><span>Pull</span></div>
      </template>
      <span slot="right" style="color: #26D4D0;">camera</span>
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
