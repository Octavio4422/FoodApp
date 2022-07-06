import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Error() {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to={"/recipes"}>
        <button>Let´s Try Again</button>
      </Link>
    </div>
  );
}
