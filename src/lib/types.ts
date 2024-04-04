export interface Ticket {
  title: string;
  description: string;
  priority: number;
  progress: number;
  status: "Open" | "In Progress" | "Done";
  category: "Hardware Problem" | "Software Problem" | "Network Problem";
}