const secret = "your_secret_here";
const repo = "~/your_repo_path_here/";

var express = require('express')
const app = express()
const port = 4567

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

var author = null //string
var filesAdded = [] //[string]
var filesModified = [] //[string]

// Access the parse results as request.body
app.post('/', function(req, res){
    console.log(req.body)

    author = req.body.head_commit.author.name
    filesAdded = req.body.head_commit.added
    filesModified = req.body.head_commit.modified

    console.log("Push!")

    res.end()
});

app.get('/', (req, res) => {
  var result = ""
  result += "Author: " + author + "<br/>"
  // result += "Files Added:" + filesAdded.join(", ") + "<br/>"
  result += "Files Modified:" + filesModified.join(", ") + "<br/>"

  res.send(result)
})

app.listen(port, () => {

})