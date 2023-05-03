"use strict";
const form = document.querySelector(".login-form");
// 로그인 폼 제출 시 이벤트 핸들러 등록
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 제출 기본 동작 방지

  const user = JSON.parse(localStorage.getItem("user")); // 로컬 스토리지에서 사용자 정보 가져오기
  const loginEmail = document.getElementById("email").value; // 이메일 입력값 가져오기
  const loginPassword = document.getElementById("password").value; // 비밀번호 입력값 가져오기

  // 이메일과 비밀번호 비교하여 로그인 처리
  if (user && user.email === loginEmail && user.password === loginPassword) {
    // 로그인 성공 시 홈페이지로 이동
    window.location.href = "./index.html";
  } else if (user.email !== loginEmail) {
    // 로그인 실패 시 오류 메시지 표시
    alert("이메일이 올바르지 않습니다.");
  } else {
    alert("비밀번호가 올바르지 않습니다.");
  }
});
