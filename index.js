// Write your code here!
let element = document.getElementById('main');
element.parentNode.removeChild(element);

let newHeader = document.createElement('h1');
newHeader.id = "victory"

newHeader.textContent = ("Darren is the champion");