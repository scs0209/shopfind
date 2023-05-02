require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/search", async (req, res) => {
  try {
    const query = encodeURI(req.query.query);
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/shop.json",
      {
        headers: {
          "X-Naver-Client-Id": process.env.CLIENT_ID,
          "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
        },
        params: {
          query: query,
          display: 10, // 검색 결과 개수 (최대 100)
        },
      }
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
