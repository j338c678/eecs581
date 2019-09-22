<template>
  <div>
    <soul-self-header></soul-self-header>
    <soul-self-content></soul-self-content>
    <soul-Nav></soul-Nav>
  </div>
</template>

<script>
import SoulSelfHeader from './components/Header'
import SoulSelfContent from './components/Content'
import SoulNav from '../common/SoulNav'
export default {
  name: 'SoulSelf',
  components: {
    SoulNav,
    SoulSelfHeader,
    SoulSelfContent
  }
}
</script>

<style>
</style>
