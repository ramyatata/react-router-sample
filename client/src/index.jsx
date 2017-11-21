import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>Rendering using react</div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
  <App/>
  <BrowserRouter/>
  ), document.getElementById('root'));