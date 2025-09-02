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
    <div className="rounded-xl flex flex-col justify-center p-6 items-start text-left bg-[#7A4F8B] max-xl:p-4">
      <div className="flex gap-2 mb-4 items-center">
        <FontAwesomeIcon
          icon={icon}
          className="text-[clamp(1.2rem,1.95vw,1.95rem)]"
        />
        <h3 className="text-[clamp(1.2rem,1.95vw,1.95rem)] mb-2">{title}</h3>
      </div>
      <p className="text-[clamp(0.9rem,1.7vw,1.3rem)]">{description}</p>
    </div>
  );
}