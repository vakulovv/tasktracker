export type Tasks = "planned" | "inProgress" | "done";

export interface Task {
  id?: string;
  title: string;
}

export interface TaskProps extends Task {
  id?: string;
  title: string;
  col?: string;
}
