// 1. The SQL verb to get information out of a database is SELECT. E.g. SELECT * FROM transactions
//
// 2. UPDATE table SET column_1 = apples;
//
// 3. SELECT * FROM world
// WHERE country = countryx
// UPDATE world SET language = English;
//
// 4.INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
//
// 5.INSERT INTO table_name (continent, population , area, gdp, Language)
// VALUES (America, 1, 1000000, 9999999999, tremendous);
// continent = America
// population = 1
// area = 1000000
// gdp = 9999999999
// Language = tremendous
//
// 6.Having
//
// 7.SELECT country FROM world
// WHERE population < 10000000;
//
// 8.

const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('<h1>hello world</h1>');
});

app.listen(3000, () =>{
  console.log("COMonnn");
});
