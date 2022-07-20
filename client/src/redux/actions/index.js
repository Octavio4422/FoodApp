import axios from "axios";
import { LOCAL_API_RECIPES, LOCAL_API_DIETS } from "../../utils/globals";

//localhost actions
export const ALL_RECIPES = "ALL_RECIPES";
export const ID_RECIPES = "ID_RECIPES";
export const QUERY_RECIPES = "QUERY_RECIPES";
export const CREATE_RECIPES = "CREATE_RECIPES";
export const ALL_DIETS = "ALL_DIETS";

//Filter Order SearchBar actions
export const ORDER = "ORDER";
export const FITLER = "FILTER";
export const EMPTY_INPUT = "EMPTY_INPUT";

//error actions
export const ALL_ERROR = "ALL_ERROR";
export const QUERY_ERROR = "QUERY_ERROR";
export const ID_ERROR = "ID_ERROR";
export const CREATE_ERROR = "CREATE_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const allRecipes = () => (dispatch) => {
  return axios
    .get(LOCAL_API_RECIPES)
    .then((recipes) => {
      dispatch({
        type: ALL_RECIPES,
        payload: recipes.data,
      });
    })
    .catch((error) => {
      console.log(error.message)
      dispatch({
        type: ALL_ERROR,
        payload: true,
      });
    });
};

export const idRecipes = (id) => (dispatch) => {
  return axios
    .get(`${LOCAL_API_RECIPES}/${id}`)
    .then((recipe) => {
      dispatch({
        type: ID_RECIPES,
        payload: recipe.data,
      });
    })
    .catch((error) => {
      console.log(error.message)
      dispatch({
        type: ID_ERROR,
        payload: true,
      });
    });
};

export const queryRecipes = (query) => (dispatch) => {
  return axios
    .get(`${LOCAL_API_RECIPES}?name=${query}`)
    .then((recipes) => {
      dispatch({
        type: QUERY_RECIPES,
        payload: recipes.data,
      });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({
        type: QUERY_ERROR,
        payload: [],
      });
    });
};

export const createRecipes = (inputs) => (dispatch) => {
  return axios
    .post(LOCAL_API_RECIPES, inputs)
    .then((recipe) => {
      dispatch({
        type: CREATE_RECIPES,
        payload: recipe.data,
      });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({
        type: CREATE_ERROR,
        payload: true,
      })
    });
};

export const allDiets = () => (dispatch) => {
  return axios
    .get(LOCAL_API_DIETS)
    .then((diets) => {
      dispatch({
        type: ALL_DIETS,
        payload: diets.data,
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const orderRecipes = (value) => {
  return {
    type: ORDER,
    payload: value,
  };
};

export const filterRecipes = (value) => {
  return {
    type: FITLER,
    payload: value,
  };
};

export const emptyInput = () => {
  return {
    type: EMPTY_INPUT,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
