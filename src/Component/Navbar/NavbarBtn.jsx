import { LuArrowDownRight } from "react-icons/lu";

// ------------------29---------------------- 50============= hover : shadow is not working

const NavbarBtn = () => {
  return (
    <div>
      <a
        href="../public/suresh sde.pdf" // file path from public folder
        download="suresh resume" // file name for download
        className=" text-body px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange  hover:border-orange hover:scale-110 transform-all duration-500 hover:shadow-lg"
      >
        Download Resume
      </a>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </div>
  );
};

export default NavbarBtn;
