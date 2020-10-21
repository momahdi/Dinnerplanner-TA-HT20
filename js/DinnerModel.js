class DinnerModel{
 constructor(){
     this.numberOfGuests=6;
     this.subscribers=[];
     
 }
 addObserver(callback){
     this.subscribers= this.subscribers.concat(callback);
 }
 notifyObservers(){
    this.subscribers.forEach((callback)=>{
        try {callback();} catch(err){
            console.log("Error ", err, callback);}
        }
    );}

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











}