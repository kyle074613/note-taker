const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Designates routes from api and html route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Starts the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});