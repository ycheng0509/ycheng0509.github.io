export const homeContent = {
  hero: {
    eyebrow: "Portfolio 2026",
    name: "Yusi Cheng",
    intro: "Digital product work, technical support/community operations, and game systems.",
    links: [
      { label: "View Projects", href: "#digital-product", variant: "primary" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/justincheng0509/",
        external: true
      }
    ],
    meta: [
      {
        title: "Focus",
        body: "Digital product strategy, support/community operations, prototyping, and game systems."
      },
      {
        title: "Format",
        body: "Homepage for current work. Archive page for older case studies."
      }
    ]
  },
  sections: [
    {
      id: "digital-product",
      label: "Section 01",
      title: "Digital Product",
      description: "Internal product strategy, UX, and implementation.",
      meta: ["Product Owner", "In Progress", "Solo build", "Internal tooling"],
      projects: [
        {
          id: "operator-tooling",
          title: "Operator Tooling & Data Collection Reliability System",
          body:
            "Internal tooling project for operators and supervisors: one interface for pre-shift setup, task tracking, rig monitoring, and clearer operational visibility.",
          cta: "Read project"
        },
        {
          id: "chia-wallet",
          title: "Chia Reference Wallet",
          body:
            "Wallet redesign work focused on reducing fragmentation between light wallet and full node experiences while improving clarity after client integration.",
          cta: "Read project"
        },
        {
          href: "legacy.html",
          title: "Older Projects",
          body: "Earlier case studies covering UX design, product strategy, and game design work.",
          cta: "View archive"
        }
      ],
      highlights: [
        "Product thinking",
        "Interaction design",
        "Front-end prototyping",
        "Systems thinking"
      ]
    },
    {
      id: "support-community",
      label: "Section 02",
      title: "Support & Community",
      description: "Technical support, escalation, and community operations.",
      meta: ["Tier 1/2 Support", "APAC Coverage", "Knowledge Base", "Cross-functional"],
      projects: [
        {
          id: "chia-support",
          title: "Chia Network Technical Community Manager",
          body:
            "Tier 1/2 technical support and APAC community operations across wallet sync, networking, account issues, escalation, and support-channel coverage.",
          cta: "Read role"
        }
      ],
      highlights: [
        "Issue triage",
        "Escalation quality",
        "Support operations",
        "Community coordination"
      ]
    },
    {
      id: "game-design",
      label: "Section 03",
      title: "Game Design Projects",
      description: "Playable systems work.",
      highlights: ["Playtesting", "Systems design", "Player UX"],
      secondaryLink: {
        label: "Open Itch.io",
        href: "https://jcheng0509.itch.io",
        external: true
      }
    }
  ],
  footer:
    "Built as a lightweight GitHub Pages portfolio. Homepage content is modular, and older work now lives in a dedicated archive page."
};

export const legacyContent = {
  hero: {
    eyebrow: "Archive",
    name: "Legacy Projects",
    intro:
      "Earlier case studies still worth keeping as evidence of range, process, and growth. This page is the archive, not the main portfolio signal.",
    links: [
      { label: "Back to Homepage", href: "index.html", variant: "primary" },
      {
        label: "Itch.io",
        href: "https://jcheng0509.itch.io",
        external: true
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/justincheng0509/",
        external: true
      }
    ],
    meta: [
      {
        title: "Why Keep This",
        body: "Archived work still shows breadth, craft, and how your thinking has evolved across product, UX, and games."
      },
      {
        title: "How To Use It",
        body: "Keep the homepage current. Move anything older, less representative, or more exploratory here instead of deleting it immediately."
      }
    ]
  },
  sections: [
    {
      id: "ux-design-pm",
      label: "Legacy 01",
      title: "Legacy UX Design / PM Projects",
      description:
        "Earlier UX and product projects kept as archive material.",
      projects: [
        {
          featured: true,
          type: "UX Design + Product Strategy",
          title: "Chia Network",
          body:
            "Reference wallet redesign work centered on simplifying critical flows, clarifying trust and security cues, and improving usability for a technically complex product.",
          note:
            "Still a useful archive project because it shows systems thinking and practical product design in a complex domain.",
          links: [
            {
              label: "Open case study",
              href: "https://yusicheng.me/chia-reference-wallet",
              external: true
            }
          ]
        },
        {
          type: "UX Design + Research",
          title: "Travel Mate",
          body:
            "A smart travel assistant redesign focused on reducing planning friction and making trip support feel more intuitive and proactive.",
          links: [
            {
              label: "Open case study",
              href: "https://yusicheng.me/travelmate",
              external: true
            }
          ]
        },
        {
          id: "ipersona",
          featured: true,
          type: "Identity + Onboarding",
          title: "iPersona Design System",
          body:
            "A startup gaming privacy platform exploring how players can protect account identity, reduce onboarding friction, and build a recognizable online persona with less personal exposure. Work covered design system creation, product structure, workflow iteration, and Vue front-end prototypes.",
          note:
            "Archived here as an earlier project. Still useful as evidence of design system work, startup team collaboration, and front-end prototyping in a product context.",
          links: [
            {
              label: "Open case study",
              href: "https://yusicheng.me/ipersonaonboard",
              external: true
            }
          ]
        }
      ]
    },
    {
      id: "game-design",
      label: "Legacy 02",
      title: "Legacy Game Design Projects",
      description:
        "Recovered game design work and public builds preserved as archive material.",
      projects: [
        {
          featured: true,
          type: "Game Design + Playtesting",
          title: "Captain Crimson's Journey",
          body:
            "A Northeastern game design project involving playtesting with children, highlighting level readability, engagement, and iterative design decisions informed by observation.",
          note:
            "This remains a solid archive lead because it clearly communicates player-centered iteration and playtest-informed design.",
          links: [
            {
              label: "Open case study",
              href: "https://yusicheng.me/captain-crimson",
              external: true
            },
            {
              label: "Itch.io profile",
              href: "https://jcheng0509.itch.io",
              external: true
            }
          ]
        },
        {
          type: "Playable Builds",
          title: "Published Game Experiments",
          body:
            "Public prototypes, playable demos, and smaller releases that complement the deeper case studies.",
          links: [
            {
              label: "Open Itch.io",
              href: "https://jcheng0509.itch.io",
              external: true
            }
          ]
        }
      ]
    }
  ],
  footer:
    "This archive preserves older work without forcing it to compete with your current portfolio direction on the homepage."
};

