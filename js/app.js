const App= ({model})=>{
 return <div className="flexParent">
        <div className="sidebar debug"><Sidebar model= {model}/></div>
        <div className="mainContent debug"><Details model={model}/></div>
       </div>
    
    }