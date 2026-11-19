// All site copy lives here. Edit text in this file; no layout code needs to change.
// Rule for this portfolio: only publish numbers that can be explained and defended.

export const site = {
  name: "Chisom Mbagwu",
  role: "Product Manager",
  email: "mimimbagwu01@gmail.com",
  linkedin: "https://www.linkedin.com/in/mchisom",
  medium: "https://medium.com/@mimimbagwu01",
  github: "", // add your GitHub profile URL to show it in the header and footer
  cv: "", // e.g. "/Chisom_Mbagwu_CV.pdf" after you drop the PDF into /public
  description:
    "Chisom Mbagwu is a Product Manager. Case studies, work experience and contact details.",
};

export const hero = {
  badge: "Beyond Tickets & Timelines",
  headline: "Chisom Mbagwu, Product Manager",
  sub: "Real user problems, solved in ways the business can sustain.\nI bring clarity when things are messy, and evidence when opinions run the room, so the team builds what matters.",
};

export const workedOn = {
  label: "Products and programmes I have worked on",
  items: ["Vendstash", "Ajowa", "Digitallie AI", "FindRyd", "Product Leadership Accelerator"],
};

export const about = {
  title: "About",
  body: [
    "I lead discovery, but I involve the team early. I bring engineers, designers and the entire team close to the problem from the start, so they understand who we\u2019re solving for and why. That way we shape the solution together, and the team builds with context, not just instructions.",
    "My background in sociology helps me understand people in their context, not just their complaints. I\u2019m also comfortable on the technical side: I can read API documentation, test endpoints and prototype ideas, which makes conversations with engineers faster and more useful.",
  ],
};

