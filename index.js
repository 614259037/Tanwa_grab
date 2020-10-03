const express = require('express');
const app = express();
const restaurantRouter = require('./routes/restaurant');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api', router);

app.listen(
    PORT,
    () => {
        console.log(`Listening to port ${PORT}`);
    }
);
