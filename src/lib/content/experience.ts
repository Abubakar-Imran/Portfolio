import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'SimpleTalk AI',
      companyUrl: 'https://www.linkedin.com/company/simpletalk-ai/about/',
      role: 'AI Prompt Engineer',
      started: 'june 2025',
      upto: 'Current',
      tasks: [
        'Developing and optimizing prompts for AI models to enhance user interaction and information retrieval.',
        'Creating and maintaining a knowledge base for the AI system to improve response accuracy.',
        'Collaborating with cross-functional teams to integrate AI solutions into existing products.',
      ],
    },
    {
      company: 'MacVision Lab',
      companyUrl: 'https://vision.seecs.edu.pk/',
      role: 'Deep Learning Research Intern',
      started: 'november 2024',
      upto: 'march 2025',
      tasks: [
        'Working on Land Use Land Cover Classification and crop mapping using remote sensing imagery and deep learning.',
        'Apply regional and time transfer learning techniques to improve model performance.',
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
