const App= ({model})=>{
 return <div className="flexParent">
        <div className="sidebar debug"><Sidebar model= {model}/></div>
        <div className="mainContent debug">
           <div class="debug"><Search model ={model}/></div>
           <div class="debug"><Details model={model}/></div>
           <Summary model={model}/>
       </div>
      </div>
    }