import { Link } from "react-router-dom";

export default function RecipeCard({
  detail,
  id,
  name,
  img,
  summary,
  score,
  diets,
  steps,
}) {
  
  if (detail) {
    return <div></div>;
  }

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <ul>
          {diets &&
            diets.map((d) => {
              return <h4 key={d}>{d}</h4>;
            })}
        </ul>
        <div>
          <Link to={`/recipe/${id}`}>
            <button>See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
