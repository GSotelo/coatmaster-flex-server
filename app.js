// Native modules
const path = require("path");

// 3rd party modules
const express = require("express");
const compression = require("compression");

// Own modules
const expressRouter = require("./routes/coatmaster");
const reactRouter = require("./routes/react");
const errorCtrl = require("./controllers/error/error");

// Create express application
const app = express();

// Compress all responses
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, "public", "build")));

// Configuration
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/local-server", expressRouter);
app.use(reactRouter);

// Error handler
app.use(errorCtrl);

// Server listening to connection
app.listen(port, () => console.log(`Server running listening on port ${port}...`));