import { FaGlobe, FaThumbsUp } from 'react-icons/fa'
import { HiChip } from 'react-icons/hi'

const goals = [
  {
    id: 1,
    color: '#38c3ff',
    title: 'Accessible To Everyone',
    icon: <FaGlobe />,
    content:
      'Our passionate team works together to craft unique and diverse games, and optimize them all for any device, and for many languages. We want to make sure that any person in the world have access to play our games.',
  },
  {
    id: 2,
    color: '#ff7070',
    title: 'High Quality Games',
    icon: <FaThumbsUp />,
    content:
      'We aim to create high-quality and fun games all of our users can enjoy. Our team works hard on device optimization and the frame rate of our games. We put our updates through +10 testing sessions with our QA team.',
  },
  {
    id: 3,
    color: '#8affd2',
    title: 'Innovative And New Technology',
    icon: <HiChip />,
    content:
      'Our games use the latest technology provided by Roblox, and some that are even out for beta users. We love experimenting with new features, and constantly add new tech like Spacial Audio, Custom Terrain, New BubbleChat, and more.',
  },
]

const Goals = () => {
  return (
    <div className='bg-[#e8ecf1]'>
      <p className='text-[60px] font-bold tracking-[1px] text-center pt-8'>
        Our Goals
      </p>
      <div className='cards flex flex-col gap-6 py-[4rem] justify-center items-center'>
        {goals.map((goal) => {
          return (
            <div
              key={goal.id}
              className='w-1/2 h-[240px] bg-white p-[30px] rounded-xl shadow-xl flex gap-[2rem] justify-center items-center]'
            >
              <div
                className='text-[70px] my-auto'
                style={{ color: goal.color }}
              >
                {goal.icon}
              </div>
              <div className='flex flex-col gap-[1rem]'>
                <p className='font-bold tracking-[1px] text-center text-[30px]'>
                  {goal.title}
                </p>
                <p className='text-[15px] leading-[20px] text-[#808080]'>
                  {goal.content}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Goals
