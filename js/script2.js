function $All(element) {
  return document.querySelectorAll(element);
}

function $Select(element) {
  return document.querySelector(element);
}

function $Creator(element) {
  return document.createElement(element);
}

export { $All, $Select, $Creator };
