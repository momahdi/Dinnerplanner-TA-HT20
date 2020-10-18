function App(model){
    //subsription to get notifications
    model.addObserver(function(){
    document.body.textContent= model.getNumberOfGuests();
    });    
    document.body.textContent= model.getNumberOfGuests();
}