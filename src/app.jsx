import React from 'react';

import ToDo from './components/todo/todo.jsx';
import Main from './components/Main/Main.jsx';
import Setting from './Context/Settings/Settings.jsx'

export default class App extends React.Component {
  render() {
    return (
      <Setting>
        <Main />
      </Setting>
    );
  }
}
