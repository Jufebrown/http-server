const {createReadStream, readFile} = require(`fs`)
const {createServer} = require(`http`)
const server = createServer()

server.on(`request`, ({url, method, headers}, res) => {

  request.on('error', function(err) {
    // This prints the error message and stack trace to `stderr`.
    console.error(err.stack);
  });

  const readStream = createReadStream('index.html')

  readStream
  .on('error', (err) => {
    res.end(error)
  })

  .on('open', () => {
    readStream.pipe(res)
  })
})

server.listen(8080)
