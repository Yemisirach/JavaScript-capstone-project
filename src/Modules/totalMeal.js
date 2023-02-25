const mealCount = (Categorys, num) => {
  const items = Array.from(Categorys.children);
  num.innerText = `TV SHOWS (${items.length})`;
  return items;
};

export default mealCount;
