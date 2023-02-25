/* eslint-disable */
import getMealInfo from "./getMeal.js";
import { getLikes } from "./userApi";

import mealsCounter from "./mealCounte.js";

const foodItemsDiv = document.getElementById("food-items");
// event listeners
foodItemsDiv.addEventListener("click", getMealInfo);

const foodsUI = async () => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => {
      getLikes().then((datalikes) => {
        let html = "";
        data.categories.forEach((item) => {
          const arrLikes = datalikes.filter(
            (item) => item.item_id === item.idcategories
          );

          // ckeck if the objct is empty
          let pickLikes = "";
          if (arrLikes.length !== 0) {
            pickLikes = arrLikes[0].likes;
          }

          html += `
        
          <section class="features">
      <div class='meal-item' data-id = '${item.idCategory}'> 
        <div class = 'meal-img'>     
          <img src='${item.strCategoryThumb}'>
        </div>
        <div class = 'involvement'> 
        <p><p>
      
        </div>
        <p>${item.strCategory}</p>
        <div class = 'meal-name'> 
          <p> ${item.strCategoryDescription.substr(0, 45)}...</p>
          
        </div>
        <a>${pickLikes}  <i class='fa-regular fa-heart' id='like-${
            item.idCategory
          }'></i>  Like</a>
      </div>
        <button class = 'comment-btn'>Comment</button>

      </section>
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
}, 1500);

export default foodsUI;
