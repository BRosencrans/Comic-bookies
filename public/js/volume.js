
document.querySelector("#volumeForm").addEventListener("submit",e=>{
    e.preventDefault();
    const volObj = {
        volume:document.querySelector("#volumeRequest").value,
    }
    console.log(volObj)

    fetch("/api/volume",{
        method:"POST",
        body:JSON.stringify(volObj),
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