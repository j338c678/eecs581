<template>
  <div class="soul-add-content">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <textarea
      ref="textarea"
      class="soul-add-textarea"
      :rows="rows"
      @input="handleChangeTextarea"
      v-model="textareaValue"
      placeholder="Recording......"
    ></textarea>
    <div>
      <box gap="30px 10px">
     <x-button type="primary" @click.native="submit">Submit</x-button>
    </box>
    </div>
  </div>
</template>

<script>
import {
  XButton,
  Loading,
  TransferDomDirective as TransferDom,
  Box
} from 'vux'
import Vue from 'vue'
export default {
  directives: {
    TransferDom
  },
  name: 'SoulAddContent',
  components: {
    Loading,
    XButton,
    Box
  },
  data () {
    return {
      rows: 4, // textarea的行数
      textareaScrollHeight: 0, // textarea的ScrollHeight
      textareaValue: '', // textarea的文本值
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      console.log(this.$vux.loading.isVisible())
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    submit(){
      this.$vux.loading.show({
        text: 'Loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 2000)
      this.$router.push({path:'/soulsquare'})
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
}
</script>

<style>
.soul-add-content {
  margin-top: 0.4rem;
  background-color: #fff;
}
.soul-add-textarea {
  width: 100%;
}
</style>