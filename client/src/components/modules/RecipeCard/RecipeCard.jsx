import { Link } from "react-router-dom";

export default function RecipeCard({ detail, id, name, img, summary, score, diets, steps }) {
  return (
    <div>
      <Link to={`/recipe/${id}`}>
        <div>
          <h3>{name}</h3>
          <img src={img} alt={name} />
          <ul>
            {diets &&
              diets.map((d) => {
                return <h4 key={d}>{d}</h4>;
              })}
          </ul>
        </div>
      </Link>
    </div>
  );
}
