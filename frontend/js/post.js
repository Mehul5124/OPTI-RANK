// frontend/js/post.js

// Complete blog posts database
const blogPosts = {
  "featured-seo-2025": {
    title: "How to Rank #1 on Google in 2025: Complete Guide",
    category: "SEO",
    date: "Dec 8, 2025",
    readTime: "10 min",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80",
    tags: ["SEO", "Google", "Rankings", "Search Engine"],
    content: `
      <p class="lead">Ranking #1 on Google isn't luck—it's a strategic process. In this comprehensive guide, you'll discover the exact SEO strategies that are working in 2025.</p>

      <h2>Why Ranking #1 Matters More Than Ever</h2>
      <p>The top search result on Google receives <strong>28.5% of all clicks</strong>. That's more than positions 2-5 combined. If you're not on page one, you're practically invisible—only 0.63% of people click to page two.</p>

      <div class="stats-box">
        <h3>📊 Search Statistics 2025</h3>
        <ul>
          <li>Position #1 gets 28.5% CTR</li>
          <li>Position #2 gets 15.7% CTR</li>
          <li>Position #3 gets 11.0% CTR</li>
          <li>53% of all website traffic is organic search</li>
        </ul>
      </div>

      <h2>Step 1: Target the Right Keywords</h2>
      <p>You can't rank for everything. Focus on keywords with:</p>
      <ul>
        <li><strong>Search Intent Match:</strong> Your content must match what searchers want</li>
        <li><strong>Achievable Difficulty:</strong> Target keywords with KD under 40 if you're new</li>
        <li><strong>Business Value:</strong> Will this keyword bring you customers?</li>
        <li><strong>Search Volume Sweet Spot:</strong> 1,000-10,000 monthly searches</li>
      </ul>

      <h3>The Keyword Research Process</h3>
      <ol>
        <li>Start with seed keywords (your main topics)</li>
        <li>Use Ahrefs/SEMrush to expand your list</li>
        <li>Analyze competitor rankings</li>
        <li>Check search intent by googling the keyword</li>
        <li>Prioritize based on difficulty vs. opportunity</li>
      </ol>

      <h2>Step 2: Understand Search Intent</h2>
      <p>Google's algorithm is obsessed with intent. There are 4 types:</p>

      <div class="intent-grid">
        <div class="intent-card">
          <h4>🔍 Informational</h4>
          <p><strong>Example:</strong> "how to rank on google"</p>
          <p><strong>Content Type:</strong> Blog posts, guides, tutorials</p>
        </div>
        <div class="intent-card">
          <h4>🧭 Navigational</h4>
          <p><strong>Example:</strong> "semrush login"</p>
          <p><strong>Content Type:</strong> Brand/product pages</p>
        </div>
        <div class="intent-card">
          <h4>🛒 Commercial</h4>
          <p><strong>Example:</strong> "best seo tools 2025"</p>
          <p><strong>Content Type:</strong> Comparisons, reviews, listicles</p>
        </div>
        <div class="intent-card">
          <h4>💳 Transactional</h4>
          <p><strong>Example:</strong> "buy semrush subscription"</p>
          <p><strong>Content Type:</strong> Product/service pages</p>
        </div>
      </div>

      <h2>Step 3: Create 10x Content</h2>
      <p>Your content needs to be 10 times better than what's currently ranking. Here's how:</p>

      <h3>Content Quality Checklist</h3>
      <ul>
        <li>✅ <strong>Length:</strong> Match or exceed top-ranking content (usually 1,500-2,500 words)</li>
        <li>✅ <strong>Depth:</strong> Cover subtopics competitors miss</li>
        <li>✅ <strong>Freshness:</strong> Include 2025 data and examples</li>
        <li>✅ <strong>Visuals:</strong> Add screenshots, diagrams, infographics</li>
        <li>✅ <strong>Readability:</strong> Use short paragraphs, bullet points, subheadings</li>
        <li>✅ <strong>Original Research:</strong> Include unique data or case studies</li>
      </ul>

      <h2>Step 4: Master On-Page SEO</h2>
      <p>Once you have great content, optimize it for search engines:</p>

      <h3>Title Tag Optimization</h3>
      <pre><code>✅ Good: "How to Rank #1 on Google in 2025 (Step-by-Step Guide)"
❌ Bad: "SEO Guide - Tips and Tricks"</code></pre>
      <p><strong>Rules:</strong></p>
      <ul>
        <li>Include your primary keyword near the beginning</li>
        <li>Keep it under 60 characters</li>
        <li>Make it clickable and compelling</li>
        <li>Add a year or number for freshness</li>
      </ul>

      <h3>Meta Description</h3>
      <p>While not a direct ranking factor, a good meta description improves CTR:</p>
      <pre><code>Discover the exact SEO strategies to rank #1 on Google in 2025. Step-by-step guide with proven tactics, real examples, and expert insights.</code></pre>

      <h3>Header Structure (H1-H6)</h3>
      <ul>
        <li><strong>H1:</strong> One per page (your title)</li>
        <li><strong>H2:</strong> Main sections</li>
        <li><strong>H3:</strong> Subsections under H2s</li>
        <li><strong>Include keywords naturally</strong> in headers</li>
      </ul>

      <h2>Step 5: Build High-Quality Backlinks</h2>
      <p>Backlinks are still a top 3 ranking factor. Here's how to earn them:</p>

      <h3>Link Building Strategies That Work</h3>
      <ol>
        <li><strong>Create Linkable Assets:</strong> Original research, tools, comprehensive guides</li>
        <li><strong>Guest Posting:</strong> Write for authoritative sites in your niche</li>
        <li><strong>Broken Link Building:</strong> Find broken links, offer your content as replacement</li>
        <li><strong>Digital PR:</strong> Get featured in publications through HARO</li>
        <li><strong>Resource Pages:</strong> Get listed on industry resource pages</li>
      </ol>

      <div class="warning-box">
        <h4>⚠️ Avoid These Link Building Mistakes</h4>
        <ul>
          <li>Buying links from Fiverr or link farms</li>
          <li>Excessive link exchanges</li>
          <li>Spammy blog comments</li>
          <li>Low-quality directory submissions</li>
        </ul>
      </div>

      <h2>Step 6: Technical SEO Essentials</h2>
      <p>Technical issues can prevent Google from ranking your content:</p>

      <h3>Critical Technical Factors</h3>
      <ul>
        <li><strong>Page Speed:</strong> Aim for under 3 seconds (use PageSpeed Insights)</li>
        <li><strong>Mobile-Friendliness:</strong> 63% of Google searches are mobile</li>
        <li><strong>HTTPS:</strong> Security is a ranking signal</li>
        <li><strong>Core Web Vitals:</strong> LCP < 2.5s, FID < 100ms, CLS < 0.1</li>
        <li><strong>XML Sitemap:</strong> Help Google find all your pages</li>
        <li><strong>Schema Markup:</strong> Get rich snippets in search results</li>
      </ul>

      <h2>Step 7: Track and Improve</h2>
      <p>SEO is an ongoing process. Monitor these metrics:</p>

      <h3>Key Metrics to Track</h3>
      <ul>
        <li>📊 <strong>Organic Traffic:</strong> Google Analytics</li>
        <li>📊 <strong>Keyword Rankings:</strong> Ahrefs, SEMrush</li>
        <li>📊 <strong>Backlinks:</strong> Quality and quantity</li>
        <li>📊 <strong>CTR:</strong> Google Search Console</li>
        <li>📊 <strong>Bounce Rate:</strong> Are visitors engaging?</li>
        <li>📊 <strong>Conversions:</strong> Traffic that doesn't convert is worthless</li>
      </ul>

      <h2>The Timeline: How Long Does It Take?</h2>
      <p>Be realistic about expectations:</p>
      <ul>
        <li><strong>Months 1-3:</strong> Google indexes and starts ranking (positions 20-50)</li>
        <li><strong>Months 4-6:</strong> Movement to page 2 (positions 11-20)</li>
        <li><strong>Months 7-12:</strong> Breaking into page 1 (positions 1-10)</li>
        <li><strong>Year 2+:</strong> Fighting for #1 position</li>
      </ul>

      <div class="key-takeaway">
        <h3>💡 Final Thoughts</h3>
        <p>Ranking #1 on Google requires patience, quality content, technical excellence, and continuous optimization. Focus on creating genuinely helpful content that serves user intent, and the rankings will follow.</p>
        <p><strong>Action Step:</strong> Pick one keyword, create the best content on that topic, optimize it properly, and build 5-10 quality backlinks over the next 3 months.</p>
      </div>
    `,
    relatedPosts: ["seo-mistakes", "keyword-research", "link-building"]
  },
  "seo-mistakes": {
    title: "10 SEO Mistakes That Are Killing Your Rankings",
    category: "SEO",
    date: "Dec 5, 2025",
    readTime: "7 min",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    tags: ["SEO", "Common Mistakes", "Rankings"],
    content: `
      <p class="lead">Are you making these critical SEO errors? Even one of these mistakes can tank your rankings. Here's how to fix them.</p>

      <h2>Mistake #1: Targeting the Wrong Keywords</h2>
      <p>Many businesses target high-volume keywords they'll never rank for, or keywords that don't bring customers.</p>
      <p><strong>The Fix:</strong></p>
      <ul>
        <li>Focus on long-tail keywords with lower competition</li>
        <li>Target keywords with buyer intent, not just traffic</li>
        <li>Use keyword difficulty scores to find realistic opportunities</li>
      </ul>

      <h2>Mistake #2: Ignoring Search Intent</h2>
      <p>Ranking for "best CRM software" with a homepage instead of a comparison article? Wrong intent.</p>
      <p><strong>The Fix:</strong> Google your target keyword and analyze the top 10 results. What type of content ranks? Match that format.</p>

      <h2>Mistake #3: Thin Content</h2>
      <p>200-word blog posts don't cut it anymore. Google wants comprehensive content.</p>
      <div class="stats-box">
        <p><strong>Average word count of top 10 results:</strong> 1,890 words</p>
        <p><strong>Sweet spot:</strong> 1,500-2,500 words for most topics</p>
      </div>

      <h2>Mistake #4: Slow Page Speed</h2>
      <p>53% of mobile users abandon pages that take over 3 seconds to load.</p>
      <p><strong>Quick Fixes:</strong></p>
      <ul>
        <li>Compress images (use WebP format)</li>
        <li>Enable browser caching</li>
        <li>Use a CDN</li>
        <li>Minimize CSS and JavaScript</li>
      </ul>

      <h2>Mistake #5: Not Mobile-Optimized</h2>
      <p>Google uses mobile-first indexing. If your site isn't mobile-friendly, you won't rank.</p>
      <p><strong>Test:</strong> Google's Mobile-Friendly Test tool</p>

      <h2>Mistake #6: No Internal Linking</h2>
      <p>Internal links help Google understand your site structure and spread page authority.</p>
      <p><strong>Best Practice:</strong> Link to 3-5 relevant pages in every article using descriptive anchor text.</p>

      <h2>Mistake #7: Duplicate Content</h2>
      <p>Having the same content on multiple pages confuses Google and dilutes your rankings.</p>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Use canonical tags</li>
        <li>301 redirect duplicate pages</li>
        <li>Write unique content for each page</li>
      </ul>

      <h2>Mistake #8: Ignoring Technical SEO</h2>
      <p>Content alone won't save you if Google can't crawl your site.</p>
      <p><strong>Check for:</strong></p>
      <ul>
        <li>Broken links (404 errors)</li>
        <li>XML sitemap submitted to Google</li>
        <li>Robots.txt configured correctly</li>
        <li>HTTPS enabled</li>
      </ul>

      <h2>Mistake #9: No Backlinks Strategy</h2>
      <p>Hoping for backlinks won't work. You need an active link building strategy.</p>
      <p><strong>Start with:</strong></p>
      <ul>
        <li>Guest posting on industry blogs</li>
        <li>Creating shareable infographics</li>
        <li>Broken link building</li>
        <li>Digital PR through HARO</li>
      </ul>

      <h2>Mistake #10: Not Tracking Results</h2>
      <p>If you're not measuring, you're not improving.</p>
      <p><strong>Essential Tools:</strong></p>
      <ul>
        <li>Google Analytics 4 (traffic analysis)</li>
        <li>Google Search Console (rankings, CTR)</li>
        <li>Ahrefs or SEMrush (keywords, backlinks)</li>
      </ul>

      <div class="key-takeaway">
        <h3>🎯 Action Plan</h3>
        <p>Audit your site for these 10 mistakes this week. Fix the highest-impact issues first (page speed, mobile-friendliness, keyword targeting). You should see improvements within 30-60 days.</p>
      </div>
    `,
    relatedPosts: ["featured-seo-2025", "keyword-research", "ga4-guide"]
  },
  "keyword-research": {
    title: "Keyword Research in 2025: Tools & Strategies",
    category: "SEO",
    date: "Dec 3, 2025",
    readTime: "8 min",
    author: "Emma Rodriguez",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    tags: ["Keyword Research", "SEO Tools", "Strategy"],
    content: `
      <p class="lead">Keyword research is the foundation of successful SEO. Master this skill and you'll always know what content to create.</p>

      <h2>Why Keyword Research Matters</h2>
      <p>Without keyword research, you're creating content blindly. With it, you know:</p>
      <ul>
        <li>What your audience is searching for</li>
        <li>How competitive each topic is</li>
        <li>Which keywords will drive revenue</li>
        <li>What content gaps exist in your niche</li>
      </ul>

      <h2>Step 1: Brainstorm Seed Keywords</h2>
      <p>Start with 5-10 broad topics related to your business.</p>
      <div class="example-box">
        <p><strong>Example for a Fitness Brand:</strong></p>
        <ul>
          <li>Weight loss</li>
          <li>Home workouts</li>
          <li>Meal planning</li>
          <li>Running</li>
          <li>Strength training</li>
        </ul>
      </div>

      <h2>Step 2: Use Keyword Research Tools</h2>
      <h3>Best Tools in 2025</h3>
      <ul>
        <li><strong>Ahrefs Keywords Explorer</strong> - Most comprehensive data, $99/mo</li>
        <li><strong>SEMrush</strong> - Great for competitor analysis, $119/mo</li>
        <li><strong>Google Keyword Planner</strong> - Free, good for search volume</li>
        <li><strong>Ubersuggest</strong> - Budget-friendly alternative, $29/mo</li>
        <li><strong>AnswerThePublic</strong> - Question-based keywords, free tier</li>
      </ul>

      <h2>Step 3: Analyze Keyword Metrics</h2>
      <h3>Key Metrics to Evaluate</h3>
      <div class="metrics-table">
        <div class="metric">
          <h4>Search Volume</h4>
          <p>Monthly searches for the keyword</p>
          <p><strong>Target:</strong> 1,000-10,000 for most businesses</p>
        </div>
        <div class="metric">
          <h4>Keyword Difficulty (KD)</h4>
          <p>How hard it is to rank (0-100)</p>
          <p><strong>Target:</strong> Under 30 for new sites, under 50 for established</p>
        </div>
        <div class="metric">
          <h4>Cost Per Click (CPC)</h4>
          <p>What advertisers pay per click</p>
          <p><strong>Insight:</strong> Higher CPC = higher commercial intent</p>
        </div>
        <div class="metric">
          <h4>Traffic Potential</h4>
          <p>Estimated visitors if you rank #1</p>
          <p><strong>Use:</strong> Prioritize high-potential keywords</p>
        </div>
      </div>

      <h2>Step 4: Understand Keyword Types</h2>
      <h3>Short-Tail Keywords</h3>
      <ul>
        <li>Example: "protein powder"</li>
        <li>Search Volume: Very high (100K+)</li>
        <li>Competition: Extremely high</li>
        <li>Intent: Unclear</li>
        <li><strong>When to target:</strong> When you have high domain authority</li>
      </ul>

      <h3>Long-Tail Keywords</h3>
      <ul>
        <li>Example: "best protein powder for women weight loss"</li>
        <li>Search Volume: Lower (500-5K)</li>
        <li>Competition: Much lower</li>
        <li>Intent: Very specific</li>
        <li><strong>When to target:</strong> Always! These convert better</li>
      </ul>

      <h2>Step 5: Analyze Search Intent</h2>
      <p>Every keyword has intent. Match your content to it:</p>
      <ol>
        <li><strong>Informational:</strong> "how to lose weight" → Blog post</li>
        <li><strong>Commercial:</strong> "best protein powders 2025" → Comparison article</li>
        <li><strong>Transactional:</strong> "buy whey protein online" → Product page</li>
        <li><strong>Navigational:</strong> "optimum nutrition website" → Brand page</li>
      </ol>

      <h2>Step 6: Steal Competitor Keywords</h2>
      <p>Why start from scratch? Find what's working for competitors.</p>
      <h3>How to Do It:</h3>
      <ol>
        <li>Enter competitor domain in Ahrefs or SEMrush</li>
        <li>Go to "Organic Keywords" report</li>
        <li>Filter for keywords ranking positions 1-10</li>
        <li>Filter for search volume > 500</li>
        <li>Export and identify gaps you can fill</li>
      </ol>

      <h2>Step 7: Find Question Keywords</h2>
      <p>People ask Google questions. Answer them with content.</p>
      <p><strong>Tools:</strong></p>
      <ul>
        <li>AnswerThePublic - Visual keyword tool</li>
        <li>AlsoAsked - Related questions people ask</li>
        <li>Google "People Also Ask" boxes</li>
      </ul>

      <h2>The Golden Keyword Formula</h2>
      <div class="formula-box">
        <p><strong>Perfect Keyword = (Search Volume × CPC) ÷ Keyword Difficulty</strong></p>
        <p>Higher score = better opportunity</p>
        <p>Example: (2,000 × $5) ÷ 25 = 400 (Excellent!)</p>
      </div>

      <h2>Keyword Research Template</h2>
      <p>Create a spreadsheet with these columns:</p>
      <ul>
        <li>Keyword</li>
        <li>Search Volume</li>
        <li>Keyword Difficulty</li>
        <li>CPC</li>
        <li>Search Intent</li>
        <li>Content Type Needed</li>
        <li>Priority (High/Med/Low)</li>
      </ul>

      <div class="key-takeaway">
        <h3>🎯 Your Next Steps</h3>
        <ol>
          <li>List 10 seed keywords for your business</li>
          <li>Run them through a keyword tool</li>
          <li>Find 20-30 long-tail variations</li>
          <li>Create content for the 5 highest-priority keywords</li>
          <li>Track rankings in Google Search Console</li>
        </ol>
      </div>
    `,
    relatedPosts: ["featured-seo-2025", "seo-mistakes", "content-strategy"]
  },
  "instagram-algorithm": {
    title: "Instagram Algorithm 2025: What Really Works",
    category: "Social Media",
    date: "Dec 1, 2025",
    readTime: "6 min",
    author: "Jessica Martinez",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
    tags: ["Instagram", "Social Media", "Algorithm"],
    content: `
      <p class="lead">Instagram's algorithm changed again in 2025. Here's exactly what you need to know to grow your account organically.</p>

      <h2>The 6 Ranking Factors</h2>
      
      <h3>1. Interest</h3>
      <p>Instagram predicts how much you'll care about a post based on your past behavior.</p>
      <p><strong>Your Action:</strong> Create content your existing audience consistently engages with. Check Insights to see what works.</p>

      <h3>2. Timeliness</h3>
      <p>Recent posts are prioritized. The algorithm favors fresh content.</p>
      <p><strong>Your Action:</strong> Post when your audience is most active. Check Instagram Insights → Audience → Most Active Times.</p>

      <h3>3. Relationship</h3>
      <p>Content from accounts you interact with appears first.</p>
      <p><strong>Your Action:</strong> Respond to every comment in the first hour. DM your followers. Engage with their content.</p>

      <h3>4. Frequency</h3>
      <p>How often users open Instagram affects what they see.</p>
      <p><strong>Your Action:</strong> Post consistently (3-5 times per week minimum) so you're there when followers check.</p>

      <h3>5. Following</h3>
      <p>Users who follow many accounts see less from each one.</p>
      <p><strong>Your Action:</strong> Make every post scroll-stopping. You're competing with hundreds of other accounts.</p>

      <h3>6. Usage</h3>
      <p>Session length determines how deep Instagram digs into the feed.</p>
      <p><strong>Your Action:</strong> Create content that keeps people on the platform (carousels, saves-worthy content).</p>

      <h2>Content That Wins in 2025</h2>
      
      <h3>Reels (Highest Priority)</h3>
      <ul>
        <li>Instagram's #1 priority format</li>
        <li>Shown to non-followers via Explore page</li>
        <li>Average reach: 20-30% of followers (vs 10% for feed posts)</li>
        <li><strong>Post 3-5 Reels per week</strong></li>
      </ul>

      <h3>Carousels (Highest Engagement)</h3>
      <ul>
        <li>2-3x more engagement than single images</li>
        <li>People swipe through, which signals strong engagement</li>
        <li>Great for educational content</li>
        <li><strong>Post 3-4 carousels per week</strong></li>
      </ul>

      <h3>Stories (Daily Connection)</h3>
      <ul>
        <li>Keeps you top-of-mind</li>
        <li>High engagement rate</li>
        <li>Use polls, questions, sliders for interaction</li>
        <li><strong>Post 5-10 stories daily</strong></li>
      </ul>

      <h2>Posting Strategy for Maximum Reach</h2>
      
      <h3>The 3-1-1 Method</h3>
      <div class="strategy-box">
        <p><strong>3 Reels per week</strong> (Monday, Wednesday, Friday)</p>
        <p><strong>1 Carousel per week</strong> (Tuesday or Thursday)</p>
        <p><strong>1 Lifestyle post per week</strong> (Weekend)</p>
        <p><strong>Stories every day</strong> (5-10 per day)</p>
      </div>

      <h2>The First Hour is Everything</h2>
      <p>Instagram tests your content on a small group first. If they engage, it gets shown to more people.</p>
      
      <h3>First Hour Checklist:</h3>
      <ul>
        <li>✅ Respond to every comment</li>
        <li>✅ DM the post to your engaged followers</li>
        <li>✅ Share to Stories</li>
        <li>✅ Engage with other accounts in your niche</li>
      </ul>

      <h2>Hashtag Strategy 2025</h2>
      <p>Hashtags still work, but use them smartly:</p>
      <ul>
        <li>Use 7-9 hashtags (not 30)</li>
        <li>Mix small (10K-50K), medium (50K-500K), and large (500K-1M)</li>
        <li>Avoid banned hashtags</li>
        <li>Create a branded hashtag</li>
      </ul>

      <h2>What NOT to Do</h2>
      <div class="warning-box">
        <h3>⚠️ Algorithm Killers</h3>
        <ul>
          <li>❌ Buying followers or engagement</li>
          <li>❌ Using bots or automation tools</li>
          <li>❌ Reposting content without credit</li>
          <li>❌ Including TikTok watermarks on Reels</li>
          <li>❌ Posting at random times</li>
        </ul>
      </div>

      <h2>Growth Tactics That Work</h2>
      <ol>
        <li><strong>Collaborate:</strong> Partner with accounts in your niche</li>
        <li><strong>Use Trending Audio:</strong> Check Reels tab for popular sounds</li>
        <li><strong>Hook in 1 Second:</strong> First frame must stop the scroll</li>
        <li><strong>Call-to-Action:</strong> Tell people to save, share, or comment</li>
        <li><strong>Post Consistently:</strong> Algorithm rewards active accounts</li>
      </ol>

      <div class="key-takeaway">
        <h3>💡 Quick Win</h3>
        <p>This week: Post 1 Reel using trending audio, with text overlay hook in the first second. Engage with every comment in the first hour. Watch your reach explode.</p>
      </div>
    `,
    relatedPosts: ["viral-reels", "tiktok-guide", "content-strategy"]
  }
};

