const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"test": ["Testing info sharing"]})
})

app.listen(5000, () => console.log("server started on port 5000"))