//Open popup
let editButton = document.querySelector(".header__complain");
let editPopup = document.querySelector(".popup");
editButton.addEventListener("click", function(){
  editPopup.classList.add("popup_opened")
})

//Close popup
let closeButton = document.querySelector(".popup__close");
closeButton.addEventListener("click", function(){
  editPopup.classList.remove("popup_opened");
})



