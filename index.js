require('dotenv').config()

let express = require('express');
let app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');
const db = require('./config/database');

db.authenticate()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log('error ----->>> ', err));

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => console.log('server started on port: ' + port));
console.log("Hello developer");

