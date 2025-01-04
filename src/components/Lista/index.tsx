import { Lista } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { changeCheckbox } from "../../redux/task/action";

const ListaRenderizada = () => {
  const { tasklist, tasklistBoolean, filter } = useSelector(
    (state: RootState) => state.taskReducer
  );
  const dispatch = useDispatch();

  const handleChangleCheckBox = (index: number) => {
    dispatch(changeCheckbox(index));
  };

  const filteredTasks = tasklist.filter((_, index) =>
    filter === "all"
      ? true //todas tarefas incuidas
      : filter === "completed"
      ? tasklistBoolean[index] //retorna os valores correspondentes que forem true
      : !tasklistBoolean[index] // se nada acontecer retorna os false
  );

  return (
    <Lista>
      {filteredTasks.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={tasklistBoolean[index]}
            onChange={() => handleChangleCheckBox(index)}
          />
          {item}
        </li>
      ))}
    </Lista>
  );
};
export default ListaRenderizada;
