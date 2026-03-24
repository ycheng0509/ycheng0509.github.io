export const homeContent = {
  hero: {
    eyebrow: "Portfolio 2026",
    name: "Yusi Cheng",
    intro: "VR, robotics, digital product, and community operations.",
    links: [
      { label: "View Projects", href: "#embodied-interaction", variant: "primary" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/justincheng0509/",
        external: true
      }
    ],
    meta: [
      {
        title: "Focus",
        body: "Embodied interaction, product strategy, and support operations."
      },
      {
        title: "Format",
        body: "Homepage for current work. Archive page for older case studies."
      }
    ]
  },
  sections: [
    {
      id: "embodied-interaction",
      label: "Section 01",
      title: "Embodied Interaction",
      description: "VR development and physical systems — presence, spatial feedback, and real-world action.",
      projects: [
        {
          title: "1X Technologies — Data Collection Operator",
          body:
            "Operating humanoid robots in R&D environments via VR headset — performing movements, staging tasks, and annotating sessions to train AI models.",
          cta: "Current role"
        },
        {
          title: "Cast Away — VR Survival Game",
          body:
            "Capstone VR project built in Unity for Meta Quest 3. Designed around physical presence: weapon handling, haptic feedback, resource gathering, and AI encounters.",
          cta: "Case study coming"
        }
      ],
      highlights: ["VR / XR development", "Spatial interaction design", "Haptic feedback systems", "Unity", "Playtesting"],
      secondaryLink: {
        label: "Open Itch.io",
        href: "https://jcheng0509.itch.io",
        external: true
      }
    },
    {
      id: "digital-product",
      label: "Section 02",
      title: "Digital Product",
      description: "Internal product strategy, UX, and implementation.",
      meta: ["Product Owner", "In Progress", "Solo build", "Internal tooling"],
      projects: [
        {
          id: "operator-tooling",
          title: "Operator Tooling & Data Collection Reliability System",
          body:
            "Internal tooling for operators and supervisors: pre-shift setup, task tracking, rig monitoring, and operational visibility in one interface.",
          cta: "Read project"
        },
        {
          id: "chia-wallet",
          title: "Chia Reference Wallet",
          body:
            "Wallet redesign focused on reducing fragmentation between light wallet and full node after client integration.",
          cta: "Read project"
        },
        {
          href: "legacy.html",
          title: "Older Projects",
          body: "Earlier case studies in UX design, product strategy, and game design.",
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
      label: "Section 03",
      title: "Support & Community",
      description: "Technical support, escalation, and community operations.",
      meta: ["Tier 1/2 Support", "APAC Coverage", "Knowledge Base", "Cross-functional"],
      projects: [
        {
          id: "chia-support",
          title: "Chia Network Technical Community Manager",
          body:
            "Tier 1/2 technical support and APAC community operations across wallet sync, networking, account issues, and escalation.",
          cta: "Read role"
        }
      ],
      highlights: [
        "Issue triage",
        "Escalation quality",
        "Support operations",
        "Community coordination"
      ]
    }
  ],
  footer:
    "Built as a lightweight GitHub Pages portfolio. Older work lives in the archive page."
};

export const legacyContent = {
  hero: {
    eyebrow: "Archive",
    name: "Legacy Projects",
    intro:
      "Earlier case studies kept as evidence of range, process, and growth. This is the archive, not the main portfolio signal.",
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
        body: "Archived work shows breadth and how thinking has evolved across product, UX, and games."
      },
      {
        title: "How To Use It",
        body: "Keep the homepage current. Move older or exploratory work here rather than deleting it."
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
            "Reference wallet redesign centered on simplifying critical flows and improving usability for a technically complex product.",
          note:
            "Shows systems thinking and practical product design in a complex domain.",
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
            "A smart travel assistant redesign focused on reducing planning friction and making trip support feel more intuitive.",
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
            "A startup gaming privacy platform for protecting account identity and reducing onboarding friction. Covered design system creation, product structure, and Vue front-end prototypes.",
          note:
            "Evidence of design system work, startup collaboration, and front-end prototyping in a product context.",
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
            "A Northeastern game design project involving playtesting with children. Focused on level readability, engagement, and iteration informed by observation.",
          note:
            "Communicates player-centered iteration and playtest-informed design clearly.",
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
    "This archive preserves older work without forcing it to compete with the current portfolio."
};

export const operatorToolingContent = {
  hero: {
    eyebrow: "Digital Product",
    name: "Operator Tooling & Data Collection Reliability System",
    intro:
      "An internal product that consolidates pre-shift setup, task tracking, rig monitoring, and operational visibility into one lightweight interface.",
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
        body: "In progress. MVP is a lightweight single-file tool with a modular refactor planned next."
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
        "The operator team is scaling toward 30+ people but workflows still rely on manually opened tools and shared spreadsheets. This creates missed recordings, weak auditability, and limited visibility that won't scale."
    },
    {
      title: "Approach",
      body:
        "The product consolidates setup, task tracking, and rig health into a single interface. It is tool-agnostic and gives supervisors clearer visibility without a backend-heavy rebuild."
    }
  ],
  pillars: [
    {
      title: "Rig Status Monitor",
      body: "Clear online/offline/checking state, configurable endpoints, and alerting for offline rigs."
    },
    {
      title: "One-Click Launcher",
      body: "A single entry point for operator tools with a guided pre-shift checklist."
    },
    {
      title: "Operational Visibility",
      body: "Better shift awareness for supervisors without forcing a backend-heavy rebuild."
    }
  ],
  outcomes: [
    "Reduce missed recordings and late alert response.",
    "Create one reliable workspace for setup, tracking, and monitoring.",
    "Support 30+ concurrent operators without rebuilding from scratch.",
    "Prepare for tool migration without hardcoding to a single fleet dependency."
  ]
};

export const ipersonaContent = {
  hero: {
    eyebrow: "Digital Product",
    name: "iPersona Design System",
    intro:
      "A startup gaming privacy platform for protecting account identity and reducing onboarding friction with less personal exposure.",
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
        body: "January to August 2020 — design system, product structure, and prototyping."
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
        "A gamer privacy service platform for a Seattle startup. Work covered design system creation, early product structure, and front-end prototypes."
    },
    {
      title: "Problem",
      body:
        "Gamers treat gamertags as personal identity but platform constraints make account creation awkward. The product aimed to let users keep a unique online identity while collecting minimal personal information."
    }
  ],
  pillars: [
    {
      title: "Onboarding Simplification",
      body: "Reduced registration friction by removing demographic questions and focusing only on essential sign-up information."
    },
    {
      title: "Identity and Privacy",
      body: "Explored ways for users to claim their gamertag while handling identity and privacy more flexibly."
    },
    {
      title: "Design System and Prototype",
      body: "Established the visual system and built working front-end prototypes with Vue."
    }
  ],
  outcomes: [
    "Defined a first-pass design system for the startup product.",
    "Simplified the onboarding flow based on user feedback about information sensitivity.",
    "Extended work beyond initial screens into settings, profile, and sign-in flows.",
    "Delivered front-end handoff and prototype work in a small startup team."
  ]
};

export const chiaSupportContent = {
  hero: {
    eyebrow: "Support & Community",
    name: "Chia Network Technical Community Manager",
    intro:
      "Tier 1/2 technical support and APAC community operations across wallet sync, networking, account issues, and Chinese-language coverage.",
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
        "Provided Tier 1/2 support across operating systems, diagnosing wallet sync, networking, and account issues. Escalated reproducible defects with clear reproduction steps and impact context."
    },
    {
      title: "Community Operations",
      body:
        "Built and operated APAC Chinese-language support channels. Coordinated distributed moderators to maintain near 24/7 coverage."
    }
  ],
  pillars: [
    {
      title: "Issue Triage and Escalation",
      body: "Logged, tracked, and resolved service requests while improving escalation handoff quality to Engineering."
    },
    {
      title: "Knowledge Base and SOPs",
      body: "Authored support documentation that improved first-contact resolution and reduced repeat requests."
    },
    {
      title: "Cross-Functional Product Feedback",
      body: "Connected recurring user issues to Product and Engineering, and contributed design improvements to onboarding and wallet flows."
    }
  ],
  outcomes: [
    "Improved clarity of engineering escalations with reproducible steps and impact notes.",
    "Maintained APAC Chinese-language support coverage through coordinated moderation.",
    "Reduced repeat support confusion through stronger KB and SOP documentation.",
    "Fed support pain points back into product and design improvements."
  ]
};

