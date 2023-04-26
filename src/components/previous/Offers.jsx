import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa'

const Offers = () => {
  return (
    <div className='py-14'>
      <div className='bg-gradient-to-br from-[#38c3ff] to-[cyan] w-4/5 mx-auto rounded-2xl py-4'>
        <p className='text-[21px] leading-[32px] text-center text-[#808080] mx-auto py-[2rem]'>
          We'll send you exclusive offers and promos as well as notify when
          items you want drop.
        </p>
        <p className='text-[60px] font-bold tracking-[1px] text-center'>
          Get exclusive offers and alerts
        </p>
        <div className='flex gap-4 justify-center items-center py-6'>
          <a href='https://discord.com/invite/C245bVbt2A' target='_blank'>
            <FaDiscord className='text-[65px] p-[20px] bg-[#5865f2] text-white rounded-lg shadow-[grey_0px_8px_24px] hover:rotate-3 hover:scale-[1.1] transition' />
          </a>
          <a href='https://twitter.com/BelugaGamesRBLX' target='_blank'>
            <FaTwitter className='text-[65px] p-[20px] bg-[#1da1f2] text-white rounded-lg shadow-[grey_0px_8px_24px] hover:rotate-3 hover:scale-[1.1] transition' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCwUFvky1kSPbiDqiRHrZblA'
            target='_blank'
          >
            <FaYoutube className='text-[65px] p-[20px] bg-[#ff0000] text-white rounded-lg shadow-[grey_0px_8px_24px] hover:rotate-3 hover:scale-[1.1] transition' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Offers
