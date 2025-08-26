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
    <div className="rounded-xl flex flex-col justify-center p-6 items-start text-left bg-[#7A4F8B]">
      <div className="flex gap-2 mb-4 items-center">
        <FontAwesomeIcon
          icon={icon}
          className="text-6xl"
        />
        <h3 className="text-[28px] mb-2">{title}</h3>
      </div>
      <p className="text-[20px]">{description}</p>
    </div>
  );
}