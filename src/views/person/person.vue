<template>
  <div class="components-container">
    <!-- <aside>This is based on
      <a class="link-type" href="//github.com/dai-siki/vue-image-crop-upload"> vue-image-crop-upload</a>.
      Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.
    </aside> -->

    <pan-thumb :image="image" />

    <el-button type="primary" icon="el-icon-upload" style="bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
      Change Avatar
    </el-button>

    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="300"
      :height="300"
      url="https://httpbin.org/post"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"
    />

    <el-row :gutter="30" style="margin-top:50px;">
      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div style="height:300px;">
            <el-form :model="demo" :rules="demoRules">
              <el-form-item prop="name">
                <md-input v-model="demo.title" icon="el-icon-search" name="title" placeholder="输入标题">
                  昵称
                </md-input>
              </el-form-item>
              <el-form-item prop="">
                <md-input v-model="demo.title" icon="el-icon-search" name="title" placeholder="输入标题">
                  标题
                </md-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div style="height:300px;">
            <el-form :model="demo" :rules="demoRules">
              <el-form-item prop="name">
                <md-input v-model="demo.title" icon="el-icon-search" name="title" placeholder="输入标题">
                  昵称
                </md-input>
              </el-form-item>
              <el-form-item prop="">
                <md-input v-model="demo.title" icon="el-icon-search" name="title" placeholder="输入标题">
                  标题
                </md-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import MdInput from '@/components/MDinput'
import waves from '@/directive/waves/index.js' // 水波纹指令

export default {
  name: 'AvatarUploadDemo',
  components: {
    ImageCropper,
    PanThumb,
    MdInput
  },
  directives: {
    waves
  },
  data() {
    const validate = (rule, value, callback) => {
      if (value.length !== 6) {
        callback(new Error('请输入六个字符'))
      } else {
        callback()
      }
    }
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      demo: {
        title: ''
      },
      demoRules: {
        title: [{ required: true, trigger: 'change', validator: validate }]
      }
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>

<style scoped>
  .avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  .mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
  }
  .component-item{
    min-height: 100px;
  }

</style>

