const Summary= {
    functional:true,
    render(h, context){
        const {model, ...props}=context.props;
        return SummaryView({ 
            h,
            guests: model.getNumberOfGuests(), 
            dishes: model.getMenu(),
            menuIngredient:menu=>model.presntIng(menu),
            /* TODO: set other props needed, like in React case */
            ...props,   // spread other props (i.e. nav) 
                 // to send them unchanged to the view
        });
    } 
}
