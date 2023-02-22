import './style.css';
import getScores from './Modules/getScore.js';
import displayScores from './Modules/display.js';
// import comments from "./Modules/comment.js";

const apiId = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';
document.querySelector('.tableBody').innerHTML = '';
getScores(apiId).then((data) => displayScores(data.meals));

// const comment = document.querySelector("popup-windo");

// comment.addEventListener("click", () => {
//   comments;
// });
