export const siteContent = {
  hero: {
    eyebrow: "Portfolio 2026",
    name: "Yusi Cheng",
    intro:
      "UX designer, product-minded builder, UX engineer, and game designer creating digital products that feel usable, expressive, and alive.",
    links: [
      { label: "View Projects", href: "#ux-design-pm", variant: "primary" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/justincheng0509/",
        external: true
      },
      {
        label: "Itch.io",
        href: "https://jcheng0509.itch.io",
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
        body: "This portfolio is organized into three tracks: UX Design and PM, UX Engineering, and Game Design."
      }
    ]
  },
  sections: [
    {
      id: "ux-design-pm",
      label: "Section 01",
      title: "UX Design / PM Projects",
      description:
        "Case studies focused on product thinking, research synthesis, interaction design, prioritization, and shipping clearer experiences.",
      projects: [
        {
          featured: true,
          type: "UX Design + Product Strategy",
          title: "Chia Network",
          body:
            "Reference wallet redesign work centered on simplifying critical flows, clarifying trust and security cues, and improving usability for a technically complex product.",
          note:
            "A strong anchor project for the new site because it signals both systems thinking and practical product design.",
          links: [
            {
              label: "Legacy case study",
              href: "https://yusicheng.me/chia-reference-wallet",
              external: true
            }
          ]
        },
        {
          type: "UX Design + Research",
          title: "Travel Mate",
          body:
            "Your smart travel assistant redesigned, with a focus on reducing planning friction and making trip support feel more intuitive and proactive.",
          links: [
            {
              label: "Legacy case study",
              href: "https://yusicheng.me/travelmate",
              external: true
            }
          ]
        },
        {
          type: "Identity + Onboarding",
          title: "iPersona",
          body:
            "Security for your gaming identity. This project suggests a blend of onboarding design, trust-building, and a clearer first-use experience.",
          links: [
            {
              label: "Legacy case study",
              href: "https://yusicheng.me/ipersonaonboard",
              external: true
            }
          ]
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
          title: "Captain Crimson's Journey",
          body:
            "A Northeastern game design project involving playtesting with children, likely highlighting level readability, engagement, and iterative design decisions informed by observation.",
          note:
            "This is the clearest recovered game project from the old site and should likely remain the lead case study in this section.",
          links: [
            {
              label: "Legacy case study",
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
    "Built as a lightweight GitHub Pages portfolio. More detailed case studies and visuals can be migrated from the legacy Squarespace site next."
};
