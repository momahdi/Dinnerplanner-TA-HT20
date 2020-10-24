const SearchResultsView= ({searchResults})=>

<div className="searchParent">
   {searchResults.map(dish=> 
   <div className="searchResult" >
    <img width="100" height="100" src={imgurl+dish.image}/>
    <span key={dish.id} className="searchResult">{dish.title}</span>
    </div>)}
</div>