
export type HeroCharacter = 'spiderman' | 'ghost' | 'ironman' | 'captainamerica' | 'deadpool' | 'hulk' | 'thor' | 'doctorstrange' | 'batman' | 'wolverine' | 'blackpanther' | 'wonderwoman' | 'flash' | 'aquaman' | 'groot';

export interface Wish {
  id: string;
  name: string;
  email?: string;
  message: string;
  timestamp: number;
  aiResponse?: string;
  adminReply?: string;
  character: HeroCharacter;
  theme?: HeroCharacter;
}

export interface CharacterConfig {
  id: 'spiderman' | 'ghost';
  name: string;
  role: string;
  description: string;
  icon: string;
  colorClass: string;
  bgGradient: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}