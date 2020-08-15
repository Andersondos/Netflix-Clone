import React from 'react';
import './App.css';
import Row from './Row';
import request from './requests';

function App() {
  return (
    <div className="App">
       <h1>Contruindo o front-end do clone da Netdlix</h1>
       <Row title="Netflix Original" fetchUrl ={request.fecthNetflixOriginals} />
       <Row title="Trending Now" fetchUrl ={request.fetchTrending} />


    </div>
  );
}

export default App;
 