import { Link } from "react-router-dom";
import Footer from "../../sections/Footer/Footer";

import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        <h1>Hello! Welcome to Foods app</h1>
        <div>
          <p>
            This app was built as a learning project for{" "}
            <strong>Henry's bootcamp</strong>. You will be able to look for
            information about certain recipes in the world of cooking and create new
            ones!
          </p>

          <p>
            Not only you can <strong>search for recipes</strong> and{" "}
            <strong>create them</strong> but also ordering or filtering them by
            name, health score and diet if necessary.
          </p>
        </div>

        <div className={styles.button}>
          <Link to={"/recipes"}>
            <button>Let's Cook </button>
          </Link>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
