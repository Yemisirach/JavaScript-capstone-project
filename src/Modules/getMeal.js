/* eslint-disable */
import { addLike } from "./userApi.js";
import mealsFunction from "./display.js";
/* eslint-enable */
const modalDetailsContent = document.querySelector('.modal-details-content');
const recipeCloseBtn = document.getElementById('modal-close-btn');

recipeCloseBtn.addEventListener('click', () => {
  modalDetailsContent.parentElement.classList.remove('displayModal');
});

function getMealInfo(e) {
  e.preventDefault();

  if (/like-/.test(e.target.id)) {
    const { id } = e.target;
    const foodNum = id.match(/\d+$/)[0];
    addLike(foodNum);
  }

  if (e.target.classList.contains('comment-btn')) {
    const mealItem = e.target.parentElement.parentElement;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php?i=${mealItem.dataset.id}`,
    )
      .then((response) => response.json())
      .then((data) => mealsFunction(data.categories));
  }
}

export default getMealInfo;
