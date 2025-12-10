document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
  
    // 🔐 If not logged in, redirect
    if (!token) {
      alert("Unauthorized. Please Signup first.");
      window.location.href = "signup.html";
      return;
    }
  
    // 🎉 Show username
    const welcomeMessage = document.getElementById("welcomeMessage");
    const username = localStorage.getItem("username") || "User";
    welcomeMessage.innerText = `Welcome, ${username}`;
  
    // ✅ Platforms to render
    const platforms = ["website", "instagram", "facebook", "youtube"];
  
    // 👇 Load dashboards
    platforms.forEach(platform => {
      const section = document.querySelector(`.platform-section[data-platform="${platform}"]`);
      if (section) {
        setupFilterButtons(section, platform);
        loadDashboard(platform, "7d", section); // default
      }
    });
  
    // 👤 Create account button (legacy - now we have logout)
    const createBtn = document.getElementById("createAccountBtn");
    if (createBtn) {
      createBtn.addEventListener("click", () => {
        window.location.href = "signup.html";
      });
    }

    // 🚪 Logout button
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        alert("Logged out successfully!");
        window.location.href = "login.html";
      });
    }
  
    // 📦 FETCH DASHBOARD DATA
    async function loadDashboard(platform, filter, section) {
      try {
        const res = await fetch(`http://localhost:5000/api/dashboard?platform=${platform}&filter=${filter}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        const data = await res.json();
        renderMetrics(data, section);
        renderRecommendations(data.recommendations, section);
      } catch (err) {
        console.error(`Error loading data for ${platform}:`, err);
      }
    }
  
    // 🧠 Render metric cards
    function renderMetrics(data, section) {
      const metricBox = document.createElement("div");
      metricBox.className = "cards";
  
      for (let key in data) {
        if (
          typeof data[key] === "number" ||
          (typeof data[key] === "string" && !key.includes("platform") && !key.includes("filter"))
        ) {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `<h4>${key}</h4><p>${data[key]}</p>`;
          metricBox.appendChild(card);
        }
      }
  
      const existingCards = section.querySelector(".cards");
      if (existingCards) existingCards.remove();
      section.appendChild(metricBox);
    }
  
    // 💡 Smart tips
    function renderRecommendations(recommendations, section) {
      const ul = document.createElement("ul");
      ul.className = "recommendationList";
  
      recommendations.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = `💡 ${tip}`;
        ul.appendChild(li);
      });
  
      const existingUl = section.querySelector(".recommendationList");
      if (existingUl) existingUl.remove();
  
      section.querySelector(".recommendation-box").appendChild(ul);
    }
  
    // 🕐 Filter buttons
    function setupFilterButtons(section, platform) {
      const buttons = section.querySelectorAll(".timeframe-buttons button");
  
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const filter = btn.textContent;
          loadDashboard(platform, filter, section);
        });
      });
    }
  });
  