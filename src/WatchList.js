const WatchList = (list) => {
  return (
    <div className="watch-container">
      <img
        src="https://static.wikia.nocookie.net/yakusokunoneverland/images/c/cb/Anime_date_announcement.png/revision/latest?cb=20190112054937"
        width="250px"
        height="160px"
        alt="Anime Cover Art"
        className="cover"
      />
      <div className="title">
        Anime title
      </div>
      <div className="watch-genre-list">
        <input type="radio" /> watched?
      </div>
    </div>
  );
}

export default WatchList;