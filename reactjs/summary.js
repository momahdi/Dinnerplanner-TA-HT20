function Summary({model}){
    const guests =useModelProp(model, "numberOfGuests");
    const dishes=useModelProp(model,"dishes")

    return h(SummaryView, {
        guests: guests,
        dishes:dishes,
        menuIngredient:menu=>model.presntIng(menu)
    });
}