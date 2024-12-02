import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  GraduationCap,
  Stethoscope,
  TicketCheck,
  Globe,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";

// ServiceCard Component
const ServiceCard = ({
  icon: Icon,
  title,
  services,
  color,
  description,
  isExpanded,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-white rounded-3xl p-6 transition-all duration-500 
        transform hover:-translate-y-2 shadow-lg hover:shadow-2xl 
        border-l-8 relative overflow-hidden group
      `}
      style={{
        borderColor: color,
        background: `linear-gradient(135deg, white 0%, ${color}05 100%)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          absolute inset-0 opacity-10 transition-all duration-500
          ${isHovered ? "bg-gradient-to-br from-transparent to-blue-100" : ""}
        `}
      />

      <div
        className="flex items-center mb-4 cursor-pointer group"
        onClick={onClick}
      >
        <div
          className={`
          p-4 rounded-full mr-4 transition-all 
          group-hover:scale-110 ${color} 
          bg-opacity-10 shadow-md
        `}
        >
          <Icon size={36} className={`${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 flex-grow">{title}</h3>
        <ChevronRight
          size={28}
          className={`
            transform transition-transform duration-300 
            ${isExpanded ? "rotate-90" : ""} 
            ${color} opacity-60 
            group-hover:opacity-100
          `}
        />
      </div>

      <p className="text-gray-600 mb-4 opacity-70 transition-opacity">
        {description}
      </p>

      {isExpanded && (
        <div className="animate-fade-in-down">
          <ul className="pl-4 mt-2 space-y-2 text-gray-700">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-center hover:text-black transition-colors group"
              >
                <CheckCircle
                  size={16}
                  className={`mr-3 ${color} opacity-70 group-hover:opacity-100 transition-opacity`}
                />
                <span className="flex-grow">{service}</span>
                <ArrowRight
                  size={16}
                  className="ml-2 opacity-0 group-hover:opacity-50 transition-opacity"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func,
};

// VideoHeroSection Component
const VideoHeroSection = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/services.mp4" // Replace with actual video path
      >
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Nos Services Complets
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-10 drop-shadow-md">
          Votre partenaire de confiance pour des solutions internationales sur
          mesure. Études, voyages, santé : nous simplifions votre monde.
        </p>
        <div className="flex space-x-4">
          <a href="#service">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors">
              Découvrir Nos Services
            </button>
          </a>
          <a href="#contact">
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white py-3 px-6 rounded-lg transition-colors">
              Nous Contacter
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// ContactSection Component
const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message envoyé", { email, message });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 mt-12 rounded-3xl shadow-xl">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Contactez-nous
          </h3>
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                color: "text-blue-500",
                title: "Email",
                value: "contact@votre-entreprise.com",
              },
              {
                icon: Phone,
                color: "text-green-500",
                title: "Téléphone",
                value: "+33 1 23 45 67 89",
              },
              {
                icon: MapPin,
                color: "text-red-500",
                title: "Adresse",
                value: "123 Rue de l'Innovation, Paris",
              },
            ].map(({ icon: Icon, color, title, value }) => (
              <div key={title} className="flex items-center space-x-4 group">
                <div
                  className={`p-3 rounded-full ${color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}
                >
                  <Icon className={color} size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">{title}</p>
                  <p className="text-gray-500 group-hover:text-gray-700 transition-colors">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h4 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Envoyez-nous un Message
          </h4>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
            <textarea
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Envoyer</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main MultiServices Component
const MultiServices = () => {
  const [expandedIndex, setExpandedIndex] = useState([0]);

  const servicesData = [
    {
      icon: GraduationCap,
      title: "Études à l'Étranger",
      description:
        "Votre passeport pour une éducation internationale exceptionnelle",
      services: [
        "Admission dans les universités de renommée mondiale",
        "Accompagnement personnalisé pour l'inscription",
        "Stratégies d'obtention de visas étudiants",
        "Assistance complète pour l'installation",
        "Support administratif et juridique",
      ],
      color: "text-blue-600",
    },
    {
      icon: Globe,
      title: "Services Touristiques",
      description: "Explorez le monde avec confiance et élégance",
      services: [
        "Conseils de voyage sur mesure",
        "Assistance 24/7 pendant vos déplacements",
        "Gestion experte des visas et documents",
        "Hébergement et expériences exclusives",
        "Voyages culturels personnalisés",
      ],
      color: "text-green-600",
    },
    {
      icon: Stethoscope,
      title: "Évacuation Sanitaire",
      description: "Votre santé, notre priorité absolue",
      services: [
        "Coordination médicale internationale",
        "Assistance médicale d'urgence",
        "Accompagnement médical personnalisé",
        "Gestion administrative complexe",
        "Rapatriement et suivi sanitaire",
      ],
      color: "text-red-600",
    },
    {
      icon: TicketCheck,
      title: "Billetterie",
      description: "Des voyages sans tracas, du début à la fin",
      services: [
        "Réservations de vols monde entier",
        "Tarifs préférentiels et promotions",
        "Support personnalisé de réservation",
        "Options de voyage flexibles",
        "Assistance technique complète",
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
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar />

      <VideoHeroSection />

      <div className="container mx-auto px-4 py-16">
        <div id="service" className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isExpanded={expandedIndex.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default MultiServices;
