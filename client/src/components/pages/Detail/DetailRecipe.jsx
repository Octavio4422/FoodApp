import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { idRecipes } from "../../../redux/actions";

import RecipeCard from "../../modules/RecipeCard/RecipeCard";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

import styles from "./Detail.module.css";

export default function DetailRecipe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const recipe = useSelector((state) => state.recipe);
  const error = useSelector((state) => state.error.id);

  useEffect(() => {
    dispatch(idRecipes(id));
  }, []);

  if (error) navigate("*");

  return (
    <div>
      <div>
        <Header />
      </div>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}
