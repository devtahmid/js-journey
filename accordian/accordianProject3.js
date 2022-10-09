document.getElementsByClassName('accordian')[0].addEventListener("click", function (e) {
  if (e.target.classList.contains('question')) {
    e.target.nextElementSibling.classList.toggle('display-block');
  }

})