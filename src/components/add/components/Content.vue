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
  Box
} from 'vux'
import Vue from 'vue'
export default {
  name: 'SoulAddContent',
  components: {
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
  methods: {
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