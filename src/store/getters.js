const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  email: state => state.user.email,
  truename: state => state.user.name,
  gender: state => state.user.gender,
  student_id: state => state.user.student_id,
  training_unit: state => state.user.training_unit,
  major: state => state.user.major,
  class_num: state => state.user.class_num,
  level: state => state.user.level,
  introduction: state => state.user.introduction,
  errorLogs: state => state.errorLog.logs
}
export default getters
