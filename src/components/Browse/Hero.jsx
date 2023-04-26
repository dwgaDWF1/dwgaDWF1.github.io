import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='h-[300px] relative pt-6 mx-10 text-white tracking-wider leading-8 sm:leading-6 sm:mx-0 sm:h-[250px] sm:pt-2'>
      <div className='min-h-full w-full absolute bg-[url(/leafs.jpg)] bg-cover bg-no-repeat'></div>
      <div className='h-full w-full absolute flex flex-col items-center justify-center'>
        <p className='text-[5rem] uppercase mt-5 sm:text-xl sm:mt-0'>Spring Sale is here!</p>
        <p className='w-1/2 text-center mt-[2rem] sm:w-4/5 sm:text-sm sm:mt-2'>
          Save on selected spring-items such as t-shirts, shorts, accessories,
          and more!
        </p>
        <div className='text-center mt-[0.5rem]'>
          <button className='border-[4px] text-lg px-8 py-1 font-bold tracking-widest hover:bg-black hover:bg-opacity-60 hover:scale-110 hover:text-[#b1d6ce] duration-[.3s] hover:border-[#b1d6ce] transition sm:font-semibold sm:border-[2px]'>
            <Link to='/shop'>Shop</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
