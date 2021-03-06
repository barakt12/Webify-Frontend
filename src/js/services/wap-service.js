import { v4 as uuidv4 } from 'uuid'
import { wapFAQ1 } from '../temaplates-example/faqs/wap-faq-1.js'
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { userService } from './user.service.js'

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
  duplicateCmp,
  getWapCopy,
  addSubscriberDetails,
  publishWap,
  increaseViewCount,
  generateNewIds,
  findCmp,
}

function query(filterBy, sortBy) {
  // return storageService.query(STORAGE_KEY)
  const loggedUser = userService.getLoggedinUser()
  return httpService.get(`wap/`, { email: loggedUser.email })
}

function getById(wapId) {
  return httpService.get(`wap/${wapId}`)
}
async function remove(wapId) {
  // await storageService.remove(STORAGE_KEY, wapId)
  try {
    await httpService.delete(`wap/${wapId}`)
  } catch (err) {
    throw err
  }
}

function getWapCopy(wap) {
  return JSON.parse(JSON.stringify(wap))
}

function findCmp(parentCmp, cmp, cb) {
  const idx = parentCmp?.cmps?.findIndex((currCmp) => currCmp.id === cmp.id)
  if (idx > -1) {
    cb(parentCmp, idx, cmp)
    return
  } else {
    parentCmp?.cmps?.forEach((currCmp) => findCmp(currCmp, cmp, cb))
  }
}

function deleteCmp(cmp, idx) {
  return cmp.cmps.splice(idx, 1)
}

function duplicateCmp(cmp, idx) {
  const newCmp = getWapCopy(cmp.cmps[idx])
  generateNewIds(newCmp)
  return cmp.cmps.splice(idx, 0, newCmp)
}

function generateNewIds(cmp) {
  cmp.id = uuidv4()
  if (!cmp?.cmps?.length) return
  cmp.cmps.forEach((cmp) => generateNewIds(cmp))
}

function updateCmp(cmp, idx, newCmp) {
  return cmp.cmps.splice(idx, 1, newCmp)
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

async function save(wap) {
  try {
    if (!wap._id) {
      return await httpService.post(`wap`, wap)
    } else {
      return await httpService.put(`wap/${wap._id}`, wap)
    }
  } catch (err) {
    throw err
  }
}

async function getWapIdx(wapId) {
  const waps = await query()
  return waps.findIndex((wap) => wap._id === wapId)
}

async function addSubscriberDetails(wapId, details) {
  if (!wapId) return
  return await httpService.put(`wap/${wapId}/newSubscriber`, details)
}

async function publishWap(wap) {
  return await httpService.post(`wap/publish`, wap)
  // return await httpService.put(`wap/${wap._id}/publish`)
  // else {
  // }
}

function increaseViewCount(wapId) {
  return httpService.put(`wap/${wapId}/increaseview`)
}
