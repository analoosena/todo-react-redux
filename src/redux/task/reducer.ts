import { TaskAction } from "./action"; //importação da tipagem de TaskAction

//Tipagem do estado
interface TaskState {
  tasklist: string[];
  tasklistBoolean: boolean[];
  filter: string;
}
// Estado inicial tipado
const initialState: TaskState = {
  tasklist: [],
  tasklistBoolean: [],
  filter:('all'),
};

const taskReducer = (state: TaskState = initialState, action: TaskAction) => {
  switch (action.type) {
    case "task/addTask":
      return {
        ...state,
        tasklist: [...state.tasklist, action.payload],
      };
    case "task/addTaskBoolean":
      return {
        ...state,
        tasklistBoolean: [...state.tasklistBoolean, false],
      };

    case "task/changeCheckbox":
      return{
        ...state,
        tasklistBoolean: state.tasklistBoolean.map((item,index) =>
        index === action.payload ? !item : item
        )
      }
    
    case "task/filterTask":
      return{
        ...state,
        filter:action.payload,
      }
      
    default:
      return state;
  }
};

export default taskReducer;
