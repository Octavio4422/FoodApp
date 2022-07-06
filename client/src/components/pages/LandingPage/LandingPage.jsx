import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <button>
        <Link to={"/recipes"}>Let's Cook</Link>
      </button>
    </div>
  );
}