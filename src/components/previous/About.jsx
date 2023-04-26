const about = `We're Beluga Games, an independent game development studio on Roblox. Ever since 2 friends started creating games together, their passion grew even more for creating. We grew our skills and talent more and more, and founded Beluga in 2020. From a fun, duo team, to a 400+ member community with over 10 talented developers from all around the world, with talented skills, and diverse backgrounds. We put our passion and skills together to create awesome games that others can enjoy`

const About = () => {
  return (
    <div className='bg-[#e8ecf1] '>
      <p className='text-[60px] font-bold tracking-[1px] text-center pt-8'>
        About
      </p>
      <p className='text-[21px] leading-[32px] text-center text-[#808080] w-3/5 mx-auto py-[3rem]'>
        {about}
      </p>
    </div>
  )
}

export default About
