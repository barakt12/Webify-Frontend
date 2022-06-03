import { Hero } from './cmps/hero.jsx'
import { Cards } from './cmps/cards.jsx'
import { AppFooter } from '../../cmps/app-footer'
import { Teaser } from './cmps/teaser.jsx'
import { WapTeasers } from './cmps/wap-teasers.jsx'
import { AppHeader } from '../../cmps/app-header.jsx'

export function Home() {
  return (
    <>
      <AppHeader isCopy={true} />
      <main className='home'>
        <Hero />
        <Teaser />
        <Cards />
        <WapTeasers />
        <AppFooter />
      </main>
    </>
  )
}
