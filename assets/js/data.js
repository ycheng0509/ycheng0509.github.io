export const homeContent = {
  hero: {
    eyebrow: "Portfolio 2026",
    name: "Yusi Cheng",
    intro: "Digital product work, front-end prototyping, and game systems.",
    links: [
      { label: "View Projects", href: "#digital-product", variant: "primary" },
      { label: "Legacy Projects", href: "legacy.html" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/justincheng0509/",
        external: true
      }
    ],
    meta: [
      {
        title: "Focus",
        body: "Digital product strategy, UX, prototyping, and game systems."
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
          title: "Next Digital Product",
          body:
            "Reserved for the next internal or external product case study you want to add here.",
          cta: "Coming next"
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
      id: "game-design",
      label: "Section 02",
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
          type: "Identity + Onboarding",
          title: "iPersona",
          body:
            "Security for gaming identity, with emphasis on onboarding design, trust-building, and a clearer first-use experience.",
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
      { label: "Legacy Projects", href: "legacy.html" },
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

export const projectDetails = {
  "operator-tooling": operatorToolingContent
};
