import axios from 'axios'

const GenreBox = () => {

  const handleOnClick = async () => {
    const options = {
      method: 'GET',
      url: 'https://anime-db.p.rapidapi.com/anime',
      params: {
        page: '1',
        size: '10',
        search: 'Fullmetal',
        genres: 'Fantasy,Drama',
        sortBy: 'ranking',
        sortOrder: 'asc'
      },
      headers: {
        'X-RapidAPI-Key': 'e84df027ddmshefa646604ede5f9p193db4jsn2b9b1627633f',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    }

    try {
      const data = await axios.request(options);
      console.log(data.data)
    } catch (err) {
      console.log(`ERROR: ${err}`)
    } finally {
      console.log('this did a thing')
    }
  }

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
          <input type="radio" /> Fantasy
        </div>
        <div className="genre-column">
          <input type="radio" /> Historical
          <input type="radio" /> Horror
          <input type="radio" /> Magic
          <input type="radio" /> Mystery
          <input type="radio" /> Psychological
        </div>
        <div className="genre-column">
          <input type="radio" /> Romance
          <input type="radio" /> SciFi
          <input type="radio" /> Slice of Life
          <input type="radio" /> Sports
          <input type="radio" /> Supernatural
        </div>
      </div>
      <button onClick={handleOnClick}>
        random Anime!
      </button>
    </div>
  );
}

export default GenreBox;