const axios = require('axios');

module.exports = {
  getAnime: async () => {
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
      console.log(data)
    } catch (err) {
      console.log(`ERROR: ${err}`)
    } finally {
      console.log('this did a thing')
    }
  }
}
