import { useState } from 'react'
import './App.css'
import UserName from './UserName.jsx'

function App() {
  //state
  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');
  
  const doInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const doSubmit = (event) => {
    event.preventDefault();
    setUserName(inputValue);
  }

  return (
    <div>
      <form onSubmit={doSubmit}>
        <input
          id="nameInput"
          type="text"
          value={inputValue}
          onChange={doInputChange}
          placeholder="Enter your name"
         />
         <button id="submitButton" type="submit">Ok</button>
      </form>
      <UserName name={userName}></UserName>
    </div>
  )
}

export default App
