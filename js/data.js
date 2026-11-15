export const ANIME_DATA = [
  // =====================================================================
  // 1. DRAGON BALL
  // =====================================================================
  {
    id: "dragon-ball",
    title: "Dragon Ball",
    jpTitle: "ドラゴンボール",
    studio: "Toei Animation // Akira Toriyama",
    era: "1986 – Present",
    themeColor: "#f59e0b",
    secondaryColor: "#1e1b08",
    shaderMode: 3,
    tagline: "Cosmic Martial Arts & Limit-Breaking Ki",
    lore: {
      origin: "Created by Akira Toriyama, Dragon Ball established the modern shonen blueprint—evolving from a mystical martial-arts adventure into an intergalactic clash of gods, Saiyans, and universe-shattering transformations.",
      powerSystem: "Ki (Life Energy) — Warriors manipulate latent spiritual and physical energy to fly, sense life signatures across galaxies, fire concussive energy beams, and ascend through transformations like Super Saiyan, Ultra Instinct, and Ultra Ego.",
      worldBuilding: "Spanning Earth, Planet Namek, the Kais' Sacred World, and twelve parallel universes overseen by the Omni-King Zeno, battles frequently escalate into reality-shaking clashes where sheer willpower shatters dimensional barriers."
    },
    mainLegends: [
      {
        id: "goku",
        name: "Son Goku",
        image: "./assets/characters/goku.png",
        role: "Hero",
        epithet: "The Saiyan Raised on Earth",
        color: "#38bdf8",
        shaderMode: 3,
        signatureMove: "Autonomous Ultra Instinct // Kamehameha",
        bio: "Born Kakarot, a low-class Saiyan warrior who became Earth's greatest defender. Driven by an insatiable hunger to surpass his own limits rather than malice or conquest, Goku continually ascends into divine realms of combat.",
        abilities: ["Kamehameha", "Super Saiyan 1–3 & Blue", "Ultra Instinct (Mastered)", "Instant Transmission", "Spirit Bomb (Genki Dama)"],
        moveDetail: "Separating consciousness from the body, Goku's Ultra Instinct allows every muscle to dodge and counter autonomously with silver-blue divine heat and blinding speed.",
        quote: "Power comes in response to a need, not a desire. You have to create that need.",
        stats: { power: 99, speed: 100, iq: 92, hax: 95 }
      },
      {
        id: "vegeta",
        name: "Vegeta",
        image: "./assets/characters/vegeta.png",
        role: "Hero",
        epithet: "Prince of All Saiyans",
        color: "#a855f7",
        shaderMode: 1,
        signatureMove: "Ultra Ego // Final Flash",
        bio: "Once a ruthless planetary conqueror under Frieza, Vegeta's fierce Saiyan pride evolved into an unbreakable resolve to protect his family and surpass Goku on his own terms—forging a path of Destruction energy.",
        abilities: ["Galick Gun", "Final Flash", "Super Saiyan Blue Evolution", "Ultra Ego", "Forced Spirit Fission"],
        moveDetail: "Channeling the power of a God of Destruction, Ultra Ego converts battle damage and fighting spirit directly into exponentially escalating violet destructive Ki.",
        quote: "Trespass into the domain of the Gods... and use that might to conquer Jiren!",
        stats: { power: 98, speed: 96, iq: 95, hax: 93 }
      },
      {
        id: "frieza",
        name: "Frieza",
        image: "./assets/characters/frieza.png",
        role: "Villain",
        epithet: "Emperor of the Universe",
        color: "#e879f9",
        shaderMode: 1,
        signatureMove: "Black Frieza // Death Beam",
        bio: "A sadistic galactic tyrant whose annihilation of Planet Vegeta ignited the legend of the Super Saiyan. Unlike most villains, Frieza possesses terrifying latent potential—unlocking Golden and Black forms through sheer discipline.",
        abilities: ["Death Beam", "Supernova", "Golden Frieza", "Black Frieza", "Telekinetic Planet Destruction"],
        moveDetail: "After ten years of training inside a Hyperbolic Time Chamber, Black Frieza achieved a pitch-obsidian sheen capable of one-shotting Ultra Instinct and Ultra Ego simultaneously.",
        quote: "I will never forgive you... I will crush you into dust!",
        stats: { power: 100, speed: 99, iq: 94, hax: 91 }
      },
      {
        id: "broly",
        name: "Broly",
        image: "./assets/characters/broly.png",
        role: "Villain",
        epithet: "The Legendary Super Saiyan",
        color: "#22c55e",
        shaderMode: 3,
        signatureMove: "Gigantic Roar // Full Power Berserk",
        bio: "Exiled to the harsh wasteland planet Vampa as an infant, Broly possesses an unprecedented mutation that causes his power to adapt and skyrocket mid-battle, eventually shattering reality itself during his clash with Gogeta.",
        abilities: ["Wrathful (Ikari) State", "Full Power Super Saiyan", "Gigantic Roar", "Omega Blaster", "Reactive Power Adaptation"],
        moveDetail: "Erupting in emerald bio-electric Ki, Broly unleashes relentless, earth-shattering energy barrages that force space-time to fracture under sheer raw force.",
        quote: "Kakarot...!",
        stats: { power: 99, speed: 94, iq: 75, hax: 90 }
      }
    ],
    specialLegends: [
      {
        id: "gohan",
        name: "Son Gohan",
        image: "./assets/characters/gohan.png",
        role: "Hero",
        epithet: "Gohan Beast",
        color: "#f43f5e",
        signatureMove: "Special Beam Cannon (Beast)",
        bio: "Goku's eldest son, a scholar who harbors dormant rage-fueled potential exceeding even pure-blooded Saiyans. Awakening Gohan Beast unlocked silver hair, crimson eyes, and an overwhelming crimson-violet aura.",
        abilities: ["Super Saiyan 2", "Potential Unleashed (Ultimate)", "Gohan Beast", "Masenko", "Special Beam Cannon"],
        moveDetail: "Focusing his Beast aura into his fingertips, Gohan fires a spiral crimson-and-black Special Beam Cannon capable of piercing the toughest defenses in existence.",
        quote: "Fight you? No, I want to kill you.",
        stats: { power: 99, speed: 97, iq: 96, hax: 92 }
      },
      {
        id: "future-trunks",
        name: "Future Trunks",
        image: "./assets/characters/future-trunks.png",
        role: "Hero",
        epithet: "The Hope of the Future",
        color: "#38bdf8",
        signatureMove: "Sword of Hope",
        bio: "Traveling back from an apocalyptic timeline devastated by Androids and Goku Black, Trunks fights without hesitation—ending threats swiftly with his broadsword and Super Saiyan Rage.",
        abilities: ["Super Saiyan Rage", "Burning Attack", "Shining Sword Attack", "Heat Dome Attack", "Sword of Hope"],
        moveDetail: "Gathering the collective Ki of surviving humanity into his shattered blade, Trunks forms a colossal lightsaber of pure light to bisect immortal foes.",
        quote: "If they set that Android free, it will be the end of all of us!",
        stats: { power: 92, speed: 93, iq: 91, hax: 88 }
      },
      {
        id: "piccolo",
        name: "Piccolo",
        image: "./assets/characters/piccolo.png",
        role: "Hero",
        epithet: "Orange Piccolo",
        color: "#fb923c",
        signatureMove: "Giant Form // Light Grenade",
        bio: "Once the Demon King's reincarnation and now Gohan's lifelong mentor and Universe 7's premier tactician, Piccolo unlocked his dormant Namekian pride to achieve the colossal Orange Piccolo form.",
        abilities: ["Orange Piccolo", "Special Beam Cannon", "Hellzone Grenade", "Regeneration", "Namekian Giant Form"],
        moveDetail: "Gifted 'a bit extra' by Shenron, Piccolo transforms into a towering, crimson-eyed juggernaut whose physical strikes rival divine transformations.",
        quote: "Sometimes, we have to look beyond what we want and do what's best.",
        stats: { power: 94, speed: 90, iq: 98, hax: 90 }
      },
      {
        id: "cell",
        name: "Cell",
        image: "./assets/characters/cell.png",
        role: "Villain",
        epithet: "The Ultimate Bio-Android",
        color: "#10b981",
        signatureMove: "Solar Kamehameha",
        bio: "Engineered by Dr. Gero using the cells of Goku, Vegeta, Piccolo, and Frieza, Cell absorbed Androids 17 and 18 to attain his 'Perfect' form—hosting the Cell Games to test his own perfection.",
        abilities: ["Solar Kamehameha", "Namekian Regeneration", "Zenkai Boosts", "Instant Transmission", "Cell Juniors"],
        moveDetail: "Combining Saiyan genetics with Frieza's durability, Cell charges a Solar Kamehameha with enough output to obliterate the entire solar system.",
        quote: "You're either perfect, or you're not me.",
        stats: { power: 90, speed: 91, iq: 95, hax: 94 }
      }
    ]
  },

  // =====================================================================
  // 2. NARUTO
  // =====================================================================
  {
    id: "naruto",
    title: "Naruto",
    jpTitle: "ナルト",
    studio: "Studio Pierrot // Masashi Kishimoto",
    era: "2002 – 2017",
    themeColor: "#fb923c",
    secondaryColor: "#1c0e06",
    shaderMode: 3,
    tagline: "Will of Fire, Chakra Natures & Ocular Dojutsu",
    lore: {
      origin: "Created by Masashi Kishimoto, Naruto weaves Japanese folklore, shinobi espionage, and generational trauma into a sweeping saga about breaking cycles of hatred through bonds and perseverance.",
      powerSystem: "Chakra & Dojutsu — Shinobi mold physical and spiritual energy through hand seals to execute elemental Ninjutsu, optical illusions (Genjutsu), Sage Mode natural energy, and legendary eye techniques like the Sharingan and Rinnegan.",
      worldBuilding: "Divided into the Five Great Shinobi Nations—led by Hidden Leaf (Konoha)—the ninja world balances fragile peace against rogue organizations like the Akatsuki and ancient Otsutsuki chakra progenitors."
    },
    mainLegends: [
      {
        id: "naruto-uzumaki",
        name: "Naruto Uzumaki",
        image: "./assets/characters/naruto-uzumaki.png",
        role: "Hero",
        epithet: "The Seventh Hokage // Child of Prophecy",
        color: "#fb923c",
        shaderMode: 3,
        signatureMove: "Baryon Mode // Six Paths Rasenshuriken",
        bio: "Ostracized as the Jinchuriki host of the Nine-Tailed Fox Kurama, Naruto turned his loneliness into an unyielding resolve—befriending Kurama, uniting the shinobi world, and achieving his dream of becoming Hokage.",
        abilities: ["Kurama Chakra Mode", "Six Paths Sage Mode", "Baryon Mode", "Wind Style: Rasenshuriken", "Truth-Seeking Orbs"],
        moveDetail: "Fusing Naruto and Kurama's chakra like nuclear fusion, Baryon Mode grants overwhelming speed and reflexes while shaving away an opponent's lifespan on every blow.",
        quote: "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!",
        stats: { power: 98, speed: 98, iq: 90, hax: 96 }
      },
      {
        id: "sasuke-uchiha",
        name: "Sasuke Uchiha",
        image: "./assets/characters/sasuke-uchiha.png",
        role: "Hero",
        epithet: "The Shadow Hokage",
        color: "#a855f7",
        shaderMode: 1,
        signatureMove: "Indra's Arrow // Rinnegan Amenotejikara",
        bio: "Sole survivor of the Uchiha clan massacre, Sasuke walked a dark path of vengeance before standing alongside Naruto to save the world—now patrolling the shadows as Konoha's ultimate protector.",
        abilities: ["Eternal Mangekyou Sharingan", "Six-Tomoe Rinnegan", "Perfect Susanoo", "Amaterasu & Kagutsuchi", "Indra's Arrow"],
        moveDetail: "Channeling Tailed Beast chakra into his Susanoo bow, Sasuke unleashes Indra's Arrow—a catastrophic lightning bolt equal to Naruto's Six Paths Ultra-Big Ball Rasenshuriken.",
        quote: "I have long since closed my eyes... My only goal is in the darkness.",
        stats: { power: 97, speed: 99, iq: 97, hax: 98 }
      },
      {
        id: "madara-uchiha",
        name: "Madara Uchiha",
        image: "./assets/characters/madara-uchiha.png",
        role: "Villain",
        epithet: "Ghost of the Uchiha",
        color: "#ef4444",
        shaderMode: 2,
        signatureMove: "Infinite Tsukuyomi // Tengai Shinsei",
        bio: "Co-founder of Konoha alongside Hashirama Senju, Madara grew disillusioned with endless war and orchestrated a decades-long master plan to trap humanity inside an eternal dream of peace.",
        abilities: ["Dual Rinnegan & Limbo", "Ten-Tails Jinchuriki", "Tengai Shinsei (Dual Meteors)", "Perfect Susanoo", "Infinite Tsukuyomi"],
        moveDetail: "Summoning invisible clones from the dimension of Limbo while pulling twin meteors from orbit, Madara single-handedly dismantled an entire Shinobi Alliance.",
        quote: "Wake up to reality! Nothing ever goes as planned in this accursed world.",
        stats: { power: 99, speed: 96, iq: 98, hax: 99 }
      },
      {
        id: "obito-uchiha",
        name: "Obito Uchiha",
        image: "./assets/characters/obito-uchiha.png",
        role: "Villain",
        epithet: "The Masked Man // Tobi",
        color: "#f43f5e",
        shaderMode: 2,
        signatureMove: "Kamui Intangibility // Ten-Tails Coffin",
        bio: "Once a kind-hearted Uchiha who gave his Sharingan to Kakashi, Obito's spirit shattered after witnessing Rin's death—prompting him to don a mask, manipulate the Akatsuki, and ignite the Fourth Great Ninja War.",
        abilities: ["Kamui Spatial Dimension", "Wood Style: Cutting Sprigs", "Rinnegan Six Paths", "Ten-Tails Jinchuriki", "Sword of Nunoboko"],
        moveDetail: "Slipping parts of his body into a personal pocket dimension via Kamui, Obito phases effortlessly through physical attacks before warping targets into oblivion.",
        quote: "The moment people come to know love, they run the risk of carrying hate.",
        stats: { power: 95, speed: 95, iq: 94, hax: 99 }
      }
    ],
    specialLegends: [
      {
        id: "itachi-uchiha",
        name: "Itachi Uchiha",
        image: "./assets/characters/itachi-uchiha.png",
        role: "Hero",
        epithet: "The Clan Killer // True Shinobi",
        color: "#dc2626",
        signatureMove: "Tsukuyomi // Totsuka Blade",
        bio: "A prodigy who slaughtered his own clan at age 13 to prevent a civil war and protect his younger brother Sasuke, bearing the hatred of the world in silence while spying on the Akatsuki from within.",
        abilities: ["Tsukuyomi (72-Hour Torture)", "Amaterasu", "Susanoo with Totsuka Blade", "Yata Mirror", "Izanami"],
        moveDetail: "Distorting time inside a crimson moon genjutsu, Itachi inflicts three days of psychological agony in a single second—or seals foes eternally with the ethereal Totsuka Blade.",
        quote: "People live their lives bound by what they accept as correct and true.",
        stats: { power: 91, speed: 94, iq: 100, hax: 98 }
      },
      {
        id: "kakashi-hatake",
        name: "Kakashi Hatake",
        image: "./assets/characters/kakashi-hatake.png",
        role: "Hero",
        epithet: "The Copy Ninja // Sixth Hokage",
        color: "#38bdf8",
        signatureMove: "Kamui Raikiri // 1,000 Jutsu",
        bio: "Son of the White Fang and mentor to Team 7, Kakashi mastered over a thousand techniques with Obito's Sharingan before rising to become the Sixth Hokage who guided Konoha into a new era.",
        abilities: ["Raikiri (Lightning Blade)", "Kamui Snipe", "Purple Lightning (Shiden)", "1,000 Copied Jutsu", "Dual Mangekyou Susanoo"],
        moveDetail: "Focusing high-frequency lightning into his palm while distorting space-time with Kamui, Kakashi strikes at lethal assassination speed.",
        quote: "In the ninja world, those who break the rules are scum, but those who abandon their friends are worse than scum.",
        stats: { power: 90, speed: 94, iq: 99, hax: 93 }
      },
      {
        id: "pain-nagato",
        name: "Pain (Nagato)",
        image: "./assets/characters/pain-nagato.png",
        role: "Villain",
        epithet: "Leader of the Akatsuki // God of Rain",
        color: "#8b5cf6",
        signatureMove: "Shinra Tensei // Chibaku Tensei",
        bio: "War orphan of the Hidden Rain trained by Jiraiya, Nagato wielded Madara's Rinnegan through Six Paths corpses—seeking to force world peace by inflicting overwhelming pain upon humanity.",
        abilities: ["Six Paths of Pain", "Shinra Tensei (Almighty Push)", "Chibaku Tensei (Planetary Devastation)", "Bansho Ten'in", "Rinne Rebirth"],
        moveDetail: "Repelling all matter outward with immense gravitational force, Pain leveled the entire Hidden Leaf Village in a single cataclysmic shockwave.",
        quote: "Those who do not understand true pain can never understand true peace.",
        stats: { power: 94, speed: 89, iq: 95, hax: 97 }
      },
      {
        id: "minato-namikaze",
        name: "Minato Namikaze",
        image: "./assets/characters/minato-namikaze.png",
        role: "Hero",
        epithet: "The Yellow Flash of the Leaf",
        color: "#facc15",
        signatureMove: "Flying Raijin Level 2 // Rasengan",
        bio: "The Fourth Hokage and Naruto's father, feared across enemy nations with a 'flee-on-sight' order due to his instantaneous space-time teleportation and unmatched battle intellect.",
        abilities: ["Flying Thunder God (Hiraishin)", "Rasengan (Creator)", "Sage Mode", "Nine-Tails Chakra Mode", "Reaper Death Seal"],
        moveDetail: "Teleporting instantaneously between marked kunai formulas, Minato appears above opponents mid-strike to slam a high-rotation Rasengan into their spine.",
        quote: "A shinobi's true measure is not how he lives, but how he dies.",
        stats: { power: 93, speed: 100, iq: 99, hax: 95 }
      }
    ]
  },

  // =====================================================================
  // 3. ONE PIECE
  // =====================================================================
  {
    id: "one-piece",
    title: "One Piece",
    jpTitle: "ワンピース",
    studio: "Toei Animation // Eiichiro Oda",
    era: "1999 – Present",
    themeColor: "#f43f5e",
    secondaryColor: "#1a060b",
    shaderMode: 3,
    tagline: "Absolute Freedom, Devil Fruits & Conqueror's Haki",
    lore: {
      origin: "Created by Eiichiro Oda, One Piece is the highest-selling manga in history—a grand maritime epic blending joyous adventure with deep political intrigue, Void Century mysteries, and liberation against tyranny.",
      powerSystem: "Devil Fruits & Haki — Consuming mystical Devil Fruits grants bizarre, reality-altering powers at the cost of swimming, while Haki (Observation, Armament, and Supreme King Conqueror's) weaponizes raw willpower to bypass all defenses.",
      worldBuilding: "Divided by the Red Line and the treacherous Grand Line, the seas are locked in a three-way standoff between the World Government, the Marine Admirals, and the Four Emperors (Yonko)."
    },
    mainLegends: [
      {
        id: "luffy",
        name: "Monkey D. Luffy",
        image: "./assets/characters/luffy.png",
        role: "Hero",
        epithet: "Sun God Nika // Emperor of the Sea",
        color: "#f8fafc",
        shaderMode: 3,
        signatureMove: "Gear 5: Bajrang Gun // Conqueror's Coating",
        bio: "Captain of the Straw Hat Pirates who refuses to rule anyone—seeking the One Piece solely to become the freest man on the seas. Awakening the Hito Hito no Mi, Model: Nika turned his rubber body into pure cartoon liberation.",
        abilities: ["Gear 5 (Sun God Nika)", "Advanced Conqueror's Haki", "Future Sight Observation", "Internal Destruction Armament", "Bajrang Gun"],
        moveDetail: "Turning the ground, lightning, and his own colossal fist into rubber, Luffy channels Supreme King Haki to deliver an island-sized punch from the heavens.",
        quote: "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean is the Pirate King!",
        stats: { power: 98, speed: 97, iq: 88, hax: 99 }
      },
      {
        id: "zoro",
        name: "Roronoa Zoro",
        image: "./assets/characters/zoro.png",
        role: "Hero",
        epithet: "King of Hell // Pirate Hunter",
        color: "#10b981",
        shaderMode: 1,
        signatureMove: "King of Hell: Three-Sword Serpent",
        bio: "First mate of the Straw Hats and master of Santoryu (Three-Sword Style), bound by an unbreakable oath to defeat Dracule Mihawk and become the World's Greatest Swordsman.",
        abilities: ["Three-Sword Style (Santoryu)", "Enma & Conqueror's Coating", "Asura: Nine-Sword Style", "King of Hell Flames", "Foxfire Style (Flame Rend)"],
        moveDetail: "Wreathing his three blades in emerald hellfire and black-red Conqueror's lightning, Zoro unleashes dragon-shaped vacuum slashes that cleave through sky and stone.",
        quote: "Nothing happened.",
        stats: { power: 95, speed: 94, iq: 86, hax: 91 }
      },
      {
        id: "kaido",
        name: "Kaido",
        image: "./assets/characters/kaido.png",
        role: "Villain",
        epithet: "King of the Beasts // Strongest Creature",
        color: "#38bdf8",
        shaderMode: 3,
        signatureMove: "Flaming Drum Dragon // Thunder Bagua",
        bio: "Former Emperor of the Sea who ruled Wano Country with an iron fist. Possessing near-indestructible scales and the Mythical Azure Dragon fruit, Kaido lived for a glorious war that could topple the world.",
        abilities: ["Uo Uo no Mi, Model: Azure Dragon", "Thunder Bagua (Conqueror's Haki)", "Boro Breath", "Flaming Drum Dragon", "Drunken Bagua"],
        moveDetail: "Coating his massive dragon form in blazing magma-like flames while clashing with Supreme King Haki, Kaido turns the entire sky into a volcanic storm.",
        quote: "Haki transcends all!",
        stats: { power: 99, speed: 95, iq: 90, hax: 93 }
      },
      {
        id: "blackbeard",
        name: "Marshall D. Teach",
        image: "./assets/characters/blackbeard.png",
        role: "Villain",
        epithet: "Blackbeard // Emperor of Darkness",
        color: "#6366f1",
        shaderMode: 2,
        signatureMove: "Black Vortex // Seaquake Shatter",
        bio: "The cunning orchestrator of the Marineford War and the only known person in history to wield two Devil Fruits simultaneously—combining the gravity of Darkness with the world-destroying Tremor-Tremor fruit.",
        abilities: ["Yami Yami no Mi (Darkness)", "Gura Gura no Mi (Earthquakes)", "Devil Fruit Nullification", "Black Hole Absorption", "Tectonic Air-Cracking"],
        moveDetail: "Pulling victims into a pitch-black gravitational abyss that cancels Devil Fruit powers, Blackbeard follows up with a point-blank quake punch that fractures the air itself.",
        quote: "A man's dream will never die!",
        stats: { power: 97, speed: 86, iq: 96, hax: 99 }
      }
    ],
    specialLegends: [
      {
        id: "shanks",
        name: "Red-Haired Shanks",
        image: "./assets/characters/shanks.png",
        role: "Hero",
        epithet: "Killer of Observation Haki",
        color: "#ef4444",
        signatureMove: "Divine Departure (Kamusari)",
        bio: "The Emperor who inspired Luffy's journey and sacrificed his left arm for the new era. Despite having no Devil Fruit, Shanks possesses the most overwhelming Conqueror's Haki in the modern world.",
        abilities: ["Divine Departure", "Wi-Fi Conqueror's Haki", "Observation Killing", "Master Swordsmanship (Gryphon)", "Future Sight"],
        moveDetail: "Projecting pure Supreme King Haki across miles of ocean or concentrating it into his saber Gryphon, Shanks obliterates entire pirate crews in a single flash.",
        quote: "By experiencing both victory and defeat, running away and shedding tears, a man will become a man.",
        stats: { power: 98, speed: 98, iq: 97, hax: 96 }
      },
      {
        id: "law",
        name: "Trafalgar D. Water Law",
        image: "./assets/characters/law.png",
        role: "Hero",
        epithet: "Surgeon of Death",
        color: "#facc15",
        signatureMove: "K-Room: Puncture Wille",
        bio: "Captain of the Heart Pirates and wielder of the Ultimate Ope Ope no Mi, Law operates as a brilliant strategist whose spatial 'ROOM' turns everything inside into his personal operating table.",
        abilities: ["Ope Ope no Mi (Awakened)", "K-Room & R-Room", "Puncture Wille", "Gamma Knife", "Shambles Teleportation"],
        moveDetail: "Extending his blade to pierce through an island's bedrock, Law releases a massive internal shockwave that bypasses external armor completely.",
        quote: "The weak don't get to decide anything, not even how they die.",
        stats: { power: 93, speed: 92, iq: 98, hax: 99 }
      },
      {
        id: "ace",
        name: "Portgas D. Ace",
        image: "./assets/characters/ace.png",
        role: "Hero",
        epithet: "Fire Fist Ace",
        color: "#f97316",
        signatureMove: "Great Flame Commandment: Flame Emperor",
        bio: "Luffy's sworn brother and 2nd Division Commander of the Whitebeard Pirates, who died shielding Luffy at Marineford—leaving behind a legacy of fire inherited by Sabo.",
        abilities: ["Mera Mera no Mi (Flame-Flame)", "Fire Fist (Hiken)", "Flame Emperor (Entei)", "Firefly: Fiery Doll", "Conqueror's Haki"],
        moveDetail: "Condensing towering spirals of inferno into a miniature sun above his palm, Ace hurls a blazing sphere capable of consuming an entire island.",
        quote: "Thank you for loving me!",
        stats: { power: 89, speed: 91, iq: 88, hax: 89 }
      },
      {
        id: "doflamingo",
        name: "Donquixote Doflamingo",
        image: "./assets/characters/doflamingo.png",
        role: "Villain",
        epithet: "Heavenly Yaksha",
        color: "#ec4899",
        signatureMove: "Birdcage // Sixteen Holy Bullets",
        bio: "Former Celestial Dragon turned underground broker and tyrant of Dressrosa, Doflamingo manipulated nations like marionettes using his awakened String-String fruit.",
        abilities: ["Ito Ito no Mi (Awakened)", "Birdcage", "Parasite Puppetry", "Overheat Whip", "Conqueror's Haki"],
        moveDetail: "Converting surrounding buildings into thousands of razor-sharp strings infused with Armament Haki, Doflamingo cages and shreds entire cities.",
        quote: "Justice will prevail, you say? Of course it will! Whoever wins this war becomes justice!",
        stats: { power: 90, speed: 91, iq: 96, hax: 94 }
      }
    ]
  },

  // =====================================================================
  // 4. BLEACH
  // =====================================================================
  {
    id: "bleach",
    title: "Bleach",
    jpTitle: "ブリーチ",
    studio: "Studio Pierrot // Tite Kubo",
    era: "2004 – Present (TYBW)",
    themeColor: "#06b6d4",
    secondaryColor: "#05141a",
    shaderMode: 1,
    tagline: "Soul Reapers, Zanpakuto Bankai & Reiatsu Pressure",
    lore: {
      origin: "Created by Tite Kubo, Bleach is renowned for razor-sharp visual style, poetic minimalism, and high-stakes swordplay between Soul Reapers (Shinigami), Hollows, and the Quincy empire.",
      powerSystem: "Reiatsu & Zanpakuto — Spiritual pressure dictates combat supremacy; crushing Reiatsu can paralyze weaker foes, while unlocking a Zanpakuto's true name releases Shikai and reality-warping Bankai states.",
      worldBuilding: "Maintaining cosmic balance across the Human World, the afterlife realm of Soul Society, the hollow wasteland Hueco Mundo, and the Royal Palace of the Soul King."
    },
    mainLegends: [
      {
        id: "ichigo",
        name: "Ichigo Kurosaki",
        image: "./assets/characters/ichigo.png",
        role: "Hero",
        epithet: "Substitute Soul Reaper // Hybrid Transcendent",
        color: "#00f0ff",
        shaderMode: 1,
        signatureMove: "True Bankai // Getsuga Jujisho",
        bio: "A teenager who inherited Shinigami, Hollow, Quincy, and Fullbringer bloodlines—forging his dual Zangetsu blades into a transcendent force capable of shattering the Soul King's successor.",
        abilities: ["True Zangetsu (Dual Blades)", "Horn of Salvation", "Getsuga Tensho & Jujisho", "Gran Rey Cero Getsuga", "Blut Vene"],
        moveDetail: "Firing two intersecting crescent waves of pitch-black and electric-blue Reiatsu, Ichigo unleashes a cross-shaped energy blast that cleaves the heavens.",
        quote: "If fate is a millstone, then we are the grist. There is nothing we can do. So I wish for strength.",
        stats: { power: 99, speed: 99, iq: 88, hax: 95 }
      },
      {
        id: "kenpachi",
        name: "Kenpachi Zaraki",
        image: "./assets/characters/kenpachi.png",
        role: "Hero",
        epithet: "Captain of Squad 11 // The True Kenpachi",
        color: "#facc15",
        shaderMode: 3,
        signatureMove: "Bankai: Nozarashi // Two-Handed Kendo",
        bio: "A battle-obsessed monster who wore a Reiatsu-draining eyepatch just to prolong fights—until unlocking his Zanpakuto Nozarashi allowed him to slice clean through a falling meteor and the vacuum of space.",
        abilities: ["Shikai & Bankai: Nozarashi", "Overwhelming Raw Reiatsu", "Zanjutsu Master", "Eye-Patch Release", "Spatial Cleaving"],
        moveDetail: "Entering a crimson-skinned oni state in Bankai, Kenpachi swings with pure physical brutality capable of tearing apart reality and colossal foes alike.",
        quote: "Sanity? Sorry, but I don't remember having such a useless thing in the first place.",
        stats: { power: 100, speed: 93, iq: 80, hax: 90 }
      },
      {
        id: "aizen",
        name: "Sosuke Aizen",
        image: "./assets/characters/aizen.png",
        role: "Villain",
        epithet: "The Transcendent Mastermind",
        color: "#a855f7",
        shaderMode: 2,
        signatureMove: "Kyoka Suigetsu // Hado #99: Goryutenmetsu",
        bio: "The soft-spoken Captain of Squad 5 who orchestrated Soul Society's betrayal from the shadows, fusing with the Hogyoku to evolve into an immortal, transcendent being.",
        abilities: ["Kyoka Suigetsu (Complete Hypnosis)", "Hogyoku Immortality", "Full-Incantation Hado #90 & #99", "Reiatsu Crush", "Illusion Fusion"],
        moveDetail: "Controlling all five senses of anyone who witnesses his blade's release, Aizen fractures reality like shattered mirror glass—even deceiving Yhwach's Almighty sight.",
        quote: "Admiration is the emotion furthest from understanding.",
        stats: { power: 98, speed: 96, iq: 100, hax: 100 }
      },
      {
        id: "yhwach",
        name: "Yhwach",
        image: "./assets/characters/yhwach.png",
        role: "Villain",
        epithet: "Father of the Quincy // The Almighty",
        color: "#ef4444",
        shaderMode: 2,
        signatureMove: "The Almighty (Future Alteration)",
        bio: "Emperor of the Wandenreich and son of the Soul King who absorbed his father's power—wielding 'The Almighty' to foresee every possible timeline and rewrite the future at will.",
        abilities: ["The Almighty (Omniscience & Rewrite)", "Soul King Absorption", "Auswahlen", "Sankt Altar", "Yamamoto's Stolen Bankai"],
        moveDetail: "Cascading pitch-black shadows filled with countless crimson eyes, Yhwach breaks Bankai blades in the future before they are even swung.",
        quote: "Everything in this world exists to be taken by me.",
        stats: { power: 100, speed: 97, iq: 98, hax: 100 }
      }
    ],
    specialLegends: [
      {
        id: "byakuya",
        name: "Byakuya Kuchiki",
        image: "./assets/characters/byakuya.png",
        role: "Hero",
        epithet: "Captain of Squad 6",
        color: "#f472b6",
        signatureMove: "Senbonzakura Kageyoshi // Senkei",
        bio: "Head of the noble Kuchiki clan and master of Shunpo flash-step, who disperses his blade into millions of razor-sharp cherry blossom petals controlled with surgical elegance.",
        abilities: ["Bankai: Senbonzakura Kageyoshi", "Senkei (Slaughter Scene)", "Shukei: Hakuteiken", "Utsusemi Flash Step", "High-Level Kido"],
        moveDetail: "Condensing millions of glowing petals into wings and a pure white blade, Byakuya delivers a decisive, blinding strike.",
        quote: "You are a thousand years too early to defeat me.",
        stats: { power: 92, speed: 96, iq: 95, hax: 91 }
      },
      {
        id: "urahara",
        name: "Kisuke Urahara",
        image: "./assets/characters/urahara.png",
        role: "Hero",
        epithet: "The Unknown Means // Former Squad 12 Captain",
        color: "#22c55e",
        signatureMove: "Bankai: Kannonbiraki Benihime Aratame",
        bio: "The eccentric candy-shop owner and greatest scientific mind in Soul Society—creator of the Hogyoku whose Bankai restructures anything it touches.",
        abilities: ["Bankai: Benihime Aratame", "Hogyoku Inventor", "Custom Sealing Kido", "Portable Gigai", "Unmatched Tactical Prep"],
        moveDetail: "Manifesting a towering puppet-like deity, Urahara's Bankai dissects and stitches matter back together—restructuring his own body or tearing open enemy defenses.",
        quote: "A warrior who has lost his fear cannot be trusted in battle.",
        stats: { power: 91, speed: 93, iq: 100, hax: 98 }
      },
      {
        id: "ulquiorra",
        name: "Ulquiorra Cifer",
        image: "./assets/characters/ulquiorra.png",
        role: "Villain",
        epithet: "Cuatro Espada // Aspect of Nihilism",
        color: "#10b981",
        signatureMove: "Segunda Etapa // Lanza del Relampago",
        bio: "Aizen's cold, analytical 4th Espada and the only Arrancar to achieve a secret second Resurreccion stage—seeking to understand the meaning of the human 'heart' in his final moments.",
        abilities: ["Resurreccion: Murcielago", "Segunda Etapa", "Lanza del Relampago", "Cero Oscuras", "High-Speed Regeneration"],
        moveDetail: "Forcing emerald Reiatsu into a volatile javelin of pure destruction, Ulquiorra hurls an explosion dwarfing the entire Las Noches fortress.",
        quote: "What is a heart? If I rip open your chest, will I see it there?",
        stats: { power: 93, speed: 96, iq: 94, hax: 90 }
      },
      {
        id: "grimmjow",
        name: "Grimmjow Jaegerjaquez",
        image: "./assets/characters/grimmjow.png",
        role: "Villain",
        epithet: "Sexta Espada // Panther King",
        color: "#38bdf8",
        signatureMove: "Pantera // Desgarron",
        bio: "Ferocious, battle-hungry 6th Espada who views Ichigo as his eternal rival—fighting with savage close-quarters speed and lethal claw-wave projectiles.",
        abilities: ["Resurreccion: Pantera", "Desgarron (10-Claw Blades)", "Gran Rey Cero", "Sonido Speed", "Garra de la Pantera"],
        moveDetail: "Generating ten massive, jagged blades of solidified blue Reiatsu from his fingertips, Grimmjow slashes through space like a predatory beast.",
        quote: "I am the king!",
        stats: { power: 90, speed: 95, iq: 84, hax: 87 }
      }
    ]
  },

  // =====================================================================
  // 5. JUJUTSU KAISEN
  // =====================================================================
  {
    id: "jjk",
    title: "Jujutsu Kaisen",
    jpTitle: "呪術廻戦",
    studio: "MAPPA // Gege Akutami",
    era: "2020 – Present",
    themeColor: "#9d00ff",
    secondaryColor: "#11041f",
    shaderMode: 2,
    tagline: "Cursed Energy, Binding Vows & Domain Expansions",
    lore: {
      origin: "Created by Gege Akutami, Jujutsu Kaisen redefined modern dark-fantasy action with razor-sharp martial choreography, ruthless stakes, and a hyper-tactical power system rooted in negative human emotion.",
      powerSystem: "Cursed Energy & Domain Expansion — Sorcerers channel negative emotions into Innate Techniques, Reverse Cursed Technique healing, Black Flash spatial distortions, and Domain Expansions that trap foes inside a guaranteed-hit metaphysical barrier.",
      worldBuilding: "Behind modern Japan's veil, Tokyo and Kyoto Jujutsu High battle Special Grade Cursed Spirits, ancient reincarnated sorcerers in the Culling Game, and the King of Curses himself."
    },
    mainLegends: [
      {
        id: "gojo",
        name: "Satoru Gojo",
        image: "./assets/characters/gojo.png",
        role: "Hero",
        epithet: "The Strongest Jujutsu Sorcerer",
        color: "#00f0ff",
        shaderMode: 2,
        signatureMove: "Hollow Technique: Purple // Unlimited Void",
        bio: "The first sorcerer in 400 years born with both the Six Eyes and the Limitless technique—whose very existence shifted the balance of the entire world and forced curses into hiding.",
        abilities: ["Neutral Limitless (Infinity)", "Cursed Technique Lapse: Blue", "Reversal: Red", "Hollow Technique: Purple", "Domain Expansion: Unlimited Void"],
        moveDetail: "Colliding attraction (Blue) and repulsion (Red) infinities together, Gojo fires an imaginary mass that erases everything in its trajectory—or floods minds with infinite sensory data inside Unlimited Void.",
        quote: "Throughout Heaven and Earth, I alone am the honored one.",
        stats: { power: 99, speed: 99, iq: 98, hax: 100 }
      },
      {
        id: "yuji",
        name: "Yuji Itadori",
        image: "./assets/characters/yuji.png",
        role: "Hero",
        epithet: "Vessel of Sukuna // Prince of Black Flash",
        color: "#f43f5e",
        shaderMode: 3,
        signatureMove: "Consecutive Black Flash // Soul Dismantle",
        bio: "Possessing superhuman physical prowess and an unbreakable moral core, Yuji swallowed Sukuna's finger to save his friends—mastering Black Flash, Blood Manipulation, and soul-striking Shrine slashes.",
        abilities: ["Record Consecutive Black Flashes", "Soul-Targeting Shrine (Dismantle)", "Blood Manipulation", "Reverse Cursed Technique", "Domain Expansion"],
        moveDetail: "Applying cursed energy within 0.000001 seconds of a physical strike, Yuji distorts space in sparks of crimson and black lightning while severing the boundary between souls.",
        quote: "I don't know how I'll feel when I'm dead, but I don't want to regret the way I lived.",
        stats: { power: 93, speed: 95, iq: 89, hax: 92 }
      },
      {
        id: "sukuna",
        name: "Ryomen Sukuna",
        image: "./assets/characters/sukuna.png",
        role: "Villain",
        epithet: "The King of Curses // The Disgraced One",
        color: "#ef4444",
        shaderMode: 1,
        signatureMove: "Malevolent Shrine // World-Cutting Slash",
        bio: "The undefeated Heian-era calamity who incarnated in the modern age—wielding a barrierless Domain Expansion, divine flames, and a slash capable of cutting the fabric of space itself.",
        abilities: ["Shrine: Cleave & Dismantle", "World-Cutting Slash", "Domain Expansion: Malevolent Shrine", "Divine Flame (Fuga)", "True Heian Four-Armed Form"],
        moveDetail: "Expanding a 200-meter open-barrier shrine, Sukuna unleashes an unrelenting storm of invisible slashes that pulverizes everything inside to dust before igniting a thermobaric fire arrow.",
        quote: "Stand proud. You are strong.",
        stats: { power: 100, speed: 99, iq: 100, hax: 100 }
      },
      {
        id: "kenjaku",
        name: "Kenjaku",
        image: "./assets/characters/kenjaku.png",
        role: "Villain",
        epithet: "The Thousand-Year Mastermind",
        color: "#a855f7",
        shaderMode: 2,
        signatureMove: "Womb Profusion // Cursed Spirit Manipulation",
        bio: "An ancient sorcerer who transfers his brain across host bodies—currently inhabiting Suguru Geto—having engineered the Shibuya Incident and the Culling Game to force human evolution.",
        abilities: ["Brain Hopping", "Cursed Spirit Manipulation", "Maximum: Uzumaki", "Anti-Gravity System", "Open Domain: Womb Profusion"],
        moveDetail: "Summoning a grotesque pillar of fused curses in an open-barrier Domain while compressing thousands of spirits into a concentrated Uzumaki blast.",
        quote: "What I want to create is chaos that even I cannot control.",
        stats: { power: 94, speed: 90, iq: 100, hax: 98 }
      }
    ],
    specialLegends: [
      {
        id: "megumi",
        name: "Megumi Fushiguro",
        image: "./assets/characters/megumi.png",
        role: "Hero",
        epithet: "Inheritor of the Ten Shadows",
        color: "#38bdf8",
        signatureMove: "Chimera Shadow Garden // Eight-Handled Sword Mahoraga",
        bio: "A stoic Grade 1 sorcerer of the Zenin bloodline who commands ten shikigami forged from shadows—harboring the untamed Divine General Mahoraga capable of adapting to any phenomenon.",
        abilities: ["Ten Shadows Technique", "Domain Expansion: Chimera Shadow Garden", "Divine Dog: Totality", "Mahoraga Summon", "Shadow Storage & Travel"],
        moveDetail: "Flooding the battlefield in liquid shadow, Megumi multiplies his shikigami and clones simultaneously—or invokes the sacred chant to summon Mahoraga.",
        quote: "I save people unequally.",
        stats: { power: 89, speed: 88, iq: 94, hax: 96 }
      },
      {
        id: "toji",
        name: "Toji Fushiguro",
        image: "./assets/characters/toji.png",
        role: "Villain",
        epithet: "The Sorcerer Killer // Ghost of the Zenin",
        color: "#10b981",
        signatureMove: "Heavenly Restriction // Inverted Spear of Heaven",
        bio: "Born with zero cursed energy in exchange for peak physical perfection, Toji shattered the jujutsu world's hierarchy—nearly assassinating Satoru Gojo through pure speed, instincts, and cursed tools.",
        abilities: ["Complete Heavenly Restriction", "Inverted Spear of Heaven", "Split Soul Katana", "Playful Cloud", "Invisible Presence"],
        moveDetail: "Moving faster than Six Eyes perception with zero cursed energy signature, Toji uses the Inverted Spear of Heaven to forcibly nullify any active cursed technique on contact.",
        quote: "You guys with all your blessings lost to a monkey like me who can't even use jujutsu.",
        stats: { power: 94, speed: 99, iq: 95, hax: 94 }
      },
      {
        id: "yuta",
        name: "Yuta Okkotsu",
        image: "./assets/characters/yuta.png",
        role: "Hero",
        epithet: "The Prodigy // Second Only to Gojo",
        color: "#e2e8f0",
        signatureMove: "Authentic Mutual Love // Rika Manifestation",
        bio: "A Special Grade sorcerer possessing bottomless cursed energy reserves and the Queen of Curses, Rika—allowing him to unconditionally copy and wield the innate techniques of others.",
        abilities: ["Copy (Innate Technique)", "Queen of Curses: Rika", "Domain Expansion: Authentic Mutual Love", "Jacob's Ladder & Sky Manipulation", "Pure Love Beam"],
        moveDetail: "Surrounding the battlefield in infinite katanas storing copied techniques, Yuta unleashes a guaranteed-hit strike alongside Rika's overwhelming cursed energy.",
        quote: "I want to have a connection with someone. I want to be needed by someone.",
        stats: { power: 96, speed: 94, iq: 95, hax: 98 }
      },
      {
        id: "mahito",
        name: "Mahito",
        image: "./assets/characters/mahito.png",
        role: "Villain",
        epithet: "The Mirror of Humanity",
        color: "#6366f1",
        signatureMove: "Self-Embodiment of Perfection // Idle Transfiguration",
        bio: "A Special Grade curse born from human hatred and fear—capable of reshaping souls on contact and awakening his true predatory form, Instant Spirit Body of Distorted Killing.",
        abilities: ["Idle Transfiguration", "Domain Expansion: Self-Embodiment of Perfection", "0.2-Second Domain", "Instant Spirit Body", "Soul Multiplicity"],
        moveDetail: "Touching the shape of an opponent's soul directly, Mahito transfigures flesh instantaneously while remaining immune to any attack that cannot harm the soul.",
        quote: "The soul always comes before the body!",
        stats: { power: 90, speed: 91, iq: 92, hax: 97 }
      }
    ]
  }
];