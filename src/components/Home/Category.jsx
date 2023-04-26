const category = ["Shoes", "Tops", "Bottoms", "Accessories"];

const Category = () => {
  return (
    <div className="pt-10 px-20 sm:px-4 sm:pt-5">
      <div className="py-4 font-bold sm:font-semibold">
        <p className="text-lg">
          Shop by <span className="text-[#86c6b7]">Category</span>
        </p>
      </div>
      <div className="flex gap-4 items-center justify-between sm:flex-col">
        {category.map((item) => {
          return (
            <div
              key={item}
              className="w-full h-[250px] bg-blue-300 rounded-lg font-bold text-3xl flex items-center justify-center hover:bg-[#86c6b7] hover:text-white tracking-wider transition cursor-pointer sm:font-semibold sm:text-xl sm:w-[250px] sm:h-[100px]"
            >
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
