import { ButtonAdd, MainContainer, Title, Selecao } from "./styles";
import { NovaTask } from "./styles";

const InputTarefas = () => {
  return (
    <>
      <MainContainer>
        <Title>Lista de Tarefas</Title>
        <NovaTask></NovaTask>
        <ButtonAdd type="button">ADD</ButtonAdd>
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
