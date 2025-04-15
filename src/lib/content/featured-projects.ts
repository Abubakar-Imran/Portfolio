import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'NIMUN',
      description: 'A Model United Nations conference webs.',
      tasks:
        "As a developer, I understood the user's requirements and executed a plan to develop an platform, including the frontend UI, backend setup with database, APIs, and integration with google sheets for realtime data update.",
      url: 'https://nimun.com.pk/',
      img: '/projects/nimun1.png',
      tags: [
        'NextJs',
        'TypeScript',
        'TailwindCSS',
        'MongoDB',
        'NodeJs',
      ],
    }
  ],
};

export default featuredProjectsSection;
