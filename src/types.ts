export type Id = string | number;

export type Column = {
  id: IdleDeadline;
  title: string;
}

export type Task = {
  id: IdleDeadline;
  columnId: Id;
  content: string;
}