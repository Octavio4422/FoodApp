import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearError } from "../../../redux/actions";
import Footer from "../../sections/Footer/Footer";

export default function Error() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  });

  return (
    <div>
      <div>
        <Link to={"/recipes"}>
          <button>Let´s Try Again</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
