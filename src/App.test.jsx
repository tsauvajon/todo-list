import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todoApp from './todoApp';
import App from './App';

const store = createStore(todoApp);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
});