export const operatorToolingContent = {
  hero: {
    eyebrow: "Digital Product",
    name: "Operator Tooling & Data Collection Reliability System",
    intro:
      "An internal product for operators and supervisors that consolidates pre-shift setup, task tracking, rig monitoring, and operational visibility into one lightweight interface.",
    links: [
      { label: "Back to Homepage", href: "index.html", variant: "primary" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/justincheng0509/",
        external: true
      }
    ],
    meta: [
      {
        title: "Role",
        body: "Product owner, designer, developer, and tester on a solo internal build."
      },
      {
        title: "Status",
        body: "In progress. MVP targeted as a lightweight single-file tool, with modular refactor planned next."
      }
    ]
  },
  snapshot: [
    { label: "Audience", value: "Operators, supervisors, engineering/support" },
    { label: "Timeline", value: "2–3 week MVP, 3–6 month longer-term roadmap" },
    { label: "Scope", value: "Internal operator tooling and monitoring layer" }
  ],
  sections: [
    {
      title: "Problem",
      body:
        "The operator team is scaling toward 30+ people, but current workflows depend on manually opened tools and shared spreadsheets. That creates missed recordings, limited visibility into operator activity, weak auditability, and a monitoring model that does not scale."
    },
    {
      title: "Approach",
      body:
        "The product consolidates setup, task tracking, and rig health into a single interface. It is intentionally tool-agnostic, supports mixed rig environments during migration, and gives supervisors a clearer view of operator activity and rig status."
    }
  ],
  pillars: [
    {
      title: "Rig Status Monitor",
      body: "Clear online/offline/checking state, configurable endpoints, and alerting for offline rigs."
    },
    {
      title: "One-Click Launcher",
      body: "A single entry point for operator tools, plus a guided pre-shift checklist."
    },
    {
      title: "Operational Visibility",
      body: "Better shift awareness for supervisors without forcing a backend-heavy rebuild."
    }
  ],
  outcomes: [
    "Reduce missed recordings and late alert response.",
    "Create one reliable workspace for setup, tracking, and monitoring.",
    "Support 30+ concurrent operators without rebuilding the tool from scratch.",
    "Prepare for tool migration without hardcoding the system to a single fleet dependency."
  ]
};

export const ipersonaContent = {
  hero: {
    eyebrow: "Digital Product",
    name: "iPersona Design System",
    intro:
      "A startup gaming privacy platform exploring how players can protect account identity, reduce onboarding friction, and build a recognizable online persona with less personal exposure.",
    links: [
      { label: "Back to Homepage", href: "index.html", variant: "primary" },
      {
        label: "Original case study",
        href: "https://yusicheng.me/ipersonaonboard",
        external: true
      }
    ],
    meta: [
      {
        title: "Role",
        body: "Main designer and front-end engineer for the team."
      },
      {
        title: "Timeline",
        body: "January to August 2020 for early product structure, design system, and prototyping."
      }
    ]
  },
  snapshot: [
    { label: "Project Type", value: "Startup gaming privacy platform" },
    { label: "Role", value: "Full Stack Designer" },
    { label: "Methods", value: "Survey, research, competitor analysis, sketching, prototyping" }
  ],
  sections: [
    {
      title: "Background",
      body:
        "The project focused on a gamer privacy service platform for a Seattle startup. The work covered design system creation, early product structure, workflow iteration, and prototypes for a first version of the product."
    },
    {
      title: "Problem",
      body:
        "Gamers increasingly treat gamertags as part of their identity and personal brand, but platform constraints and privacy concerns make account creation and identity management awkward. The product aimed to help users keep a unique online identity while collecting as little sensitive information as possible."
    }
  ],
  pillars: [
    {
      title: "Onboarding Simplification",
      body: "Reduced registration friction by removing demographic questions and focusing only on essential sign-up information."
    },
    {
      title: "Identity and Privacy",
      body: "Explored ways for users to claim the gamertag they want while handling identity and privacy in a more flexible way."
    },
    {
      title: "Design System and Prototype",
      body: "Established the visual system, iterated product workflows, and built working front-end prototypes with Vue."
    }
  ],
  outcomes: [
    "Defined a first-pass design system for the startup product.",
    "Simplified the onboarding flow based on user feedback about information sensitivity.",
    "Extended the work beyond school-project-style screens into settings, profile, and sign-in flows.",
    "Delivered front-end design handoff and prototype work while collaborating in a small startup team."
  ]
};

