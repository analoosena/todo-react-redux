import { ButtonAdd, MainContainer, Title, Selecao } from "./styles";
import { NovaTask } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { addTask, addTaskBoolean, filterTask } from "../../redux/task/action";
import { useState } from "react";

const InputTarefas = () => {
  const [newtask, setNewTask] = useState("");

  const { filter } = useSelector((state: RootState) => state.taskReducer);

  const dispatch = useDispatch();

  const handleTaskinList = () => {
    if (newtask.length > 0) {
      dispatch(addTask([newtask]));
      dispatch(addTaskBoolean());
      setNewTask("");
    }
  };
  const handlefilter = (value: string) => {
    dispatch(filterTask(value));
  };

  return (
    <>
      <MainContainer>
        <Title>Lista de Tarefas</Title>
        <NovaTask
          value={newtask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          placeholder="Digite sua tarefa aqui"
        ></NovaTask>
        <ButtonAdd type="button" onClick={handleTaskinList}>
          ADD
        </ButtonAdd>
        <Selecao value={filter} onChange={((e) => handlefilter(e.target.value))}>
          <option value="all">Todas</option>
          <option value="pending">Pendentes</option>
          <option value="completed">Finalizadas</option>
        </Selecao>
      </MainContainer>
    </>
  );
};

export default InputTarefas;
