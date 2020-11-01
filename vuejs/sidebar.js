const Sidebar= {
    props: ["model", "dishChoiceRoute", "dishChoice"],
    render(h){    
     const  {model, dishChoiceRoute,dishChoice} = this;
     return SidebarView({
            h,
            guests: model.getNumberOfGuests(),
            dishes: model.getMenu(),
            setGuests: x=> model.setNumberOfGuests(x), 
            removeDish:dishid=> model.removeFromMenu(dishid),
            dishChoiceRoute:dishChoiceRoute,
            dishChosen: dishId=> {this.model.setCurrentDish(dishId),dishChoice},
            h
          });
     }
}
