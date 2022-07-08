import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipes } from "../../../Redux/actions";

import dietOrder from "../../../utils/functions/dietOrder";
import validation from "../../../utils/functions/validation"

import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";

let input = {
  name: "",
  image: "",
  summary: "",
  score: 50,
  steps: "",
  diets: [],
};

let inputReset = {
  name: "",
  image: "",
  summary: "",
  score: 50,
  steps: "",
  diets: [],
};

export default function CreateRecipe() {
  const dispatch = useDispatch();

  let diets = useSelector((state) => state.diets);
  diets = dietOrder(diets);

  let [error, setError] = useState({});

  useEffect(() => {
    dispatch(allTypes());
  }, []);

  let handleChange = (e) => {
    if(e.target.name === "diets"){

    }

    input = { ...input, [e.target.name]: e.target.value };
    setError(validation(input));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipes(input));
    input = inputReset;
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>*Name:</label>
          <input
            type={"text"}
            name={"name"}
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
          {error.name && <p>{error.name}</p>}
        </div>
        <p></p>
        <div>
          <label>Image:</label>
          <input
            type={"url"}
            name={"image"}
            value={input.image}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <p></p>
        <div>
          <label>Health Score (1 the lowest and 100 the highest):</label>
          <input
            type={"number"}
            name={"score"}
            value={input.score}
            min="1"
            max="100"
            onChange={(e) => handleChange(e)}
          />
          {error.score && <p>{error.score}</p>}
        </div>
        <div>
          <label>*Summary:</label>
          <textarea
            rows="5"
            cols="25"
            name="summary"
            value={input.summary}
            placeholder="Use this text area for shortly describe your Recipe...."
            onChange={(e) => {
              handleChange(e);
            }}
          />
        {error.summary && <p>{error.summary}</p>}
        </div>
        <p></p>
        <div>
          <label>Steps:</label>
          <textarea
            rows="5"
            cols="25"
            name="steps"
            value={input.steps}
            placeholder="Use this text area for describe each preparation step of you Recipe. SEPARATE EACH STEP USING A '.'"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label>Diets:</label>
          <div>
            {diets &&
              diets.map((d, i) => {
                return (
                  <div key={i}>
                    <input
                      type="checkbox"
                      name="diets"
                      value={d.name}
                      onChange={(e) => handleChange(e)}
                    />
                    <label>{t.name}</label>
                  </div>
                );
              })}
            {error.diets && <p>{error.diets}</p>}
          </div>
        </div>

        <button
          disabled={"hola"}
          type={"submit"}
          onSubmit={(e) => handleSubmit(e)}
        >
          Create Recipe
        </button>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
}
