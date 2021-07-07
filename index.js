const x = document.getElementById(`main`);
x.remove();

// Keep it globally scoped
let newHeader = document.createElement("h1");   // This creates an <h1></h1> tag on the page
function victory(header){
    newHeader.id = 'victory' // Creates a new ID
    newHeader.textContent = 'Dell is the champion'

    return newHeader
}
victory(newHeader) // calls the victory function with our global variable