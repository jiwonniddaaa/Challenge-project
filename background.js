const images = [
    "0.jpg",
    "1.jpg",    
    "2.jpg",
    "3.jpg"
]
const locate = [
    "Mercury",
    "B612",
    "Spica",
    "Achernar",
]
const random = Math.floor(Math.random() * images.length);
const chosenImage = images[random];
const locateElement = document.body.querySelector("div #location");

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
locateElement.innerText = locate[random];
