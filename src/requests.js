const API_KEY = "0e1af2366f7ce761d185564b6d36d63f";

   const request = { 
       fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
       fecthNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
       fecthTopReted: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
       fetchActionMovies: `/discover/movie?api_key${API_KEY}&with_genres=28`,
       fetchComedyMovies: `/discover/movie?api_key${API_KEY}&with_genres=35`,
       fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&with_genres=27`,
       fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&with_genres=10749`,
       fetchDocumentaries: `/discover/movie?api_key${API_KEY}&with_genres=99`,
   }

   export default request;