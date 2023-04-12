export function setSearchedDrinks(state, drinks) {
  state.searchedDrinks = drinks || [];
}
export function setDrinksByLetter(state, drinks) {
  state.drinksByLetter = drinks || [];
}
export function setDrinksByCategory(state, drinks) {
  state.drinksByCategory = drinks || [];
}
export function setIngredient(state, ingredient) {
  state.ingredient = ingredient;
}
