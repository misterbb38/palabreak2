import {
  Languages,
  MessageSquare,
  FileText,
  Send,
  ChevronRight,
  Rocket,
  Check,
  Sparkles,
  BrainCircuit,
  Users,
  Globe2,
  Building2,
  Code2,
  Cpu,
} from "lucide-react";

// Import des produits depuis le JSON
import products from "../data/products.json";

// -- Icônes dynamiques --
// Cette fonction permet de choisir quelle icône Lucide afficher
// en fonction du nom stocké dans le JSON.
const IconComponent = ({ name, className }) => {
  const icons = {
    Languages: Languages,
    MessageSquare: MessageSquare,
    FileText: FileText,
    Building2: Building2,
    Code2: Code2,
    Cpu: Cpu,
    Globe2: Globe2,
    // Ajoutez d'autres mappings si besoin
  };

  const Icon = icons[name] || Sparkles; // fallback
  return <Icon className={className} />;
};

// -- Composant principal --
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER / NAVBAR */}
      <header className="relative overflow-hidden bg-gradient-to-br from-green-500 via-green-400 to-emerald-400 pb-24">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo et nom de l'entreprise */}
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">PalabreAK2</span>
            </div>

            {/* Menu de navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#mission"
                className="text-white hover:text-green-100 transition"
              >
                Notre mission
              </a>
              <a
                href="#solutions"
                className="text-white hover:text-green-100 transition"
              >
                Nos Solutions
              </a>
              <a
                href="#contact"
                className="text-white hover:text-green-100 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <div className="container mx-auto px-6 pt-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Innovation IA 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transformez votre entreprise grâce à l’IA Générative
          </h1>
          <p className="text-xl text-green-50 mb-8 leading-relaxed max-w-3xl mx-auto">
            Exploitez la puissance de modèles avancés comme Gemini, Claude,
            OpenAI et DeepSeek pour concevoir des applications web, mobiles et
            desktop qui révolutionnent votre productivité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#solutions"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-green-600 font-semibold hover:bg-green-50 transition duration-300"
            >
              Découvrir nos solutions
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-300"
            >
              Demander une démo
              <Rocket className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Courbe décorative en bas du header */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="fill-white">
            <path d="M0,50 C280,100 720,100 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </header>

      {/* Clients Section / logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-600 mb-8">
            Ils nous font confiance
          </p>
          <div className="flex justify-center items-center flex-wrap gap-12">
            <div className="flex items-center gap-2 text-gray-500">
              <Building2 className="w-6 h-6" />
              <span className="font-semibold">TechCorp</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Globe2 className="w-6 h-6" />
              <span className="font-semibold">GlobalTech</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Code2 className="w-6 h-6" />
              <span className="font-semibold">DevPro</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Cpu className="w-6 h-6" />
              <span className="font-semibold">AITech</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/À propos */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-gray-600">
              Chez <strong>PalabreAK2</strong>, nous croyons que l'Intelligence
              Artificielle est la clé pour débloquer de nouvelles opportunités
              et transformer vos processus métier. Notre mission est de
              concevoir des applications innovantes et sur mesure qui s'adaptent
              à vos besoins spécifiques et vous permettent de rester compétitif.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BrainCircuit className="w-6 h-6 text-green-600" />
                Expertise IA Générative
              </h3>
              <p className="text-gray-600">
                Nous utilisons les modèles d'IA générative les plus performants
                du marché (Gemini, Claude, OpenAI, DeepSeek) pour construire des
                solutions capables de comprendre et de générer du contenu
                complexe, que ce soit du texte, des images ou des données
                structurées.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Approche Orientée Client
              </h3>
              <p className="text-gray-600">
                Chaque entreprise est unique. C’est pourquoi nous privilégions
                une approche totalement personnalisée, en travaillant main dans
                la main avec nos clients pour définir des objectifs précis et
                mesurer rapidement les résultats concrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Solutions / Produits */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-green-600 font-semibold">Nos Solutions</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              Applications IA sur mesure
            </h2>
            <p className="text-gray-600">
              Nous développons toutes sortes d’applications web, mobiles et
              desktop adaptées à vos besoins, qu’il s’agisse de traduction
              automatique, d’assistants virtuels ou d’autres projets d’IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                {/* Contenu principal */}
                <div className="p-8 flex-1">
                  <div className="inline-flex p-3 rounded-2xl bg-green-100 text-green-600 mb-6">
                    <IconComponent name={product.icon} className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{product.name}</h4>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prix et bouton */}
                <div className="p-6 bg-gray-50">
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Basic</span>
                      <span className="font-semibold">
                        {product.price.basic}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pro</span>
                      <span className="font-semibold">{product.price.pro}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Entreprise</span>
                      <span className="font-semibold">
                        {product.price.enterprise}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (Call To Action) */}
      <section className="py-20 bg-gradient-to-br from-green-500 via-green-400 to-emerald-400 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre projet IA ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Confiez-nous votre vision et faisons équipe pour la concrétiser. Que
            ce soit pour optimiser vos processus internes, améliorer
            l’expérience client ou innover dans votre secteur, nous sommes à
            votre écoute.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-green-600 font-semibold hover:bg-green-50 transition duration-300"
          >
            Contactez-nous
            <Send className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Infos de contact */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Contactez-nous</h3>
                <p className="text-gray-600 mb-6">
                  Nous sommes là pour répondre à toutes vos questions et vous
                  aider à transformer votre vision en réalité.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building2 className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Adresse</h4>
                      <p className="text-gray-600">
                        123 Avenue de l'Innovation, 75001 Paris
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">contact@palabreak2.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Send className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      rows="4"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et slogan */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-8 h-8" />
                <h5 className="text-xl font-bold">PalabreAK2</h5>
              </div>
              <p className="text-gray-400">
                Solutions IA innovantes pour votre entreprise
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Solutions</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-green-400 transition-colors">
                  Traduction Automatique
                </li>
                <li className="hover:text-green-400 transition-colors">
                  Assistants Virtuels
                </li>
                <li className="hover:text-green-400 transition-colors">
                  Applications Personnalisées
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  contact@palabreak2.com
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  +33 1 23 45 67 89
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Paris, France
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Suivez-nous</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} PalabreAK2. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
