#5KYU

##<a href="https://www.codewars.com/kata/525c65e51bf619685c000059">PETE THE BAKER</a> - JAVASCRIPT SOLUTION

###THE PROBLEM: 
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

```javascript
EXAMPLES: 
// must return 2:
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0:
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
```

###TAGS:
  - Algorithms
  
###PROBLEM HIGHLIGHTS/THINGS WORTH REMEMBERING:
  - Object property iteration
  - Object property value access
  - Number.MAX_SAFE_INTEGER
  - Math.floor();
  
###HOW I APPROACHED THE PROBLEM:

The first thing we need to do is iterate through each item in the recipe (passed as an object parameter). This can be accomplished with a simple for loop: 

```javascript
for (ingredient in recipe){
  //do something for each ingredient in the recipe object
}
```

Next, we need to see if that item is actually available - in order to do this, we can run a quick check to see if the property exists in the "available" object using the hasOwnProperty() object method:

```javascript
for (ingredient in recipe){
  if (available.hasOwnProperty(ingredient)){
   
  } else {
  
  }
}
```

If the ingredient exists: 
  - determine how many cakes can be made with that one ingredient
  - compare that number of cakes with the minimum value of cakes we could make with any one ingredient, if it's smaller, replace minCakes with that value.

```javascript
if (available.hasOwnProperty(ingredient)){
  numCakes = Math.floor(available[ingredient] / recipe[ingredient]);
  if (numCakes < minCakes){
    minCakes = numCakes;
  }
}
```

If the ingredient doesn't exist: 
  - we can't make any cakes with the available ingredients and must return a value of 0.

```javascript
else {
  minCakes = 0;
}
```
