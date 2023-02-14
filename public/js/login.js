document.querySelector("#loginForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        username:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
    }
    console.log(loginObj)

    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(loginObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        console.log(res.status)
        if(res.ok){
           location.href="/"
           alert('logged in')
        } else {
            alert("username or password are incorrect")
        }
    })
})