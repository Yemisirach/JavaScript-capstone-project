import {
  sendComment,
  getAllComment,
  getAllComments,
  displayComments,
} from './fetchComment.js';

const closePopup = (container) => {
  const cancelBtn = document.querySelector('.cancel');
  cancelBtn.addEventListener('click', () => {
    container.innerHTML = '';
  });
};

const renderPopup = (item) => {
  const header = document.querySelector('header');
  header.style.display = 'none';
  const container = document.querySelector('.popup');
  container.innerHTML += `
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
                <td>comment:</td>
              </tr>
            </table>
          </div>
          <form id="form">
            <h2>Add Comment</h2><br>
            <input class="form-control" type="text" id="username" placeholder="Your name" required/>
            <textarea rows="5" id="usercomment" placeholder="Your comment" required></textarea>
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
    const comment = document.querySelector('#usercomment');
    const username = name.value;
    const usercomment = comment.value;
    await sendComment(parseInt(item.idCategory, 10), username, usercomment);
    table.innerHTML = '';
    getAllComment(parseInt(item.idCategory, 10));
    form.reset();
  });
  getAllComment(parseInt(item.idCategory, 10));
  closePopup(container);
  getAllComments();
  displayComments();
};

export default renderPopup;
