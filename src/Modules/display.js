// import addMeal from "./addMeal.js";
const Display = document.querySelector('.tableBody');
const display = (arr) => {
  Display.innerHTML = '';
  const displayScore = arr.map(
    (item, index) => `
        <section class="features">
    <div class="feature">
        <div class="feature-img">
            <img class="imagemeals" src="${item.strCategoryThumb}" alt="">
        </div>
        <div class="info">
            <div class="line-feature">
             <h3 class="mealname">${item.strCategory}</h3>
            <p>${item.strCategoryDescription.substr(0, 45)}... </p>
            </div>
           <div class="commentSection">
           <div class="heart"><i class="fa-regular fa-heart"></i>
           <code class="likes-counter"></code> 
           </div>
         
          <div class="popu-button">
          <button  class="commentBtn" id="${index}" type="button" >Comment</button>
          <button id="reservation" type="button" >Reservation</button>
          </div>
            </div>
        </div>
    </div>  
</section>`,
  );
  Display.innerHTML = displayScore.join(' ');
};

export default display;
