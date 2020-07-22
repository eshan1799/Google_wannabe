const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.json());

const port = 3000;

//create topTen array of objects
topTen = [
{name: "Disney Plus", link:"https://www.disneyplus.com/en-gb"},
{name: "Cameron Boyce", link: "https://en.wikipedia.org/wiki/Cameron_Boyce"},
{name: "Hurricane Dorian", link: "https://en.wikipedia.org/wiki/Hurricane_Dorian"},
{name: "Antonio Brown", link: "https://en.wikipedia.org/wiki/Antonio_Brown"},
{name: "Luke Perry", link: "https://en.wikipedia.org/wiki/Luke_Perry"},
{name: "Avengers Endgame", link: "https://www.imdb.com/title/tt4154796/"},
{name: "Game of Thrones", link: "https://www.imdb.com/title/tt0944947/"},
{name: "iPhone 11", link: "https://www.apple.com/uk/iphone-11/"},
{name: "Jussie Smollett", link: "https://en.wikipedia.org/wiki/Jussie_Smollett"},
{name: "Nipsey Hussle", link: "https://en.wikipedia.org/wiki/Nipsey_Hussle"}
]

//take all name values from an array and save them in an array called Res
//this will be invoked in the /results route
function takeResults(array) {
let Res = [];
for (i = 0; i < array.length; i++){
   let results = array[i].name;
   Res.push(results)
 }
return Res
}

//take a random link value from an array
//this will be invoked in the /random route
function takeOne(array) {
  let topOne = array[Math.floor(Math.random()*10)].link;
  return topOne
}

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

//Top 10 results route
server.get('/results', (req, res) => res.send(JSON.stringify(takeResults(topTen))))
//random result route
server.get('/random', (req, res) => res.send(JSON.stringify(takeOne(topTen))))

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))
