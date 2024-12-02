import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  GraduationCap,
  Stethoscope,
  TicketCheck,
  Globe,
  ChevronRight,
} from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  services,
  color,
  isExpanded,
  onClick,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4 cursor-pointer" onClick={onClick}>
        <Icon size={40} className={`mr-4 ${color}`} />
        <h3 className="text-xl font-semibold text-gray-800 flex-grow">
          {title}
        </h3>
        <ChevronRight
          size={24}
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-90" : ""
          } ${color}`}
        />
      </div>

      {isExpanded && (
        <ul className="pl-4 mt-2 space-y-2 text-gray-600">
          {services.map((service, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-sm">•</span>
              {service}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func,
};

const MultiServices = () => {
  const [expandedIndex, setExpandedIndex] = useState([0, 1, 2, 3]);

  const servicesData = [
    {
      icon: GraduationCap,
      title: "Services Études à l'Étranger",
      services: [
        "Admission",
        "Inscription",
        "Assistance Visa",
        "Accueil et Installation",
        "Assistance administrative",
        "Assistance d'installation légale (Carte de séjour)",
      ],
      color: "text-blue-600",
    },
    {
      icon: Globe,
      title: "Services Touristiques",
      services: [
        "Orientation",
        "Assistance avant et après le voyage",
        "Assistance Visa",
        "Hébergement et Installation",
        "Voyages et expériences culturelles",
      ],
      color: "text-green-600",
    },
    {
      icon: Stethoscope,
      title: "Évacuation Sanitaire",
      services: [
        "Orientation médicale",
        "Assistance médicale avant et après le voyage",
        "Accompagnement médical",
        "Assistance Visa",
        "Accueil et Installation",
      ],
      color: "text-red-600",
    },
    {
      icon: TicketCheck,
      title: "Billetterie",
      services: [
        "Vols vers toutes destinations",
        "Compagnies : Air Maroc, Air Ivoire, Turkish Airlines",
        "Air France, Air Sénégal, Ethiopian Airlines",
        "TAC, ECair, Canadian Airlines",
      ],
      color: "text-purple-600",
    },
  ];

  const handleCardClick = (index) => {
    setExpandedIndex((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Nos Services
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            isExpanded={expandedIndex.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiServices;
