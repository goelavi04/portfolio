import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    "This tool shows a list of Aviral's skills.",
  parameters: z.object({}).nullable(),
  execute: async () => {
    return "You can see all my skills above.";
  },
});
