const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함하는 정의는 대문자로 표시
const HIDDEN = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 함수
// 1. stop the browser from refresh 2. hide form 3. define input 4. save input in local strage 5. play function paintGreetings
function onLoginSubmit(info) {
  info.preventDefault(); //stop browser default event
  loginForm.classList.add(HIDDEN); // hide the form again
  localStorage.setItem(USERNAME_KEY, loginInput.value); // save the username on local storage
  paintGreetings(); // call function paint greetings with argument var:username
}

// 1. get username from localstrage 2. innertext change 3. class hidden 없애서 나타내기
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Welcome, ${username}`; // ' " 아님, `임
  greeting.classList.remove(HIDDEN);
}

// if else 문: 실제
// localStorage : API that allows you to save things in browser
// 브라우저 콘솔에서 localStrage.getItem, .setItem, .removeItem(key값, value값)

// local strage에 user정보가 있음
// -> form 안보이고 h1만 보이게 함, user정보가 없음(결과값 null) ->
// form 보이게 함

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
