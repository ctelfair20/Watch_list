import { getAnime } from './requestHandlers'

const GenreBox = () => {

  const genreList1 = [
    "Adventure",
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
  ]
  const genreList2 = [
    "Historical",
    "Horror",
    "Magic",
    "Mystery",
    "Psychological"
  ]
  const genreList3 = [
    "Romance",
    "SciFi",
    "Slice of Life",
    "Sports",
    "Supernatural",
  ]

  return (
    <div className="genre-container">
      <div className="title">
        Pick A Genre!
      </div>
      <div className="genre-lists">
        <div className="genre-column">
          {genreList1.map((item, index) => (
            <div key={index} className="genre">
              <input type="radio" />{item}
            </div>
          ))}
        </div>
        <div className="genre-column">
          {genreList2.map((item, index) => (
            <div key={index} className="genre">
              <input type="radio" />{item}
            </div>
          ))}
        </div>
        <div className="genre-column">
          {genreList3.map((item, index) => (
            <div key={index} className="genre">
              <input type="radio" />{item}
            </div>
          ))}
        </div>
      </div>
      <button onClick={getAnime}>
        random Anime!
      </button>
    </div>
  );
}

export default GenreBox;