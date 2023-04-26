const data = [
  {
    id: 1,
    image: '/shoe.png',
    title: 'Product title',
    price: 'Price in USD $300',
  },
  {
    id: 2,
    image: '/shoe.png',
    title: 'Product title',
    price: 'Price in USD $300',
  },
  {
    id: 3,
    image: '/shoe.png',
    title: 'Product title',
    price: 'Price in USD $300',
  },
]

const TopPicks = () => {
  return (
    <div className='my-10 py-5 mx-10 border-[10px] border-[#86c6b7] rounded-lg sm:my-5 sm:mx-5 sm:border-[5px] sm:py-0'>
      <p className='text-4xl font-semibold py-5 tracking-wider text-[#86c6b7] text-center sm:text-2xl'>
        Top Picks
      </p>
      <div className='flex flex-wrap py-10 gap-6 items-center justify-center sm:flex-col sm:py-0 sm:gap-4 sm:pb-4'>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className='w-[23%] h-[300px] p-4 bg-blue-300 rounded-lg font-semibold text-sm flex flex-col gap-4 items-center justify-between tracking-wider cursor-pointer sm:w-4/5'
            >
              <img
                className='rounded-lg w-[150px] h-[150px]'
                src={item.image}
                alt=''
              />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TopPicks
