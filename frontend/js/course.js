// frontend/js/course.js

// Complete course database with full content
const courses = {
  "seo-fundamentals": {
    title: "SEO Fundamentals",
    duration: "2 hours",
    level: "Beginner",
    description: "Master the basics of Search Engine Optimization",
    lessons: [
      {
        id: 1,
        title: "Introduction to SEO",
        duration: "15 min",
        content: `
          <h2>What is SEO?</h2>
          <p>Search Engine Optimization (SEO) is the practice of optimizing your website to rank higher in search engine results pages (SERPs). When done correctly, SEO helps your content get discovered by people actively searching for what you offer.</p>
          
          <h3>Why SEO Matters in 2025</h3>
          <ul>
            <li><strong>Organic Traffic:</strong> 53% of all website traffic comes from organic search</li>
            <li><strong>Cost-Effective:</strong> Unlike paid ads, organic rankings don't require ongoing payment</li>
            <li><strong>Trust & Credibility:</strong> 75% of users never scroll past the first page of results</li>
            <li><strong>Long-Term Results:</strong> Good SEO compounds over time</li>
          </ul>

          <h3>How Search Engines Work</h3>
          <div class="info-box">
            <p><strong>1. Crawling:</strong> Search engine bots discover pages by following links</p>
            <p><strong>2. Indexing:</strong> Pages are analyzed and stored in a massive database</p>
            <p><strong>3. Ranking:</strong> Algorithms determine which pages best answer a query</p>
          </div>

          <h3>The 3 Pillars of SEO</h3>
          <p><strong>🔧 Technical SEO:</strong> Site speed, mobile-friendliness, security (HTTPS)</p>
          <p><strong>📝 On-Page SEO:</strong> Content quality, keywords, meta tags, internal links</p>
          <p><strong>🔗 Off-Page SEO:</strong> Backlinks, social signals, brand mentions</p>

          <div class="key-takeaway">
            <h4>💡 Key Takeaway</h4>
            <p>SEO is not a one-time task—it's an ongoing process. Focus on creating valuable content for your audience, and the rankings will follow.</p>
          </div>
        `
      },
      {
        id: 2,
        title: "Keyword Research Basics",
        duration: "20 min",
        content: `
          <h2>Understanding Keywords</h2>
          <p>Keywords are the words and phrases people type into search engines. Effective keyword research is the foundation of successful SEO.</p>

          <h3>Types of Keywords</h3>
          <div class="keyword-types">
            <div class="type-card">
              <h4>🎯 Short-Tail Keywords</h4>
              <p><strong>Example:</strong> "shoes"</p>
              <p><strong>Volume:</strong> Very high (100K+ searches/month)</p>
              <p><strong>Competition:</strong> Extremely high</p>
              <p><strong>Intent:</strong> Unclear</p>
            </div>
            <div class="type-card">
              <h4>🎯 Long-Tail Keywords</h4>
              <p><strong>Example:</strong> "best running shoes for flat feet women"</p>
              <p><strong>Volume:</strong> Lower (500-5K searches/month)</p>
              <p><strong>Competition:</strong> Low to medium</p>
              <p><strong>Intent:</strong> Very clear</p>
            </div>
          </div>

          <h3>The 4 Types of Search Intent</h3>
          <ol>
            <li><strong>Informational:</strong> "how to tie shoes" - User wants to learn</li>
            <li><strong>Navigational:</strong> "nike official site" - User wants a specific site</li>
            <li><strong>Commercial:</strong> "best running shoes 2025" - User is researching</li>
            <li><strong>Transactional:</strong> "buy nike air max online" - User ready to purchase</li>
          </ol>

          <h3>Keyword Research Tools</h3>
          <ul>
            <li>✅ <strong>Google Keyword Planner:</strong> Free, great for search volume data</li>
            <li>✅ <strong>Ahrefs:</strong> Comprehensive SEO tool with keyword difficulty scores</li>
            <li>✅ <strong>SEMrush:</strong> Competitor keyword analysis</li>
            <li>✅ <strong>Ubersuggest:</strong> Free alternative with good suggestions</li>
            <li>✅ <strong>AnswerThePublic:</strong> Question-based keyword ideas</li>
          </ul>

          <h3>How to Find the Right Keywords</h3>
          <div class="step-process">
            <p><strong>Step 1:</strong> Brainstorm seed keywords (your main topics)</p>
            <p><strong>Step 2:</strong> Use tools to expand your list</p>
            <p><strong>Step 3:</strong> Analyze search volume and competition</p>
            <p><strong>Step 4:</strong> Check search intent</p>
            <p><strong>Step 5:</strong> Prioritize based on difficulty vs. opportunity</p>
          </div>

          <div class="pro-tip">
            <h4>⚡ Pro Tip</h4>
            <p>Target keywords with 1,000-10,000 monthly searches and low competition. These "golden keywords" offer the best ROI for new websites.</p>
          </div>
        `
      },
      {
        id: 3,
        title: "On-Page SEO Optimization",
        duration: "25 min",
        content: `
          <h2>Optimizing Your Content</h2>
          <p>On-page SEO involves optimizing individual web pages to rank higher and earn more relevant traffic.</p>

          <h3>Title Tags</h3>
          <p>Your title tag is one of the most important ranking factors.</p>
          <div class="example-box">
            <p>❌ <strong>Bad:</strong> "Home - My Website"</p>
            <p>✅ <strong>Good:</strong> "Best Running Shoes for Flat Feet 2025 | Brand Name"</p>
          </div>
          <p><strong>Best Practices:</strong></p>
          <ul>
            <li>Keep it under 60 characters</li>
            <li>Include your primary keyword near the beginning</li>
            <li>Make it compelling and clickable</li>
            <li>Add your brand name at the end</li>
          </ul>

          <h3>Meta Descriptions</h3>
          <p>While not a direct ranking factor, meta descriptions impact click-through rates.</p>
          <div class="example-box">
            <p>✅ <strong>Good Example:</strong> "Discover the top 10 running shoes for flat feet in 2025. Expert reviews, comparison charts, and buying guide. Find your perfect fit today!"</p>
          </div>
          <p><strong>Best Practices:</strong></p>
          <ul>
            <li>150-160 characters is ideal</li>
            <li>Include a call-to-action</li>
            <li>Use your target keyword naturally</li>
            <li>Make it unique for each page</li>
          </ul>

          <h3>Header Tags (H1-H6)</h3>
          <p>Headers structure your content for both users and search engines.</p>
          <div class="structure-example">
            <p><strong>H1:</strong> Main Page Title (Only one per page)</p>
            <p><strong>H2:</strong> Main Section Headers</p>
            <p><strong>H3:</strong> Subsections within H2s</p>
            <p><strong>H4-H6:</strong> Further subdivisions</p>
          </div>

          <h3>Content Optimization</h3>
          <ul>
            <li>📊 <strong>Length:</strong> Aim for 1,500-2,500 words for in-depth topics</li>
            <li>🎯 <strong>Keyword Density:</strong> Use your keyword naturally, about 1-2% of total words</li>
            <li>🔗 <strong>Internal Links:</strong> Link to 2-5 related pages on your site</li>
            <li>🌐 <strong>External Links:</strong> Link to 1-3 authoritative sources</li>
            <li>📸 <strong>Images:</strong> Use descriptive alt text with keywords</li>
            <li>📱 <strong>Readability:</strong> Short paragraphs, bullet points, clear formatting</li>
          </ul>

          <h3>URL Structure</h3>
          <div class="example-box">
            <p>❌ <strong>Bad:</strong> www.site.com/p=12345&cat=shoes</p>
            <p>✅ <strong>Good:</strong> www.site.com/best-running-shoes-flat-feet</p>
          </div>

          <div class="key-takeaway">
            <h4>💡 Remember</h4>
            <p>Write for humans first, optimize for search engines second. Quality content that helps your audience will always win in the long run.</p>
          </div>
        `
      },
      {
        id: 4,
        title: "Technical SEO Essentials",
        duration: "30 min",
        content: `
          <h2>Technical SEO Fundamentals</h2>
          <p>Technical SEO ensures search engines can crawl, index, and understand your website.</p>

          <h3>Site Speed Optimization</h3>
          <p>Page speed is a confirmed ranking factor. Aim for under 3 seconds load time.</p>
          <div class="tips-box">
            <p>✅ Compress images (use WebP format)</p>
            <p>✅ Minimize CSS, JavaScript, and HTML</p>
            <p>✅ Use browser caching</p>
            <p>✅ Enable Gzip compression</p>
            <p>✅ Use a Content Delivery Network (CDN)</p>
            <p>✅ Eliminate render-blocking resources</p>
          </div>

          <h3>Mobile-First Indexing</h3>
          <p>Google now primarily uses the mobile version of your site for indexing and ranking.</p>
          <ul>
            <li>Use responsive design</li>
            <li>Ensure buttons are easily tappable (48x48px minimum)</li>
            <li>Avoid Flash and intrusive popups</li>
            <li>Test with Google's Mobile-Friendly Test tool</li>
          </ul>

          <h3>HTTPS Security</h3>
          <p>SSL certificates are a ranking signal and build trust with users.</p>
          <div class="warning-box">
            <p>⚠️ Sites without HTTPS are marked as "Not Secure" in browsers, which hurts credibility and conversions.</p>
          </div>

          <h3>XML Sitemaps</h3>
          <p>A sitemap helps search engines discover all your important pages.</p>
          <pre>
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://yoursite.com/page1&lt;/loc&gt;
    &lt;lastmod&gt;2025-12-10&lt;/lastmod&gt;
    &lt;priority&gt;1.0&lt;/priority&gt;
  &lt;/url&gt;
&lt;/urlset&gt;
          </pre>

          <h3>Robots.txt</h3>
          <p>Control which pages search engines can crawl.</p>
          <pre>
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
          </pre>

          <h3>Structured Data (Schema Markup)</h3>
          <p>Help search engines understand your content and display rich snippets.</p>
          <div class="info-box">
            <p><strong>Common Schema Types:</strong></p>
            <ul>
              <li>Article</li>
              <li>Product</li>
              <li>Review</li>
              <li>FAQ</li>
              <li>LocalBusiness</li>
            </ul>
          </div>

          <div class="action-items">
            <h4>🎯 Action Items</h4>
            <p>1. Test your site speed with PageSpeed Insights</p>
            <p>2. Ensure your site is mobile-friendly</p>
            <p>3. Install an SSL certificate if you haven't</p>
            <p>4. Create and submit an XML sitemap</p>
            <p>5. Add schema markup to key pages</p>
          </div>
        `
      },
      {
        id: 5,
        title: "Link Building Strategies",
        duration: "30 min",
        content: `
          <h2>The Power of Backlinks</h2>
          <p>Backlinks are links from other websites to yours. They're one of Google's top 3 ranking factors.</p>

          <h3>Why Backlinks Matter</h3>
          <ul>
            <li>🏆 They act as "votes of confidence" for your content</li>
            <li>📈 Sites with more high-quality backlinks rank higher</li>
            <li>🚀 They drive referral traffic to your site</li>
            <li>💪 They increase your domain authority</li>
          </ul>

          <h3>Quality vs. Quantity</h3>
          <div class="comparison">
            <p><strong>1 link from NYTimes.com</strong> > <strong>100 links from spam sites</strong></p>
          </div>
          
          <h3>What Makes a Quality Backlink?</h3>
          <ol>
            <li><strong>Relevance:</strong> From sites in your industry</li>
            <li><strong>Authority:</strong> From high Domain Rating (DR) sites</li>
            <li><strong>Dofollow:</strong> Passes "link juice" (not nofollow)</li>
            <li><strong>Natural:</strong> Earned, not bought or spammed</li>
            <li><strong>Diverse:</strong> From various domains, not just one</li>
          </ol>

          <h3>White Hat Link Building Tactics</h3>
          
          <h4>1. Create Linkable Assets</h4>
          <ul>
            <li>📊 Original research and data</li>
            <li>📈 Industry statistics</li>
            <li>🎨 Infographics</li>
            <li>🛠️ Free tools and calculators</li>
            <li>📚 Comprehensive guides</li>
          </ul>

          <h4>2. Guest Blogging</h4>
          <p>Write articles for authoritative sites in your niche.</p>
          <div class="example-box">
            <p><strong>How to:</strong></p>
            <p>1. Find sites that accept guest posts</p>
            <p>2. Pitch a unique, valuable topic</p>
            <p>3. Write an excellent article</p>
            <p>4. Include 1-2 contextual links to your site</p>
          </div>

          <h4>3. Broken Link Building</h4>
          <p>Find broken links on other sites and suggest your content as a replacement.</p>
          <div class="step-process">
            <p>Step 1: Use tools like Ahrefs to find broken links in your niche</p>
            <p>Step 2: Create content that matches the broken link's topic</p>
            <p>Step 3: Reach out to the site owner</p>
            <p>Step 4: Suggest your content as a replacement</p>
          </div>

          <h4>4. Resource Page Link Building</h4>
          <p>Many sites have resource pages linking to helpful content.</p>
          <p><strong>Search for:</strong></p>
          <ul>
            <li>[your keyword] + "resources"</li>
            <li>[your keyword] + "helpful links"</li>
            <li>[your keyword] + "useful websites"</li>
          </ul>

          <h4>5. Digital PR & HARO</h4>
          <p>Help A Reporter Out (HARO) connects journalists with expert sources.</p>
          <ul>
            <li>Sign up at helpareporter.com</li>
            <li>Respond to relevant queries</li>
            <li>Get quoted in major publications</li>
            <li>Earn high-authority backlinks</li>
          </ul>

          <div class="warning-box">
            <h4>⚠️ Avoid These Black Hat Tactics</h4>
            <ul>
              <li>❌ Buying links</li>
              <li>❌ Link exchanges (you link to me, I link to you)</li>
              <li>❌ Spam comments on blogs</li>
              <li>❌ Link farms</li>
              <li>❌ Automated link building tools</li>
            </ul>
            <p>These can result in Google penalties and tank your rankings.</p>
          </div>

          <div class="pro-tip">
            <h4>⚡ Pro Tip</h4>
            <p>Focus on earning 3-5 high-quality backlinks per month rather than 100 low-quality ones. Consistency and quality beat quantity every time.</p>
          </div>
        `
      }
    ]
  },
  "keyword-research": {
    title: "Keyword Research Mastery",
    duration: "3 hours",
    level: "Intermediate",
    description: "Find the right keywords to rank higher on Google",
    lessons: [
      {
        id: 1,
        title: "Advanced Keyword Research",
        duration: "25 min",
        content: `
          <h2>Going Beyond the Basics</h2>
          <p>Advanced keyword research separates successful SEO campaigns from mediocre ones.</p>

          <h3>Keyword Metrics That Matter</h3>
          <div class="metrics-grid">
            <div class="metric-card">
              <h4>Search Volume</h4>
              <p>Monthly searches for a keyword</p>
              <p><strong>Sweet Spot:</strong> 1,000-10,000/month</p>
            </div>
            <div class="metric-card">
              <h4>Keyword Difficulty (KD)</h4>
              <p>How hard to rank for this keyword</p>
              <p><strong>Target:</strong> KD under 30 for new sites</p>
            </div>
            <div class="metric-card">
              <h4>Cost Per Click (CPC)</h4>
              <p>How much advertisers pay</p>
              <p><strong>Indicator:</strong> High CPC = commercial intent</p>
            </div>
            <div class="metric-card">
              <h4>Search Intent</h4>
              <p>What users want to find</p>
              <p><strong>Match:</strong> Your content to user intent</p>
            </div>
          </div>

          <h3>The Golden Ratio Formula</h3>
          <div class="formula-box">
            <p><strong>Keyword Opportunity = (Search Volume × CPC) ÷ Difficulty</strong></p>
            <p>Higher score = better opportunity</p>
          </div>

          <h3>Finding Competitor Keywords</h3>
          <ol>
            <li>Identify your top 3-5 competitors</li>
            <li>Use Ahrefs or SEMrush to see their ranking keywords</li>
            <li>Filter for keywords where they rank #1-#10</li>
            <li>Export keywords with 1K+ monthly searches</li>
            <li>Analyze which ones you can compete for</li>
          </ol>

          <h3>Question-Based Keywords</h3>
          <p>These are goldmines for content creation:</p>
          <ul>
            <li>How to [keyword]</li>
            <li>What is [keyword]</li>
            <li>Why does [keyword]</li>
            <li>Where can I [keyword]</li>
            <li>When should I [keyword]</li>
          </ul>

          <div class="tool-recommendation">
            <h4>🛠️ Recommended Tools</h4>
            <p><strong>AnswerThePublic:</strong> Visual keyword research</p>
            <p><strong>AlsoAsked:</strong> Related questions people ask</p>
            <p><strong>Google's "People Also Ask":</strong> Free insights</p>
          </div>
        `
      },
      {
        id: 2,
        title: "Local SEO Keywords",
        duration: "20 min",
        content: `
          <h2>Dominating Local Search</h2>
          <p>46% of all Google searches have local intent. Here's how to capture that traffic.</p>

          <h3>Local Keyword Formulas</h3>
          <div class="formula-list">
            <p>🏙️ [Service] + [City/Location]</p>
            <p>📍 [Service] + "near me"</p>
            <p>🗺️ [Service] + [Neighborhood]</p>
            <p>🏢 [Service] + [City] + [State]</p>
            <p>⭐ "best" + [Service] + [Location]</p>
          </div>

          <h3>Examples:</h3>
          <ul>
            <li>"plumber in Austin TX"</li>
            <li>"best pizza near me"</li>
            <li>"dentist downtown Seattle"</li>
            <li>"coffee shop Capitol Hill"</li>
          </ul>

          <h3>Google Business Profile Optimization</h3>
          <p>Your GBP is crucial for local rankings:</p>
          <ol>
            <li>✅ Complete every field in your profile</li>
            <li>✅ Choose the right categories</li>
            <li>✅ Add high-quality photos (10+)</li>
            <li>✅ Get reviews (respond to all)</li>
            <li>✅ Post weekly updates</li>
            <li>✅ Use local keywords in description</li>
          </ol>

          <h3>Local Content Ideas</h3>
          <ul>
            <li>Neighborhood guides</li>
            <li>Local events coverage</li>
            <li>Customer success stories by location</li>
            <li>Area-specific landing pages</li>
            <li>"Serving [City]" pages</li>
          </ul>

          <div class="success-story">
            <h4>📈 Case Study</h4>
            <p>A local bakery optimized for "custom cakes [city name]" and saw a 300% increase in local orders within 3 months.</p>
          </div>
        `
      }
    ]
  },
  "technical-seo": {
    title: "Technical SEO",
    duration: "4 hours",
    level: "Advanced",
    description: "Optimize your website's technical foundation",
    lessons: [
      {
        id: 1,
        title: "Core Web Vitals",
        duration: "30 min",
        content: `
          <h2>Understanding Core Web Vitals</h2>
          <p>Google's Core Web Vitals are page experience metrics that directly impact rankings.</p>

          <h3>The 3 Core Web Vitals</h3>
          
          <div class="vital-card">
            <h4>1. LCP - Largest Contentful Paint</h4>
            <p><strong>What it measures:</strong> Loading performance</p>
            <p><strong>Good:</strong> < 2.5 seconds</p>
            <p><strong>Poor:</strong> > 4 seconds</p>
            <p><strong>How to fix:</strong></p>
            <ul>
              <li>Optimize images (use WebP, lazy loading)</li>
              <li>Remove unnecessary third-party scripts</li>
              <li>Upgrade your hosting</li>
              <li>Implement browser caching</li>
            </ul>
          </div>

          <div class="vital-card">
            <h4>2. FID - First Input Delay</h4>
            <p><strong>What it measures:</strong> Interactivity</p>
            <p><strong>Good:</strong> < 100 milliseconds</p>
            <p><strong>Poor:</strong> > 300 milliseconds</p>
            <p><strong>How to fix:</strong></p>
            <ul>
              <li>Minimize JavaScript execution time</li>
              <li>Break up long tasks</li>
              <li>Use a web worker</li>
              <li>Reduce JavaScript payloads</li>
            </ul>
          </div>

          <div class="vital-card">
            <h4>3. CLS - Cumulative Layout Shift</h4>
            <p><strong>What it measures:</strong> Visual stability</p>
            <p><strong>Good:</strong> < 0.1</p>
            <p><strong>Poor:</strong> > 0.25</p>
            <p><strong>How to fix:</strong></p>
            <ul>
              <li>Set size attributes on images and videos</li>
              <li>Reserve space for ad slots</li>
              <li>Avoid inserting content above existing content</li>
              <li>Use transform animations instead of layout</li>
            </ul>
          </div>

          <h3>Tools to Measure Core Web Vitals</h3>
          <ul>
            <li>🔧 Google PageSpeed Insights</li>
            <li>🔧 Chrome DevTools</li>
            <li>🔧 Google Search Console (Core Web Vitals report)</li>
            <li>🔧 Lighthouse (in Chrome)</li>
          </ul>

          <div class="action-items">
            <h4>✅ Action Steps</h4>
            <p>1. Run PageSpeed Insights on your top 10 pages</p>
            <p>2. Identify failing metrics</p>
            <p>3. Prioritize fixes based on impact</p>
            <p>4. Re-test after implementing changes</p>
            <p>5. Monitor in Search Console</p>
          </div>
        `
      }
    ]
  },
  "instagram-marketing": {
    title: "Instagram Marketing 2025",
    duration: "2.5 hours",
    level: "Beginner",
    description: "Grow your Instagram following organically",
    lessons: [
      {
        id: 1,
        title: "Instagram Algorithm 2025",
        duration: "20 min",
        content: `
          <h2>How Instagram's Algorithm Works</h2>
          <p>Understanding the algorithm is key to growing your account organically.</p>

          <h3>The 6 Ranking Factors</h3>
          
          <div class="factor-card">
            <h4>1. Interest</h4>
            <p>Instagram predicts how much you'll care about a post based on your past behavior.</p>
            <p><strong>Takeaway:</strong> Create content your audience consistently engages with.</p>
          </div>

          <div class="factor-card">
            <h4>2. Timeliness</h4>
            <p>Recent posts are prioritized over older ones.</p>
            <p><strong>Takeaway:</strong> Post when your audience is most active (check Insights).</p>
          </div>

          <div class="factor-card">
            <h4>3. Relationship</h4>
            <p>Content from accounts you interact with appears first.</p>
            <p><strong>Takeaway:</strong> Engage with your followers' content regularly.</p>
          </div>

          <div class="factor-card">
            <h4>4. Frequency</h4>
            <p>How often users open the app affects what they see.</p>
            <p><strong>Takeaway:</strong> Post consistently so you're there when followers check.</p>
          </div>

          <div class="factor-card">
            <h4>5. Following</h4>
            <p>If users follow many accounts, they see less from each.</p>
            <p><strong>Takeaway:</strong> Make your content unmissable and engaging.</p>
          </div>

          <div class="factor-card">
            <h4>6. Usage</h4>
            <p>Session length determines how deep Instagram digs into your feed.</p>
            <p><strong>Takeaway:</strong> Create scroll-stopping content.</p>
          </div>

          <h3>Content That Wins in 2025</h3>
          <ul>
            <li>📹 <strong>Reels:</strong> Instagram's priority format (shown to non-followers)</li>
            <li>📸 <strong>Carousels:</strong> Highest engagement rate (2-3x more than single images)</li>
            <li>📖 <strong>Stories:</strong> Build daily connection with followers</li>
            <li>🎥 <strong>Lives:</strong> Boost engagement and notify followers</li>
          </ul>

          <h3>Posting Frequency Recommendations</h3>
          <div class="posting-schedule">
            <p>📅 <strong>Reels:</strong> 3-5 per week</p>
            <p>📅 <strong>Feed Posts:</strong> 3-4 per week</p>
            <p>📅 <strong>Stories:</strong> Daily (5-10 per day)</p>
            <p>📅 <strong>Lives:</strong> 1-2 per week</p>
          </div>

          <div class="pro-tip">
            <h4>⚡ Algorithm Hack</h4>
            <p>Post a Reel, then share it to your Story 1 hour later, then to your feed after 24 hours. This triple-dips on the algorithm and maximizes reach.</p>
          </div>
        `
      },
      {
        id: 2,
        title: "Content Strategy for Growth",
        duration: "30 min",
        content: `
          <h2>Building a Content Strategy That Converts</h2>
          <p>Random posting doesn't work. You need a strategic content plan.</p>

          <h3>The 70-20-10 Rule</h3>
          <div class="rule-breakdown">
            <div class="rule-item">
              <h4>70% Value Content</h4>
              <p>Educate, entertain, or inspire your audience</p>
              <p><strong>Examples:</strong> Tips, tutorials, behind-the-scenes, stories</p>
            </div>
            <div class="rule-item">
              <h4>20% Engagement Content</h4>
              <p>Spark conversations and build community</p>
              <p><strong>Examples:</strong> Polls, questions, challenges, user-generated content</p>
            </div>
            <div class="rule-item">
              <h4>10% Promotional Content</h4>
              <p>Sell your products or services</p>
              <p><strong>Examples:</strong> Product launches, sales, testimonials</p>
            </div>
          </div>

          <h3>Content Pillars</h3>
          <p>Choose 3-5 core topics your account will cover:</p>
          <div class="example-box">
            <p><strong>Example for a Fitness Account:</strong></p>
            <p>1️⃣ Workout Routines</p>
            <p>2️⃣ Nutrition Tips</p>
            <p>3️⃣ Motivation & Mindset</p>
            <p>4️⃣ Transformation Stories</p>
            <p>5️⃣ Exercise Form & Technique</p>
          </div>

          <h3>Hook Formulas That Work</h3>
          <p>Your first line must grab attention in under 1 second:</p>
          <ul>
            <li>🎯 "Stop scrolling if you want to..."</li>
            <li>🎯 "I wish I knew this sooner..."</li>
            <li>🎯 "This changed my life..."</li>
            <li>🎯 "Nobody talks about..."</li>
            <li>🎯 "The truth about..."</li>
            <li>🎯 "[Number] things I learned..."</li>
          </ul>

          <h3>Reel Ideas That Go Viral</h3>
          <ol>
            <li><strong>Before/After:</strong> Show transformation</li>
            <li><strong>Day in the Life:</strong> Behind-the-scenes</li>
            <li><strong>Quick Tips:</strong> 3-5 actionable tips in 15 seconds</li>
            <li><strong>Mistakes to Avoid:</strong> Common errors in your niche</li>
            <li><strong>Trend Jacking:</strong> Put your spin on trending audio</li>
            <li><strong>Tutorials:</strong> Step-by-step how-tos</li>
            <li><strong>Myth Busting:</strong> Debunk common misconceptions</li>
          </ol>

          <h3>Hashtag Strategy 2025</h3>
          <p>Hashtags still work, but use them strategically:</p>
          <div class="hashtag-strategy">
            <p>📊 <strong>Small:</strong> 2-3 hashtags (10K-50K posts)</p>
            <p>📊 <strong>Medium:</strong> 3-4 hashtags (50K-500K posts)</p>
            <p>📊 <strong>Large:</strong> 2-3 hashtags (500K-1M posts)</p>
            <p><strong>Total:</strong> 7-9 hashtags max</p>
          </div>

          <div class="key-takeaway">
            <h4>💡 Remember</h4>
            <p>Consistency beats perfection. It's better to post good content regularly than perfect content once a month.</p>
          </div>
        `
      }
    ]
  },
  "facebook-ads": {
    title: "Facebook Ads Strategy",
    duration: "3 hours",
    level: "Intermediate",
    description: "Master Facebook advertising for maximum ROI",
    lessons: [
      {
        id: 1,
        title: "Facebook Ads Fundamentals",
        duration: "25 min",
        content: `
          <h2>Introduction to Facebook Advertising</h2>
          <p>Facebook Ads is one of the most powerful advertising platforms, with 2.9 billion active users and advanced targeting capabilities.</p>

          <h3>Why Facebook Ads in 2025?</h3>
          <ul>
            <li>🎯 <strong>Precise Targeting:</strong> Target by demographics, interests, behaviors, and custom audiences</li>
            <li>💰 <strong>Cost-Effective:</strong> Average CPC is $0.50-$2.00, lower than Google Ads</li>
            <li>📊 <strong>Measurable Results:</strong> Track every click, conversion, and dollar spent</li>
            <li>🔄 <strong>Retargeting:</strong> Reach people who already know your brand</li>
          </ul>

          <h3>The Facebook Ads Funnel</h3>
          <div class="step-process">
            <p><strong>Top of Funnel (Awareness):</strong> Video views, brand awareness campaigns</p>
            <p><strong>Middle of Funnel (Consideration):</strong> Traffic, engagement, lead generation</p>
            <p><strong>Bottom of Funnel (Conversion):</strong> Sales, catalog sales, store visits</p>
          </div>

          <h3>Campaign Objectives</h3>
          <div class="info-box">
            <p><strong>Awareness:</strong> Brand awareness, Reach</p>
            <p><strong>Traffic:</strong> Link clicks, Landing page views</p>
            <p><strong>Engagement:</strong> Post engagement, Page likes, Event responses</p>
            <p><strong>Leads:</strong> Instant forms, Messenger, Conversions</p>
            <p><strong>Sales:</strong> Conversions, Catalog sales</p>
          </div>

          <h3>The Ad Account Structure</h3>
          <ol>
            <li><strong>Campaign Level:</strong> Set objective and budget</li>
            <li><strong>Ad Set Level:</strong> Define audience, placement, and schedule</li>
            <li><strong>Ad Level:</strong> Create ad creative (images, videos, copy)</li>
          </ol>

          <div class="key-takeaway">
            <h4>💡 Pro Tip</h4>
            <p>Start with a clear goal. Don't run awareness campaigns when you need sales. Match your objective to your business goal.</p>
          </div>
        `
      },
      {
        id: 2,
        title: "Audience Targeting Mastery",
        duration: "30 min",
        content: `
          <h2>Advanced Audience Targeting</h2>
          <p>The secret to profitable Facebook ads is reaching the right people. Here's how to build laser-focused audiences.</p>

          <h3>Types of Audiences</h3>
          
          <div class="type-card">
            <h4>1. Saved Audiences (Cold Traffic)</h4>
            <p>Target people based on demographics, interests, and behaviors.</p>
            <p><strong>Best For:</strong> Customer acquisition, brand awareness</p>
            <p><strong>Example:</strong> Women, 25-45, interested in yoga, living in California</p>
          </div>

          <div class="type-card">
            <h4>2. Custom Audiences (Warm Traffic)</h4>
            <p>Target people who already know your brand.</p>
            <p><strong>Sources:</strong></p>
            <ul>
              <li>Website visitors (Facebook Pixel)</li>
              <li>Customer email list</li>
              <li>App users</li>
              <li>Instagram engagers</li>
              <li>Video viewers</li>
            </ul>
          </div>

          <div class="type-card">
            <h4>3. Lookalike Audiences (Expansion)</h4>
            <p>Facebook finds people similar to your best customers.</p>
            <p><strong>Best Practice:</strong> Create from your purchasers or top 25% website visitors</p>
            <p><strong>Size:</strong> Start with 1-2% lookalikes for highest quality</p>
          </div>

          <h3>Interest Targeting Strategy</h3>
          <div class="example-box">
            <p><strong>Narrow Your Audience:</strong></p>
            <p>Don't just target "fitness interested"</p>
            <p>✅ Target: Interested in CrossFit AND Paleo Diet AND lives within 10 miles</p>
            <p>This creates a highly qualified audience likely to convert.</p>
          </div>

          <h3>The Retargeting Ladder</h3>
          <div class="step-process">
            <p><strong>Stage 1:</strong> Show ad to website visitors (last 30 days)</p>
            <p><strong>Stage 2:</strong> Show different ad to people who viewed product</p>
            <p><strong>Stage 3:</strong> Show discount/urgency to cart abandoners</p>
            <p><strong>Stage 4:</strong> Upsell to past purchasers</p>
          </div>

          <div class="pro-tip">
            <h4>⚡ Expert Hack</h4>
            <p>Create a custom audience of people who spent 25%+ time on your website. These are your most engaged visitors and will have much higher conversion rates.</p>
          </div>
        `
      }
    ]
  },
  "twitter-growth": {
    title: "Twitter/X Growth Hacking",
    duration: "2 hours",
    level: "Beginner",
    description: "Build an engaged Twitter audience fast",
    lessons: [
      {
        id: 1,
        title: "Twitter Algorithm 2025",
        duration: "20 min",
        content: `
          <h2>Understanding the Twitter Algorithm</h2>
          <p>Twitter (now X) prioritizes engagement over everything. Here's how to make the algorithm work for you.</p>

          <h3>What the Algorithm Rewards</h3>
          <ul>
            <li>⚡ <strong>Quick Engagement:</strong> Tweets that get likes/replies in first 15 minutes get boosted</li>
            <li>💬 <strong>Replies:</strong> Worth 30x more than likes in the algorithm</li>
            <li>🔄 <strong>Retweets:</strong> Exponentially increase your reach</li>
            <li>⏱️ <strong>Dwell Time:</strong> Longer tweets (threads) keep people on platform</li>
            <li>🎥 <strong>Native Media:</strong> Images and videos outperform links</li>
          </ul>

          <h3>Best Times to Post</h3>
          <div class="posting-schedule">
            <p>📅 <strong>Weekdays:</strong> 8-10 AM, 12-1 PM, 5-6 PM (your timezone)</p>
            <p>📅 <strong>Weekends:</strong> 9-11 AM</p>
            <p>📅 <strong>Avoid:</strong> Late night (after 10 PM) unless your audience is global</p>
          </div>

          <h3>Content That Goes Viral</h3>
          <ol>
            <li><strong>Controversial Opinions:</strong> "Unpopular opinion: [take]"</li>
            <li><strong>How-To Threads:</strong> "7 ways to [achieve result]"</li>
            <li><strong>Personal Stories:</strong> "I went from [A] to [B] in [time]"</li>
            <li><strong>Memes & Humor:</strong> Relatable content in your niche</li>
            <li><strong>Breaking News:</strong> First to comment on trending topics</li>
          </ol>

          <h3>The Hook Formula</h3>
          <div class="formula-box">
            <p><strong>First Line = Make or Break</strong></p>
            <p>You have 0.5 seconds to stop the scroll</p>
          </div>

          <p><strong>Proven Hooks:</strong></p>
          <ul>
            <li>"Most people don't know this about [topic]:"</li>
            <li>"I analyzed 1000 [things] and found:"</li>
            <li>"Stop doing [common mistake]"</li>
            <li>"Here's what [number] years taught me:"</li>
          </ul>

          <div class="key-takeaway">
            <h4>💡 Growth Secret</h4>
            <p>Post 3-5 times per day. Consistency is more important than perfection. The algorithm rewards active accounts.</p>
          </div>
        `
      }
    ]
  },
  "content-writing": {
    title: "Content Writing Mastery",
    duration: "3.5 hours",
    level: "Beginner",
    description: "Write compelling content that converts",
    lessons: [
      {
        id: 1,
        title: "Writing for the Web",
        duration: "25 min",
        content: `
          <h2>Web Writing vs Traditional Writing</h2>
          <p>Writing for the web is different. People scan, skim, and have short attention spans. Here's how to adapt.</p>

          <h3>The F-Pattern Reading</h3>
          <p>Eye-tracking studies show people read web content in an F-pattern:</p>
          <div class="info-box">
            <p>👀 They read the headline</p>
            <p>👀 Scan the first paragraph</p>
            <p>👀 Look at subheadings</p>
            <p>👀 Glance at bullet points</p>
            <p>👀 Read the first few words of paragraphs</p>
          </div>

          <h3>The 4 U's Formula</h3>
          <p>Every headline should be:</p>
          <ol>
            <li><strong>Useful:</strong> Promise a clear benefit</li>
            <li><strong>Urgent:</strong> Create time sensitivity</li>
            <li><strong>Unique:</strong> Stand out from competitors</li>
            <li><strong>Ultra-specific:</strong> Use numbers and details</li>
          </ol>

          <div class="example-box">
            <p>❌ <strong>Bad:</strong> "Tips for Better Marketing"</p>
            <p>✅ <strong>Good:</strong> "7 Marketing Tactics That Increased Our Sales 312% in 90 Days"</p>
          </div>

          <h3>Write Like You Talk</h3>
          <p>The best web content is conversational:</p>
          <ul>
            <li>✅ Use "you" and "I"</li>
            <li>✅ Write short sentences (10-20 words)</li>
            <li>✅ Use contractions (don't, can't, won't)</li>
            <li>✅ Ask questions</li>
            <li>✅ Use simple words (help vs. facilitate)</li>
          </ul>

          <h3>The Inverted Pyramid</h3>
          <div class="step-process">
            <p><strong>Top:</strong> Most important info first (what, why)</p>
            <p><strong>Middle:</strong> Supporting details and examples</p>
            <p><strong>Bottom:</strong> Background information</p>
          </div>

          <h3>Formatting for Readability</h3>
          <ul>
            <li>📝 Paragraphs: 2-3 sentences max</li>
            <li>📝 Subheadings: Every 300 words</li>
            <li>📝 Bullet points: Break up dense text</li>
            <li>📝 Bold: Highlight key points</li>
            <li>📝 White space: Don't crowd the page</li>
          </ul>

          <div class="pro-tip">
            <h4>⚡ Pro Tip</h4>
            <p>Read your content out loud. If you stumble or run out of breath, your sentences are too long.</p>
          </div>
        `
      },
      {
        id: 2,
        title: "Persuasive Copywriting",
        duration: "30 min",
        content: `
          <h2>Writing Copy That Converts</h2>
          <p>Copywriting is salesmanship in print. Here's how to write words that make people take action.</p>

          <h3>The AIDA Formula</h3>
          <div class="formula-list">
            <p><strong>A - Attention:</strong> Grab them with a powerful headline</p>
            <p><strong>I - Interest:</strong> Hook them with a compelling opening</p>
            <p><strong>D - Desire:</strong> Make them want your solution</p>
            <p><strong>A - Action:</strong> Tell them exactly what to do next</p>
          </div>

          <h3>Features vs Benefits</h3>
          <p>People don't buy features, they buy outcomes.</p>
          <div class="comparison">
            <p><strong>Feature:</strong> "Our software has automated reporting"</p>
            <p><strong>Benefit:</strong> "Save 10 hours per week on manual reports"</p>
          </div>

          <h3>Power Words That Sell</h3>
          <ul>
            <li>🔥 Free, New, Proven, Guaranteed, You</li>
            <li>🔥 Easy, Simple, Fast, Instant, Now</li>
            <li>🔥 Secret, Exclusive, Limited, Urgent</li>
            <li>🔥 Discover, Unlock, Master, Transform</li>
          </ul>

          <h3>The PAS Framework</h3>
          <div class="step-process">
            <p><strong>P - Problem:</strong> Identify their pain point</p>
            <p><strong>A - Agitate:</strong> Make the problem feel urgent</p>
            <p><strong>S - Solution:</strong> Present your offer as the answer</p>
          </div>

          <div class="example-box">
            <p><strong>Example:</strong></p>
            <p><strong>Problem:</strong> "Spending hours writing social media posts?"</p>
            <p><strong>Agitate:</strong> "While you're stuck creating content, your competitors are growing their audience."</p>
            <p><strong>Solution:</strong> "Our AI tool creates 30 days of posts in 10 minutes."</p>
          </div>

          <h3>Call-to-Action Best Practices</h3>
          <ul>
            <li>✅ Use action verbs (Get, Start, Download, Join)</li>
            <li>✅ Create urgency (Limited spots, Offer ends tonight)</li>
            <li>✅ Remove risk (Free trial, Money-back guarantee)</li>
            <li>✅ Be specific (Get My Free Guide vs Submit)</li>
          </ul>

          <div class="key-takeaway">
            <h4>💡 Remember</h4>
            <p>Always answer "What's in it for me?" from your reader's perspective. Every sentence should move them closer to taking action.</p>
          </div>
        `
      }
    ]
  },
  "visual-content": {
    title: "Visual Content Creation",
    duration: "2.5 hours",
    level: "Beginner",
    description: "Create stunning graphics without being a designer",
    lessons: [
      {
        id: 1,
        title: "Design Fundamentals",
        duration: "20 min",
        content: `
          <h2>Non-Designer's Guide to Visual Content</h2>
          <p>You don't need to be a graphic designer to create professional-looking visuals. Follow these principles.</p>

          <h3>The 5 Design Principles</h3>
          
          <div class="vital-card">
            <h4>1. Contrast</h4>
            <p>Make important elements stand out</p>
            <p><strong>How:</strong> Use different sizes, colors, or weights</p>
            <p><strong>Example:</strong> Bold headline + light body text</p>
          </div>

          <div class="vital-card">
            <h4>2. Alignment</h4>
            <p>Everything should connect to something else</p>
            <p><strong>How:</strong> Left-align text, center headlines</p>
            <p><strong>Avoid:</strong> Random placement</p>
          </div>

          <div class="vital-card">
            <h4>3. Repetition</h4>
            <p>Consistency creates professionalism</p>
            <p><strong>How:</strong> Use same fonts, colors, spacing</p>
            <p><strong>Example:</strong> Brand colors in every post</p>
          </div>

          <div class="vital-card">
            <h4>4. Proximity</h4>
            <p>Related items should be grouped</p>
            <p><strong>How:</strong> Put related text close together</p>
            <p><strong>Space:</strong> Separate unrelated elements</p>
          </div>

          <div class="vital-card">
            <h4>5. White Space</h4>
            <p>Empty space is powerful</p>
            <p><strong>Why:</strong> Reduces clutter, guides the eye</p>
            <p><strong>Rule:</strong> Less is more</p>
          </div>

          <h3>Color Psychology</h3>
          <ul>
            <li>🔴 <strong>Red:</strong> Urgency, excitement, passion (CTA buttons)</li>
            <li>🔵 <strong>Blue:</strong> Trust, professionalism, calm (B2B brands)</li>
            <li>🟢 <strong>Green:</strong> Growth, health, wealth (finance, wellness)</li>
            <li>🟡 <strong>Yellow:</strong> Optimism, clarity, energy (highlights)</li>
            <li>🟣 <strong>Purple:</strong> Luxury, creativity (premium products)</li>
            <li>⚫ <strong>Black:</strong> Sophistication, power (luxury brands)</li>
          </ul>

          <h3>Typography Rules</h3>
          <div class="tips-box">
            <p>✅ Use maximum 2-3 fonts per design</p>
            <p>✅ Pair a serif with a sans-serif</p>
            <p>✅ Minimum font size: 16px for body text</p>
            <p>✅ Line spacing: 1.5x font size</p>
            <p>✅ Never use Comic Sans or Papyrus</p>
          </div>

          <h3>Free Design Tools</h3>
          <ul>
            <li>🎨 <strong>Canva:</strong> Easiest for beginners, templates for everything</li>
            <li>🎨 <strong>Figma:</strong> Professional tool, free tier available</li>
            <li>🎨 <strong>Adobe Express:</strong> Quick graphics and videos</li>
            <li>🎨 <strong>Remove.bg:</strong> Remove backgrounds instantly</li>
            <li>🎨 <strong>Unsplash/Pexels:</strong> Free high-quality photos</li>
          </ul>

          <div class="pro-tip">
            <h4>⚡ Quick Win</h4>
            <p>Start with Canva templates and customize them with your brand colors and content. You'll have professional designs in minutes.</p>
          </div>
        `
      }
    ]
  },
  "google-analytics": {
    title: "Google Analytics 4 Mastery",
    duration: "3 hours",
    level: "Intermediate",
    description: "Master GA4 and make data-driven decisions",
    lessons: [
      {
        id: 1,
        title: "GA4 Setup & Configuration",
        duration: "30 min",
        content: `
          <h2>Getting Started with Google Analytics 4</h2>
          <p>GA4 is completely different from Universal Analytics. Here's everything you need to know.</p>

          <h3>Why GA4 is Different</h3>
          <ul>
            <li>📊 <strong>Event-based:</strong> Everything is an event, not sessions/pageviews</li>
            <li>🔮 <strong>Predictive:</strong> AI predicts user behavior (purchase probability)</li>
            <li>🔒 <strong>Privacy-first:</strong> Works without cookies, complies with GDPR</li>
            <li>📱 <strong>Cross-platform:</strong> Track web + app in one property</li>
          </ul>

          <h3>Setting Up GA4 (Step-by-Step)</h3>
          <div class="step-process">
            <p><strong>Step 1:</strong> Create GA4 property in Google Analytics</p>
            <p><strong>Step 2:</strong> Add data stream (Web, iOS, or Android)</p>
            <p><strong>Step 3:</strong> Install tracking code on your website</p>
            <p><strong>Step 4:</strong> Configure enhanced measurement (scrolls, clicks, video)</p>
            <p><strong>Step 5:</strong> Set up conversions (form submits, purchases)</p>
            <p><strong>Step 6:</strong> Link to Google Ads and Search Console</p>
          </div>

          <h3>Key Events to Track</h3>
          <div class="info-box">
            <p><strong>Automatically Tracked:</strong></p>
            <ul>
              <li>Page views</li>
              <li>Scrolls (90%)</li>
              <li>Outbound clicks</li>
              <li>Site search</li>
              <li>Video engagement</li>
              <li>File downloads</li>
            </ul>
          </div>

          <h3>Custom Events You Should Create</h3>
          <ol>
            <li><strong>Email signup:</strong> Capture lead generation</li>
            <li><strong>Button clicks:</strong> CTA performance</li>
            <li><strong>Add to cart:</strong> E-commerce funnel</li>
            <li><strong>Form starts:</strong> Track drop-offs</li>
            <li><strong>Time on page:</strong> Engagement metric</li>
          </ol>

          <h3>Essential Reports to Check Daily</h3>
          <ul>
            <li>📈 <strong>Realtime:</strong> Who's on your site now</li>
            <li>📈 <strong>Acquisition:</strong> Where traffic comes from</li>
            <li>📈 <strong>Engagement:</strong> What content performs best</li>
            <li>📈 <strong>Conversions:</strong> Goal completions</li>
          </ul>

          <div class="warning-box">
            <h4>⚠️ Important</h4>
            <p>GA4 has a learning curve. Spend 30 minutes daily exploring reports for the first week. It will click!</p>
          </div>
        `
      }
    ]
  },
  "data-marketing": {
    title: "Data-Driven Marketing",
    duration: "2.5 hours",
    level: "Advanced",
    description: "Use data to optimize marketing performance",
    lessons: [
      {
        id: 1,
        title: "Marketing Metrics That Matter",
        duration: "25 min",
        content: `
          <h2>Key Marketing Metrics</h2>
          <p>Don't drown in data. Focus on metrics that actually impact your business.</p>

          <h3>The Marketing Metrics Hierarchy</h3>
          
          <div class="metric-card">
            <h4>Tier 1: Revenue Metrics (Most Important)</h4>
            <p>💰 <strong>Revenue:</strong> Total sales generated</p>
            <p>💰 <strong>ROI:</strong> (Revenue - Cost) / Cost × 100</p>
            <p>💰 <strong>Customer Lifetime Value (LTV):</strong> Total revenue per customer</p>
            <p>💰 <strong>Customer Acquisition Cost (CAC):</strong> Cost to acquire one customer</p>
            <p><strong>Goal:</strong> LTV should be 3x your CAC</p>
          </div>

          <div class="metric-card">
            <h4>Tier 2: Conversion Metrics</h4>
            <p>📊 <strong>Conversion Rate:</strong> % of visitors who take desired action</p>
            <p>📊 <strong>Cost Per Lead (CPL):</strong> How much each lead costs</p>
            <p>📊 <strong>Lead to Customer Rate:</strong> % of leads that buy</p>
            <p>📊 <strong>Average Order Value (AOV):</strong> Typical purchase size</p>
          </div>

          <div class="metric-card">
            <h4>Tier 3: Traffic Metrics</h4>
            <p>🚦 <strong>Website Traffic:</strong> Total visitors</p>
            <p>🚦 <strong>Traffic Sources:</strong> Where visitors come from</p>
            <p>🚦 <strong>Bounce Rate:</strong> % who leave without interacting</p>
            <p>🚦 <strong>Time on Site:</strong> Engagement indicator</p>
          </div>

          <h3>The Pirate Metrics (AARRR)</h3>
          <div class="formula-list">
            <p><strong>A - Acquisition:</strong> How do users find you?</p>
            <p><strong>A - Activation:</strong> Do they have a great first experience?</p>
            <p><strong>R - Retention:</strong> Do they come back?</p>
            <p><strong>R - Revenue:</strong> Do they pay?</p>
            <p><strong>R - Referral:</strong> Do they tell others?</p>
          </div>

          <h3>Calculating ROI</h3>
          <div class="formula-box">
            <p><strong>ROI = (Revenue - Investment) ÷ Investment × 100</strong></p>
            <p>Example: Spent $1,000 on ads, made $5,000</p>
            <p>ROI = (5,000 - 1,000) ÷ 1,000 × 100 = 400%</p>
          </div>

          <h3>Benchmarks by Industry (2025)</h3>
          <div class="comparison">
            <p><strong>E-commerce Conversion Rate:</strong> 2-3%</p>
            <p><strong>B2B Lead Gen Conversion Rate:</strong> 5-10%</p>
            <p><strong>Email Click Rate:</strong> 2-5%</p>
            <p><strong>Facebook Ad CTR:</strong> 0.9%</p>
            <p><strong>Google Ads CTR:</strong> 3-5%</p>
          </div>

          <div class="action-items">
            <h4>🎯 Action Steps</h4>
            <p>1. Calculate your current CAC and LTV</p>
            <p>2. Set up conversion tracking for all campaigns</p>
            <p>3. Create a weekly metrics dashboard</p>
            <p>4. Compare your metrics to industry benchmarks</p>
          </div>
        `
      }
    ]
  },
  "youtube-seo": {
    title: "YouTube SEO",
    duration: "2 hours",
    level: "Beginner",
    description: "Rank your videos higher on YouTube",
    lessons: [
      {
        id: 1,
        title: "YouTube Algorithm Secrets",
        duration: "25 min",
        content: `
          <h2>How YouTube Ranks Videos</h2>
          <p>YouTube is the 2nd largest search engine. Here's how to make the algorithm love your videos.</p>

          <h3>The YouTube Ranking Factors</h3>
          <ol>
            <li><strong>Click-Through Rate (CTR):</strong> % of people who click your thumbnail</li>
            <li><strong>Watch Time:</strong> Total minutes people watch</li>
            <li><strong>Average View Duration:</strong> % of video watched</li>
            <li><strong>Engagement:</strong> Likes, comments, shares</li>
            <li><strong>Session Time:</strong> How long viewers stay on YouTube after your video</li>
          </ol>

          <h3>The First 30 Seconds Rule</h3>
          <p>If viewers leave in the first 30 seconds, YouTube won't recommend your video.</p>
          <div class="tips-box">
            <p>✅ Hook them immediately with a promise</p>
            <p>✅ Show the best moment first (pattern interrupt)</p>
            <p>✅ Tell them what they'll learn</p>
            <p>✅ Cut out intros and fluff</p>
            <p>❌ Don't: "Hey guys, welcome back to my channel..."</p>
          </div>

          <h3>Thumbnail Best Practices</h3>
          <p>Your thumbnail is 50% of your success:</p>
          <ul>
            <li>🖼️ <strong>Size:</strong> 1280x720 pixels (16:9 ratio)</li>
            <li>🖼️ <strong>Text:</strong> 3-5 words maximum, huge font</li>
            <li>🖼️ <strong>Faces:</strong> Close-ups with emotion work best</li>
            <li>🖼️ <strong>Colors:</strong> High contrast, bright colors</li>
            <li>🖼️ <strong>Test:</strong> Check how it looks on mobile</li>
          </ul>

          <div class="example-box">
            <p><strong>Great Thumbnail Examples:</strong></p>
            <p>✅ Person pointing at text with shocked face</p>
            <p>✅ Before/after split screen</p>
            <p>✅ Big numbers with arrows</p>
            <p>✅ Question that makes you curious</p>
          </div>

          <h3>Title Formula</h3>
          <div class="formula-box">
            <p><strong>[Number] + [Keyword] + [Benefit] + [Curiosity]</strong></p>
            <p>Example: "7 iPhone Tricks That'll Make You Say 'I Didn't Know That!'"</p>
          </div>

          <h3>Description Optimization</h3>
          <div class="step-process">
            <p><strong>First 2 Lines:</strong> Hook + keyword (shows before "show more")</p>
            <p><strong>Middle:</strong> Detailed summary with timestamps</p>
            <p><strong>Bottom:</strong> Links, social media, related videos</p>
          </div>

          <h3>Tags Strategy</h3>
          <ul>
            <li>Use 5-8 tags maximum</li>
            <li>Start with your exact keyword</li>
            <li>Add 2-3 related keywords</li>
            <li>Include 1-2 broad category tags</li>
          </ul>

          <div class="key-takeaway">
            <h4>💡 Golden Rule</h4>
            <p>Optimize for humans first, algorithm second. If viewers enjoy and finish your video, YouTube will promote it.</p>
          </div>
        `
      }
    ]
  },
  "short-video": {
    title: "Short-Form Video Strategy",
    duration: "2 hours",
    level: "Beginner",
    description: "Master Reels, Shorts & TikTok",
    lessons: [
      {
        id: 1,
        title: "Viral Short Video Formula",
        duration: "25 min",
        content: `
          <h2>The Science of Viral Short Videos</h2>
          <p>TikToks, Reels, and Shorts follow the same viral patterns. Master the formula.</p>

          <h3>The 3-Second Rule</h3>
          <p>You have 3 seconds to hook viewers or they scroll. Use these tactics:</p>
          <div class="formula-list">
            <p>⚡ <strong>Pattern Interrupt:</strong> Start with movement or loud sound</p>
            <p>⚡ <strong>Text Hook:</strong> Put text overlay with question/statement</p>
            <p>⚡ <strong>Visual Hook:</strong> Show the result/transformation first</p>
            <p>⚡ <strong>Curiosity Gap:</strong> "Wait until you see what happens..."</p>
          </div>

          <h3>The Viral Video Structure</h3>
          <div class="step-process">
            <p><strong>0-3 sec:</strong> Hook (stop the scroll)</p>
            <p><strong>3-10 sec:</strong> Promise (tell them what they'll learn)</p>
            <p><strong>10-50 sec:</strong> Deliver (show the content)</p>
            <p><strong>Last 5 sec:</strong> CTA (follow for more, comment, share)</p>
          </div>

          <h3>Hook Formulas That Work</h3>
          <ul>
            <li>🎯 "If you [pain point], watch this"</li>
            <li>🎯 "I tried [thing] for [time] and..."</li>
            <li>🎯 "POV: You just discovered..."</li>
            <li>🎯 "Things I wish I knew about [topic]"</li>
            <li>🎯 "Watch me [do impressive thing]"</li>
            <li>🎯 "Day [X] of trying [challenge]"</li>
          </ul>

          <h3>Content Types That Go Viral</h3>
          
          <div class="type-card">
            <h4>1. Before & After</h4>
            <p>Show transformation in any niche</p>
            <p><strong>Works for:</strong> Fitness, design, cleaning, makeovers</p>
          </div>

          <div class="type-card">
            <h4>2. Quick Tips/Hacks</h4>
            <p>"3 [category] hacks you didn't know"</p>
            <p><strong>Works for:</strong> Any educational content</p>
          </div>

          <div class="type-card">
            <h4>3. Relatable Moments</h4>
            <p>"POV: When [relatable situation]"</p>
            <p><strong>Works for:</strong> Comedy, lifestyle, work content</p>
          </div>

          <div class="type-card">
            <h4>4. Trend Jacking</h4>
            <p>Use trending audio, put your spin on it</p>
            <p><strong>Works for:</strong> Everything (adapt to your niche)</p>
          </div>

          <h3>Editing Tips for Virality</h3>
          <ul>
            <li>✂️ Cut every 1-3 seconds (keeps attention)</li>
            <li>✂️ Add text captions (85% watch without sound)</li>
            <li>✂️ Use trending music (check TikTok/IG trends)</li>
            <li>✂️ Add transitions for visual interest</li>
            <li>✂️ Keep it vertical (9:16 ratio)</li>
          </ul>

          <h3>Best Posting Times</h3>
          <div class="posting-schedule">
            <p>📅 <strong>TikTok:</strong> 6-10 AM, 7-11 PM</p>
            <p>📅 <strong>Instagram Reels:</strong> 9 AM, 12 PM, 3-4 PM</p>
            <p>📅 <strong>YouTube Shorts:</strong> 3-6 PM, 8-11 PM</p>
          </div>

          <div class="pro-tip">
            <h4>⚡ Viral Hack</h4>
            <p>Post the same video to TikTok, Reels, and Shorts. Repurpose what works. One viral video can be posted 3 times across platforms.</p>
          </div>

          <h3>Free Editing Tools</h3>
          <ul>
            <li>📱 <strong>CapCut:</strong> Best free editor, all features</li>
            <li>📱 <strong>InShot:</strong> Quick edits, easy to use</li>
            <li>📱 <strong>VN:</strong> Professional features, no watermark</li>
            <li>📱 <strong>Canva:</strong> Create video templates</li>
          </ul>

          <div class="action-items">
            <h4>🎯 Your First Viral Video</h4>
            <p>1. Pick a hook formula above</p>
            <p>2. Record a 15-30 second video</p>
            <p>3. Add text captions</p>
            <p>4. Use trending audio</p>
            <p>5. Post at optimal time</p>
            <p>6. Engage with first 10 comments within 1 hour</p>
          </div>
        `
      }
    ]
  }
};

