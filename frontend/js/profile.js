// frontend/js/profile.js
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  
  // Check authentication
  if (!token) {
    alert("Please login to access your profile");
    window.location.href = "login.html";
    return;
  }

  // Display user info
  const profileUsername = document.getElementById("profileUsername");
  const profileEmail = document.getElementById("profileEmail");
  
  if (profileUsername) {
    profileUsername.textContent = username || "User";
  }
  
  if (profileEmail) {
    profileEmail.textContent = `${username}@example.com` || "user@example.com";
    document.getElementById("email").value = `${username}@example.com`;
  }

  // Profile navigation
  const navButtons = document.querySelectorAll(".profile-nav-btn");
  const sections = document.querySelectorAll(".profile-section");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active button
      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Show corresponding section
      const sectionId = btn.dataset.section + "-section";
      sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === sectionId) {
          section.classList.add("active");
        }
      });
    });
  });

  // Account Settings Form
  const accountForm = document.getElementById("accountForm");
  if (accountForm) {
    accountForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fullName = document.getElementById("fullName").value;
      alert(`✅ Account settings saved!\n\nName: ${fullName || username}`);
    });
  }

  // Platform connections
  const connectButtons = document.querySelectorAll(".connect-btn");
  const disconnectButtons = document.querySelectorAll(".disconnect-btn");

  connectButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const platformItem = e.target.closest(".platform-item");
      const platformName = platformItem.querySelector("h4").textContent;
      
      alert(`🔗 Connecting to ${platformName}...\n\nIn production, this would:\n1. Redirect to OAuth page\n2. Request permissions\n3. Store access tokens\n4. Start syncing data`);
      
      // Simulate connection
      platformItem.classList.add("connected");
      btn.textContent = "Disconnect";
      btn.classList.remove("connect-btn");
      btn.classList.add("disconnect-btn");
    });
  });

  disconnectButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const platformItem = e.target.closest(".platform-item");
      const platformName = platformItem.querySelector("h4").textContent;
      
      if (confirm(`Disconnect from ${platformName}?`)) {
        platformItem.classList.remove("connected");
        btn.textContent = "Connect";
        btn.classList.remove("disconnect-btn");
        btn.classList.add("connect-btn");
        alert(`✅ Disconnected from ${platformName}`);
      }
    });
  });

  // Preferences Form
  const preferencesForm = document.getElementById("preferencesForm");
  if (preferencesForm) {
    preferencesForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Preferences saved successfully!");
    });
  }

  // Plan selection
  const selectPlanButtons = document.querySelectorAll(".select-plan-btn");
  selectPlanButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const planCard = e.target.closest(".plan-card");
      const planName = planCard.querySelector("h4").textContent;
      const planPrice = planCard.querySelector(".plan-price").textContent;
      
      alert(`🎯 Upgrading to ${planName}\n\nPrice: ${planPrice}\n\nIn production, this would:\n1. Redirect to payment page\n2. Process payment\n3. Update subscription\n4. Send confirmation email`);
    });
  });

  // Upgrade button
  const upgradeBtn = document.querySelector(".upgrade-btn");
  if (upgradeBtn) {
    upgradeBtn.addEventListener("click", () => {
      // Scroll to upgrade options
      document.querySelector(".upgrade-options").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Security Form
  const securityForm = document.getElementById("securityForm");
  if (securityForm) {
    securityForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const currentPassword = document.getElementById("currentPassword").value;
      const newPassword = document.getElementById("newPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (!currentPassword || !newPassword || !confirmPassword) {
        alert("❌ Please fill in all password fields");
        return;
      }

      if (newPassword !== confirmPassword) {
        alert("❌ New passwords don't match!");
        return;
      }

      if (newPassword.length < 8) {
        alert("❌ Password must be at least 8 characters long");
        return;
      }

      alert("✅ Password updated successfully!");
      securityForm.reset();
    });
  }

  // Enable 2FA
  const enable2faBtn = document.querySelector(".enable-2fa-btn");
  if (enable2faBtn) {
    enable2faBtn.addEventListener("click", () => {
      alert("🔐 Enable Two-Factor Authentication\n\nIn production, this would:\n1. Generate QR code\n2. Ask user to scan with authenticator app\n3. Verify setup with code\n4. Provide backup codes");
    });
  }

  // Delete account
  const deleteAccountBtn = document.querySelector(".delete-account-btn");
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener("click", () => {
      const confirmation = confirm("⚠️ WARNING: This action cannot be undone!\n\nAre you sure you want to delete your account?\n\nAll your data will be permanently deleted.");
      
      if (confirmation) {
        const doubleCheck = confirm("This is your last chance!\n\nType 'DELETE' to confirm account deletion.");
        
        if (doubleCheck) {
          alert("Account deletion initiated.\n\nIn production, this would:\n1. Send verification email\n2. Schedule account deletion\n3. Remove all data\n4. Cancel subscriptions");
        }
      }
    });
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      alert("Logged out successfully!");
      window.location.href = "login.html";
    });
  }
});
