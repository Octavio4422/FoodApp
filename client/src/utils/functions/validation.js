export default function validation(input) {
  const error = {};

  //required fiels
  if (input.name.length < 5) {
    error.name = "Name must be more descriptive";
  } else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
    error.name = "Name must be a string";
  } else if (!input.name) {
    error.name = "Name cannot be empty";
  }

  if (input.summary.length < 50) {
    error.summary = "Summary must be more descriptive";
  } else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\d/?~]/.test(input.summary)) {
    error.summary = "Summary must be a text without expecial caracters";
  }  else if (!input.summary) {
    error.summary = "Summaty cannot be empty";
  }

  //required fiels

  //non required fiels
  if (input.score < 1) {
    error.score = "Score must be greater than or equal to 1";
  } else if (input.score > 100) {
    error.score = "Score must be less than or equal to 100";
  }

  if (input.diets.length <= 0 ) {
    error.diets = "You recipe must belong to a food diet ";
  }
  //non required fiels

  return error;
}