// Add remaining posts with placeholder content
const additionalPosts = {
  "viral-reels": {
    title: "How to Create Viral Reels: 7 Proven Formulas",
    category: "Social Media",
    date: "Nov 28, 2025",
    readTime: "5 min",
    author: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop",
    tags: ["Reels", "Viral Content", "Instagram"],
    content: `<p class="lead">Want your Reels to go viral? Follow these 7 proven formulas that top creators use.</p><h2>Formula #1: Before & After</h2><p>Show transformation in your niche. Works for fitness, design, cleaning, makeovers.</p><h2>Formula #2: Quick Tips</h2><p>"3 [topic] hacks you didn't know" - Educational content always performs.</p><h2>Formula #3: Trend Jacking</h2><p>Use trending audio and put your unique spin on it.</p>`,
    relatedPosts: ["instagram-algorithm", "tiktok-guide", "marketing-trends-2025"]
  },
  "content-strategy": {
    title: "Content Marketing Strategy That Actually Converts",
    category: "Content Marketing",
    date: "Nov 25, 2025",
    readTime: "9 min",
    author: "David Park",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
    tags: ["Content Marketing", "Strategy", "Conversion"],
    content: `<p class="lead">A content marketing strategy that drives traffic, generates leads, and increases sales.</p><h2>The 70-20-10 Rule</h2><p>70% value content, 20% engagement, 10% promotional.</p><h2>Content Pillars</h2><p>Choose 3-5 core topics your brand will cover consistently.</p>`,
    relatedPosts: ["ai-content", "keyword-research", "featured-seo-2025"]
  },
  "ai-content": {
    title: "AI Content Writing: Best Practices for 2025",
    category: "Content Marketing",
    date: "Nov 22, 2025",
    readTime: "7 min",
    author: "Rachel Green",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",
    tags: ["AI", "Content Writing", "Technology"],
    content: `<p class="lead">How to use AI tools effectively while maintaining quality and authenticity.</p><h2>Best AI Writing Tools</h2><p>ChatGPT, Claude, Jasper, Copy.ai - each has strengths.</p><h2>The Human Touch</h2><p>AI is a tool, not a replacement. Always add your expertise and edit thoroughly.</p>`,
    relatedPosts: ["content-strategy", "featured-seo-2025", "marketing-metrics"]
  },
  "ga4-guide": {
    title: "Google Analytics 4: Complete Setup Guide",
    category: "Analytics",
    date: "Nov 20, 2025",
    readTime: "12 min",
    author: "Tom Anderson",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    tags: ["Google Analytics", "Analytics", "Data"],
    content: `<p class="lead">Step-by-step guide to setting up and understanding GA4 for better data insights.</p><h2>Why GA4 is Different</h2><p>Event-based tracking, AI predictions, privacy-first design.</p><h2>Setup Steps</h2><p>Create property, install tracking code, configure events and conversions.</p>`,
    relatedPosts: ["marketing-metrics", "seo-mistakes", "featured-seo-2025"]
  },
  "marketing-metrics": {
    title: "10 Marketing Metrics You Should Track in 2025",
    category: "Analytics",
    date: "Nov 18, 2025",
    readTime: "6 min",
    author: "Lisa Wong",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=250&fit=crop",
    tags: ["Metrics", "Analytics", "ROI"],
    content: `<p class="lead">Focus on these key metrics to measure and improve your marketing performance.</p><h2>Revenue Metrics</h2><p>ROI, Customer Lifetime Value, Customer Acquisition Cost.</p><h2>Engagement Metrics</h2><p>Click-through rate, conversion rate, bounce rate, time on site.</p>`,
    relatedPosts: ["ga4-guide", "featured-seo-2025", "ai-marketing"]
  },
  "marketing-trends-2025": {
    title: "Top 15 Digital Marketing Trends for 2025",
    category: "Trends",
    date: "Nov 15, 2025",
    readTime: "11 min",
    author: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop",
    tags: ["Trends", "Marketing", "Future"],
    content: `<p class="lead">Stay ahead of the curve with these emerging marketing trends and technologies.</p><h2>1. AI-Powered Personalization</h2><p>AI creates unique experiences for each visitor.</p><h2>2. Short-Form Video Dominance</h2><p>TikTok, Reels, and Shorts continue to grow.</p><h2>3. Voice Search Optimization</h2><p>50% of searches will be voice by end of 2025.</p>`,
    relatedPosts: ["ai-marketing", "instagram-algorithm", "viral-reels"]
  },
  "ai-marketing": {
    title: "AI in Marketing: Opportunities & Challenges",
    category: "Trends",
    date: "Nov 12, 2025",
    readTime: "10 min",
    author: "Dr. Emily Chen",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    tags: ["AI", "Marketing", "Technology"],
    content: `<p class="lead">How artificial intelligence is transforming digital marketing and what it means for marketers.</p><h2>AI Opportunities</h2><p>Automation, personalization, predictive analytics, chatbots.</p><h2>Challenges</h2><p>Data privacy, authenticity, skill gap, cost of implementation.</p>`,
    relatedPosts: ["marketing-trends-2025", "ai-content", "ga4-guide"]
  },
  "tiktok-guide": {
    title: "TikTok Marketing Guide for Businesses",
    category: "Social Media",
    date: "Nov 10, 2025",
    readTime: "8 min",
    author: "Sophie Martin",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop",
    tags: ["TikTok", "Social Media", "Marketing"],
    content: `<p class="lead">Everything you need to know to succeed on TikTok as a business in 2025.</p><h2>TikTok Algorithm</h2><p>Engagement in first 3 seconds determines reach.</p><h2>Content Strategy</h2><p>Behind-the-scenes, educational content, trends, challenges.</p>`,
    relatedPosts: ["viral-reels", "instagram-algorithm", "marketing-trends-2025"]
  },
  "link-building": {
    title: "Link Building Strategies That Work in 2025",
    category: "SEO",
    date: "Nov 8, 2025",
    readTime: "9 min",
    author: "James Rodriguez",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    tags: ["Link Building", "SEO", "Backlinks"],
    content: `<p class="lead">Ethical and effective link building tactics to boost your domain authority.</p><h2>White Hat Tactics</h2><p>Guest posting, broken link building, digital PR, resource pages.</p><h2>What to Avoid</h2><p>Buying links, link farms, spam comments, excessive exchanges.</p>`,
    relatedPosts: ["featured-seo-2025", "seo-mistakes", "keyword-research"]
  }
};

