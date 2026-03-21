export const homeContent = {
  hero: {
    eyebrow: "Portfolio 2026",
    name: "Yusi Cheng",
    intro:
      "UX designer, product-minded builder, UX engineer, and game designer creating digital products that feel usable and alive.",
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
        body: "UX, product thinking, front-end prototyping, and game systems."
      },
      {
        title: "Format",
        body: "Homepage for current work. Archive page for older case studies."
      }
    ]
  },
  sections: [
    {
      id: "ux-design-pm",
      label: "Section 01",
      title: "UX Design / PM",
      description: "Current product and UX case studies.",
      summary:
        "Lead with your strongest product-thinking work here rather than several older case studies at once.",
      highlights: ["Strategy", "Research synthesis", "Interaction design"],
      primaryLink: { label: "View legacy UX work", href: "legacy.html#ux-design-pm" },
      secondaryLink: { label: "Jump to section", href: "#ux-design-pm" }
    },
    {
      id: "ux-engineer",
      label: "Section 02",
      title: "UX Engineer Projects",
      description: "Design-to-code and prototype work.",
      summary:
        "Use this track for polished builds, design systems, and prototypes that show how you execute interaction ideas in code.",
      highlights: ["Front-end systems", "Rapid prototyping", "Interaction polish"],
      primaryLink: { label: "Feature current build", href: "#ux-engineer" }
    },
    {
      id: "game-design",
      label: "Section 03",
      title: "Game Design Projects",
      description: "Playable systems and player experience work.",
      summary:
        "Keep one or two strong playable projects here and push the rest to archive or Itch.io.",
      highlights: ["Playtesting", "Systems design", "Player UX"],
      primaryLink: { label: "View legacy game work", href: "legacy.html#game-design" },
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
