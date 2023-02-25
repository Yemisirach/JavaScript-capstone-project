const commentCount = (Table, span) => {
  const table = document.querySelector('.table');
  const rows = table.querySelectorAll('tr');
  const count = rows.length - 1;
  span.innerText = `${rows.length - 1} comments for this meal`;
  return count;
};

export default commentCount;
