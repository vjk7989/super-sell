import type { Article } from "@/types/article";

const officialTextileSources = [
  {
    title: "India Handloom Brand: Authenticity Check",
    url: "https://www.indiahandloombrand.gov.in/vendorsite/view/authenticity-check"
  },
  {
    title: "Ministry of Textiles, Government of India",
    url: "https://texmin.nic.in/"
  },
  {
    title: "Traditional Indian Textiles, CBSE",
    url: "https://cbseacademic.nic.in/web_material/publication/cbse/44TraditionalIndianTextiles-XII.pdf"
  }
];

export const articles: Article[] = [
  {
    slug: "authentic-indian-wear-fabric-weave-craft-guide",
    title: "Authentic Indian Wear: A Practical Guide to Fabric, Weave and Craft",
    excerpt: "Learn how fabric, weave, finishing, and provenance can help you choose Indian wear with greater confidence.",
    description: "A practical Love Loom guide to understanding authentic Indian wear, handwoven fabrics, regional craft, labels, and thoughtful buying.",
    answer: "Authentic Indian wear is best understood through evidence, not appearance alone: examine the fibre and weave, look for natural variation, ask where and how the textile was made, and verify certification claims rather than assuming every handcrafted-looking garment is handloom.",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-09",
    author: "Love Loom Editorial Team",
    heroImage: "/editorial/model-sage-kurta-optimized.webp",
    imageAlt: "Model in a sage embroidered kurta beside handwoven textiles",
    readingTime: "7 min read",
    keywords: ["authentic Indian wear", "Indian textiles", "handloom clothing", "traditional Indian fabric"],
    sections: [
      {
        heading: "What authentic Indian wear really means",
        paragraphs: [
          "Authenticity is not one single look. Indian textile traditions include embroidered, resist-dyed, printed, and handwoven cloth, each shaped by materials, techniques, and regional knowledge. A quiet cotton kurta can be as culturally grounded as an elaborate festive textile.",
          "The useful question is not whether a garment looks traditional enough. Ask what can be known about its fibre, construction, technique, maker, and place of production. Good sellers should describe these details plainly and avoid vague craft claims."
        ]
      },
      {
        heading: "Read the fabric before the label",
        paragraphs: [
          "Begin with touch and structure. Cotton often feels breathable and familiar; linen has a dry, lightly slubbed hand; silk carries natural lustre; blended fabrics may offer easier care or improved drape. None is automatically superior. The right fabric depends on climate, occasion, and how often you expect to wear it.",
          "Handmade processes can leave gentle irregularity in yarn thickness, selvedges, motifs, or embroidery. Variation can be evidence of process, but it is not proof by itself. Machine-made textiles can imitate irregularity, while highly skilled handloom fabric can look remarkably even."
        ],
        bullets: [
          "Check whether the fibre content is stated clearly.",
          "Look at seams, hems, linings, and motif alignment.",
          "Ask whether embellishment is hand-executed, machine-assisted, or printed.",
          "Choose comfort and repeat wear over ceremonial appearance alone."
        ]
      },
      {
        heading: "How to verify handloom and craft claims",
        paragraphs: [
          "When a product is sold under the India Handloom Brand, the official guidance says it should carry the brand label and a registration number that shoppers can verify through the registered-user directory. This is more reliable than relying on a seller's aesthetic language.",
          "Not every legitimate artisan-made product will carry that label, and not every Love Loom product is represented as certified handloom. Where certification is absent, seek transparent descriptions of sourcing and technique rather than treating an unsupported claim as fact."
        ]
      },
      {
        heading: "A thoughtful buying checklist",
        paragraphs: [
          "A useful wardrobe grows through pieces that fit your life. Before buying, consider the climate, care routine, transparency, fit, and number of ways the garment can be worn. An authentic connection to craft matters more when the piece is respected, used, repaired, and kept."
        ],
        bullets: [
          "Does the description name the material and technique?",
          "Can the seller explain care and colour behaviour?",
          "Is the garment comfortable for Hyderabad weather?",
          "Will it work with pieces you already own?",
          "Are certification and artisan claims specific and verifiable?"
        ]
      }
    ],
    faqs: [
      {
        question: "Does uneven texture always mean a fabric is handwoven?",
        answer: "No. Natural variation can occur in handwoven cloth, but texture alone is not proof. Check labels, registration details, sourcing information, and the seller's explanation of the technique."
      },
      {
        question: "Is every traditional-looking garment authentic Indian wear?",
        answer: "Appearance alone cannot establish authenticity. Fibre, technique, provenance, construction, and honest product information are more useful signals."
      },
      {
        question: "Can contemporary silhouettes still be authentic?",
        answer: "Yes. Indian textile knowledge can be expressed through modern silhouettes when materials, techniques, and craft references are represented honestly."
      }
    ],
    sources: officialTextileSources,
    relatedProductIds: ["PROD-005", "PROD-011", "PROD-017"]
  },
  {
    slug: "handloom-vs-powerloom-buyer-guide",
    title: "Handloom vs Powerloom: How to Shop with More Confidence",
    excerpt: "Understand the practical differences between handloom and powerloom textiles without reducing either to a visual stereotype.",
    description: "A clear buyer's guide to handloom and powerloom textiles, labels, authenticity checks, quality, and responsible product descriptions.",
    answer: "Handloom fabric is woven on a manually operated loom, while powerloom fabric uses mechanised loom power. Shoppers should not rely on texture alone: verify official labels where claimed, read fibre and technique details, and judge each garment for quality, purpose, comfort, and honest representation.",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-09",
    author: "Love Loom Editorial Team",
    heroImage: "/editorial/handwoven-textile-detail-optimized.webp",
    imageAlt: "Folded embroidered textiles and wooden thread spools on an artisan table",
    readingTime: "6 min read",
    keywords: ["handloom vs powerloom", "handloom authenticity", "Indian fabric guide", "buy handloom"],
    sections: [
      {
        heading: "The basic difference",
        paragraphs: [
          "Handloom describes cloth woven on a loom operated by hand, while powerloom production uses mechanised power. That production difference can influence scale, rhythm, cost, and the kinds of variation visible in the cloth, but it does not create a simple good-versus-bad hierarchy.",
          "Powerloom textiles can be durable, precise, and appropriate for everyday clothing. Handloom textiles can carry deep skill and regional knowledge. Confidence begins when the product is described accurately and priced in a way that reflects what it is."
        ],
        table: {
          headers: ["Question", "Handloom", "Powerloom"],
          rows: [
            ["Loom operation", "Manually operated", "Mechanically powered"],
            ["Typical scale", "Smaller and slower", "Larger and faster"],
            ["Surface", "May show natural variation", "Often highly consistent"],
            ["Best proof", "Verified label or transparent provenance", "Accurate production description"]
          ]
        }
      },
      {
        heading: "Why visual tests are not enough",
        paragraphs: [
          "Advice such as looking only for slubs, loose threads, or tiny differences can mislead. Skilled weaving may be very even, and industrial fabric may be deliberately textured. A burn test or destructive fibre test is also inappropriate for a finished garment.",
          "Instead, combine visible inspection with documentation. Ask for the textile name, region or production cluster when known, fibre content, weaving technique, and whether a recognised certification supports the claim."
        ]
      },
      {
        heading: "Use official identity signals carefully",
        paragraphs: [
          "India Handloom Brand guidance states that registered products carry the India Handloom logo and registration number, which can be checked against the official directory. The wider Handloom Mark scheme was created to help assure buyers that a marked product is genuinely handwoven.",
          "A missing mark does not automatically mean a textile is inauthentic. Small producers may work outside certification programmes. In those cases, precise sourcing information and a seller willing to distinguish known facts from assumptions become especially important."
        ]
      },
      {
        heading: "Choose according to use",
        paragraphs: [
          "For daily commuting, easy-care blends or powerloom cotton may serve beautifully. For a textile with a particular weaving story, handloom may be the priority. Buy the process you intend to support, but also buy a garment you will genuinely wear."
        ],
        bullets: [
          "Prioritise transparent labels over romantic descriptions.",
          "Ask what care the weave and dye require.",
          "Check comfort, seam quality, and fit as carefully as provenance.",
          "Avoid treating every irregularity as proof of handwork."
        ]
      }
    ],
    faqs: [
      {
        question: "Is handloom always more expensive than powerloom?",
        answer: "Often, but not always. Price depends on fibre, weaving time, design complexity, finishing, supply chain, and the seller's margins."
      },
      {
        question: "Can powerloom clothing still be good quality?",
        answer: "Yes. Quality depends on yarn, construction, finishing, fit, and suitability for use, not loom type alone."
      },
      {
        question: "How can I verify an India Handloom Brand label?",
        answer: "Look for the logo and registration number, then verify that number using the registered-user directory on the official India Handloom Brand website."
      }
    ],
    sources: officialTextileSources,
    relatedProductIds: ["PROD-005", "PROD-011", "PROD-014"]
  },
  {
    slug: "style-kurta-set-work-weekend-festive",
    title: "How to Style a Kurta Set for Work, Weekends and Festive Evenings",
    excerpt: "One well-chosen kurta set can move through the week with changes in layers, footwear, jewellery, and proportion.",
    description: "Practical ways to style a kurta set for office wear, casual weekends, travel, and festive evenings in Hyderabad.",
    answer: "To make a kurta set versatile, keep the core silhouette comfortable and change the visual emphasis: structured layers and closed footwear for work, relaxed separates for weekends, and one considered textile or jewellery accent for festive evenings.",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-09",
    author: "Love Loom Editorial Team",
    heroImage: "/editorial/model-sage-kurta-optimized.webp",
    imageAlt: "Woman wearing a sage kurta set in a textile studio",
    readingTime: "5 min read",
    keywords: ["how to style kurta set", "Indian workwear", "festive kurta styling", "Hyderabad fashion"],
    sections: [
      {
        heading: "Start with proportion and comfort",
        paragraphs: [
          "A versatile kurta set should let you sit, walk, commute, and layer without constant adjustment. Straight and gently relaxed silhouettes are often easier to restyle than highly embellished occasion pieces. Check shoulder fit, arm movement, trouser rise, and whether the hem works with the footwear you already own.",
          "In Hyderabad's warm conditions, breathable fabric and an unforced fit usually matter more than adding extra layers. Let one element carry the outfit: the cut, the textile, or the accessory."
        ]
      },
      {
        heading: "For work: add structure, not stiffness",
        paragraphs: [
          "Keep the palette composed and choose a clean bag, low-profile loafers or sandals, and simple jewellery. A lightweight longline jacket or an open overshirt can make the set feel more tailored without hiding its shape.",
          "If the kurta is richly textured, keep the rest quiet. For a plain set, a patterned scarf used sparingly can add definition while remaining appropriate for meetings."
        ],
        bullets: [
          "Choose a structured tote or compact crossbody.",
          "Keep jewellery close to the body.",
          "Use polished flats, loafers, or low block heels.",
          "Steam the garment and check trouser length before leaving."
        ]
      },
      {
        heading: "For weekends: separate the set",
        paragraphs: [
          "The easiest way to gain more wears is to stop treating the pieces as inseparable. Pair the kurta with relaxed denim or wide trousers, or wear the matching trousers with a crisp cotton shirt. Roll sleeves deliberately and choose a softer bag for a less formal mood.",
          "A dupatta is optional, not compulsory. When you do wear one, use a single loose drape that leaves your hands free."
        ]
      },
      {
        heading: "For festive evenings: make one change count",
        paragraphs: [
          "Festive dressing does not require adding every decorative element at once. Introduce one focal point: an embroidered dupatta, sculptural earrings, a polished sandal, or a small metallic bag. Repeating a colour already present in the textile creates cohesion.",
          "Finish with garment care. Allow perfume to dry before dressing, avoid heavy bags against delicate embroidery, and air the set before storing it."
        ]
      }
    ],
    faqs: [
      {
        question: "Can a kurta set be worn without a dupatta?",
        answer: "Yes. Many contemporary sets are designed to work without one. Use the garment's neckline, sleeve, and trouser proportions to create a complete silhouette."
      },
      {
        question: "What shoes work best with a kurta set?",
        answer: "For daily wear, polished flats, loafers, sandals, and low block heels are dependable. Match the shoe's visual weight to the length and volume of the kurta."
      },
      {
        question: "How can I make one kurta set look different?",
        answer: "Wear the pieces separately, change the footwear and bag, add or remove a layer, and introduce only one strong accessory."
      }
    ],
    sources: [
      {
        title: "Traditional Indian Textiles, CBSE",
        url: "https://cbseacademic.nic.in/web_material/publication/cbse/44TraditionalIndianTextiles-XII.pdf"
      }
    ],
    relatedProductIds: ["PROD-005", "PROD-011", "PROD-017"]
  },
  {
    slug: "indian-fashion-trends-2026-love-loom-edit",
    title: "Indian Fashion Trends 2026: Love Loom's Edit of Soft Tailoring and Handcrafted Texture",
    excerpt: "Our 2026 edit favours wearable colour, softer tailoring, tactile cloth, and Indian silhouettes designed for repeat wear.",
    description: "Love Loom's editorial perspective on Indian fashion trends for 2026, including soft tailoring, handcrafted texture, wearable colour, and versatile sets.",
    answer: "Love Loom's 2026 direction is less about a single viral look and more about useful evolution: softer tailoring, visible textile texture, calm colour combinations, versatile co-ords, and Indian silhouettes that can move between work, weekends, and occasions.",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-09",
    author: "Love Loom Editorial Team",
    heroImage: "/editorial/model-dusty-rose-optimized.webp",
    imageAlt: "Model wearing a dusty rose handwoven co-ord set",
    readingTime: "5 min read",
    keywords: ["Indian fashion trends 2026", "Indian wear trends", "soft tailoring", "handcrafted fashion"],
    sections: [
      {
        heading: "This is an edit, not a forecast",
        paragraphs: [
          "Trend language can make clothing feel disposable. Our approach is different: identify ideas that can refresh a wardrobe without making last season's pieces irrelevant. These are the directions Love Loom is using to curate and style in 2026, not claims about what everyone must wear.",
          "The common thread is ease. Garments should photograph beautifully, but they should also work in real weather, real schedules, and more than one setting."
        ]
      },
      {
        heading: "Soft tailoring replaces hard formality",
        paragraphs: [
          "Shirts, co-ords, trousers, and long layers are becoming more relaxed while retaining clear lines. Look for defined collars, considered seams, and fluid trousers rather than rigid shoulder structures.",
          "The result sits between lounge dressing and office tailoring. It feels polished because proportion and fabric are intentional, not because movement is restricted."
        ]
      },
      {
        heading: "Texture becomes the quiet focal point",
        paragraphs: [
          "Slubbed linen, handloom-inspired surfaces, tonal embroidery, pintucks, and visible weave give neutral clothing depth. Texture is especially useful in ivory, blush, taupe, and sage because it prevents calm colour from feeling flat.",
          "Keep styling simple when the cloth already carries detail. A matte shoe and small earring are often enough."
        ]
      },
      {
        heading: "Wearable colour and versatile sets",
        paragraphs: [
          "Dusty rose, muted sage, warm ivory, and softened jewel tones can move across seasons more easily than highly saturated novelty shades. Sets remain useful because they create an instant look while doubling as separates.",
          "The strongest trend is repeat wear: pieces that can be recombined, layered lightly, cared for realistically, and worn beyond one photographed moment."
        ],
        bullets: [
          "Choose colour that works with at least three existing pieces.",
          "Use texture to add interest before adding embellishment.",
          "Prefer adjustable, relaxed, and layer-friendly fits.",
          "Treat a coordinated set as two wardrobe building blocks."
        ]
      }
    ],
    faqs: [
      {
        question: "What colours are in Love Loom's 2026 edit?",
        answer: "Warm ivory, dusty rose, muted sage, taupe, champagne beige, and softened jewel tones form the core palette."
      },
      {
        question: "Are co-ord sets still useful in 2026?",
        answer: "Yes. Their value comes from versatility: wear the full set for ease, then separate the pieces to create additional outfits."
      },
      {
        question: "How do I follow trends without replacing my wardrobe?",
        answer: "Choose one direction that already suits your clothes, such as softer tailoring or textured fabric, and add it through a single versatile piece."
      }
    ],
    sources: [
      {
        title: "Ministry of Textiles, Government of India",
        url: "https://texmin.nic.in/"
      }
    ],
    relatedProductIds: ["PROD-004", "PROD-009", "PROD-014", "PROD-015"]
  },
  {
    slug: "care-linen-handwoven-clothing-hyderabad",
    title: "How to Care for Linen and Handwoven Clothing in Hyderabad",
    excerpt: "Gentle washing, complete drying, breathable storage, and quick attention to stains help natural fabrics last in a warm climate.",
    description: "A practical guide to washing, drying, ironing, airing, and storing linen and handwoven clothing in Hyderabad's warm climate.",
    answer: "For linen and handwoven clothing in Hyderabad, follow the garment label first, wash gently with mild detergent, avoid overloading or harsh wringing, dry completely in moving air away from severe midday sun, and store clean garments in breathable spaces only after all moisture has gone.",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-09",
    author: "Love Loom Editorial Team",
    heroImage: "/editorial/handwoven-textile-detail-optimized.webp",
    imageAlt: "Embroidered linen garments and thread arranged for careful finishing",
    readingTime: "6 min read",
    keywords: ["linen care India", "handloom clothing care", "garment care Hyderabad", "wash linen kurta"],
    sections: [
      {
        heading: "The care label comes first",
        paragraphs: [
          "Linen, cotton, blends, embroidery, linings, and dyes can require different treatment. Always follow the specific care label before general advice. If the garment says dry clean only, has unstable colour, or contains delicate structured embellishment, do not improvise with a home wash.",
          "When you are unsure, test any cleaning method on a concealed area and ask the seller for guidance."
        ]
      },
      {
        heading: "Wash gently and give fabric room",
        paragraphs: [
          "Use cool or lukewarm water and a mild detergent unless the label says otherwise. Close hooks, turn embellished pieces inside out, and place delicate garments in a laundry bag. Avoid packing the machine tightly because friction can stress fibres and embroidery.",
          "Handwashing should be gentle. Support wet fabric instead of twisting or wringing it. Rinse thoroughly so detergent does not remain in the weave."
        ],
        bullets: [
          "Separate light, dark, and potentially colour-releasing garments.",
          "Treat stains promptly without aggressive rubbing.",
          "Avoid chlorine bleach unless explicitly permitted.",
          "Wash matching set pieces together to keep colour ageing consistent."
        ]
      },
      {
        heading: "Dry fully before Hyderabad storage",
        paragraphs: [
          "Dry garments in moving air and reshape them while damp. Strong direct sun can fade some colours, while slow indoor drying can leave moisture trapped in folds. Choose a bright, ventilated area with shade or gentle sun depending on the care label.",
          "Never store fabric that feels cool or damp. Hyderabad's seasonal humidity makes complete drying and occasional airing especially important for enclosed wardrobes."
        ]
      },
      {
        heading: "Press, fold, and store with less stress",
        paragraphs: [
          "Linen responds well to pressing while slightly damp, but embroidery and delicate surfaces should be pressed from the reverse with a protective cloth. Use the temperature recommended for the most delicate fibre in a blend.",
          "Store clean pieces with breathing room. Fold heavy embroidered garments to avoid stretching; hang lighter dresses on supportive hangers when the construction allows. Refold occasionally so permanent creases do not settle in the same place."
        ]
      }
    ],
    faqs: [
      {
        question: "Can linen be machine washed?",
        answer: "Often yes, but only when the garment label permits it. Use a gentle cycle, mild detergent, cool water, and enough room to reduce friction."
      },
      {
        question: "Should handwoven clothing be dried in direct sun?",
        answer: "Not automatically. Strong sun may fade some dyes. Follow the label and prefer moving air with shade or gentle sunlight for colour-sensitive garments."
      },
      {
        question: "How should embroidered garments be stored?",
        answer: "Store them completely clean and dry, usually folded with light support so heavy embroidery does not stretch the garment."
      }
    ],
    sources: [
      {
        title: "Traditional Indian Textiles, CBSE",
        url: "https://cbseacademic.nic.in/web_material/publication/cbse/44TraditionalIndianTextiles-XII.pdf"
      },
      {
        title: "Ministry of Textiles, Government of India",
        url: "https://texmin.nic.in/"
      }
    ],
    relatedProductIds: ["PROD-005", "PROD-007", "PROD-010", "PROD-014"]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
