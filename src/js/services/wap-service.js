import { v4 as uuidv4 } from 'uuid'
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
// import { utilService } from './util.service.js'
// import { userService } from './user.service.js'

const STORAGE_KEY = 'wap'
const STORAGE_DRAFT_KEY = 'draftWap'
export const wapService = {
  query,
  getById,
  save,
  remove,
  getWapIdx,
  deleteCmp,
  updateCmp,
  changeCmpId,
  saveToDraft,
  getDraft,
}

function query(filterBy, sortBy) {
  return storageService.query(STORAGE_KEY)
  // return httpService.get(`wap/${queryStr}`)
}

function getById(wapId) {
  return httpService.get(`wap/${wapId}`)
}
async function remove(wapId, userId) {
  // await storageService.remove(STORAGE_KEY, wapId)
  try {
    const updatedUser = await httpService.delete(`user/${userId}/wap`, wapId)
    return updatedUser
  } catch (err) {
    console.log(err)
  }
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

async function saveToDraft(wap) {
  const draft = localStorage.getItem(STORAGE_DRAFT_KEY)
  if (draft) {
    await storageService.put(STORAGE_DRAFT_KEY, wap)
    // localStorage.setItem(STORAGE_DRAFT_KEY, JSON.stringify(wap))
  } else {
    await storageService.post(STORAGE_DRAFT_KEY, wap)
  }
}

async function getDraft() {
  return await storageService.query(STORAGE_DRAFT_KEY)
}

async function save(wap, user) {
  try {
    const updatedUser = await httpService.put(`user/${user._id}/wap`, wap)
    return Promise.resolve(updatedUser)
  } catch (err) {
    throw err
  }
}

async function getWapIdx(wapId) {
  const waps = await query()
  return waps.findIndex((wap) => wap._id === wapId)
}
