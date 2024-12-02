import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import {
  Search,
  GraduationCap,
  Building2,
  Users,
  Wallet,
  Globe2,
  ArrowRight,
  MapPin,
  School,
  Coffee,
  Sun,
  DollarSign,
  Languages,
  Briefcase,
  Heart,
  X,
  Quote,
  Star,
} from "lucide-react";

// Composants réutilisables

const TestimonialCard = ({ name, country, text, rating }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex items-center space-x-4 mb-4">
      <img
        src="/images/France.jpg"
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{country}</p>
      </div>
    </div>
    <div className="mb-4">
      <Quote className="h-8 w-8 text-blue-100 mb-2" />
      <p className="text-gray-700">{text}</p>
    </div>
    <div className="flex items-center text-yellow-400">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  </div>
);

const StatBadge = ({ icon: Icon, label, value }) => (
  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-blue-50 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  </div>
);
const SearchBar = ({ onSearch }) => (
  <div className="relative max-w-2xl mx-auto">
    <input
      type="text"
      placeholder="Rechercher par pays, ville, université..."
      className="w-full px-6 py-4 pl-12 rounded-full text-gray-900 bg-white shadow-lg focus:ring-2 focus:ring-blue-500"
      onChange={(e) => onSearch(e.target.value)}
    />
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
  </div>
);

const ComparisonTable = ({ destination }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      Comparaison rapide
    </h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="flex items-center text-gray-700">
          <Sun className="h-4 w-4 mr-2 text-yellow-500" />
          <span>Climat: {destination.climate}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <DollarSign className="h-4 w-4 mr-2 text-green-500" />
          <span>Coût de la vie: {destination.livingCost}</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-gray-700">
          <Languages className="h-4 w-4 mr-2 text-purple-500" />
          <span>Langue: {destination.language}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
          <span>Emploi: {destination.workOpportunities}</span>
        </div>
      </div>
    </div>
  </div>
);

const DestinationCard = ({ country, stats, onSelect, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56">
        <img
          src={image}
          alt={country.name}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
          <div className="flex items-center text-white/90">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{country.region}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(stats).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center text-gray-600 bg-gray-50 p-2 rounded-lg"
            >
              {value.icon}
              <span className="ml-2 text-sm font-medium">{value.label}</span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Heart className="h-4 w-4 text-red-500 mr-2" />
            <span className="font-medium text-gray-900">Points forts</span>
          </div>
          <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
            {country.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onSelect(country.name)}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            En savoir plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
            onClick={() => window.open(country.virtualTour, "_blank")}
          >
            Visite virtuelle
          </button>
        </div>
      </div>
    </div>
  );
};

