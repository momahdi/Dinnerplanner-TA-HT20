const SearchFormView=({onSearch, onType, onText,nav:[navCallback,navLabel],h})=> 
<div>
<input  type="text" onChange={event=>onText(event.target.value)}/>

            <select onChange={event=> onType(event.target.value)}>
            {["starter", "main course", "dessert"].map(k=> <option key={k} >{k}</option>)}
            </select>
            <button onClick={onSearch} className="btn">Search</button>
            <button onClick={navCallback} className="btn">{navLabel}</button>
            
</div>;