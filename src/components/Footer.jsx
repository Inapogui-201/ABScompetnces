import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import 'leaflet/dist/leaflet.css';

const Footer = () => {
  const socialLinks = [
    { icon: faFacebookF, label: "Facebook", url: "#" },
    { icon: faTwitter, label: "Twitter", url: "#" },
    { icon: faLinkedinIn, label: "LinkedIn", url: "#" },
    { icon: faInstagram, label: "Instagram", url: "#" },
  ];

  const quickLinks = [
    { name: "Accueil", url: "/" },
    { name: "Nos Valeurs", url: "/nos-valeurs" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" },
  ];

  // Coordonnées de Casablanca
  const casablancaCoordinates = [33.5731, -7.5898];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* À propos */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              ABS Compétences
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire pour le développement professionnel et la formation.
              Nous vous accompagnons dans votre évolution professionnelle.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    <span className="hover:pl-2 transition-all duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Contact</h3>
            <div className="space-y-4">
              <a href="tel:+212 522 30 52 36" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faPhone} className="mr-3 text-red-500" />
                <span>+212 522 30 52 36</span>
              </a>
              <a href="mailto:contact@abscompetences.com" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-red-500" />
                <span>contact@abscompetences.com</span>
              </a>
              <div className="flex items-start text-gray-400">
                <FontAwesomeIcon icon={faLocationDot} className="mr-3 mt-1 text-red-500" />
                <span>39, rue de Lille - N°4 Emile Zola<br />Belvédère 20300<br />Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          {/* Carte */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Localisation</h3>
            <div className="h-48 rounded-lg overflow-hidden">
              <MapContainer 
                center={casablancaCoordinates} 
                zoom={13} 
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; OpenStreetMap'
                />
                <Marker position={casablancaCoordinates}>
                  <Popup>
                    ABS Compétences<br />Casablanca
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-6">
          <div className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ABS Compétences. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;