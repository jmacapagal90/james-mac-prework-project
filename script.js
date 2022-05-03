//create divA
const divA = document.createElement('div') 
divA.id = 'a'

//append divA to body
document.querySelector("body").appendChild(divA); 

//create h1 tag
const h1 = document.createElement("h1");
h1.id = 'h1'
h1.textContent = "Cece and Charlie: A Song of Cat Slaps and Kisses";

//append h1 to divA
divA.append(h1) 

//create image div
const divImg = document.createElement('div')
divImg.id = 'hero-image'

//create img element
var img = document.createElement('img');
img.src = 'https://i.ibb.co/YTXJsKQ/Cece-and-Charlie.png';
img.alt = "Cece and Charlie"
img.id = "cece-and-charlie"

//append image to div
var src = document.getElementById('hero-image');
divImg.appendChild(img);

//append hero image div to body
document.querySelector("body").appendChild(divImg);

//create divB
const divB = document.createElement('div')
divB.id = 'b'
//append divB to body
document.querySelector("body").appendChild(divB); 

//create h2 tag
const h2 = document.createElement("h2");
h2.id = 'h2'
h2.textContent = "Cece and Charlie are my two cats. They have a complicated relationship.";

divB.append(h2) //append h2 to divB

