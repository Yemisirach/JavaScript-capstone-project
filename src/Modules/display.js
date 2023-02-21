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
            <div class="line-feature"></div>
            <h4>${item.strMeasure1} </h4>
            <div class="btn">
            <button id="refreshScores"  type="button" > Comment</button>
            <br>
            <button id="refreshScores"  type="button" > reservation</button>
            </div>
        </div>
    </div>
</section>`
    ,
  );
  scoreDisplay.innerHTML = displayScores.join(' ');
};
export default displayScores;