export const caseStudies = [
  {
    slug: "vendstash-business-api",
    chips: ["Business API", "Escrow at checkout", "KYB onboarding"],
    kicker: "Payments, B2B",
    title: "Vendstash: Business API, Catalog and escrow at checkout",
    summary: "Requirements for a Business API that lets marketplaces and online stores offer escrow at checkout.",
    meta: [
      { label: "Product", value: "Vendstash" },
      { label: "My role", value: "Product Manager" },
      { label: "Focus", value: "Business API onboarding, payments and escrow rules" },
    ],
    link: { label: "Visit Vendstash", href: "https://vendstash.com" },
    beats: [
      {
        label: "Context",
        body: [
          "Vendstash holds a buyer's money in escrow until the vendor delivers. Used through the website, it only reaches sellers who send buyers a link.",
          "The larger opportunity sits with businesses that already have the buyers: marketplaces, online stores and platforms that want to offer escrow inside their own checkout. In that model the vendor pays nothing and the buyer pays the fee at checkout.",
        ],
      },
      {
        label: "Problem",
        body: [
          "Growth through the website depends on onboarding vendors one by one. To reach buyers at checkout, the Business API had to let businesses add escrow without us setting each one up by hand. That created two product problems.",
        ],
        bullets: [
          { t: "Joining without manual onboarding.", d: "Trust is the whole point of Vendstash, so businesses could not simply sign up and start using it. We needed a self-serve way to join that still verified who they were. It also had to work for two kinds of customer: partner platforms whose buyers pay vendors on the platform, and vendors with their own websites." },
          { t: "Holding money without being a bank.", d: "We rely on licensed payment partners and do not hold funds the way a bank does. The escrow rules for when money is held, released and refunded had to work within what those partners support, including which currencies we could offer." },
        ],
      },
      {
        label: "My role",
        body: [
          "I wrote the requirements and made the product decisions, working with engineering, finance and our payment and KYC partners. Engineering sent me a list of open questions about how money should move, and I answered them across releasing funds, the payment lifecycle, currencies and providers, webhooks, and test versus live.",
        ],
      },
      {
        label: "Key decisions",
        body: [],
        bullets: [
          { t: "Two customer segments, one rule for access.", d: "Partners and vendors with their own websites both complete CAC verification before they get a live key. Vendors selling on a partner platform do not need their own KYC, because the partner is the business we verify. This kept the API open to self-serve signup without lowering the bar for trust." },
          { t: "The buyer releases the money.", d: "Funds are held until the buyer releases them, and a partner can step in to release if the buyer has not. Once released, a release is final. If a buyer disputes an order, funds stay held and Vendstash mediation decides whether to refund the buyer or pay the vendor." },
          { t: "Fees sit with the buyer.", d: "Vendors pay nothing and the buyer pays at checkout. Partners share in the revenue, with terms set per partner rather than fixed for everyone, so each partnership can be negotiated." },
          { t: "Partial release left out of the first version.", d: "We already had a requirements document for partial release, but I kept it out of the API's first version. It adds complexity to disputes and refunds, and the first priority was getting businesses to integrate and use escrow at all." },
          { t: "Start with Naira.", d: "Launch is NGN only, through licensed payment partners. USD and CNY stay off until we have a provider that supports escrow. I chose a smaller launch that works over a wider one that fails at the payment provider." },
          { t: "Exact amounts only.", d: "A payment below the amount due does not go through, and an overpayment is held in full, so escrow always matches the order." },
          { t: "Safe to build against.", d: "Businesses get a sandbox with test keys to build their integration. A live key comes only after CAC verification. Merchants receive webhooks across the payment lifecycle: paid, failed, expired, released, refunded and dispute opened." },
        ],
      },
      {
        label: "What I learned",
        body: [
          "Some rules changed depending on who the customer was: KYC, notifications, payouts and fees. I now start each product decision by asking which customer segment it applies to.",
        ],
        highlight: true,
      },
    ],
    stack: ["API product", "KYB and KYC onboarding", "Escrow and payments", "Payment partners", "PRDs"],
  },
  {
    slug: "ajowa-validation",
    chips: ["Group savings", "AI prototype", "User validation"],
    kicker: "Group savings",
    title: "Ajowa: validating group savings before engineers built it",
    summary:
      "I interviewed people, researched the market, built a prototype with an AI tool and tested it with real groups. Before engineers started building anything.",
    meta: [
      { label: "Product", value: "Ajowa (formerly SafeCircle)" },
      { label: "My role", value: "Product Manager: research, product definition, prototype, validation" },
      { label: "Period", value: "2026" },
      { label: "Method", value: "Interviews, market research, AI-built prototype, user testing" },
    ],
    link: { label: "Visit the validation prototype", href: "https://safecircleajo.base44.app/" },
    beats: [
      {
        label: "Context",
        body: [
          "Ajo, also called esusu, is rotating savings. Everyone in a group pays in each cycle and one member collects the full pot, in turn. Millions of Nigerians do it. Most of it runs on WhatsApp chats, notebooks and personal trust.",
        ],
      },
      {
        label: "Problem",
        body: [
          "Moving money is the easy part. The hard part is everything a trusted group leader does by hand: knowing who has paid, whose turn it is, and what happens when someone does not pay.",
          "Before anyone built anything heavy, the real question was whether people would trade a human organiser they trust for a system.",
        ],
      },
      {
        label: "My role",
        body: [
          "I led the product work through validation. I interviewed people in savings groups, researched existing solutions, defined the rules a digital version needs (membership, contributions, payouts and default handling), and built the prototype myself with an AI app builder so we could put something real in front of users quickly.",
        ],
      },
      {
        label: "Process",
        body: [
          "I treated the prototype as a way to learn, not as the product.",
        ],
        bullets: [
          "Talk first: interviews and market research on how groups run today and where it breaks.",
          "Build the cheapest thing that can be tested: an AI-built prototype, ready in days instead of a sprint cycle.",
          "Test with real groups, and let what they did and said change the direction of the product.",
        ],
      },
      {
        label: "Outcome",
        body: [
          "Testing with real groups validated the need, and user feedback shaped the direction of the product. This was done before engineers started building, based on what we learned from the prototype.",
          "The survey told us where to aim:",
        ],
        bullets: [
          "Following up on payments was the most named challenge (32%), ahead of disputes (23%), tracking who has paid (19%), whose turn it is (19%) and trust or security (19%).",
          "65% still track contributions on WhatsApp or Telegram.",
          "74% said security would be a requirement before they switched.",
        ],
        note: "A small sample is a signal, not a market study. I treat it as direction for the next round of testing, not as proof.",
        highlight: true,
      },
      {
        label: "What happens next",
        body: [
          "I have prepared the QA test plan and the go-to-market plan.",
          "One decision there: start with existing group admins and help them move their groups over, while also reaching people who want to start new groups. Admins-only would be too narrow, because anyone can start a group.",
        ],
      },
      {
        label: "What I learned",
        body: [
          "The pain is chasing people for money, so one important job the product has to do is to be the one who chases. And as much as there are many savings apps, so many people still do ajo, even people in the diaspora.",
        ],
      },
    ],
    stack: ["User interviews", "Market research", "AI prototyping (Base44)", "User testing", "Go-to-market"],
  },
  {
    slug: "findryd-last-mile",
    chips: ["Last mile", "Discovery", "Prototype testing"],
    kicker: "Logistics, food delivery",
    title: "FindRyd: landmark-based navigation for food delivery riders",
    summary: "Helping riders find the exact door in cities where street addresses don't guide them.",
    meta: [
      { label: "Product", value: "FindRyd (Product Leadership Accelerator project)" },
      { label: "My role", value: "Product Manager" },
      { label: "Focus", value: "Discovery, problem validation, prototype testing" },
    ],
    beats: [
      {
        label: "Context",
        body: [
          "We started with a broad brief: logistics. Through early discovery, we narrowed it to last-mile delivery, where delays and failed deliveries came up most often and cost businesses the most.",
          "Food delivery stood out within that. Customers expect meals within minutes, platforms run on thin margins, and every late or failed delivery costs them money, ratings and repeat customers.",
        ],
      },
      {
        label: "Problem",
        body: ["As discovery went deeper, our assumptions changed."],
        bullets: [
          { t: "Where deliveries actually break down.", d: "We assumed GPS was inaccurate. Riders told us the maps usually got them to the right area. The problem was the final stretch: unmarked streets, inconsistent addresses and buildings that maps don't place well. When riders called customers for help, customers never gave street names. They gave landmarks." },
          { t: "Who feels the pain and who pays for it.", d: "We first assumed riders were our customer. Talking to them showed most would use a better tool but wouldn't pay for one. The platforms carry the cost of late and failed deliveries, so they became our buyer, with riders as users." },
        ],
      },
      {
        label: "My role",
        body: [
          "I worked as a product manager in a cross-country pod, with teammates in Nigeria, South Africa, Botswana, Mauritius, Uganda, Kenya and Rwanda. I led in-person discovery in Lagos, interviewed stakeholders remotely in other markets, and worked with two podmates on the prototypes.",
        ],
      },
      {
        label: "Discovery",
        body: [],
        bullets: [
          "We spoke with riders, restaurants, last-mile operators and customers who order through food apps like Chowdeck, Glovo, Swoop, Quickli, Mano, Uber Eats and Mr D.",
          "Food delivery companies we spoke to included Glovo, Swoop, Mr D and Uber Eats.",
          "This covered Nigeria, South Africa, Uganda, Botswana and Mauritius.",
          "Navigation came up in every market as a leading cause of delays, though it ranked differently against fuel costs and cancellations.",
        ],
      },
      {
        label: "Key decisions",
        body: [],
        bullets: [
          { t: "Integrate with platforms instead of building a new rider app.", d: "Glovo told us riders won't switch apps mid-delivery and asked for something that fits into what they already use. We gave up direct control of the rider experience to reach riders where they already work." },
          { t: "Hybrid landmark data over pure crowdsourcing.", d: "Operations-curated landmarks, checked by one-tap rider feedback. We traded growth speed for accuracy, because a wrong landmark sends a rider to the wrong place." },
          { t: "Leave out what doesn't test the core idea.", d: "We cut WhatsApp pin sharing, in-app calling, weather alerts and offline maps from the MVP. They were useful, but none of them tested whether landmark directions work." },
          { t: "Start in Lagos.", d: "We decided to focus on Lagos because that is where most of our discovery data came from, and we didn't want to spread ourselves too thin by starting in different locations. We'll start small in one place and scale as the need arises." },
        ],
      },
      {
        label: "Prototype and what broke",
        body: [
          "Our early field test on live Lagos routes showed GPS tracking and arrival detection worked. It also showed landmarks that didn't exist and voice prompts that looped or went silent. We chose to refine, not abandon: fix the landmark data first, then the audio triggers.",
        ],
      },
      {
        label: "Validation so far",
        body: [],
        bullets: [
          "Riders, platforms and customers all described delivery delays as a real cost.",
          "Glovo spends about \u20a6100 million a year training riders, and named map reading as a core training need. Glovo asked for a pilot once the product is ready.",
          "Still unproven: what other platforms will pay to use this, whether landmark data stays accurate as coverage grows, and whether riders change habits in daily use.",
        ],
      },
      {
        label: "Where it is now",
        body: [
          "After the accelerator, the pod kept building. We're testing with real riders and building our landmark database for Lagos ahead of a pilot. The pilot will measure the share of deliveries that meet the platform's stated delivery estimate, starting from a 40 to 60 percent baseline with a target of 80 percent.",
        ],
      },
      {
        label: "What I learned",
        body: [
          "The biggest shift wasn't finding a solution. It was letting evidence change who we were building for. Riders felt the problem most, but the platforms paid for it, and that changed how we designed the product.",
        ],
        highlight: true,
      },
    ],
    stack: ["User discovery", "Problem validation", "Prototype testing", "Stakeholder interviews", "Prioritisation"],
  },
];

