const clocks = document.querySelectorAll("h2#clock"); //h2이면서 id clock인 것

//recreate new Date() object every second
//String() : .getHours() 의 결과값은 number -> .padStart를 적용하려면 string으로 변환필요
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  for (const clock of clocks) {
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
}

// interval은 1초 후 function을 시작하므로 웹사이트가 로딩되자마자는 아무것도 작동안함
// website load되자마자 getClock() 실행하고 또 매초마다 다시 실행
getClock();
setInterval(getClock, 1000); // 1000 ms = 1 seconds
