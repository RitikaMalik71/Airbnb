const Listing =require("../models/listing");
const mbxgeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const wrapAsync = require("../utils/wrapAsync");
const mapToken=process.env.MAP_TOKEN;

const geocodingClient = mbxgeocoding({ accessToken:mapToken });
module.exports.searchBar=async(req,res)=>{
    let searchlocation=req.query.location;
    console.log(req.query);
    console.log(req.query.location);
    const allListings=await Listing.find({location :searchlocation});
    res.render("filter.ejs",{allListings});
}