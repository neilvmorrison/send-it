import { SpotlightAction } from "@mantine/spotlight";

export const defaultSpotlightActions: SpotlightAction[] = [
  {
    id: "popular-forums",
    title: "View popular forums",
    description: "Interact with the most popular forums on SendIt",
    onTrigger: () => alert("Most popular"),
  },
  {
    id: "create-a-forums",
    title: "Create a forum",
    description:
      "Create a special-interest community for others to join and share content",
    onTrigger: () => alert("Create forum"),
  },
  {
    id: "create-an-account",
    title: "Create a SendIt account",
    description:
      "Create an account so that you can contribute to the community",
    onTrigger: () => alert("Create forum"),
  },
  {
    id: "create-a-profile",
    title: "Create a SendIt Profile",
    description: "Create a new profile to explore new communities",
    onTrigger: () => alert("Create forum"),
  },
];
