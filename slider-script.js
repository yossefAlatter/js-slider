//== data that we need ==//
//== start ==//
var slidesData = [
  {
    imgSrc: "./imgs/person-1.jpg",
    imgName: "marya syna",
  },
  {
    imgSrc: "./imgs/person-2.jpg",
    imgName: "lyna merda",
  },
  {
    imgSrc: "./imgs/person-3.jpg",
    imgName: "pstna rolya",
  },
  {
    imgSrc: "./imgs/person-4.jpg",
    imgName: "jovya rolya",
  },
  {
    imgSrc: "./imgs/person-5.jpg",
    imgName: "thortamina",
  },
  {
    imgSrc: "./imgs/person-6.jpg",
    imgName: "hilko thra",
  },
  {
    imgSrc: "./imgs/person-7.jpg",
    imgName: "meza fgh",
  },
  {
    imgSrc: "./imgs/person-8.jpg",
    imgName: "gryos fhbtn",
  },
  {
    imgSrc: "./imgs/person-9.jpg",
    imgName: "gotmu syna",
  },
  {
    imgSrc: "./imgs/person-10.jpg",
    imgName: "govd size",
  },
];
//== end ==//


////////////////////////////////////////////////////////////////////

//== handle dom elements that we need ==//
//== start ==//
var leftSide = document.querySelector(".left-side .create-place");
var centerShow = document.querySelector(".center-show");
var rightSide = document.querySelector(".right-side .create-place");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
//== end ==//

////////////////////////////////////////////////////////////////////

//== functions we will do ==//
//== start ==//

//== function to create array dom ==//
//== start ==//
function createArrayDom(arr, con) {
  con.innerHTML = ``;
  arr.forEach((el) => {
    con.innerHTML += `
        <div class="slider-slide" id="s1">
            <div class="img-con">
                <img src="${el.imgSrc}" alt="person">
            </div>
            <div class="name-con">
            ${el.imgName}
            </div>
        </div>
        `;
  });
}
//== end ==//

//== function to create active silde ==//
//== start ==//
function createActiveSlide(con,indic){
    con.innerHTML = `<div class="slider-slide active">
        <div class="img-con">
            <img src="${indic.imgSrc}" alt="person">
        </div>
        <div class="name-con">
        ${indic.imgName}
        </div>
    </div>
        `;
}
//== end ==//

//== function to reset ==//
//== start ==//
function resetAll(indic){

    //== left side reset animation ==//
    //== start ==//
    leftSide.style.transition = "none";
    leftSide.style.transform = "translateX(220px)";
    //== end ==//

    //== center show reset animation ==//
    //== start ==//
    centerShow.style.transform = "scale(1) rotate(0)";
    //== end ==//

    //== right side rset animation ==//
    //== start ==//
    rightSide.style.transition = "none";
    rightSide.style.transform = "translateX(-220px)";
    //== end ==//

    //== reset left slide dom ==//
    //== start ==//
    createArrayDom(leftArray, leftSide);
    //== end ==//

    //== reset center show dom ==//
    //== start ==//
    createActiveSlide(centerShow,indic);
    //== end ==//
    
    //== reset right slide dom ==//
    //== start ==//
    createArrayDom(rightArray, rightSide);
    //== end ==//

}
//== end ==//

//== end ==//

////////////////////////////////////////////////////////////////////

//== making arrays that controls the slide ==//
//== start ==//
var len = slidesData.length;
var leftArray = [];
var rightArray = [];
for (let j = 0; j < len; j++) {
  leftArray.push(slidesData[j]);
  rightArray.push(slidesData[j]);
}
// var myOut = leftArray.shift();
// leftArray.unshift(myOut);
// leftArray.push(myOut);
var myint = rightArray.shift();
rightArray.push(myint);
//== end ==//

////////////////////////////////////////////////////////////////////

//== create dom ==//
//== start ==//

//== create left side dom ==//
//== start ==//
createArrayDom(leftArray, leftSide);
leftSide.style.transition = "none";
leftSide.style.transform = "translateX(220px)";
//== end ==//

//== create center show dom ==//
//== start ==//
createActiveSlide(centerShow,myint);
//== end ==//

//== create right side dom ==//
//== start ==//
createArrayDom(rightArray, rightSide);
rightSide.style.transition = "none";
rightSide.style.transform = "translateX(-220px)";
//== end ==//

//== end ==//

////////////////////////////////////////////////////////////////////

//== put events that we needs ==//
//== start ==//
next.addEventListener("click", () => {

    //== left side animation ==//
    //== start ==//
    leftSide.style.transition = "0.4s";
    leftSide.style.transform = "translateX(440px)";
    //== end ==//

    //== center show animation ==//
    //== start ==//
    document.querySelector(".center-show").style.transform ="scale(0) rotate(360deg)";
    //== end ==//

    //== right side animation ==//
    //== start ==//
    rightSide.style.transition = "0.4s";
    rightSide.style.transform = "translateX(0)";
    //== end ==//

    //== reoder right array ==//
    //== start ==//
    var myint2 = rightArray.shift();
    rightArray.push(myint2);
    //== end ==//

    //== reoder right array ==//
    //== start ==//
    var myOut2 = leftArray.shift();
    leftArray.push(myOut2);
    //== end ==//

  setTimeout(() => {

    //== return to start point ==//
    //== start ==//
    resetAll(myint2);
    //== end ==//
    
  }, 400);
});

prev.addEventListener("click", () => {

    //== left side animation ==//
    //== start ==//
    leftSide.style.transition = "0.4s";
    leftSide.style.transform = "translateX(0)";
    //== end ==//

    //== center show animation ==//
    //== start ==//
    document.querySelector(".center-show").style.transform ="scale(0) rotate(360deg)";
    //== end ==//

    //== right side animation ==//
    //== start ==//
    rightSide.style.transition = "0.4s";
    rightSide.style.transform = "translateX(-440px)";
    //== end ==//

    //== reoder right array ==//
    //== start ==//
    var myint2 = rightArray.pop();
    rightArray.unshift(myint2);
    //== end ==//

    //== reoder right array ==//
    //== start ==//
    var myOut2 = leftArray.pop();
    leftArray.unshift(myOut2);
    //== end ==//

  setTimeout(() => {

    //== return to start point ==//
    //== start ==//
    resetAll(myOut2);
    //== end ==//
    
  }, 400);
});
//== end ==//

////////////////////////////////////////////////////////////////////