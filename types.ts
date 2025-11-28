


export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string; // Can be HTML string or rich text
  heroImage: string;
  gallery: string[];
  techStack: string[];
  industry: string;
  youtubeId?: string; // ID video YouTube (misal: dQw4w9WgXcQ)
  repoLink?: string;
  liveLink?: string;
  date: string;
  // FIX: Added optional isFeatured property to align with its usage in constants and components.
  isFeatured?: boolean;
  repoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  deliverables: string[];
  timeline: string;
  priceRange?: string;
  icon: 'code' | 'layout' | 'smartphone' | 'consulting';
  // FIX: Added modalContent to align with the new type definition in types/service.ts
  modalContent: {
    title: string;
    description: string;
    points: {
      title: string;
      desc: string;
    }[];
  };
}