const Search={
    props: ["model","nav", "resultChoice"],
    data(){
        return { 
           promise: DishSource.searchDishes({}), 
           data:"", 
           error:""
        };
    },
    created(){
      this.promise.then(data=>this.data=data).catch(err=>this.error=err);
    },    
    render(h){  return h("div", {},
    [
        SearchFormView({
           h,
           onText: x=> this.text=x,
           onType: x=> this.type=x,
           onSearch: ()=> 
           promise= DishSource.searchDishes({type:this.type,text:this.text}), 
           data:"", 
           error:""
             
           , nav: this.nav
         })
        ,
         promiseNoData(this.promise,this.data,this.error, h) || 
            SearchResultsView( {
                h,
                searchResults:this.data,
                dishChosen: dishId=>this.model.setCurrentDish(dishId),
                resultChoice:this.resultChoice
             })
    ]); } 
}

