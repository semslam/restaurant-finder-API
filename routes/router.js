const express = require('express');
const {restaurantPayloadValidator} = require("../lib/validator")
const {saveRestaurant, searchRestaurantsByParams,deleteAllRestaurants} = require("../services/restaurantManagement");
const {validatorType} = require("../lib/constant");

const {CREATE,FILTER} = validatorType
const router = express.Router();

router.post("/restaurant", (req, res)=>{
//validate all the payload request according to project request
    try {
        restaurantPayloadValidator(req.body,CREATE);
        saveRestaurant(res,req.body);
    } catch (err) {
        res.status(400).send({message:err.message});
    }
 });

 router.post("/restaurants", (req, res)=>{
    try {
        restaurantPayloadValidator(req.body,FILTER);
        searchRestaurantsByParams(res,req.body)
    } catch (err) {
        res.status(400).send({message:err.message});
    }
  });

  router.delete("/restaurants", (req, res)=>{
    try {
        deleteAllRestaurants(res);
    } catch (err) {
        res.status(400).send({message:err.message});
    }
 })

module.exports = router;