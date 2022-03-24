
const {save,findBy,isPositionExist,deleteAll} = require("../repositories/restaurant")

const saveRestaurant = (res,params) =>{
    if(!isPositionExist(params.position)) throw new Error("Position not available")
    
    save(params)
    res.status(201).send(params);
}

const searchRestaurantsByParams = (res,params)=>{
 let restaurant ={} 
 restaurant.distanceLimit = (params.distanceLimit !== undefined)? params.distanceLimit : 30;
 restaurant.category = params.category;
 restaurant.position = params.position;

// Category: You should filter by the category contained in the user's request body.
// orderPriority: The user can choose between sorting by distance, in which case you must return the nearest restaurants first, and sorting by rating, in which case you must return the best rated restaurants first.
// distanceLimit: Optionally, the user can also choose a distanceLimit. If nothing is passed your system should set the value 30 as default. This value is bi-directional, which means that if the user is at position 100, and chooses distanceLimit 50, you should display restaurants from 50 to 150.
// add  distanceLimit + position;   
const restaurants = findBy(restaurant)

if(params.orderPriority === "distance")
    restaurants.sort((a, b)=>{return b.position - a.position});
else if(params.orderPriority === "rating")
    restaurants.sort((a, b)=>{return b.rating - a.rating});
    

res.status(200).send(restaurants);
}

const deleteAllRestaurants = (res)=>{
    if(deleteAll())
    res.status(204).send({message:"NO CONTENT"});
}

module.exports ={
    saveRestaurant,
    searchRestaurantsByParams,
    deleteAllRestaurants
}