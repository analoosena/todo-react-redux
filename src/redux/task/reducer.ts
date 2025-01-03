
import { TaskAction } from "./action" //importação da tipagem de TaskAction

//Tipagem do estado
interface TaskState  {
  tasklist: string[],
  tasklistBoolean: boolean[],
}
// Estado inicial tipado
const initialState:TaskState = {
  tasklist: [],
  tasklistBoolean:[],
}

const taskReducer = (state:TaskState= initialState, action:TaskAction) => {
  switch(action.type){
    case "task/addTask":
      return{
        ...state,
        tasklist: [...state.tasklist, action.payload]
      }
    case "task/addTaskBoolean":
      return{
        ...state,
        tasklistBoolean: [state.tasklistBoolean, action.payload]
      }
  default:
    return state
    }

  }
    
  

export default taskReducer;