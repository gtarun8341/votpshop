"use client";

import { useState } from "react";

export default function Dashboard() {
  const [username] = useState("Testing"); // Replace this with actual user data

  const cards = [
    {
      title: "Balance",
      amount: "$1,250",
      image: "/balance.png", // Replace with actual image URL
    },
    {
      title: "Total Recharge",
      amount: "$5,000",
      image: "/recharge.png", // Replace with actual image URL
    },
    {
      title: "Total OTPs",
      amount: "1,230",
      image: "/otps.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <h1 className="text-2xl font-bold mb-6">Welcome back, {username}</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center transition-all duration-300 hover:bg-[#003F96] hover:text-white group"
          >
            <div>
              <h2 className="text-lg font-semibold text-black transition-all duration-300 group-hover:text-white">
                {card.title}
              </h2>
              <p className="text-xl font-bold mt-2 text-black transition-all duration-300 group-hover:text-white">
                {card.amount}
              </p>
            </div>
            <div className="w-16 h-16 flex items-center justify-center bg-[#1570EF] rounded-lg border-2 border-white transition-all duration-300 group-hover:bg-white">
              <img src={card.image} alt={card.title} className="w-12 h-12" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
