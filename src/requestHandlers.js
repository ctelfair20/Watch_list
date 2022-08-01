import axios from 'axios'

const arrToStringGenres = (checked) => {
  let genres = '';
  if (checked.length === 1) {
    return genres += checked[0];
  }
  checked.map((genre, i) => {
    if (i === 0) {
      return genres += genre;
    } else if (i > 0) {
      return genres += `,${genre}`;
    }
  })
  return genres;
}

const randomAnime = (arr) => {
  const randomIndex = (Math.floor(Math.random() * arr.length))
  const randomAnime = arr[randomIndex];
  console.log(randomAnime);
  return randomAnime;
};

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
    randomAnime(data.data.data);
  } catch (err) {
    console.log(`ERROR: ${err}`)
  }
}

