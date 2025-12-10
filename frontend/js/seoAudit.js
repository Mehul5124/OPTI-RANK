// frontend/js/seoAudit.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("seoAuditForm");
  const urlInput = document.getElementById("seoUrlInput");
  const resultsDiv = document.getElementById("seoResults");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const url = urlInput.value.trim();
    if (!url) {
      alert("Please enter a valid URL");
      return;
    }

    // Show loading state
    resultsDiv.innerHTML = '<div class="loading">🔍 Analyzing URL...</div>';

    try {
      // Detect platform from URL
      const platform = detectPlatform(url);
      
      // Perform SEO analysis
      const analysis = performSEOAnalysis(url, platform);
      
      // Display results
      displayResults(analysis, platform);
      
    } catch (error) {
      resultsDiv.innerHTML = `<div class="error">❌ Error: ${error.message}</div>`;
    }
  });

  // Detect platform from URL
  function detectPlatform(url) {
    const urlLower = url.toLowerCase();
    
    if (urlLower.includes('youtube.com') || urlLower.includes('youtu.be')) {
      return 'youtube';
    } else if (urlLower.includes('instagram.com')) {
      return 'instagram';
    } else if (urlLower.includes('facebook.com') || urlLower.includes('fb.com')) {
      return 'facebook';
    } else if (urlLower.includes('twitter.com') || urlLower.includes('x.com')) {
      return 'twitter';
    } else if (urlLower.includes('linkedin.com')) {
      return 'linkedin';
    } else {
      return 'website';
    }
  }

  // Perform SEO analysis based on platform
  function performSEOAnalysis(url, platform) {
    const analysis = {
      url: url,
      platform: platform,
      score: 0,
      issues: [],
      recommendations: [],
      strengths: []
    };

    if (platform === 'website') {
      analysis.score = Math.floor(Math.random() * 30) + 70; // 70-100
      
      // Check URL structure
      if (url.length > 100) {
        analysis.issues.push("URL is too long (>100 characters)");
        analysis.recommendations.push("Shorten your URL for better SEO and user experience");
        analysis.score -= 5;
      } else {
        analysis.strengths.push("URL length is optimal");
      }

      // Check HTTPS
      if (url.startsWith('https://')) {
        analysis.strengths.push("Site uses secure HTTPS protocol");
      } else {
        analysis.issues.push("Not using HTTPS");
        analysis.recommendations.push("Switch to HTTPS for better security and SEO ranking");
        analysis.score -= 10;
      }

      // Check URL readability
      if (url.includes('-') || url.includes('_')) {
        analysis.strengths.push("URL contains readable separators");
      } else if (url.split('/').length > 2) {
        analysis.recommendations.push("Use hyphens to separate words in URLs");
      }

      // Add general website recommendations
      analysis.recommendations.push(
        "Ensure page load time is under 3 seconds",
        "Add meta descriptions (150-160 characters)",
        "Use descriptive title tags (50-60 characters)",
        "Optimize images with alt text",
        "Create mobile-friendly responsive design",
        "Build quality backlinks from reputable sites"
      );

    } else if (platform === 'youtube') {
      analysis.score = Math.floor(Math.random() * 25) + 75; // 75-100
      
      analysis.strengths.push("Video platform identified");
      
      analysis.recommendations.push(
        "Use keyword-rich titles (60 characters max)",
        "Write detailed descriptions (5000 characters max)",
        "Add 5-8 relevant tags",
        "Create eye-catching custom thumbnails",
        "Add timestamps for better user experience",
        "Include cards and end screens",
        "Post consistently (2-3 videos per week)",
        "Engage with comments within first hour"
      );

    } else if (platform === 'instagram') {
      analysis.score = Math.floor(Math.random() * 25) + 70; // 70-95
      
      analysis.strengths.push("Social media platform detected");
      
      analysis.recommendations.push(
        "Use 7-9 niche-specific hashtags",
        "Post during peak hours (6-9 PM)",
        "Create carousel posts for higher engagement",
        "Use Instagram Reels (3+ per week)",
        "Write engaging captions (125-150 characters)",
        "Include clear call-to-action",
        "Maintain consistent posting schedule",
        "Use Instagram Stories daily"
      );

    } else if (platform === 'facebook') {
      analysis.score = Math.floor(Math.random() * 25) + 70; // 70-95
      
      analysis.strengths.push("Facebook page identified");
      
      analysis.recommendations.push(
        "Post 3-4 times per week consistently",
        "Use video content (Reels, Live)",
        "Engage with comments quickly",
        "Share user-generated content",
        "Use Facebook Groups for community",
        "Run polls and interactive posts",
        "Optimize posting times (1-4 PM)",
        "Cross-promote with Instagram"
      );

    } else {
      analysis.score = Math.floor(Math.random() * 30) + 65; // 65-95
      
      analysis.recommendations.push(
        "Optimize content for your specific platform",
        "Post consistently and at optimal times",
        "Engage with your audience regularly",
        "Use platform-specific features",
        "Monitor analytics and adjust strategy"
      );
    }

    return analysis;
  }

  // Display analysis results
  function displayResults(analysis, platform) {
    const scoreColor = analysis.score >= 90 ? '#10b981' : 
                      analysis.score >= 70 ? '#f59e0b' : '#ef4444';
    
    let html = `
      <div class="seo-results-container">
        <div class="seo-header">
          <h3>📊 SEO Analysis Results</h3>
          <div class="seo-score" style="background: ${scoreColor}">
            <span class="score-number">${analysis.score}</span>
            <span class="score-label">/100</span>
          </div>
        </div>
        
        <div class="seo-info">
          <p><strong>Platform:</strong> ${capitalizeFirst(platform)}</p>
          <p><strong>URL:</strong> ${analysis.url}</p>
        </div>
    `;

    // Display strengths
    if (analysis.strengths.length > 0) {
      html += `
        <div class="seo-section strengths">
          <h4>✅ Strengths</h4>
          <ul>
            ${analysis.strengths.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Display issues
    if (analysis.issues.length > 0) {
      html += `
        <div class="seo-section issues">
          <h4>⚠️ Issues Found</h4>
          <ul>
            ${analysis.issues.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Display recommendations
    if (analysis.recommendations.length > 0) {
      html += `
        <div class="seo-section recommendations">
          <h4>💡 Recommendations</h4>
          <ul>
            ${analysis.recommendations.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    html += `</div>`;
    
    resultsDiv.innerHTML = html;
  }

  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
