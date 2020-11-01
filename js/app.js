const summaryNav=[()=> window.location.hash="summary", "Summary"];
const backToSearch=[()=>window.location.hash="search", "Back to search"];
const addToMenu=[()=>window.location.hash="search", "Add to menu"];
const dishChoice=()=>window.location.hash="details";


function defaultRoute(){
  if(! ["#search", "#summary", "#details"].find(knownRoute=> knownRoute===window.location.hash))
  window.location.hash="#search";
}
defaultRoute();

addEventListener("hashchange",function(){
  defaultRoute();
})


const App= ({model,h})=>{
 return <div className="flexParent">
        <div className="sidebar debug"><Sidebar model={model} dishChoiceRoute="#details" dishChoice={dishChoice}/></div>

        <div className="mainContent debug">

           <Show hash="#summary"><Summary model={model} nav={backToSearch}/></Show>
    
       </div>
      </div>
    }