const express=require("express");
const router=express.Router();
const Listing = require("../models/listing");
const wrapAsync=require("../utils/wrapAsync");
const listingController=require("../controllers/listingg.js");
const searchController=require("../controllers/searchh.js");
const Review = require("../models/review");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const multer  = require("multer");
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage:storage });

router.get("/",wrapAsync(searchController.searchBar));

module.exports=router;