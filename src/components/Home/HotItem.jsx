import { BsFire } from 'react-icons/bs'

const HotItem = () => {
  return (
    <div className='bg-[#b1d6ce] p-10 px-20 text-white tracking-wider leading-7 sm:p-5 sm:px-5'>
      <div className='font-bold text-[1rem] flex items-center gap-4'>
        <BsFire className='text-6xl text-red-500 sm:text-2xl' />
        <p className='uppercase text-4xl sm:text-xl'>hot item!</p>
      </div>
      <div className='flex justify-start gap-x-[10rem] items-center h-[400px] sm:flex-col sm:h-fit sm:gap-x-0 sm:justify-center'>
        <div className='w-[300px] sm:w-[200px] sm:py-5'>
          <img className='w-full' src='/shoe.png' alt='' />
        </div>
        <div className='w-3/5 text-center sm:w-full sm:text-sm sm:py-5'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti a
            perferendis, laboriosam natus impedit illum ipsum sunt porro
            assumenda animi?Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quod voluptates praesentium totam, dicta quaerat ut est
            corporis a eius voluptatibus obcaecati consequatur exercitationem,
            minus odit vitae vero veniam! Itaque, ut!
          </p>
        </div>
      </div>
      <div className='text-center'>
        <button className='border-[4px] text-xl px-10 py-2 font-bold tracking-widest hover:bg-white hover:text-[#b1d6ce] hover:border-[#b1d6ce] transition'>
          View
        </button>
      </div>
    </div>
  )
}

export default HotItem
