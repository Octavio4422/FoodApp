import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allDiets, filterRecipes } from "../../../../redux/actions";
import dietOrder from "../../../../utils/functions/dietOrder";

export default function Filter({ resetPage }) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  let diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(allDiets());
  }, []);

  function onSelect(e) {
    resetPage();
    dispatch(filterRecipes(e.target.value));
  }

  diets = dietOrder(diets);

  return (
    <>
      <select disabled={!recipes.length} name="select" onChange={onSelect}>
        <option value="DEFAULT">Select a Diet Filter</option>
        {diets &&
          diets.map((d) => {
            return (
              <option key={d.id} value={d.name.toUpperCase()}>
                {d.name}
              </option>
            );
          })}
      </select>
    </>
  );
}
