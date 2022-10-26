const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const facalties = require('./facalties.json')
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(facalties);
});
app.get('/facalties', (req, res) => {
    res.send(facalties);
});

app.get('/facalties/:id', (req, res) => {
    const id = req.params.id;
    const facaltyData = facalties.find(facalty => facalty.id == id);
    res.send(facaltyData);
})

app.listen(port, () => {
    console.log("Listening from PORT: ", port);
})