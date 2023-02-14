let isLoggedIn = document.cookie.includes("isLoggedIn=true");
if (isLoggedIn) {
let logoutBtn = document.createElement("button");
logoutBtn.innerText = "Log Out";
logoutBtn.addEventListener("click", logout);
document.getElementById("logoutBtn").appendChild(logoutBtn);
} else {
document.getElementById("logoutBtn").innerHTML = "";
}

document.querySelector("#publisherForm").addEventListener("submit",e=>{
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