"use client";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function CryptoModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute -top-3 -right-3 p-0 rounded-full bg-gradient-to-r from-[#550078] to-[#8A0490] text-gray-400 hover:text-black"
        >
          <XMarkIcon className="w-6 sm:w-7 h-6 sm:h-7" />
        </button>


        {/* BTC Amount Input */}
        <div className="p-2 sm:p-2 rounded-md flex justify-between items-center" style={{ backgroundColor: "#EBDDFF" }}>
        <span className="text-xs sm:text-sm font-semibold">BTC</span>
        <div className="flex gap-2 items-center">
            <input 
              type="text" 
              defaultValue="0.05" 
              className="px-2 py-1 w-20 text-right outline-none bg-transparent text-xs sm:text-sm"
            />
            <div className="flex items-center gap-1 cursor-pointer">
              <ChevronDownIcon className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center my-4">
          <Image src="/qr.png" width={120} height={120} alt="QR Code" className="sm:w-40 sm:h-40" />
        </div>

        {/* Deposit Address */}
        <div className="pt-0 pl-3 pr-1 pb-1 rounded-md text-left text-xs sm:text-sm" style={{ backgroundColor: "#EBDDFF" }}>
  <span className="text-[10px] sm:text-xs text-black">Deposit Address (BTC)</span>
  <p className="text-xs sm:text-sm break-all font-semibold">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
</div>

        {/* Description */}
        <p className="text-[10px] sm:text-xs text-gray-500 mt-4 text-center leading-relaxed">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>


        {/* Button */}
        <div className="flex justify-center mt-4">
          <button className="px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm sm:text-base">
            PLACE WITHDRAWAL
          </button>
        </div>

      </div>
    </div>
  );
}
