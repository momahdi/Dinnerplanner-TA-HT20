function Sidebar(model){
        const root= h("div");
        root.append(h(SidebarView, {guests:model.model.numberOfGuests,
                                    setGuests: x=> model.model.setNumberOfGuests(x)}));


     model.model.addObserver(function(){

     root.firstChild.remove();
     root.append(h(SidebarView, {guests:model.model.numberOfGuests,
        setGuests: x=> model.model.setNumberOfGuests(x)}));
    
    });
    return root;
}