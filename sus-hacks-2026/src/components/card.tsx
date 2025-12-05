// components/Card.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CardProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="rounded-xl flex flex-col justify-center p-6 items-start text-left bg-[#7A4F8B] max-xl:p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
      <div className="flex gap-2 mb-4 items-center">
        <FontAwesomeIcon
          icon={icon}
          className="text-[clamp(1.02rem,1.6575vw,1.6575rem)]"
        />
        <h3 className="text-[clamp(1.02rem,1.6575vw,1.6575rem)] mb-2">{title}</h3>
      </div>
      <p className="text-[clamp(0.765rem,1.445vw,1.105rem)]">{description}</p>
    </div>
  );
}