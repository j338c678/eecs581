<!-- 该组件在SoulBaseHeader基础上增加了：
  1.自动隐藏功能
  2.三个slider切换
 -->
<template>
  <!-- hearder -->
  <soul-base-header
    class="soul-square-header"
    :class="{'soul-square-header-hide': isHide}"
  >
    <template slot="left">Camera</template>
    <template slot="center">
      <div class="soul-square-header-center">
        <span
          @click="handleClickFollow"
          :class="{'soul-square-header-enabled': isFollowEnabled}"
        >
          Follow
        </span>
        <span
          @click="handleClickRecommend"
          :class="{'soul-square-header-enabled': isRecommendEnabled}"
        >
          Hot
        </span>
        <span
          @click="handleClickNewest"
          :class="{'soul-square-header-enabled': isNewestEnabled}"
        >
          Latest
        </span>
      </div>
    </template>
    <template slot="right">Video</template>
  </soul-base-header>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SoulBaseHeader from '@/components/common/SoulBaseHeader'
export default {
  name: 'SoulSquareHeader',
  components: {
    SoulBaseHeader
  },
  data () {
    return {
      isHide: false // if header is hidden
    }
  },
  computed: {
    isFollowEnabled: {
      get: function () {
        return (this.soulSquare.contentIndex === 0)
      }
    },
    isRecommendEnabled: {
      get: function () {
        return (this.soulSquare.contentIndex === 1)
      }
    },
    isNewestEnabled: {
      get: function () {
        return (this.soulSquare.contentIndex === 2)
      }
    },
    ...mapState(['soulSquare'])
  },
  watch: {
    // 不要用箭头函数，否则不能操作data，对象要使用深度监听
    'soulSquare.movingEvent': {
      handler: function (newValue) {
        if (newValue.topY < -50) {
          this.isHide = (newValue.direction > 0)
        }
      },
      deep: true
    },
    'soulSquare.contentIndex': function (newValue) {
      this.isHide = false
    }
  },
  methods: {
    handleClickFollow () {
      this.changeSoulSquareContentIndex(0) // switch to follow page
    },
    handleClickRecommend () {
      this.changeSoulSquareContentIndex(1) // switch to recommend page
    },
    handleClickNewest () {
      this.changeSoulSquareContentIndex(2) // switch to newest page
    },
    ...mapMutations([
      'changeSoulSquare',
      'changeSoulSquareContentIndex'
    ])
  }
}
</script>

<style>
.soul-square-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: var(--font-color-disabled, #A6A6A6);
  z-index: var(--header, 2);
}
.soul-square-header-hide {
  top: -1.02rem;
}
.soul-square-header-center {
  display: flex;
  justify-content: space-between;
}
.soul-square-header-center span {
  width: 0.95rem;
  text-align: center;
}
.soul-square-header-enabled {
  color: var(--font-color-enabled, #000);
}
</style>
