const  DishSource={
    apiCall(Params) {
     return fetch(BASE_URL+Params,{
             "method": "GET",
             "headers": {
          'X-Mashape-Key' : API_KEY
          }
     }).then(response => response.json())          

 },

 searchDishes({type, query}) { 
     if (!type){
         type="";
     }
     if(!query){
         query="";
     }
     return this.apiCall("recipes/search?type="+type+"&query="+query)  
     .then(data=>data.results)
  },

  getDishDetails(id){
      if(!id){
          id="";
      }
    return this.apiCall("recipes/"+id+"/information")  
    .then(data=>data);    

  }







 }; 