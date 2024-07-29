export interface Task {
  title?: string;
  description?: string | string[];
  url?: string;
}

export interface TimeLine {
  role?: string;
  company?: [string, string];
  date?: string;
  projects?: Task[];
}