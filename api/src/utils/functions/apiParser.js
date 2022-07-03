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

module.exports={ apiParser }