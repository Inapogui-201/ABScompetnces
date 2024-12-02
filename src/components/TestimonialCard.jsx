import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";

//Datas pour les temoignages
const testimonials = [
  {
    type: "text",
    name: "Marie Laurent",
    role: "Étudiante en Master",
    quote:
      "SOV ÉTUDES m'a accompagnée tout au long de mon parcours d'études au Canada. Leur support a été inestimable.",
    location: "Université de Montréal",
  },
  {
    type: "video",
    name: "Marie Laurent",
    role: "Étudiante en Master",
    videoUrl: "/images/temoignages.mp4",
    thumbnailUrl: "/images/marie-thumbnail.jpg",
  },
  {
    type: "text",
    name: "Thomas Dubois",
    role: "Étudiant en Bachelor",
    quote:
      "Une équipe professionnelle qui a su répondre à toutes mes attentes. Je recommande vivement leurs services.",
    location: "University of Sydney",
  },
  {
    type: "video",
    name: "Thomas Dubois",
    role: "Étudiant en Bachelor",
    videoUrl: "/images/temoignages.mp4",
    thumbnailUrl: "/images/thomas-thumbnail.jpg",
  },
  {
    type: "text",
    name: "Sophie Martin",
    role: "Étudiante en MBA",
    quote:
      "Grâce à SOV ÉTUDES, mon rêve d'étudier aux États-Unis est devenu réalité. Un grand merci à toute l'équipe!",
    location: "Harvard University",
  },
  {
    type: "video",
    name: "Sophie Martin",
    role: "Étudiante en MBA",
    videoUrl: "/images/temoignages.mp4",
    thumbnailUrl: "/images/sophie-thumbnail.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setActiveVideoIndex(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setActiveVideoIndex(null);
  };

  const getVisibleTestimonials = () => {
    const visibleCount =
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    let visibleItems = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleItems.push(testimonials[index]);
    }

    return visibleItems;
  };

  const renderTestimonialCard = (testimonial, index) => {
    if (testimonial.type === "text") {
      return (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 relative border border-white/20 hover:bg-white/20 transition duration-300"
        >
          <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-200/20 backdrop-blur-sm mr-4" />
            <div>
              <h3 className="font-semibold text-white">{testimonial.name}</h3>
              <p className="text-blue-100 text-sm">{testimonial.role}</p>
              <p className="text-blue-200 text-sm">{testimonial.location}</p>
            </div>
          </div>
          <p className="text-blue-50 italic">{testimonial.quote}</p>
        </div>
      );
    }

    return (
      <div
        key={index}
        className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 relative border border-white/20 hover:bg-white/20 transition duration-300"
      >
        <div className="relative group">
          {activeVideoIndex !== index ? (
            <div
              className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
              style={{ backgroundImage: `url(${testimonial.thumbnailUrl})` }}
            >
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                <button
                  onClick={() => setActiveVideoIndex(index)}
                  className="bg-white/20 hover:bg-white/40 p-4 rounded-full backdrop-blur-sm"
                >
                  <Play className="h-8 w-8 text-white" />
                </button>
              </div>
            </div>
          ) : (
            <video
              controls
              autoPlay
              className="w-full h-48 object-cover rounded-lg mb-4"
              onEnded={() => setActiveVideoIndex(null)}
            >
              <source src={testimonial.videoUrl} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          )}
        </div>
        <div className="flex items-center mt-4">
          <div className="w-16 h-16 rounded-full bg-blue-200/20 backdrop-blur-sm mr-4" />
          <div>
            <h3 className="font-semibold text-white">{testimonial.name}</h3>
            <p className="text-blue-100 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cdn.pixabay.com/video/2021/03/10/67629-523386662_tiny.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ce que disent nos étudiants
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Découvrez les expériences de nos étudiants qui ont réalisé leurs
              rêves d&apos;études à l&apos;étranger.
            </p>
          </div>

          <div className="relative px-12">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition transform -translate-x-1/2"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleTestimonials().map(renderTestimonialCard)}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition transform translate-x-1/2"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
