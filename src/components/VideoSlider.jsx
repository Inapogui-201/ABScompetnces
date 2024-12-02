import React from "react";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <video
          src="https://cdn.pixabay.com/video/2016/11/15/6414-191719619_tiny.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Votre Avenir Commence Ici
          </h1>
          <p className="text-xl text-blue-50 mb-8">
            Découvrez des opportunités d&apos;études à l&apos;étranger et vivez
            une expérience unique avec SOV ÉTUDES.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition flex items-center justify-center">
              Commencer l&apos;aventure
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-md hover:bg-white/20 transition">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
