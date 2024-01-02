console.log("Movie");

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG() {
    return this.rating;
  }
  static getPG(movies) {
    return movies.filter((movie) => movie.getPG() === "PG");
  }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
const movieArray = [
  new Movie("Spectre", "MGM", "PG"),
  new Movie("SkyFall", "MGM", "PG-13"),
  new Movie("GoldenBoy", "MGM", "R"),
  new Movie("Solace", "MGM", "PG"),
];

const pgMovies = Movie.getPG(movieArray);

console.log("Details of Casino Royale:");
console.log("Title: " + casinoRoyale.title);
console.log("Studio: " + casinoRoyale.studio);
console.log("Rating: " + casinoRoyale.getPG());

console.log("\nList of Movies with 'PG' rating:");
pgMovies.forEach((movie) => {
  console.log(
    "Title: " +
      movie.title +
      ", Studio: " +
      movie.studio +
      ", Rating: " +
      movie.getPG()
  );
});
