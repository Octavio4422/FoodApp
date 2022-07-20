import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "../../../Images/pngwing.com.png";

export default function Header() {
  return (
    <>
      <nav className={styles.flexContainer}>
        <div className={styles.nav}>
        
          <div>
            <Link to={"/recipes"}>
              <button className={styles.title}>
                <h1>FoodAPP</h1>
              </button>
            </Link>
          </div>

          <img className={styles.logo} alt="logo" src={logo} />

          <div>
            <Link to={"/recipes"}>
              <button className={styles.button}><b>Home</b></button>
            </Link>
            <Link to={"/recipe/create"}>
              <button className={styles.button}><b>+ Create</b></button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