export const digitallie = {
  title: "From proof of concept to MVP in three weeks",
  kicker: "Digitallie AI, Jan to Sep 2026, part time",
  body: [
    "Digitallie is a music marketing and distribution platform that helps marketers and distributors run and track campaigns. I took it from concept to a working MVP in three weeks, and to a full platform in three months.",
    "The real work was deciding what not to build. Many platforms, metrics and integrations were valid. I chose the few that the first users needed to see value, and left the rest for later.",
    "I also supported the launch and go-to-market: the platform ran 50+ campaigns and generated 80+ leads across pilot users, labels and artistes.",
  ],
};

export const thinking = {
  title: "Product teardown",
  miro: { label: "View the Miro board", href: "https://miro.com/app/board/uXjVHt-ifHc=/?share_link_id=643821455697" },
  intro:
    "A teardown of ALAT by Wema Bank. It is an outside analysis built from using the app, user interviews, app store reviews and public information.",
  approach: {
    title: "How the teardown was done",
    points: [
      { t: "Started from customer jobs, not features.", d: "Mapped the jobs people hire a digital bank to do, then followed each journey step by step before judging anything." },
      { t: "Two rounds of evidence.", d: "Round 1 came from user interviews. Round 2 was hands-on testing of the live app, across sign-up, transfers, savings, cards, lending, bills, investments and support." },
      { t: "Compared journeys, not feature lists.", d: "Put ALAT's sign-up and transfer journeys next to OPay and Moniepoint, and counted the screens a user actually goes through." },
      { t: "Kept facts and interpretation apart.", d: "Every finding is logged as what happened first. Compliance steps that are legally required were not counted as poor UX." },
      { t: "Corrected as it went.", d: "When later testing disproved an early finding, the earlier one was marked as superseded and the trail kept visible." },
    ],
  },
  figures: [
    {
      src: "/teardown/1-signup-comparison.png",
      title: "Sign-up, compared across three digital bank apps",
      caption:
        "ALAT, OPay and Moniepoint side by side from my Miro board. Sign-up takes 10 screens on ALAT, 14 on OPay and 22 on Moniepoint, so ALAT has the shortest sign-up of the three. Facial verification is compulsory on all three.",
    },
    {
      src: "/teardown/1b-signup-notes.png",
      title: "What I recorded for each sign-up",
      caption:
        "My notes from going through each sign-up, with the screen counts and three other observations.",
    },
    {
      src: "/teardown/2-core-jtbd.png",
      title: "The core job of a digital banking app: \"Help me send money\"",
      caption:
        "The job broken into steps, from seeing how much money I have to the recipient getting it, ranked by what the user must have, should have and could have.",
    },
    {
      src: "/teardown/3-alat-jtbd-steps.png",
      title: "How ALAT fulfils that job",
      caption:
        "ALAT's version of the job: send money to a local bank account and get an instant receipt. Every step and page a user goes through from sign-in to a successful transfer, mapped against the core job.",
    },
  ],
  findingsTitle: "What the evidence showed",
  findings: [
    {
      t: "Strong features that users do not know exist",
      d: "The same failure showed up in four unrelated areas. A long-time user had never heard of voice banking. Save and Receive, which saves a percentage of every inflow automatically, was only found through deliberate testing. The full savings suite (personal plans plus group and themed savings) is hard to spot. Retail access to Treasury Bills, US stocks, IPOs and government bonds sits deep in the app.",
      so: "ALAT has real product depth that many existing users never see. A discoverability push is likely worth more than building something new.",
    },
    {
      t: "No in-app way out of a stuck identity or biometric state",
      d: "At sign-up, a biometric conflict blocked the account with no visible way to clear it, and the only fix found was an unrelated app update that wiped the stuck data. For a returning dormant customer, reactivation could not be done in the app at all.",
      so: "These are the same pattern at opposite ends of the customer lifecycle. It points to how the product handles stuck identity states in general, not to one bug.",
    },
    {
      t: "Support sits entirely outside the app",
      d: "There is no live chat or chatbot. Every support route (phone, email, social media) means leaving the app. Interviewees described support that did not close the loop.",
      so: "A user cannot ask a quick question inside the app. The only choice is to leave the app and call or email.",
    },
    {
      t: "Small, avoidable issues on the home screen",
      d: "An unclear \"Heads Up\" label that two people flagged independently as jargon. Quick-access tiles such as Betting and Electricity that open the generic Bill Payment page. An Explore button that did nothing.",
      so: "None are hard fixes, which makes the pattern read as neglect on the first screen everyone sees, in a regulated financial product.",
    },
    {
      t: "No safeguard when sending an unusual amount",
      d: "One interviewee lost real money on a transfer. The app did not prompt on a first-time recipient or an unusual amount. The interviewee compared this with OPay, which does flag such transfers.",
      so: "A well-tuned prompt could protect customers. The risk is setting it too aggressively, so people learn to tap past it.",
    },
    {
      t: "A recent update may be behind the login and biometric complaints",
      d: "Reviews gathered in the interviews suggested an update broke biometrics and login for several multi-year users. Separately, an app update was what cleared the stuck sign-up in testing.",
      so: "Two independent data points agree. This is not proof, and it still needs checking against ALAT's release notes.",
    },
  ],
  strengthsTitle: "What ALAT does well",
  strengths: [
    { t: "Shortest sign-up of the three apps compared", d: "10 screens against 14 on OPay and 22 on Moniepoint." },
    { t: "Honest eligibility checks", d: "The credit card, loan and bills buy-now-pay-later declines each told an ineligible user plainly that they did not qualify. No false approvals and no silent failures." },
  ],
  risksTitle: "What could go wrong if these were acted on",
  risks: [
    { t: "Discoverability push", d: "Pushing more features at users can add clutter. It should be paired with a clearer home screen." },
    { t: "In-app chat", d: "A low-friction channel can raise ticket volume beyond what the support team handles today. It needs capacity planning, not only a feature launch." },
    { t: "Unusual-amount prompt", d: "Thresholds need care. Too aggressive and it becomes friction users route around." },
    { t: "Recovery for stuck identity states", d: "Any in-app recovery path has to protect against fraud, so it likely needs the compliance team involved early." },
  ],
  learnedTitle: "What I learned",
  learned: [
    "The best parts of a product can go unused if people never find them.",
    "When a user gets stuck, the app needs its own way to get them out, not a phone call or a visit.",
    "Small unfinished details on the home screen can cost a bank customer's trust.",
  ],
};

