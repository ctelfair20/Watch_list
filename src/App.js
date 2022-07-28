import './App.css';
import Header from './Header';
import GenreBox from "./GenreBox";
import ChoiceBox from './ChoiceBox';
// import WatchList from './WatchList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="random-content">
        <GenreBox />
        <ChoiceBox />
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
      <Header />
    </div>
  );
}

export default App;
