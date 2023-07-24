import Navbar from './components/Navbar';
import './App.css';

import React from 'react';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { action,comedy,original,horror, romance, documentary } from './urls';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <RowPost url={original} title='Netflix Originals' />
    <RowPost  url={action} title='Action' isSmall />
    <RowPost  url={comedy} title='Comedy' isSmall />
    <RowPost  url={horror} title='Horror' isSmall />
    <RowPost  url={romance} title='Romance' isSmall />

    </div>
  );
}

export default App;
