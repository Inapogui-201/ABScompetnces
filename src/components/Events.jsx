import React, { useState, useEffect } from "react";
import COACHING from '../assets/images/coaching.jpeg'
import FORMATION from '../assets/images/Formation.jpg'
import CONSEIL from '../assets/images/conseil & accomp.jpg'
import TEAM from '../assets/images/Team.jpg'
import {
  Calendar,
  MapPin,
  Users,
  ChevronRight,
  Star,
  Clock,
  X,
  Heart,
  Share2,
  BookOpen,
  GraduationCap,
  Target,
  Briefcase,
  Users as UsersGroup
} from "lucide-react";

const ServicesShowcase = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [likedServices, setLikedServices] = useState([]);

  const services = [
    {
      id: 1,
      title: "Formation",
      date: "Disponible toute l'année",
      time: "Flexible",
      location: "En présentiel ou à distance",
      category: "Formation",
      image: FORMATION,
      rating: 4.8,
      price: "Sur devis",
      spots: "Illimité",
      description: "Grâce à notre savoir-faire renforcé par des intervenants expérimentés hautement qualifiés en matière de pédagogie proactive et de proximité...",
      highlights: [
        "Formateurs experts",
        "Pédagogie proactive",
        "Accompagnement personnalisé",
      ],
      icon: GraduationCap
    },
    {
      id: 2,
      title: "Conseil et Accompagnement",
      date: "Sur rendez-vous",
      time: "Adapté à vos besoins",
      location: "Sur site ou en ligne",
      category: "Conseil",
      image: CONSEIL,
      rating: 4.9,
      price: "Sur mesure",
      spots: "Personnalisé",
      description: "Un service d'accompagnement de haute qualité, personnalisé et adaptable en fonction de vos besoins. Nos Experts-consultants recommandent des solutions...",
      highlights: [
        "Expertise personnalisée",
        "Solutions adaptées",
        "Accompagnement continu",
      ],
      icon: Briefcase
    },
    {
      id: 3,
      title: "Coaching Individuel",
      date: "Planning flexible",
      time: "Sessions personnalisées",
      location: "En présentiel ou distanciel",
      category: "Coaching",
      image: COACHING,
      rating: 4.7,
      price: "Sur devis",
      spots: "Individual",
      description: "Le coaching implique généralement l'accompagnement individuel ou collectif pour le développement personnel et professionnel.",
      highlights: [
        "Accompagnement individuel",
        "Développement personnel",
        "Objectifs personnalisés",
      ],
      icon: Target
    },
    {
      id: 4,
      title: "Coaching Collectif",
      date: "Sessions régulières",
      time: "Adaptable",
      location: "En présentiel ou distanciel",
      category: "Coaching",
      image: TEAM,
      rating: 4.8,
      price: "Sur devis",
      spots: "Groupes",
      highlights: [
        "Dynamique de groupe",
        "Développement collectif",
        "Objectifs partagés",
      ],
      icon: UsersGroup
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!animating) {
        setActiveIndex((current) => (current + 1) % services.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [animating, services.length]);

  const handleServiceClick = (service) => {
    setAnimating(true);
    setSelectedService(service);
    setTimeout(() => setAnimating(false), 500);
  };

  const toggleLike = (serviceId) => {
    setLikedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8 md:py-16">
      {/* Hero Section avec Carousel */}
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-16">
        <div className="text-center mb-8 md:mb-16 opacity-0 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-4 md:mb-6">
            Nos Services
          </h1>
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto px-4">
            Des solutions adaptées à vos besoins professionnels
          </p>
        </div>

        <div className="relative h-[400px] md:h-[600px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                idx === activeIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="relative h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                  <div className="max-w-3xl">
                    <div className="mb-2 md:mb-4">
                      <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-red-500/80 text-xs md:text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{service.title}</h2>
                    <p className="text-sm md:text-lg text-gray-200 mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        <span className="text-sm md:text-base">{service.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        <span className="text-sm md:text-base">{service.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 right-4 flex space-x-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Liste des services */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 md:top-4 right-2 md:right-4 flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(service.id);
                    }}
                    className={`p-1.5 md:p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                      likedServices.includes(service.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/70 text-gray-700 hover:bg-white"
                    }`}
                  >
                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button className="p-1.5 md:p-2 rounded-full bg-white/70 text-gray-700 backdrop-blur-md hover:bg-white transition-all duration-300">
                    <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                  <span className="px-2 py-1 md:px-3 md:py-1 rounded-full bg-white/90 text-red-600 text-xs md:text-sm font-medium">
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <span className="text-xs md:text-sm font-medium text-red-600">
                    {service.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-red-400 mr-1" />
                    <span className="text-xs md:text-sm text-red-600">
                      {service.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                  {service.title}
                </h3>

                <div className="space-y-1 md:space-y-2 mb-4">
                  <div className="flex items-center text-black">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    <span className="text-xs md:text-sm">{service.date}</span>
                  </div>
                  <div className="flex items-center text-black">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    <span className="text-xs md:text-sm">{service.time}</span>
                  </div>
                  <div className="flex items-center text-black">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    <span className="text-xs md:text-sm line-clamp-1">{service.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleServiceClick(service)}
                  className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 hover:shadow-lg hover:opacity-90 flex items-center justify-center group"
                >
                  En savoir plus
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Détaillé */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-xl md:rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-48 md:h-72 object-cover rounded-t-xl md:rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-2 md:top-4 right-2 md:right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-red-600">
                  {selectedService.title}
                </h2>
                <span className="px-4 py-2 rounded-full bg-red-600 text-white font-medium text-sm md:text-base">
                  {selectedService.price}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-black leading-relaxed">{selectedService.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 md:w-5 md:h-5 text-red-400 mr-1" />
                      <span className="text-sm md:text-base font-medium text-black">
                        {selectedService.rating}
                      </span>
                    </div>
                    <div className="flex items-center text-black">
                      <Users className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                      <span className="text-sm md:text-base">{selectedService.spots}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg md:rounded-xl p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-red-600 mb-3 md:mb-4">
                    Points clés
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {selectedService.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-center text-black text-sm md:text-base"
                      >
                        <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2 md:mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between">
                <button
                  className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-red-600 text-black text-sm md:text-base font-medium hover:bg-red-50 transition-colors"
                  onClick={() => setSelectedService(null)}
                >
                  Retour
                </button>
                <button className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity">
                  Contacter un expert
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesShowcase;