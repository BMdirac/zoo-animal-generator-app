console.log('script.js loaded');

//********************** Learning phase 2 *************************************/
getAnimalName();

async function getAnimalName() {
    const response = await fetch('/animalname');
    const data = await response.json();
    console.log(data);
}

