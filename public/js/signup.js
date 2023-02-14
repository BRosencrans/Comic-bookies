let isLoggedIn = document.cookie.includes("isLoggedIn=true");
if (isLoggedIn) {
let logoutBtn = document.createElement("button");
logoutBtn.innerText = "Log Out";
logoutBtn.addEventListener("click", logout);
document.getElementById("logoutBtn").appendChild(logoutBtn);
} else {
document.getElementById("logoutBtn").innerHTML = "";
}




document.querySelector("#signupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const signupObj = {
        email:document.querySelector("#signupEmail").value,
        username:document.querySelector('#signup-username').value,
        password:document.querySelector("#signupPassword").value,
    }
    console.log(signupObj)

    fetch("/api/users/signup",{
        method:"POST",
        body:JSON.stringify(signupObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/"
           alert('account created')
        } else {
            alert("nope")
        }
    })
})