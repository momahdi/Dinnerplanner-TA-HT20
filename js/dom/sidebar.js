function Sidebar(model){
        const root= h("div");
        root.append(h(SidebarView, {guests:model.model.numberOfGuests, 
                                    minusOne: ()=> model.model.setNumberOfGuests(model.model.getNumberOfGuests()-1)
        
        }));
    return root;
}