import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import todoApp from './todoApp';
import './index.css';

const store = createStore(todoApp);

// todos={store.getState().todos}
// visibilityFilter={store.getState().visibilityFilter

const render = () => {
  ReactDOM.render(
    <App
      store={store}
    />,
  document.getElementById('root'),
  );
};

store.subscribe(render);
render();
