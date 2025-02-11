"use client";
import { useState } from "react";
import RechargeCard from "../components/RechargeCard";
import CryptoModal from "../components/CryptoModal";
import UpiModal from "../components/UpiModal";
import PromoModal from "../components/PromoModal";

const rechargeMethods = [
  {
    id: "upi",
    title: "UPI",
    description: "Phonepe, Paytm etc.",
    image: "/paytm.png",
  },
  {
    id: "crypto",
    title: "Crypto",
    description: "Tron, USDT",
    image: "/crypto.png",
  },
  {
    id: "promo",
    title: "Promo Code",
    description: "Gift code",
    image: "/promocode.png",
  },
];

export default function Recharge() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const renderModal = () => {
    if (!selectedMethod) return null;

    switch (selectedMethod.id) {
      case "crypto":
        return <CryptoModal onClose={() => setSelectedMethod(null)} />;
      case "upi":
        return <UpiModal onClose={() => setSelectedMethod(null)} />;
      case "promo":
        return <PromoModal onClose={() => setSelectedMethod(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Select Recharge Method</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {rechargeMethods.map((method) => (
          <RechargeCard key={method.id} {...method} onLearnMore={() => setSelectedMethod(method)} />
        ))}
      </div>
      {selectedMethod && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          {renderModal()}
        </div>
      )}
    </div>
  );
}
