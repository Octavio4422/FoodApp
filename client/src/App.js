import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage/LandingPage";
import Home from "./components/pages/Home/Home";
import DetailRecipe from "./components/pages/Detail/DetailRecipe";
import CreateRecipe from "./components/pages/Create/CreateRecipe";
import Error from "./components/pages/Error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<LandingPage />} />
          <Route exact path={"/recipes"} element={<Home />} />
          <Route exact path={"/recipe/:id"} element={<DetailRecipe />} />
          <Route exact path={"/recipe/create"} element={<CreateRecipe />} />
          <Route exact path={"*"} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
