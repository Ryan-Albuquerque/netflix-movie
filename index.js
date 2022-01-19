const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const db = require('./db');
const routesConfig = require('./routesConfig');

const app = express();

app.listen('8080', async () => {
  await db.connect();
  console.log('API is running in 8080!');
});

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(routesConfig);
