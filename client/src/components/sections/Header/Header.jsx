import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "../../../Images/pngwing.com.png"

export default function Header() {
  return (
    <>
      <nav className={styles.flexContainer}>
        <div className={styles.nav}>

          <Link to={"/recipes"}>
            <h1 className={styles.title} >FoodAPP</h1>
          </Link>

          <img className={styles.logo} alt="logo" src={logo}/>

          <div>
            <Link to={"/recipes"}>
              <button className={styles.button} >Home</button>
            </Link>
            <Link to={"/recipe/create"}>
              <button className={styles.button}>+ Create</button>
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}
