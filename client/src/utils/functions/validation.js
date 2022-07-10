export default function validation(input){
    const error = {}

    if (input.name.length < 5) {
        error.name = "Name must be more descriptive";
      } else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
        error.name = "Name must be a string";
      } else if (!input.name) {
        error.name = "Name cannot be empty";
      }

      if (input.score < 1) {
        error.score = "Height must be greater than or equal to 1";
      } else if (input.score > 100) {
        error.score = "Height must be less than or equal to 100";
      } else if (!input.score) {
        error.score = "Height cannot be null";
      }

      if (input.summary.length < 20) {
        error.summary = "Summary must be greater than or equal to 20 characters";
      }

    return error;
}