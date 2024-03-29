import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { allRecipes, emptyInput } from "../../../redux/actions";

import Filter from "../../modules/Filters&Orders/Filter/Filter";
import Order from "../../modules/Filters&Orders/Order/Order";
import SearchBar from "../../modules/Filters&Orders/SearchBar/SearchBar";
import Pagination from "../../modules/Pagination/Pagination";
import Recipes from "../../modules/Recipes/Recipes";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

import styles from "./Home.module.css";
import gif from "../../../Images/loadingGIF.gif";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipes = useSelector((state) => state.recipes);
  const error = useSelector((state) => state.error.recipes);

  let [loading, setLoaging] = useState(true);

  async function recipesLoading() {
    await dispatch(allRecipes());
    setLoaging(false);
  }

  useEffect(() => {
    recipesLoading();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(emptyInput());
  };

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indecOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = recipes.slice(indecOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const resetPage = () => setCurrentPage(1);
  //pagination

  if (error) navigate("*");

  if (loading) {
    return (
      <div className={styles.flexContainer}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.gif}>
          <img alt="loading gif" src={gif} />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.flexContainer}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.filters}>
        <SearchBar resetPage={resetPage} />
        <p> <b>Or You Can</b> </p>
        <div>
          <div className={styles.order} >
            <Order />
          </div>
          <div className={styles.filter} >
            <Filter resetPage={resetPage} />
          </div>
        </div>
        <div className={styles.resetButton}>
          <button onClick={(e) => handleClick(e)}>Reset Parameters</button>
        </div>
      </div>
      <div className={styles.home}>
        <Pagination
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          totalCards={recipes.length}
          paginate={paginate}
        />
        <Recipes recipes={currentCard} />
        <Pagination
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          totalCards={recipes.length}
          paginate={paginate}
        />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
