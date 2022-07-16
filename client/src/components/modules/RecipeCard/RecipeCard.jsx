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
    return (
      <div className={styles.dFlexContainer}>
        <div className={styles.dTitle}>
          <Link to={"/recipes"}> <button> ⇦ </button> </Link>
          <h1>{name}</h1>
        </div>

        <div className={styles.dImage}>
          <img src={img} alt={name} />
        </div>
        <div>
          <h2>Health Score:</h2>
          <p>{score}</p>
        </div>

        <p>{summary}</p>
        <h2>Steps:</h2>
        {steps.length ? (
          steps.map((s, i) => {
            return (
              <p key={s}>
                •<strong>{i + 1}</strong> {s}
              </p>
            );
          })
        ) : (
          <h3> "This recipe no contain steps, mabye its too easy? 🤔"</h3>
        )}
        <ul>
          {diets &&
            diets.map((d) => {
              return <p key={d}>{d}</p>;
            })}
        </ul>
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
                return <p key={d}>{d}</p>;
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
