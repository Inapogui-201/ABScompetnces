import React from "react";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              SOV ÉTUDES est votre partenaire de confiance pour réaliser vos
              rêves d&apos;études à l&apos;étranger. Depuis notre création, nous
              nous engageons à offrir un accompagnement personnalisé et des
              solutions adaptées à chaque étudiant.
            </p>

            <div className="space-y-4">
              {[
                "Plus de 1000 étudiants accompagnés",
                "Présence dans 20+ pays",
                "Support 24/7",
                "Taux de satisfaction de 98%",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
              alt="Students studying"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-blue-600">2+</div>
              <div className="text-gray-600">années d&apos;expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
