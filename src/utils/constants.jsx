export const netflix_logo = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const NETFLIX_BACKGROUND = `https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg`

export const TMDB_API = `https://api.themoviedb.org/3/movie/now_playing?page=2`;

export const TRAILER_API = `https://api.themoviedb.org/3/movie/`

export const POPULAR_MOVIES = `https://api.themoviedb.org/3/tv/popular?region=IN`;

export const TOP_RATED_MOVIES = `https://api.themoviedb.org/3/movie/top_rated?region=IN`;

export const UPCOMING_MOVIES = `https://api.themoviedb.org/3/movie/upcoming`;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
    }
};

export const IMAGE_CDN_LINK = `https://image.tmdb.org/t/p/w500`