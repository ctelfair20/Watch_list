import axios from 'axios'

const arrToStringGenres = (checked) => {
  console.log('len', checked.length, 'last', checked.length - 1);
  let genres = '';
  if (checked.length === 1) {
    return genres += checked[0];
  }
  checked.map((genre, i) => {
    if (i === 0) {
      console.log('hi', i);
      return genres += genre;
    } else if (i > 0) {
      console.log('is this happening');
      return genres += `,${genre}`;
    }
  })
  console.log(genres);
  return genres;
}


export const getAnime = async (arr) => {
  const options = {
    method: 'GET',
    url: 'https://anime-db.p.rapidapi.com/anime',
    params: {
      page: '1',
      size: '10',
      genres: arrToStringGenres(arr),
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
  }
}

