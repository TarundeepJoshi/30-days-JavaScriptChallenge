let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
  let movieName = movieNameRef.value;
  // var key = "123456"; ENTER YOUR KEY
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response == "True") {
          result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star.png">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <button id="more-info-btn">More Info</button>
            <div id="more-info" style="display: none;">
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
            </div>
        `;

          let moreInfoBtn = document.getElementById("more-info-btn");
          let moreInfoSection = document.getElementById("more-info");

          moreInfoBtn.addEventListener("click", () => {
            if (moreInfoSection.style.display === "none") {
              moreInfoSection.style.display = "block";
              moreInfoBtn.textContent = "Hide Info";
            } else {
              moreInfoSection.style.display = "none";
              moreInfoBtn.textContent = "More Info";
            }
          });
        } else {
          result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
        }
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occurred</h3>`;
      });
  }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
