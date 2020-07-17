var path = require('path')

const express = require('express')
const app = express();

//Add body Parser to APP
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Add cors to app
const cors = require('cors')
app.use(cors());

// Require the Aylien npm package
var aylien = require("aylien_textapi");

// Include dotenv package to access env variables
const dotenv = require('dotenv');
dotenv.config();

// AylienApi Credentials
// You could call it aylienapi, or anything else
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('App listening on port 8080!')
})



// Route to handle Classification request
app.post('/Classification', function (req, res) {
    console.log(req.body)
    console.log('Waiting for response')
    textapi.classify(req.body, function (error, response) {
        if (error === null) {
            res.send({ data: response['categories'] });
            response['categories'].forEach(function (c) {
                console.log(c);

            });
        } else { res.send({ data: [{ 'Error': 'Sorry! Some error Occured ! Please Try Later' }] }) }
    });
})

// Route to handle Classification by taxonomy request
app.post('/Classification_Taxonomy', function (req, res) {
    console.log(req.body)
    console.log('Waiting for response')

    textapi.classifyByTaxonomy(req.body, function (error, response) {
        if (error === null) {
            for (let index = 0; index < response['categories'].length; index++) {
                response['categories'][index].links = undefined;
                response['categories'][index].id = undefined;
            }
            res.send({ data: response['categories'] });
        } else { res.send({ data: [{ 'Error': 'Sorry! Some error Occured ! Please Try Later' }] }) }
    });
})

// Route to handle Sentiment Analysis request
app.post('/sentiment_Analysis', function (req, res) {
    console.log(req.body)
    console.log('Waiting for response')

    textapi.sentiment(req.body, function (error, response) {
        if (error === null) {

            console.log(response);
            res.send({ data: [response] });
        } else { res.send({ data: [{ 'Error': 'Sorry! Some error Occured ! Please Try Later' }] }) }
    });
})

// Route to handle Summarization request
app.post('/Summarization', function (req, res) {

    req.body.sentences_number = parseInt(req.body.sentences_number, 10);

    textapi.summarize(req.body, function (error, response) {
        if (error === null) {
            response.sentences.forEach(function (s) {
                console.log(s);
            });
            res.send({ data: [{ 'Summary': response.sentences.toString() }] })
        } else { res.send({ data: [{ 'Error': 'Sorry! Some error Occured ! Please Try Later' }] }) }
    });
})
