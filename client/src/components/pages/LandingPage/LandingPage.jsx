import { Link } from "react-router-dom";
import Footer from "../../sections/Footer/Footer";

export default function LandingPage() {
  return (
    <div>
      <button>
        <Link to={"/recipes"}>Let's Cook</Link>
      </button>
      <div>
        <Footer />
      </div>
    </div>
  );
}