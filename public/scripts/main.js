"use strict";
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

        const isLiked = localStorage.getItem(item.link) === "true";
        const likeBtnText = isLiked ? "Remove" : "Add to Favorites";

        div.innerHTML = `
          <img src="${item.image}">
          <h3>${item.title}</h3>
          <p>${item.mallName}</p>
          <p>${item.lprice}원</p>
          <a href="${item.link}" target="_blank">Go to store</a>
          <button class="like-btn" data-link="${item.link}" data-liked="${isLiked}">
            ${likeBtnText}
          </button>
        `;

        const likeBtn = div.querySelector(".like-btn");
        likeBtn.addEventListener("click", () => {
          const link = likeBtn.dataset.link;
          const liked = likeBtn.dataset.liked === "true";

          let favorites = localStorage.getItem("favorites");
          if (!favorites) {
            favorites = [];
          } else {
            favorites = JSON.parse(favorites);
          }

          if (liked) {
            const index = favorites.findIndex(
              (favorite) => favorite.link === link
            );
            if (index > -1) {
              favorites.splice(index, 1);
            }
            likeBtn.dataset.liked = "false";
            likeBtn.innerText = "Add to Favorites";
          } else {
            favorites.push(item);
            likeBtn.dataset.liked = "true";
            likeBtn.innerText = "Remove";
          }

          localStorage.setItem("favorites", JSON.stringify(favorites));
        });

        searchResults.appendChild(div);
      }
    }
  } else {
    searchResults.innerHTML = "Error getting search results.";
  }
});

// 로그인 완료시 로그인 a태그 마이페이지 a태그로 변경
window.onload = function () {
  // 로그인 상태를 확인한다.
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    // 로그인된 사용자의 이메일을 가져온다.
    const userEmail = localStorage.getItem("userEmail");

    // 마이페이지 링크로 변경한다.
    const loginLink = document.querySelector(".navbar__list li:last-child a");
    loginLink.href = `./mypage.html?email=${userEmail}`;
    loginLink.innerText = "My Page";

    const logoutBtn = document.createElement("button");
    logoutBtn.innerText = "로그아웃";
    logoutBtn.classList.add("logout-btn");
    logoutBtn.addEventListener("click", function () {
      // 로그아웃 처리
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      location.reload();
    });

    const navbarList = document.querySelector(".navbar__list");
    navbarList.appendChild(logoutBtn);
  }
};

// 쇼핑몰 리스트 추가
function fetchShoppingMalls() {
  return fetch("./data/shoppingMall.json")
    .then((response) => response.json())
    .then((data) => data.shoppingMalls)
    .catch((error) => console.error(error));
}

function renderShoppingMalls() {
  const shoppingMallsContainer = document.querySelector(
    ".shopping-malls-container"
  );
  fetchShoppingMalls()
    .then((shoppingMalls) => {
      shoppingMalls.forEach((shoppingMall) => {
        const shoppingMallCard = document.createElement("div");
        shoppingMallCard.className = "shopping-mall-card";
        shoppingMallCard.innerHTML = `
          <img src="${shoppingMall.imgSrc}" alt="${shoppingMall.name}" />
          <h3>${shoppingMall.name}</h3>
          <a href="${shoppingMall.url}" target="_blank">바로가기</a>
        `;
        shoppingMallsContainer.appendChild(shoppingMallCard);
      });
    })
    .catch((error) => console.error(error));
}

renderShoppingMalls();
