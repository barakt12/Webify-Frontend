// Full Page Templates
import { wapTemplate1 } from '../temaplates-example/wap-template-1'
import { wapTemplate2 } from '../temaplates-example/wap-template-2'
import { wapTemplate3 } from '../temaplates-example/wap-template-3'
import { wapTemplate4 } from '../temaplates-example/wap-template-4'
import { wapTemplate5 } from '../temaplates-example/wap-template-5'
import { wapTemplate6 } from '../temaplates-example/wap-template-6'
import { wapTemplate7 } from '../temaplates-example/wap-template-7'

// Headers
import { headerWap1 } from '../temaplates-example/headers/header-wap-1'
import { headerWap2 } from '../temaplates-example/headers/header-wap-2'
import { headerWap3 } from '../temaplates-example/headers/header-wap-3'
import { headerCmp4 } from '../temaplates-example/headers/header-cmp-4'
import { headerCmp5 } from '../temaplates-example/headers/header-cmp-5'
import { headerCmp6 } from '../temaplates-example/headers/header-cmp-6'
import { headerCmp7 } from '../temaplates-example/headers/header-cmp-7'

// Heros
import { wapHero1 } from '../temaplates-example/heros/wap-hero-1'
import { wapHero2 } from '../temaplates-example/heros/wap-hero-2'
import { heroCmp3 } from '../temaplates-example/heros/hero-cmp-3'
import { heroCmp4 } from '../temaplates-example/heros/hero-cmp-4'
import { HeroCmp5 } from '../temaplates-example/heros/hero-cmp-5'
import { heroCmp7 } from '../temaplates-example/heros/hero-cmp-7'

//Galleries
import { wapGallery1 } from '../temaplates-example/galleries/wap-gallery-1'
import { wapCarousel2 } from '../temaplates-example/carousels/wap-carousel-2'
import { galleryCmp2 } from '../temaplates-example/galleries/gallery-cmp-2'
import { galleryCmp3 } from '../temaplates-example/galleries/gallery-cmp-3'

// Form
import { wapContact1 } from '../temaplates-example/forms/wap-contact-1'
import { formCmp2 } from '../temaplates-example/forms/form-cmp-2'
import { formCmp3 } from '../temaplates-example/forms/form-cmp-3'
import { formCmp7 } from '../temaplates-example/forms/wap-form-7'

// Cards
import { wapCards1 } from '../temaplates-example/cards/wap-cards-1'
import { CardCmp5 } from '../temaplates-example/cards/card-cmp-5'
import { SecondCardCmp5 } from '../temaplates-example/cards/card-cmp-5-second'
import { ThirdCardCmp5 } from '../temaplates-example/cards/card-cmp-5-third'
import { cardCmp7 } from '../temaplates-example/cards/card-cmp-7'

// Video
import { wapVideo1 } from '../temaplates-example/videos/wap-video-1'

//Sections
import { wapSection1 } from '../temaplates-example/sections/wap-section-1'
import { wapSection2 } from '../temaplates-example/sections/wap-section-2'
import { SectionCmp5 } from '../temaplates-example/sections/section-cmp-5'
import { sectionCmp7 } from '../temaplates-example/sections/section-cmp-7'
import { secondSectionCmp7 } from '../temaplates-example/sections/section-cmp-7-second'
import { thirdSectionCmp7 } from '../temaplates-example/sections/section-cmp-7-third'
import { fourthSectionCmp7 } from '../temaplates-example/sections/section-cmp-7-fourth'

import { SectionCmp4 } from '../temaplates-example/sections/section-cmp-4'
import { sectionCmp3 } from '../temaplates-example/sections/section-cmp-3'

// Texts
import { wapText1 } from '../temaplates-example/texts/wap-text-1'

// Footers
import { wapFooter1 } from '../temaplates-example/footers/wap-footer-1'
import { wapFooter2 } from '../temaplates-example/footers/wap-footer-2'
import { wapFooter3 } from '../temaplates-example/footers/wap-footer-3'
import { footerCmp5 } from '../temaplates-example/footers/wap-footer-5'
import { footerCmp4 } from '../temaplates-example/footers/footer-cmp-4'

//Maps
import { wapMap1 } from '../temaplates-example/maps/wap-map-1'

export const templateService = {
  getCmpsByCategory,
  getCmpById,
  getTemplateById,
}

const wapTemplates = [
  wapTemplate1,
  wapTemplate2,
  wapTemplate3,
  wapTemplate4,
  wapTemplate5,
  wapTemplate6,
  wapTemplate7,
]

const mapCmpByCategory = {
  header: [
    headerCmp4,
    headerCmp7,
    headerCmp6,
    headerCmp5,
    headerWap3,
    headerWap2,
    headerWap1
  ],
  hero: [heroCmp3, heroCmp7, heroCmp4, HeroCmp5, wapHero2,wapHero1],
  card: [ CardCmp5,ThirdCardCmp5, SecondCardCmp5, cardCmp7,wapCards1],
  section: [
    SectionCmp4,
    secondSectionCmp7,
    thirdSectionCmp7,
    fourthSectionCmp7,
    sectionCmp3,
    sectionCmp7,
    SectionCmp5,
    wapSection1,
    wapSection2,
    wapText1,
    wapVideo1,
  ],
  gallery: [galleryCmp2,galleryCmp3,wapCarousel2, wapGallery1 ],
  map: [wapMap1],
  form: [wapContact1, formCmp2, formCmp3, formCmp7],
  footer: [ wapFooter3, footerCmp4, footerCmp5,wapFooter2],
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
