<template>
    <nav class="soul-nav">
      <!-- selected part -->
      <router-link
        to="/soulstar"
        tag="dl"
        @click.native="changeSoulNavCurrent('soulStar')"
      >
        <dt><img
          style="width: 0.8rem; height: 0.8rem;"
          src="@/assets/images/icon/icon_star_black.png">
        </dt>

        <dd :class="{'soul-nav-current': soulNavCurrent === 'soulStar'}">
          STAR
        </dd>
      </router-link>

      <router-link
        to="/soulsquare"
        tag="dl"
        @click.native="changeSoulNavCurrent('soulSquare')"
      >
        <dt>

          <img style="width: 0.6rem; height: 0.6rem;"
        src="@/assets/images/icon/icon_square_black.png">
        </dt>
        <dd :class="{'soul-nav-current': soulNavCurrent === 'soulSquare'}">
          SQUARE
        </dd>
      </router-link>

      <dl @click="handleClickAdd">
        <dt>
          <img
            style="width: 0.9rem; height: 0.9rem;"
            src="@/assets/images/icon/icon_tabbar_release.png"
          >
        </dt>
        <dd></dd>
      </dl>

      <router-link
        to="/soulchat"
        tag="dl"
        @click.native="changeSoulNavCurrent('soulChat')"
      >
        <dt>
          <img
            style="width: 0.8rem; height: 0.8rem;"
            src="@/assets/images/icon/icon_chat_black.png"
          >
        </dt>
        <dd :class="{'soul-nav-current': soulNavCurrent === 'soulChat'}">
          CHAT
        </dd>
      </router-link>

      <router-link
        to="/soulself"
        tag="dl"
        @click.native="changeSoulNavCurrent('soulSelf')"
      >
        <dt><img style="width: 0.8rem; height: 0.8rem;"
        src="@/assets/images/icon/icon_self_black.png">
        </dt>
        <dd :class="{'soul-nav-current': soulNavCurrent === 'soulSelf'}">
          SELF
        </dd>
      </router-link>
    </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
export default {
  name: 'SoulNav',
  computed: {
    ...mapState([
      'soulAdd',
      'soulNavCurrent'
    ])
  },
  methods: {
    handleClickAdd () {
      this.changeSoulAddIsShow(!this.soulAdd.isShow)
    },
    //9/21

    ...mapMutations([
      'changeSoulAddIsShow',
      'changeSoulNavCurrent'
    ])
  }
}
</script>

<style>
.soul-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 1rem;
  background-color: var(--background-color, #fff);
  box-shadow:
  0rem
  -0.05rem
  var(--box-shadow-blur, 0.35rem)
  var(--box-shadow-color, #D6D6D6);
  z-index: var(--nav, 1);
}
nav dl {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
nav dt {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.7rem;
}
nav dd {
  color: var(--font-color-disabled, #A6A6A6);
  line-height: 0.2rem;
  font-size: 0.2rem;
}
.soul-nav-current {
  color: #26D4D0
}
</style>
