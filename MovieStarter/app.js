// Add DOM selectors to target input and UL movie list
$(function () {
  $("ul.list-group").css("list-style-type", "none");
  $("#filter").after("<ul class='filter-list'></ul>");

  $("#filter").change(function () {
    if ($(this).val() != "") {
      let filterArray = Object.keys(myMovies).filter(
        (item) => isMatch(item) == true
      );
      $("ul.filter-list").html(
        `${filterArray
          .map((movie) => {
            return `<li>${movie}</li>`;
          })
          .join("")}`
      );
    } else {
      $("ul.filter-list").html("");
    }
  });
});

var inp = document.querySelector("input");
var myMovieList = document.querySelector("ul");
var movieCard = document.getElementById("movieHistoryCard");
let isTableInitiated = false;
let myMovies = [];

// Example of a simple function that clears the input after a user types something in
function clearInput() {
  inp.value = "";
}

function clearMovies() {
  myMovieList.innerHTML = "";
}

function isMatch(item) {
  let val = $("#filter").val().toLowerCase();
  let pos = item.toLowerCase().indexOf(val);
  return pos > -1;
}

function isMoviesAlreadWatched(obj, value) {
  let key = Object.keys(myMovies).find(
    (item) => item.toLowerCase() == value.toLowerCase()
  );

  if (key) {
    myMovies[key]++;
    return true;
  } else {
    return false;
  }
}

function updateLocalDB(obj) {
  localStorage.setItem("movieDb", JSON.stringify(obj));
}

function updateMoiveTable() {
  $("#movieHistoryTable > tbody:first").html(
    `${Object.keys(myMovies)
      .map((movie) => {
        return `<tr><td>${movie}</td><td>${myMovies[movie]}</td></tr>`;
      })
      .join("")};`
  );
}

function initTable() {
  var movieTable = document.getElementById("movieHistoryTable");
  if (movieTable == undefined || movieTable == null) {
    $("#movieHistoryCard").append(
      '<table id="movieHistoryTable" width="100%"><thead><td width="50%">Title</td><td width="50%">Watched</td></thead><tbody></tbody></table>'
    );
  }
  isTableInitiated = true;
}

function manageList(value) {
  $("ul.list-group:last").append(`<li>${value}<li>`);
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
  // Step 1: Get value of input
  var userTypedText = inp.value;

  if (
    userTypedText == "" ||
    userTypedText == null ||
    userTypedText == undefined
  ) {
    alert("Please enter movie name.");
    return;
  }

  if (!isMoviesAlreadWatched(myMovies, userTypedText)) {
    myMovies[userTypedText] = 1;
  }

  //Update the localStorage
  updateLocalDB(myMovies);

  //Update the list
  manageList(userTypedText);

  //Init the table
  if (!isTableInitiated) initTable();

  //Update the table
  updateMoiveTable();
  // Step 6: Call the clearInput function to clear the input field

  clearInput();
}
