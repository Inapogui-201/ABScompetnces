import React from "react";
const TravelPartnerComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-4">
      <div className="items-center justify-center text-center py-20">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          Nous croyons que le voyage est une force pour le bien
        </h2>
        <p className="text-gray-700 text-sm mb-2">
          En favorisant davantage de déplacements, nous créons davantage
          d’opportunités de renforcer les liens, d’élargir les horizons et de
          combler les fossés.
        </p>
        <p className="text-gray-700 text-sm">
          <strong>
            Notre mission est de permettre à tous, partout dans le monde, de
            voyager à travers le monde.
          </strong>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        {/* Voyage Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-full max-w-md h-64 overflow-hidden">
            <img
              src="/images/voyage.jpg"
              alt="Scène de voyage"
              className="w-full h-full object-cover rounded-t-full transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Voyagez avec nous
            </h2>
            <p className="text-gray-700 text-sm">
              Peu importe qui vous êtes ou où vous allez, nos marques de voyage
              aident chaque type de voyageur non seulement à trouver le voyage
              qui lui convient, mais également à obtenir le meilleur rapport
              qualité-prix à chaque fois.
            </p>
          </div>
        </div>

        {/* Partenaire Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-full max-w-md h-64 overflow-hidden">
            <img
              src="/images/voyage.jpg"
              alt="Partenaire de voyage"
              className="w-full h-full object-cover rounded-t-full transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Devenez notre partenaire
            </h2>
            <p className="text-gray-700 text-sm">
              Nous connectons les partenaires, petits et grands, à
              l&apos;univers des voyageurs, en leur donnant accès à des données,
              des outils et des technologies qui renforcent, maximisent leur
              potentiel et développent leur activité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPartnerComponent;
