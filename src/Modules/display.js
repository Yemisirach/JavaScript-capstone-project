/* eslint-disable */
import commentsCounter from "./commentCount.js";

const modalDetailsContent = document.querySelector(".modal-details-content");
const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const key = "ZbL3vMDmBGqIrLmuwzny";

const mealsFunction = (item) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    item[0];
  const html = `
        <div class="modal-meal-img">
              <img src="${strCategoryThumb}" alt="" />
            </div>
            <div class="item-details">
              <div>
                <p>${strCategory}</p>
                <p>${strCategoryDescription}</p>
              </div>
            </div>
            <h2 id="commentTitle">Comments</h2>
            <div id="commentsDisplay"></div>
            <h2 id="plusComment">Add a comment</h2>
            <div id="form">
            <input type="text" id="username" class="form-control" placeholder="Your name" />
            <textarea type="text" id="comment" placeholder="Your Insights" ></textarea>
            <button type="submit" id="submit-comment">Submit</button>
            </div>
             </section>
    `;
  modalDetailsContent.innerHTML = html;
  modalDetailsContent.parentElement.classList.add("displayModal");
  const submitBtn = document.getElementById("submit-comment");
  submitBtn.addEventListener("click", () => {
    const item_id = idCategory;
    const usernameInput = document.getElementById("username");
    const commentInput = document.getElementById("comment");
    const username = usernameInput.value;
    const comment = commentInput.value;
    const dataToSend = JSON.stringify({ item_id, username, comment });
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: data,
      });
      return response;
    }

    postData(`${url}${key}/comments`, dataToSend)
      .then((json) => {
        json.json();
      })
      .catch((err) => {
        err.err();
      });
    usernameInput.value = "";
    commentInput.value = "";
    setTimeout(() => {
      mealsFunction(item);
    }, 1500);
  });

  async function getData(url = "") {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    return response;
  }

  const commentsDisplay = document.getElementById("commentsDisplay");

  const usersComments = () => {
    getData(`${url}${key}/comments?item_id=${idCategory}`)
      .then(async (res) => {
        const array = await res.json();
        return array;
      })
      .then((array) => {
        const displays = array
          .map(
            (items) => `
    <div class="comentInfo">
      <p class="eachScore">${items.creation_date} 
      <span>${items.username}:
      </span> 
      </p>
      <span>
      <p class="numberSc" id="comreload">${items.comment}</p>
      </span>
      </div>`
          )
          .join(" ");
        commentsDisplay.innerHTML = displays;
      });
  };
  usersComments();

  setTimeout(() => {
    const total = commentsCounter();
    const counter = document.getElementById("commentTitle");
    counter.innerHTML = `Comments (${total})`;
  }, 2000);
};

export default mealsFunction;
