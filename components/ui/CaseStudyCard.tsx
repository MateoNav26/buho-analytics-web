"use client";

import { DirectionAwareHover } from "./direction-aware-hover";

interface CaseStudyCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  className?: string;
}

export default function CaseStudyCard({
  title,
  description,
  backgroundImage,
  className = "",
}: CaseStudyCardProps) {
  return (
    <div className={`h-[400px] w-full ${className}`}>
      <DirectionAwareHover
        imageUrl={backgroundImage}
        className="h-full w-full"
        childrenClassName="flex flex-col justify-end p-6"
      >
        <div className="absolute inset-0 bg-black/60 rounded-xl flex flex-col justify-end p-6">
          <h3 className="font-serif text-2xl font-bold text-primary-accent mb-2">
            {title}
          </h3>
          <p className="font-sans text-white-raw text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </DirectionAwareHover>
    </div>
  );
} 