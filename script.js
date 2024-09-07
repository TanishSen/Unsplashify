// const accesskey = "rv_6FAzuh7eV2FbwBaFBK5LM5Xa8bOG8CXnCeWjPHO8s";

// const searchForm = document.getElementById("search-form");
// const searchBox = document.getElementById("search-box");
// const searchResult = document.getElementById("search-result");
// const showMoreBtn = document.getElementById("show-more-btn");

// let keyword = "";
// let page = 1;

// async function searchImage() {
//   keyword = searchBox.value;
//   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}client_id=${accesskey}`;

//   const response = await fetch(url);
//   const data = await response.json();

//   console.log(data);
// }

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   page = 1;
//   searchImage();
// });

const accesskey = "_J3I2j0SCmU0ZLFmEwtbZ96JIUFSICR7g984Wei4cSg";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`; // Use backticks for template literals

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});
