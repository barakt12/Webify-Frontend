import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'

// import { userService } from './user.service.js'

const STORAGE_KEY = 'wapDB'
export const wapService = {
  query,
  getById,
  add,
  update,
  remove,
  getEmptyWap,
  getLabels,
  getWapIdx,
  getLabelsById,
}

function query(filterBy, sortBy) {
  return storageService.query(STORAGE_KEY)
  // return httpService.get(`wap/${queryStr}`)
}

function getById(wapId) {
  return httpService.get(`wap/${wapId}`)
}
async function remove(wapId) {
  await storageService.remove(STORAGE_KEY, carId)
  // await httpService.delete(`wap/${wapId}`)
}

async function add(wap) {
  storageService.post(STORAGE_KEY, wap)
  // await httpService.post(`wap/`, wap)
  // reviewChannel.postMessage()
}

async function update(wap) {
  try {
    // const updatedWap = await httpService.put(`wap/${wap._id}`, wap)
    const updatedWap = await storageService.put(`wap/${wap._id}`, wap)
    return updatedWap
  } catch (err) {
    throw err
  }
}

async function getWapIdx(wapId) {
  const waps = await query()
  return waps.findIndex((wap) => wap._id === wapId)
}
