import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'MacVision Lab',
      companyUrl: 'https://vision.seecs.edu.pk/',
      role: 'Deep Learning Researcher',
      started: 'november 2024',
      upto: 'january 2025',
      tasks: [
        'Working on Land Use Land Cover Classification and crop mapping using remote sensing imagery and machine learning.',
        'Applying Continual Learning techniques to improve model adaptability for classification tasks.',
      ],
    },
    {
      company: 'SoftPyramid LLC',
      companyUrl: 'https://softpyramid.com/',
      role: 'AI Intern',
      started: 'june 2024',
      upto: 'august 2024',
      tasks: [
        'Trained Llama3 on company policies, allowing HR to retrieve information efficiently by interacting with the model.',
        'Automated the attendance process by integrating it with Llama3, enabling employees to easily view attendance and mark leaves through the model.',
        'Implemented RAG using langchain for question answering documents.',
      ],
    },
    {
      company: 'CodSoft',
      companyUrl: 'https://www.codsoft.in/',
      role: 'web developer intern virtual',
      started: 'august 2023',
      upto: 'september 2023',
      tasks: [
        'Developed and maintained an e-commerce platform (NexGen Homeware) using the MERN stack, boosting website efficiency.',
        'Allowing user account creation, product management, and order processing.',
        'Implemented admin dashboard for managing products and orders.',
      ],
    },
  ],
};
