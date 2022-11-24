// for icons use FontAwesome
// 1 install, 2 import  ,  3 use {camelCase}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="header" >
          <p><FontAwesomeIcon icon={faIgloo} />  </p>
          <h1>Welcome.</h1>
        </div>

        <div className="form" >

          <p><input required type="email" placeholder='Email Address' /></p>
          <p><input required type="password" placeholder='Password' minLength="4" maxLength="10" /></p>

          <button type='submit'>Login</button>
        </div>

        <div className="footer" >
          <p><b>Signup</b> for a new account</p>
        </div>
      </div>
    </div>
  );
}

export default App;
