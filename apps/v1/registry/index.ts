import { type Registry } from "shadcn/registry";
import { ui } from "@/registry/registry-ui";

export const registry = {
  name: "shadcn/ui",
  homepage: "https://ui.shadcn.com",
  items: [...ui],
} satisfies Registry;
