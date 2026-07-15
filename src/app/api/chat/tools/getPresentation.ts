import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Aviral Goel. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Aviral Goel, a final-year B.Tech student in AI & Data Science at KJ Somaiya College of Engineering, Mumbai. I'm a Speech & TTS research intern at Jio Platforms and currently working on GPU/HPC infrastructure at Yotta Data Services. I build production ML systems spanning speech synthesis, multi-agent LLM orchestration, anomaly detection, and financial risk modeling.",
    };
  },
});
