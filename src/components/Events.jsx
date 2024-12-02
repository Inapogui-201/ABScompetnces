import React, { useState, useEffect } from "react";
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
} from "lucide-react";

// Converted from TypeScript interface to PropTypes or just a comment
// Defining the shape of an event object
const EventPropTypes = {
  id: 0,
  title: "",
  date: "",
  time: "",
  location: "",
  category: "",
  image: "",
  rating: 0,
  price: "",
  spots: 0,
  description: "",
  highlights: [],
};

const EventsShowcase = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [likedEvents, setLikedEvents] = useState([]);

  const events = [
    {
      id: 1,
      title: "Festival International d'Innovation",
      date: "15 Décembre 2024",
      time: "10:00 - 20:00",
      location: "Palais des Congrès, Paris",
      category: "Innovation",
      image: "/images/img1.jpg",
      rating: 4.8,
      price: "Gratuit",
      spots: 150,
      description:
        "Rejoignez-nous pour une journée exceptionnelle dédiée à l'innovation et aux technologies émergentes.",
      highlights: [
        "Conférences inspirantes",
        "Ateliers pratiques",
        "Networking international",
      ],
    },
    {
      id: 2,
      title: "Master Class Leadership",
      date: "22 Janvier 2025",
      time: "14:00 - 18:00",
      location: "Campus Excellence",
      category: "Formation",
      image: "/images/img2.jpg",
      rating: 4.9,
      price: "290€",
      spots: 30,
      description:
        "Une expérience unique pour développer vos compétences en leadership avec des experts reconnus.",
      highlights: [
        "Sessions personnalisées",
        "Études de cas réels",
        "Certification premium",
      ],
    },
    {
      id: 3,
      title: "Global Tech Summit",
      date: "10 Février 2025",
      time: "09:00 - 17:00",
      location: "Digital Hub",
      category: "Technologie",
      image: "/images/img3.jpg",
      rating: 4.7,
      price: "180€",
      spots: 200,
      description:
        "Le plus grand rassemblement tech de l'année avec des intervenants de renommée mondiale.",
      highlights: [
        "Keynotes exclusifs",
        "Démonstrations live",
        "Networking VIP",
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!animating) {
        setActiveIndex((current) => (current + 1) % events.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [animating, events.length]);

  const handleEventClick = (event) => {
    setAnimating(true);
    setSelectedEvent(event);
    setTimeout(() => setAnimating(false), 500);
  };

  const toggleLike = (eventId) => {
    setLikedEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 py-16">
      {/* Hero Section avec Carousel */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Événements Exceptionnels
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez des expériences uniques qui transformeront votre parcours
          </p>
        </div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                idx === activeIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="relative h-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-3xl">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/80 text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
                    <p className="text-lg text-gray-200 mb-6">
                      {event.description}
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 right-6 flex space-x-2">
            {events.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

      {/* Liste des événements */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(event.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                      likedEvents.includes(event.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/70 text-gray-700 hover:bg-white"
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-white/70 text-gray-700 backdrop-blur-md hover:bg-white transition-all duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-violet-600 text-sm font-medium">
                    {event.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-violet-600">
                    {event.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">
                      {event.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleEventClick(event)}
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:opacity-90 flex items-center justify-center group"
                >
                  Découvrir
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Détaillé */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-72 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedEvent.title}
                </h2>
                <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-600 font-medium">
                  {selectedEvent.price}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-1" />
                      <span className="font-medium">
                        {selectedEvent.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-gray-500 mr-1" />
                      <span>{selectedEvent.spots} places</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Points clés
                  </h3>
                  <ul className="space-y-3">
                    {selectedEvent.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <BookOpen className="w-5 h-5 text-violet-500 mr-3" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="px-6 py-3 rounded-lg border-2 border-violet-600 text-violet-600 font-medium hover:bg-violet-50 transition-colors"
                  onClick={() => setSelectedEvent(null)}
                >
                  Retour
                </button>
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:opacity-90 transition-opacity">
                  Réserver ma place
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsShowcase;
