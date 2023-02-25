import './style.css';
import display from './Modules/display.js';
import renderPopup from './Modules/popup.js';
import getMeal from './Modules/getMeal.js';
import renderPopups from './Modules/reservationpop.js';

const apiId = 'https://www.themealdb.com/api/json/v1/1/categories.php';

document.querySelector('.tableBody').innerHTML = '';

getMeal(apiId).then((data) => {
  display(data.categories);

  const commentBtn = document.querySelectorAll('.commentBtn');
  commentBtn.forEach((comment) => {
    comment.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.tableBody').innerHTML = '';
      getMeal(apiId).then((data) => renderPopup(data.categories, e.target.id));
    });
  });
  const reservationBtn = document.querySelectorAll('.reservation');
  reservationBtn.forEach((comment) => {
    comment.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.tableBody').innerHTML = '';
      getMeal(apiId).then((data) => renderPopups(data.categories, e.target.id));
    });
  });
});
