// API 요청을 보낼 URL 생성
const query = "아이폰";
const clientId = "mtRLF1OKQEnqtZjLSR0Y";
const clientSecret = "u87M_bBH4d";
const url = `https://openapi.naver.com/v1/search/shop.json?query=${query}&display=10&sort=sim`;

// API 요청 보내기
fetch(url, {
  headers: {
    "X-Naver-Client-Id": clientId,
    "X-Naver-Client-Secret": clientSecret,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // 목록에 추가할 부모 요소 찾기
    const shoppingMalls = document.getElementById("shopping-malls");
    const list = shoppingMalls.querySelector("ul");

    // 검색 결과에서 쇼핑몰 정보 추출하여 HTML 요소 생성
    data.items.forEach((item) => {
      const link = item.link;
      const title = item.title;
      const image = item.image;

      const listItem = document.createElement("li");
      const linkElement = document.createElement("a");
      const titleElement = document.createElement("h2");
      const imageElement = document.createElement("img");

      linkElement.href = link;
      linkElement.target = "_blank";
      titleElement.innerText = title;
      imageElement.src = image;

      linkElement.appendChild(titleElement);
      linkElement.appendChild(imageElement);
      listItem.appendChild(linkElement);
      list.appendChild(listItem);
    });
  });
