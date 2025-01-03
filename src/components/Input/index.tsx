import { ButtonAdd, MainContainer, Title, Selecao } from "./styles";
import { NovaTask } from "./styles";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/task/action";
import { useState } from "react";

const InputTarefas = () => {
  const [newtask, setNewTask] = useState("");

  const dispatch = useDispatch();

  const handleTaskinList = () => {
    if(newtask.length > 0) {
      dispatch(addTask([newtask]));
    setNewTask("");
    }
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
        <Selecao>
          <option value="all">Todas</option>
          <option value="pending">Pendentes</option>
          <option value="completed">Finalizadas</option>
        </Selecao>
      </MainContainer>
    </>
  );
};

export default InputTarefas;
