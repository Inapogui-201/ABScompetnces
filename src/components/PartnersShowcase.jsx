import React from 'react';
import FORMATION from '../assets/images/part.jpg'
import IMG1 from '../assets/images/img1 (1).jpg'
import IMG2 from '../assets/images/IMG-2.jpg'
import IMG3 from '../assets/images/IMG-20.jpg'
import IMG4 from '../assets/images/IMG-2024.jpg'
import IMG5 from '../assets/images/IMG.jpg'

const partners = [
  { 
    id: 1, 
    name: "Google Cloud Platform", 
    logo: IMG1
  },
  { 
    id: 2, 
    name: "AWS", 
    logo: IMG2
  },
  { 
    id: 3, 
    name: "Microsoft Azure", 
    logo: IMG3
  },
  { 
    id: 4, 
    name: "Oracle Cloud", 
    logo: IMG4
  },
  { 
    id: 5, 
    name: "IBM Cloud", 
    logo: IMG5
  }
];

const PartnersShowcase = () => {
  return (
    <div
      className="py-16 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${FORMATION})` // Correction ici
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600">
            Nos Partenaires
          </h2>
          <p className="text-lg text-gray-200 mt-4">
            Nous collaborons avec des partenaires de confiance pour offrir des solutions exceptionnelles.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center w-40 h-40 hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersShowcase;