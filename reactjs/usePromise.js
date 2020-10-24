function usePromise(promise) {  
    const [data, setData]= React.useState(null);
    const [error, setError]=React.useState(null);
    React.useEffect(function(){ 
        setData(null); 
        setError(null);
        if(promise){
       promise.then(data=>setData(data)).catch(error=>setError(error));
    }}, [promise]);

    return [data, error];
}
