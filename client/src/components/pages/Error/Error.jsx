import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearError } from "../../../redux/actions";

import Footer from "../../sections/Footer/Footer";

import styles from "./Error.module.css"

export default function Error() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  });

  return (
    <div className={styles.flexContainer}>
      <div>
        <div>
          <Link to={"/recipes"}>
            <button>Let´s Try Again</button>
          </Link>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
