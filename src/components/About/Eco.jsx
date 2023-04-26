const data = [
  {
    id: 1,
    image: "/placeholder-image.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id facere et velit provident perferendis hic ipsum suscipit magni atque quam tenetur, recusandae enim quis fugit? Ullam quisquam sunt id corporis ad impedit quasi laudantium atque dolores excepturi eveniet alias nostrum quo, ex velit possimus tempora quos autem pariatur aliquam rem?",
  },
  {
    id: 2,
    image: "/placeholder-image.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id facere et velit provident perferendis hic ipsum suscipit magni atque quam tenetur, recusandae enim quis fugit? Ullam quisquam sunt id corporis ad impedit quasi laudantium atque dolores excepturi eveniet alias nostrum quo, ex velit possimus tempora quos autem pariatur aliquam rem?",
  },
];
const Eco = () => {
  return (
    <div className="p-10 my-10 px-20 sm:p-5 sm:px-5">
      <p className="text-3xl text-center sm:text-xl">Eco-Friendly</p>
      <div className="flex flex-col">
        {data.map((item) => {
          if (item.id % 2 != 0) {
            return (
              <div
                key={item.id}
                className="flex justify-evenly my-10 items-center sm:flex-col"
              >
                <img
                  className="w-[250px] p-2 border-[1px] sm:w-[200px]"
                  src={item.image}
                  alt=""
                />
                <p className="w-3/5 text-center sm:w-full sm:text-sm sm:mt-4">{item.description}</p>
              </div>
            );
          } else {
            return (
              <div
                key={item.id}
                className="flex justify-evenly my-10 items-center sm:flex-col-reverse"
              >
                <p className="w-3/5 text-center sm:w-full sm:text-sm sm:mt-4">{item.description}</p>
                <img
                  className="w-[250px] p-2 border-[1px] sm:w-[200px]"
                  src={item.image}
                  alt=""
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Eco;
