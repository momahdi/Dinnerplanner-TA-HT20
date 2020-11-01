const SearchResultsView= ({searchResults,dishChosen,resultChoice})=>

<div className="searchParent">
   {searchResults.map(dish=> 
   <div className="searchResult" onClick={()=> {dishChosen(dish.id);resultChoice();}}>
    <img width="100" height="100" src={imgurl+dish.image}/>
    <span key={dish.id} className="searchResult">{dish.title}</span>
    </div>)}
</div>