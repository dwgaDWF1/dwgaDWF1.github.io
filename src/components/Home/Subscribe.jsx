import { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [toggle, setToggle] = useState(false)

  function handleSubmit() {
    setToggle(true)
  }

  return (
    <>
      {toggle ? (
        <div className='h-[260px] flex justify-center items-center text-2xl sm:text-sm'>
          Thank You For Subscribing....
        </div>
      ) : (
        <div className='mx-10 py-10 sm:mx-5 sm:py-5'>
          <div className='flex flex-col justify-center gap-8 w-3/5 mx-auto bg-[#46daffbe] rounded-xl p-10 sm:p-2 sm:w-full sm:gap-4'>
            <p className='text-4xl text-center font-bold sm:text-2xl'>
              Get exclusive offers & news
            </p>
            <p className='text-xl text-center text-white sm:text-sm'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati, natus amet non veniam quae earum sequi eos vero harum
              asperiores?
            </p>
            <div className='flex justify-center items-center gap-4 sm:flex-col'>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className='bg-white w-full border-[3px] border-[#38c3ff] rounded-lg outline-none p-2 h-10'
                placeholder='youremail@example.com'
                type='email'
              />
              <button
                onClick={handleSubmit}
                className='rounded-lg w-[10rem] bg-[#4fff38] py-2 text-xl text-white hover:bg-white hover:border-[2px] hover:border-[#38c3ff] hover:text-[#38c3ff] focus:bg-[#38c3ff] focus:text-white transition sm:text-lg sm:p-1 sm:w-[6rem]'
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Subscribe
