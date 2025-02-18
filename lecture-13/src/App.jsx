// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'

export class App extends Component {
  state = {
    todolist: []
  }
  render() {
    return (
      <div>{this.state.todolist?.map(el => el)}</div>
    )
  }
}

export default App
