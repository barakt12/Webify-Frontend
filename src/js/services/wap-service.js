import { v4 as uuidv4 } from 'uuid'
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
// import { utilService } from './util.service.js'
// import { userService } from './user.service.js'

const STORAGE_KEY = 'wap'
export const wapService = {
  query,
  getById,
  save,
  remove,
  getWapIdx,
  deleteCmp,
  updateCmp,
  changeCmpId,
}

function query(filterBy, sortBy) {
  return storageService.query(STORAGE_KEY)
  // return httpService.get(`wap/${queryStr}`)
}

function getById(wapId) {
  return httpService.get(`wap/${wapId}`)
}
async function remove(wapId) {
  await storageService.remove(STORAGE_KEY, wapId)
  // await httpService.delete(`wap/${wapId}`)
}

function deleteCmp(cmp, cmpId) {
  const idx = cmp?.cmps?.findIndex((cmp) => cmp.id === cmpId)
  if (idx > -1) {
    cmp.cmps.splice(idx, 1)
    return
  } else {
    cmp?.cmps?.forEach((cmp) => deleteCmp(cmp, cmpId))
  }
}

function updateCmp(wap, newCmp) {
  const cmpIndex = wap?.cmps?.findIndex((currCmp) => currCmp.id === newCmp.id)
  if (cmpIndex > -1) {
    wap.cmps.splice(cmpIndex, 1, newCmp)
    return
  } else {
    wap?.cmps?.forEach((cmp) => updateCmp(cmp, newCmp))
  }
}

function changeCmpId(cmp) {
  cmp?.cmps?.forEach((currCmp) => {
    currCmp.id = uuidv4()
    if (!cmp.cmps || !cmp.cmps.length) return
    else changeCmpId(currCmp)
  })
}

// async function add(wap) {
//   try {
//     await storageService.post(STORAGE_KEY, wap)
//     // await httpService.post(`wap/`, wap)
//     // reviewChannel.postMessage()
//   } catch (err) {
//     throw err
//   }
// }

// async function update(wap) {
//   try {
//     // const updatedWap = await httpService.put(`wap/${wap._id}`, wap)
//     const updatedWap = await storageService.put(`wap/${wap._id}`, wap)
//     return updatedWap
//   } catch (err) {
//     throw err
//   }
// }

async function save(wap) {
  console.log(wap)
  try {
    const savedWaps = await storageService.query(STORAGE_KEY)
    const existingWap = savedWaps.find((currWap) => currWap._id === wap._id)
    console.log(existingWap)

    if (!existingWap) {
      const newWap = await storageService.post(STORAGE_KEY, wap)
      return Promise.resolve(newWap)
    }

    const updatedWap = await storageService.put(STORAGE_KEY, wap)
    return Promise.resolve(updatedWap)
  } catch (err) {
    throw err
  }
}

async function getWapIdx(wapId) {
  const waps = await query()
  return waps.findIndex((wap) => wap._id === wapId)
}
