const reducer = (accumulator, currentValue) => accumulator + currentValue;
const types=["starter", "main course", "dessert"];
function dishType(dish){
    const tp= dish.dishTypes.filter(value => types.includes(value));
    if(tp.length)
        return tp[0];
    return "";
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
    if (ai < bi)return -1;
    if (ai > bi) return 1;
    return 0; 
}





const SidebarView= ({guests,setGuests,dishes,removeDish})=>
<div>
    <div class="sidebarbutton">
        <button onClick={()=>setGuests(guests-1)} disabled={guests ===1 } >-</button>
        {guests}
        <button onClick={()=>setGuests(guests+ 1)}>+</button>
    </div>

    <div title="sidebarDish">
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
            </tr>
            </thead>
                    {dishes.sort(compareDishes).map(dish=>(
                        <tbody>
                            <tr>
                                <td>
                                <button onClick={()=>removeDish(dish.id)}>X</button>
                                {dish.title}</td>
                                <td>{dishType(dish)}</td>
                                <td>{dish.pricePerServing*guests}</td>
                                
                                </tr>
                        </tbody>
                     ) )}

                      <tbody>
                          <tr>
                            <td>Total Menu Price</td>
                            <td></td>
                         <td>{dishes.reduce((accumulator,dish)=>accumulator+dish.pricePerServing*guests,0)}</td>
                          </tr>
                    </tbody>
                        
        </table>
    </div>
                   
                   
</div>