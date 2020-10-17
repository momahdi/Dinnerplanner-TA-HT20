class DinnerModel{
 constructor(){
     this.numberOfGuests=2;
     
 }
setNumberOfGuests(num){
    if(num <= 0)
    throw "Number of dinner guests cannot be zero or negative"
    this.numberOfGuests=num;
}
getNumberOfGuests(){
    return this.numberOfGuests;
}











}