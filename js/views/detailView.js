const DetailsView=({dish,guests,dishAdded,isDishInMenu})=> 
<div>
<button className="addDish"onClick={()=>dishAdded(dish)} disabled={isDishInMenu(dish.id)}>
  ADD
</button>
<h3>{dish.title}</h3>
<img width="200" heigth="200"src={dish.image}/>
<div>Price: {dish.pricePerServing}</div>
<div>for {guests} : {dish.pricePerServing*guests}</div>
<div>{dish.extendedIngredients.map(ingredient=><div>{ingredient.name} {ingredient.amount}</div>)}</div>
<div>{dish.instructions}</div>
<a href={dish.sourceUrl} target="_blank">
          {" "}
          More information
        </a>
</div>
