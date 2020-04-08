<template>
  <div
    class="soul-welcome"
    :class="{'soul-welcome-hide': soulwelcomehide}"
  >
    <img src="../../assets/images/photo_soul_logo_black.png">
  </div>
</template>

<script>
export default {
  name: 'SoulWelcome',
  data () {
    return {
      soulwelcomehide: false
    }
  },
  mounted () {
    // transition and setTimeout function mixed to animation
    setTimeout(() => {
      this.soulwelcomehide = true
    }, 2000)
  }
}
</script>

<style>
/*
flex
*/
.soul-welcome {
  position: fixed;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: 0.5s;
  z-index: var(--mask, 4);
}
.soul-welcome-hide {
  opacity: 0;
  visibility: hidden;
}
.soul-welcome img {
  margin: 25%;
  width: 50%;
}
</style>
