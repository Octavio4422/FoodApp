import order from "./order";

export default function filter(array, filter, lastOrder) {
  console.log(filter);
  console.log(array);
  console.log(lastOrder);
  let response = array.filter((r) => r.diets.includes(filter.toLowerCase()));

  if (lastOrder === "DEFAULT" ||lastOrder === "" ) {
    console.log(response);
  }
  response = order(response, lastOrder);
  return response;
}
