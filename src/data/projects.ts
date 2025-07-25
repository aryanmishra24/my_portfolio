import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'StrayLove',
    description: 'A community-driven platform to report, track, and care for stray animals using Spring Boot, React, PostgreSQL, and AWS',
    image: '/images/projects/straylove.jpg',
    tags: ['Spring Boot', 'React', 'PostgreSQL', 'AWS', 'JWT', 'REST API'],
    liveUrl: 'https://stray-love.vercel.app',
    githubUrl: 'https://github.com/aryanmishra24/strayLove',
    featured: true,
    categories: ['fullstack']
  },
  
  {
    id: '2',
    title: 'AI Journaling Assistant',
    description: 'A full-stack journaling platform used by 50+ users with AI-generated summaries, personalized insights, and mood analytics.',
    image: '/images/projects/ai-journal.jpg',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Gemini API', 'Docker', 'JWT', 'LangChain'],
    liveUrl: 'https://ai-journal-assistant.vercel.app/',
    githubUrl: 'https://github.com/aryanmishra24/Ai_journal_assistant',
    featured: true,
    categories: ['ai', 'fullstack']
  },
  {
    id: '3',
    title: 'EmpowerLex',
    description: 'A legal aid app built with Flutter and FastAPI, using gemini + LangChain to deliver real-time legal help and generate documents serveing over 100+ users across platforms.',
    image: '/images/projects/empowerlex.jpg', // Update the image path if needed
    tags: ['Flutter', 'FastAPI', 'LangChain', 'gemini-api', 'Render'],
    liveUrl: 'https://empowerlex-web.vercel.app/', // Update if you have a custom domain
    githubUrl: 'https://github.com/aryanmishra24/EmpowerLex',
    featured: true,
    categories: ['ai', 'fullstack', 'mobile']
  },
  {
    id: '4',
    title: 'VeriFind',
    description: 'A real time fact checking app using Python, Streamlit, NewsAPI, Redis, and NLTK',
    image: '/images/projects/verifind.jpg',
    tags: ['Python', 'Streamlit', 'scikit-learn', 'NLTK', 'NewsAPI', 'Redis'],
    liveUrl: 'https://verifind.onrender.com',
    githubUrl: 'https://github.com/aryanmishra24/VeriFind',
    featured: true,
    categories: ['ai']
  },
  
  

]
