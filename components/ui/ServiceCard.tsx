"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCardProps {
  title: string;
  teaser: string;
  description: string;
  services: string[];
  icon?: React.ReactNode;
}

export default function ServiceCard({ 
  title, 
  teaser, 
  description, 
  services, 
  icon 
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden cursor-pointer group"
      whileHover={{ 
        scale: 1.02,
        borderColor: "rgba(207, 255, 0, 0.3)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-primary-accent mb-2 group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {teaser}
            </p>
          </div>
          {icon && (
            <div className="ml-4 text-primary-accent/60 group-hover:text-primary-accent transition-colors">
              {icon}
            </div>
          )}
        </div>
        
        {/* Expand/Collapse Indicator */}
        <motion.div
          className="mt-4 flex items-center justify-center"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-6 h-6 border border-primary-accent/30 rounded-full flex items-center justify-center">
            <svg 
              className="w-3 h-3 text-primary-accent" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1] 
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-neutral-800/50">
              {/* Detailed Description */}
              <div className="pt-6 mb-6">
                <p className="text-neutral-200 leading-relaxed mb-4">
                  {description}
                </p>
              </div>

              {/* Services List */}
              <div>
                <h4 className="text-sm font-medium text-primary-accent/80 mb-3 uppercase tracking-wide">
                  Servicios Incluidos
                </h4>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 
                      }}
                      className="flex items-center text-sm text-neutral-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-accent rounded-full mr-3 flex-shrink-0" />
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 