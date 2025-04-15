import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Abubakar Imran.',
  tagline: 'I build full-stack web apps and intelligent systems.',
  description:
    "I'm a Full-Stack Developer with strong MERN and Next.js experience, combining clean design with smart backend systems. I've built scalable applications, contributed to real-world AI solutions and explored ML domains. Whether it's a community platform or AI-driven automation, I bring ideas to life through code.",
  specialText: 'Currently available for freelance and remote roles',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

