
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      window.location.href = "index.html";
    });
  });
}



const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.message === "Login success") {
        localStorage.setItem("user", username);
        window.location.href = "dashboard.html";
      } else {
        alert(data.message);
      }
    });
  });
}