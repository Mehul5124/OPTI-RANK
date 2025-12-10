// frontend/js/blog.js
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("blogSearchInput");
  const searchBtn = document.getElementById("searchBtn");
  const categoryTabs = document.querySelectorAll(".tab-btn");
  const blogCards = document.querySelectorAll(".blog-card");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const newsletterForm = document.getElementById("newsletterForm");
  const logoutBtn = document.getElementById("logoutBtn");

  // Check authentication
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login to access blog");
    window.location.href = "login.html";
    return;
  }

  // Add image error handling
  const allImages = document.querySelectorAll(".blog-image img, .featured-image img");
  allImages.forEach(img => {
    img.addEventListener("error", function() {
      // Fallback to a solid color placeholder if image fails to load
      this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='white'%3EBlog Image%3C/text%3E%3C/svg%3E";
    });
  });

  // Initially show first 6 posts
  let visibleCount = 6;
  showPosts(visibleCount);

  // Category filtering
  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
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

  // Load more posts
  loadMoreBtn.addEventListener("click", () => {
    visibleCount += 6;
    showPosts(visibleCount);
    
    if (visibleCount >= blogCards.length) {
      loadMoreBtn.style.display = "none";
    }
  });

  // Newsletter subscription
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`✅ Thank you for subscribing!\n\nWe'll send weekly marketing insights to ${email}`);
    e.target.reset();
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

  // Show specific number of posts
  function showPosts(count) {
    blogCards.forEach((card, index) => {
      if (index < count) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    if (count >= blogCards.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "block";
    }
  }

  // Filter by category
  function filterByCategory(category) {
    visibleCount = 100; // Show all when filtering
    loadMoreBtn.style.display = "none";

    blogCards.forEach(card => {
      if (category === "all") {
        card.style.display = "block";
      } else if (card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Search through blog posts
  function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
      blogCards.forEach(card => card.style.display = "block");
      showPosts(6);
      return;
    }

    visibleCount = 100;
    loadMoreBtn.style.display = "none";

    blogCards.forEach(card => {
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
});

// Open blog post (can be expanded with full article)
function openBlogPost(postId) {
  window.location.href = `post.html?id=${postId}`;
}

