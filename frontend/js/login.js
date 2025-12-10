document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
  
      try {
        const res = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });
  
        const data = await res.json();
  
        if (res.ok) {
          // Save token + username in localStorage
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.name);
          alert("Login successful!");
          window.location.href = "index.html";
        } else {
          alert(data.message || "Invalid credentials.");
        }
      } catch (err) {
        alert("Login failed.");
        console.error(err);
      }
    });
  });
  