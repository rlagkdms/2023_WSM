
const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

console.log(navToggleI);
console.log(navListUl);
// .nav-toggle 클릭하면
nav_toggle.onclick = () => {
    // .nav-toggle i 햄버거메뉴 <-> X
    // class 에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
    // .nav-list에 .show-menu toggle 
    navListUl.classList.toggle("show-menu");

}



//HTML -> js 
//1. id 
// const navToggleDiv = document.getElementById("nav-toggle"); // 문서에서 getElementById를 사용해서 nav-toggle이라는 애를 가져오기( 요소 무조건 하나 ) 
// nav-toggle 로만 쓸 수 있음 . 

//2. class
// const navToggleDiv = document.getElementsByClassName("nav-toggle")[0]; // 요소가 여러개일 수 있음. -> 하나여도 리스트로 저장한다. 하나만 있어도 리스트를 까야(index값으로 불러야) 보여짐. (선택 가능)

//3. tag
// const navToggleDiv = document.getElementsByTagName("div")[0];  

//4. CSS selector : 절반정도 느림 
// const navToggleDiv = document.querySelector("#nav-toggle");
// const navToggleDiv = document.querySelectorAll(".nav-toggle")[0];
// const navToggleDiv = document.querySelectorAll("div")[0];
//5. XPath
// : css 를 자동으로 가져올 수 있게 하는 것 

// nav_toggle.onclick = () => alert("안녕");
// nav_toggle.onclick - alert("안녕");

// nav_toggle.onclick = alert("안녕");

//"안녕"이라는 창을 띄우는 함수를 실행해라 
// nav_toggle.onclick = function(){
//     alert("안녕")
// }; //nav toggle이 눌렸을 때가 아니라 지금 이 라인에서 실행됨. 토글이 눌렸을 때 이름만 던져주면 된다.(기억만 하고 있음 됨.)

// nav_toggle.onclick = () => {
//     alert("안녕")
// };
 
// nav_toggle.onclick = () => alert("안녕");
 