const DestinationsPage = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      country: "Étudiante à McGill, Canada",
      image: "/images/profil.jpg",
      text: "Étudier au Canada a été une expérience incroyable. Le multiculturalisme et la qualité de l'enseignement ont dépassé mes attentes.",
      rating: 5,
    },
    {
      name: "Lucas Martin",
      country: "Étudiant à TU Munich, Allemagne",
      image: "/images/profil.jpg",
      text: "La gratuité des études et les opportunités professionnelles en Allemagne sont extraordinaires. Une décision que je ne regrette pas !",
      rating: 5,
    },
    {
      name: "Sofia Rodriguez",
      country: "Étudiante à Oxford, Royaume-Uni",
      image: "/images/profil.jpg",
      text: "L'environnement académique stimulant et la richesse culturelle du Royaume-Uni ont transformé ma vision du monde.",
      rating: 5,
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const destinations = [
    {
      country: {
        name: "Canada",
        region: "Amerique",
        description:
          "Un système éducatif de renommée mondiale combiné à une excellente qualité de vie.",
        highlights: [
          "Programmes bilingues français-anglais",
          "Opportunités de travail post-diplôme",
          "Qualité de vie exceptionnelle",
        ],
        virtualTour: "#",
        climate: "4 saisons distinctes",
        language: "Anglais, Français",
        livingCost: "Modéré",
        workOpportunities: "Excellentes",
      },
      stats: {
        universities: {
          icon: <School className="h-4 w-4 text-blue-600" />,
          label: "96 Universités",
        },
        cost: {
          icon: <Wallet className="h-4 w-4 text-green-600" />,
          label: "15-25k$/an",
        },
        students: {
          icon: <Users className="h-4 w-4 text-purple-600" />,
          label: "642k étudiants",
        },
        lifestyle: {
          icon: <Coffee className="h-4 w-4 text-orange-600" />,
          label: "Excellent",
        },
      },
      image: "/images/France.jpg",
    },
    {
      country: {
        name: "France",
        region: "Europe",
        description:
          "Une éducation de haute qualité à des prix accessibles dans un pays riche en culture.",
        highlights: [
          "Frais de scolarité très abordables",
          "Rich patrimoine culturel",
          "Excellence académique",
        ],
        virtualTour: "#",
        climate: "Tempéré",
        language: "Français",
        livingCost: "Modéré",
        workOpportunities: "Bonnes",
      },
      stats: {
        universities: {
          icon: <School className="h-4 w-4 text-blue-600" />,
          label: "83 Universités",
        },
        cost: {
          icon: <Wallet className="h-4 w-4 text-green-600" />,
          label: "3-10k€/an",
        },
        students: {
          icon: <Users className="h-4 w-4 text-purple-600" />,
          label: "358k étudiants",
        },
        lifestyle: {
          icon: <Coffee className="h-4 w-4 text-orange-600" />,
          label: "Très bon",
        },
      },
      image: "/images/canada.jpg",
    },
    {
      country: {
        name: "Royaume-Uni",
        region: "Europe",
        description:
          "Des universités prestigieuses et une éducation reconnue mondialement.",
        highlights: [
          "Universités du Russell Group",
          "Programmes courts et intensifs",
          "Multiculturalisme",
        ],
        virtualTour: "#",
        climate: "Océanique",
        language: "Anglais",
        livingCost: "Élevé",
        workOpportunities: "Très bonnes",
      },
      stats: {
        universities: {
          icon: <School className="h-4 w-4 text-blue-600" />,
          label: "130 Universités",
        },
        cost: {
          icon: <Wallet className="h-4 w-4 text-green-600" />,
          label: "20-35k£/an",
        },
        students: {
          icon: <Users className="h-4 w-4 text-purple-600" />,
          label: "485k étudiants",
        },
        lifestyle: {
          icon: <Coffee className="h-4 w-4 text-orange-600" />,
          label: "Excellent",
        },
      },
      image: "/images/France.jpg",
    },
    {
      country: {
        name: "Australie",
        region: "Oceanie",
        description:
          "Une éducation de qualité dans un cadre de vie exceptionnel.",
        highlights: [
          "Qualité de vie exceptionnelle",
          "Climat agréable",
          "Excellentes infrastructures",
        ],
        virtualTour: "#",
        climate: "Chaud et ensoleillé",
        language: "Anglais",
        livingCost: "Élevé",
        workOpportunities: "Excellentes",
      },
      stats: {
        universities: {
          icon: <School className="h-4 w-4 text-blue-600" />,
          label: "43 Universités",
        },
        cost: {
          icon: <Wallet className="h-4 w-4 text-green-600" />,
          label: "20-45k$/an",
        },
        students: {
          icon: <Users className="h-4 w-4 text-purple-600" />,
          label: "509k étudiants",
        },
        lifestyle: {
          icon: <Sun className="h-4 w-4 text-orange-600" />,
          label: "Excellent",
        },
      },
      image: "/images/France.jpg",
    },
    {
      country: {
        name: "Allemagne",
        region: "Europe",
        description:
          "Excellence académique et études gratuites dans la première économie européenne.",
        highlights: [
          "Études gratuites ou très abordables",
          "Force industrielle",
          "Qualité de vie élevée",
        ],
        virtualTour: "#",
        climate: "Tempéré",
        language: "Allemand, programmes en anglais",
        livingCost: "Modéré",
        workOpportunities: "Excellentes",
      },
      stats: {
        universities: {
          icon: <School className="h-4 w-4 text-blue-600" />,
          label: "380 Universités",
        },
        cost: {
          icon: <Wallet className="h-4 w-4 text-green-600" />,
          label: "0-1.5k€/an",
        },
        students: {
          icon: <Users className="h-4 w-4 text-purple-600" />,
          label: "393k étudiants",
        },
        lifestyle: {
          icon: <Coffee className="h-4 w-4 text-orange-600" />,
          label: "Très bon",
        },
      },
      image: "/images/canada.jpg",
    },
    {
      country: {
        name: "Maroc",
        region: "Afrique",
        description:
          "Une destination émergente pour l'éducation internationale.",
        highlights: [
          "Universités en développement",
          "Culture riche et diversifiée",
          "Opportunités de croissance",
        ],
        virtualTour: "#",
        climate: "Méditerranéen",
        language: "Arabe, Français",
        livingCost: "Modéré",
        workOpportunities: "Croissantes",
      },
      stats: {
        universities: {
          icon: <School className="h-4 w-4 text-blue-600" />,
          label: "40 Universités",
        },
        cost: {
          icon: <Wallet className="h-4 w-4 text-green-600" />,
          label: "2-8k€/an",
        },
        students: {
          icon: <Users className="h-4 w-4 text-purple-600" />,
          label: "250k étudiants",
        },
        lifestyle: {
          icon: <Coffee className="h-4 w-4 text-orange-600" />,
          label: "Bon",
        },
      },
      image: "/images/France.jpg",
    },
    {
      country: {
        name: "Japon",
        region: "Asie",
        description: "Innovation technologique et traditions millénaires.",
        highlights: [
          "Technologies de pointe",
          "Systèmes éducatifs avancés",
          "Culture unique",
        ],
        virtualTour: "#",
        climate: "Varié selon les régions",
        language: "Japonais",
        livingCost: "Élevé",
        workOpportunities: "Technologie, Recherche",
      },
      stats: {
        universities: {
          icon: <School className="h-4 w-4 text-blue-600" />,
          label: "780 Universités",
        },
        cost: {
          icon: <Wallet className="h-4 w-4 text-green-600" />,
          label: "10-30k$/an",
        },
        students: {
          icon: <Users className="h-4 w-4 text-purple-600" />,
          label: "600k étudiants",
        },
        lifestyle: {
          icon: <Coffee className="h-4 w-4 text-orange-600" />,
          label: "Excellent",
        },
      },
      image: "/images/France.jpg",
    },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.region.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      dest.country.region.toLowerCase() === activeFilter.toLowerCase();

    return matchesSearch && matchesFilter;
  });
  const renderModal = () => {
    if (!selectedDestination) return null;

    const destination = destinations.find(
      (d) => d.country.name === selectedDestination
    );
    if (!destination) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {destination.country.name}
              </h3>
              <button
                onClick={() => setSelectedDestination(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="aspect-video mb-6">
              <img
                src={destination.image}
                alt={destination.country.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <p className="text-gray-600 mb-6">
              {destination.country.description}
            </p>
            <ComparisonTable destination={destination.country} />

            <div className="mt-6">
              <button
                onClick={() => setSelectedDestination(null)}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-800 via-blue-600 to-purple-600">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/images/destination.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Votre Avenir Commence Ici
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Découvrez les meilleures destinations pour vos études à
            l&apos;étranger.
          </p>
          <SearchBar onSearch={setSearchTerm} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatBadge icon={Globe2} label="Pays Partenaires" value="20+" />
            <StatBadge icon={Building2} label="Universités" value="500+" />
            <StatBadge icon={GraduationCap} label="Programmes" value="2000+" />
            <StatBadge icon={Users} label="Étudiants Placés" value="1000+" />
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-12">
            {["all", "europe", "amerique", "asie", "oceanie", "afrique"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {filter === "all"
                    ? "Toutes les destinations"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              )
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                {...destination}
                onSelect={setSelectedDestination}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que disent nos étudiants
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les expériences authentiques de nos étudiants qui ont
              choisi d&apos;étudier à l&apos;étranger.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à commencer votre aventure ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nos conseillers sont là pour vous accompagner à chaque étape de
            votre projet d&apos;études à l&apos;étranger.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
            Prendre rendez-vous
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
      {renderModal()}
    </div>
  );
};

// PropTypes
StatBadge.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

ComparisonTable.propTypes = {
  destination: PropTypes.shape({
    climate: PropTypes.string.isRequired,
    livingCost: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    workOpportunities: PropTypes.string.isRequired,
  }).isRequired,
};

DestinationCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    virtualTour: PropTypes.string.isRequired,
  }).isRequired,
  stats: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default DestinationsPage;
