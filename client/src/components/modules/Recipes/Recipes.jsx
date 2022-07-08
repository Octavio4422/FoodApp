import RecipeCard from "../RecipeCard/RecipeCard";

export default function Recipes({ recipes }) {
  return (
    <>
      {!recipes.length ? (
        <h1>Oh no!</h1>
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
