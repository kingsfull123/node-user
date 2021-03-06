const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

app.listen(3000, () => {
    console.log('Sever is running at port ' + port);
})