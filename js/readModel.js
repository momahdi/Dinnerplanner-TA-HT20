function readModel(){
const modelString =localStorage.getItem("dinnerModel");
console.log(modelString)
let modelObject= JSON.parse(modelString);
console.log(modelObject)
let model = new DinnerModel(modelObject.guests,modelObject.dishes,modelObject.currentDush)
return model;
}