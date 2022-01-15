import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://localhost:8080/user/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: 'http://localhost:8080/user/register',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'http://localhost:8080/user/getinfo',
    method: 'get',
    params: { token }
  })
}


