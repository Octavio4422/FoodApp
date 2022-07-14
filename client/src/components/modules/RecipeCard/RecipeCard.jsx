import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

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
    <div className={styles.flexContainer}>
      <div className={styles.card} >

        <div>
          <h3>{name}</h3>
          <img src={img} alt={name} />
          <ul>
            {diets &&
              diets.map((d) => {
                return <h4 key={d}>{d}</h4>;
              })}
          </ul>

          <div className={styles.button}  >
            <Link to={`/recipe/${id}`}>
              <button >See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
