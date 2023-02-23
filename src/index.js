import './style.css';
import display from './Modules/display.js';
import displayScoresPop from './Modules/popup.js';
import getMeal from './Modules/getMeal.js';

const apiId = 'https://www.themealdb.com/api/json/v1//1/categories.php';
// const InvolvementApi =
//   "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/";
document.querySelector('.tableBody').innerHTML = '';

getMeal(apiId).then((data) => {
  display(data.categories);

  const commentBtn = document.querySelectorAll('.commentBtn');

  commentBtn.forEach((comment) => {
    comment.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.tableBody').innerHTML = '';
      getMeal(apiId).then((data) => displayScoresPop(data.categories, e.target.id));
    });
  });
});

// addMeal(InvolvementApi).then((data) => displayScores(data.categories));
