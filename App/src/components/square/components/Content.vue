
<template>
  <div class="soul-square-content">
    <swiper
      :options="swiperOption"
      ref="soulSquareContentSwiper"
    >
      <swiper-slide>
        <div class="swiper-follow" :style="styleObject">
          <div>
            <!-- searching -->
            <soul-square-search></soul-square-search>
            <soul-cell-item></soul-cell-item>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-recommend" :style="styleObject">
          <div>
            <!-- searching -->
            <soul-square-search></soul-square-search>
            <template v-for="itemValue in recommendData">
              <soul-cell-item
                :item-data="itemValue"
                :key="itemValue.key"
              ></soul-cell-item>
            </template>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-newest" :style="styleObject">
          <div>
            <!-- searching -->
            <soul-square-search></soul-square-search>
            <template v-for="itemValue in newestData">
              <soul-cell-item
                :item-data="itemValue"
                :key="itemValue.key"
              ></soul-cell-item>
            </template>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import SoulSquareSearch from './Search'
import SoulCellItem from '../../common/SoulCellItem'
import axios from 'axios'
export default {
  name: 'SoulSquareContent',
  components: {
    SoulSquareSearch,
    SoulCellItem
  },
  data () {
    const that = this
    return {
      followData: {},
      recommendData: {},
      newestData: {},
      styleObject: {
        height: (window.innerHeight - 50) + 'px'
      },
      swiperOption: {
        resistanceRatio: 0, // swiper can't move
        on: {
          // get the index of swiper
          slideChangeTransitionStart: function () {
            that.changeSoulSquareContentIndex(this.activeIndex)
          }
        }
      } // Swipersetting
    }
  },
  computed: {
    // requirement for swiper
    swiper () {
      return this.$refs.soulSquareContentSwiper.swiper
    },
    ...mapState(['soulSquare'])
  },
  watch: {
    'soulSquare.contentIndex': function (newValue) {
      this.swiper.slideTo(newValue) // switch pages
    }
  },
  methods: {
    // getrecommendInfo
    getSquareRecommendInfo () {
      axios.get('./static/mock/square-recommend.json')
        .then(this.getSquareRecommendInfoSucc)
        .catch(function (err) {
          console.log(`【axios获取信息失败，Content.vue】：${err}`)
        })
    },
    getSquareRecommendInfoSucc (res) {
      this.recommendData = res.data
    },
    // getnewestInfo
    getSquareNewestInfo () {
      axios.get('./static/mock/square-newest.json')
        .then(this.getSquareNewestInfoSucc)
        .catch(function (err) {
          console.log(`【axios获取信息失败，Content.vue】：${err}`)
        })
    },
    getSquareNewestInfoSucc (res) {
      this.newestData = res.data
    },
    initBScroll () {
      this.bScrollFollow = new BScroll('.swiper-follow', {click: true, tap: true, probeType: 2})
      this.bScrollRecommend = new BScroll('.swiper-recommend', {click: true, tap: true, probeType: 2})
      this.bScrollNewest = new BScroll('.swiper-newest', {click: true, tap: true, probeType: 2})

      this.bScrollFollow.on('scroll', (pos) => {
        this.changeSoulSquareMovingEventDirection(this.bScrollFollow.movingDirectionY)
        this.changeSoulSquareMovingEventTopY(pos.y)
      })

      this.bScrollRecommend.on('scroll', (pos) => {
        this.changeSoulSquareMovingEventDirection(this.bScrollRecommend.movingDirectionY)
        this.changeSoulSquareMovingEventTopY(pos.y)
      })

      this.bScrollNewest.on('scroll', (pos) => {
        this.changeSoulSquareMovingEventDirection(this.bScrollNewest.movingDirectionY)
        this.changeSoulSquareMovingEventTopY(pos.y)
      })

      this.bScrollFollow.on('scrollStart', () => {
        this.bScrollFollow.refresh()
      })

      this.bScrollRecommend.on('scrollStart', () => {
        this.bScrollRecommend.refresh()
      })

      this.bScrollNewest.on('scrollStart', () => {
        this.bScrollNewest.refresh()
      })
    },
    ...mapMutations([
      'changeSoulSquare',
      'changeSoulSquareContentIndex',
      'changeSoulSquareMovingEventDirection',
      'changeSoulSquareMovingEventTopY'
    ])
  },
  mounted () {
    this.swiper.slideTo(1) // swtich to ‘recommend’ page
    this.getSquareRecommendInfo() // get recommend info
    this.getSquareNewestInfo() // get newest info
    this.initBScroll() //  inital BScroll
  }
}
</script>

<style>
.soul-square-content {
  position: relative;
  z-index: var(--content, 0);
}
</style>
