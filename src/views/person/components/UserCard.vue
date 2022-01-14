<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>个人信息</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>Hello</div>
          {{ user.role }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
      </div>
    </div>
    <div style="text-align:center">
      <el-tag><span class="tags">level:{{ user.level }}</span></el-tag> &ensp;
      <el-tag><span class="tags">identity:{{ user.identity }}</span></el-tag>
    </div>
    <div class="user-bio">
      <div class="user-email user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="email" /><span>邮箱</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ user.email }}
          </div>
        </div>
      </div>
      <div class="user-gender user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="people" /><span>性别</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ user.gender }}
          </div>
        </div>
      </div>
      <div class="user-studentid user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="form" /><span>学号</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ user.student_id }}
          </div>
        </div>
      </div>
      <div class="user-unit user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>班级</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ user.training_unit }}<br>
            {{ user.major }}<br>
            {{ user.class_num }}
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          role: '',
          gender: '',
          student_id: '',
          training_unit: '',
          major: '',
          class_num: '',
          level: '',
          identity: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
