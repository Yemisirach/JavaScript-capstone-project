import './style.css';
import foodsUI from './Modules/displayUi.js';

foodsUI();

const modal = document.querySelector('.meal');
const modalDetailsContent = document.querySelector('.modal-details-content');
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modalDetailsContent.parentElement.classList.remove('displayModal');
  }
});
