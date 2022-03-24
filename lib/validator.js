
const isEmpty = (value) => {
    if (value === undefined || !value) return true;
    return value === null;
  };

  const isObjEmpty = (obj) =>{
    return Object.keys(obj).length === 0;
  };


const restaurantPayloadValidator = (restaurants, type)=>{
    if(type === "create")
        if(Object.keys(restaurants).length !==4) throw new Error("There are missing fields");
    else if(type === "filter")
        if(Object.keys(restaurants).length !==3 && Object.keys(restaurants).length !==4) throw new Error("There are missing fields");
    
    
      for (const key in restaurants) {
        if (restaurants[key] === undefined) {
          throw new Error("There are missing fields");
        }
        sanitizeEachProperties(key,restaurants[key])
      }
    function sanitizeEachProperties(key,value){
        switch (key) {
            case "name":
                if(!value || value.length === 0 || typeof value !== 'string')throw new Error("There are missing fields");
                break;
            case "position":
                if(value < 0 || value  > 200 || typeof value !== 'number') throw new Error("position must be an integer from 0 to 200");
                break;
            case "category":
                if(!value || value.length === 0 || typeof value !== 'string')throw new Error("There are missing fields");
                break
            case "rating":
                if(value < 0 || value  > 5 || typeof value !== 'number') throw new Error("rating must be an integer from 0 to 5");
                break;
            case "orderPriority":
                if(value !== "distance" && value  !== "rating") throw new Error("Order priority should be either distance or rating");
                break;
            case "distanceLimit":
                if(value !== undefined && typeof value !== 'number') throw new Error("Distance limit should be an integer")
                break;
            default:
                throw new Error("There are missing fields");
                break;
        }
    }
}


  
module.exports = {
isEmpty,
isObjEmpty,
restaurantPayloadValidator
}