export const builds = {
  title: "Projects",
  intro: "",
  items: [
    {
      name: "FindRyd",
      type: "Product Manager",
      text: "Landmark-based navigation for food delivery riders, tested with riders in Lagos. I was part of a team at the Product Leadership Accelerator (PLA) that built it as our accelerator project.",
      tags: ["Product discovery", "Prototype", "Logistics"],
      href: "/work/findryd-last-mile",
      cta: "Read the case study",
    },
    {
      name: "Ajowa (formerly SafeCircle)",
      type: "Product Manager, AI-built prototype",
      text: "A coordination prototype for rotating savings groups (ajo), built with an AI app builder and tested with real groups before engineers began building the product.",
      tags: ["Base44", "User testing", "Group savings"],
      href: "https://safecircleajo.base44.app/",
      cta: "Visit the prototype",
    },
    {
      name: "Splita",
      type: "Product Manager and backend engineer",
      text: "A group savings (ajo) platform, built as my capstone project at The Curve Africa. I defined the membership, payout and validation logic and co-built the backend as one of three backend engineers.",
      tags: ["Node.js", "Express.js", "MongoDB", "KoraPay"],
      href: "https://splita.vercel.app/",
      cta: "Visit Splita",
    },
    {
      name: "Fair Market",
      type: "Product Manager, hackathon project",
      text: "End-to-end workflows for a B2B marketplace for SMEs: listings, order placement and escrow payments. Designed for a hackathon at the Women Techsters Fellowship.",
      tags: ["Figma", "Workflows", "Marketplace"],
      href: "https://www.figma.com/proto/qjVncYSkv1YlpQDB2muBTC/FAIR-MARKET-WEBSITE?node-id=1599-5768&t=VLP4C8TIwM6chXjj-0&scaling=min-zoom&content-scaling=fixed&page-id=379%3A3&starting-point-node-id=622%3A642&show-proto-sidebar=1",
      cta: "View the Figma prototype",
    },
  ],
};

