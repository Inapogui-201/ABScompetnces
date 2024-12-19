import React from "react";
import { Check, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-red-600 mb-6 relative">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 transition-opacity duration-300 hover:opacity-80">
              ABS  <span className="text-red-600">Compétences</span>  est un cabinet de conseil et de formation dédié à l&apos;accompagnement des organismes publics, semi-publics et privés dans leurs projets de développement et d&apos;amélioration de la performance. Notre mission est de fournir des solutions sur mesure qui répondent aux besoins spécifiques de chaque client, en mettant l&apos;accent sur l&apos;efficacité opérationnelle et la croissance durable.
            </p>

            <div className="space-y-4">
              {[
               "Support 24/7",
                "Taux de satisfaction de 98%",
              ].map((item, index) => (
                <div key={index} className="flex items-center transition-transform transform hover:scale-105">
                  <Check className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
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

          {/* Image Section */}
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
              alt="Students studying"
              className="rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-red-600">7+</div>
              <div className="text-gray-600">années d&apos;expérience</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Animations */}
      <style >{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
