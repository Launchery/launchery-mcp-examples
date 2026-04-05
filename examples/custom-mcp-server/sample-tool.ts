import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function slugifyTextTool(server: McpServer): void {
  server.tool(
    "slugify-text",
    "Convert a title or phrase into a URL-friendly slug.",
    {
      text: z.string().describe("Text to convert into a slug"),
    },
    async ({ text }) => ({
      content: [
        {
          type: "text",
          text: slugify(text),
        },
      ],
    })
  );
}
