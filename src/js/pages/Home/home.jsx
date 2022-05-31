import { Hero } from './cmps/hero.jsx'
import { Cards } from './cmps/cards.jsx'
import { AppFooter } from '../../cmps/app-footer'
import { Teaser } from './cmps/teaser.jsx'

export function Home() {
  return (
    <main className='home'>
      <Hero />
      <Teaser />
      <Cards />
      <AppFooter />
    </main>
  )
}
