import filter from "../../utils/functions/filter";
import order from "../../utils/functions/order";
import {
  ALL_DIETS,
  ALL_RECIPES,
  CLEAR_ERROR,
  CREATE_RECIPES,
  FITLER,
  ID_ERROR,
  ID_RECIPES,
  ORDER,
  QUERY_RECIPES,
} from "../actions";

const initialState = {
  originalRecipes: [],
  recipes: [],
  recipe: {},
  createdRecipe: {},
  diets: [],
  error: {
    recipes: false,
    id: false,
    query: false,
    diets: false,
  },
};

let lastOrder = "";

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ALL_RECIPES:
      return {
        ...state,
        originalRecipes: payload,
        recipes: payload,
      };
    case ID_RECIPES:
      return {
        ...state,
        recipe: payload,
      };
    case QUERY_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    case CREATE_RECIPES:
      return {
        ...state,
        createdRecipe: payload,
      };
    case ALL_DIETS:
      return {
        ...state,
        diets: payload,
      };

    case ORDER:
      lastOrder = payload;
      if (payload === "DEFAULT") {
        return {
          ...state,
          recipes: state.originalRecipes,
        };
      }
      let newOrder = [...state.recipes];
      newOrder = order(newOrder, payload);
      return {
        ...state,
        recipes: [...newOrder],
      };

    case FITLER:
      if (payload === "DEFAULT") {
        return {
          ...state,
          recipes: state.originalRecipes,
        };
      }
      let newFilter = [...state.originalRecipes];
      newFilter = filter(newFilter, payload, lastOrder);

      return {
        ...state,
        recipes: [...newFilter],
      };

    case ID_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          id: payload,
        },
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: {
          recipes: false,
          id: false,
          query: false,
          diets: false,
        },
      };

    default:
      return { ...state };
  }
}
