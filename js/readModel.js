function readModel(){
const modelString =localStorage.getItem("dinnerModel");
let modelObject= JSON.parse(modelString);
if (!modelString){
    modelObject={};
}

let model = new DinnerModel(modelObject.guests,modelObject.dishes,modelObject.currentDish)
return model;
}