const API_KEY = process.env.API_KEY;

const generateApi = (api, query = '') => `${api}?api_key=${API_KEY}${query ? `&${query}` : ''}`;

const requests = {
  trending: {
    title: 'Trending',
    url: generateApi('/trending/all/week')
  },  
  topRated: {
    title: 'Top Rated',
    url: generateApi('/movie/top_rated')
  },  
  action: {
    title: 'Action',
    url: generateApi('/discover/movie', 'with_genres=28')
  },  
  comedy: {
    title: 'Comedy',
    url: generateApi('/discover/movie', 'with_genres=35')
  },  
  horror: {
    title: 'Horror',
    url: generateApi('/discover/movie', 'with_genres=27')
  },  
  romance: {
    title: 'Romance',
    url: generateApi('/discover/movie', 'with_genres=10749')
  },  
  mystery: {
    title: 'Mystery',
    url: generateApi('/discover/movie', 'with_genres=9648')
  },  
  sciFi: {
    title: 'Sci-Fi',
    url: generateApi('/discover/movie', 'with_genres=878')
  },  
  western: {
    title: 'Western',
    url: generateApi('/discover/movie', 'with_genres=37')
  },  
  animation: {
    title: 'Animation',
    url: generateApi('/discover/movie', 'with_genres=16')
  },  
  TV: {
    title: 'TV Movie',
    url: generateApi('/discover/movie', 'with_genres=10770')
  },
};

export default requests;