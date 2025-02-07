"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { 
  HomeIcon, 
  CurrencyDollarIcon, 
  PhoneIcon, 
  ClockIcon, 
  CreditCardIcon, 
  ServerIcon, 
  ChatBubbleLeftRightIcon, 
  QuestionMarkCircleIcon, 
  ArrowRightOnRectangleIcon,
  Bars3Icon, // Menu Icon for Mobile
  XMarkIcon  // Close Icon for Mobile
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const pathname = usePathname(); // Get current route
  const [isOpen, setIsOpen] = useState(false); // Sidebar state for mobile

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden p-2 fixed top-4 left-4 bg-gray-800 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Sidebar Container */}
      <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white p-5 w-64 
        flex flex-col transition-transform transform md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:w-64 md:flex`} 
      >
        {/* Close Button for Mobile */}
        <button 
          className="md:hidden p-2 self-end text-white" 
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Logo */}
        <h2 className="text-xl font-bold mb-6">VOTPShop</h2>

        {/* Menu List */}
        <ul className="space-y-4 flex-1">
          {menuItems.map(({ href, label, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-3 p-2 rounded transition ${
                  pathname === href ? "bg-blue-600" : "hover:bg-gray-700"
                }`}
                onClick={() => setIsOpen(false)} // Close sidebar on mobile after click
              >
                <Icon className="w-5 h-5" /> {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <button className="flex items-center gap-3 p-2 hover:bg-red-600 bg-blue-500 rounded mt-6 w-full">
          <ArrowRightOnRectangleIcon className="w-5 h-5" /> Logout
        </button>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 md:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

// Menu Items
const menuItems = [
  { href: "/dashboard", label: "Dashboard", Icon: HomeIcon },
  { href: "/recharge", label: "Recharge", Icon: CurrencyDollarIcon },
  { href: "/get-number", label: "Get Number", Icon: PhoneIcon },
  { href: "/number-history", label: "Number History", Icon: ClockIcon },
  { href: "/transactions", label: "Transactions", Icon: CreditCardIcon },
  { href: "/api-gateway", label: "API Gateway", Icon: ServerIcon },
  { href: "/sms-checker", label: "SMS Checker", Icon: ChatBubbleLeftRightIcon },
  { href: "/supports", label: "Supports", Icon: QuestionMarkCircleIcon },
];

export default Sidebar;
