// // import { storageService } from './async-storage.service.js'
// import { httpService } from './http.service.js'
// import { utilService } from './util.service.js'

// // import { storageService } from './async-storage.service.js'
// // import { userService } from './user.service.js'
// const labels = [
//   'On wheels',
//   'Box game',
//   'Art',
//   'Baby',
//   'Doll',
//   'Puzzle',
//   'Outdoor',
// ]

// // const reviewChannel = new BroadcastChannel('reviewChannel')
// // const STORAGE_KEY = 'toy'
// export const toyService = {
//   query,
//   getById,
//   add,
//   update,
//   remove,
//   getEmptyToy,
//   getLabels,
//   getToyIdx,
//   getLabelsById,
// }

// function query(filterBy, sortBy) {
//   // return storageService.query(STORAGE_KEY)

//   let queryStr = !filterBy
//     ? ''
//     : `?filterBy={"name":"${filterBy.name}","stock":"${filterBy.stock}","labels":[]}&sortBy="${sortBy}"`
//   return httpService.get(`toy/${queryStr}`)
// }

// function getById(toyId) {
//   return httpService.get(`toy/${toyId}`)
// }
// async function remove(toyId) {
//   // await storageService.remove(STORAGE_KEY, carId)
//   // carChannel.postMessage(getActionRemoveCar(carId))
//   await httpService.delete(`toy/${toyId}`)
// }

// async function add(toy) {
//   await httpService.post(`toy/`, toy)
//   // reviewChannel.postMessage()
// }

// async function update(toy) {
//   try {
//     const updatedToy = await httpService.put(`toy/${toy._id}`, toy)
//     return updatedToy
//   } catch (err) {
//     throw err
//   }
// }

// async function getToyIdx(toyId) {
//   const toys = await query()
//   return toys.findIndex((toy) => toy._id === toyId)
// }

// function getLabels() {
//   return labels
// }

// async function getLabelsById(toyId) {
//   const toy = await getById(toyId)
//   return toy.labels
// }

// function getEmptyToy() {
//   return {
//     name: '',
//     price: '',
//     labels: [],
//     createdAt: Date.now() - utilService.getRandomIntInclusive(500, 50000),
//     inStock: Math.random() > 0.5,
//   }
// }
