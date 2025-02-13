// Footer.jsx
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              PALABREAK2
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous développons des solutions innovantes en utilisant les
              dernières technologies d'intelligence artificielle pour
              transformer vos idées en réalité.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail size={16} />
                <span>contact@palabreak2.com</span>
              </li>
              {/* Ajoutez d'autres informations de contact si nécessaire */}
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} PALABREAK2. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
