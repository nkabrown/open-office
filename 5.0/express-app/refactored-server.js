const express = require('express');
const app = express();
const port = 9003;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const stringBuilder = str => input => operation => `${str} ${operation} ${input}`;
const objectBuilder = obj => key => value => obj[key] = +value;

const addition = query => {
  let str = '',
      obj = {},
      sum = 0;

  for (const key in query) {
    const val = query[key];
    str = stringBuilder(str)(val)('+');
    objectBuilder(obj)(key)(val);
    sum += +val;
  }

  const json = { input: obj, sumString: str.slice(3), sum: sum };
  return json;
}

const multiplication = query => {
  let str = '',
      obj = {},
      product = 1;

  for (const key in query) {
    const val = query[key];
    str = stringBuilder(str)(val)('*');
    objectBuilder(obj)(key)(val);
    product = product * +val;
  }

  const json = { input: obj, productString: str.slice(3), product: product };
  return json;
}

const math = {
  'add': addition,
  'multiply': multiplication,
};

app.get('/math/:operation', (req, res) => {
  const opr = req.params.operation;
  const json = math[opr](req.query);
  res.send(json);
});

app.listen(port, () => console.log(`server listening on port ${port}`));
