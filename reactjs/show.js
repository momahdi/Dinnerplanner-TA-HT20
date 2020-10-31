function Show({hash, children}){  
    const [, setState]= React.useState()
    // const [route, setRoute]= React.useState(window.location.hash);
    
    /*
    React.useEffect(function(){
        window.addEventListener("hashchange",function(){
                setRoute(window.location.hash)
        });
            return()=> window.removeEventListener("hashchange", function(){
                setRoute(window.location.hash)
            })



    }); 
    */
   React.useEffect(function(){
    window.addEventListener("hashchange",function(){
            setState({})
    });
        return()=> window.removeEventListener("hashchange", function(){
            setState({})
        })



}); 
    return hash===window.location.hash? children : false;
 }   