import { Link } from "react-router-dom";

export default function Header(){
    return <>
    <div>
      <nav>
          <Link to={"/recipes"}>
        <h1>FoodAPP</h1>
      </Link>
      <Link to={"/recipe/create"}>
        <h4 >Create Recipe</h4>
      </Link>
      </nav>
    </div>
    </>
}