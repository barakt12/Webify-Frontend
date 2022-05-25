import { header1 } from './headers/header1'
import { footer1 } from './footers/footer1'
import { hero1 } from './heros/hero1'
import { cards1 } from './cards/cards1'

export const template1 = {
  _id: 'ahlaid',
  name: 'ahlaname',
  imgUrl: 'ahlaimgurl',
  createdBy: {
    _id: "",
		fullname: "",
		imgUrl: "",
  },
  cmps: [header1, hero1, cards1, footer1],
}
