# Vibe Otter Lite

**The open-source hybrid AI + drag-and-drop website builder**

Vibe Otter Lite combines conversational AI with visual editing to create a revolutionary website building experience. Unlike traditional website builders (Wix, WordPress, Squarespace, Webflow), you can build professional websites by simply describing what you want, then refine with drag-and-drop editing.

---

## 🚀 What Makes This Different

**Traditional Website Builders** (Wix, Squarespace, WordPress, Webflow):
- ❌ Steep learning curve - hours watching tutorials
- ❌ Template limitations - never quite what you need
- ❌ Time-consuming - dragging every element manually
- ❌ Analysis paralysis - thousands of options to choose from

**Pure AI Builders**:
- ❌ Hard to make precise visual tweaks
- ❌ Requires describing exact pixel positions
- ❌ No direct visual control

**Vibe Otter Lite - Best of Both Worlds**:
- ✅ **Start with conversation** - "Create a landing page for my coffee shop"
- ✅ **Refine visually** - Drag, drop, resize with GrapeJS
- ✅ **Iterate naturally** - Mix AI and visual editing freely
- ✅ **No learning curve** - Natural language + intuitive visuals

---

## 🎯 Perfect For

### Small Business Owners
Build your small business website in minutes, not days. No technical skills required. Just describe your business and what you need.

### Freelance Web Designers
Rapidly prototype client websites with AI, then refine visually. 10x faster than traditional builders.

### Marketing Agencies
Create landing pages and marketing sites for clients at unprecedented speed.

### Ecommerce Entrepreneurs
Connect your existing Shopify store in one click and build a custom storefront (see Shopify integration below).

### Developers
Open-source foundation to build your own AI-powered website builder or integrate into existing products.

---

## 🌟 Key Features

### 1. Conversational AI Website Builder

Powered by **Claude 4.5 Sonnet**, the most advanced AI model available:

```
You: "Create a hero section for a yoga studio"
AI: *generates professional HTML/CSS*
You: "Make the headline bigger and add a call-to-action button"
AI: *updates instantly*
```

No templates. No constraints. Just describe what you want in plain English.


### 2. Hybrid AI + Drag-and-Drop

**Unique to Vibe Otter**: Seamlessly blend conversational AI with visual editing.

- Generate entire sections with AI
- Fine-tune spacing, colors, fonts with drag-and-drop
- Add more content conversationally
- Rearrange visually
- Export clean HTML/CSS code

Built on **GrapeJS**, the industry-standard open-source visual editor.

### 3. Shopify Storefront Integration

**This is HUGE**: Vibe Otter is the **ONLY website builder** (AI or traditional) that lets you connect an existing Shopify store with **literally one click** (flagship capability).

#### The Problem with Other Builders

- **Wix + Shopify**: Requires Wix's ecommerce plan + manual product imports + duplicate inventory management
- **WordPress + Shopify**: Requires WooCommerce or third-party plugins + complex API setup + ongoing sync issues
- **Squarespace + Shopify**: Not supported - you must choose one or the other
- **Webflow + Shopify**: Requires Zapier/Make.com + custom code + expensive integrations
- **Other AI builders**: Don't support Shopify at all

#### The Vibe Otter Approach

1. Enter your Shopify store URL
2. That's it. Literally.

All your products, collections, variants, and inventory are instantly available. No imports, no syncing, no duplicate management.

**How it works**:
- Uses Shopify's **Storefront API 2025-10** (tokenless)
- Direct GraphQL queries from client-side
- Real-time inventory and pricing
- Official Shopify checkout
- Works with ANY Shopify store

See `/3-shopify-integration` for the architecture overview.

#### Why This Matters for Small Business

If you already have a Shopify store, you can:
- Build a custom website that's NOT limited by Shopify themes
- Keep your existing Shopify admin and fulfillment workflow
- Display products however you want
- Create content-rich pages (blogs, landing pages) mixed with ecommerce
- No vendor lock-in - you control the website code

This is a **game-changer for small business ecommerce**.

### 4. Reusable Components

Extract any component from the codebase:

- **Otter Lite Bar** - Branded chat interface with file upload
- Drag-and-drop to any website
- Customize placeholders and callbacks
- Mobile-optimized with fullscreen modal

See `/components/otter-input-bar` for standalone component.

---

