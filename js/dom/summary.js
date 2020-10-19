function Summary(model){
    const root= h("div");
    root.append(h(SummaryView, {guests:model.model.numberOfGuests}));
    model.model.addObserver(function(){
        root.firstChild.remove();
        root.append(h(SummaryView, {guests:model.model.numberOfGuests}));
        });
    
    return root;
}