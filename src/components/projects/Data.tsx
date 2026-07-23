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
  {
    title: 'NoteFlow',
    description:
      'AI-powered tool that turns YouTube videos into structured notes. Fetches the transcript, chunks it map-reduce style, and runs it through a BART abstractive summarization model to produce a summary plus a navigable, timestamped highlight timeline.',
    techStack: ['FastAPI', 'HuggingFace (BART)', 'youtube-transcript-api', 'JavaScript'],
    date: 'Jun 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/video-note-extractor',
      },
    ],
  },
  {
    title: 'CodeMesh',
    description:
      'GraphRAG system that analyzes Python GitHub repositories by mapping files, functions, and imports into a knowledge graph. Combines vector embeddings with structural graph traversal so questions like "where is the auth logic?" get semantically and architecturally grounded answers with source citations.',
    techStack: ['FastAPI', 'NetworkX', 'Sentence-Transformers', 'Pinecone', 'OpenRouter'],
    date: 'Jun 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/codebase-knowledge-ai',
      },
    ],
  },
  {
    title: 'AI Data Copilot',
    description:
      'Fully local data-quality analyzer for CSV files. Detects missing values, duplicates, type mismatches, and statistical outliers with Pandas, then explains each issue in plain English using a locally-run TinyLlama model via LangChain — no cloud APIs, data never leaves the machine.',
    techStack: ['FastAPI', 'Pandas', 'LangChain', 'TinyLlama'],
    date: 'May 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/ai-data-copilot',
      },
    ],
  },
  {
    title: 'AI Digest Agent',
    description:
      'Automated pipeline that scrapes 7 RSS feeds for AI/tech news every morning, uses Llama 3.3 to rank and summarize the top 20 stories, builds a styled HTML digest, and emails it via Gmail — fully scheduled and hands-off through GitHub Actions.',
    techStack: ['Python', 'Groq (Llama 3.3)', 'feedparser', 'GitHub Actions'],
    date: 'Mar 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/ai-digest-agent',
      },
    ],
  },
  {
    title: 'Credit Risk Predictor',
    description:
      'ML pipeline predicting credit card default risk on 30,000 real customer records from the UCI dataset. Engineered behavioral features (payment delay, payment-to-bill ratio) that outperformed raw demographics; a Random Forest model reached 82.4% accuracy and 0.80 ROC-AUC, with SHAP for explainability.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'SHAP'],
    date: 'Feb 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/Predictive-Financial-Modeling-for-Economic-Inclusion',
      },
    ],
  },
  {
    title: 'InternHunt',
    description:
      'Automated agent that scrapes Internshala daily for internship listings, filters them for relevant AI/ML and Data Science roles using Llama 3.3, and emails a formatted HTML digest every day with direct links to matching listings.',
    techStack: ['Python', 'BeautifulSoup4', 'Groq (Llama 3.3)', 'Gmail SMTP'],
    date: 'Mar 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/InternHunt',
      },
    ],
  },
  {
    title: 'EV Charging Anomaly Detection',
    description:
      'Full-stack ML app that flags fraud, DoS attacks, energy spikes, and idle abuse in EV charging sessions using a custom-engineered Decision Tree classifier, trained on 148K+ real sessions from Boulder, CO (2018-2023). Ships with a React dashboard for CSV uploads, live stats, filterable tables, and alert panels.',
    techStack: ['FastAPI', 'scikit-learn', 'React', 'TypeScript', 'Supabase'],
    date: 'May 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/ev-charging-anomaly-detection',
      },
    ],
  },
  {
    title: "Leela's Library",
    description:
      'Family library catalog web app for a private collection of 960+ books — search availability, track which shelf a book lives on, and manage borrow/return with due dates. Admins bulk-import books from spreadsheets or PDFs, promote/demote users, and see which searches turned up nothing. Built with Server Actions instead of a separate REST layer, with Supabase handling Postgres, auth, and cover-image storage.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    date: 'Jul 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/leelas-library',
      },
      {
        name: 'Live',
        url: 'https://leelas-library.vercel.app',
      },
    ],
  },
  {
    title: 'RAG Application',
    description:
      'Retrieval-augmented Q&A app that answers questions using only a supplied document, not model training data. Text is chunked and embedded locally with sentence-transformers, indexed in Pinecone, and top-matching chunks are retrieved by cosine similarity to ground an LLM response via OpenRouter.',
    techStack: ['FastAPI', 'sentence-transformers', 'Pinecone', 'OpenRouter'],
    date: 'Mar 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/Rag-application',
      },
    ],
  },
  {
    title: 'Solar Panel Fault Detection',
    description:
      'Deep learning image classifier that automates visual inspection of solar panels, sorting photos into six conditions (clean, dusty, bird-drop, snow-covered, electrical damage, physical damage) to enable maintenance-driven monitoring at scale. Fine-tuned MobileNetV2 with a custom classification head using a two-phase transfer learning strategy, reaching 77% accuracy on an imbalanced 869-image dataset.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2'],
    date: 'Apr 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/goelavi04/solar_panel_dl',
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
  {
    category: 'AI + NLP',
    title: 'NoteFlow',
    src: '/project-noteflow.svg',
    content: <ProjectContent project={{ title: 'NoteFlow' }} />,
  },
  {
    category: 'GraphRAG',
    title: 'CodeMesh',
    src: '/project-codemesh.svg',
    content: <ProjectContent project={{ title: 'CodeMesh' }} />,
  },
  {
    category: 'Local AI',
    title: 'AI Data Copilot',
    src: '/project-datacopilot.svg',
    content: <ProjectContent project={{ title: 'AI Data Copilot' }} />,
  },
  {
    category: 'Automation Agent',
    title: 'AI Digest Agent',
    src: '/project-digestagent.svg',
    content: <ProjectContent project={{ title: 'AI Digest Agent' }} />,
  },
  {
    category: 'ML + FinTech',
    title: 'Credit Risk Predictor',
    src: '/project-creditrisk.svg',
    content: <ProjectContent project={{ title: 'Credit Risk Predictor' }} />,
  },
  {
    category: 'Automation Agent',
    title: 'InternHunt',
    src: '/project-internhunt.svg',
    content: <ProjectContent project={{ title: 'InternHunt' }} />,
  },
  {
    category: 'ML + Full-Stack',
    title: 'EV Charging Anomaly Detection',
    src: '/project-evanomaly.svg',
    content: <ProjectContent project={{ title: 'EV Charging Anomaly Detection' }} />,
  },
  {
    category: 'Full-Stack Web App',
    title: "Leela's Library",
    src: '/project-leelaslibrary.svg',
    content: <ProjectContent project={{ title: "Leela's Library" }} />,
  },
  {
    category: 'AI + RAG',
    title: 'RAG Application',
    src: '/project-ragapplication.svg',
    content: <ProjectContent project={{ title: 'RAG Application' }} />,
  },
  {
    category: 'Deep Learning',
    title: 'Solar Panel Fault Detection',
    src: '/project-solarpanel.svg',
    content: <ProjectContent project={{ title: 'Solar Panel Fault Detection' }} />,
  },
];