// State management
let currentCourse = null;
let currentLessonIndex = 0;
let completedLessons = new Set();

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    alert("Please login to access courses");
    window.location.href = "login.html";
    return;
  }

  // Get course ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id');

  if (!courseId || !courses[courseId]) {
    alert("Course not found");
    window.location.href = "learn.html";
    return;
  }

  currentCourse = courses[courseId];
  loadCourse();

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

function loadCourse() {
  // Set course header
  document.getElementById("courseTitle").textContent = currentCourse.title;
  document.getElementById("courseDuration").innerHTML = `<i class="fas fa-clock"></i> ${currentCourse.duration}`;
  document.getElementById("courseLevel").innerHTML = `<i class="fas fa-signal"></i> ${currentCourse.level}`;

  // Load lessons sidebar
  loadLessonsList();

  // Load first lesson
  loadLesson(0);
}

function loadLessonsList() {
  const lessonsList = document.getElementById("lessonsList");
  lessonsList.innerHTML = '';

  currentCourse.lessons.forEach((lesson, index) => {
    const lessonItem = document.createElement("div");
    lessonItem.className = "lesson-item" + (index === currentLessonIndex ? " active" : "") + (completedLessons.has(lesson.id) ? " completed" : "");
    
    lessonItem.innerHTML = `
      <div class="lesson-number">${index + 1}</div>
      <div class="lesson-info">
        <h4>${lesson.title}</h4>
        <span>${lesson.duration}</span>
      </div>
      ${completedLessons.has(lesson.id) ? '<i class="fas fa-check-circle"></i>' : ''}
    `;
    
    lessonItem.onclick = () => loadLesson(index);
    lessonsList.appendChild(lessonItem);
  });
}

