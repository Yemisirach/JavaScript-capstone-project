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
            <div class="line-feature">
             <h3>${item.strTags}</h3>
            <p class="hardware">${item.strCategory}</p>
            <h3>${item.strMeasure1} </h3>
            </div>
           
            <div class="popu-button">
            <button id="refreshScores"  type="button" > Comment</button>
            <br>
            <button id="refreshScores"  type="button" > reservation</button>
            </div>
        </div>
    </div>
</section>`,
  );
  scoreDisplay.innerHTML = displayScores.join(' ');
};
export default displayScores;
