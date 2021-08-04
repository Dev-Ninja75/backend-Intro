// Exo 1 création serveur 

// Import 

const express = require('express');
const port = 8000;

const app = express();

// Tableau auteurs (array)

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

// Routes

app.get('/authors', (req, res,) => {
    console.log('req', req)
    console.log('res', res)
    res.send('Authors API')
});

// Exo 2 création routes : 

app.get('/authors/:numberId', (req, res,) => {
    let number = req.params.numberId
    let books = req.params.books 
    console.log('req', req)
    console.log('res', res)
    res.send(`${authors[number].name} 
              ${authors[number].nationality} 
              ${authors[number].books}`);

});


// Exo 3 

// Ouverture server (toujours à la fin du code!)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });


