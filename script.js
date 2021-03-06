var cardList = document.querySelector('.main-right__card-list');
var cardTitle = document.querySelector('.main-left__input-title');
var cardURL = document.querySelector('.main-left__input-URL');
var enterBtn = document.querySelector('.main-left__button-enter');

// enterBtn.addEventListener('click', appendCard);
enterBtn.addEventListener('click', blankOnEntry);
cardList.addEventListener('click', deleteCard);
cardList.addEventListener('click', markAsRead);


function appendCard() {
  var createCard = document.createElement('li');  

  createCard.innerHTML = `
    <h3 
      class="main-right__card-title">
      ${cardTitle.value}
    </h3>
    <a 
      class="main-right__card-link" 
      href="">${cardURL.value}
    </a>
    <button 
      class= "main-right__card-button main-right__card-button-read">
      Read
    </button>
    <button 
      class= "main-right__card-button main-right__card-button-delete">
      Delete
    </button>
    `;

  cardList.appendChild(createCard); 
}


function deleteCard(event) {
  if(event.target.matches('.main-right__card-button-delete')){
    event.target.closest('li').remove();
  }
}

function markAsRead() {
  if (event.target && event.target.matches('.main-right__card-button-read')){
    event.target.closest('li').classList.toggle('read');
  }
  document.querySelector('.main-right__card-button-read').classList.toggle('main-right__card-button-read-clicked');
  document.querySelector('.main-right__card-button-delete').classList.toggle('main-right__card-button-delete-read');
}
 
// function unmarkAsRead() {
//   document.querySelector('.main-right__card-button-read').style.color = '#445A64'
// }

function blankOnEntry() {
  if (cardURL.value === '' || cardTitle.value === ''){
    alert('Error empty field')
  } else {
    appendCard()
  }
}


