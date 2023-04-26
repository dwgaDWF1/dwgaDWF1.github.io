const Hero = () => {
  return (
    <div className='h-[50vh] relative text-white font-bold tracking-wider leading-8 sm:font-semibold sm:h-[300px]'>
      <div className='min-h-full w-full absolute bg-[url(/leafs.jpg)] bg-cover bg-no-repeat'></div>
      <div className='h-full w-full absolute flex flex-col items-center justify-center gap-8 p-5 text-center sm:gap-4'>
        <p className='text-[2.5rem] sm:text-xl'>
          Helping the environment while helping you
        </p>
        <p className='w-4/5 text-lg font-semibold sm:font-normal sm:text-sm sm:w-full'>
          We're focused on being environment friendly and repurposing good, high
          quality clothes for other people to use and save money on. <br /> Read
          more below.
        </p>
      </div>
    </div>
  )
}

export default Hero
