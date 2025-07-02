import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using NextJs and ReactJs',
        'Developing responsive single-page applications using React.js',
        'Creating RESTful APIs using Express for backend development',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'bootstrap', icon: 'logos:bootstrap' },
        { name: 'material-ui', icon: 'logos:material-ui' },
        { name: 'postgresql', icon: 'logos:postgresql' },
        { name: 'mysql', icon: 'logos:mysql' },
        { name: 'mongodb', icon: 'logos:mongodb' },
      ],
    },
    {
      id: getId(),
      title: 'ML and AI',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Designing and deploying machine learning models for real-world use cases',
        'Building AI-powered chatbots and retrieval-augmented generation (RAG) systems using LangChain',
        'Working on deep learning projects involving computer vision and remote sensing',
        'Applying ML techniques for classification, prediction, and intelligent automation',
      ],
      softwareSkills: [
        { name: 'python', icon: 'logos:python' },
        { name: 'tensorflow', icon: 'logos:tensorflow' },
        { name: 'pytorch', icon: 'logos:pytorch' },
        { name: 'pandas', icon: 'logos:pandas' },
        { name: 'numpy', icon: 'logos:numpy' },
        { name: 'matplotlib', icon: 'logos:matplotlib' },
        { name: 'seaborn', icon: 'logos:seaborn' },
        { name: 'openai', icon: 'logos:openai' },
      ],
    },
  ],
};
