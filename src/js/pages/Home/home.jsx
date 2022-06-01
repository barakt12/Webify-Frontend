import { Hero } from './cmps/hero.jsx'
import { Cards } from './cmps/cards.jsx'
import { AppFooter } from '../../cmps/app-footer'
import { Teaser } from './cmps/teaser.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'
import { WapTeasers } from './cmps/wap-teasers.jsx'

export function Home() {
  return (
    <ParallaxProvider>
      <main className='home'>
        <Hero />
        <Teaser />
        <Cards />
        <WapTeasers />
        <AppFooter />
      </main>
    </ParallaxProvider>
  )
}
