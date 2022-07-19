import { useDispatch, useSelector } from "react-redux";
import { orderRecipes } from "../../../../redux/actions";

import styles from "./Order.module.css"

export default function Order() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  function onSelect(e) {
    dispatch(orderRecipes(e.target.value));
  }

  return (
    <div className={styles.order} >
      <select name="select" disabled={!recipes.length} onChange={onSelect}>
        <option value="DEFAULT">Select a Distribution</option>
        <option value="ASCENDENTE">A to Z</option>
        <option value="DESCENDENTE">Z to A</option>
        <option value="MAX">Health Score MAX</option>
        <option value="MIN">Health Score MIN</option>
      </select>
    </div>
  );
}
