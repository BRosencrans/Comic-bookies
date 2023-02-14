import { isLoggedIn } from "./isLoggedIn.js";



if (isLoggedIn) {
  let logoutBtn = document.createElement("button");
  logoutBtn.innerText = "Log Out";
  logoutBtn.addEventListener("click", logout);
  document.getElementById("logoutBtn").appendChild(logoutBtn);
} else {
  document.getElementById("logoutBtn").innerHTML = "";
}

function logout() {
  isLoggedIn = false;
  alert("logged you out");
  document.getElementById("logoutBtn").innerHTML = "";
}
