document.querySelector("#logout").addEventListener("click", () => {
  fetch("api/user/logout", {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      location.reload();
    } else {
      alert("logged out");
    }
  });
});
