import express from "express";

const app = express();
const cors = require("cors");

app.use(cors());

app.get("/feedback/:userReview", (req, res) => {
  const { userReview } = req.params;

  const stars = {
    userReview,
  };

  console.log(userReview);

  return res.status(200).json(stars);
});

app.listen(3001, () => {
  console.log(`App executando`);
});
