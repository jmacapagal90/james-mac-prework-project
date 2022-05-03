const divA = document.createElement('div') //create divA
divA.id = 'a'

document.querySelector("body").appendChild(divA); //append divA to body

const h1 = document.createElement("h1");
h1.id = 'h1'
h1.textContent = "Cece and Charlie: A Song of Cat Slaps and Kisses";

divA.append(h1) //append h1 to divA



const divB = document.createElement('div')
divB.id = 'b'

document.querySelector("body").appendChild(divB); //append divB to body

const h2 = document.createElement("h2");
h2.id = 'h2'
h2.textContent = "Cece and Charlie are my two cats. They have a complicated relationship.";

divB.append(h2) //append h2 to divB

