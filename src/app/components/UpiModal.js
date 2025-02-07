"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function UpiModal({ onClose }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
      <button onClick={onClose} className="absolute top-2 right-2 p-2">
        <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-black" />
      </button>
      <h2 className="text-xl font-bold">UPI Payment</h2>
      <p className="text-gray-600 my-4">Scan QR or enter UPI ID to proceed.</p>
      <div className="flex justify-center my-4">
        <Image src="/qr.png" width={150} height={150} alt="UPI QR Code" />
      </div>
      <input type="text" placeholder="Enter UPI ID" className="w-full border p-2 rounded-md mb-4" />
      <button className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
        Pay Now
      </button>
    </div>
  );
}
