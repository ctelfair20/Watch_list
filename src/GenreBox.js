import { useState } from 'react';
import CheckBox from './CheckBox';
import { getAnime } from './requestHandlers';

const GenreBox = () => {
  const [checked, setChecked] = useState([]);

  const handleChecked = (e) => {
    let updateCheckedGenres = [...checked];
    if (e.target.checked) {
      updateCheckedGenres = [...checked, e.target.value];
      setChecked(updateCheckedGenres);
    } else {
      updateCheckedGenres.splice(updateCheckedGenres.indexOf(e.target.value), 1);
      setChecked(updateCheckedGenres);
    }
  }

  const genreList1 = [
    "Adventure",
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
  ];
  const genreList2 = [
    "Historical",
    "Horror",
    "Magic",
    "Mystery",
    "Psychological"
  ];
  const genreList3 = [
    "Romance",
    "SciFi",
    "Slice of Life",
    "Sports",
    "Supernatural",
  ];

  return (
    <div className="genre-container">
      <div className="title">
        Pick A Genre!
      </div>
      <div className="genre-lists">
        <CheckBox genreList={genreList1} onCheck={handleChecked} />
        <CheckBox genreList={genreList2} onCheck={handleChecked} />
        <CheckBox genreList={genreList3} onCheck={handleChecked} />
      </div>
      <button onClick={() => { getAnime(checked) }}>
        random Anime!
      </button>
    </div>
  );
}

export default GenreBox;