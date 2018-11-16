# Office Hours 15 November 2018

If you need to change the text content on a button click perhaps, then 
there's no need to remove and replace the node, its sufficient and more
efficient to just change the text content of the node.

```
var body = document.getElementsByTagName('body')[0];

var button = document.createElement('button');

button.textContent = 'click';

body.appendChild(button);

var pTag = document.createElement('p');

pTag.textContent = 'Elkhound';

body.appendChild(pTag);

button.addEventListener('click', () => {
  var tag = document.getElementsByTagName('p');
  tag.textContent = 'Poodle';
});
```

What is a hash map? (follow-up)

```
// take a string "aaabbcc" and return "a3b2c2"
const stringCompression = (input) => {
  const hash = input.split('').reduce((acc, elem) => {
    acc[`${elem}`] = acc[`${elem}`] || 0;
    acc[`${elem}`] += 1;
    return acc;
  }, {});
  let output = '';
  for (const key in hash) {
    output = `${output}${key}${hash[key]}`;
  }
  
  return output;
}
```
