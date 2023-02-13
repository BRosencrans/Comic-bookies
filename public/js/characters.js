document.querySelector("#loadChars").addEventListener("submit",e=>{
    e.preventDefault();

   

    fetch("/api/characters",{
        method:"GET",
        body:JSON.stringify(charObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("trumpet sound")
        }
    })
})