import axios from 'axios'


const Card = (object) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
  
    const header = document.createElement("div");
    header.classList.add("headline");
    header.textContent = object.headline;
  
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("img-container");
  
    const newImg = document.createElement("img");
    newImg.src = object.authorPhoto;
  
    const span = document.createElement("span");
    span.textContent = object.authorName;

    const authorName = document.createElement("div")
    authorName.classList.add("author")
  
    newCard.appendChild(header);
    newCard.appendChild(authorName)
    authorName.appendChild(imageContainer);
    imageContainer.appendChild(newImg);
    authorName.appendChild(span);

    newCard.addEventListener ('click', ()=>{
      console.log(object.headline)

    })
    return newCard;
  }
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


const cardAppender = (selector) => {

  const mainContainer = document.querySelector(selector);

  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((result) => {
    const dataSet = result.data.articles;
    // console.log(Object.entries(dataSet));
    Object.entries(dataSet).forEach((subSet) => {
      // fix node class so they match tabs
      console.log(subSet[1]);
        subSet[1].forEach((article) => {
          mainContainer.appendChild(Card(article));
        });
    });
  })
  .catch((error) => {
    console.log(error);
  })
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
