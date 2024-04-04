export type Status = "Open" | "In Progress" | "Done";
export type Category = "Hardware Problem" | "Software Problem" | "Network Problem";
export interface Ticket {
  title: string;
  description: string;
  priority: number;
  progress: number;
  status: Status;
  category: Category;
}

export interface TicketData extends Ticket {
  _id: string;
  createdAt: string;
}