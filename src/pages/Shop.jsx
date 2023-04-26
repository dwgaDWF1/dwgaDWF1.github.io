import Footer from '../components/Footer'
import Recent from '../components/Browse/Recent'
import TopPicks from '../components/Browse/TopPicks'
import Header from '../components/Browse/Header'
import { useState } from 'react'

const Browse = () => {
  const [search, setSearch] = useState('')

  return (
    <>
      <Header setSearch={setSearch} />
      <Recent search={search} />
      <TopPicks />
      <Footer />
    </>
  )
}

export default Browse
