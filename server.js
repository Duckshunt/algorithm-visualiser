// load the required modules to run the program
const express = require("express")
const app = express()
const bodyParser = require("body-parser");

// connect to the mongodb database
app.use(bodyParser.urlencoded({ extended: false }))




app.use(express.static("files"))    // telling the website to pull its files from the 'files' folder

app.use(bodyParser.json())



// define the first route the user will see upon loading the project
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/test_page.html")

})

// start the server listening for requests
app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});