document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
  
      try {
        const res = await fetch("http://localhost:5000/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, password })
        });
  
        const data = await res.json();
        console.log("Signup Response:", data); // Debug
  
        if (res.ok) {
          alert("Signup successful! Now login.");
          window.location.href = "login.html";
        } else {
          alert(data.message || "Signup failed. Try again.");
        }
      } catch (err) {
        console.error("Signup error:", err);
        alert("Something went wrong!");
      }
    });
  });
  