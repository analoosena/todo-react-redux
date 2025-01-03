import { Lista } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";

const ListaRenderizada = () => {
  const { tasklist } = useSelector((state: RootState) => state.taskReducer);
  return (
    <Lista>
      {tasklist.map((item, index) => (
        <li key={index}>
          <input type="checkbox" />{item}
        </li>
      ))}
    </Lista>
  );
};
export default ListaRenderizada;
