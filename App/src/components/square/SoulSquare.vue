
<template>
  <div>
    <!-- header -->
    <soul-square-header></soul-square-header>

    <!-- content -->
    <soul-square-content></soul-square-content>

    <soul-Nav></soul-Nav>
  </div>
</template>

<script>
import SoulSquareHeader from './components/Header'
import SoulSquareContent from './components/Content'
import SoulNav from '../common/SoulNav'
export default {
  name: 'SoulSquare',
  components: {
    SoulNav,
    SoulSquareHeader,
    SoulSquareContent
  }
}
</script>

<style>
</style>
