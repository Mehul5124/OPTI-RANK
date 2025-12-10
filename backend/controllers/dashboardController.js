// controllers/dashboardController.js

const getDashboardData = (req, res) => {
  const { platform, filter } = req.query;

  if (!platform || !filter) {
    return res.status(400).json({ message: "Platform and filter are required" });
  }

  switch (platform.toLowerCase()) {
    case 'website': {
      const data = generateWebsiteData(filter);
      data.recommendations = generateRecommendations('website', data);
      return res.json(data);
    }
    case 'instagram':
    case 'facebook':
    case 'youtube': {
      const data = generateSocialData(platform, filter);
      data.recommendations = generateRecommendations(platform, data);
      return res.json(data);
    }
    default:
      return res.status(400).json({ message: "Invalid platform" });
  }
};

// 🌐 Website Data
const generateWebsiteData = (filter) => {
  return {
    platform: 'website',
    filter,
    views: getMetricByFilter(filter, 1000, 8000),
    likes: getMetricByFilter(filter, 100, 3000),
    avgTimeSpent: `${getRandomNumber(1, 5)}m ${getRandomNumber(0, 59)}s`,
    totalBlogs: getMetricByFilter(filter, 10, 100),
    topBlogs: generateTopItems("Blog", 5)
  };
};

// 📱 Social Media Data
const generateSocialData = (platform, filter) => {
  const capital = platform.charAt(0).toUpperCase() + platform.slice(1);

  const baseData = {
    platform,
    filter,
    views: getMetricByFilter(filter, 500, 5000),
    likes: getMetricByFilter(filter, 1000, 1500),
    comments: getMetricByFilter(filter, 200, 600),
    shares: getMetricByFilter(filter, 100, 600),
    topPosts: generateTopItems(`${capital} Post`, 5),
  };

  if (platform === 'instagram') {
    baseData.followersGrowth = getMetricByFilter(filter, 100, 250);
    baseData.topReels = generateTopItems(`${capital} Reel`, 5);
    baseData.topStories = generateTopItems(`${capital} Story`, 5);
  }

  if (platform === 'facebook') {
    baseData.reach = getMetricByFilter(filter, 2000, 8000);
    baseData.topReels = generateTopItems(`${capital} Reel`, 5);
    baseData.topStories = generateTopItems(`${capital} Story`, 5);
  }

  if (platform === 'youtube') {
    baseData.subscribers = getMetricByFilter(filter, 200, 800);
    baseData.watchTime = `${getRandomNumber(1, 12)}h ${getRandomNumber(0, 59)}m`;
  }

  return baseData;
};

// ✅ Smart Recommendations
const generateRecommendations = (platform, data) => {
  const tips = {
    instagram: [
      { condition: d => d.views < 5000, tip: "Post during peak hours (6–9 PM) to boost views." },
      { condition: d => d.likes < 3000, tip: "Use carousel posts for higher engagement." },
      { condition: d => d.followersGrowth < 200, tip: "Reels help grow followers faster — post at least 3 per week." },
      { condition: d => d.shares < 500, tip: "Ask users to 'Share this' in your captions." },
      { condition: () => true, tip: "Use niche hashtags (7–9) to improve discovery." }
    ],
    facebook: [
      { condition: d => d.reach < 10000, tip: "Invite post likers to follow your page." },
      { condition: d => d.likes < 2000, tip: "Use emotional or relatable copy for higher engagement." },
      { condition: d => d.shares < 400, tip: "Include a strong quote or opinion to trigger shares." },
      { condition: () => true, tip: "Post consistently 3–4x a week for steady growth." }
    ],
    youtube: [
      { condition: d => d.views < 10000, tip: "Use eye-catching thumbnails to improve CTR." },
      { condition: d => d.subscribers < 1000, tip: "Remind viewers to subscribe at start & end of video." },
      { condition: d => d.watchTime.includes("1h"), tip: "Add timestamps or chapters to improve watch time." },
      { condition: () => true, tip: "Include a hook in the first 10 seconds to retain attention." }
    ],
    website: [
      { condition: d => d.views < 5000, tip: "Improve page speed – aim for < 3s loading time." },
      { condition: d => d.avgTimeSpent.startsWith("1m"), tip: "Use more visuals & headings to keep users engaged." },
      { condition: d => d.totalBlogs < 20, tip: "Post at least 2 SEO blogs/week to grow traffic." },
      { condition: () => true, tip: "Add call-to-action buttons to convert visitors into leads." }
    ]
  };

  const pool = tips[platform.toLowerCase()] || [];
  const matched = pool.filter(t => t.condition(data));
  const shuffled = matched.sort(() => 0.5 - Math.random());
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  return shuffled.slice(0, 2).map(t => `${capitalize(platform)}: ${t.tip}`);

};

// 🎯 Smart Filter Scaling
const getMetricByFilter = (filter, shortRange, longRange) => {
  switch (filter) {
    case '1hr': return getRandomNumber(shortRange, shortRange + 100);
    case '1d': return getRandomNumber(shortRange + 100, shortRange + 500);
    case '15d': return getRandomNumber(longRange + 3000, longRange + 1000);
    case '30d': return getRandomNumber(longRange + 1500, longRange);
    default: return getRandomNumber(shortRange, longRange);
  }
};

// 🔄 Top Items Generator
const generateTopItems = (prefix, count) => {
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push({
      title: `${prefix} #${i}`,
      views: getRandomNumber(100, 100000),
      likes: getRandomNumber(50, 100000),
      comments: getRandomNumber(10, 100000),
    });
  }
  return items;
};

// 🔢 Random Number Generator
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = { getDashboardData };
