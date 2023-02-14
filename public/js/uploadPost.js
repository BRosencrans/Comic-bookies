let isLoggedIn = document.cookie.includes("isLoggedIn=true");
if (isLoggedIn) {
let logoutBtn = document.createElement("button");
logoutBtn.innerText = "Log Out";
logoutBtn.addEventListener("click", logout);
document.getElementById("logoutBtn").appendChild(logoutBtn);
} else {
document.getElementById("logoutBtn").innerHTML = "";
}




document.querySelector("#post-form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("clicked");
    let inputTitle = document.querySelector("#new-title").value;
    let inputText = document.querySelector("#new-post").value;
   
  
        fetch('/api/posts', {
          method: "POST",
          credentials: "include",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              title: inputTitle,
              text: inputText,
         }),
          })
          .then((response)=> response.json())
          .then((data)=>{
              console.log("Success:",data);
              location.reload();
          })
          .catch((error)=> {
              console.log('Error:', error);
          });
      })
  