function Sidebar(model){
        const root= h("div");
        root.append(h(SidebarView, {guests:model.model.numberOfGuests,
                                    setGuests: x=> model.model.setNumberOfGuests(x),
                                    dishes: model.model.dishes,
                                    removeDish:dishid=> model.model.removeFromMenu(dishid)}));


     model.model.addObserver(function(){

     root.firstChild.remove();
     root.append(h(SidebarView, {guests:model.model.numberOfGuests,
                                setGuests: x=> model.model.setNumberOfGuests(x),
                                dishes: model.model.dishes,
                                removeDish:dishid=> model.model.removeFromMenu(dishid)}));
    
    });
    return root;
}