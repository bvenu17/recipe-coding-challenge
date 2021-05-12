import http from '../index';


export function getRecipe(searchTerm) {
  return http.get(
    `/search.php?s=${searchTerm}`
  );
}

export function getRecipeById(id) {
  return http.get(
    `/lookup.php?i=${id}`
  );
}

export function getByIngrdient(searchTerm) {
  return http.get(
    `/filter.php?i=${searchTerm}`
  );
}

export function getCategories() {
  return http.get(
    `/categories.php`
  );
}

export function getByCategory(searchTerm) {
  return http.get(
    `/filter.php?c=${searchTerm}`
  );
}