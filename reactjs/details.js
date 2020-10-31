function Details({model,cancel}){ 
    const [promise, setPromise]= React.useState(null);
    const guests =useModelProp(model, "numberOfGuests");
    const currentDish =useModelProp(model,"currentDish")
    const dishes=useModelProp(model,"dishes")

    React.useEffect(
        
       
          ()=>setPromise(currentDish && DishSource.getDishDetails(currentDish)), [currentDish,model]);

    const [data, error]= usePromise(promise);
    
    return promiseNoData(promise,data,error) || 
        h(DetailsView, {
               dish: data,
               guests: guests,
               dishAdded:(dish)=>model.addToMenu(dish),
               isDishInMenu: dishID=>dishes.find(dish1=> dish1.id===dishID),
               cancel
          });   
}

