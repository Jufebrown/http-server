const {readFile} = require(`fs`)
const {createServer} = require(`http`)
const server = createServer()

server.on(`request`, ({url, method, headers}, res) => {
  // respond with html file
  readFile(`index.html`, (err, buff) => {
    res.end(buff)
  })
})

server.listen(8080)
