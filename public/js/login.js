
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || false;

document.querySelector("#login-btn").addEventListener("click", e => {
  e.preventDefault();
  const loginObj = {
    username: document.querySelector("#loginUsername").value,
    password: document.querySelector("#loginPassword").value,
  };
  
  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(loginObj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.status)
    if (res.ok) {
      location.href = "/";
      alert('logged in');

   
      isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");

      if (isLoggedIn) {
        let logoutBtn = document.createElement("button");
        logoutBtn.innerText = "Log Out";
        logoutBtn.addEventListener("click", logout);
        document.getElementById("logoutBtn").appendChild(logoutBtn);
      } else {
        document.getElementById("logoutBtn").innerHTML = "";
      }
    } else {
      alert("username or password are incorrect");
    }
  });
});

function logout() {

  isLoggedIn = false;
  localStorage.removeItem("isLoggedIn");

  alert("logged you out");
  document.getElementById("logoutBtn").innerHTML = "";
}
