class DinnerModel{
 constructor(guests=2,dishes=[],currentDish=null){
    this.subscribers=[]
    this.numberOfGuests;
    this.dishes=[];
    this.currentDish;
    this.setNumberOfGuests(guests);
    this.addToMenu(dishes);
    this.setCurrentDish(currentDish);
    }


 addObserver(callback){
     this.subscribers= this.subscribers.concat(callback);
 }
 notifyObservers(){
    this.subscribers.forEach((callback)=>{
        try {callback();} catch(err){
            console.log("Error ", err, callback);}
        }
    );
    console.log(this.dishes)
    localStorage.setItem("dinnerModel", 
    JSON.stringify({guests: this.numberOfGuests, 
        dishes: this.dishes,
        currentDish: this.currentDish}))

}

removeObserver(obs){
    this.subscribers=this.subscribers.filter(observer=>observer!==obs);
}
setNumberOfGuests(num){
    if(num <= 0)
    throw "Number of dinner guests cannot be zero or negative"
    this.numberOfGuests=num;
    this.notifyObservers()
}

getNumberOfGuests(){
    return this.numberOfGuests;
}

addToMenu(dish){
 if(this.dishes){
    this.dishes.map(dishinmenu=> {
        if(dishinmenu.id===dish.id){
            throw "Dish is already in Menu"
        } 
    })
} 
if (Array.isArray(dish)){
    this.dishes=[...dish,...this.dishes]
    this.notifyObservers()
}  

else{
    this.dishes=[dish,...this.dishes]
    this.notifyObservers()

}

}

getMenu(){
    return [...this.dishes];
}

removeFromMenu(dishid){
    this.dishes=this.dishes.filter(dishes=> dishes.id !== dishid);
    this.notifyObservers()
}

setCurrentDish(id){
this.currentDish=id;
this.notifyObservers()
}

presntIng(menu){

let allIng=menu.map((dish)=>dish.extendedIngredients).flat();
let filterIngred =new Map();
allIng.map((ing)=>{
    if (filterIngred.has(ing.name)){
        const pA = filterIngred.get(ing.name).amount;
        filterIngred.set(ing.name,{name: ing.name,aisle:ing.aisle, amount: ing.amount+pA});
    }else filterIngred.set(ing.name,{name: ing.name,aisle:ing.aisle, amount: ing.amount})
})
return [...filterIngred.values()];


}

}