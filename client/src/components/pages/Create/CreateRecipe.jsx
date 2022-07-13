import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allDiets, createRecipes } from "../../../redux/actions";

import dietOrder from "../../../utils/functions/dietOrder";
import validation from "../../../utils/functions/validation";

import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

import styles from "./Create.module.css";

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
  let [input, setInput] = useState({
    name: "",
    image: "",
    summary: "",
    score: 50,
    steps: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(allDiets());
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validation(input));
  };

  const handleChecked = (e) => {
    if (input.diets.includes(e.target.value)) {
      setInput({
        ...input,
        diets: [...input.diets].filter((d) => d !== e.target.value),
      });
      setError(validation(input));
    } else {
      setInput({ ...input, diets: [...input.diets, e.target.value] });
      setError(validation(input));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipes(input));
    alert("¡Something New to Cook! :)");
    setInput(inputReset);
    document.getElementById("createForm").reset();
  };

  return (
    <div className={styles.flexContainer}>

      <div>
        <Header />
      </div>

      <div className={styles.form}>

        <div className={styles.title}>
          <h1>Create a New Recipe!</h1>
          <h3>Fields with * are Required</h3>
        </div>

        <form id="createForm">
          <div className={styles.input}>
            <label>*Name:</label>
            <input
              placeholder="Name"
              type={"text"}
              name={"name"}
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {error.name && <p>{error.name}</p>}
          </div>
          <p></p>
          <div className={styles.input}>
            <label>Image:</label>
            <input
              placeholder="image"
              type={"url"}
              name={"image"}
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
            {error.image && <p>{error.image}</p>}
          </div>
          <p></p>
          <div className={styles.input}>
            <label>Health Score:</label>
            <input
              placeholder="Health Score"
              type={"number"}
              name={"score"}
              value={input.score}
              min="1"
              max="100"
              onChange={(e) => handleChange(e)}
            />
            {error.score && <p>{error.score}</p>}
          </div>
          <div className={styles.textarea} >
            <label>*Summary:</label>
            <textarea
              rows="5"
              cols="100"
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
          <div className={styles.textarea} >
            <label>Steps:</label>
            <textarea
              rows="5"
              cols="100"
              name="steps"
              value={input.steps}
              placeholder="Use this text area for describe each preparation step of you Recipe. SEPARATE EACH STEP USING A '.'"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className={styles.diets} >
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
                        onChange={(e) => handleChecked(e)}
                      />
                      <label>{d.name}</label>
                    </div>
                  );
                })}
              {error.diets && <p>{error.diets}</p>}
            </div>
          </div>

          <button
            disabled={
              Object.keys(error).length ||
              !input.name ||
              !input.summary ||
              !input.diets.length
            }
            type={"submit"}
            onSubmit={(e) => handleSubmit(e)}
          >
            Create Recipe
          </button>
        </form>
        
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>

    </div>
  );
}
