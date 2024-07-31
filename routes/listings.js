const express=require("express");
const router=express.Router();
const Listing = require("../models/listing");
const wrapAsync=require("../utils/wrapAsync");
const listingController=require("../controllers/listingg.js");
const Review = require("../models/review");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const multer  = require("multer");
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage:storage });



router.route("/")
//index route
.get(wrapAsync(listingController.index))
// new listing post route to database 
.post(isLoggedIn ,upload.single('listing[image]'), validateListing,wrapAsync(listingController.createListing));




//create route
router.get("/new",isLoggedIn,  listingController.renderNewForm)



router.route("/:id")
  //read:show route
.get(wrapAsync(listingController.showListing))
//update route
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
//listings delete route
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));


  //edit route
  router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

//filetr route
router.get("/filter/trending",wrapAsync(listingController.filterTrending));
router.get("/filter/Domes",wrapAsync(listingController.filterDomes));
router.get("/filter/Farms",wrapAsync(listingController.filterFarms));
router.get("/filter/Mountains",wrapAsync(listingController.filterMountains));
router.get("/filter/Arctic",wrapAsync(listingController.filterArctic));
router.get("/filter/Boat",wrapAsync(listingController.filterBoat));
router.get("/filter/Camping",wrapAsync(listingController.filterCamping));
router.get("/filter/IconicCities",wrapAsync(listingController.filterIconicCities));
router.get("/filter/Rooms",wrapAsync(listingController.filterRooms));


//searchBar

router.get("/search",wrapAsync(listingController.searchBar));

module.exports=router;