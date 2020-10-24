const App= ({model})=>{
 return <div class="flexParent">
        <div class="sidebar debug"><Sidebar model= {model}/></div>
        <div class="mainContent debug"><Details model={model}/></div>
       </div>
    
    }