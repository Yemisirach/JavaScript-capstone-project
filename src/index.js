import './style.css';

import getScores from './Modules/getScore.js';
import displayScores from './Modules/display.js';

const apiId = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
const refreshScores = document.querySelector('#refreshScores');
document.querySelector('.tableBody').innerHTML = '';
getScores(apiId).then((data) => displayScores(data.meals));
refreshScores.addEventListener('click', () => {

});
