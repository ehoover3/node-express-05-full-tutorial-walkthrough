// https://www.youtube.com/watch?v=Oe421EPjeBE
// stopped at  hour and  minutes

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is our history");
  }
  res.end(`<h1>Whoops!</h1>
  <p>We can't find the page you're looking for</p>
  <a href ='/'>return to home page</a>
  `);
});

server.listen(5003);

// notes:
// package, modules, dependencies are synonyms
