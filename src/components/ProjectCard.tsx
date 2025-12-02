import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  category,
  imageUrl,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100 aspect-[4/3]">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-6 right-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <span className="text-gray-500">{category}</span>
        <h3 className="text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
