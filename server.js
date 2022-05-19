const express = require("express");

const app = express();

app.use(express.static("client"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App Running on port: ${port}`));