## 📦 What's Included

### `/1-basic-agent` - Simple AI Website Builder

Learn the fundamentals:
- Express + Socket.io server
- Claude AI integration
- Real-time WebSocket updates
- State handling basics
- Live preview

Perfect starting point for understanding conversational website generation.

### `/2-grapejs-hybrid` - The Magic Hybrid Editor

The killer feature:
- AI generation + visual editing in one interface
- GrapeJS integration
- Component-based architecture
- Export clean code
- Real-time synchronization

**This is what makes Vibe Otter unique.**

### `/3-shopify-integration` - Ecommerce Made Easy

Complete Shopify integration:
- Tokenless Storefront API tutorial
- GraphQL query examples
- Client-side cart implementation
- Checkout creation
- Working example

**The ONLY builder with one-click Shopify connection.**

### `/components/otter-input-bar` - Reusable UI Component

Production-ready component:
- Animated otter assistant
- Typewriter placeholder effect
- File attachment support
- Mobile fullscreen modal
- Customizable and brandable

---

## 🚀 Quick Start

### Basic AI Builder

```bash
cd 1-basic-agent
npm install
export ANTHROPIC_API_KEY="your-key-here"
npm start
```

Open http://localhost:3000

### Hybrid Visual Editor

```bash
cd 2-grapejs-hybrid
npm install
export ANTHROPIC_API_KEY="your-key-here"
npm start
```

Open http://localhost:3001

### Shopify Integration

```bash
cd 3-shopify-integration
open cart-example.html
# Enter your Shopify domain (e.g., your-store.myshopify.com)
```

---

## 🏢 Hosted Platform: vibeotter.com

Vibe Otter Lite lets you run the hybrid builder locally and extend it however you like.

