import { JSX, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/lightLogo.jpeg"
const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="flex bg-[white] bg-opacity-50 justify-between m-3 items-center px-6 py-4 text-[#000000] text-xl md:text-2xl font-bold mb-4 md:mb-6 relative">
      <button className=" flex flex-row justify-end text-xl" onClick={()=>{navigate('/')}}>
      <img src={logo} alt="YStudios Logo" className="h-10 rounded-md" /><p className=" font-serif font-medium ">Studios</p>
      </button>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 ">
        <button onClick={() => navigate("/our-work")} className="hover:text-gray-400">Our Work</button>
      </div>
      
      <button onClick={() => navigate("/signin")} className="hidden md:block bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white">
        Contact Us
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <button onClick={() => { navigate("/overview"); setIsOpen(false); }} className="hover:text-gray-400">Overview</button>
          <button onClick={() => { navigate("/work"); setIsOpen(false); }} className="hover:text-gray-400">Our Work</button>
          <button onClick={() => { navigate("/contact"); setIsOpen(false); }} className="hover:text-gray-400">Contact</button>
          <button onClick={() => { navigate("/signin"); setIsOpen(false); }} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white">Sign In</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
