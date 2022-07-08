export default function order(array, distribution) {
    if (distribution === "ASCENDENTE" || distribution === "DESCENDENTE") {
      let response = array.sort((a, b) => {
        if (a.name < b.name) {
          return distribution === "ASCENDENTE" ? -1 : 1;
        }
        if (a.name > b.name) {
          return distribution === "DESCENDENTE" ? -1 : 1;
        }
        return 0;
      });
      return response;
    }
  
    if(distribution === "MAX" || distribution === "MIN") {
        let response = array.sort((a, b) => {
            if (a.score < b.score) {
              return distribution === "MAX" ? 1 : -1;
            }
            if (a.score > b.score) {
              return distribution === "MIN" ? 1 : -1;
            }
            return 0;
          });
          return response;
    }
}