export const experience = [
  {
    org: "Mitochron Hub",
    role: "Product Manager",
    period: "May 2023 to present",
    note: "Product Manager Intern, then Associate Product Manager, then Product Manager.",
    tags: ["Escrow", "Marketplaces"],
    points: [
      "Delivered seven products from discovery to launch, across escrow and payments, marketplaces, procurement and food delivery, by owning requirements and aligning design, engineering and business on what ships and why.",
      "Brought in client revenue for the organisation by managing external client projects, including an appointment scheduling product for a Lagos State ministry that other state ministries and offices later adopted.",
      "Helped cut ideation-to-build time from three weeks to two, and contributed to 20% faster launches and 80% fewer post-launch defects.",
      "Led the team that shipped Vendstash, an escrow platform with catalog, logistics and dispute resolution.",
      "Took on business development to drive sales and platform usage, doing whatever it takes to get the product into the hands of users.",
    ],
  },
  {
    org: "Digitallie AI",
    role: "Product Manager, part time",
    period: "Jan 2026 to Sep 2026",
    tags: ["Zero to one", "MVP", "Go-to-market"],
    points: [
      "Took a data analytics platform for music campaigns and marketers from concept to MVP in three weeks by defining requirements and the roadmap with the founder.",
      "Supported the public launch, which ran 50+ campaigns and generated 80+ leads.",
    ],
  },
  {
    org: "G3Hub",
    role: "Programs and Operations Manager",
    period: "May 2020 to Aug 2022",
    tags: ["Programmes", "Operations"],
    points: [
      "Delivered four programmes for 120+ learners on schedule and within budget by managing logistics, schedules and budgets.",
      "Kept programmes running by handling documentation and day-to-day issue resolution with learners and stakeholders.",
    ],
  },
];

