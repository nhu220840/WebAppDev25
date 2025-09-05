const express = require("express");
const path = require("path");

const app = express();
const PORT = 8888;


// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log("Server starting at http://localhost:" + PORT);
})