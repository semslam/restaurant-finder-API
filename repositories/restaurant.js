

const {isObjEmpty, isEmpty} = require("../lib/validator")

let restaurants = [{
  "name": "123",
  "position": 200,
  "category": "Pizza",
  "rating": 2
}, {
  "name": "Mac",
  "position": 180,
  "category": "Burguer",
  "rating": 4
},
{
  "name": "123",
  "position": 199,
  "category": "Burguer",
  "rating": 5
},
, {
  "name": "Mac",
  "position": 150,
  "category": "Burguer",
  "rating": 5
},
{
  "name": "123",
  "position": 100,
  "category": "Burguer",
  "rating": 3
},{
  "name": "123",
  "position": 60,
  "category": "Pizza",
  "rating": 5
}, {
  "name": "Mac",
  "position": 130,
  "category": "Burguer",
  "rating": 2
},
{
  "name": "123",
  "position": 5,
  "category": "Burguer",
  "rating": 0
},
, {
  "name": "Mac",
  "position": 0,
  "category": "Burguer",
  "rating": 5
},
{
  "name": "123",
  "position": 110,
  "category": "Burguer",
  "rating": 4
}];

const save = (restaurant)=>{
    if(isObjEmpty(restaurant)) throw new Error("There are missing fields");

  restaurants.push(restaurant)
}

const findBy = (properties)=>{
    if(isObjEmpty(properties)) throw new Error("There are missing fields");

 return restaurants.filter(restaurant => 
    restaurant.category === properties.category && 
    restaurant.position >= properties.position && 
    restaurant.position <=(properties.position + properties.distanceLimit)
    );
}

const isPositionExist = (position)=>{
    if(isEmpty(position)) throw new Error("There are missing fields");

 const result = restaurants.filter(restaurant => restaurant.position === position);
return (result.length === 0)? true : false;

}

const deleteAll = ()=>{
    restaurants = [];
    if(restaurants.length ===0) return true
}

module.exports = {
    save,findBy,isPositionExist,deleteAll
}