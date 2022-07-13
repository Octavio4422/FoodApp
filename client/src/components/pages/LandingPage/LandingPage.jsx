import { Link } from "react-router-dom";
import Footer from "../../sections/Footer/Footer";

import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.flexContainer}>
      <div>

        <div>
          <button>
            <Link to={"/recipes"}>Let's Cook</Link>
          </button>
        </div>

      </div>

        <div className={styles.footer}>
          <Footer />
        </div>
    </div>
  );
}
