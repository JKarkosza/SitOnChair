document.addEventListener("DOMContentLoaded", function(){

// var menuItems = document.querySelectorAll("nav ul >li");
// console.log(menuItems);
//
// var hideItems = document.querySelector("nav ul ul");
// console.log(hideItems);
//
// hideItems.style.display = "none";
// menuItems.forEach(function(menuDisplay){
//   menuDisplay.addEventListener('mouseover', showMenu);
//   menuDisplay.addEventListener('mouseout', hideMenu);
// });
//
// function showMenu(e){
//   doExist = this.firstElementChild;
//   if(doExist != null){
//     doExist.style.display = "block";
//   }
// };
//
// function hideMenu(e){
//   doExist = this.firstElementChild;
//   if(doExist != null){
//       doExist.style.display = "none";
//   }
// };

var divs2Change = document.querySelectorAll("main .slajder");
console.log(divs2Change);

var btnPrev = document.querySelector("main .col-1:first-of-type");
console.log(btnPrev);

var btnNext = document.querySelector("main .col-1:last-of-type");
console.log(btnNext);

var divNum = 0;

btnNext.addEventListener('click', showNext);
function showNext(e){
  divs2Change[divNum].style.display = "none";
  divNum++

  if(divNum >= divs2Change.length){
    divNum = 0;
  }
  divs2Change[divNum].style.display = 'block';
};


btnPrev.addEventListener('click', minIndex);
function minIndex(e){
  divs2Change[divNum].style.display = "none";
  divNum--

  if(divNum <= -1){
    divNum = divs2Change.length -1;
  }
  divs2Change[divNum].style.display = 'block';
}









// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("slajder");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length} ;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex-1].style.display = "block";
// }













});
