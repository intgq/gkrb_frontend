<template>
  <div class="components-container">
    <el-drag-select v-model="value" style="width:500px;" multiple placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-drag-select>

    <div style="margin-top:30px;">
      <el-tag v-for="item of value" :key="item" style="margin-right:15px;">
        {{ item }}
      </el-tag>
    </div>

        <el-row :gutter="20">
      <!-- 行内消息1 -->
      <el-col :span="12">
        <el-card class="box-card">
          <div>
            <el-col :span="20" class="text-center ">

              <el-col :span="6" class="text-center">
                <router-link class="pan-btn tiffany-btn" to="/example/create">
                  tag1
                </router-link>
              </el-col>
              <el-col :span="6" class="text-center">
                <router-link class="pan-btn tiffany-btn" to="/example/create">
                  tag2
                </router-link>
              </el-col>
              <el-col :span="6" class="text-center">
                <router-link class="pan-btn tiffany-btn" to="/example/create">
                  tag3
                </router-link>
              </el-col>
            </el-col>

            <el-col :span="4" class="text-center" style="border-left: 1px solid black">
              <p>Tag</p>
            </el-col>
          </div>

          <div style="margin-top:50px; border-top:2px solid black; ">
            消息1
          </div>

          <div style="margin-top:10px; border-top:2px solid black; height: 150px;">
            消息内容
          </div>

          <div style="margin-top:10px; border-top:2px solid black;">
            <el-col :span="12" style="text-align:left;">
              发布者
            </el-col>

            <el-col :span="12" style="text-align:right;">
              发布时间
            </el-col>
          </div>
        </el-card>
      </el-col>
      <!-- 行内消息1结束 -->

      <!-- 行内消息2 -->
      <el-col :span="12">
        <el-card class="box-card">
          <div>
            <el-col :span="20" class="text-center ">

              <el-col :span="6" class="text-center">
                <router-link class="pan-btn tiffany-btn" to="/example/create">
                  tag1
                </router-link>
              </el-col>
              <el-col :span="6" class="text-center">
                <router-link class="pan-btn tiffany-btn" to="/example/create">
                  tag2
                </router-link>
              </el-col>
              <el-col :span="6" class="text-center">
                <router-link class="pan-btn tiffany-btn" to="/example/create">
                  tag3
                </router-link>
              </el-col>
            </el-col>

            <el-col :span="4" class="text-center" style="border-left: 1px solid black">
              <p>Tag</p>
            </el-col>
          </div>

          <div style="margin-top:50px; border-top:2px solid black; ">
            消息2
          </div>

          <div style="margin-top:10px; border-top:2px solid black; height: 150px;">
            消息内容
          </div>

          <div style="margin-top:10px; border-top:2px solid black;">
            <el-col :span="12" style="text-align:left;">
              发布者
            </el-col>

            <el-col :span="12" style="text-align:right;">
              发布时间
            </el-col>
          </div>
        </el-card>
      </el-col>
      <!-- 行内消息2结束 -->

    </el-row>
  </div>
</template>

<script>
import ElDragSelect from '@/components/DragSelect' // base on element-ui

export default {
  name: 'DragSelectDemo',
  components: { ElDragSelect },
  data() {
    return {
      value: ['Apple', 'Banana', 'Orange'],
      options: [{
        value: 'Apple',
        label: 'Apple'
      }, {
        value: 'Banana',
        label: 'Banana'
      }, {
        value: 'Orange',
        label: 'Orange'
      }, {
        value: 'Pear',
        label: 'Pear'
      }, {
        value: 'Strawberry',
        label: 'Strawberry'
      }]
    }
  }
}
</script>
