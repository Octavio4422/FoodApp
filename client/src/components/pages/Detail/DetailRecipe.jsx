import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { idRecipes } from "../../../redux/actions";
import RecipeCard from "../../modules/RecipeCard/RecipeCard";

export default function DetailRecipe() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { id } = useParams();
  const recipe = useSelector((state) => state.recipe);
  const error = useSelector((state) => state.error.id);

  useEffect(() => {
    dispatch(idRecipes(id));
  }, []);

  console.log(error);
  if (error) navigate("*");
 
  return (
    <div>
      <div>
        <RecipeCard
          detail={true}
          name={recipe.name}
          img={recipe.image}
          summary={recipe.summary}
          score={recipe.score}
          diets={recipe.diets}
          steps={recipe.steps}
        />
      </div>
    </div>
  );
}
