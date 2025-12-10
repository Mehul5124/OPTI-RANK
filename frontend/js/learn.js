// frontend/js/learn.js
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("learnSearchInput");
  const searchBtn = document.getElementById("searchBtn");
  const categoryTabs = document.querySelectorAll(".tab-btn");
  const learningCards = document.querySelectorAll(".learning-card");
  const logoutBtn = document.getElementById("logoutBtn");

  // Check authentication
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login to access learning resources");
    window.location.href = "login.html";
    return;
  }

  // Category filtering
  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Update active tab
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.dataset.category;
      filterByCategory(category);
    });
  });

  // Search functionality
  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      alert("Logged out successfully!");
      window.location.href = "login.html";
    });
  }

  // Filter cards by category
  function filterByCategory(category) {
    learningCards.forEach(card => {
      if (category === "all") {
        card.style.display = "block";
        setTimeout(() => card.classList.add("show"), 10);
      } else if (card.dataset.category === category) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("show"), 10);
      } else {
        card.classList.remove("show");
        setTimeout(() => card.style.display = "none", 300);
      }
    });
  }

  // Search through courses
  function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
      // Show all cards
      learningCards.forEach(card => {
        card.style.display = "block";
      });
      return;
    }

    learningCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();
      
      if (title.includes(query) || description.includes(query)) {
        card.style.display = "block";
        card.classList.add("highlight");
        setTimeout(() => card.classList.remove("highlight"), 2000);
      } else {
        card.style.display = "none";
      }
    });
  }

  // Download resource - Navigate to resource viewer
  const downloadLinks = document.querySelectorAll(".download-link");
  downloadLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // Get the h4 element which is the previous sibling of the link
      const resourceName = link.parentElement.querySelector('h4').textContent;
      
      // Map resource names to IDs
      const resourceMap = {
        'SEO Checklist 2025': 'seo-checklist',
        'Social Media Calendar': 'social-calendar',
        'Hashtag Research Guide': 'hashtag-guide',
        'Analytics Dashboard Template': 'analytics-dashboard'
      };
      
      const resourceId = resourceMap[resourceName];
      if (resourceId) {
        window.location.href = `resource.html?id=${resourceId}`;
      }
    });
  });
});

// Open course (can be expanded to show course details)
function openCourse(courseId) {
  window.location.href = `course.html?id=${courseId}`;
}

