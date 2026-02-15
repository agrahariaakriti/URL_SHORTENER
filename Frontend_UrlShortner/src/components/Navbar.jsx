import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">MINI URL</div>
      <div className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-blue-400">
          About
        </a>
        <a href="#features" className="hover:text-blue-400">
          Features
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="absolute bg-gray-900 top-16 right-4 p-4 flex flex-col space-y-2 md:hidden">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#features" className="hover:text-blue-400">
            Features
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
