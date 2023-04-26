import Footer from '../components/Footer'
import Hero from '../components/Browse/Hero'
import Recent from '../components/Browse/Recent'
import TopPicks from '../components/Browse/TopPicks'
import Header from '../components/Browse/Header'
import { useState } from 'react'

const Browse = () => {
  const [search, setSearch] = useState('')

  return (
    <>
      <Header setSearch={setSearch} />
      <Hero />
      <Recent search={search} />
      <TopPicks />
      <Footer />
    </>
  )
}

export default Browse
