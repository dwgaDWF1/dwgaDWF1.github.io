const Hero = () => {
  return (
    <div className='h-[40vh] sm:h-[300px] relative'>
      <div className='min-h-full w-full absolute bg-[url(/banner2.png)] bg-cover bg-no-repeat bg-[#d9d9d9] blur-sm'></div>
      <div className='text-white h-full w-full absolute bg-black opacity-80 flex flex-col items-center justify-center'>
        <img className='w-[700px] sm:w-[300px]' src='sellution.png' alt='' />
        <p className='w-[600px] sm:w-[300px] text-center sm:text-sm'>
          The best place to save on your favorite brands and help the
          environment at the same time.
        </p>
        <div className='flex gap-4 p-4 justify-center text-sm'>
          <button className='border-[3px] w-[7rem] border-white py-1 '>
            <p>Browse</p>
          </button>
          <button className='border-[3px] w-[7rem] border-white py-1 '>
            <p>Learn More</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
