const CheckBox = ({ genreList, onCheck }) => {
  return (
    <div className="genre-column">
      {genreList.map((item, index) => (
        <div key={index} className="genre">
          <input value={item} type="checkbox" onChange={onCheck} />{item}
        </div>
      ))}
    </div>
  );
}

export default CheckBox;