// Tipagem das ações
export  type TaskAction =
  | { type: "task/addTask"; payload: string[] }
  | { type: "task/addTaskBoolean" }
  | { type: "task/changeCheckbox"; payload :number }
  | { type: "task/filterTask"; payload :string };

export const addTask = (payload:string[]):TaskAction => ({
  type: "task/addTask",
  payload,
});

export const addTaskBoolean = ():TaskAction => ({
  type: "task/addTaskBoolean",
})

export const changeCheckbox = (payload:number):TaskAction =>({
  type: "task/changeCheckbox",
  payload,
})

export const filterTask = (payload:string):TaskAction => ({
  type: "task/filterTask",
  payload,
})
