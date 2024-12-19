import React from "react";
import videoBg from "../assets/images/bg.mp4";
import video1 from "../assets/images/Icon1.png";
import video2 from "../assets/images/Icon3.png";
import video3 from "../assets/images/Icon5.png";
import video4 from "../assets/images/Icon2.png";
import video5 from "../assets/images/Icon4.png";

const NosValeurs = () => {
  const valeurs = [
    {
      title: "Professionnalisme",
      image: video1,
      description: "Notre engagement envers l'excellence et la qualité"
    },
    {
      title: "Responsabilité",
      image: video2,
      description: "Nous assumons nos actions et décisions"
    },
    {
      title: "Confiance",
      image: video3,
      description: "Base de toutes nos relations professionnelles"
    },
    {
      title: "Adaptation",
      image: video4,
      description: "Flexibilité face aux changements"
    },
    {
      title: "Performance",
      image: video5,
      description: "Recherche constante d'amélioration"
    },
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-24">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Overlay optimisé avec une opacité réduite et un mélange plus subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4">
            Nos Valeurs
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            5 valeurs soulignent l&apos;identité de ABS    <span className="text-red-600">Compétences </span>
              et constituent
            notre culture d&apos;entreprise. Nous les transmettons, en interne, dans
            nos principes de management, en externe, dans les relations que
            nous entretenons avec nos partenaires.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {valeurs.map((valeur, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-4 rounded-lg backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-white/10 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                <img
                  src={valeur.image}
                  alt={valeur.title}
                  className="w-16 h-16 md:w-24 md:h-24 relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-red-200 transition-colors duration-300">
                {valeur.title}
              </h3>
              <p className="text-sm text-white/90 hidden md:block">
                {valeur.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosValeurs;