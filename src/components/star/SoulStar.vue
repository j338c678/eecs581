<template>
  <div>
    <!-- <audio class="bgm" autoplay="autoplay" preload="auto">
         <source src="/static/audios/soul.mp3"></source>
    </audio> -->
    <!-- <div class="background" :style="background"> -->
    <!-- </div> -->
     <!-- <embed type="video/mp3" src="static/audios/soul.mp3" autoplay="autoplay" loop="true" hidden="false"></embed> -->
    <!-- <img src="@/assets/images/background/main_background.jpg" style="width: 8rem; height: 15.5rem;"> -->
    <div class="middle" :style="backgroundDiv">
       <!-- <group-title>sfsdf</group-title> -->
       <!-- <divide></divide> -->
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item ><div class="button1">voice chat</div></grid-item>
        <grid-item ><div class="button2">video chat</div></grid-item>
        <grid-item ><div class="button3">Let'sTalk</div></grid-item>
      </grid>
      </div>
    <!-- <div class="img1"></div> -->
      <!-- <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox> -->
      <!-- <button style:"width: 12px;">fasd</button> -->
  <!-- </img> -->
  <soul-Nav></soul-Nav>
  </div>
</template>

<script>
import SoulNav from '../common/SoulNav'
import{
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem
  } from 'vux'
export default {
  data() {
    return {
        backgroundDiv: {
            backgroundImage: 'url(' + require('@/assets/images/background/main_background.jpg') + ')'
        }
    }
},
  name: 'SoulStar',
  components: {
    SoulNav,
    Flexbox,
    FlexboxItem,
    GridItem,
    Grid
  },
}
</script>

<style>
.middle {
    height: 800px;
    width: auto;
    background: no-repeat center top;
    background-size: contain;
}
  /* .img1
  {
    width: 200px;
        height: 200px;
        background: url('~/static/photo1.jpg') center center no-repeat;
        background-size: 100px auto;

  } */
  .button1 {

  text-align: center;
  font-size: 20px;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
  height: 30px;
}
.button2 {
text-align: center;
font-size: 20px;
color: #fff;
background-color: #00ffff;
border-radius: 4px;
background-clip: padding-box;
height: 30px;
/* position:; */
}
.button3 {
text-align: center;
font-size: 20px;
color: #fff;
background-color: #fff000;
border-radius: 4px;
background-clip: padding-box;
height: 30px;
/* position:; */
}
</style>
