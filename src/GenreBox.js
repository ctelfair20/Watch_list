const GenreBox = () => {
  return (
    <div className="genre-container">
      <div className="title">
        Pick A Genre!
      </div>
      <div className="genre-lists">
        <div className="genre-column">
          <input type="radio" /> Adventure
          <input type="radio" /> Action
          <input type="radio" /> Comedy
          <input type="radio" /> Drama
        </div>
        <div className="genre-column">
          <input type="radio" /> Fantasy
          <input type="radio" /> Slice of Life
          <input type="radio" /> Sports
          <input type="radio" /> Supernatural
          <input type="radio" /> Magic
          <input type="radio" /> Mystery
        </div>
        <div className="genre-column">
          <input type="radio" /> Historical
          <input type="radio" /> Horror
          <input type="radio" /> Psychological
          <input type="radio" /> SciFi
          <input type="radio" /> Romance
        </div>
      </div>
      <button>
        random Anime!
      </button>
    </div>
  );
}

export default GenreBox;