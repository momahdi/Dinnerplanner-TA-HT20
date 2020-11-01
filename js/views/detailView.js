const DetailsView=({dish,guests,dishAdded,isDishInMenu,addLabel,cancel:[navCallback,navLabel],h})=> 
<div>
<button onClick={navCallback}>{navLabel}</button>
<button className="addDish"onClick={()=>dishAdded(dish)} disabled={isDishInMenu(dish.id)}>
  {addLabel}
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
