// 1. type to do 2. save and show list of to dos

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //const 상태로는 applicaiton이 start될때, todos array는 항상 empty할 것임

// save todos into localstorage
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 버튼을 클릭하면 버튼의 parent인 해당 todo li를 삭제함
// console.dir를 보면 클릭하면 mouse 이벤트가 클릭된 html element위치를 알려줌
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // toDo.id = number, li.id = string -> 이대로는 삭제 안됨. 같은 type으로 해줘야
  saveTodos();
}

// grab input(todo) & append li in html ul to show on browser
// 입력값 newTodo는 type string
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); // li has a child called span
  li.appendChild(button);
  todoList.appendChild(li);
}

// todo를 type하고 submit함
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; // at this point we are copying value to new variable
  todoInput.value = ""; // doesn't clear out variable 'newTodo'
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // newTodo의 value를 todos라는 array에 저장
  paintTodo(newTodoObj); // 함수내에서 정의한 newTodo를 argument로 함수 paintTodo를 호출함
  saveTodos(); //get the value of input
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo); //for each item in parsedtodos, run argument function
}
