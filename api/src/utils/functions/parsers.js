function apiParser( obj ){
 const response = {
    id : obj.id,
    name : obj.title,
    image: obj.image,
    summary: obj.summary,
    score: obj.healthScore,
    diets: obj.diets,
    steps: obj.analyzedInstructions.length > 0?  obj.analyzedInstructions[0].steps.map((s) => s.step) : [] 
 }
 return response;
}

function dbParser(obj){
   const response = {
      id: obj.id,
      name: obj.name,
      summary: obj.summary,
      score: obj.score,
      diets: obj.diets.map((d) => d.name),
      steps: obj.steps ? obj.steps.split('.') : []
   }
   return response
}

module.exports={ apiParser, dbParser }