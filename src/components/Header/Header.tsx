import { JSX, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/lightLogo.jpeg";
import Contact from "../Modals/Contact";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex bg-[white] bg-opacity-50 justify-between m-3 items-center px-6 py-4 text-[#000000] text-xl md:text-2xl font-bold mb-4 md:mb-6 relative">
      <button className="flex flex-row justify-end text-xl" onClick={() => { navigate('/'); }}>
        <img src={logo} alt="YStudios Logo" className="h-10 rounded-md" />
        <p className="font-serif font-medium">Studios</p>
      </button>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-6">
        <button onClick={() => navigate("/our-work")} className="hover:text-gray-400">Our Work</button>
      </div>
      <div className="hidden sm:flex space-x-6 text-[white] py-2 bg-[blue] px-2 rounded-full">
        <button onClick={() => navigate("/Contact Us")} className="hover:text-gray-400">Contact Us</button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden z-20">
          <button onClick={() => { navigate("/our-work"); setIsOpen(false); }} className="hover:text-gray-400">Our Work</button>
          <button onClick={() => { navigate("/contact"); setIsOpen(false); }} className="hover:text-gray-400">Contact</button>
          <Contact />
        </div>
      )}
    </nav>
  );
};

export default Header;
