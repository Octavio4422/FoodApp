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
          <Link to={"/recipes"}>
            {" "}
            <button> ⇦ Back </button>{" "}
          </Link>
          <h1>{name}</h1>
        </div>

        <div className={styles.dImage}>
        {img !== undefined ? <img src={img} alt={name} /> : <div className={styles.dNoImg} ><b>No image available</b></div> }
        </div>
        <div>
          <p>{summary}</p>
        </div>

        <div className={styles.dScore}>
          <h2>Health Score:</h2>
          <strong>
            {" "}
            <p>{score} points </p>{" "}
          </strong>
        </div>
        <div className={styles.dDiets}>
          <h2>Diets:</h2>

          {diets &&
            diets.map((d) => {
              return (
                <i key={d}> {d.charAt(0).toUpperCase() + d.slice(1)} • </i>
              );
            })}
        </div>
        <div>
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
            <strong>
              <p>• "This recipe no contain steps, mabye its too easy? 🤔"</p>
            </strong>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.flexContainer}>
      <div className={styles.card}>
        <div>
          <h3>{name}</h3>
          {img !== undefined ? <img src={img} alt={name} /> : <div className={styles.noImg} ><b>No image available</b></div> }

          <div>
            <h5>
              ⇩ This recipe is suitable for people with the following diets ⇩
            </h5>
            -{" "}
            {diets &&
              diets.map((d) => {
                return <i key={d}>{d.charAt(0).toUpperCase() + d.slice(1)} - </i>;
              })}
          </div>

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