function loadLesson(index) {
  if (index < 0 || index >= currentCourse.lessons.length) return;

  currentLessonIndex = index;
  const lesson = currentCourse.lessons[index];

  // Update content
  document.getElementById("courseContent").innerHTML = lesson.content;

  // Update sidebar
  loadLessonsList();

  // Update navigation buttons
  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").textContent = index === currentCourse.lessons.length - 1 ? "Complete Course" : "Next";

  // Update progress
  updateProgress();

  // Scroll to top
  window.scrollTo(0, 0);
}

function previousLesson() {
  if (currentLessonIndex > 0) {
    loadLesson(currentLessonIndex - 1);
  }
}

function nextLesson() {
  // Mark current lesson as completed
  completedLessons.add(currentCourse.lessons[currentLessonIndex].id);

  if (currentLessonIndex < currentCourse.lessons.length - 1) {
    loadLesson(currentLessonIndex + 1);
  } else {
    // Course completed
    alert("🎉 Congratulations! You've completed the course!\n\nYou've earned a certificate of completion.\n\nContinue learning with other courses!");
    window.location.href = "learn.html";
  }
}

function updateProgress() {
  const progress = (completedLessons.size / currentCourse.lessons.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";
  document.getElementById("progressText").textContent = Math.round(progress) + "% Complete";
}
