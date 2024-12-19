import React from "react";
import { ArrowRight } from "lucide-react";
import IMAGE from '../assets/images/img-8.jpg'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Image de fond avec effet parallaxe */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGE}
          alt="Background"
          className="w-full h-full object-cover transform scale-105"
          style={{
            animation: 'zoom 20s infinite alternate',
            filter: 'brightness(0.9) contrast(1.1)'
          }}
        />
        {/* Overlay amélioré avec plusieurs couches */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Contenu principal avec plus d'espacement */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <div 
          className="max-w-4xl mx-auto space-y-12 animate-fade-in"
          style={{
            animation: 'fadeIn 1.2s ease-out'
          }}
        >
          {/* Titre avec mot "Compétences" en rouge */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-gray-100">ABS</span>{" "}
            <span className="text-red-600">Compétences</span>
          </h1>

          {/* Description en noir avec fond semi-transparent */}
          <div 
            style={{
              animation: 'slideUp 1s ease-out 0.3s both'
            }}
          >
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
              Un cabinet de Conseil et de Formation dont la mission principale est 
              l&apos; accompagnement des organismes publics, semi-publics et privés dans 
              leurs projets de développement et de performance.
            </p>
          </div>

          {/* Bouton avec design amélioré */}
          <div 
            style={{
              animation: 'slideUp 1s ease-out 0.5s both'
            }}
          >
           <div 
            className="pt-4"
            style={{
              animation: 'slideUp 1s ease-out 0.5s both'
            }}
          >
            <button className="group relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-white bg-red-600 rounded-lg overflow-hidden transition-all duration-300 ease-out hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center">
                Commencer l&apos;aventure
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Effet de particules subtil */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,white_0.5px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      </div>

      <style>{`
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        @keyframes fadeIn {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;