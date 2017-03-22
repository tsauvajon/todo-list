import React, { PropTypes, Component } from 'react';

let nextTodoId = 0;

class App extends Component {
  render() {
    // console.log(this.props.store, this.props.todos);
    return (
      <div>
        <button
          onClick={() => {
            this.props.store.dispatch({
              type: 'ADD_TODO',
              text: 'test',
              id: nextTodoId += 1,
            });
          }
        }
        >
          Add Todo
        </button>
        <ul>
          {
            this.props.store.getState().todos.map(todo =>
              <li key={todo.id}>
                {todo.text}
              </li>,
          )}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
