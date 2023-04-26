import { BsFillPersonFill } from 'react-icons/bs'
import { FaRegClock, FaPlay } from 'react-icons/fa'

const cards = [
  {
    id: 1,
    count: '20000',
    icon: <FaPlay />,
  },
  {
    id: 2,
    count: '8000',
    icon: <BsFillPersonFill />,
  },
  {
    id: 3,
    count: '30000',
    icon: <FaRegClock />,
  },
  {
    id: 4,
    count: 'Accessories',
    icon: <FaRegClock />,
  },
]

const Category = () => {
  return (
    <div className='bg-[#e8ecf1]'>
      <p className='text-[60px] font-bold tracking-[1px] text-center pt-8'>
        Shop by Category
      </p>
      <div className='cards flex gap-4 py-[4rem] justify-center'>
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className={`card${card.id} w-fit h-[250px] p-[30px] rounded-xl flex flex-col justify-center items-center`}
            >
              <span className='text-[70px] text-white'>{card.icon}</span>
              <p className='font-bold tracking-[1px] text-center text-[60px] text-white'>
                {card.count}+
              </p>
              <p className='font-bold tracking-[1px] text-center text-[20px] text-white'>
                wfa
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Category
