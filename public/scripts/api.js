const form = document.querySelector("form");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = searchInput.value;
  const response = await fetch(`http://localhost:3000/search?query=${query}`);
  if (response.ok) {
    const data = await response.json();
    const items = data.items;
    searchResults.innerHTML = "";
    if (items.length === 0) {
      searchResults.innerHTML = "No results found.";
    } else {
      for (const item of items) {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
          <img src="${item.image}">
          <h3>${item.title}</h3>
          <p>${item.mallName}</p>
          <p>${item.lprice}원</p>
          <a href="${item.link}" target="_blank">Go to store</a>
        `;

        searchResults.appendChild(div);
      }
    }
  } else {
    searchResults.innerHTML = "Error getting search results.";
  }
});
