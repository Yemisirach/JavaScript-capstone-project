/* eslint-disable */
import getMealInfo from "./getMeal.js";
import { getLikes } from "./userApi";

import mealsCounter from "./mealCounte.js";

const foodItemsDiv = document.getElementById("food-items");

// event listeners
foodItemsDiv.addEventListener("click", getMealInfo);

const foodsUI = async () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=g")
    .then((res) => res.json())
    .then((data) => {
      getLikes().then((datalikes) => {
        let html = "";
        data.meals.forEach((meal) => {
          const arrLikes = datalikes.filter(
            (item) => item.item_id === meal.idMeal
          );

          // ckeck if the objct is empty
          let pickLikes = "";
          if (arrLikes.length !== 0) {
            pickLikes = arrLikes[0].likes;
          }

          html += `
      <div class='meal-item' data-id = '${meal.idMeal}'> 
        <div class = 'meal-img'>     
          <img src='${meal.strMealThumb}'>
        </div>
        <div class = 'involvement'> 
        <p>Your love for this meal is...<p>
        <a>${pickLikes}  <i class='fa-regular fa-heart' id='like-${meal.idMeal}'></i>  Like</a>
        </div>
        <div class = 'meal-name'>
          <p>${meal.strMeal}</p>
          <p>Category: ${meal.strCategory}</p>
          <button class = 'comment-btn'>Comment</button>
        </div>
      </div>
      `;
        });
        foodItemsDiv.innerHTML = html;
      });
    });
};

setTimeout(() => {
  const total = mealsCounter();
  const counter = document.getElementById("ourFood");
  counter.innerHTML = `Meals ${total}`;
}, 2000);

export default foodsUI;
