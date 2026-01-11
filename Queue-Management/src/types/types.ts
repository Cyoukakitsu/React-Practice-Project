export type Status = "waiting" | "serving" | "completed";

export type Customer = {
  id: number;
  name: string;
  service: string;
  status: Status;
};
