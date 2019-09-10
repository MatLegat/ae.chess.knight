const
  express = require('express'),
  sassMiddleware = require('node-sass-middleware')
  path = require('path')

const app = express()

app.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'css'),
    debug: true,
    prefix:  '/css',
  })
)
app.use('/sass', express.static(path.join(__dirname, 'sass')));

app.use(express.static('front/public'))


const port = 3000
app.listen(port, () => console.log(`Listening on port ${port}`))