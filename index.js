// Write your code here!
const main = document.getElementById(`main`);
main.remove();


let newHeader = document.createElement("h1");
function victory(header, name){
    newHeader.id = 'victory'
    newHeader.textContent = `${name} is the champion`

    return newHeader
    
}
victory(newHeader, 'Leonora')