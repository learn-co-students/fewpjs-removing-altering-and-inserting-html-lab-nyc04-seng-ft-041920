let element = document.querySelector("main#main")
element.remove("main#main")


let newHeader = document.createElement('h1')
newHeader.id = "victory"
//   has a 'newHeader' variable that points to node 'h1#victory':


newHeader.innerHTML = "YOUR-NAME is the champion"// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside:




// //
// let element = document.createElement('div') //create DOM Elements Programmatically

// //
// document.body.appendChild(element)// add elements in the DOM. Append element to body.


// //
// let ul = document.createElement('ul') 
 
// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }

// element.appendChild(ul) // continue to update element because we have a reference to it. 
// //



// //
// let element = document.querySelector("p#greeting"); //using query selector. (<p> = paragraph :: #"greeting" = id) 
// element.innerHTML = 'Hello, DOM!' // add elements to the DOM via innerHTML. This is quicker than the above. 




// //Danger of using innerHTML
// let header = document.getElementById("div#header");
// header.innerHTML = "<h1>Poodles!</h1>
//     <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
//     <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";


// <div id="header">
//   <h1>Poodles!</h1>
//   <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
//   <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>
// </div>


// content = someTextArea.value
// node.innerHTML = `Hi, ${content}!`//

// <a href='#' onclick='doSomethingNastyLikeStealCookies'>Click here to claim your prize!</a>
// //innerHTML can accidentally lead to problems in sites. so be careful. 





// element.style.backgroundColor = '#27647B'; //change properties on DOM Nodes; to change their appearance

// element.style.textAlign = 'center';
// ul.style.textAlign = 'left'


// //upfstr its className property with string. 
// element.className = "dog"
// element.className = "pet-listing dog"



// //add classes programmatically, classList property.
// element.classList.remove("this-is-fine");
// element.classList.add("the-room-is-on-fire");//add


// ul.removeChild(ul.querySelector('li:nth-child(2)'))//remove child using query selector.


// ul.remove()//remove the whole unordered list