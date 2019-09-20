<template>
  <div>
    <audio class="bgm" autoplay="autoplay" preload="auto">
         <source src="/static/audios/soul.mp3"></source>
    </audio>
    <div class="background">
    </div>
     <!-- <embed type="video/mp3" src="static/audios/soul.mp3" autoplay="autoplay" loop="true" hidden="false"></embed> -->
    <img src="@/assets/images/background/main_background.jpg" style="width: 8rem; height: 15.5rem;">
      <!-- <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox> -->
      <!-- <button style:"width: 12px;">fasd</button> -->
  <!-- </img> -->
  </div>
</template>

<script>
import SoulStarBox from './components/Box'
import{
    Flexbox,
    FlexboxItem,
  } from 'vux'
export default {
  name: 'SoulStar',
  components: {
    SoulStarBox,
    Flexbox,
    FlexboxItem
  },
}
</script>

<style>
  .background{
    max-width: 100%;
    height: auto;
    background: url('../../assets/images/background/main_background.jpg');
  }
</style>
