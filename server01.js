const {readFile} = require(`fs`)
const {createServer} = require(`http`)
const server = createServer()

server.on(`request`, ({url, method, headers}, res) => {

  request.on('error', function(err) {
    // This prints the error message and stack trace to `stderr`.
    console.error(err.stack);
  });

  // respond with html file
  readFile(`index.html`, (err, buff) => {
    res.end(buff)
  })
})

server.listen(8080)
