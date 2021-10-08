import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";

function App() {
  const data = require("./data.json");

  let res = data.map(function(item) {
    return <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.id}</td>
      <td>{item.phone}</td>
      <td>{item.age}</td>
    </tr>
  })

  return <table class="table">
    <thead>
      <tr>
        <td>Имя</td>
        <td>ID-номер</td>
        <td>Телефон</td>
        <td>Возраст</td>
      </tr>
    </thead>
    <tbody>
      {res}
    </tbody>
  </table>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);