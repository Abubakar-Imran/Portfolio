import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'NIMUN',
      url: 'https://nimun.com.pk/',
      repo: 'https://github.com/TahaShah141/nimunWebsite',
      img: '/projects/nimun.png',
      year: 2025,
      tags: ['NextJs', 'TypeScript'],
    },
    {
      id: getId(),
      name: 'Faryaad',
      url: 'https://faryaad.netlify.app/',
      repo: 'https://github.com/Syed-MuhammadTaha/fund-raiser',
      img: '/projects/faryaad.png',
      year: 2024,
      tags: ['React', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Lyrics Vista',
      url: 'https://lyrics-vista.netlify.app/',
      repo: 'https://github.com/Abubakar-Imran/Lyrics-Vista',
      img: '/projects/lyrics-vista.png',
      year: 2023,
      tags: ['NLP', 'ML'],
    },
    {
      id: getId(),
      name: 'NexGen Homeware',
      url: 'https://nexgen-homeware.vercel.app/',
      repo: 'https://github.com/Abubakar-Imran/Ecommerce-Website',
      img: '/projects/nexgen-homeware.png',
      year: 2023,
      tags: ['React', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'News App',
      url: '',
      repo: 'https://github.com/Abubakar-Imran/News-App',
      img: '/projects/news.png',
      year: 2023,
      tags: ['React', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Faryaad-e-Rahmat',
      url: 'https://faryaad-e-rahmat.vercel.app/',
      repo: 'https://github.com/Abubakar-Imran/Faryaad-e-Rahmat',
      img: '/projects/faryaad-e-rahmat.png',
      year: 2025,
      tags: ['HTML', 'CSS'],
    },
  ],
};
