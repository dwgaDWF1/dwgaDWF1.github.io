const Hero = () => {
  return (
    <div className='h-[300px] relative sm:h-[150px]'>
      <div className='min-h-full w-full absolute bg-[url(/images/header.jpg)] bg-cover bg-no-repeat bg-[#d9d9d9] blur-sm'></div>
      <div className='h-full w-full absolute bg-black opacity-80 flex items-center justify-center text-5xl font-bold text-[#38c3ff] sm:font-semibold sm:text-2xl'>
        Contact
      </div>
    </div>
  )
}

export default Hero