export const chiaWalletContent = {
  hero: {
    eyebrow: "Digital Product",
    name: "Chia Reference Wallet",
    intro:
      "Reference wallet redesign for Chia focused on making a newly unified experience easier to understand after light wallet and full node were merged.",
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
        "Users dealt with fragmented experiences between light wallets and full nodes across separate clients. After backend consolidation, the product still needed a clearer interface to make the integrated wallet understandable."
    },
    {
      title: "Design Approach",
      body:
        "The work unified the client experience and made synchronization and wallet-mode behavior easier to understand. Interaction patterns were streamlined into a single optimized interface."
    }
  ],
  pillars: [
    {
      title: "Light Wallet Integration",
      body: "Wallet mode selection and settings changes that helped users navigate the new integrated experience."
    },
    {
      title: "Fee Estimator",
      body: "A clearer fee estimator approach for wallet versions where transaction timing was hard to measure precisely."
    },
    {
      title: "Account Quick Switch",
      body: "Improved flow clarity for moving between wallet contexts inside the redesigned client."
    }
  ],
  outcomes: [
    "Reduced UX fragmentation after light wallet and full node were merged.",
    "Introduced clearer settings and mode-selection concepts for the integrated wallet.",
    "Helped users understand the redesigned client before sync improvements were fully mature.",
    "Contributed wallet interaction concepts including fee estimation and account switching."
  ]
};

export const projectDetails = {
  "operator-tooling": operatorToolingContent,
  "chia-wallet": chiaWalletContent,
  "chia-support": chiaSupportContent,
  ipersona: ipersonaContent
};
