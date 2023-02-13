ocument.querySelector("#publisherForm").addEventListener("submit",e=>{
    e.preventDefault();
    const pubObj = {
        publisher:document.querySelector("#publisherRequest").value,
    }
    console.log(pubObj)

    fetch("/api/publishers",{
        method:"POST",
        body:JSON.stringify(pubObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("aww shucks")
        }
    })
})