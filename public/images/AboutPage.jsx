import Navbar from "../Navbar";
import React, { useEffect, useState } from "react";
import IMAGE from "../assets/guide.jpg";

import {
  Users,
  Globe2,
  Award,
  Check,
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  Medal,
  BookOpen,
  MapPin,
  Clock,
  Shield,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

const AnimatedShape = ({ className }) => (
  <div className={`absolute w-24 h-24 transform rotate-45 ${className}`}>
    <div className="absolute inset-0 border-2 border-blue-500/20 rounded animate-spin-slow" />
    <div className="absolute inset-2 border-2 border-purple-500/20 rounded animate-spin-reverse-slow" />
    <div className="absolute inset-4 border-2 border-pink-500/20 rounded animate-pulse" />
  </div>
);

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Professionnalisme",
      description:
        "Nous maintenons les plus hauts standards de qualité dans tous nos services.",
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Excellence académique",
      description:
        "Nous guidons nos étudiants vers les meilleures opportunités éducatives.",
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      title: "Engagement",
      description:
        "Nous nous engageons pleinement dans la réussite de chaque étudiant.",
    },
    {
      icon: <Medal className="h-12 w-12" />,
      title: "Innovation",
      description:
        "Nous adoptons les meilleures pratiques pour servir nos étudiants.",
    },
  ];

  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Conseil Académique",
      items: [
        "Choix des formations",
        "Sélection des universités",
        "Orientation carrière",
      ],
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Support à l'Installation",
      items: ["Logement", "Assurance", "Intégration locale"],
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Accompagnement Administratif",
      items: ["Visa étudiant", "Inscription", "Documents officiels"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Suivi Personnalisé",
      items: ["Support continu", "Assistance 24/7", "Résolution de problèmes"],
    },
  ];

  const blogPosts = [
    {
      title: "Guide des bourses d'études 2024",
      image: { IMAGE },
      date: "15 Mars 2024",
      category: "Financement",
      excerpt:
        "Découvrez les meilleures opportunités de financement pour vos études à l'étranger.",
    },
    {
      title: "Étudier en temps de changement",
      image: { IMAGE },
      date: "10 Mars 2024",
      category: "Conseils",
      excerpt:
        "Comment s'adapter aux nouvelles réalités de l'éducation internationale.",
    },
    {
      title: "Top 10 des villes étudiantes",
      image: { IMAGE },
      date: "5 Mars 2024",
      category: "Destinations",
      excerpt:
        "Classement des meilleures villes pour étudier à l'étranger en 2024.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://cdn.pixabay.com/video/2020/06/30/43464-436041794_tiny.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-1" />

        {/* Content */}
        <div className="relative h-full z-10">
          <div className="flex flex-col items-center justify-center h-full px-4 text-white">
            <div className="text-center max-w-4xl">
              <div className="inline-block animate-float">
                <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm mb-8">
                  Votre avenir, notre passion
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
                Votre Partenaire de Confiance pour les{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    Études à l&apos;Étranger
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-white/20 -rotate-1" />
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                Depuis notre création, nous transformons les rêves d&apos;études
                internationales en réalité, avec un accompagnement personnalisé
                et une expertise reconnue.
              </p>
              <button
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full 
                font-semibold text-lg shadow-lg hover:bg-blue-50 transform hover:scale-105
                transition-all duration-300 group"
              >
                Commencez votre projet
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section id="stats" className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                value: 1000,
                label: "Étudiants Accompagnés",
                color: "from-blue-500",
              },
              {
                icon: Globe2,
                value: 20,
                label: "Pays Partenaires",
                color: "from-purple-500",
              },
              {
                icon: Award,
                value: 98,
                label: "Taux de Satisfaction",
                color: "from-pink-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl backdrop-blur-lg bg-white/80 p-8 
                transform hover:scale-105 transition-all duration-300
                hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] group`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5
                  ${stat.color} to-transparent transition-opacity duration-300`}
                />
                <stat.icon className="h-12 w-12 text-gray-800 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <CountUp end={stat.value} />
                  {stat.value === 98 && "%"}
                  {stat.value === 1000 && "+"}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 relative bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Nos Valeurs Fondamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-lg rounded-xl p-8
                hover:bg-gradient-to-br from-blue-50 to-purple-50
                transform hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 
                  rounded-xl transition-colors duration-300"
                />
                <div className="relative z-10">
                  <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-lg rounded-xl p-8
                hover:bg-gradient-to-br from-blue-50 to-purple-50
                transform hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 
                  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                />
                <div className="relative z-10">
                  <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-gray-600"
                      >
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Actualités et Conseils
            </h2>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold
              group transition-colors duration-300"
            >
              Voir tous les articles
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg
                transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={IMAGE}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-sm text-gray-600">
                      {post.date}
                    </span>
                    <span className="ml-4 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
        <AnimatedShape className="top-20 left-20 border-white/20" />
        <AnimatedShape className="bottom-20 right-20 border-white/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Prêt à Commencer Votre Aventure ?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Rejoignez les milliers d&apos;étudiants qui ont déjà fait
              confiance à notre agence pour leurs études à l&apos;étranger.
              Votre avenir commence ici.
            </p>
            <button
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full 
              font-semibold text-lg shadow-lg hover:bg-blue-50 transform hover:scale-105
              transition-all duration-300 group"
            >
              Contactez-nous
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
