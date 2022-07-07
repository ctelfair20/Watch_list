const ChoiceBox = () => {
  return (
    <div className="choice-container">
      <div className="title">
        Anime title
      </div>
      <img
        src="https://static.wikia.nocookie.net/yakusokunoneverland/images/c/cb/Anime_date_announcement.png/revision/latest?cb=20190112054937"
        width="360px"
        height="200px"
        alt="Anime Cover Art"
        className="cover"
      />
      <div className="anime-summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi ipsum nesciunt aut reiciendis. Ipsam est accusamus recusandae
      </div>
      <div className="choice-gnere-list">
        <span className="choisce-genre">genre1</span>
        <span className="choisce-genre">genre2</span>
        <span className="choisce-genre">genre3</span>
      </div>
    </div>
  );
}

export default ChoiceBox;