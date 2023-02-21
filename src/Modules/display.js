const scoreDisplay = document.querySelector('.tableBody');
const displayScores = (arr) => {
  scoreDisplay.innerHTML = '';
  const displayScores = arr.map(
    (item) => `
          <tr >
          <td class="score-container" ><img class="imagemeals" src="${item.strMealThumb}"></td>
          <td class="score-container" ><span>Meals-Tags:${item.strTags} </span></td>
          <td class="score-container" ><span>MealCategory:${item.strCategory}</span></td>
          <td class="score-container" ><span>Meal-KG=:${item.strMeasure1} </span></td>

        </tr>`,
  );
  scoreDisplay.innerHTML = displayScores.join(' ');
};
export default displayScores;
