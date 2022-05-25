import { Hero } from './cmps/hero.jsx'
import { Cards } from './cmps/cards.jsx'
import { AppFooter } from '../../cmps/app-footer.jsx'

export function Home() {
  return (
    <main className='home'>
      <Hero />
      <Cards />
      <AppFooter />
    </main>
  )
}