If you prefer a fully managed experience with production hosting, visit **[vibeotter.com](https://vibeotter.com)**.

### What the Hosted Platform Adds

**Advanced AI System**:
- Multi-agent orchestration (specialized agents for different tasks)
- Sophisticated prompt engineering (years of refinement)
- Intelligent request categorization
- Context-aware editing
- Natural conversation flow

**Fully Managed Hosting**:
- Custom domain deployment (yoursite.com)
- Automatic SSL certificates
- CDN-backed performance
- Zero DevOps required
- Professional web design firm infrastructure

**Complete Shopify Integration**:
- One-click store connection (just enter URL)
- AI generates product pages automatically
- Smart collection layouts
- Variant handling (size, color, etc.)
- Optimized cart and checkout flow
- Conversion-focused design

**Business Features**:
- Form handling with email delivery
- Analytics and optimization tools
- Image optimization
- Version history and undo
- Mobile-responsive preview
- Template library

**Vertically Integrated Web Design**:
Unlike Wix, WordPress, or Squarespace where you're on your own, Vibe Otter operates as a **vertically integrated AI web design firm**. We don't just provide tools - we provide infrastructure, hosting, and the AI expertise to build professional websites.

Think of it as having a web design agency on-demand, powered by AI.

---

## 🎓 Educational Use Cases

This open-source repository is perfect for:

### Learning AI Integration
- See how to integrate Claude AI into web apps
- Real-world prompt engineering examples
- WebSocket real-time communication patterns
- State handling patterns

### Building SaaS Products
- Use as foundation for your own AI builder
- Integrate into existing CMS or website platform
- White-label for clients
- Extend with custom features

### Teaching Web Development
- Modern full-stack architecture
- Real-time web applications
- API integration patterns
- Visual editor integration

### Shopify Development
- Learn Storefront API 2025-10
- GraphQL query patterns
- Client-side cart management
- Headless commerce architecture

---

## 🆚 Comparison to Competitors

| Feature | Vibe Otter Lite | Wix | WordPress | Squarespace | Webflow | Other AI Builders |
|---------|----------------|-----|-----------|-------------|---------|-------------------|
| **AI Generation** | ✅ Claude 4.5 | ❌ | ❌ | ❌ | ❌ | ✅ (varies) |
| **Visual Editing** | ✅ GrapeJS | ✅ | ✅ (Gutenberg) | ✅ | ✅ | ❌ |
| **Hybrid AI + Visual** | ✅ Unique | ❌ | ❌ | ❌ | ❌ | ❌ |
| **No Learning Curve** | ✅ Natural language | ❌ Hours of tutorials | ❌ Steep | ❌ Moderate | ❌ Very steep | ✅ |
| **One-Click Shopify** | ✅ **Only one** | ❌ Complex | ❌ Plugins | ❌ Not supported | ❌ Custom code | ❌ |
| **Shopify Integration** | ✅ Native GraphQL | ⚠️ Buy Button only | ⚠️ WooCommerce conflict | ❌ | ⚠️ Complex | ❌ |
| **Open Source Core** | ✅ MIT License | ❌ | ⚠️ GPL (complex) | ❌ | ❌ | ❌ |
| **Export Clean Code** | ✅ HTML/CSS/JS | ⚠️ Locked in | ⚠️ Messy | ⚠️ Locked in | ✅ | ❌ |
| **Small Business Friendly** | ✅ Dead simple | ⚠️ Complex pricing | ⚠️ Technical | ⚠️ Limited | ❌ Expensive | ⚠️ Basic |
| **Real-Time Preview** | ✅ WebSocket | ✅ | ⚠️ Slow | ✅ | ✅ | ⚠️ |

---

## 💡 Use Cases

### "I have a Shopify store but hate the themes"

**Perfect**. Connect your store with one click, then build a completely custom website around your products. Keep using Shopify for fulfillment and inventory - just make the customer-facing site beautiful.

Example: "Create a minimal landing page showcasing my 5 best-selling products with a hero video"

### "I'm a small business owner who needs a website fast"

**Ideal**. Describe your business in a sentence, AI generates a professional site in 30 seconds, then you drag-and-drop to tweak colors and spacing. Done in 10 minutes.

Example: "I run a local yoga studio and need a website with class schedule, pricing, and contact form"

### "I'm a web designer tired of repetitive client work"

**Game-changer**. Use AI to generate initial layouts from client descriptions, then refine visually. Cut project time by 60%, take on more clients, increase revenue.

Example: "My client wants a law firm website, conservative design, 5 practice areas"

### "I want to learn how AI-powered apps work"

**Educational gold**. Complete working examples of:
- Claude AI integration
- Real-time WebSocket communication
- Visual editor (GrapeJS) integration
- Shopify API usage
- Modern full-stack architecture

---

## 🛠️ Technical Stack

- **Backend**: Node.js + Express
- **Real-time**: Socket.io
- **AI**: Anthropic Claude 4.5 Sonnet
- **Visual Editor**: GrapeJS
- **Ecommerce**: Shopify Storefront API 2025-10
- **Frontend**: Vanilla JavaScript (no framework bloat)
- **Storage**: File-based cache (easily adaptable to PostgreSQL, MongoDB, etc.)

Simple, modern, extensible.

---

## Blog

We publish long-form breakdowns for every niche we touch. Each preview below links directly to the live article, includes its hero image, and gives you enough context to decide which guide to swipe next.

### [5 Examples Showcasing the Top 5 AI Website Builders](https://vibeotter.com/blog/ai-website-builder-examples.html)

![5 Examples Showcasing the Top 5 AI Website Builders preview](https://vibeotter.com/images/blog/VibeOtter2.png)

We tested 5 top AI website builders with the same prompt. See real examples from Vibe Otter, Wix, Squarespace, Framer, and Lovable - and why only one created a commercially viable website.

Skim the layouts, swipe the messaging formulas, and plug the showcased sections straight into your next Vibe Otter build.

### [Best Website Builder for Construction Companies: 2025 Review](https://vibeotter.com/blog/best-website-builder-construction.html)

![Best Website Builder for Construction Companies: 2025 Review preview](https://vibeotter.com/images/blog/construction-website-builder.jpg)

Find the best website builder for construction companies. Compare features, pricing, and templates specifically designed for contractors and builders.

Skim the layouts, swipe the messaging formulas, and plug the showcased sections straight into your next Vibe Otter build.

### [Best Website Builder with Hosting for Small Business 2025 | Vibe Otter Blog](https://vibeotter.com/blog/best-website-builder-hosting-small-business.html)

![Best Website Builder with Hosting for Small Business 2025 | Vibe Otter Blog preview](https://vibeotter.com/images/logo-small.png)

Find the best website builder with hosting for small businesses. Compare all-in-one platforms that include hosting, domain, and support in one package.

Skim the layouts, swipe the messaging formulas, and plug the showcased sections straight into your next Vibe Otter build.

### [The 8 best daycare website examples on the web (2025)](https://vibeotter.com/blog/daycare-website-examples.html)

![The 8 best daycare website examples on the web (2025) preview](https://vibeotter.com/images/blog/evergreen.png)

Discover the 8 best daycare and childcare website examples with real analysis. Learn what makes a daycare website convert parents into enrolled families.

Skim the layouts, swipe the messaging formulas, and plug the showcased sections straight into your next Vibe Otter build.

### [Building A Website Is So Easy, Your Dog Can Do It](https://vibeotter.com/blog/dog-can-build-website.html)

![Building A Website Is So Easy, Your Dog Can Do It preview](https://vibeotter.com/images/blog/bernese-mountain-dog-hero.jpg)

Discover how easy it is to build a professional website with Vibe Otter. Our AI-powered builder is so intuitive, even our puppy could do it! Learn best practices, prompting tips, and how to get your site online.

Expect actionable takeaways, screenshots, and prompt templates you can adapt immediately inside Vibe Otter.

### [The Freelancer's Guide to Building a Portfolio That Gets Clients](https://vibeotter.com/blog/freelancer-portfolio-guide.html)

![The Freelancer's Guide to Building a Portfolio That Gets Clients preview](https://vibeotter.com/images/blog/freelancer-portfolio.jpg)

Discover how to build a freelancer portfolio that converts visitors into paying clients. Essential guide for creating a professional portfolio website with Vibe Otter.

Follow the in-depth playbook for frameworks, pricing tables, and prompt ideas that translate directly into deployable pages.

### [The 8 best hair salon website examples on the web (2025)](https://vibeotter.com/blog/hair-salon-websites-best-practices.html)

![The 8 best hair salon website examples on the web (2025) preview](https://vibeotter.com/images/blog/openhair.png)

Discover the best practices for creating hair salon websites with 8 real examples. Learn what makes a salon website convert visitors into clients.

Skim the layouts, swipe the messaging formulas, meet our favorite [best hairstylist in Hendreson, NV](https://parizsalon.com), and plug the showcased sections straight into your next Vibe Otter build.

### [How to Start a Business in California: Complete 2025 Guide | Vibe Otter Blog](https://vibeotter.com/blog/how-to-start-business-california.html)

![How to Start a Business in California: Complete 2025 Guide | Vibe Otter Blog preview](https://vibeotter.com/images/logo-small.png)

Complete guide to starting a business in California. Navigate state requirements, licensing, taxes, and regulations in the Golden State.

Use it as a launch checklist with licensing requirements, pricing math, and AI-built site sections you can copy verbatim.

### [How to Start a Business in Florida: Complete 2025 Guide | Vibe Otter Blog](https://vibeotter.com/blog/how-to-start-business-florida.html)

![How to Start a Business in Florida: Complete 2025 Guide | Vibe Otter Blog preview](https://vibeotter.com/images/logo-small.png)

Complete guide to starting a business in Florida. Learn about business registration, licensing, taxes, and regulations in the Sunshine State.

Use it as a launch checklist with licensing requirements, pricing math, and AI-built site sections you can copy verbatim.

### [How to Start a Business in Texas: Complete 2025 Guide](https://vibeotter.com/blog/how-to-start-business-texas.html)

![How to Start a Business in Texas: Complete 2025 Guide preview](https://vibeotter.com/images/blog/texas-business.jpg)

Complete guide to starting a business in Texas. Learn about business registration, licensing, taxes, and regulations specific to the Lone Star State.

Use it as a launch checklist with licensing requirements, pricing math, and AI-built site sections you can copy verbatim.

### [How to Start a Business with No Money: 10 Proven Strategies](https://vibeotter.com/blog/how-to-start-business-with-no-money.html)

![How to Start a Business with No Money: 10 Proven Strategies preview](https://vibeotter.com/images/blog/no-money-business.jpg)

Learn how to start a business with no money using creative bootstrapping strategies, free resources, and minimal capital approaches that actually work.

Use it as a launch checklist with licensing requirements, pricing math, and AI-built site sections you can copy verbatim.

### [How to Start a Cleaning Business: Complete Step-by-Step Guide](https://vibeotter.com/blog/how-to-start-cleaning-business.html)

![How to Start a Cleaning Business: Complete Step-by-Step Guide preview](https://vibeotter.com/images/blog/cleaning-business.jpg)

Complete guide to starting a profitable cleaning business. Learn about equipment, pricing, insurance, marketing, and growing your cleaning service company.

Use it as a launch checklist with licensing requirements, pricing math, and AI-built site sections you can copy verbatim.

### [How to Start a Consulting Business: Complete Step-by-Step Guide](https://vibeotter.com/blog/how-to-start-consulting-business.html)

![How to Start a Consulting Business: Complete Step-by-Step Guide preview](https://vibeotter.com/images/blog/consulting-business.jpg)

Complete step-by-step guide to starting a successful consulting business. Learn how to identify your expertise, set pricing, find clients, and build a professional website.

Use it as a launch checklist with licensing requirements, pricing math, and AI-built site sections you can copy verbatim.

### [How to Start a Handyman Business: Complete Step-by-Step Guide](https://vibeotter.com/blog/how-to-start-handyman-business.html)

![How to Start a Handyman Business: Complete Step-by-Step Guide preview](https://vibeotter.com/images/blog/handyman-business.jpg)

Complete guide to starting a handyman business. Learn about licensing, tools, pricing, marketing, and growing your home repair and maintenance service.

Use it as a launch checklist with licensing requirements, pricing math, and AI-built site sections you can copy verbatim.

### [How to Start a Photography Business: Complete 2025 Guide](https://vibeotter.com/blog/how-to-start-photography-business.html)

![How to Start a Photography Business: Complete 2025 Guide preview](https://vibeotter.com/images/blog/photography-business.jpg)

Complete guide to starting a profitable photography business. Learn about equipment, pricing, marketing, legal requirements, and building your client base.

Use it as a launch checklist with licensing requirements, pricing math, and AI-built site sections you can copy verbatim.

### [How to Start a Vending Machine Business: Complete Guide | Vibe Otter Blog](https://vibeotter.com/blog/how-to-start-vending-machine-business.html)

![How to Start a Vending Machine Business: Complete Guide | Vibe Otter Blog preview](https://vibeotter.com/images/logo-small.png)

Complete guide to starting a vending machine business. Learn about location scouting, machine types, inventory management, and maximizing profits.

Use it as a launch checklist with licensing requirements, pricing math, and AI-built site sections you can copy verbatim.

### [Why We Admire Isatou Ceesay: The Realtor Who Gives 90% to Charity](https://vibeotter.com/blog/isatou-ceesay-realtor-lynnwood-seattle.html)

![Why We Admire Isatou Ceesay: The Realtor Who Gives 90% to Charity preview](https://vibeotter.com/images/blog/isatou-ceesay.jpeg)

Why we recommend Isatou Ceesay. A realtor who dedicates 90% of her profits to charity, breaks language barriers, and spends years ensuring her clients are truly ready for homeownership.

Expect actionable takeaways, screenshots, and a direct introduction to the [best real estate agent in Lynnwood, WA](https://isatouproperties.com) you can partner with for your own builds.

### [Launch Your Website Before Your Startup Launch](https://vibeotter.com/blog/launch-website-before-startup.html)

![Launch Your Website Before Your Startup Launch preview](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80)

Why every founder should launch their website months before their product. Grokipedia vs. Vibe Otter data shows Google takes 3-6 months to trust new domains, even when Elon Musk is behind them.

Expect actionable takeaways, screenshots, and prompt templates you can adapt immediately inside Vibe Otter.

### [Law Firm Website Design Costs: Complete 2025 Pricing Guide](https://vibeotter.com/blog/law-firm-website-design-costs.html)

![Law Firm Website Design Costs: Complete 2025 Pricing Guide preview](https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80)

Complete guide to law firm website design costs in 2025. From AI DIY options under $500 (30 minutes) to Big Law custom sites over $100,000. Real cost breakdowns for setup and ongoing expenses.

Follow the in-depth playbook for frameworks, pricing tables, and prompt ideas that translate directly into deployable pages.

### [Top 23 Law Firm Website Examples: From Big Law to Small (2025)](https://vibeotter.com/blog/law-firm-website-examples.html)

![Top 23 Law Firm Website Examples: From Big Law to Small (2025) preview](https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80)

Discover the top 23 law firm website examples from Big Law to small practices. Learn what makes effective lawyer websites that convert visitors into clients.

Skim the layouts, swipe the messaging formulas, and plug the showcased sections straight into your next Vibe Otter build.

### [LegalZoom vs ZenBusiness: Complete Comparison for Business Formation](https://vibeotter.com/blog/legalzoom-vs-zenbusiness-comparison.html)

![LegalZoom vs ZenBusiness: Complete Comparison for Business Formation preview](https://vibeotter.com/images/blog/legalzoom-zenbusiness.jpg)

Compare LegalZoom vs ZenBusiness for LLC formation. Detailed analysis of pricing, features, customer service, and which service is better for your business needs.

Expect actionable takeaways, screenshots, and prompt templates you can adapt immediately inside Vibe Otter.

### [The 16 best personal trainer website examples on the web (2025)](https://vibeotter.com/blog/personal-trainer-websites-best-practices.html)

![The 16 best personal trainer website examples on the web (2025) preview](https://vibeotter.com/images/blog/limitlessresults-fitness.com.png)

Discover the best practices for creating personal trainer websites with 16 real examples. Learn what makes a fitness website convert visitors into clients.

Skim the layouts, swipe the messaging formulas, and plug the showcased sections straight into your next Vibe Otter build.

### [How Tony's Pizza Doubled Orders with a Simple Website](https://vibeotter.com/blog/restaurant-website-success.html)

![How Tony's Pizza Doubled Orders with a Simple Website preview](https://vibeotter.com/images/blog/pizza-restaurant.jpg)

Discover how Tony's Pizza doubled their orders in 30 days with a simple website. See how local restaurants can transform their business with AI website builder Vibe Otter.

Expect actionable takeaways, screenshots, and prompt templates you can adapt immediately inside Vibe Otter.

### [SEO Basics: How to Get Your Website Found on Google](https://vibeotter.com/blog/seo-basics-small-business.html)

![SEO Basics: How to Get Your Website Found on Google preview](https://vibeotter.com/images/blog/seo-search.jpg)

Discover essential SEO basics for small business websites. Simple tips to help your website get found on Google and rank higher in search results with Vibe Otter.

Expect actionable takeaways, screenshots, and prompt templates you can adapt immediately inside Vibe Otter.

### [5 Reasons Your Small Business Needs a Website (Not Just Social Media)](https://vibeotter.com/blog/small-business-online-presence.html)

![5 Reasons Your Small Business Needs a Website (Not Just Social Media) preview](https://vibeotter.com/images/blog/small-business.jpg)

Discover 5 essential reasons why your small business needs a professional website beyond social media. Learn the benefits of owning your digital real estate with Vibe Otter.

Expect actionable takeaways, screenshots, and prompt templates you can adapt immediately inside Vibe Otter.

### [Squarespace vs Alternatives: Best Website Builder Comparison 2025 | Vibe Otter Blog](https://vibeotter.com/blog/squarespace-vs-alternatives.html)

![Squarespace vs Alternatives: Best Website Builder Comparison 2025 | Vibe Otter Blog preview](https://vibeotter.com/images/logo-small.png)

Compare Squarespace with top alternatives. Find the best website builder for your needs with our comprehensive comparison of features, pricing, and ease of use.

Skim the layouts, swipe the messaging formulas, and plug the showcased sections straight into your next Vibe Otter build.

### [What is Vibe Coding? How It's Changing Everything About Building Websites](https://vibeotter.com/blog/vibe-coding-revolution.html)

![What is Vibe Coding? How It's Changing Everything About Building Websites preview](https://vibeotter.com/images/blog/vibe-coding.jpg)

Discover Vibe Coding and how it's revolutionizing website creation. Learn how to build a website without traditional coding skills using the best AI website builder - Vibe Otter.

Expect actionable takeaways, screenshots, and prompt templates you can adapt immediately inside Vibe Otter.

### [Website vs. Facebook Page: What Your Business Really Needs](https://vibeotter.com/blog/website-vs-social-media.html)

![Website vs. Facebook Page: What Your Business Really Needs preview](https://vibeotter.com/images/blog/social-media.jpg)

Compare website vs Facebook page for your business. Discover why you need both a professional website and social media presence for maximum business success.

Expect actionable takeaways, screenshots, and prompt templates you can adapt immediately inside Vibe Otter.

### [WordPress Alternatives: Best Website Builders for 2025 | Vibe Otter Blog](https://vibeotter.com/blog/wordpress-alternatives-comparison.html)

![WordPress Alternatives: Best Website Builders for 2025 | Vibe Otter Blog preview](https://vibeotter.com/images/logo-small.png)

Explore WordPress alternatives that are easier to use, more affordable, or better suited for specific business needs. Compare top website builders for 2025.

Skim the layouts, swipe the messaging formulas, and plug the showcased sections straight into your next Vibe Otter build.


## 📚 Learning Resources

### Get Started
1. Clone this repo
2. Start with `/1-basic-agent` to understand AI integration
3. Move to `/2-grapejs-hybrid` to see the hybrid magic
4. Explore `/3-shopify-integration` for ecommerce

### Documentation
Each directory has detailed README with:
- Architecture explanation
- Setup instructions
- Code walkthroughs
- Extension ideas

### Production Platform
Visit [vibeotter.com](https://vibeotter.com) to see the full implementation:
- Advanced multi-agent system
- Custom domain deployment
- Professional hosting infrastructure
- Vertically integrated web design firm

---

## 🌐 Who We Are

**Built by a husband and wife team who think drag-and-drop is insanely stupid in the age of AI.**

We're Nick and Laura Rackley, and we're not your typical AI startup founders. We're a husband-and-wife team running a full-stack [web design agency](https://vibeotter.com/webdesign) - highly unique in an industry dominated by younger solo founders and VC-backed teams. This difference matters because it keeps us laser-focused on what actually helps small businesses, not chasing obscure goals like "eliminating coding" or impressing other developers.

### How Vibe Otter Was Born

We didn't set out to build a product. We built Vibe Otter as proprietary AI to help us serve our web design clients faster. **We started 100% AI-first and AI-only** - no drag-and-drop at all - because we genuinely thought drag-and-drop was completely stupid in the age of AI. Why drag boxes around when AI can just build what you ask for?

But something interesting happened: as Nick built client sites, he'd improve Vibe Otter to handle whatever challenges came up. This created an incredibly tight feedback loop - **real client work → AI improvements → better client work → more AI improvements**.

Through hundreds of real client projects, we discovered the truth: **AI-first with selective drag-and-drop for obvious edits is the perfect hybrid**. AI is phenomenal for building layouts, making complex changes, and maintaining consistency across your site. But for simple stuff like "make this text bold" or "move this photo 2 inches up"? Drag-and-drop is actually faster than describing it to AI.

The result? An AI that actually solves the problems professional web designers face every day, combined with drag-and-drop only where it genuinely makes sense.

Then our clients started asking if they could use Vibe Otter themselves. Some had zero coding skills but wanted to start their own web design agencies. They saw what we were doing and wanted in. That's when we realized we'd accidentally built something far superior to the Wix/WordPress/Squarespace drag-and-drop insanity everyone else was struggling with.

### The Shopify Story: Why We're the Only Builder with 1-Click Integration

Here's another example of how real client work drives our innovation:

One of our fitness trainer clients started her own web design agency using Vibe Otter (zero coding skills, now running a successful agency). She came to us with a problem: **her clients kept asking for Shopify stores, and demand was so high we couldn't meet it**.

So we figured it out. We discovered Shopify's tokenless Storefront API and built a system that lets anyone connect their existing Shopify store with literally one click. No OAuth. No tokens. No complex API setup. Just enter your store domain and you're done.

**Every other builder makes this impossibly complicated:**
- Wix requires their ecommerce plan + manual product imports + duplicate inventory management
- WordPress needs WooCommerce or plugins + complex API setup + constant sync issues
- Squarespace doesn't even support it - you have to choose one or the other
- Webflow requires Zapier + custom code + expensive integrations

**We decided to open source this approach** (see `/3-shopify-integration` in this repo) because we thought it would be incredibly useful to others. This is the kind of thing that happens when you're building for real businesses with real needs, not theoretical use cases.

### Why We're Different

**Because we're an actual web design firm**, Vibe Otter has features you won't find anywhere else:

- **AI-First Hybrid**: We use AI for what it's actually good at - building layouts, making complex changes, maintaining consistency across pages. Drag-and-drop is there only for the obvious stuff like editing text or repositioning images. Best of both worlds, none of the frustration.

- **The "Blank Slate Problem" Solved**: Templates can never be personalized. AI generates exactly what you need from scratch. No more forcing your coffee shop into a template designed for law firms.

- **Intelligent Updates Across Your Site**: Change your color scheme? AI updates buttons, headers, footers, and image overlays across every page. Try doing that on a Divi WordPress editor without wanting to throw your laptop.

- **No More Format Hell**: Ever upload an .mp4 video to WordPress only to discover iPhones can't play it because it was uploaded as .webm? With Vibe Otter's AI, that insanity doesn't happen. It handles the technical details so you can focus on your business.

### Our Mission: Small Business First

We passionately serve **small businesses**, especially people just starting out. We know what it's like when you try Wix, WordPress, or Squarespace and realize it's going to take months to get a professional site. We know the frustration when you look at $5,000+ web design quotes and your budget is $500.

**That's the sweet spot we fill**: Get the website builder you REALLY wanted without spending thousands or giving up in frustration.

And for those who truly want hands-off? Our [web design service](https://vibeotter.com/webdesign) charges just **$350 for design fees** on most sites - made possible because we're experts in our own AI. Many clients then maintain their site themselves via Vibe Otter once we've given them a solid foundation, saving hundreds per month in developer modification fees.

### Helping Others Build Web Design Agencies

Some of our favorite customers are people who use Vibe Otter to start their own web design businesses despite having absolutely no coding skills. We coach them on everything:

- How to get leads
- How to conduct a web design sales call and close clients
- Pricing strategies
- How to deliver professional sites with Vibe Otter
- Building a sustainable agency business

We love this because it proves you don't need to be a developer to build professional websites anymore. The age of AI has fundamentally changed who can succeed in this space.

### Open Source Philosophy

The open-source **Vibe Otter Lite** repository shares the foundational concepts so developers can learn and build. Meanwhile, **[vibeotter.com](https://vibeotter.com)** provides the full production platform with managed hosting, custom domains, and the advanced multi-agent AI system we've refined through years of real client work.

We're not just a tool. We're not just a platform. **We're your AI web design partner**, built by people who've been in the trenches building professional websites for real businesses.

---

**Ready to see what a real web design firm's AI can do?**

- **DIY**: Try [vibeotter.com](https://vibeotter.com) and build your site yourself
- **Done-for-you**: Hire us for [professional web design](https://vibeotter.com/webdesign) starting at $350
- **Learn**: Clone this repo and see how we built the foundation

---

## 🤝 Contributing

This is an educational open-source project. Contributions welcome:

- Improve documentation
- Add examples
- Enhance components
- Share use cases
- Report issues

See individual directories for specific contribution ideas.

---

## 📄 License

Apache License 2.0 - use freely in your projects with patent protection.

### Third-Party Notices

The repository itself is Apache 2.0. It also bundles the GrapeJS editor and preset, whose source is MIT-licensed; see `THIRD_PARTY_NOTICES.md` for that upstream license text.

---

## 🔗 Links

- **Production Platform**: [vibeotter.com](https://vibeotter.com)
- **Documentation**: See individual `/README.md` files in each directory
- **Issues**: GitHub Issues
- **Shopify Storefront API**: [shopify.dev/docs/api/storefront](https://shopify.dev/docs/api/storefront)
- **GrapeJS**: [grapesjs.com](https://grapesjs.com)
- **Anthropic Claude**: [anthropic.com](https://anthropic.com)

---

## 🦦 About the Otter

Why an otter? Otters are:
- **Playful** - Building websites should be fun
- **Intelligent** - Otters use tools creatively
- **Helpful** - They work together to solve problems
- **Adaptable** - Thrive in changing environments

Just like our AI website builder.

---

## 🚀 Start Building

```bash
git clone https://github.com/your-username/vibe-otter-lite.git
cd vibe-otter-lite/1-basic-agent
npm install
export ANTHROPIC_API_KEY="your-key"
npm start
```

Open http://localhost:3000 and describe your first website.

**Welcome to the future of web design.**

---

Built with 🦦 by **Vibe Otter** - The vertically integrated AI web design firm

**Vibe Otter Lite**: Open-source educational foundation
**[vibeotter.com](https://vibeotter.com)**: Full hosted platform with custom domains and advanced AI

---
