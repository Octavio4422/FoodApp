import order from "./order";

export default function filter(array, filter, lastOrder) {
  let response;

  if (filter === "DEFAULT") {
    response = order(array, lastOrder);
    return response ;
  }

  response = array.filter((r) => r.diets.includes(filter.toLowerCase()));

  if (lastOrder === "DEFAULT" || lastOrder === "") {
    return response;
  }
  response = order(response, lastOrder);
  return response;
}
