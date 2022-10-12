const express = require('express');
const app = express();
const port = 3000;
// const fetch = require('node-fetch');

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

//********************** Learning phase 2 *************************************/
// async is used so we can wait for the process to get completed
app.get('/animalname', async(request, response) => {
    const fetchApi = await fetch(
		'https://zoo-animals-api.p.rapidapi.com/animals/rand/10',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': api-Key,
                'X-RapidAPI-Host': 'zoo-animals-api.p.rapidapi.com'
            },
        }
	);
    // convert the promise into json format
	const animalNameResponse = await fetchApi.json();
	console.log(animalNameResponse);
	response.json(animalNameResponse);
});