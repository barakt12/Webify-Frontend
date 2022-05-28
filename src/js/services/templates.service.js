// Full Page Templates
import { wapTemplate1 } from '../temaplates-example/wap-template-1'
import { wapTemplate2 } from '../temaplates-example/wap-template-2'
import { wapTemplate3 } from '../temaplates-example/wap-template-3'

// Headers
import { headerWap1 } from '../temaplates-example/headers/header-wap-1'
import { headerWap2 } from '../temaplates-example/headers/header-wap-2'

// Heros
import { wapHero1 } from '../temaplates-example/heros/wap-hero-1'
import { wapHero2 } from '../temaplates-example/heros/wap-hero-2'

//Galleries
import { wapCarousel1 } from '../temaplates-example/carousels/wap-carousel-1'
import { wapGallery1 } from '../temaplates-example/galleries/wap-gallery-1'
import { wapCarousel2 } from '../temaplates-example/carousels/wap-carousel-2'

// Cards
import { wapCards1 } from '../temaplates-example/cards/wap-cards-1'

//Sections
import { wapSection1 } from '../temaplates-example/sections/wap-section-1'
import { wapSection2 } from '../temaplates-example/sections/wap-section-2'

// Texts
import { wapText1 } from '../temaplates-example/texts/wap-text-1'

// Footers
import { wapFooter1 } from '../temaplates-example/footers/wap-footer-1'
import { wapFooter2 } from '../temaplates-example/footers/wap-footer-2'
import { wapFooter3 } from '../temaplates-example/footers/wap-footer-3'
import { headerWap3 } from '../temaplates-example/headers/header-wap-3'
import { wapVideo1 } from '../temaplates-example/videos/wap-video-1'
import { wapContact1 } from '../temaplates-example/forms/wap-contact-1'

export const templateService = {
  getCmpsByCategory,
  getCmpById,
  getTemplateById,
}

const wapTemplates = [wapTemplate1, wapTemplate2, wapTemplate3]

const mapCmpByCategory = {
  header: [headerWap1, headerWap2, headerWap3],
  hero: [wapHero1, wapHero2],
  card: [wapCards1],
  section: [wapSection1, wapSection2],
  gallery: [wapCarousel1, wapCarousel2, wapGallery1],
  text: [wapText1],
  video: [wapVideo1],
  form: [wapContact1],
  footer: [wapFooter1, wapFooter2, wapFooter3],
}

function getCmpsByCategory(category) {
  if (mapCmpByCategory[category]) {
    return mapCmpByCategory[category].map((cmp) => ({
      id: cmp.id,
      thumbnail: cmp.thumbnail,
      category,
    }))
  }
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
