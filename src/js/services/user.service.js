// import { storageService } from './async-storage.service.js'

import Axios from 'axios'

const axios = Axios.create({
  withCredentials: true,
})
// const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

const BASE_URL = 'http://localhost:3030/api/auth/'

export const userService = {
  login,
  logout,
  signup,
  saveLocalUser,
  getLoggedinUser,
}

async function login(userInfo) {
  try {
    const user = await axios.post(BASE_URL + 'login', userInfo)
    saveLocalUser(user.data)
    return user.data
  } catch (err) {
    throw err
  }
}

async function signup(userInfo) {
  try {
    const user = await axios.post(BASE_URL + 'signup', userInfo)
    saveLocalUser(user.data)
    return user.data
  } catch (err) {
    throw err
  }
}

async function logout() {
  try {
    await axios.post(BASE_URL + 'logout')
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  } catch (err) {
    throw err
  }
}

function saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Ja', balance: 10000})
// userService.login({username: 'muki', password: 'muki1'})
