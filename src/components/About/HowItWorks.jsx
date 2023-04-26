const data = [
  {
    id: 1,
    image: '/placeholder-image.jpg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore assumenda beatae.',
  },
  {
    id: 2,
    image: '/placeholder-image.jpg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore assumenda beatae.',
  },
  {
    id: 3,
    image: '/placeholder-image.jpg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore assumenda beatae.',
  },
]

const HowItWorks = () => {
  return (
    <div className='bg-[#b1d6ce] p-10 px-20 text-white tracking-wider leading-7 sm:p-5 sm:px-5'>
        <p className="text-2xl font-bold text-center sm:text-xl">How it Works</p>
      <div className='flex flex-wrap py-10 gap-8 items-center justify-center sm:flex-col sm:gap-4 sm:py-5 sm:gap-y-8'>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className='w-[23%] h-fit rounded-lg font-semibold text-sm flex flex-col gap-6 items-center justify-between tracking-wider cursor-pointer sm:w-full sm:font-normal sm:gap-2'
            >
              <img
                className='rounded-lg w-[250px] h-[250px] p-2 sm:w-[200px] sm:h-[200px]'
                src={item.image}
                alt=''
              />
              <p className="text-center font-normal w-[250px] sm:w-full">{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HowItWorks
