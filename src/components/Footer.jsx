import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

const ContactFooter = () => {
  const contactInfo = {
    email: "sovetudes2022@gmail.com",
    phones: [
      { country: "International", number: "+242 064 671 551" },
      { country: "Maroc", number: "+212 066 984 6826" },
      { country: "Congo", number: "+242 065 181 300" },
    ],
    address: "Arrondissement 4, Quartier Songolo, devant, République du Congo",
  };

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre message a été envoyé !");
  };

  return (
    <footer className="relative bg-gradient-to-b from-blue-950 to-slate-900">
      {/* Effet de lumière */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Section Contact */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                Prenez Contact
              </h2>
              <p className="mt-4 text-gray-400 max-w-md">
                Nous sommes là pour vous aider. Contactez-nous pour toute
                question ou demande.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition duration-300"
                  required
                />
                <textarea
                  placeholder="Votre message"
                  rows={4}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 text-white py-4 px-8 rounded-xl font-medium text-lg hover:opacity-90 transition duration-300"
              >
                <span className="flex items-center justify-center">
                  Envoyer
                  <ArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>

          {/* Section Informations */}
          <div className="flex-1 space-y-16">
            {/* Informations de contact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Informations de Contact
              </h3>

              <div className="space-y-8">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center group text-gray-400 hover:text-white transition duration-300"
                >
                  <span className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition duration-300">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span className="ml-4">{contactInfo.email}</span>
                </a>

                {contactInfo.phones.map((phone, index) => (
                  <div
                    key={index}
                    className="flex items-center group text-gray-400 hover:text-white transition duration-300"
                  >
                    <span className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition duration-300">
                      <Phone className="w-5 h-5" />
                    </span>
                    <span className="ml-4">
                      <span className="block text-sm text-gray-500">
                        {phone.country}
                      </span>
                      {phone.number}
                    </span>
                  </div>
                ))}

                <div className="flex items-start group text-gray-400 hover:text-white transition duration-300">
                  <span className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-lg group-hover:bg-teal-500/20 transition duration-300">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span className="ml-4">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Suivez-nous</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, url, label }, index) => (
                  <a
                    key={index}
                    href={url}
                    aria-label={label}
                    className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-lg hover:bg-white/10 transform hover:scale-110 transition duration-300"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white transition duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation rapide */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                {["Conseil", "Formation", "Accompagnement", "Support"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Entreprise</h4>
              <ul className="space-y-3">
                {["À propos", "Carrières", "Partenaires", "Blog"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Légal</h4>
              <ul className="space-y-3">
                {["Mentions légales", "Confidentialité", "CGU", "Cookies"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © 2024 SovEtudes. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
