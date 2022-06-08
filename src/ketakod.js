/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Execution

wapService.findCmp(wap, cmp, duplicateCmp)

// Main function

function findCmp(parentCmp, cmp, cb) {
  const idx = parentCmp.cmps?.findIndex((currCmp) => currCmp.id === cmp.id)
  if (idx > -1) {
    cb(parentCmp, idx, cmp)
    return
  } else {
    parentCmp.cmps?.forEach((currCmp) => findCmp(currCmp, cmp, cb))
  }
}

// Duplicate Callback

function duplicateCmp(cmp, idx) {
  const cmpCopy = getCmpCopy(cmp.cmps[idx])
  generateNewIds(cmpCopy)
  return cmp.cmps.splice(idx, 0, cmpCopy)
}

// Update Callback

function updateCmp(cmp, idx, newCmp) {
  return cmp.cmps.splice(idx, 1, newCmp)
}

// Delete Callback

function deleteCmp(cmp, idx) {
  return cmp.cmps.splice(idx, 1)
}

// Deep clone

function getCmpCopy(cmp) {
  return JSON.parse(JSON.stringify(cmp))
}
