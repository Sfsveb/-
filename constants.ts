import { 
  Palette, 
  Video, 
  Share2, 
  MonitorPlay, 
  Megaphone,
  Phone,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';
import { ServiceItem, PortfolioItem, ContactInfo } from './types';

export const HERO_CONTENT = {
  greeting: "Hello, I'm",
  name: "Ashraf Saber",
  roles: ["Graphic Designer", "Video Editor"],
  description: "I create visual identities, social media designs, and advertising visuals that leave a lasting impression.",
  cta: "Contact Me"
};

export const ABOUT_CONTENT = {
  title: "About Me",
  text: "I am a passionate Graphic Designer based in Egypt, specialized in branding, social media content, visual ads, and creative direction. I help businesses create strong visual identities and high-quality designs with a modern creative touch."
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Branding & Logo Design',
    description: 'Crafting unique visual identities that define your business essence.',
    icon: Palette
  },
  {
    id: '2',
    title: 'Social Media Designs',
    description: 'Engaging visuals tailored for Facebook, Instagram, and Twitter.',
    icon: Share2
  },
  {
    id: '3',
    title: 'Motion Graphics',
    description: 'Bringing static designs to life with smooth animations and effects.',
    icon: MonitorPlay
  },
  {
    id: '4',
    title: 'Video Editing',
    description: 'Professional cuts, transitions, and color grading for your footage.',
    icon: Video
  },
  {
    id: '5',
    title: 'Advertising Design',
    description: 'High-conversion ad creatives for digital and print campaigns.',
    icon: Megaphone
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: 'Neon Brand Identity', category: 'Branding', imageUrl: 'https://picsum.photos/600/600?random=1' },
  { id: '2', title: 'Fitness Campaign', category: 'Social Media', imageUrl: 'https://picsum.photos/600/800?random=2' },
  { id: '3', title: 'Tech Startup Logo', category: 'Logo Design', imageUrl: 'https://picsum.photos/600/600?random=3' },
  { id: '4', title: 'Product Commercial', category: 'Video Editing', imageUrl: 'https://picsum.photos/800/600?random=4' },
  { id: '5', title: 'Fashion Lookbook', category: 'Print', imageUrl: 'https://picsum.photos/600/900?random=5' },
  { id: '6', title: 'Food Delivery Ad', category: 'Advertising', imageUrl: 'https://picsum.photos/800/800?random=6' },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    platform: 'WhatsApp',
    value: '01554748116',
    href: 'https://wa.me/201554748116',
    icon: MessageCircle
  },
  {
    platform: 'Phone',
    value: '01125043016',
    href: 'tel:+201125043016',
    icon: Phone
  },
  {
    platform: 'Facebook',
    value: 'Ashraf Saber',
    href: 'https://www.facebook.com/share/p/1Jjo181Agc/',
    icon: Facebook
  },
  {
    platform: 'Instagram',
    value: '@ashraf_design',
    href: 'https://www.instagram.com/p/DRFiC2AjHYv/?utm_source=ig_web_button_share_sheet',
    icon: Instagram
  }
];

export const FOOTER_TEXT = "© 2025 Ashraf Saber – All Rights Reserved.";