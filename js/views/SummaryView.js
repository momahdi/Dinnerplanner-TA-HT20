function compareIngredients(a,b){
  if(a.aisle < b.aisle)
     return -1;
  if (a.aisle > b.aisle)
  return 1;

  return 0;
}






function SummaryView(props){
   
   return <div title="summary">
       Dinner for
       <span title="nr.guests"> {props.guests} </span>
         guests
         <div title="sidebarDish">
        <table>
        <thead>
            <tr>
                <th>Ingredient</th>
                <th>Aisle</th>
                <th>Quantity</th>
            </tr>
            </thead>
                    {props.menuIngredient(props.dishes).sort(compareIngredients).map(ing=>(
                        <tbody>
                            <tr>
                                <td>{ing.name}</td>
                                <td>{ing.aisle}</td>
                                <td>{ing.amount}</td>
                           </tr>
                        </tbody>
                     ))}                  
        </table>
    </div>
                   
             
    </div>
}