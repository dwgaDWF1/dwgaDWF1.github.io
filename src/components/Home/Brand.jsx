const brand = ['Nike', 'Supreme', 'Jordan', 'Gap', 'Adidas', 'New Balance']

const Brand = () => {
  return (
    <div className='pb-10 px-20 pt-5 sm:px-4 sm:pt-5'>
      <div className='py-4 font-bold flex justify-between items-center sm:font-semibold sm:text-sm'>
        <p className='text-lg sm:text-sm'>
          Shop by <span className='text-[#86c6b7]'>Brand</span>
        </p>
        <p className='text-[#86c6b7] pr-2 cursor-pointer'>View All {`->`}</p>
      </div>
      <div className='flex gap-4 items-center justify-between sm:flex-col'>
        {brand.map((item) => {
          return (
            <div
              key={item}
              className='w-full h-[200px] p-4 bg-blue-300 rounded-lg font-bold text-xl flex items-center justify-center hover:bg-[#86c6b7] hover:text-white tracking-wider transition cursor-pointer sm:font-semibold sm:text-xl sm:w-[250px] sm:h-[100px]'
            >
              <p>{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Brand
