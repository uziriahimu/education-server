const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/course.json');
const categories = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('API Running')
})

app.get('/courses', (req, res) => {
    res.send(courses);
});
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n => n.id === id);
    res.send(selectedCourses);
});

app.get('/categories', (req, res) => {
    res.send(categories)
});
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_data = courses.filter(n => n.category_id === id);
    res.send(category_data);

})

app.listen(port, () => {
    console.log('education server running ', { port })
})
