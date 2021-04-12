import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './componenets/header/Header'
import Pages from './componenets/mainpages/Pages'



function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <br/>
          <Pages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;