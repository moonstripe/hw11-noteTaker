const express = require('express');
const routes = require('./routes');

const app = express();

// JSON encoder
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(routes);

const PORT = 3030;

app.listen(PORT, () => {
    console.log(`Server started listening on PORT http://localhost:${PORT}`);
});
