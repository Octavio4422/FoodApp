import RecipeCard from "../RecipeCard/RecipeCard";

import styles from "./Recipes.module.css"

export default function Recipes({ recipes }) {
  return (
    <>
      {!recipes.length ? (
        <h2>Oh no! I think that the recipe you are lookin for does not exist.
          <p></p>
          You should check the field or create it!
        </h2>
      ) : (
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
      )}
    </>
  );
}
