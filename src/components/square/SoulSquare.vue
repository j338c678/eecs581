
<template>
  <div>
    <!-- header -->
    <soul-square-header></soul-square-header>

    <!-- content -->
    <soul-square-content></soul-square-content>
  </div>
</template>

<script>
import SoulSquareHeader from './components/Header'
import SoulSquareContent from './components/Content'
export default {
  name: 'SoulSquare',
  components: {
    SoulSquareHeader,
    SoulSquareContent
  }
}
</script>

<style>
</style>
