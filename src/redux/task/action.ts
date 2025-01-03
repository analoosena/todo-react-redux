// Tipagem das ações
export  type TaskAction =
  | { type: "task/addTask"; payload: string[] }
  | { type: "task/addTaskBoolean"; payload: boolean[] };

export const addTask = (payload:string[]):TaskAction => ({
  type: "task/addTask",
  payload,
});

export const addTaskBoolean = (payload:boolean[]):TaskAction => ({
  type: "task/addTaskBoolean",
  payload,
})
