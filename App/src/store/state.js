export default {
  soulNavCurrent: 'soulSquare', // 导航栏选中哪个栏目,可以设置为soulStar,soulSquare,soulChat,soulSelf
  soulSquare: {
    contentIndex: 1, // 广场swiper的索引值，0为关注，1为推荐，2为最新
    movingEvent: {
      direction: 0, // 滑动方向，-1为下滑，1为上滑
      topY: 0 // content组件顶部滑动距离
    } // content滑动事件
  },
  soulAdd: {
    isShow: false // 判断显示
  },
  soulChat: {
    isSpreadOperate_gobal: false // 是否有展开的侧滑菜单，只要有一个消息框展开了就设置为true
  },
  soulSelf: {
    topY: 0 // 顶部滑动距离
  }
}
