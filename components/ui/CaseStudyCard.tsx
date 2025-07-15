"use client";

import { DirectionAwareHover } from "./direction-aware-hover";
import Card from "@/components/ui/Card";

interface CaseStudyCardProps {
  title: string;
  result: string;
  backgroundImage: string;
  className?: string;
}

export default function CaseStudyCard({
  title,
  result,
  backgroundImage,
  className = "",
}: CaseStudyCardProps) {
  return (
    <Card className={`h-[400px] w-full ${className}`} variant="elevated">
      <DirectionAwareHover
        imageUrl={backgroundImage}
        className="h-full w-full"
        childrenClassName="flex flex-col justify-end p-6"
      >
        <div className="absolute inset-0 bg-black/60 rounded-xl flex flex-col justify-end p-6">
          <h3 className="font-serif text-2xl font-bold text-white-raw mb-2">
            {title}
          </h3>
          <span
            className="font-sans text-base font-semibold text-black bg-primary-accent rounded-full px-4 py-2 mb-2 inline-block self-start shadow-lg border-2 border-primary-accent/80 max-w-md break-words text-left whitespace-pre-line"
          >
            {result}
          </span>
        </div>
      </DirectionAwareHover>
    </Card>
  );
}
