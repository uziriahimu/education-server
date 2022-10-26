const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
const link = require('./data/link.json');

app.get('/', (req, res) => {
    res.send('API Running')
})
app.get('/link', (req, res) => {
    res.send(link)
});
app.get('/link/:id', (req, res) => {
    const id = req.params.id;
    const links = news.filter(n => n.link_id === id);
    res.send(links);

})

app.listen(port, () => {
    console.log('education server running ', { port })
})
