import React from 'react';
import IMAG from '../assets/images/ddd.jpg'
const AboutSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image à gauche */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={IMAG}
                alt="ABS Competences Services"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              {/* Élément décoratif */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Texte à droite */}
          <div className="lg:w-1/2 space-y-6">
            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-gray-700">
                En conjuguant les compétences de nos métiers, nous couvrons l&apos;ensemble des services en Conseil et Formation. Le Conseil chez{' '}
                <strong className="text-red-600">ABS COMPETENCES</strong> est construit autour de 6 pôles.
              </p>
            </div>
            
            {/* Élément décoratif */}
            <div className="w-20 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;