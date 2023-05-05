"use strict";
const emailSpan = document.querySelector(".email");
const nameSpan = document.querySelector(".name");
const ageSpan = document.querySelector(".age");
const genderSpan = document.querySelector(".gender");
const favoritesContainer = document.querySelector(".favorites-container");

const favoritesList = document.createElement("ul");
favoritesList.classList.add("favorites-list");

const logoutButton = document.querySelector("button");

window.onload = function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    const userEmail = localStorage.getItem("userEmail");
    emailSpan.innerText = userEmail;

    const userInfo = JSON.parse(localStorage.getItem("user"));
    nameSpan.innerText = userInfo.username;
    ageSpan.innerText = userInfo.age;
    genderSpan.innerText = userInfo.gender;

    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites === null || favorites.length === 0) {
      favoritesList.innerHTML = "찜한 상품이 없습니다.";
    } else {
      for (const favorite of favorites) {
        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.src = favorite.image;

        const link = document.createElement("a");
        link.href = favorite.link;
        link.target = "_blank";
        link.textContent = favorite.title;

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", () => {
          const index = favorites.indexOf(favorite);
          if (index > -1) {
            favorites.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            div.remove();
          }
        });

        div.appendChild(img);
        div.appendChild(link);
        div.appendChild(removeBtn);

        favoritesList.appendChild(div);
      }
    }

    favoritesContainer.appendChild(favoritesList);
  } else {
    location.href = "./login.html";
  }
};

logoutButton.addEventListener("click", function () {
  // 로그아웃 처리
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  location.reload();
});
