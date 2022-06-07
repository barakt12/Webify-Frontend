/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Main function

function findCmp(parentCmp, cmp, cb) {
  const idx = parentCmp?.cmps?.findIndex((currCmp) => currCmp.id === cmp.id)
  if (idx > -1) {
    cb(parentCmp, idx, cmp)
    return
  } else {
    parentCmp?.cmps?.forEach((currCmp) => findCmp(currCmp, cmp, cb))
  }
}

// Delete Callback -- Example 1

function deleteCmp(cmp, idx) {
  return cmp.cmps.splice(idx, 1)
}


// Update Callback

function updateCmp(cmp, idx, newCmp) {
  return cmp.cmps.splice(idx, 1, newCmp)
}

// Duplicate Callback -- Example 2

function duplicateCmp(cmp, idx) {
  const newCmp = getWapCopy(cmp.cmps[idx])
  generateNewIds(newCmp)
  return cmp.cmps.splice(idx, 0, newCmp)
}

// Deep clone

function getWapCopy(wap) {
  return JSON.parse(JSON.stringify(wap))
}
