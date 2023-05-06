# shopfind

## 프로젝트 정보

> **1인 개발** <br/> **개발기간: 2023.4.30 ~**

## 개발자 소개

|                                                              성창수                                                              |
| :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/110822847/229564340-070947f1-3f34-4cf4-b25f-ffe2d274be50.jpg" width="160px"> |
|                                              [@changsu](https://github.com/scs0209)                                              |
|                                                       순천향대 화학과 졸업                                                       |

## 프로젝트 소개

원하는 상품 검색과, 내가 생각한 추천 쇼핑몰 사이트 목록에 들어갈 수 있는 사이트

## 시작 가이드

For building and running the application you need:

## Available Scripts

### Requirements

In the project directory, you can run:

- [Node.js 18.12.1](https://nodejs.org/ca/blog/release/v18.12.1/)
- [Npm 8.19.2](https://www.npmjs.com/package/npm/v/8.19.2)

### Installation

```bash
$ git clone https://github.com/scs0209/shopfind.git
$ cd myBlog
```

#### Backend

```
$ cd server
$ npm i
$ npm run dev
```

#### Frontend

```
vs code live server 실행
```

---

## Stack🤡

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

---

## 화면 구성 📺

|                                                           메인 페이지                                                            |                                                          로그인 페이지                                                          |
| :------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img width="329" src= "https://user-images.githubusercontent.com/110822847/229567497-b5607bb5-5d3c-44e3-b32e-0b3edbf83564.PNG"/> | <img width="329" src="https://user-images.githubusercontent.com/110822847/229567670-2b7d644f-4e1e-4b93-a168-89c2d32f0b68.PNG"/> |
|                                                         회원가입 페이지                                                          |                                                          게시글 페이지                                                          |
| <img width="329" src="https://user-images.githubusercontent.com/110822847/229567915-4c21d3a9-9d57-4eb5-b919-d52842b4f9f9.PNG"/>  | <img width="329" src="https://user-images.githubusercontent.com/110822847/229568037-a07a998c-1d5a-43c2-b9a5-8caae388cb27.PNG"/> |

---

## 주요 기능 📦

### ⭐️ 상품 검색

- 네이버 상품 검색이 가능

### ⭐️ 로그인 및 회원가입 기능

- 로컬 스토리지를 사용하여 로그인과 회원가입이 가능하게 만들었다.

### ⭐️ 상품 찜 기능

- 검색한 상품에서 좋아요 버튼을 누르면 마이페이지에 내가 찜한 상품 목록을 볼 수 있다.

### ⭐️ 쇼핑몰 목록

- 연령대별 선호 쇼핑몰과, 추천 쇼핑몰 목록을 볼 수 있다.(주관적)

---

## 아키텍쳐

### 디렉터리 구조

```bash
public
├── index.html
├── login.html
├── signup.html
├── mypage.html
├── styles
│   ├── index.css
│   ├── login.css
│   ├── myPage.css
│   └── signup
├── scripts
│   ├── main.js
│   ├── login.js
│   ├── footer.js
│   └── myPage.js
│   └── signup.js
├── images
│   ├── favicon.png
│   ├── ...jpg
└── data
    ├── ageGroup.json
    └── shoppingmall.json
server
└── server.js
```
