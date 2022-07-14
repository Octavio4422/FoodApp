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
      <div className={styles.container}>

        <h1>Oh no! An Error has happened, but don´t worry </h1>
        

        <div className={styles.button} >
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
