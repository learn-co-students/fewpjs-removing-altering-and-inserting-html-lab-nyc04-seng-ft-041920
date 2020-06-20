// Remove Main
let main = document.querySelector('main');
main.remove();

// newHeader var that points to node 'h1#victory'
let newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.innerHTML = 'YOUR-NAME is the champion!';
let body = document.querySelector('body');


body.appendChild(newHeader)