export const chiaSupportContent = {
  hero: {
    eyebrow: "Support & Community",
    name: "Chia Network Technical Community Manager",
    intro:
      "Tier 1/2 technical support and APAC community operations work spanning wallet sync, networking, account issues, escalation quality, and Chinese-language support coverage.",
    links: [
      { label: "Back to Homepage", href: "index.html", variant: "primary" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/justincheng0509/",
        external: true
      }
    ],
    meta: [
      {
        title: "Role",
        body: "Technical Community Manager, Tier 1/2 Support, APAC."
      },
      {
        title: "Timeline",
        body: "August 2021 to May 2022 at Chia Network."
      }
    ]
  },
  snapshot: [
    { label: "Platforms", value: "macOS, Windows, Linux" },
    { label: "Channels", value: "GitHub, Keybase, KB/SOP documentation" },
    { label: "Scope", value: "Wallet sync, networking, accounts, escalation, moderation" }
  ],
  sections: [
    {
      title: "Support Focus",
      body:
        "Provided Tier 1/2 support across operating systems, diagnosing wallet sync, networking, and account-related issues, then escalating reproducible defects with clear reproduction steps and impact context."
    },
    {
      title: "Community Operations",
      body:
        "Built and operated APAC Chinese-language support channels and coordinated distributed moderators to maintain near 24/7 support coverage for the community."
    }
  ],
  pillars: [
    {
      title: "Issue Triage and Escalation",
      body: "Logged, tracked, and resolved service requests while improving the quality of escalation handoff to Engineering."
    },
    {
      title: "Knowledge Base and SOPs",
      body: "Authored and maintained support documentation that improved first-contact resolution and reduced repeat requests."
    },
    {
      title: "Cross-Functional Product Feedback",
      body: "Connected recurring user issues to Product and Engineering work, and also contributed design improvements to onboarding, settings, and wallet/NFT offer flows."
    }
  ],
  outcomes: [
    "Improved clarity of engineering escalations with reproducible steps and impact notes.",
    "Maintained support coverage for APAC Chinese-language communities through coordinated moderation.",
    "Reduced repeat support confusion through stronger KB and SOP documentation.",
    "Fed support pain points back into product and design improvements during major technical changes."
  ]
};

export const chiaWalletContent = {
  hero: {
    eyebrow: "Digital Product",
    name: "Chia Reference Wallet",
    intro:
      "Reference wallet redesign work for Chia focused on making a newly unified wallet experience easier to understand after light wallet and full node functionality were brought together.",
    links: [
      { label: "Back to Homepage", href: "index.html", variant: "primary" },
      {
        label: "Original case study",
        href: "https://yusicheng.me/chia-reference-wallet",
        external: true
      }
    ],
    meta: [
      {
        title: "Year",
        body: "2022"
      },
      {
        title: "Duration",
        body: "3 months, version 1.3 to 1.3.4 design work."
      }
    ]
  },
  snapshot: [
    { label: "Project Type", value: "Reference wallet redesign" },
    { label: "Tools", value: "Figma" },
    { label: "Category", value: "UI/UX" }
  ],
  sections: [
    {
      title: "Problem",
      body:
        "Users were dealing with fragmented experiences between light wallets and full nodes across separate clients. After backend consolidation work, the product still needed a clearer interface so users could understand how to use the wallet after integration."
    },
    {
      title: "Design Approach",
      body:
        "The work focused on unifying the client experience, streamlining interaction patterns, and making synchronization and wallet-mode behavior easier to understand in a single optimized interface."
    }
  ],
  pillars: [
    {
      title: "Light Wallet Integration",
      body: "Explored wallet mode selection and settings changes that helped users navigate the new integrated experience."
    },
    {
      title: "Fee Estimator",
      body: "Proposed a clearer fee estimator approach for later wallet versions when transaction timing was still difficult to measure precisely."
    },
    {
      title: "Account Quick Switch",
      body: "Improved flow clarity for moving between wallet contexts and account states inside the redesigned client."
    }
  ],
  outcomes: [
    "Reduced UX fragmentation after light wallet and full node functionality were merged.",
    "Introduced clearer settings and mode-selection concepts for the integrated wallet experience.",
    "Helped users understand the redesigned client before backend sync improvements were fully mature.",
    "Contributed wallet interaction concepts such as fee estimation and quicker account switching."
  ]
};

export const projectDetails = {
  "operator-tooling": operatorToolingContent,
  "chia-wallet": chiaWalletContent,
  "chia-support": chiaSupportContent,
  ipersona: ipersonaContent
};
