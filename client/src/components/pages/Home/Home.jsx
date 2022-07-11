import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { allRecipes } from "../../../redux/actions";

import Filter from "../../modules/Filters&Orders/Filter/Filter";
import Order from "../../modules/Filters&Orders/Order/Order";
import SearchBar from "../../modules/Filters&Orders/SearchBar/SearchBar";
import Pagination from "../../modules/Pagination/Pagination";
import Recipes from "../../modules/Recipes/Recipes";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipes = useSelector((state) => state.recipes);
  const error = useSelector((state) => state.error.recipes);

  let [loading, setLoaging] = useState(true);

  async function recipesLoading (){
    await dispatch(allRecipes());
    setLoaging(false);
  }

  useEffect(() => {
    recipesLoading();
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

  if (error) navigate("*");

  if (loading) return <h1>Cargando</h1>;

  return (
    <div>
      <div>
        <Header />
      </div>
      <Order />
      <Filter resetPage={resetPage} />
      <SearchBar resetPage={resetPage} />
      <Pagination
        currentPage={currentPage}
        cardsPerPage={cardsPerPage}
        totalCards={recipes.length}
        paginate={paginate}
      />
      <Recipes recipes={currentCard} />
      <div>
        <Footer />
      </div>
    </div>
  );
}
