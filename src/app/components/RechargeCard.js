import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const RechargeCard = ({ image, title, description, onLearnMore }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
      <Image src={image} alt={title} width={100} height={100} className="mb-4" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-[#A0A0A0] mb-4">{description}</p>
      <button
        onClick={onLearnMore}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-600"
      >
        Learn More <ArrowRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default RechargeCard;
