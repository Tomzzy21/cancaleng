import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Award {
  text: string;
}

export interface Service {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  imageUrl?: string;
  title: string;
  description: string;
  longDescription?: string;
}

export interface FeaturedArticle {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  imageUrl: string;
}

export interface WhyChooseUsPoint {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}
