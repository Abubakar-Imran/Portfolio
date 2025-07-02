import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few domains which I’ve been exploring recently:',
    items: [
      'Deep Learning',
      'Machine Learning',
      'Computer Vision',
      'Large Language Models',
      'Generative AI',
      'MLOps',
      'AI Automation and Workflows',
      'Natural Language Processing',
    ],
  },
  img: '/abubakar-imran.jpg',
};
