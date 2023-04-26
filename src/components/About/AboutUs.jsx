const about =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, temporibus ipsam libero ducimus voluptatum quisquam dicta inventore accusantium perspiciatis incidunt quibusdam aperiam sed nisi mollitia cupiditate voluptatibus consequatur id tempore amet at officiis! Natus a non maiores cupiditate excepturi minima laborum eius provident, sunt mollitia ducimus magni expedita iure aut, sint nisi, voluptate obcaecati ut. Quidem quos placeat illum, odio suscipit, perspiciatis, eligendi ut magni optio beatae sequi! Quas id incidunt ducimus reiciendis veritatis iure.'

const AboutUs = () => {
  return (
    <div className="p-10 my-10 text-center mx-auto w-4/5 sm:p-0 sm:my-5">
      <p className="text-3xl underline sm:text-xl">About Us</p>
      <p className="text-lg mt-10 sm:text-sm sm:mt-5">{about}</p>
    </div>
  )
}

export default AboutUs
