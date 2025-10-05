'use strict';
function select(selector, scope = document) {
  return scope.querySelector(selector);
}
function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function create(element, scope = document) {
  return scope.createElement(element);
}
const outputArea = select('.output-area');
const textForm = select('.text-form');
const textInput = select('.text-input');
const replies = ['Oh yeah', 'I get it']
function processQuery() {
  const inputText = textInput.value.trim();
  if (inputText === '') return;
  const userP = create('p');
  userP.textContent = inputText;
  const randomP = create('p');
  randomP.textContent = getRandomElement(replies);
  outputArea.appendChild(userP);
  outputArea.appendChild(randomP);
  textInput.value = '';
}

listen("submit", textForm, (e) => {
  e.preventDefault();
  processQuery();
});