// Merge all posts
Object.assign(blogPosts, additionalPosts);

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    alert("Please login to access blog");
    window.location.href = "login.html";
    return;
  }

  // Get post ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  if (!postId || !blogPosts[postId]) {
    alert("Blog post not found");
    window.location.href = "blog.html";
    return;
  }

  loadPost(postId);

  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Successfully subscribed to newsletter!");
    newsletterForm.reset();
  });

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

function loadPost(postId) {
  const post = blogPosts[postId];

  // Set post data
  document.getElementById("postTitle").textContent = post.title;
  document.getElementById("postCategory").textContent = post.category;
  document.getElementById("postDate").textContent = post.date;
  document.getElementById("postReadTime").textContent = post.readTime + " read";
  document.getElementById("postAuthor").textContent = post.author;
  document.getElementById("postImage").src = post.image;
  document.getElementById("postContent").innerHTML = post.content;

  // Set page title
  document.title = post.title + " | OPTI-RANK Blog";

  // Add tags
  const tagsContainer = document.getElementById("postTags");
  tagsContainer.innerHTML = post.tags.map(tag => 
    `<span class="tag">${tag}</span>`
  ).join('');

  // Load related posts
  loadRelatedPosts(post.relatedPosts);
}

function loadRelatedPosts(relatedIds) {
  const container = document.querySelector(".related-grid");
  
  container.innerHTML = relatedIds.map(id => {
    const post = blogPosts[id];
    if (!post) return '';
    
    return `
      <div class="related-card" onclick="window.location.href='post.html?id=${id}'">
        <img src="${post.image}" alt="${post.title}" />
        <h4>${post.title}</h4>
        <p>${post.readTime} read</p>
      </div>
    `;
  }).join('');
}

function shareOnTwitter() {
  const url = window.location.href;
  const text = document.getElementById("postTitle").textContent;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnFacebook() {
  const url = window.location.href;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareOnLinkedIn() {
  const url = window.location.href;
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("✅ Link copied to clipboard!");
  });
}
