<template>
  <el-form>
    <el-form-item label="昵称">
      <el-input v-model.trim="truename" />
    </el-form-item>
    <el-form-item label="邮件">
      <el-input v-model.trim="email" />
    </el-form-item>
    <el-form-item label="性别">
      <el-input v-model.trim="gender" />
    </el-form-item>
    <el-form-item label="学号">
      <el-input v-model.trim="student_id" />
    </el-form-item>
    <el-form-item label="培养单位">
      <el-input v-model.trim="training_unit" />
    </el-form-item>
    <el-form-item label="专业">
      <el-input v-model.trim="major" />
    </el-form-item>
    <el-form-item label="班号">
      <el-input v-model.trim="class_num" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">Update</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          gender: '',
          student_id: '',
          training_unit: '',
          major: '',
          class_num: ''
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'email',
      'avatar',
      'gender',
      'student_id',
      'training_unit',
      'major',
      'class_num',
      'level',
      'truename'
    ])
  },
  methods: {
    submit() {
      this.$message({
        message: 'User information has been updated successfully',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>
