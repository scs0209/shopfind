"use strict";
const logoutButton = document.querySelector("button");

window.onload = function () {
  //로그인 상태를 확인
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    //로그인된 사용자의 이메일을 가져온다.
    const userEmail = localStorage.getItem("userEmail");

    //이메일을 출력한다.
    const emailElement = document.querySelector(".email");
    emailElement.innerText = userEmail;

    //사용자의 정보를 가져온다.
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(userInfo);

    //이름, 나이, 성별을 출력한다.
    const nameElement = document.querySelector(".name");
    nameElement.innerText = userInfo.username;

    const ageElement = document.querySelector(".age");
    ageElement.innerText = userInfo.age;

    const genderElement = document.querySelector(".gender");
    genderElement.innerText = userInfo.gender;
  } else {
    //로그인되어 있지 않운 경우 로그인 페이지로 이동한다.
    location.href = "./login.html";
  }
};

logoutButton.addEventListener("click", function () {
  // 로그아웃 처리
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  location.reload();
});
