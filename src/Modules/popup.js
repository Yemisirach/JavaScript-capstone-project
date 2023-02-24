import { saveData, getData } from './commentApi.js';

const displaycomment = async (index) => {
  const comentData = await getData(index);
  const displaycomm = document.querySelector('.displayComment');
  comentData.forEach((coment) => {
    const eachComment = document.querySelector('span');
    displaycomm.appendChild(eachComment);
    eachComment.innerHTML = `${coment.creation_date}  ${coment.username} : ${coment.comment}`;
  });
};

const countcoment = async (index) => {
  const comments = await getData(index);
  let count = 0;
  comments.forEach((item) => {
    if (item.comment !== '') {
      count += 1;
    }
  });
  const addcount = document.querySelector('.number');
  addcount.innerHTML = `${count}`;
};

const reset = () => {
  const form = document.getElementById('#form');
  form.reset();
  const commentspace = document.querySelector('.displayComment');
  commentspace.innerHTML = '';
};

const addcomment = (index) => {
  const adding = document.querySelector('#com-btn');
  const itemid = Number(index);
  adding.addEventListener('click', async () => {
    const username = document.querySelector('#name');
    const comment = document.querySelector('#message');
    if (username.value && comment.value) {
      await saveData(itemid, username.value, comment.value);
      reset(index);
      await countcoment(index);
      await displaycomment(index);
    }
  });
};

const closePop = () => {
  const closeup = document.querySelector('.closeBtn');
  closeup.addEventListener('click', () => {
    const mealblur = document.querySelector('.mealblur');
    const popupclose = document.querySelector('.popup-windo');
    // DisplayPop.style.display = "none";
    popupclose.innerHTML = '';
    popupclose.removeAttribute('style');
    mealblur.style.filter = 'none';
  });
};

const displayScoresPop = (arr, index) => {
  const DisplayPop = document.querySelector('.popu');
  const displayMealPop = document.createElement('div');
  displayMealPop.classList.add('popup-box');
  DisplayPop.innerHTML = '';
  countcoment(index);
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
     <div class="displayComment">
       <span></span>
       <span></span>
       <span></span>
     </div>
     <h4 class="count">comment
    <span class="number"> </span>
    </h4>
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
           class="comments-Btn"
           id="com-btn"
         >
           Comment
         </button>
       </form>
     </div>.
     </div>
   </div>
 </div>  `,
  );
  displayMealPop.setAttribute('data-id', index);
  displayMealPop.style.display = 'block';
  DisplayPop.appendChild(displayMealPop);

  closePop();
  addcomment(index);
  displaycomment(index);
  // DisplayPop.innerHTML = displayScoresPop.join(" ");

  // const closeBtn = document.querySelector(".closeBtn");
  // closeBtn.addEventListener("click", () => {
  //   if ("click") {
  //     DisplayPop.style.display = "none";
  //   } else {
  //     DisplayPop.style.display = "block";
  //   }
  // });
};

export default displayScoresPop;
