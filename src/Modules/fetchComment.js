import { postComments, getComments } from './commentApi.js';
import commentCount from './totalComment.js';

async function getAllComments(id) {
  const response = await getComments(id);
  const comments = await response.json();
  return comments;
}

const displayComments = (data) => {
  const table = document.querySelector('.table');
  const commentSpan = document.querySelector('.commentspan');
  if (data.length) {
    const tableHTML = '';
    data.forEach(({ username, dateStart, dateEnd }) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <tr>
        <td class="username">${username}</td>
        <td class="creation_start">${dateStart}</td>
        <td class="creation_end">${dateEnd}</td>
      </tr>
        `;
    });
    table.innerHTML = tableHTML;
    commentCount(table, commentSpan);
  }
};

const getAllComment = async (id) => {
  const table = document.querySelector('.table');
  const commentSpan = document.querySelector('.commentspan');
  const data = await getComments(id);
  if (data.length) {
    data.forEach(({ username, dateStart, dateEnd }) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <tr>
      <td class="username">${username}</td>
      <td class="creation_start">${dateStart}</td>
      <td class="creation_end">${dateEnd}</td>
    </tr>
      `;
      table.appendChild(tr);
    });
    commentCount(table, commentSpan);
  }
};
const sendComment = (id, username, dateStart, dateEnd) => {
  if (username && dateStart && dateEnd) {
    const res = postComments(`item${id}`, username, dateStart, dateEnd);
    return res;
  }
  return id;
};

export {
  sendComment, getAllComment, getAllComments, displayComments,
};
