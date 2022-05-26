// Full Page Templates
import { wapTemplate1 } from '../temaplates-example/wap-template-1'

// Headers
import { headerWap1 } from '../temaplates-example/headers/header-wap-1'

// Heros
import { wapHero1 } from '../temaplates-example/heros/wap-hero-1'

// Cards
import { wapCards1 } from '../temaplates-example/cards/wap-cards-1'

// Texts
import { wapText1 } from '../temaplates-example/texts/wap-text-1'

// Footers
import { wapFooter1 } from '../temaplates-example/footers/wap-footer-1'
import { wapFooter2 } from '../temaplates-example/footers/wap-footer-2'

// Galleries

export const templateService = {
  getCmpsByCategory,
  getCmpById,
}

const mapCmpByCategory = {
  header: [headerWap1],
  hero: [wapHero1],
  card: [wapCards1],
  text: [wapText1],
  footer: [wapFooter1, wapFooter2],
}

function getCmpsByCategory(category) {
  return mapCmpByCategory[category].map((cmp) => ({ id: cmp.id, thumbnail: cmp.thumbnail, category }))
}

function getCmpById(id) {
  let cmpsToReturn = null
  Object.keys(mapCmpByCategory).forEach((category) => {
    const cmpFound = mapCmpByCategory[category].find((cmp) => cmp.id === id)
    if (cmpFound) cmpsToReturn = cmpFound
  })

  return cmpsToReturn
}
