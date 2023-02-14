let isLoggedIn = document.cookie.includes("isLoggedIn=true");
if (isLoggedIn) {
let logoutBtn = document.createElement("button");
logoutBtn.innerText = "Log Out";
logoutBtn.addEventListener("click", logout);
document.getElementById("logoutBtn").appendChild(logoutBtn);
} else {
document.getElementById("logoutBtn").innerHTML = "";
}




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