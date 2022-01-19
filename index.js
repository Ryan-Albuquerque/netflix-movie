const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const port = process.env.PORT || '8080';
const db = require('./db');
const routesConfig = require('./routesConfig');

const app = express();

app.listen(port, async () => {
  await db.connect();
  console.log('API is running in 8080!');
});

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(routesConfig);
