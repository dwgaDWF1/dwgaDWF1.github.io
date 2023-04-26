const Header = ({ setSearch }) => {
  return (
    <div className='px-10 flex justify-between items-center sm:flex-col sm:px-4 sm:justify-center'>
      <div className='flex w-1/2 justify-evenly px-5 font-semibold tracking-wider text-xl sm:w-full sm:px-0 sm:font-normal sm:text-sm sm:justify-between sm:flex-wrap sm:gap-2'>
        <button className='hover:underline'>Shirts</button>
        <button className='hover:underline'>Pants</button>
        <button className='hover:underline'>Shoes</button>
        <button className='hover:underline'>Hoodies</button>
        <button className='hover:underline'>Accessories</button>
      </div>
      <div className='w-2/5 sm:w-full sm:py-4'>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className='w-full h-10 p-2 bg-gray-200 border-[4px] border-gray-400'
          placeholder='Search...'
          type='search'
          name='Search-box'
          id='filter'
        />
      </div>
    </div>
  )
}

export default Header
