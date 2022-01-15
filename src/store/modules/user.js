import { login, register, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  introduction: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_GENDER: (state, gender) => {
    state.gender = gender
  },
  SET_STUDENTID: (state, student_id) => {
    state.student_id = student_id
  },
  SET_TRAININGUNIT: (state, training_unit) => {
    state.training_unit = training_unit
  },
  SET_MAJOR: (state, major) => {
    state.major = major
  },
  SET_CLASSNUM: (state, class_num) => {
    state.class_num = class_num
  },
  SET_LEVEL: (state, level) => {
    state.level = level
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ userId: username.trim(), password: password }).then(response => {
        const { data } = response
        console.log(data)
        commit('SET_TOKEN', username)
        setToken(username)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  register({ commit }, userInfo) {
    const { username, password, confirmpassword, name } = userInfo
    return new Promise((resolve, reject) => {
      register({ userId: username.trim(), password: password, registerTime: '2022-01-10 20:52:53', name: name }).then(response => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    console.log('trigger getinfo')
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { email, pswd, avatar, name, rgtime, gender, student_id, training_unit, major, academy, class_num, level, identity} = data

        commit('SET_EMAIL', email)
        commit('SET_AVATAR', avatar)
        commit('SET_NAME', name)
        commit('SET_GENDER', gender)
        commit('SET_STUDENTID', student_id)
        commit('SET_TRAININGUNIT', training_unit)
        commit('SET_MAJOR', major)
        commit('SET_CLASSNUM', class_num)
        commit('SET_LEVEL', level)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
