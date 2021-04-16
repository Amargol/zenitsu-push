const secret = "your_secret_here";
const repo = "~/your_repo_path_here/";

var express = require('express')
const app = express()
const port = 4567

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(req, res){
    console.log(req.body)

    console.log("making a change")

    res.end()
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {

})