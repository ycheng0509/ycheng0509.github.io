export const homeContent = {
  hero: {
    eyebrow: "Portfolio 2026",
    name: "Yusi Cheng",
    intro:
      "UX designer, product-minded builder, UX engineer, and game designer creating digital products that feel usable, expressive, and alive.",
    links: [
      { label: "View Projects", href: "#ux-design-pm", variant: "primary" },
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
        body: "Experience strategy, interface systems, prototyping, and cross-functional delivery."
      },
      {
        title: "Current Structure",
        body: "The homepage highlights current portfolio directions. Older case studies live in a separate legacy archive."
      }
    ]
  },
  sections: [
    {
      id: "ux-design-pm",
      label: "Section 01",
      title: "UX Design / PM",
      description:
        "Current and in-progress case study direction for product thinking, research synthesis, interaction design, prioritization, and shipping clearer experiences.",
      projects: [
        {
          featured: true,
          type: "Flagship Direction",
          title: "Product Strategy and UX Case Studies",
          body:
            "Use this section for the strongest work you want recruiters to see first: deep product framing, clear problem definition, sharper interaction decisions, and measurable outcomes.",
          note:
            "Older UX case studies are still preserved, but they no longer need to dominate the first screen of the portfolio.",
          links: [{ label: "View legacy UX work", href: "legacy.html#ux-design-pm" }]
        },
        {
          type: "Next Addition",
          title: "Current Case Study Slot",
          body:
            "Reserve this card for the most representative design or PM project you want to feature next."
        },
        {
          type: "Next Addition",
          title: "Research or Systems Project",
          body:
            "Use this slot for another current project that shows decision-making, process clarity, and execution range."
        }
      ]
    },
    {
      id: "ux-engineer",
      label: "Section 02",
      title: "UX Engineer Projects",
      description:
        "Projects where design intent and implementation meet: rapid prototyping, front-end interaction work, and building polished interfaces that communicate clearly.",
      projects: [
        {
          featured: true,
          type: "Prototype + Interface Build",
          title: "Interactive Product Prototypes",
          body:
            "This section is set up as the engineering bridge in the portfolio: coded prototypes, design-system implementation, and front-end work that turns concepts into testable experiences.",
          note:
            "Add production examples here next: web apps, design systems, coded prototypes, or shipped UI components."
        },
        {
          type: "Front-End Systems",
          title: "Design-to-Code Work",
          body:
            "Space reserved for projects that demonstrate how you translate flows, visual hierarchy, and interaction patterns into responsive interfaces."
        },
        {
          type: "Rapid Prototyping",
          title: "Experimentation Lab",
          body:
            "Use this area for small builds that show technical range: motion studies, interface explorations, or tools created to validate UX ideas quickly."
        }
      ]
    },
    {
      id: "game-design",
      label: "Section 03",
      title: "Game Design Projects",
      description:
        "Projects centered on player experience, systems, iteration, and the craft of making mechanics readable, engaging, and worth returning to.",
      projects: [
        {
          featured: true,
          type: "Game Design + Playtesting",
          title: "Current and Featured Play Projects",
          body:
            "Use this section for the strongest playable or systems-heavy work you want to represent your game design practice now.",
          note:
            "Older recovered game case studies remain accessible in the archive so the homepage can stay focused.",
          links: [
            { label: "View legacy game work", href: "legacy.html#game-design" },
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
            "Your Itch.io page can serve as the public hub for prototypes, playable demos, and smaller releases that complement the deeper case studies.",
          links: [
            {
              label: "Open Itch.io",
              href: "https://jcheng0509.itch.io",
              external: true
            }
          ]
        },
        {
          type: "Future Case Studies",
          title: "Systems, Levels, and Player UX",
          body:
            "Reserve this slot for additional game projects that emphasize mechanics design, feedback loops, onboarding, and moment-to-moment player understanding."
        }
      ]
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
