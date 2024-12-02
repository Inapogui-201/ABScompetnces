import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen 
                    bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 
                    p-4"
    >
      <div
        className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-8 
                      text-center max-w-md w-full border border-white/30"
      >
        <AlertCircle
          className="mx-auto mb-6 text-blue-600"
          size={80}
          strokeWidth={1.5}
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-700 mb-6">
          Oops ! La page que vous recherchez n&apos;existe pas ou a été
          déplacée.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg 
                      hover:bg-blue-700 transition-colors duration-300 
                      focus:outline-none focus:ring-2 focus:ring-blue-400 
                      shadow-md hover:shadow-lg"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