export const skills = [
  {
    group: "Product",
    items: [
      "Product strategy",
      "Product discovery",
      "Product delivery",
      "User research",
      "PRDs and user stories",
      "Prioritisation",
      "Roadmaps",
      "Go-to-market (GTM)",
      "Sprint planning",
      "Launch readiness",
      "Product analytics",
      "Stakeholder management",
      "A/B testing",
      "Software testing",
    ],
  },
  {
    group: "Technical",
    items: ["Postman", "Swagger", "Basic SQL", "Git and GitHub", "Prototyping (Base44, Lovable, Replit)", "Zoho Workspace", "VS Code", "Vercel", "Render", "Cursor", "Claude Code"],
  },
  {
    group: "Tools",
    items: ["Jira", "Linear", "ClickUp", "Trello", "Google Analytics", "Metabase", "Figma", "Miro", "Notion", "Canva"],
  },
];

export const education = {
  degree: "Bachelor of Science in Sociology",
  school: "University of Lagos",
};

export const credentials = [
  { name: "Product Management Bootcamp", org: "Tech4Dev", period: "Aug to Sep 2022", href: "https://drive.google.com/file/d/1sjiYs0JOhLRLTm7qXR45J7ArbPuX0Bdy/view" },
  { name: "Registered Scrum Master", org: "Scrum Inc", period: "Jan 2023", href: "https://drive.google.com/file/d/1tKrd2ZGFIbNL9muzJWipeuB2ySuFQZCV/view?usp=sharing" },
  { name: "Diploma in Product Management", org: "Tech4Dev", period: "Oct 2023 to Nov 2024", href: "https://drive.google.com/file/d/11N-HgmqnJ4XAELCxbkK3PcKYRTaJ_GG5/view?usp=drive_link" },
  { name: "Product Management Basics", org: "Pendo", period: "Jan 2024", href: "https://www.credly.com/badges/a6f6d8d9-4cab-4c7c-9221-80d6eff49b6b/public_url" },
  { name: "Data Analysis in Excel", org: "Fuse Varsity", period: "Nov 2024", href: "https://drive.google.com/file/d/1nhAqRBSSqPngDh4TJTxCV36yQ3oD7guZ/view?usp=sharing" },
  { name: "Full-stack for Beginners", org: "Tech Impact Academy (Tunga)", period: "Feb to Jul 2025", href: "https://credsverse.com/credentials/8f7459f4-a048-4b4b-8b37-75c62b8fc158" },
  { name: "Introduction to Software Engineering (Backend)", org: "The Curve Africa", period: "May to Nov 2025", href: "https://drive.google.com/file/d/12S1DJYGkIS-TMzNx8wdoTSitu5vKf5vJ/view?usp=drive_link" },
  { name: "Product Leadership Accelerator", org: "Innovate Africa Foundation", period: "May to Jul 2026", href: "https://drive.google.com/file/d/1_FHLxTjVtN4NimU-8Ku8ae9eD3DIaa9K/view?usp=sharing" },
  { name: "SVPG Product Masterclass", org: "Silicon Valley Product Group", period: "Nov 2026", href: "https://drive.google.com/file/d/1wjSN-ipIYG3bqQCcVj2abMSkbIx5JtQ4/view?usp=drivesdk" },
];

