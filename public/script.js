console.log('script.js loaded');

//********************** Learning phase 2 *************************************/
document.querySelector('#btnLoad').addEventListener('click', () => {
    getAnimalName();
    getAnimalImage();
});

// to request animal name from index.js (server side) for display on the browser
async function getAnimalName() {
    const response = await fetch('/animalname');
    const data = await response.json();
    let animalName = data[0].join('');
    console.log(animalName);
}

// to request animal image from index.js (server side) for display on the browser
async function getAnimalImage() {
    const response = await fetch('/animalimage');
    const data = await response.json();
    let animalImage = data.value[Math.floor(Math.random() * data.value.length)];
    let animalImageUrl = animalImage.thumbnailUrl;
    let animalAlt = animalImage.name; 
    console.log(animalImage, animalAlt);

    // Creating element in javascript (for the image)
    if(document.querySelector('#animalImage') !== null) {
        document.querySelector('#animalImage').remove(); 
    }

    let img = document.createElement('img');
    img.src = animalImageUrl;
    img.alt = animalAlt;  
    document.querySelector('body').appendChild(img);
}

