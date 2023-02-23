const DisplayPop = document.querySelector('.popu');

const displayScoresPop = (arr, popid) => {
  const displayMealPop = document.createElement('div');
  displayMealPop.classList.add('popup-box');
  DisplayPop.innerHTML = '';
  displayMealPop.innerHTML = arr.map(
    (item, index) => `
    <div id=${index} class="popup-windo">
    <div class="poup-comment">
    <div class="popup-close">
     <span class="closeBtn"><h2>X</h2></span>
      <div class="popup-img">
        <img class="imagemealspop"
           src="${item.strCategoryThumb}"
         />
       </div>
     </div>
     <div class="meal-name"><h2>${item.strCategory}</h2></div>
     <div class="meal-detail">
       <ul class="meal-list">
         <p class="list">${item.strCategoryDescription}</p>
     </div>
     <div class="comment">
       <span></span>
       <span></span>
       <span></span>
     </div>
     <div class="comment-form">
      <div class="comment-header">
        <h2>Add Comment</h2>
       <form action="" id="form">
         <input
           type="text"
           name="name"
           class="form-control"
           id="name"
           placeholder="name"
         />
         <textarea
           name=""
           id="message"
           cols="30"
           rows="10"
           placeholder="Your insights"
           class="comment-input"
         ></textarea>
         <button
           type="submit"
           value="submit"
           class="add-Btn"
           id="btn"
         >
           Comment
         </button>
       </form>
     </div>
     </div>
   </div>
 </div>  `,
  );
  // DisplayPop.innerHTML = displayScoresPop.join(" ");

  DisplayPop.appendChild(displayMealPop);
  const po = document.querySelectorAll('.popup-windo');
  po.forEach((e) => {
    if (e.id !== popid) {
      e.style.color = 'none';
    }
  });

  const closeBtn = document.querySelector('.closeBtn');
  closeBtn.addEventListener('click', () => {
    DisplayPop.style.display = 'none';
  });
};

export default displayScoresPop;
