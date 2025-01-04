import { Lista } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { changeCheckbox } from "../../redux/task/action";

const ListaRenderizada = () => {
  const { tasklist, tasklistBoolean, filter } = useSelector(
    (state: RootState) => state.taskReducer
  );
  const dispatch = useDispatch();

  const handleChangeCheckBox = (index: number) => {
    dispatch(changeCheckbox(index));
  };

  const filteredTasks = tasklist
    .map((task, index) => ({ task, isChecked: tasklistBoolean[index], index })) // cria um array em que cada item é  { task: "Tarefa 1", isChecked: true, index: 0 },
    .filter(({ isChecked }) => //agora filtra levando em consideração o checked
      filter === "all"
        ? true
        : filter === "completed"
        ? isChecked
        : !isChecked
    );


  return (
    <Lista>
      {filteredTasks.map(({task, isChecked, index}) => (
        <li key={index}
        style={{
          color: isChecked ? "#c1c1c1" : "black",
          textDecoration: isChecked ? "line-through" : "none",
        }}
        >
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleChangeCheckBox(index)}
          />
          {task}
        </li>
      ))}
    </Lista>
  );
};
export default ListaRenderizada;
