import { sendComment, getAllComment } from './fetchReservation.js';

const closePopup = (container) => {
  const cancelBtn = document.querySelector('.cancel');
  cancelBtn.addEventListener('click', () => {
    container.innerHTML = '';
  });
};

const renderPopups = (item) => {
  const header = document.querySelector('header');
  const ul = document.querySelector('ul');
  header.style.display = 'none';
  ul.style.display = 'none';
  const container = document.querySelector('.popup');
  container.innerHTML = `
  <div class="popup">
  <div class="content">
    <div class="imagemeal">
      <i class="closeBtn fa-solid fa-x close fa-2x cancel" aria-hidden="true"></i>
      <img class="imagemealspop" src="https://www.themealdb.com/images/category/dessert.png"/>
      </div>
      <p class="meal-name">${item.strCategory}</p>
      <p class="list">${item.strCategoryDescription}</p>
      <div id="${item.idCategory}">
        <span class="commentspan"></span>
        <table class="table">
          <tr>
            <td>username:</td>
            <td>date_start:</td> 
            <td>date_end:</td>
          </tr>
        </table>
      </div>
      <form id="form">
        <h2>Add Comment</h2><br>
        <input class="form-control" type="text" id="username" placeholder="Your name" required/>
            <input class="form-control" type="text" id="date_start" placeholder="Start date" required/>
            <input class="form-control" type="text" id="date_end" placeholder="end date" required/>

            <button class="btnSubmit" id="item${item.idCategory}" type="submit">Comment</button>
          </form>
        </div>
      </div>
    </div>
  `;
  const form = document.querySelector('#form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const table = document.querySelector('.table');
    const name = document.querySelector('#username');
    const dateStart = document.querySelector('#date_start');
    const dateEnd = document.querySelector('#date_end');

    const username = name.value;
    const dateStarts = dateStart.value;
    const dateEnds = dateEnd.value;
    await sendComment(
      parseInt(item.idCategory, 10),
      username,
      dateStarts,
      dateEnds,
    );
    table.innerHTML = '';
    getAllComment(parseInt(item.idCategory, 10));
    form.reset();
  });
  getAllComment(parseInt(item.idCategory, 10));
  closePopup(container);
};

export default renderPopups;
