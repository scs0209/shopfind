"use strict";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  if (password !== confirmPassword) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    return;
  }

  if (!validateEmail(email)) {
    alert("올바른 이메일 주소를 입력해주세요.");
    return;
  }

  // 회원 정보를 웹 스토리지에 저장합니다.
  const user = {
    username,
    password,
    email,
    age,
    gender,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("회원가입이 완료되었습니다!");
});

function validateEmail(email) {
  // 이메일 주소 유효성 검사를 수행합니다.
  // 정규식을 사용하여 검사할 수도 있습니다.
  return email.includes("@") && email.includes(".");
}
