import React, {useState}  from 'react';
import axios from 'axios';



  function App() {
    const [joker, setJoker] = useState('')
    const getJokers = () => {
      axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => {
        console.log(res.data.value)
        setJoker(res.data.value)
      }).catch(err => {
        console.log(err)
      })
    }

  return (
    <div className='container'>
      <h2>Joker</h2>
        { joker && <p>{joker}</p> }
      <button onClick={getJokers}>New joker 😇  </button>
    </div>
)};


export default App;

