import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearError } from "../../../redux/actions";
import RecipeCard from "../RecipeCard/RecipeCard";

import styles from "./Recipes.module.css"

export default function Recipes({ recipes }) {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.error.query)

  if(error){
    window.alert("The recipe you are looking for doesnt exist");
    dispatch(clearError());
  }

  return (
    <>
        <div className={styles.recipes} >
          {recipes.map((r) => {
            return (
              <RecipeCard
                key={r.id}
                id={r.id}
                name={r.name}
                img={r.image}
                diets={r.diets}
              />
            );
          })}
        </div>
    </>
  );
}
