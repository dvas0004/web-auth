import React, { Component } from 'react';

import './App.css';
import { createCreds, validateCreds } from './webauthn';

const buttonStyle = {
  padding: 10,
  margin: 5
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            WebAuthn API Demo
          </p>
          
          <p>
            <a href="https://blog.davidvassallo.me">Check blog post for more details</a>
          </p>
          
          <button 
            style={buttonStyle} 
            onClick={createCreds}
          >
            Register Creds
          </button>

          <button 
            style={buttonStyle} 
            onClick={validateCreds}
          >
            Validate Creds
          </button>
          
        </header>
      </div>
    );
  }
}

export default App;
