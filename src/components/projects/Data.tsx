import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Project content array
const PROJECT_CONTENT = [
  {
    title: 'ResiliNet',
    description:
      'Financial Systemic Risk Simulator built for a hackathon with a teammate. Built the ML/backend core of a graph-based risk simulator using a Graph Attention Network to model interbank cascade failures across 50 nodes. Implemented the backend REST API together with a teammate, serving real-time risk scores at 23% higher accuracy over baseline.',
    techStack: ['Python', 'GNN', 'FastAPI'],
    date: 'Mar 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/AI-Driven-Financial-Contagion-Simulation',
      },
      {
        name: 'Live',
        url: 'https://resilinet-core-4ays0xtz4-parths-projects-8b1cb9fa.vercel.app/',
      },
    ],
  },
  {
    title: 'MultiCodeReviewAgent',
    description:
      "Architected a multi-agent code review system with four LLM agents (Security, Style, Logic, Judge) via LangGraph's parallel fan-out architecture. Built a dual-inference pipeline (local Ollama/Llama 3.2 + Groq cloud fallback), validated against a 100+ line test codebase.",
    techStack: ['LangGraph', 'FastAPI', 'Docker', 'Ollama', 'Groq API', 'React'],
    date: 'Jul 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/MultiAgentCodeReviewer',
      },
      {
        name: 'Live',
        url: 'https://csentinel.vercel.app/',
      },
    ],
  },
  {
    title: 'StockSage',
    description:
      'Full-stack AI stock platform with 30 FastAPI endpoints spanning live data, portfolio tracking, and alerts. Integrated an LLM chat assistant (Groq LLaMA 3.3 70B) and a FinBERT sentiment engine feeding a Buy/Hold/Sell recommender.',
    techStack: ['React', 'FastAPI', 'Groq (LLaMA 3.3 70B)', 'FinBERT', 'SQLite'],
    date: 'Feb 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/stocksage',
      },
      {
        name: 'Live',
        url: 'https://stocksage.vercel.app/dashboard',
      },
    ],
  },
  {
    title: 'Driver Drowsiness Detection System',
    description:
      "Real-time CV system using Mediapipe's Face Mesh and calibrated EAR thresholds at 92% accuracy and 95% precision. Built a threaded video pipeline sustaining 30 FPS at 40ms latency, reducing alert trigger time to 0.8 seconds.",
    techStack: ['Python', 'OpenCV', 'Mediapipe', 'FastAPI'],
    date: 'May 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/driver-drowsiness-detection',
      },
      {
        name: 'Live',
        url: 'https://driver-drowsiness-detection-pink.vercel.app/',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export
export const data = [
  {
    category: 'Hackathon Project',
    title: 'ResiliNet',
    src: '/project-resilinet.svg',
    content: <ProjectContent project={{ title: 'ResiliNet' }} />,
  },
  {
    category: 'Agentic AI',
    title: 'MultiCodeReviewAgent',
    src: '/project-multicodereview.svg',
    content: <ProjectContent project={{ title: 'MultiCodeReviewAgent' }} />,
  },
  {
    category: 'AI + FinTech',
    title: 'StockSage',
    src: '/project-stocksage.svg',
    content: <ProjectContent project={{ title: 'StockSage' }} />,
  },
  {
    category: 'Computer Vision',
    title: 'Driver Drowsiness Detection System',
    src: '/project-drowsiness.svg',
    content: (
      <ProjectContent project={{ title: 'Driver Drowsiness Detection System' }} />
    ),
  },
];
