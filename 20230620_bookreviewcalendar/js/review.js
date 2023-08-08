// //백팁 문법
// let name = "최유정";
// console.log(`안녕, ${name}`);

const bookId= new URL(window.location.href).searchParams.get('book'); //window.location.href //window 브라우저 창에 있는 주소, searchParams: 속성. 주소에서 물음표를 뗀 나머지. .get() : 파라미터의 값을 구해와라  
// console.log(typeof window.location.href); //string 
console.log(`bookId: ${bookId}, type: ${typeof bookId}`);

//URL에 있는 book parameter 값(string):bookId
//->string을 number로 변환:bookIdNumber 
// let bookIdNumber;
//let bookIdNumber = Number(bookId);
let bookIdNumber = parseInt(bookId); //string-> number
// let bookIdNumber = bookId * 1;  // 곱해야하니까bookId가 숫자로 바뀜. string -> number
console.log(`bookIdNumber: ${bookIdNumber}, type: ${typeof bookIdNumber}`); // 3, number



//->books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자 :bookData
// bookIdNumber : URL에서 가져온 id 값 === books 하나씩 꺼낸 book의 id 값
let bookData;
for (let book of books){
    if(bookIdNumber === book.id){
        bookData = book;    //id가 같으면, 그놈을 꺼내서 bookData에 넣자  
        break;         
    } 
}
// console.log(bookData);
//-> title , author , publisher, bookImage 알아내자
let title = bookData.title; //bookData["title"] 도 가능함 
let author = bookData.author; 
let publisher = bookData.publisher; 
let bookImage = bookData.img; 
console.log(title, author, publisher, bookImage);

//-> HTML에 넣자
//HTML요소 ->js 요소 
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

const bookImgDiv = document.getElementsByClassName("book-image")[0];
bookImgDiv.innerHTML =`<img src='${bookImage}'>`; //태그는 띄어쓰기를 속성의 구분자로 보기 때문에 띄워쓰면 다른 속성으로 잘못 인식하게 됨. 
// bookImgDiv.src = bookImage;// bookImgDiv 가 img속성이 아니기 때문에 적용되지 않음. 