'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }))

// Get the landing page
router.get("/", function(req,res){
    res.render("landing");
});

// Get the movies to display on movies page
router.get('/movies', function(req, res){
    res.render('movies',{movies:movies});
});

// Get data from form and add to movies array
router.post('/movies', function(req, res){
  const name = req.body.name;
  const image = req.body.image;
  const genre = req.body.genre;
  const newMovie = {name: name, image: image, genre: genre}
  movies.push(newMovie);
//redirect back to movies page
  res.redirect('/movies');
});

router.get("/movies/new", function(req,res) {
    res.render("new.ejs");
});

var movies = [
  {
    "movie_id": 1, "title": "Mamma Mia!", "year_released": "2008", "length":"108 minutes", "genre":"Comedy, Musical, Romance", "director":"Phyllida Lloyd", "rating": "PG-13",
    "image":"https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_.jpg",
    "price":"$20.00"
  },
  {
    "movie_id": 2, "title": "Grease", "year_released": "1978", "lenth": "110 minutes", "genre":"Musical, Romance", "director":"Randal Kleiser", "rating":"PG-13",
    "image":"https://m.media-amazon.com/images/M/MV5BZmUyMDEyOTgtZmUwOS00NTdkLThlNzctNTM1ODQ4M2VhMjdhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY999_CR0,0,634,999_AL_.jpg",
    "price":"$20.00"
  },
  {
    "movie_id": 3, "title": "Free Solo", "year_released": "2018", "lenth": "100 minutes", "genre":"Documentary, Sport ", "director":"Jimmy Chin, Elizabeth Chai Vasarhelyi", "rating":"PG-13",
    "image":"https://m.media-amazon.com/images/M/MV5BMjMwYjcwNWQtNTQ5YS00MzVlLTkxYzMtNDIwZWIxZTE4Zjg2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    "price":"$30.00"
  },
  {
    "movie_id": 4, "title": "Bohemian Rhapsody", "year_released": "2018", "lenth": "134 minutes", "genre":"Biography, Drama, Music", "director":"Bryan Singer", "rating":"PG-13",
    "image":"https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    "price":"$30.00"
  },
  {
    "movie_id": 5, "title": "Green Book", "year_released": "2018", "lenth": "130 minutes", "genre":"Biography, Comedy, Drama ", "director":"Peter Farrelly", "rating":"PG-13",
    "image":"https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    "price":"$30.00"
  },
  {
    "movie_id": 6, "title": "The Avengers", "year_released": "2012", "lenth": "143 minutes", "genre":"Action, Adventure, Sci-Fi ", "director":"Joss Whedon", "rating":"PG-13",
    "image":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    "price":"$25.00"
  },
  {
    "movie_id": 7, "title": "Toy Story", "year_released": "1995", "lenth": "81 minutes", "genre":"Animation, Adventure, Comedy ", "director":"John Lasseter", "rating":"G",
    "image":"https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY1000_SX670_AL_.jpg",
    "price":"$20.00"
  },
  {
    "movie_id": 8, "title": "Finding Nemo", "year_released": "2003", "lenth": "100 minutes", "genre":"Animation, Adventure, Comedy ", "director":"Andrew Stanton, Lee Unkrich", "rating":"G",
    "image":"https://m.media-amazon.com/images/M/MV5BZjMxYzBiNjUtZDliNC00MDAyLTg3N2QtOWNjNmNhZGQzNDg5XkEyXkFqcGdeQXVyNjE2MjQwNjc@._V1_.jpg",
    "price":"$20.00"
  },
  {
    "movie_id": 9, "title": "Get Out", "year_released": "2017", "lenth": "104 minutes", "genre":"Horror, Mystery, Thriller ", "director":"Jordan Peele", "rating":"R", 
    "image":"https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    "price":"$20.00"
  },
  {
    "movie_id": 10, "title": "Just Go With It", "year_released": "2011","lenth": "117 minutes", "genre":"Comedy, Romance ", "director":"Dennis Dugan", "rating":"PG-13",
    "image":"https://m.media-amazon.com/images/M/MV5BMjE0MTk3MjE2Nl5BMl5BanBnXkFtZTcwMjE0ODA0NA@@._V1_.jpg",
    "price":"$25.00"
  }
];

module.exports = router;