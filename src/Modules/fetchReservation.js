import { postComments, getComments } from './reservationApi.js';
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
    let tableHTML = '';
    data.forEach(({ username, dateStart, dateEnd }) => {
      tableHTML += `
        <tr>
          <td class="username">${username}</td>
          <td class="creation_date">${dateStart}</td>
          <td class="creation_date">${dateEnd}</td>

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
        <td class="username">${username}</td>
        <td class="creation_date">${dateStart}</td>
        <td class="creation_date">${dateEnd}</td>
      `;
      table.appendChild(tr);
    });
    commentCount(table, commentSpan);
  }
};

const sendComment = (id, username, dateStarts, dateEnds) => {
  if (username && dateStarts && dateEnds) {
    const res = postComments(`item${id}`, username, dateStarts, dateEnds);
    return res;
  }
  return id;
};

export {
  sendComment, getAllComment, getAllComments, displayComments,
};
