
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Aviral",
  parameters: z.object({}).nullable(),
  execute: async () => {
    return "Here are my projects (above)! Feel free to ask me more about any of them.";
  },
});