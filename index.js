// Write your code here!
document.getElementById("main").remove();
let newHeader = document.createElement("h1");
newHeader.setAttribute("id", 'victory')
document.body.appendChild(newHeader);
newHeader.innerHTML = "Rodrigo is the champion";