export const beyond = {
  title: "Beyond work",
  intro: "When I am not reading or writing something, I volunteer.",
  outside: [],
  volunteeringTitle: "",
  volunteering: [
    { t: "Career Flow", role: "Co-founder, Programs and Partnerships Lead", d: "A nonprofit that helps young Nigerians make informed education and career decisions through career guidance, mentorship and professional exposure. I lead the programs, from planning them and picking outreach locations to securing partnerships and post-program reporting.", when: "Jul 2026 to present" },
    { t: "Creative Impact Awards", role: "Programs Lead", d: "An annual awards ceremony under Digitallie. I worked with a team on the inaugural edition, and helped define the recognition framework, award categories and nomination process.", when: "Jan 2026 to present" },
    { t: "NYSC", role: "Project Director, IT Community Development Service", d: "Led monthly IT community projects reaching 3,000+ students across 7 schools and 2 correctional facilities, on a budget under \u20a61,000,000. Earned a local government award for outstanding service.", when: "12 months" },
  ],
};

export const cv = {
  title: "CV",
  intro: "Read it here or download a copy.",
  file: "/Chisom_Mbagwu_CV.pdf",
  downloadName: "Chisom_Mbagwu_CV.pdf",
};

export const contact = {
  title: "Contact",
  text: "Hiring or want to talk about a product? Get in touch.",
};
