const Details={
    props:["model", "ok", "cancel"],
    data(){
       return {
         promise: this.model.currentDish && DishSource.getDishDetails(this.model.currentDish),
         data:null, 
         error:null     
        };
      },
     created(){
        this.promise.then(data=>this.data=data).catch(err=>this.error=err)
      },
      watch:{
          'model.currentDish': function(){
                this.promise= this.model.currentDish&& DishSource.getDishDetails(this.model.currentDish);
                this.data=null;   
                this.error=null;
                this.promise.then(data=>this.data=data).catch(err=>this.error=err);
          }
      },
      render(h){ 
         return promiseNoData(this.promise,this.data,this.error, h) ||
                DetailsView({
                    h, 
                    dish :this.data,
                    guests:this.model.getNumberOfGuests(),
                    dishAdded:(dish)=>{this.model.addToMenu(dish);addNav=this.ok[0]},
                    addLabel: this.ok[1],
                    isDishInMenu:dishID=>this.model.getMenu().find(dish1=> dish1.id===dishID),
                    cancel: this.cancel
                });
      } 
  };
  