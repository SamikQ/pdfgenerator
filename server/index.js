const express = require('express');
const bodyParser = require('body-parser');
var pdfmake = require('pdfmake/build/pdfmake');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

const pdfTemplate = require('./documents');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST - fetching data and generate PDF

app.post('/create-pdf', (req, res) => {
    pdf.createPdf('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    }).write('basics.pdf').then(() => {
        console.log(new Date() - now);
    }, err => {
        console.error(err);
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));