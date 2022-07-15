import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({
  detail,
  id,
  name,
  image,
  summary,
  score,
  diets,
  steps,
}) {
  if (detail) {
    return (
      <div>
        <div>
          <div>
            <img alt={name} src={image} />
          </div>

          <div>
            <Link to={"/recipes"}>
              <button> ⇦ </button>
            </Link>
            <h1>{name}</h1>
            <p>{summary}</p>
            <h3>{score}</h3>
            <h2>Steps:</h2>
            {steps.length ? (
              steps.map((s) => {
                return <p>•{s}</p>;
              })
            ) : (
              <h3> "This recipe no contain steps, mabye its too easy? 🤔"</h3>
            )}
            <ul>
              {diets &&
                diets.map((d) => {
                  return <h4 key={d}>{d}</h4>;
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.flexContainer}>
      <div className={styles.card}>
        <div>
          <h3>{name}</h3>
          <img src={img} alt={name} />
          <ul>
            {diets &&
              diets.map((d) => {
                return <h4 key={d}>{d}</h4>;
              })}
          </ul>

          <div className={styles.button}>
            <Link to={`/recipe/${id}`}>
              <button>See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
