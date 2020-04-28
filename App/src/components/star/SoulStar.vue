<template>
  <div class="header" :style="backgroundDiv">
    <div class="middle" :style="backgroundDiv">
      <router-link to='/soulHome'>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <!-- <grid-item ><div class="button1">voice chat</div></grid-item> -->

        <grid-item ><div class="button2">Let'sTalk</div></grid-item>

        <!-- <grid-item ><div class="button3">Let'sTalk</div></grid-item> -->
      </grid>
      </router-link>
    </div>
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
.middle
{
  height:23spx;

}
.header
{
  height: 800px;
  background: no-repeat center top;
  background-size: cover;
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
