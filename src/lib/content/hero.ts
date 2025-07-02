import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Abubakar Imran.',
  tagline: 'AI Enthusiast & Full-Stack Developer',
  description:
    "I craft intelligent systems and scalable web apps by blending AI, machine learning, and full-stack development. From chatbots and RAG pipelines to MERN-powered platforms, I turn ideas into impactful solutions.",
  specialText: 'Currently available for freelance and remote roles',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

