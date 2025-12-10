// frontend/js/resource.js

const resources = {
  "seo-checklist": {
    title: "SEO Checklist 2025",
    icon: "📋",
    description: "Complete 50-point SEO checklist to optimize any website",
    type: "PDF",
    content: `
      <div class="checklist-intro">
        <h2>🎯 The Ultimate SEO Checklist for 2025</h2>
        <p>Use this comprehensive checklist to ensure your website is fully optimized for search engines. Check off each item as you complete it!</p>
      </div>

      <div class="checklist-section">
        <h3>🔍 Keyword Research (Pre-Launch)</h3>
        <div class="checklist-items">
          <label class="checklist-item">
            <input type="checkbox"> Identified 20-30 target keywords for your niche
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Analyzed keyword difficulty scores (targeting KD < 40)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Researched search intent for each keyword
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Created keyword mapping spreadsheet (keyword → page)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Analyzed competitor rankings for target keywords
          </label>
        </div>
      </div>

      <div class="checklist-section">
        <h3>📝 On-Page SEO</h3>
        <div class="checklist-items">
          <label class="checklist-item">
            <input type="checkbox"> Optimized title tags (50-60 characters, keyword near beginning)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Written compelling meta descriptions (150-160 characters)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Used H1 tag once per page with primary keyword
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Structured content with H2, H3 subheadings
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Included target keyword in first 100 words
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Added keywords to URL slugs (short, descriptive)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Optimized images with descriptive alt text
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Compressed images (WebP format, under 100KB)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Added 3-5 internal links per page
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Included 1-2 external links to authoritative sources
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Content length: 1,500-2,500 words for blog posts
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Written unique, valuable content (not duplicate)
          </label>
        </div>
      </div>

      <div class="checklist-section">
        <h3>⚙️ Technical SEO</h3>
        <div class="checklist-items">
          <label class="checklist-item">
            <input type="checkbox"> Installed SSL certificate (HTTPS enabled)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Page load time under 3 seconds (test with PageSpeed Insights)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Mobile-friendly design (responsive layout)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Created and submitted XML sitemap to Google
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Configured robots.txt file correctly
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Fixed all broken links (404 errors)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Set up 301 redirects for old URLs
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Used canonical tags to prevent duplicate content
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Enabled browser caching
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Minified CSS and JavaScript files
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Implemented structured data (Schema markup)
          </label>
        </div>
      </div>

      <div class="checklist-section">
        <h3>🔗 Off-Page SEO</h3>
        <div class="checklist-items">
          <label class="checklist-item">
            <input type="checkbox"> Created linkable assets (guides, infographics, tools)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Guest posted on 3-5 industry blogs
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Submitted site to relevant directories
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Built 10+ high-quality backlinks (DR 40+)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Claimed and optimized Google Business Profile
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Active on social media platforms
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Responded to HARO queries for PR opportunities
          </label>
        </div>
      </div>

      <div class="checklist-section">
        <h3>📊 Analytics & Tracking</h3>
        <div class="checklist-items">
          <label class="checklist-item">
            <input type="checkbox"> Set up Google Analytics 4
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Connected Google Search Console
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Configured conversion tracking
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Set up custom events in GA4
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Created SEO dashboard to track rankings
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Monitor backlinks with Ahrefs or SEMrush
          </label>
        </div>
      </div>

      <div class="checklist-section">
        <h3>📱 Local SEO (If Applicable)</h3>
        <div class="checklist-items">
          <label class="checklist-item">
            <input type="checkbox"> Optimized Google Business Profile (complete all fields)
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Added NAP (Name, Address, Phone) consistently across web
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Collected 20+ Google reviews
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Created location-specific landing pages
          </label>
          <label class="checklist-item">
            <input type="checkbox"> Listed in local directories (Yelp, Yellow Pages)
          </label>
        </div>
      </div>

      <div class="checklist-footer">
        <h3>🎉 Next Steps</h3>
        <p>Once you've completed this checklist:</p>
        <ul>
          <li>Monitor your rankings weekly in Google Search Console</li>
          <li>Track organic traffic growth in Google Analytics</li>
          <li>Update content every 3-6 months to keep it fresh</li>
          <li>Continue building high-quality backlinks</li>
          <li>Stay updated with Google algorithm changes</li>
        </ul>
        <div class="progress-tracker">
          <p><strong>Your Progress:</strong> <span id="checklistProgress">0%</span> Complete</p>
          <div class="progress-bar-resource">
            <div class="progress-fill-resource" id="progressBar"></div>
          </div>
        </div>
      </div>
    `
  },
  "social-calendar": {
    title: "Social Media Calendar Template 2025",
    icon: "📅",
    description: "Plan your social media content 30 days in advance",
    type: "Template",
    content: `
      <div class="calendar-intro">
        <h2>📅 Social Media Content Calendar</h2>
        <p>Use this template to plan, organize, and schedule your social media content across all platforms.</p>
      </div>

      <div class="calendar-guide">
        <h3>How to Use This Calendar</h3>
        <ol>
          <li><strong>Plan Weekly:</strong> Block out time every Sunday to plan next week's content</li>
          <li><strong>Batch Create:</strong> Create multiple posts in one sitting for efficiency</li>
          <li><strong>Schedule in Advance:</strong> Use tools like Later, Buffer, or Hootsuite</li>
          <li><strong>Mix Content Types:</strong> Follow the 70-20-10 rule (see below)</li>
          <li><strong>Track Performance:</strong> Note which posts perform best</li>
        </ol>
      </div>

      <div class="content-framework">
        <h3>The 70-20-10 Content Rule</h3>
        <div class="rule-cards">
          <div class="rule-card">
            <h4>70% Value Content</h4>
            <p>Educate, entertain, or inspire your audience</p>
            <ul>
              <li>How-to tutorials</li>
              <li>Tips and tricks</li>
              <li>Industry insights</li>
              <li>Behind-the-scenes</li>
              <li>Customer stories</li>
            </ul>
          </div>
          <div class="rule-card">
            <h4>20% Engagement Content</h4>
            <p>Spark conversations and build community</p>
            <ul>
              <li>Polls and questions</li>
              <li>Fill-in-the-blank posts</li>
              <li>This or that</li>
              <li>Challenges</li>
              <li>User-generated content</li>
            </ul>
          </div>
          <div class="rule-card">
            <h4>10% Promotional Content</h4>
            <p>Sell your products or services</p>
            <ul>
              <li>Product launches</li>
              <li>Sales announcements</li>
              <li>Testimonials</li>
              <li>Special offers</li>
              <li>Call-to-actions</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="posting-schedule">
        <h3>Recommended Posting Frequency</h3>
        <table class="schedule-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Posts per Week</th>
              <th>Best Times</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Instagram</strong></td>
              <td>3-5 posts + 5-10 Stories daily</td>
              <td>9 AM, 12 PM, 7 PM</td>
            </tr>
            <tr>
              <td><strong>Facebook</strong></td>
              <td>3-4 posts</td>
              <td>1-3 PM weekdays</td>
            </tr>
            <tr>
              <td><strong>Twitter/X</strong></td>
              <td>10-15 posts</td>
              <td>8-10 AM, 12 PM, 5-6 PM</td>
            </tr>
            <tr>
              <td><strong>LinkedIn</strong></td>
              <td>3-5 posts</td>
              <td>7-8 AM, 12 PM, 5-6 PM Tue-Thu</td>
            </tr>
            <tr>
              <td><strong>TikTok</strong></td>
              <td>3-5 videos</td>
              <td>6-10 AM, 7-11 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="content-ideas">
        <h3>30 Content Ideas (1 per Day)</h3>
        <div class="ideas-grid">
          <div class="idea-card">1. Share a motivational quote</div>
          <div class="idea-card">2. Post a tutorial or how-to</div>
          <div class="idea-card">3. Share industry news</div>
          <div class="idea-card">4. Behind-the-scenes content</div>
          <div class="idea-card">5. Customer testimonial</div>
          <div class="idea-card">6. Ask a question</div>
          <div class="idea-card">7. Share a fun fact</div>
          <div class="idea-card">8. Product showcase</div>
          <div class="idea-card">9. Team member spotlight</div>
          <div class="idea-card">10. Before/after transformation</div>
          <div class="idea-card">11. Poll your audience</div>
          <div class="idea-card">12. Share user-generated content</div>
          <div class="idea-card">13. Create a carousel post</div>
          <div class="idea-card">14. Go live on video</div>
          <div class="idea-card">15. Share a blog post</div>
          <div class="idea-card">16. Post a meme (relevant to niche)</div>
          <div class="idea-card">17. Announce a giveaway</div>
          <div class="idea-card">18. Share tips and tricks</div>
          <div class="idea-card">19. Create a Reel/TikTok</div>
          <div class="idea-card">20. Host a Q&A session</div>
          <div class="idea-card">21. Share your origin story</div>
          <div class="idea-card">22. Highlight a problem you solve</div>
          <div class="idea-card">23. Share statistics/data</div>
          <div class="idea-card">24. Create a challenge</div>
          <div class="idea-card">25. Share a case study</div>
          <div class="idea-card">26. Post throwback content</div>
          <div class="idea-card">27. Share workspace/office tour</div>
          <div class="idea-card">28. Celebrate a milestone</div>
          <div class="idea-card">29. Share a funny fail</div>
          <div class="idea-card">30. Preview upcoming content</div>
        </div>
      </div>

      <div class="calendar-template">
        <h3>Weekly Planning Template</h3>
        <p><strong>Copy this format for each week:</strong></p>
        <div class="week-template">
          <h4>Week of: [Date]</h4>
          <p><strong>Theme:</strong> [Weekly focus - e.g., "Customer Success Stories"]</p>
          
          <table class="planning-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Platform</th>
                <th>Content Type</th>
                <th>Caption/Topic</th>
                <th>Media Needed</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>Instagram</td>
                <td>Reel</td>
                <td>Quick tip video</td>
                <td>Video clip</td>
                <td>☐</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>LinkedIn</td>
                <td>Carousel</td>
                <td>Industry insights</td>
                <td>5 slides</td>
                <td>☐</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>Twitter</td>
                <td>Thread</td>
                <td>How-to guide</td>
                <td>Text + 1 image</td>
                <td>☐</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>Facebook</td>
                <td>Video</td>
                <td>Customer story</td>
                <td>Interview video</td>
                <td>☐</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>Instagram</td>
                <td>Post</td>
                <td>Weekend motivation</td>
                <td>Quote graphic</td>
                <td>☐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="calendar-tips">
        <h3>💡 Pro Tips</h3>
        <ul>
          <li>✅ Repurpose content across platforms (1 blog = 10 social posts)</li>
          <li>✅ Use scheduling tools to post at optimal times</li>
          <li>✅ Engage with comments within first hour of posting</li>
          <li>✅ Track which content performs best and do more of it</li>
          <li>✅ Keep a swipe file of content ideas for inspiration</li>
          <li>✅ Batch create content to save time</li>
          <li>✅ Review analytics monthly and adjust strategy</li>
        </ul>
      </div>
    `
  },
  "hashtag-guide": {
    title: "Hashtag Research Guide 2025",
    icon: "#️⃣",
    description: "Find the perfect hashtags to boost your reach",
    type: "PDF",
    content: `
      <div class="guide-intro">
        <h2>#️⃣ The Ultimate Hashtag Research Guide</h2>
        <p>Hashtags are still one of the most powerful tools to get discovered on social media. Here's how to use them effectively in 2025.</p>
      </div>

      <div class="hashtag-basics">
        <h3>Why Hashtags Still Matter</h3>
        <ul>
          <li>📈 Increase post reach by up to 12.6%</li>
          <li>🎯 Help you reach your target audience</li>
          <li>🔍 Make your content discoverable</li>
          <li>📊 Provide insights into trending topics</li>
        </ul>
      </div>

      <div class="platform-strategies">
        <h3>Hashtag Strategy by Platform</h3>
        
        <div class="platform-section">
          <h4>Instagram (7-9 hashtags)</h4>
          <p><strong>Strategy:</strong> Mix of small, medium, and large hashtags</p>
          <ul>
            <li><strong>Small (10K-50K posts):</strong> 2-3 hashtags - Easier to rank</li>
            <li><strong>Medium (50K-500K posts):</strong> 3-4 hashtags - Sweet spot</li>
            <li><strong>Large (500K-1M posts):</strong> 2-3 hashtags - Bonus reach</li>
          </ul>
          <p><strong>Example for Fitness Coach:</strong></p>
          <pre>#fitnesstips (Large - 800K)
#homeworkoutideas (Medium - 250K)
#fitmomlife (Medium - 180K)
#postpartumfitness (Small - 45K)
#functionaltraining (Medium - 320K)
#strengthtrainingforwomen (Small - 28K)
#fitover30 (Small - 35K)</pre>
        </div>

        <div class="platform-section">
          <h4>Twitter/X (1-2 hashtags)</h4>
          <p><strong>Strategy:</strong> Use trending hashtags + 1 niche hashtag</p>
          <ul>
            <li>Check Twitter Trends for what's popular</li>
            <li>One broad hashtag (#marketing)</li>
            <li>One specific hashtag (#B2Bmarketing)</li>
          </ul>
        </div>

        <div class="platform-section">
          <h4>LinkedIn (3-5 hashtags)</h4>
          <p><strong>Strategy:</strong> Professional, industry-specific hashtags</p>
          <ul>
            <li>Use LinkedIn's suggested hashtags</li>
            <li>Mix of broad and niche professional terms</li>
            <li>Example: #DigitalMarketing #B2B #SaaS #ContentStrategy</li>
          </ul>
        </div>

        <div class="platform-section">
          <h4>TikTok (3-5 hashtags)</h4>
          <p><strong>Strategy:</strong> Trending + niche hashtags</p>
          <ul>
            <li>Always check "Discover" page for trends</li>
            <li>Use #FYP (For You Page) or #ForYou</li>
            <li>Add 2-3 niche hashtags</li>
            <li>Include location if relevant</li>
          </ul>
        </div>
      </div>

      <div class="research-process">
        <h3>How to Research Hashtags (Step-by-Step)</h3>
        
        <h4>Step 1: Identify Your Niche Keywords</h4>
        <p>List 10-15 words that describe your business/content:</p>
        <p><strong>Example (Coffee Shop):</strong> coffee, cafe, espresso, latte, coffeelover, coffeetime, barista, specialtycoffee</p>

        <h4>Step 2: Use Hashtag Research Tools</h4>
        <ul>
          <li><strong>Hashtag</strong>ify.me - Free hashtag analytics</li>
          <li><strong>Display Purposes</strong> - Generates related hashtags</li>
          <li><strong>RiteTag</strong> - Real-time hashtag suggestions</li>
          <li><strong>All Hashtag</strong> - Generates hashtag sets</li>
          <li><strong>Instagram Search</strong> - Type # in search to see post counts</li>
        </ul>

        <h4>Step 3: Analyze Competitors</h4>
        <ol>
          <li>Find 5 successful competitors</li>
          <li>Look at their most popular posts</li>
          <li>Note which hashtags they use consistently</li>
          <li>Save the ones with good engagement</li>
        </ol>

        <h4>Step 4: Check Hashtag Performance</h4>
        <p>For each hashtag, evaluate:</p>
        <ul>
          <li>✅ <strong>Post count:</strong> Is it too saturated? (avoid 5M+)</li>
          <li>✅ <strong>Relevance:</strong> Does it match your content?</li>
          <li>✅ <strong>Engagement:</strong> Are top posts getting good engagement?</li>
          <li>✅ <strong>Recent activity:</strong> Is it actively used or dead?</li>
        </ul>

        <h4>Step 5: Create Hashtag Sets</h4>
        <p>Organize hashtags into themed groups for easy copying:</p>
        <ul>
          <li><strong>Set 1:</strong> Product-focused</li>
          <li><strong>Set 2:</strong> Lifestyle-focused</li>
          <li><strong>Set 3:</strong> Educational content</li>
          <li><strong>Set 4:</strong> Behind-the-scenes</li>
          <li><strong>Set 5:</strong> Community/engagement</li>
        </ul>
      </div>

      <div class="hashtag-formulas">
        <h3>Winning Hashtag Formulas</h3>
        
        <div class="formula-box-resource">
          <h4>Formula #1: The Pyramid</h4>
          <p>2 large (500K+) + 4 medium (50K-500K) + 3 small (10K-50K)</p>
          <p><strong>Why it works:</strong> Balances reach and rankability</p>
        </div>

        <div class="formula-box-resource">
          <h4>Formula #2: The Niche Focus</h4>
          <p>1 large + 2 medium + 6 small niche hashtags</p>
          <p><strong>Why it works:</strong> Targets very specific audience</p>
        </div>

        <div class="formula-box-resource">
          <h4>Formula #3: The Trending Mix</h4>
          <p>2 trending + 4 evergreen + 3 branded</p>
          <p><strong>Why it works:</strong> Catches trend waves while building brand</p>
        </div>
      </div>

      <div class="common-mistakes">
        <h3>❌ Hashtag Mistakes to Avoid</h3>
        <ul>
          <li>Using banned hashtags (check Instagram's banned list)</li>
          <li>Using irrelevant hashtags just because they're popular</li>
          <li>Using the same hashtags on every post</li>
          <li>Using too many hashtags (looks spammy)</li>
          <li>Not researching before using</li>
          <li>Forgetting to create a branded hashtag</li>
        </ul>
      </div>

      <div class="hashtag-tracker">
        <h3>Track Your Hashtag Performance</h3>
        <p>Create a simple spreadsheet:</p>
        <table class="tracker-table">
          <thead>
            <tr>
              <th>Hashtag</th>
              <th>Size</th>
              <th>Posts Used In</th>
              <th>Avg Reach</th>
              <th>Avg Engagement</th>
              <th>Keep/Drop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#digitalmarketing</td>
              <td>Large</td>
              <td>10</td>
              <td>2,500</td>
              <td>8%</td>
              <td>✅ Keep</td>
            </tr>
            <tr>
              <td>#marketingtips</td>
              <td>Medium</td>
              <td>15</td>
              <td>1,800</td>
              <td>12%</td>
              <td>✅ Keep</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Review monthly:</strong> Drop hashtags with low engagement, test new ones</p>
      </div>

      <div class="pro-tips-section">
        <h3>💡 Pro Tips</h3>
        <ul>
          <li>🔥 Create a branded hashtag for your business (#YourBrandName)</li>
          <li>🔥 Save your hashtag sets in your phone's notes for quick copying</li>
          <li>🔥 Rotate hashtags - don't use exact same set every time</li>
          <li>🔥 Add hashtags in first comment (cleaner look)</li>
          <li>🔥 Use location hashtags for local businesses</li>
          <li>🔥 Engage with posts under your target hashtags</li>
          <li>🔥 Update your hashtag strategy every 3 months</li>
        </ul>
      </div>
    `
  },
  "analytics-dashboard": {
    title: "Analytics Dashboard Template",
    icon: "📊",
    description: "Track all your marketing metrics in one place",
    type: "Excel",
    content: `
      <div class="dashboard-intro">
        <h2>📊 Marketing Analytics Dashboard</h2>
        <p>Track, measure, and optimize your marketing performance with this comprehensive dashboard template.</p>
      </div>

      <div class="dashboard-overview">
        <h3>What's Included in This Dashboard</h3>
        <div class="dashboard-modules">
          <div class="module-card">
            <h4>📈 Traffic Analytics</h4>
            <ul>
              <li>Total website visitors</li>
              <li>Traffic sources breakdown</li>
              <li>Top landing pages</li>
              <li>Bounce rate</li>
              <li>Average session duration</li>
            </ul>
          </div>
          <div class="module-card">
            <h4>🎯 Conversion Metrics</h4>
            <ul>
              <li>Conversion rate by channel</li>
              <li>Cost per lead (CPL)</li>
              <li>Cost per acquisition (CPA)</li>
              <li>Lead-to-customer rate</li>
              <li>Revenue by source</li>
            </ul>
          </div>
          <div class="module-card">
            <h4>📱 Social Media KPIs</h4>
            <ul>
              <li>Follower growth</li>
              <li>Engagement rate</li>
              <li>Reach and impressions</li>
              <li>Click-through rate</li>
              <li>Top performing posts</li>
            </ul>
          </div>
          <div class="module-card">
            <h4>💰 ROI Tracking</h4>
            <ul>
              <li>Marketing spend</li>
              <li>Revenue generated</li>
              <li>ROI by channel</li>
              <li>Customer lifetime value</li>
              <li>Payback period</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="metrics-guide">
        <h3>Essential Marketing Metrics to Track</h3>
        
        <div class="metric-section">
          <h4>Website Analytics</h4>
          <table class="metrics-table-resource">
            <thead>
              <tr>
                <th>Metric</th>
                <th>What It Means</th>
                <th>Good Benchmark</th>
                <th>Where to Find It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Organic Traffic</strong></td>
                <td>Visitors from search engines</td>
                <td>Growing 10-20% MoM</td>
                <td>Google Analytics</td>
              </tr>
              <tr>
                <td><strong>Bounce Rate</strong></td>
                <td>% who leave after 1 page</td>
                <td>40-60% (lower is better)</td>
                <td>Google Analytics</td>
              </tr>
              <tr>
                <td><strong>Avg Session Duration</strong></td>
                <td>Time spent on site</td>
                <td>2-3 minutes</td>
                <td>Google Analytics</td>
              </tr>
              <tr>
                <td><strong>Pages per Session</strong></td>
                <td>Pages viewed per visit</td>
                <td>2-4 pages</td>
                <td>Google Analytics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="metric-section">
          <h4>Conversion Metrics</h4>
          <table class="metrics-table-resource">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Formula</th>
                <th>Good Benchmark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Conversion Rate</strong></td>
                <td>(Conversions ÷ Visitors) × 100</td>
                <td>2-5% (varies by industry)</td>
              </tr>
              <tr>
                <td><strong>Cost Per Lead</strong></td>
                <td>Total Ad Spend ÷ Leads Generated</td>
                <td>$20-$100 (B2B: higher)</td>
              </tr>
              <tr>
                <td><strong>Lead-to-Customer Rate</strong></td>
                <td>(Customers ÷ Leads) × 100</td>
                <td>5-20%</td>
              </tr>
              <tr>
                <td><strong>Customer Acquisition Cost</strong></td>
                <td>Total Marketing + Sales Cost ÷ New Customers</td>
                <td>Should be < 1/3 of LTV</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="metric-section">
          <h4>Social Media Metrics</h4>
          <table class="metrics-table-resource">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Formula</th>
                <th>Good Benchmark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Engagement Rate</strong></td>
                <td>(Likes + Comments + Shares ÷ Followers) × 100</td>
                <td>1-5% is good, 5%+ is excellent</td>
              </tr>
              <tr>
                <td><strong>Reach</strong></td>
                <td>Unique users who saw post</td>
                <td>10-30% of followers</td>
              </tr>
              <tr>
                <td><strong>Click-Through Rate</strong></td>
                <td>(Clicks ÷ Impressions) × 100</td>
                <td>1-3%</td>
              </tr>
              <tr>
                <td><strong>Follower Growth Rate</strong></td>
                <td>((New Followers - Unfollows) ÷ Total Followers) × 100</td>
                <td>2-5% monthly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="dashboard-setup">
        <h3>How to Set Up Your Dashboard</h3>
        <ol>
          <li><strong>Connect Data Sources</strong>
            <ul>
              <li>Google Analytics (website data)</li>
              <li>Google Ads (paid advertising)</li>
              <li>Facebook/Instagram Insights</li>
              <li>LinkedIn Analytics</li>
              <li>Email marketing platform (Mailchimp, etc.)</li>
            </ul>
          </li>
          <li><strong>Choose Your KPIs</strong>
            <ul>
              <li>Select 5-10 key metrics that matter to your business</li>
              <li>Align with business goals (traffic, leads, sales)</li>
            </ul>
          </li>
          <li><strong>Set Benchmarks</strong>
            <ul>
              <li>Use industry averages as starting point</li>
              <li>Set realistic monthly goals</li>
              <li>Track month-over-month growth</li>
            </ul>
          </li>
          <li><strong>Automate Data Collection</strong>
            <ul>
              <li>Use Google Data Studio (free)</li>
              <li>Or paid tools: Databox, Klipfolio, Cyfe</li>
              <li>Update weekly or monthly</li>
            </ul>
          </li>
        </ol>
      </div>

      <div class="reporting-template">
        <h3>Monthly Marketing Report Template</h3>
        <div class="report-structure">
          <h4>Executive Summary</h4>
          <ul>
            <li>Overall performance this month (traffic, leads, revenue)</li>
            <li>Top 3 wins</li>
            <li>Top 3 areas for improvement</li>
          </ul>

          <h4>Website Performance</h4>
          <ul>
            <li>Total visitors: [Number] ([+/- %] vs last month)</li>
            <li>Organic traffic: [Number] ([+/- %])</li>
            <li>Top traffic sources: [List]</li>
            <li>Bounce rate: [%]</li>
            <li>Avg session duration: [Time]</li>
          </ul>

          <h4>Conversion Performance</h4>
          <ul>
            <li>Total conversions: [Number]</li>
            <li>Conversion rate: [%]</li>
            <li>Cost per lead: $[Amount]</li>
            <li>Revenue generated: $[Amount]</li>
            <li>ROI: [%]</li>
          </ul>

          <h4>Social Media Performance</h4>
          <ul>
            <li>Total followers: [Number] ([+/- %])</li>
            <li>Engagement rate: [%]</li>
            <li>Total reach: [Number]</li>
            <li>Top performing post: [Description]</li>
          </ul>

          <h4>Next Month's Strategy</h4>
          <ul>
            <li>Goals for next month</li>
            <li>Planned campaigns</li>
            <li>Budget allocation</li>
          </ul>
        </div>
      </div>

      <div class="visualization-tips">
        <h3>📊 Data Visualization Tips</h3>
        <ul>
          <li>✅ Use line charts for trends over time</li>
          <li>✅ Use pie charts for percentage breakdowns</li>
          <li>✅ Use bar charts for comparisons</li>
          <li>✅ Color code: Green (good), Yellow (warning), Red (action needed)</li>
          <li>✅ Keep it simple - don't overcrowd with data</li>
          <li>✅ Update regularly (weekly for campaigns, monthly for overall)</li>
        </ul>
      </div>

      <div class="action-checklist">
        <h3>🎯 Monthly Dashboard Review Checklist</h3>
        <label class="checklist-item">
          <input type="checkbox"> Review all metrics vs last month
        </label>
        <label class="checklist-item">
          <input type="checkbox"> Identify top 3 performing channels
        </label>
        <label class="checklist-item">
          <input type="checkbox"> Identify underperforming areas
        </label>
        <label class="checklist-item">
          <input type="checkbox"> Calculate ROI for each channel
        </label>
        <label class="checklist-item">
          <input type="checkbox"> Update goals for next month
        </label>
        <label class="checklist-item">
          <input type="checkbox"> Share report with team
        </label>
        <label class="checklist-item">
          <input type="checkbox"> Schedule strategy adjustment meeting
        </label>
      </div>
    `
  }
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    alert("Please login to access resources");
    window.location.href = "login.html";
    return;
  }

  // Get resource ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const resourceId = urlParams.get('id');

  if (!resourceId || !resources[resourceId]) {
    alert("Resource not found");
    window.location.href = "learn.html";
    return;
  }

  loadResource(resourceId);

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

function loadResource(resourceId) {
  const resource = resources[resourceId];

  // Set resource data
  document.getElementById("resourceIcon").textContent = resource.icon;
  document.getElementById("resourceTitle").textContent = resource.title;
  document.getElementById("resourceDescription").textContent = resource.description;
  document.getElementById("resourceContent").innerHTML = resource.content;

  // Set page title
  document.title = resource.title + " | OPTI-RANK";

  // Track checklist progress if it's the SEO checklist
  if (resourceId === 'seo-checklist') {
    trackChecklistProgress();
  }
}

function trackChecklistProgress() {
  const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  const progressText = document.getElementById('checklistProgress');
  const progressBar = document.getElementById('progressBar');

  function updateProgress() {
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentage = Math.round((checked / total) * 100);
    
    if (progressText) progressText.textContent = percentage + '%';
    if (progressBar) progressBar.style.width = percentage + '%';
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
  });
}

function downloadResource() {
  const resourceTitle = document.getElementById("resourceTitle").textContent;
  alert(`📥 Downloading: ${resourceTitle}\n\nIn a production environment, this would generate and download a PDF/Excel file with all this content.\n\nFor now, you can print this page (Ctrl+P) or copy the content!`);
}
