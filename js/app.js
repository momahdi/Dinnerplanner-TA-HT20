const summaryNav=[()=> window.location.hash="summary", "Summary"];
const backToSearch=[()=>window.location.hash="search", "Back to search"];



const App= ({model})=>{
 return <div className="flexParent">
        <div className="sidebar debug"><Sidebar model= {model}/></div>
        <div className="mainContent debug">
           <Show hash="#search"><Search model ={model} nav={summaryNav} resultChoice={()=> window.location.hash="#details"}/></Show>
           <Show hash="#summary"><Summary model={model} nav={backToSearch}/></Show>
           <Show hash="#details"><Details model={model} cancel={backToSearch}/></Show>
       </div>
      </div>
    }