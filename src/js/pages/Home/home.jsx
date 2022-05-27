import { Hero } from './cmps/hero.jsx'
import { Cards } from './cmps/cards.jsx'
import { AppFooter } from '../../cmps/app-footer'

export function Home() {
  return (
    <main className='home'>
      <Hero />
      <Cards />
      <AppFooter />
    </main>
  )
}
