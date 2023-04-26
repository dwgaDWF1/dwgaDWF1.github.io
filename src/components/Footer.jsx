import { Link } from "react-router-dom";
import { FaDiscord, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[180px] bg-black text-white flex justify-between px-[3rem] p-[1rem] font-thin sm:px-4 sm:justify-center sm:text-sm">
      <div className="flex flex-col justify-between">
        <p className="flex gap-2">
          <Link to="/termsofservice" className="hover:text-gray-500">
            Terms
          </Link>
          <span>|</span>
          <Link to="/contact" className="hover:text-gray-500">
            Help
          </Link>
          <span>|</span>
          <Link to="/" className="hover:text-gray-500">
            Privacy
          </Link>
          <span>|</span>
          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>
        </p>
        <div className="flex gap-4 text-3xl sm:gap-2 sm:text-xl">
          <div className="rounded-full p-2 transition hover:text-black hover:bg-white">
            <FaDiscord />
          </div>
          <div className="rounded-full p-2 transition hover:text-black hover:bg-white">
            <FaTwitter />
          </div>
          <div className="rounded-full p-2 transition hover:text-black hover:bg-white">
            <FaYoutube />
          </div>
          <div className="rounded-full p-2 transition hover:text-black hover:bg-white">
            <FaGithub />
          </div>
        </div>
        <p>Copyright ©️ 2023 Sellution. All Rights Reserved.</p>
      </div>
      <img className="sm:hidden" src="logoss1.png" alt="" />
    </div>
  );
};

export default Footer;
