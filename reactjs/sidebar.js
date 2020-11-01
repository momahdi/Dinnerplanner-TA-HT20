function Sidebar({model,dishChoiceRoute,dishChoice}){
    const guests =useModelProp(model, "numberOfGuests");
    const dishes=useModelProp(model,"dishes")
    console.log(dishes)

    return h(SidebarView, {
        guests: guests,
        setGuests: n=> model.setNumberOfGuests(n),
        dishes: dishes,
        removeDish:dishid=> model.removeFromMenu(dishid),dishChoiceRoute,
        dishChosen: dishId=> {model.setCurrentDish(dishId),dishChoice}
        
    });
}