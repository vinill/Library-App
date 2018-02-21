var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './source/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'}]
    });
});

app.listen(port, function (err) {
    console.log('running server on port - ' + port);
});