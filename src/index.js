import express, { response } from "express";

const app = express();

app.get("/feedback/:userReview", (req, res) => {
  const { userReview } = req.params;

  const stars = {
    userReview,
  };

  console.log(userReview);

  return res.status(201).json(stars);
});

app.listen(3001, () => {
  console.log(`App executando`);
});
