import { useDispatch } from "react-redux";
import { orderRecipes } from "../../../../redux/actions";

export default function Order() {
  const dispatch = useDispatch();

  function onSelect(e) {
    dispatch(orderRecipes(e.target.value));
  }

  return (
    <>
      <select name="select" onChange={onSelect}>
        <option value="DEFAULT">Select a Distribution</option>
        <option value="ASCENDENTE">A to Z</option>
        <option value="DESCENDENTE">Z to A</option>
        <option value="MAX">Health Score MAX</option>
        <option value="MIN">Health Score MIN</option>
      </select>
    </>
  );
}
