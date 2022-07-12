import { Link } from "react-router-dom";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <nav className={styles.flexContainer}>
        <div className={styles.nav}>
          <Link to={"/recipes"}>
            <h1>FoodAPP</h1>
          </Link>

          <div>
            <Link to={"/recipes"}>
              <button>Home</button>
            </Link>
            <Link to={"/recipe/create"}>
              <button className={styles.create}>+ Create Recipe</button>
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}
