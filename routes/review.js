const router = require("express").Router();
const Name = require("../models/Name");
const Review = require("../models/Review");

router.post("/postReview", async (req, res) => {
  // const newReview = await new Review({
  //   productId: req.body.productId,
  //   reviewText: req.body.reviewText,
  //   postedBy: req.body.postedBy,
  //   starRating: req.body.starRating || 3,
  // });

  try {
    const newReview = new Review({
      productId: req.body.productId,
      reviewText: req.body.reviewText,
      postedBy: req.body.postedBy,
      starRating: req.body.starRating || 3,
    });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/postReviewNew", async (req, res) => {
  const newReview = new Name({
    name: req.body.name,
  });

  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/getReviews", async (req, res) => {
  try {
    console.log(req.query);
    const reviews = await Review.find({ productId: req.query.productId });

    res.status(200).json({
      message: "Reviews fetched successfully!",
      response: {
        reviews,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong!",
      error: error.message,
    });
  }
});

module.exports = router;
