const log = require('choo-log');
const choo = require('choo');
const html = require('choo/html');
const app = choo();
app.use(log());

app.model({
  state: { list: [] },
  reducers: {
    add: (data, state) => {
      const newList = state.list.slice();
      newList.push(data);
      return { list: newList };
    },
    alphabetize: (data, state) => {
      const newList = state.list.slice();
      newList.sort();
      return { list: newList };
    }
  }
});

const view = (state, prev, send) => {
  return html`<div class="list">
    <h1>Grocer’s Bag</h1>
    <input type="text" autocomplete="off" name="groceries">
    <button onclick=${addItem}>Add</button>
    <ul>${state.list.map(item => html`<li>${item}</li>`)}</ul>
    <select onchange=${sort}>
      <option></option>
      <option>Alphabetical</option>
    </select>
  </div>`

  function addItem(e) {
    const input = document.querySelector('input');
    send('add', input.value);
    input.value = '';
  }

  function sort(e) {
    const selected = document.querySelector('option:checked').textContent;
    if (selected === 'Alphabetical') sortAlphabet();

    function sortAlphabet() {
      send('alphabetize', state.list);
    }
  }
}

app.router((route) => [
  route('/', view)
]);

const tree = app.start();
document.body.appendChild(tree);
