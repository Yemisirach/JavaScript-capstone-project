const scoreDisplay = document.querySelector('.tableBody');
const displayScores = (arr) => {
  scoreDisplay.innerHTML = '';
  const displayScores = arr.map(

    (item) => `

        <section class="features">
    <div class="feature">
        <div class="feature-img">
            <img class="imagemeals" src="${item.strMealThumb}" alt="">
        </div>
        <div class="info">
            <h3>${item.strTags}</h3>
            <p class="hardware">${item.strCategory}</p>
            <h4>${item.strMeasure1} </h4>
           
            <button  type="button" > Comment</button>
            <br>
            <br>
            <button type="button" > reservation</button>
            
        </div>
    </div>
</section>`
    ,
  );
  scoreDisplay.innerHTML = displayScores.join(' ');
};
export default displayScores;
