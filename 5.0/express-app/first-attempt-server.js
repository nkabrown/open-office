const express = require('express');
const app = express();
const port = 9003;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/math/:operation', (req, res) => {
  let json;
  console.log(req.params);
  if (req.params.operation == 'add') {
    console.log(req.query);
    // { input: { a: 12, b: 20 }, sumString: "12 + 20", sum: 32 }
    const input = {};
    let sumString = "";
    let sum = 0;

    for (const key in req.query) {
      // construct values needed for our return object
      const val = req.query[key];
      sumString += ` + ${val}`;
      input[key] = +val;
      sum += +val;
    }

    json = { input: input, sumString: sumString.slice(3), sum: sum };
  } else if (req.params.operation == 'multiply') {

    const input = {};
    let productString = "";
    let product = 1;

    for (const key in req.query) {
      const val = req.query[key];
      productString += ` * ${val}`;
      input[key] = +val;
      console.log(product);
      product = +product * +val;
    }

    json = { input: input, productString: productString.slice(3), product: product };
  }

  res.send(json);
});

app.listen(port, () =>  console.log(`server listening on port ${port}`));
