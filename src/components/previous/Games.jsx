const games = [
  {
    id: 1,
    img: 'shoehome.png',
    link: 'https://www.roblox.com/games/6500818673/Battle-Island',
  },
  {
    id: 2,
    img: 'accessoryhome.png',
    link: 'https://www.roblox.com/games/10028703584/Untitled-Game',
  },
  {
    id: 3,
    img: 'logo.png',
    link: 'https://www.roblox.com/games/10028703584/Untitled-Game',
  },
]

const Games = () => {
  return (
    <div className='w-1/2 mx-auto'>
      <p className='text-[60px] font-bold tracking-[1px] text-center pt-8'>
        Games
      </p>
      <div className='cards flex gap-6 py-[4rem] justify-center'>
        {games.map((game) => {
          return (
            <div
              key={game.id}
              className='w-[300px] shadow-2xl rounded-2xl flex flex-col justify-center items-center hover:scale-[1.1] transition hover:contrast-200'
            >
              <a href={game.link} target='_blank'>
                <img className='w-full rounded-2xl' src={game.img} alt='' />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Games
