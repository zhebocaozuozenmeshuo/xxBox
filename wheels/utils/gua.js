const log = function() {
  console.log.apply(console, arguments)
}

const e = function(selector) {
  return document.querySelector(selector)
}

const bindEvent = function(element, eventName, callback) {
  element.addEventListener(eventName, callback)
}

const removeClassAll = function(className) {
  let selector = `.${className}`
  let elements = document.querySelectorAll(selector)
  for (let i = 0; i < elements.length; i++) {
    let e = elements[i]
    e.classList.remove(className)
  }
}
