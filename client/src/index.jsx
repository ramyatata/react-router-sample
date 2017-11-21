import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>Rendering using react</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));