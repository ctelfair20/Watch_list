import './App.css';
import { useState } from 'react';
import Header from './Header';
import GenreBox from "./GenreBox";
import ChoiceBox from './ChoiceBox';
import Footer from './Footer';
// import WatchList from './WatchList';

function App() {

  const [random, setRandom] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="random-content">
        <GenreBox setRandom={setRandom} />
        <ChoiceBox random={random} />
      </div>
      {/* let's keep it simple */}
      {/* <div className="watch-list-container">
        <WatchList />
        <WatchList />
        <WatchList />
        <WatchList />
        <WatchList />
        <WatchList />
      </div>
      <div className="watched-list-container">
        <WatchList />
        <WatchList />
        <WatchList />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
