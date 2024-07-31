const express=require("express");
const router=express.Router({mergeParams:true});
const Listing = require("../models/listing");
const wrapAsync=require("../utils/wrapAsync");
const ExpressError=require("../utils/ExpressError");
const {listingSchema,reviewSchema} = require("../joi");
const Review = require("../models/review");
const { validateListing,validateReview, isLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviewss.js");
const listingController=require("../controllers/listingg.js");
//Post Reviews Route
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewController.createrReview ));
  //Delete Review Route
  router.delete("/:reviewId" ,isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

  module.exports=router;