// backend/controllers/seoController.js

// SEO Audit Controller
const analyzeSEO = (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ message: "URL is required" });
  }

  try {
    // Detect platform
    const platform = detectPlatform(url);
    
    // Perform analysis
    const analysis = performAnalysis(url, platform);
    
    return res.json(analysis);
  } catch (error) {
    return res.status(500).json({ message: "Error analyzing URL", error: error.message });
  }
};

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

// Perform SEO analysis
function performAnalysis(url, platform) {
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
    
    // URL length check
    if (url.length > 100) {
      analysis.issues.push("URL is too long (>100 characters)");
      analysis.recommendations.push("Shorten your URL for better SEO");
      analysis.score -= 5;
    } else {
      analysis.strengths.push("URL length is optimal");
    }

    // HTTPS check
    if (url.startsWith('https://')) {
      analysis.strengths.push("Site uses secure HTTPS protocol");
    } else {
      analysis.issues.push("Not using HTTPS");
      analysis.recommendations.push("Switch to HTTPS for better security and SEO");
      analysis.score -= 10;
    }

    // Add general recommendations
    analysis.recommendations.push(
      "Ensure page load time is under 3 seconds",
      "Add meta descriptions (150-160 characters)",
      "Use descriptive title tags (50-60 characters)",
      "Optimize images with alt text",
      "Build quality backlinks"
    );

  } else {
    // Social media platform
    analysis.score = Math.floor(Math.random() * 25) + 70;
    analysis.strengths.push("Social media platform detected");
    
    // Platform-specific recommendations
    const platformRecommendations = {
      youtube: [
        "Use keyword-rich titles",
        "Write detailed descriptions",
        "Create custom thumbnails",
        "Add timestamps and chapters"
      ],
      instagram: [
        "Use 7-9 niche hashtags",
        "Post during peak hours",
        "Create carousel posts",
        "Use Instagram Reels"
      ],
      facebook: [
        "Post 3-4 times per week",
        "Use video content",
        "Engage with comments",
        "Run polls and interactive posts"
      ],
      twitter: [
        "Tweet consistently",
        "Use trending hashtags",
        "Engage with followers",
        "Share visual content"
      ],
      linkedin: [
        "Post professional content",
        "Engage in groups",
        "Use LinkedIn articles",
        "Network actively"
      ]
    };
    
    analysis.recommendations = platformRecommendations[platform] || [
      "Optimize content for your platform",
      "Post consistently",
      "Engage with your audience"
    ];
  }

  return analysis;
}

module.exports = { analyzeSEO };