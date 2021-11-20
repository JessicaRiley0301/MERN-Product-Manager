const express = require("express");
const app = express();
const cors = require('cors');

//1 import mongoose = require mongoose
//2 connect to mongodb by requiring the file here

// require("./server/config/mongoose.config");
require("./config/mongoose.config");
//3. create mongoose schema
//4. use momgoose model to make crud functions ->
//5. create routes to execute the functions to the db

// const corsoptions = {
//     origin: "http://localhost:3000"
// }

//middleware
// app.use(cors())
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

//6.routes after middleware
// const AllMyUserRoutes = require("./server/routes/useår.routes");
// AllMyUserRoutes(app);
const routesObj = require("./routes/product.routes");
routesObj(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));