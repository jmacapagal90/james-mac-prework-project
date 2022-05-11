//create div
const divA = document.createElement('div') ;
divA.id = 'a';

//append divA to body
document.querySelector("body").appendChild(divA); 

//create h1 tag
const h1 = document.createElement("h1");
h1.id = 'h1';
h1.textContent = "Cece and Charlie: A Song of Cat Slaps and Kisses";

//append h1 to divA
divA.append(h1);

//create image div
const divImg = document.createElement('div');
divImg.id = 'image';

//create img element
const img = document.createElement('img');
img.src = 'https://i.ibb.co/YTXJsKQ/Cece-and-Charlie.png';
img.alt = "Cece and Charlie";
img.id = "cece-and-charlie";

//create figure element
const figure = document.createElement('figure');

//add caption
const figcaption = document.createElement('figcaption');
figcaption.textContent = "Cece (left) and Charlie (right)";

//append img to figure
figure.appendChild(img);

//append figcaption to figure
figure.appendChild(figcaption)

//append figure to div 
divImg.append(figure);

//append div to body
document.querySelector("body").appendChild(divImg);

//create divB
const divB = document.createElement('div');
divB.id = 'b'
//append divB to body
document.querySelector("body").appendChild(divB); 

//create h2 tag
const h2 = document.createElement("h2");
h2.id = 'h2';
h2.textContent = "Cece and Charlie are my two cats. They have a complicated relationship.";

 //append h2 to divB
divB.append(h2);

//create p tag
const p1 = document.createElement("p")
p1.id = "p1";
p1.className = "body-content";
p1.textContent = 

"Cece is our older cat. She is a standard issue cat (aka \"tabby\") that we rescued from PAWS.  She's about 11 years old (...we think, who's keeping score?). Charlie is also a standard issue cat who we think is 4 years old, whom we adopted from a friend who's family needed to rehome him. He's a former street-cat relearning how to be a cuddle bug. Cece and Charlie have very different personalities. Cece is a lazy princess who loves cuddles, pets, and getting fed early. Charlie is an energetic race car who loves stealing food from our plates (a regular occurence), chasing his mice, and running really fast at 5am."

//append p to divB
divB.append(p1);

// add event when clicking on image
const input = document.getElementById('cece-and-charlie');

function clickAlert() {
  alert('Mrrreow?');
}

input.addEventListener('click', clickAlert);

//create divC
const divC = document.createElement('div');
divC.id = 'c'
//append divB to body
document.querySelector("body").appendChild(divC); 

//create h3 tag
const h3 = document.createElement("h3");
h3.id = 'h3';

//create p tag for h3
const p2 = document.createElement("p")
p2.id = "p2";
p2.className = "body-content";
p2.textContent = 

"We adopted Cece from PAWS Chicago, and we adopted Charlie from a friend with assistance from the Anti-Cruelty Society of Chicago.  They are two great organizations which rescue animals, provide care, and assist with adoption- in addition to being no-kill shelters. Please visit the links below to learn more:"

//append p2 to divC
divC.append(p2);


//create a tag for paws chicago
const a1 = document.createElement("a");
a1.id = `paws-link`;
a1.target = "_blank";
a1.href = `https://www.pawschicago.org/`;
a1.textContent = "PAWS Chicago";

//create a tag for anti-cruelty society
const a2 = document.createElement("a");
a2.id = `anti-cruelty`;
a2.target = "_blank";
a2.href = `https://anticruelty.org/`;
a2.textContent = `Anti-Cruelty Society`;

//create ul tag
const ul = document.createElement("ul");
ul.id = `links`;

// create li tag and append a1 and a2
const li1 = document.createElement("li");
li1.id = `paws`;
li1.append(a1);
ul.append(li1);

const li2 = document.createElement("li");
li2.id = `acs`;
li2.append(a2);
ul.append(li2);

// append ul to h3, h3 to divC, and divC to body

h3.append(ul);
divC.append(h3);
body.append(divC);