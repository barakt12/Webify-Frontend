// Full Page Templates
import { wapTemplate1 } from '../temaplates-example/wap-template-1'
import { wapTemplate2 } from '../temaplates-example/wap-template-2'
import { wapTemplate3 } from '../temaplates-example/wap-template-3'
import { wapTemplate5 } from '../temaplates-example/wap-template-5'
import { wapTemplate4 } from '../temaplates-example/wap-template-4'

// Headers
import { headerWap1 } from '../temaplates-example/headers/header-wap-1'
import { headerWap2 } from '../temaplates-example/headers/header-wap-2'
import { headerCmp5 } from '../temaplates-example/headers/header-cmp-5'
import { headerWap3 } from '../temaplates-example/headers/header-wap-3'
import { headerCmp4 } from '../temaplates-example/headers/header-cmp-4'

// Heros
import { wapHero1 } from '../temaplates-example/heros/wap-hero-1'
import { wapHero2 } from '../temaplates-example/heros/wap-hero-2'
import { HeroCmp5 } from '../temaplates-example/heros/hero-cmp-5'
import { heroCmp4 } from '../temaplates-example/heros/hero-cmp-3'

//Galleries
import { wapCarousel1 } from '../temaplates-example/carousels/wap-carousel-1'
import { wapGallery1 } from '../temaplates-example/galleries/wap-gallery-1'
import { wapCarousel2 } from '../temaplates-example/carousels/wap-carousel-2'
import { galleryCmp2 } from '../temaplates-example/galleries/gallery-cmp-2'

// Form
import { wapContact1 } from '../temaplates-example/forms/wap-contact-1'
import { formCmp3 } from '../temaplates-example/forms/form-cmp-2'

// Cards
import { wapCards1 } from '../temaplates-example/cards/wap-cards-1'
import { CardCmp5 } from '../temaplates-example/cards/card-cmp-5'
import { SecondCardCmp5 } from '../temaplates-example/cards/card-cmp-5-second'
import { ThirdCardCmp5 } from '../temaplates-example/cards/card-cmp-5-third'

// Video
import { wapVideo1 } from '../temaplates-example/videos/wap-video-1'

//Sections
import { wapSection1 } from '../temaplates-example/sections/wap-section-1'
import { wapSection2 } from '../temaplates-example/sections/wap-section-2'
import { SectionCmp5 } from '../temaplates-example/sections/section-cmp-5'

import { sectionCmp3 } from '../temaplates-example/sections/section-cmp-3'

// Texts
import { wapText1 } from '../temaplates-example/texts/wap-text-1'

// Footers
import { wapFooter1 } from '../temaplates-example/footers/wap-footer-1'
import { wapFooter2 } from '../temaplates-example/footers/wap-footer-2'
import { wapFooter3 } from '../temaplates-example/footers/wap-footer-3'
import { footerCmp5 } from '../temaplates-example/footers/wap-footer-5'
import { footerCmp4 } from '../temaplates-example/footers/footer-cmp-4'

export const templateService = {
  getCmpsByCategory,
  getCmpById,
  getTemplateById,
}

const wapTemplates = [wapTemplate1, wapTemplate2, wapTemplate3, wapTemplate4, wapTemplate5]

const mapCmpByCategory = {
  header: [headerWap1, headerWap2, headerWap3, headerCmp4, headerCmp5],
  hero: [wapHero1, wapHero2, heroCmp4, HeroCmp5],
  card: [wapCards1, CardCmp5, SecondCardCmp5, ThirdCardCmp5],
  section: [wapSection1, wapSection2, sectionCmp3, SectionCmp5],
  gallery: [wapCarousel1, wapCarousel2, wapGallery1, galleryCmp2],
  text: [wapText1],
  video: [wapVideo1],
  form: [wapContact1, formCmp3],
  footer: [wapFooter1, wapFooter2, wapFooter3, footerCmp4, footerCmp5],
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
  if (id === 'blank') return { cmps: [] }
  return wapTemplates.find((template) => template._id === id)
}
