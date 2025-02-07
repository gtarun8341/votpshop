"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function PromoModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute -top-3 -right-3 p-0 rounded-full bg-gradient-to-r from-[#550078] to-[#8A0490] text-gray-400 hover:text-black"
        >
          <XMarkIcon className="w-7 sm:w-8 h-7 sm:h-8" />
        </button>

        {/* Mastercard Payment Section */}
        <div className="flex items-center gap-2">
          <Image src="/Mastercard.png" width={30} height={30} alt="Mastercard Logo" className="w-6 sm:w-8 h-6 sm:h-8" />
          <span className="text-base sm:text-lg font-semibold text-black">Mastercard Payment</span>
        </div>

        {/* Horizontal Line */}
        <hr className="my-2 border-gray-300" />

        {/* Promo Code Section */}
        <div className="p-2 rounded-md text-center text-sm sm:text-base" style={{ backgroundColor: "#EBDDFF" }}>
          <span className="text-xs sm:text-sm text-black">Promo Code</span>
          <p className="text-sm sm:text-lg break-all font-semibold">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-500 mt-4 text-center leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Add Money Button */}
        <div className="flex justify-center mt-4">
          <button className="px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm sm:text-base">
            Add Money
          </button>
        </div>

      </div>
    </div>
  );
}
