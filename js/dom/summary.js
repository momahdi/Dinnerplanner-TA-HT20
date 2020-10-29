function Summary({model}){
    const root= h("div");
    root.append(h(SummaryView, {guests:model.numberOfGuests,
                                dishes:model.dishes,
                                menuIngredient:menu=>model.presntIng(menu)
    
    }));
    model.addObserver(function(){
        root.firstChild.remove();
        root.append(h(SummaryView, {guests:model.numberOfGuests,
            dishes:model.dishes,
            menuIngredient:menu=>model.presntIng(menu)

}))});
    
    return root;
}