import './App.css';
import Header from './Header';
import GenreBox from "./GenreBox";
import ChoiceBox from './ChoiceBox';
import WatchList from './WatchList';

function App() {
  return (
    <div className="App">
      {
        localStorage.setItem('obj', JSON.stringify({ num: 2, char: "r" }))
      }
      {console.log(typeof JSON.parse(localStorage.getItem('obj')))}
      <Header />
      <div className="random-content">
        <GenreBox />
        <ChoiceBox />
      </div>
      <div className="watch-list-container">
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
      </div>
    </div>
  );
}
// echo "# Watch_list" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ctelfair20/Watch_list.git
// git push -u origin main

export default App;
