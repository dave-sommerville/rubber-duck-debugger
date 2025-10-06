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
function addClass(element, className) {
  element.classList.add(className);
}
const outputArea = select('.output-area');
const textForm = select('.text-form');
const textInput = select('.text-input');
const faqButton = select('.faq');
const dialog = select('dialog');
const replies = [
    "Oh yeah?",
  "I hear ya.",
  "Gotcha.",
  "Makes sense.",
  "Right, right.",
  "Ah, I see.",
  "Totally.",
  "For sure.",
  "Hmm, interesting.",
  "Yeah, I get that.",
  "Oh wow, really?",
  "That figures.",
  "Yeah, no kidding.",
  "Fair enough.",
  "I know what you mean."
];
function processQuery() {
  const inputText = textInput.value.trim();
  if (inputText === '') return;
  const userP = create('p');
  addClass(userP, 'user-text');
  userP.textContent = inputText;
  const randomP = create('p');
  addClass(randomP, 'duck-text');
  randomP.textContent = getRandomElement(replies);
  outputArea.appendChild(userP);
  outputArea.appendChild(randomP);
  textInput.value = '';
}

listen("submit", textForm, (e) => {
  e.preventDefault();
  processQuery();
});
listen("click", faqButton, ()=> {
  dialog.showModal();
});

dialog.addEventListener('click', (evt) => {
  if (evt.target === dialog) {
    dialog.close();
  }
});