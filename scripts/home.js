import { api_key } from "./config.js";

const HomeAPIRoutes = {
  "Trending Movies": { url: "/trending/movie/week" },
  "Popular Movies": { url: "/movie/popular" },
  "Top Rated Movies": { url: "/movie/top_rated" },
  "Now Playing at Theatres": { url: "/movie/now_playing" },
  "Upcoming Movies": { url: "/movie/upcoming" },
};
//lấy film trending để làm hero section
fetch(
  "https://api.themoviedb.org/3" +
    HomeAPIRoutes["Trending Movies"].url +
    "?api_key=" +
    api_key,
  // https://api.themoviedb.org/3/trending/movie/week?api_key=6fd6f05648b23fbeb9c8a3532c02a3cf
)
  .then((res) => res.json())
  .then((data) => {
    // Lấy data phim từ result 1 cách random theo ngày
    const main = data.results[new Date().getDate() % data.results.length];
    document.querySelector("#hero-image").src =
      `https://image.tmdb.org/t/p/w500${main.poster_path}`;
    document.querySelector("#hero-preview-image").src =
      `https://image.tmdb.org/t/p/w300${main.poster_path}`;
    document.querySelector("#hero-title").innerText = main.title || main.name;
    document.querySelector("#hero-description").innerText = main.overview;
    document.querySelector("#watch-now-btn").href =
      `./watch.html?id=${main.id}`;
    document.querySelector("#view-info-btn").href = `./info.html?id=${main.id}`;
  });
