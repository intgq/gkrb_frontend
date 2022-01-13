<template>
  <div class="components-container">
    <div>
      请选择5个最喜欢的tag并排序:
    </div>
    <el-drag-select v-model="selected_tags" style="width:500px;margin-top:10px;" multiple placeholder="请选择" @change="bindChange">
      <el-option v-for="item of values" :key="item" :label="item" :value="item" />
    </el-drag-select>

    <div style="margin-top:30px;">
      <el-tag v-for="item of values" :key="item" style="margin-right:15px;" @click="tagonclick(item)">
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>

<script>
import ElDragSelect from '@/components/DragSelect' // base on element-ui

export default {
  components: { ElDragSelect },
  data() {
    return {
      values: ['Apple', 'Banana', 'Orange', 'Peach', 'Pineapple', 'Cherry'],
      selected_tags: ['Apple', 'Banana', 'Orange']
    }
  },
  methods: {
    bindChange(e) {
      if (e.length > 5) {
        this.$message.warning('最多只能选取5个tag')
        this.values.splice(-1)
      }
    },
    tagonclick(val) {
      if (this.selected_tags.indexOf(val) === -1) {
        if (this.selected_tags.length === 5) {
          this.$message.warning('最多只能选取5个tag')
        } else {
          this.selected_tags.push(val)
        }
      }
    }

  }
}
</script>
