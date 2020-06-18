// Write your code here!

document.getElementById("main").remove(); // Removes main#main
let newHeader = document.createElement('h1');

function victory(header){
    newHeader.id = 'victory'
    newHeader.textContent = 'YOUR-NAME is the champion'
}

victory(newHeader)


// main