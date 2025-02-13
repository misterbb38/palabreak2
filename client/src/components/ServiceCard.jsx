// ServiceCard.jsx
import React from "react";
import { Check } from "lucide-react";

function ServiceCard({ service }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6 border border-transparent group-hover:border-primary-500/20 rounded-2xl">
        {/* Icon */}
        <div className="mb-6">
          <span className="inline-block p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-4xl">
            {service.icon}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {service.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[80px]">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="text-primary-600 dark:text-primary-400 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              À partir de
            </span>
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {service.price} €
            </p>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
