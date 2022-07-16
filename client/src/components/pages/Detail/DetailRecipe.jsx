import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { idRecipes } from "../../../redux/actions";

import RecipeCard from "../../modules/RecipeCard/RecipeCard";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

import styles from "./Detail.module.css";
import gif from "../../../Images/loadingGIF.gif"

export default function DetailRecipe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [loading, setLoading] = useState(true);

  const { id } = useParams();
  const recipe = useSelector((state) => state.recipe);
  const error = useSelector((state) => state.error.id);

  async function idLoading() {
    await dispatch(idRecipes(id));
    setLoading(false);
  }

  useEffect(() => {
    idLoading();
  }, []);

  if (error) navigate("*");

  if (loading) {
    return (
      <div className={styles.flexContainer}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.gif}>
          <img alt="loading gif" src={gif} />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.flexContainer}>
      <div className={styles.header}>
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
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
