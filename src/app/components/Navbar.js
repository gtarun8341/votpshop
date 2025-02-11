import { useState } from "react";
import { 
  BellIcon, 
  UserCircleIcon, 
  QuestionMarkCircleIcon, 
  MagnifyingGlassIcon 
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex justify-between items-center bg-white text-black p-4 shadow-md">
      
      {/* Search Bar */}
      <div className="relative flex items-center bg-[#ECDFFF] text-black px-3 py-1 rounded-md w-full md:w-64">
  <input
    type="text"
    placeholder="Search..."
    className="bg-transparent flex-1 outline-none text-black placeholder-gray-600 pr-10"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <button className="absolute right-0 top-0 bottom-0 px-2 bg-blue-600 hover:bg-blue-700 rounded-r-md flex items-center justify-center">
    <MagnifyingGlassIcon className="w-5 h-5 text-white" />
  </button>
</div>


      {/* Icons Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Support Icon */}
        <div className="p-2 bg-[#F3F3F3] rounded-full cursor-pointer hover:bg-gray-300">
          <QuestionMarkCircleIcon className="w-6 h-6" />
        </div>

        {/* Notification Icon */}
        <div className="p-2 bg-[#F3F3F3] rounded-full cursor-pointer hover:bg-gray-300 relative">
          <BellIcon className="w-6 h-6" />
          {/* Notification Badge */}
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* Profile Icon */}
        <div className="flex items-center gap-2  px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300">
          <UserCircleIcon className="w-8 h-8" />
          <span className="hidden sm:block">John Doe</span> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
