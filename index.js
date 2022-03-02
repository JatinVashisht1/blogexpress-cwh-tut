const express = require('express')
const path = require('path')
// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname,'routes/blog.js')))
// app.use('/blogs', require(path.join(__dirname,'routes/blog.js')))

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})
