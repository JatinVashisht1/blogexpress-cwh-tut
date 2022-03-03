const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

const path = require('path');

const port = 3000;

// app.engine('handlebars', exphbs({}));

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname,'routes/blog.js')))
// app.use('/blogs', require(path.join(__dirname,'routes/blog.js')))

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})
