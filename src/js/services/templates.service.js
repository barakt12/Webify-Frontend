// Full Page Templates
import { wapTemplate1 } from '../temaplates-example/wap-template-1'
import { wapTemplate2 } from '../temaplates-example/wap-template-2'

// Headers
import { headerWap1 } from '../temaplates-example/headers/header-wap-1'
import { headerWap2 } from '../temaplates-example/headers/header-wap-2'

// Heros
import { wapHero1 } from '../temaplates-example/heros/wap-hero-1'
import { wapHero2 } from '../temaplates-example/heros/wap-hero-2'

// Cards
import { wapCards1 } from '../temaplates-example/cards/wap-cards-1'
import { wapCards2 } from '../temaplates-example/cards/wap-cards-2'
import { wapCards2second } from '../temaplates-example/cards/wap-cards-2-second'

// Texts
import { wapText1 } from '../temaplates-example/texts/wap-text-1'

// Footers
import { wapFooter1 } from '../temaplates-example/footers/wap-footer-1'
import { wapFooter2 } from '../temaplates-example/footers/wap-footer-2'
import { wapFooter3 } from '../temaplates-example/footers/wap-footer-3'

// Galleries

export const templateService = {
  getCmpsByCategory,
  getCmpById,
  getTemplateById,
}

const wapTemplates = [wapTemplate1, wapTemplate2]

const mapCmpByCategory = {
  header: [headerWap1, headerWap2],
  hero: [wapHero1, wapHero2],
  card: [wapCards1, wapCards2, wapCards2second],
  text: [wapText1],
  footer: [wapFooter1, wapFooter2, wapFooter3],
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

function getTemplateById(id) {
  return wapTemplates.find((template) => template._id === id)
}
