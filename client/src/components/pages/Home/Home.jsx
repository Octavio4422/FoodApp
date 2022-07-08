import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allRecipes } from "../../../redux/actions";
import Filter from "../../modules/Filters&Orders/Filter/Filter";
import Order from "../../modules/Filters&Orders/Order/Order";
import Pagination from "../../modules/Pagination/Pagination";
import Recipes from "../../modules/Recipes/Recipes";

export default function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  let [loading, setLoaging] = useState(true);

  useEffect(() => {
    dispatch(allRecipes());

    return () => {
      setLoaging(false);
    };
  }, []);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indecOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = recipes.slice(indecOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const resetPage = () => setCurrentPage(1);
  //pagination

  if (loading && !recipes.length) {
    return <h1>Cargando</h1>;
  }

  return (
    <div>
      <Order/>
      <Filter resetPage={resetPage} />
      <Pagination
        currentPage={currentPage}
        cardsPerPage={cardsPerPage}
        totalCards={recipes.length}
        paginate={paginate}
      />
      <Recipes recipes={currentCard} />
    </div>
  );
}
