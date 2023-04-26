import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-[5rem] flex justify-between px-[1rem] sm:p-0">
      <img src="/logoss2.png" alt="" />
      <button
        onClick={() => setToggle(!toggle)}
        className="hidden sm:block sm:my-auto sm:pr-5 sm:text-lg sm:z-30"
      >
        <FiMenu />
      </button>
      <div className="flex gap-6 items-center text-2xl font-semibold tracking-[1px] text-[#808080] pr-6 sm:hidden">
        <Link className="hover:text-[#8affd2] transition" to="/">
          Home
        </Link>
        <Link className="hover:text-[#8affd2] transition" to="/browse">
          Browse
        </Link>
        <Link className="hover:text-[#8affd2] transition" to="/about">
          About
        </Link>
        <Link className="hover:text-[#8affd2] transition" to="sell/">
          Sell
        </Link>
        <Link className="hover:text-[#8affd2] transition" to="/contact">
          Help
        </Link>
      </div>
      {toggle && (
        <div className="gap-6 items-center text-2xl font-semibold tracking-[1px] text-[#808080] pr-6 hidden sm:flex sm:flex-col sm:absolute sm:bg-white sm:z-20 sm:h-screen sm:w-full sm:pt-20 sm:text-sm">
          <Link
            onClick={() => setToggle(!toggle)}
            className="hover:text-[#8affd2] transition"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setToggle(!toggle)}
            className="hover:text-[#8affd2] transition"
            to="/browse"
          >
            Browse
          </Link>
          <Link
            onClick={() => setToggle(!toggle)}
            className="hover:text-[#8affd2] transition"
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setToggle(!toggle)}
            className="hover:text-[#8affd2] transition"
            to="sell/"
          >
            Sell
          </Link>
          <Link
            onClick={() => setToggle(!toggle)}
            className="hover:text-[#8affd2] transition"
            to="/contact"
          >
            Help
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
