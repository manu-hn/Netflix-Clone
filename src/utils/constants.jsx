export const netflix_logo = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';


export const TMDB_API = `https://api.themoviedb.org/3/movie/now_playing?page=2`;

export const TRAILER_API = `https://api.themoviedb.org/3/movie/`

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
    }
};