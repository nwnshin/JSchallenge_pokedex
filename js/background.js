const bgImageSrc = ["wp8813120.webp"];
const images = ["1.jpg", "2.png", "3.png", "4.png", "5.jpg", "6.jpg"];
const topLeft = document.querySelector("#topLeft");

const chosenImage = images[Math.floor(Math.random() * images.length)];
//console.log(chosenImage);

//JS로 html body에 내용 추가하기: img 태그 추가하는 것
const imgDiv = document.createElement("div");
imgDiv.classList.add("img-16rem");
const regionImage = document.createElement("img"); // 여기까지는 html 어디에도 없음

regionImage.src = `img/${chosenImage}`;
imgDiv.appendChild(regionImage);
topLeft.appendChild(imgDiv); // 여기에서 html body에 추가
//console.log(bgImage)
