let isLoggedIn = document.cookie.includes("isLoggedIn=true");
if (isLoggedIn) {
let logoutBtn = document.createElement("button");
logoutBtn.innerText = "Log Out";
logoutBtn.addEventListener("click", logout);
document.getElementById("logoutBtn").appendChild(logoutBtn);
} else {
document.getElementById("logoutBtn").innerHTML = "";
}



document.querySelector("#characterForm").addEventListener("submit",e=>{
    e.preventDefault();
    const charobj={
        characters:document.querySelector("#characterRequest").value,
        }
        console.log(charobj)
   

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