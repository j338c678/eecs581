<template>
  <div class="soul-self-header">
    <img :style="imgStyleObject" :src="backgroundImg">
    <div class="soul-self-header-more">More</div>
    <div class="soul-self-header-detail" :style="detailStyleObject">
      <div class="soul-self-header-headicon">
        <img src="@/assets/images/headicon/1.png">
      </div>
      <div class="soul-self-header-nickName" id="name">{{username}}</div>
      <div class="soul-self-header-register-date">{{daycount}}</div>
      <div class="soul-self-header-tags">Travel，LOL，Piano，Ski，Computer science</div>
    </div>
    <div :style="titleStyleObject">Moment</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SoulSelfHeader',

  data () {
    return {
      username:this.GLOBAL.UserToken.data.username,
      daycount:this.GLOBAL.getDatesCreated(),
      backgroundImg: './static/photo1.jpg',
      titleOpacity: 0, // "self transparency "
      titleY: 320, // y distance of "self"
      imgY: 0 // y distance of imgage
    }
  },
  computed: {
    /* change imgage distance */
    imgStyleObject: function () {
      return {
        transform: `translateY(${this.imgY}px)`
      }
    },
    /* change“details info” */
    detailStyleObject: function () {
      return {
        opacity: 1 - this.titleOpacity
      }
    },
    /* change“self” */
    titleStyleObject: function () {
      return {
        color: '#fff',
        transform: `translateY(${this.titleY}px)`,
        opacity: this.titleOpacity
      }
    },
    ...mapState(['soulSelf'])
  },
  watch: {
    'soulSelf.topY': function (newValue) {
      if (newValue <= 0 && newValue > -310) {
        this.titleOpacity = Math.abs(newValue / -310)
        this.titleY = 320 + newValue
        this.imgY = newValue * 0.4
      }
    }
  }
}
</script>

<style>
.soul-self-header {
  height: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.soul-self-header img {
  position: absolute;
  width: 100%;
  height: 8rem;
}
.soul-self-header-more {
  position: absolute;
  top: 20px;
  right: 25px;
  color: #fff;
}
.soul-self-header-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.soul-self-header-headicon {
  position: absolute;
  top: 80px;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: #fff;
}
.soul-self-header-headicon img {
  width: 80px;
  height: 80px;
}
.soul-self-header-nickName {
  position: absolute;
  top: 170px;
  font-size: 0.5rem;
  color: #fff;
}
.soul-self-header-register-date {
  position: absolute;
  top: 200px;
  color: #fff;
}
.soul-self-header-tags {
  position: absolute;
  top: 240px;
  height: 0.34rem;
  line-height: 0.34rem;
  border: 1px solid gray;
  border-radius: 0.24rem;
  font-size: 0.24rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
