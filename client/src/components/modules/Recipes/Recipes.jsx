import RecipeCard from "../RecipeCard/RecipeCard";

export default function Recipes({ recipes }) {
  return (
    <>
      {!recipes.length ? (
        <h2>Oh no! I think that the recipe you are lookin for does not exist.
          <p></p>
          You should check the field or create it!
        </h2>
      ) : (
        <div>
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
