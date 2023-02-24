import './style.css';
import display from './Modules/display.js';
import displayScoresPop from './Modules/popup.js';
import getMeal from './Modules/getMeal.js';
import { incrementLikes } from './Modules/like.js';

const apiId = 'https://www.themealdb.com/api/json/v1/1/categories.php';

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
  const heart = document.querySelectorAll('#fa-heart');
  heart.forEach((a) => {
    a.addEventListener('click', async () => {
      const { id } = a.dataset;
      await incrementLikes(parseInt(id, 10));
      const contain = a.parentElement.parentElement;
      const itemlike = contain.querySelector('.like-count');
      const currentCount = parseInt(itemlike.innerText, 10);
      itemlike.innerText = currentCount + 1;
    });
  });
});
