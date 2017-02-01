function cakes(recipe, available) {
  let minCakes = Number.MAX_SAFE_INTEGER;
  let numCakes = 0; 

  for (ingredient in recipe){
    if (available.hasOwnProperty(ingredient)){
      numCakes = Math.floor(available[ingredient] / recipe[ingredient]);
      if (numCakes < minCakes){
        minCakes = numCakes;
      }
    } else {
      minCakes = 0;
    }
  }
  return minCakes; 
};