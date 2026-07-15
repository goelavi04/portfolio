import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows my contact information.',
  parameters: z.object({}).nullable(),
  execute: async () => {
    return "Here is my contact information above — feel free to reach out, I'll be happy to respond.";
  },
});
