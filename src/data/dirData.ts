import { CurriculumItem, BookItem, HubClass, Partner, ServiceOffering, TimelineEvent, TeamMember, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: 'Digital Information Resources Company Limited',
  shortName: 'DIR',
  establishedYear: 2018,
  parentCompany: 'Myint Thuka Nadi Co., Ltd (MTKN)',
  parentFounded: 'April 28th, 2005',
  parentYears: '21+',
  parentEmployees: '500+',
  parentCountries: '4+',
  address: 'No-408, Tower (B), Myaing Hay Wun Condo, 8 Miles, Mayangone Township, Yangon, Myanmar',
  email: 'cs@dir.com.mm',
  phones: ['+95 186 510 49', '+959 977 814 290', '+959 977 221 703'],
  businessUnits: [
    {
      id: 'dir-courseware',
      name: 'Digital Information Resources Co., Ltd',
      shortName: 'DIR Courseware',
      tagline: 'Leading Courseware Provider for Schools and Institutions',
      role: 'Dedicated B2B institutional courseware provider',
      target: 'Pre-schools, Private Schools, International Bodies & K-12 Academies',
      color: 'blue',
      description:
        "Delivers reliable, vetted curricula, robust teacher professional training, and result-proven international educational frameworks across Myanmar.",
      metrics: '30+ Partner Schools · 6 Major Global Publishers'
    },
    {
      id: 'u-book-store',
      name: 'U Book Store',
      shortName: 'U Book Store',
      tagline: 'One Stop Book Store for Kids Books and Activity Tools',
      role: 'Kids books and activities tools distributor (B2B & B2C)',
      target: 'Parents, Children, Bookstores, Toy Shops & School Libraries',
      color: 'amber',
      description:
        'Curated sales of educational materials, supplementary reading, activity packs, and specialized books to both retail partners and family readers.',
      metrics: '50+ Books & Activities · 50+ Retail Partners · 3+ Cities'
    },
    {
      id: 'win-digital-hub',
      name: 'Win Digital Learning Hub',
      shortName: 'Win Digital Hub',
      tagline: 'Innovative ICT, Robotic and Programming Learning Hub for Kids',
      role: 'Hands-on weekend & evening STEM & digital academy',
      target: 'Young learners (ages 5–17) seeking 21st-century tech skills',
      color: 'rose',
      description:
        'Actively bridges the STEM skills gap, equipping every student with competitive digital fluency, computational thinking, and robotics problem-solving.',
      metrics: 'Weekend Batches · Practical Robotics Labs · ISTE Aligned'
    }
  ]
};

export const CURRICULA_LIST: CurriculumItem[] = [
  {
    id: 'jolly-classroom',
    title: 'Jolly Classroom',
    publisher: 'Jolly Learning (UK)',
    category: 'phonics',
    targetAudience: 'Pre-K to Early Primary (Ages 4-7)',
    ageRange: '4 - 7 Years',
    cefrLevel: 'Pre-A1',
    levelsCount: 3,
    description:
      'The magic of Jolly Phonics at your fingertips. Comprehensive interactive digital software for interactive whiteboards and tablets, providing structured synthetic phonics, animations, songs, sound actions, and blending activities.',
    keyFeatures: [
      'Interactive Whiteboard & tablet software with rich multisensory animations',
      '42 letter sounds systematically taught with song actions and sound blend training',
      'Full teacher lesson plans, printable activity sheets, and classroom assessment tools',
      'Audio pronunciation guides with native British & international accents'
    ],
    components: [
      'Jolly Classroom Digital Suite (PC/Mac/Touchscreen)',
      'Pupil Book 1, 2, 3 (Color Editions)',
      'Teacher’s Comprehensive Guide',
      'Jolly Phonics Wall Frieze & Sound Flashcards'
    ],
    accreditation: 'Global Standard Synthetic Phonics Methodology',
    previewColor: '#DC2626'
  },
  {
    id: 'natgeo-look',
    title: 'Look (National Geographic Learning)',
    publisher: 'National Geographic Learning / Cengage',
    category: 'english',
    targetAudience: 'Young Learners of English (Primary)',
    ageRange: '6 - 12 Years',
    cefrLevel: 'Pre-A1 to B1',
    levelsCount: 7,
    description:
      'A seven-level series for young learners of English featuring stunning National Geographic photography, authentic world stories, and 21st-century global citizenship values to inspire curiosity.',
    keyFeatures: [
      '7 comprehensive levels from Starter (Pre-A1) through Level 6 (B1)',
      'Real-world photography, wildlife expeditions, and diverse international cultures',
      'Integrated foundational grammar, vocabulary, reading, and listening tracks',
      'Interactive Student e-book and Teacher Presentation Tool with audio-video clips'
    ],
    components: [
      'Student’s Book with Online Practice',
      'Workbook with Audio',
      'Teacher’s Book with Resource Pack',
      'Classroom Presentation Tool (CPT)'
    ],
    accreditation: 'CEFR Pre-A1 to B1 Aligned',
    previewColor: '#CA8A04'
  },
  {
    id: 'natgeo-explore-our-world',
    title: 'Explore Our World (2nd Edition)',
    publisher: 'National Geographic Learning',
    category: 'english',
    targetAudience: 'Primary School Learners',
    ageRange: '6 - 12 Years',
    cefrLevel: 'Pre-A1 to B1',
    levelsCount: 7,
    description:
      'A 7-level series covering Pre-A1 to B1 that focuses on listening, speaking, and communicative language development through captivating content from National Geographic.',
    keyFeatures: [
      '7-level communicative series emphasizing speaking confidence and spoken clarity',
      'High-impact National Geographic documentary videos in every unit',
      'Cross-curricular content linking English learning with science, geography, and art',
      'Songs, chants, and games for energetic classroom engagement'
    ],
    components: [
      'Student Book + Audio CD',
      'Activity Book',
      'Lesson Planner + Teacher Assessment CD-ROM',
      'Flashcards and Classroom Posters'
    ],
    accreditation: 'CEFR Pre-A1 to B1 Aligned',
    previewColor: '#0284C7'
  },
  {
    id: 'natgeo-new-closeup',
    title: 'New Close-up',
    publisher: 'National Geographic Learning',
    category: 'english',
    targetAudience: 'Teenage Learners of English (Secondary)',
    ageRange: '12 - 18 Years',
    cefrLevel: 'A2 to B2+',
    levelsCount: 5,
    description:
      'A five-level series for teenage learners of English (A2 to B2+) with exam preparation, critical thinking, global awareness, and authentic National Geographic photography and video.',
    keyFeatures: [
      '5-level structured progression: A2, B1, B1+, B2, B2+',
      'Exam preparation focus tailored for Cambridge English Qualifications & IELTS pathways',
      'Critical thinking tasks designed for adolescent developmental psychology',
      'Modern, thought-provoking topics on technology, conservation, and global challenges'
    ],
    components: [
      'Student’s Book with Digital Platform',
      'Workbook with Answer Key',
      'Teacher’s Book with Assessment Suite',
      'Class Audio CDs & Exam Practice Packs'
    ],
    accreditation: 'Cambridge English & CEFR A2-B2+ Aligned',
    previewColor: '#16A34A'
  },
  {
    id: 'digital-kids',
    title: 'Digital Kids for Primary Schools',
    publisher: 'Binary Logic',
    category: 'ict-robotics',
    targetAudience: 'Primary School Students',
    ageRange: '6 - 12 Years',
    cefrLevel: 'Grades 1 to 6',
    levelsCount: 6,
    description:
      '6 progressive stages (Starter, Explorer, Racer, Flyer, Genius, Expert) equipping young primary students with digital literacy, computer hardware knowledge, typing, block programming, and safe internet citizenship.',
    keyFeatures: [
      '6 carefully scaffolded levels: Starter, Explorer, Racer, Flyer, Genius, Expert',
      'Official ISTE SEAL accreditation (International Society for Technology in Education)',
      'Hands-on computer lab activities, visual coding (Scratch/Blockly), and basic office apps',
      'Focus on digital ethics, cyber safety, and responsible technology usage'
    ],
    components: [
      'Student Textbook with Step-by-Step Color Guides',
      'Interactive Online Learning Management System (LMS)',
      'Teacher’s Manual with Project Solution Files',
      'Student Practical Exercise Files & Certifications'
    ],
    accreditation: 'ISTE SEAL (June 2023 - 2026 Certified)',
    previewColor: '#2563EB'
  },
  {
    id: 'digital-teens',
    title: 'Digital Teens for Secondary Schools',
    publisher: 'Binary Logic',
    category: 'ict-robotics',
    targetAudience: 'Secondary & High School Students',
    ageRange: '12 - 18 Years',
    cefrLevel: 'Grades 7 to 12',
    levelsCount: 6,
    description:
      'A 6-level comprehensive computing syllabus (Teens 1 to 6) covering text-based programming (Python), web development (HTML/CSS), computational mathematics, cybersecurity, robotics, and cloud tools.',
    keyFeatures: [
      'Teens 1 through Teens 6 comprehensive secondary computing curriculum',
      'Awarded the coveted ISTE SEAL for excellence in tech pedagogy',
      'Hands-on Python coding projects, database modeling, and algorithms',
      'Prepares students for university computer science and international tech certifications'
    ],
    components: [
      'Student Book & Project Workbooks',
      'Teacher Lesson Plans with Code Repository',
      'Cloud Coding Sandbox & Auto-Grader Assessments',
      'Modular Exam Practice Tests'
    ],
    accreditation: 'ISTE SEAL Validated Curriculum',
    previewColor: '#4F46E5'
  },
  {
    id: 'rainbow-kg-series',
    title: 'Rainbow KG Series (Nursery, K1, K2)',
    publisher: 'Rainbow Educational Series',
    category: 'early-years',
    targetAudience: 'Kindergarten & Preschool Children in Asia',
    ageRange: '3 - 6 Years',
    cefrLevel: 'Early Childhood Foundation',
    levelsCount: 3,
    description:
      'A widely popular set of educational workbooks specifically crafted for kindergarten children (ages 3-6) across Asia, covering English, Mathematics, and Science with joyful hands-on activities.',
    keyFeatures: [
      '3 complete stage tiers: Rainbow Nursery (A/B), Rainbow K1 (1A/1B), and Rainbow K2 (2A/2B)',
      'Tri-subject integration: English (letters/vocab), Math (number concepts/patterns), Science (nature/senses)',
      'Student Books, Activity Workbooks, and Teacher Lesson Guides for every subject stage',
      'Vibrant illustrations, coloring, tracing, cut-and-paste fine motor skill exercises'
    ],
    components: [
      'Rainbow Nursery Set (English 4 books, Math 4 books, Science 4 books)',
      'Rainbow K1 Set (Lesson Books & Activity Books for English 1A/B, Math 1A/B, Science 1A/B)',
      'Rainbow K2 Set (Lesson Books & Activity Books for English 2A/B, Math 2A/B, Science 2A/B)',
      'Teacher Lesson Resource Packs & Audio Tracks'
    ],
    accreditation: 'Asian Kindergarten Standard Curriculum',
    previewColor: '#EA580C'
  }
];

export const BOOKS_CATALOG: BookItem[] = [
  {
    id: 'dog-man-series',
    title: 'Dog Man Series (Dav Pilkey)',
    category: 'comics',
    recommendedAge: 'Ages 7–12',
    description:
      'The #1 worldwide bestselling graphic novel series by Dav Pilkey exploring friendship, kindness, and heroic humor with lovable characters.',
    highlights: ['Dog Man Unleashed', 'A Tale of Two Kitties', 'Brawl of the Wild', 'For Whom the Ball Rolls'],
    inStock: true,
    coverAccent: '#EF4444',
    badge: 'Bestseller'
  },
  {
    id: 'rainbow-nursery-pack',
    title: 'Rainbow Nursery Complete Learning Kit',
    category: 'preschool',
    recommendedAge: 'Ages 3–4',
    description:
      'Complete 12-book bundle containing English (4 books), Math (4 books), and Science (4 books) tailored for nursery foundations.',
    highlights: ['Fine motor tracing', 'Early phonics vocabulary', 'Counting & colors', 'Sensory discovery'],
    inStock: true,
    coverAccent: '#F59E0B',
    badge: 'School Favorite'
  },
  {
    id: '101-crafty-witty-stories',
    title: '101 Crafty & Witty Stories',
    category: 'storybooks' as any,
    recommendedAge: 'Ages 5–10',
    description:
      'Delightful anthology of timeless fables, clever animal adventures, and moral tales that cultivate values, vocabulary, and active imaginations.',
    highlights: ['101 Illustrated Tales', 'Morals and Life Lessons', 'Glossary of New Words', 'Family Bedtime Reading'],
    inStock: true,
    coverAccent: '#10B981',
    badge: 'Popular'
  },
  {
    id: 'magical-stories-5min',
    title: 'Magical Stories (5-Minute Tales)',
    category: 'readers',
    recommendedAge: 'Ages 4–8',
    description:
      '7 stories, 1 for every day of the week! Enchanting adventures, colorful spreads, and gentle cadence perfect for early independent readers.',
    highlights: ['7 Weekday Tales', 'Large Easy-to-Read Font', 'Lush Art Spreads', 'Early Reading Confidence'],
    inStock: true,
    coverAccent: '#8B5CF6'
  },
  {
    id: 'knowledge-boosters-stem',
    title: 'Knowledge Boosters Science & Weather Box',
    category: 'knowledge',
    recommendedAge: 'Ages 6–12',
    description:
      'Interactive science reference box set explaining meteorology, natural phenomena, Earth sciences, and everyday physics with diagrams.',
    highlights: ['Science Safari', 'International Business Basics', 'Weather & Storms', 'Full-Color Infographics'],
    inStock: true,
    coverAccent: '#06B6D4'
  },
  {
    id: 'early-math-sums-dominoes',
    title: 'Fun With Sums & Dominoes Activity Pack',
    category: 'activity-kits',
    recommendedAge: 'Ages 4–8',
    description:
      'Hands-on manipulatives pack featuring Match & Learn dominoes, number puzzle boards, and tactile arithmetic tiles for early math fluency.',
    highlights: ['Tactile Math Tiles', 'Addition & Subtraction Puzzles', 'Self-Correcting Pieces', 'Preschool Readiness'],
    inStock: true,
    coverAccent: '#EC4899',
    badge: 'Hands-On'
  },
  {
    id: 'big-sister-series',
    title: 'Big Sister & Family Milestone Series',
    category: 'readers',
    recommendedAge: 'Ages 3–7',
    description:
      'Gentle socio-emotional storybooks helping children navigate family milestones, new siblings, school readiness, and empathy.',
    highlights: ['Socio-Emotional Growth', 'Gentle Watercolor Art', 'Parent Discussion Prompts', 'Durable Board Book'],
    inStock: true,
    coverAccent: '#F97316'
  },
  {
    id: 'phonics-flashcards-box',
    title: 'Animal Phonics Readers & Word Builder Flashcards',
    category: 'activity-kits',
    recommendedAge: 'Ages 4–7',
    description:
      'Comprehensive alphabet, blend, and animal reader set for tactile reinforcement of phonetic sound blending and sight-word recognition.',
    highlights: ['80+ Double-Sided Cards', 'Animal Phonics Readers', 'Ring-Bound Organization', 'Classroom & Home Use'],
    inStock: true,
    coverAccent: '#3B82F6'
  },
  {
    id: 'speller-junior-readiness',
    title: 'Speller Junior & School Readiness Kit',
    category: 'activity-kits',
    recommendedAge: 'Ages 4–8',
    description:
      'Interactive spelling board with picture cards and alphabet tiles that turn word formation into a tactile puzzle game.',
    highlights: ['Speller Junior Board', 'Alphabet Readiness Kit', 'Letter Association', 'Independent Play'],
    inStock: true,
    coverAccent: '#1E4592',
    badge: 'New Stock'
  },
  {
    id: 'home-learning-packs',
    title: 'Preschool Home Learning Pack (Vols 1–3)',
    category: 'preschool',
    recommendedAge: 'Ages 3–6',
    description:
      'Comprehensive home learning boxed kits containing structured workbooks, sticker awards, and pencil control exercises.',
    highlights: ['Volumes 1, 2 & 3', 'Language Learning Centre', 'Motor Control Activities', 'Parent Guide'],
    inStock: true,
    coverAccent: '#059669'
  },
  {
    id: 'bilingual-flashcards',
    title: 'Early Bilingual Flashcards (Myanmar & English)',
    category: 'activity-kits',
    recommendedAge: 'Ages 2–6',
    description:
      'High-contrast visual cards covering Animals, ABC, Numbers, and Colors & Shapes with bilingual vocabulary captions.',
    highlights: ['Animals & Nature', 'Numbers 1-100', 'Colors & Shapes', 'Burmese & English Phonics'],
    inStock: true,
    coverAccent: '#D97706'
  },
  {
    id: 'how-curiosity-series',
    title: 'How..? Curiosity & Science Discovery Books',
    category: 'knowledge',
    recommendedAge: 'Ages 6–12',
    description:
      'Engaging question-and-answer science series explaining real-world mechanics, animal adaptations, and everyday mysteries.',
    highlights: ['Curiosity Q&A', 'Full-Color Spreads', 'Everyday Science', 'STEM Inquisitiveness'],
    inStock: true,
    coverAccent: '#7C3AED'
  }
];

export const WIN_CLASSES: HubClass[] = [
  {
    id: 'robotics-builders',
    title: 'Junior Robotics & Mechanics Lab',
    category: 'robotics',
    ageGroup: 'Ages 6–9',
    schedule: 'Saturday or Sunday, 9:30 AM – 11:30 AM',
    duration: '12-Week Term (24 Hours Total)',
    summary:
      'Hands-on engineering workshop where young learners assemble mechanical gears, motors, sensors, and programmable robotic vehicles.',
    curriculumTopics: [
      'Simple Machines & Gear Ratios',
      'DC Motors & Chassis Construction',
      'Infrared & Ultrasonic Obstacle Sensors',
      'Visual Block Remote Control Programming'
    ],
    skillsGained: ['Spatial Reasoning', 'Hands-on Prototyping', 'Basic Electronics', 'Team Collaboration'],
    level: 'Beginner'
  },
  {
    id: 'scratch-coding-adventure',
    title: 'Creative Coding & Game Design (Scratch / Blockly)',
    category: 'coding',
    ageGroup: 'Ages 8–12',
    schedule: 'Saturday or Sunday, 1:00 PM – 3:00 PM',
    duration: '10-Week Term (20 Hours Total)',
    summary:
      'Transforms screen time into creative creation time. Students design their own interactive arcade video games, animated stories, and digital art.',
    curriculumTopics: [
      'Algorithms & Computational Logic',
      'Loops, Variables & Conditional Statements',
      'Sprite Animation & Sound Synthesis',
      'Game Physics, Scoring Systems & Debugging'
    ],
    skillsGained: ['Algorithmic Thinking', 'Logic Structuring', 'Creative Storytelling', 'Iterative Debugging'],
    level: 'Beginner'
  },
  {
    id: 'python-future-teens',
    title: 'Python Programming & Applied Computer Science',
    category: 'coding',
    ageGroup: 'Ages 12–17',
    schedule: 'Saturday, 3:30 PM – 5:30 PM',
    duration: '14-Week Term (28 Hours Total)',
    summary:
      'Industry-standard text programming course transitioning teens from visual blocks into clean, authentic Python code and real-world software logic.',
    curriculumTopics: [
      'Python Data Types, Lists, Dictionaries & Functions',
      'Object-Oriented Programming (OOP) Fundamentals',
      'Data Analysis with Turtle & Pygame Graphics',
      'Mini Project: Build an Automated CLI Utility & Mini Game'
    ],
    skillsGained: ['Text-Based Syntax', 'Data Structures', 'Algorithmic Problem Solving', 'ISTE Tech Foundations'],
    level: 'Intermediate'
  },
  {
    id: 'stem-experiments-lab',
    title: 'Junior STEM Explorers & Science Experiment Lab',
    category: 'stem',
    ageGroup: 'Ages 6–11',
    schedule: 'Sunday, 10:00 AM – 12:00 PM',
    duration: '8-Week Term (16 Hours Total)',
    summary:
      'Safe, mesmerizing chemical and physical experiments that explain everyday phenomena: pneumatic rockets, magnetic levitation, water filtration, and solar power.',
    curriculumTopics: [
      'Forces, Gravity & Pneumatic Pressure',
      'Color Chromatography & Acid-Base Indicators',
      'Renewable Energy & Solar Motors',
      'Scientific Hypothesis & Laboratory Note-taking'
    ],
    skillsGained: ['Scientific Inquiry', 'Observation & Analysis', 'Lab Safety Protocol', 'Curiosity for Sciences'],
    level: 'Beginner'
  },
  {
    id: 'english-speech-debating',
    title: 'Global English, Phonics & Confident Public Speaking',
    category: 'language',
    ageGroup: 'Ages 7–14',
    schedule: 'Saturday or Sunday, 10:00 AM – 12:00 PM',
    duration: '12-Week Term (24 Hours Total)',
    summary:
      'Interactive spoken English using National Geographic Learning methodologies, Jolly Phonics articulation drills, and mini-debate presentations.',
    curriculumTopics: [
      'Vocal Projection, Pronunciation & Intonation',
      'National Geographic Visual Storytelling Prompts',
      'Impromptu Speaking & Structured Argumentation',
      'Active Listening & Cross-Cultural Awareness'
    ],
    skillsGained: ['Speaking Confidence', 'Pronunciation Accuracy', 'Critical Thinking', 'Presentation Etiquette'],
    level: 'Intermediate'
  }
];

export const SCHOOL_PARTNERS: Partner[] = [
  {
    id: 'kbtc',
    name: 'KBTC International School',
    category: 'school',
    city: 'Yangon',
    type: 'International K-12 School',
    description: 'Premier British & Cambridge curriculum international school serving over 1,500 students across primary, secondary, and sixth form campuses in Yangon.',
    collaboration: 'Comprehensive adoption of National Geographic Look (Levels 1–6) and Jolly Classroom synthetic phonics interactive software, accompanied by annual in-service teacher workshops.',
    programsAdopted: ['National Geographic Look', 'Jolly Phonics Classroom CPT', 'In-Service Teacher Workshops'],
    foundedOrScale: '1,500+ Enrolled Students · Multi-Campus Yangon',
    logoBg: 'bg-[#0F2444]',
    logoAccent: '#F59E0B',
    logoText: 'KBTC'
  },
  {
    id: 'ulight',
    name: 'ULight International School',
    category: 'school',
    city: 'Yangon',
    type: 'Private International Institution',
    description: 'Renowned academic institution known for high Cambridge checkpoint scores, international accreditation, and strong co-curricular programs.',
    collaboration: 'Primary and middle school adoption of National Geographic Time Zones and New Close-up series with certified CEFR benchmark testing.',
    programsAdopted: ['NatGeo Time Zones', 'New Close-up B1-B2', 'Teacher CPD Certificates'],
    foundedOrScale: '900+ Students · Yangon',
    logoBg: 'bg-[#991B1B]',
    logoAccent: '#EF4444',
    logoText: 'ULIGHT'
  },
  {
    id: 'edulight',
    name: 'Edu-Light High School',
    category: 'school',
    city: 'Yangon',
    type: 'Private Secondary High School',
    description: 'Rigorous college-preparatory high school preparing students for international university entrance, IGCSE examinations, and global scholarship pathways.',
    collaboration: 'Adoption of National Geographic New Close-up for secondary grades along with interactive presentation tools for science and debate.',
    programsAdopted: ['New Close-up B1–C1', 'Presentation Software CPT', 'Cambridge Exam Guides'],
    foundedOrScale: '600+ High Schoolers · Yangon',
    logoBg: 'bg-[#0369A1]',
    logoAccent: '#38BDF8',
    logoText: 'EDU-LIGHT'
  },
  {
    id: 'synergy',
    name: 'Synergy International Academy',
    category: 'school',
    city: 'Yangon',
    type: 'Bilingual & International Academy',
    description: 'Dynamic academic academy offering modern bilingual instruction with state-of-the-art multimedia classrooms and STEM laboratories.',
    collaboration: 'Campus-wide adoption of Binary Logic Digital Kids and Jolly Phonics decodable classroom libraries.',
    programsAdopted: ['Binary Logic Digital Kids', 'Jolly Phonics Software', 'Robotics Starter Kits'],
    foundedOrScale: '850+ Students · Yangon',
    logoBg: 'bg-[#0F172A]',
    logoAccent: '#EF4444',
    logoText: 'SYNERGY'
  },
  {
    id: 'blossom',
    name: 'Blossom Private School',
    category: 'school',
    city: 'Yangon',
    type: 'Early Childhood & Primary School',
    description: 'Nurturing primary and kindergarten environment celebrated for holistic literacy, creative arts, and foundational phonics.',
    collaboration: 'Implementation of Jolly Phonics synthetic blending program with classroom puppet kits, decodable readers, and teacher coaching.',
    programsAdopted: ['Jolly Phonics Synthetic Literacy', 'Rainbow KG Pre-Primary', 'Math Dominoes'],
    foundedOrScale: '400+ Young Learners · Yangon',
    logoBg: 'bg-[#881337]',
    logoAccent: '#FB7185',
    logoText: 'BLOSSOM'
  },
  {
    id: 'pegu',
    name: 'Pegu International School',
    category: 'school',
    city: 'Other Cities',
    type: 'Regional International School',
    description: 'Pioneering international education in Bago Region with state-of-the-art computer science laboratories and English immersion.',
    collaboration: 'Campus-wide computing curriculum powered by Binary Logic Digital Kids and Digital Teens, featuring the globally accredited ISTE SEAL.',
    programsAdopted: ['Binary Logic Digital Kids', 'Digital Teens (ISTE SEAL)', 'Python Lab Hardware'],
    foundedOrScale: '750+ Students · Bago Regional Hub',
    logoBg: 'bg-[#1E3A8A]',
    logoAccent: '#3B82F6',
    logoText: 'PEGU INT.'
  },
  {
    id: 'aung-htet',
    name: 'Aung Htet Private School',
    category: 'school',
    city: 'Yangon',
    type: 'Comprehensive Private K-12 Academy',
    description: 'Leading Yangon private academy known for academic discipline, national matriculation distinction, and rigorous English language training.',
    collaboration: 'Adoption of National Geographic Look and New Close-up series across primary and secondary divisions.',
    programsAdopted: ['NatGeo Look', 'New Close-up Secondary', 'In-Service Teacher Workshops'],
    foundedOrScale: '1,100+ Students · Yangon',
    logoBg: 'bg-[#1E3A8A]',
    logoAccent: '#EF4444',
    logoText: 'AUNG HTET'
  },
  {
    id: 'mec',
    name: 'MEC Education Center',
    category: 'school',
    city: 'Yangon',
    type: 'Comprehensive Education Campus',
    description: 'Integrated learning campus offering academic English, international test preparation, and technology vocational tracks.',
    collaboration: 'Full institutional licensing of National Geographic learning resources and Binary Logic ICT teaching tools.',
    programsAdopted: ['NatGeo Learning Series', 'Binary Logic Computing', 'CPT Interactive Whiteboard'],
    foundedOrScale: '1,200+ Learners · Yangon',
    logoBg: 'bg-[#1E293B]',
    logoAccent: '#DC2626',
    logoText: 'MEC'
  },
  {
    id: 'noble-star',
    name: 'Noble Star Private School',
    category: 'school',
    city: 'Yangon',
    type: 'K-12 Private School',
    description: 'Comprehensive K-12 institution offering bilingual education with an emphasis on STEM robotics and digital competence.',
    collaboration: 'Collaboration with Win Digital Learning Hub to conduct on-campus weekend robotics workshops using official DIR micro-controller kits.',
    programsAdopted: ['WDLH Robotics Club', 'Binary Logic Digital Kids', 'Science Lab Workbooks'],
    foundedOrScale: '800+ Students · Yangon',
    logoBg: 'bg-[#FACC15]',
    logoAccent: '#D97706',
    logoText: 'NOBLE STAR'
  },
  {
    id: 'pyinnyar-tazaung',
    name: 'Pyinnyar Tazaung Private School',
    category: 'school',
    city: 'Yangon',
    type: 'Bilingual Private Academy',
    description: 'Established private institution dedicated to community educational advancement and high academic performance in science and languages.',
    collaboration: 'Deployment of National Geographic Explore Our World and Rainbow KG foundational mathematics workbooks.',
    programsAdopted: ['NatGeo Explore Our World', 'Rainbow Math Series', 'Teacher Lesson Guides'],
    foundedOrScale: '650+ Students · Yangon',
    logoBg: 'bg-[#14532D]',
    logoAccent: '#FACC15',
    logoText: 'ပညာတန်ဆောင်'
  },
  {
    id: 'myanmar-ephraim',
    name: 'Myanmar Ephraim Academy',
    category: 'school',
    city: 'Yangon',
    type: 'Christian International Academy',
    description: 'Values-centered international academy providing Cambridge-aligned curricula, character education, and student leadership development.',
    collaboration: 'Adoption of Jolly Classroom synthetic phonics and National Geographic Look 7-level series.',
    programsAdopted: ['Jolly Classroom Software', 'NatGeo Look Starter-6', 'Phonics Readers Library'],
    foundedOrScale: '550+ Students · Yangon',
    logoBg: 'bg-[#0F172A]',
    logoAccent: '#F59E0B',
    logoText: 'EPHRAIM'
  },
  {
    id: 'monastic-foundation',
    name: 'Sasana & Monastic Education Foundation',
    category: 'school',
    city: 'Other Cities',
    type: 'Monastic Charitable School Network',
    description: 'Philanthropic monastic school providing free foundational English, numeracy, and computing education to underserved youth.',
    collaboration: 'DIR community sponsorship program providing subsidized Rainbow KG workbooks, teacher guides, and digital whiteboard software licenses.',
    programsAdopted: ['Rainbow KG Nursery & K1', 'Basic Computing Workbooks', 'Educational Flashcards'],
    foundedOrScale: '900+ Monastic Students · Regional',
    logoBg: 'bg-[#166534]',
    logoAccent: '#4ADE80',
    logoText: 'ပညာဗိမာန်'
  },
  {
    id: 'royal-smile',
    name: 'Royal Smile Pre School Mandalay',
    category: 'school',
    city: 'Mandalay',
    type: 'Early Childhood Learning Centre',
    description: 'Mandalay’s leading early learning and kindergarten academy focusing on bilingual cognitive growth, creative numeracy, and motor skill readiness.',
    collaboration: 'Exclusive institutional licensing of DIR’s Rainbow Nursery & Kindergarten 12-book series along with Jolly Phonics multisensory flashcards and audio kits.',
    programsAdopted: ['Rainbow KG 12-Book Series', 'Jolly Phonics Multisensory', 'Early Maths Dominoes'],
    foundedOrScale: '450+ Preschoolers · Mandalay Central',
    logoBg: 'bg-[#EA580C]',
    logoAccent: '#F97316',
    logoText: 'ROYAL SMILE'
  },
  {
    id: 'brown',
    name: 'Brown International Academy',
    category: 'school',
    city: 'Yangon',
    type: 'International Primary & Middle School',
    description: 'Modern campus featuring experiential learning, world culture integration, and project-based STEM education.',
    collaboration: 'Full curriculum adoption of Binary Logic Digital Teens, Python computing labs, and NatGeo New Close-up.',
    programsAdopted: ['Binary Logic Digital Teens', 'NatGeo New Close-up', 'Python Lab Software'],
    foundedOrScale: '700+ Students · Yangon',
    logoBg: 'bg-[#78350F]',
    logoAccent: '#B45309',
    logoText: 'BROWN'
  }
];

export const RETAIL_PARTNERS: Partner[] = [
  {
    id: 'star-guide',
    name: 'Star Guide Educational Toys & Books',
    category: 'retail',
    city: 'Yangon',
    type: 'Learning Toys & Equipment Boutique',
    description: 'Boutique educational retailer specializing in Montessori sensorial equipment, STEM wooden puzzles, and early childhood motor skills toys.',
    collaboration: 'Exclusive distributor for DIR’s mathematical fraction dominoes, Rainbow KG tactile kits, and early logic board games.',
    programsAdopted: ['Tactile Math Dominoes', 'Sensorial STEM Kits', 'Preschool Readiness Kits'],
    foundedOrScale: 'Specialized Learning Boutique · Yangon',
    logoBg: 'bg-[#0284C7]',
    logoAccent: '#38BDF8',
    logoText: 'STAR GUIDE'
  },
  {
    id: 'kays-album',
    name: "Kay's Album Intellectual Bookstore",
    category: 'retail',
    city: 'Yangon',
    type: 'Curated Online & Pop-Up Bookstore',
    description: 'Popular intellectual online bookstore delivering curated children’s literature, young adult fiction, and educational tools to families nationwide.',
    collaboration: 'Official distributor for Dav Pilkey Dog Man graphic novel series and U Book Store’s 5-Minute Tales.',
    programsAdopted: ['Dog Man Series', 'Magical Stories 5-Min Tales', 'Bilingual Readers'],
    foundedOrScale: '40,000+ Online Family Followers · Nationwide Delivery',
    logoBg: 'bg-[#BE185D]',
    logoAccent: '#EC4899',
    logoText: "KAY'S ALBUM"
  },
  {
    id: 'tab-bookcentre',
    name: 'Tab Bookcentre',
    category: 'retail',
    city: 'Yangon',
    type: 'Educational Book Retailer',
    description: 'Established book retailer focusing on school curriculum supplementary materials, Cambridge exam guides, and reference dictionaries.',
    collaboration: 'Stockist of National Geographic English grammar supplements, phonics readers, and Binary Logic computing exercise handbooks.',
    programsAdopted: ['Grammar in Context', 'Phonics Supplementary', 'School Supply Contracts'],
    foundedOrScale: '3 Retail Locations · Yangon',
    logoBg: 'bg-[#15803D]',
    logoAccent: '#22C55E',
    logoText: 'TAB BOOKS'
  },
  {
    id: 'best-gift',
    name: 'Best Gift for Kids',
    category: 'retail',
    city: 'Yangon',
    type: 'Educational Toys & Gift Store',
    description: 'Vibrant retail store offering developmental toys, cognitive puzzles, and early readers for birthdays and school gifts.',
    collaboration: 'Stocking U Book Store’s Fun with Sums, Match & Learn cognitive tiles, and preschool tracing packs.',
    programsAdopted: ['Fun with Sums Tiles', 'Rainbow Nursery Activity Boxes', 'Gift Displays'],
    foundedOrScale: 'Flagship Store in Downtown Yangon',
    logoBg: 'bg-[#9333EA]',
    logoAccent: '#C084FC',
    logoText: 'BEST GIFT'
  },
  {
    id: 'strawberry-sky',
    name: 'Strawberry Sky Children Bookshop',
    category: 'retail',
    city: 'Yangon',
    type: 'Boutique Children Bookstore',
    description: 'Charming boutique bookstore dedicated exclusively to early years picture books, sensory cloth books, and bedtime anthologies.',
    collaboration: 'Carrying Big Sister family milestone series, 101 Crafty & Witty Stories, and animal phonics flashcards.',
    programsAdopted: ['Big Sister Series', '101 Crafty Stories', 'Sensory Flashcards'],
    foundedOrScale: 'Boutique Children Store · Yangon',
    logoBg: 'bg-[#E11D48]',
    logoAccent: '#FB7185',
    logoText: 'STRAWBERRY'
  },
  {
    id: 'glory-children',
    name: 'Glory Children Books',
    category: 'retail',
    city: 'Yangon',
    type: 'Specialized Children Bookseller',
    description: 'Renowned children’s bookseller known for promoting early English reading fluency and interactive sound books.',
    collaboration: 'Retail stocking of Jolly Phonics decodable readers, animal phonics boxes, and Rainbow KG kindergarten sets.',
    programsAdopted: ['Jolly Phonics Readers', 'Rainbow K1 & K2', 'Animal Phonics Sets'],
    foundedOrScale: '2 Retail Outlets · Yangon',
    logoBg: 'bg-[#7E22CE]',
    logoAccent: '#A855F7',
    logoText: 'GLORY'
  },
  {
    id: 'book-line',
    name: 'Book Line / Poe Children Bookstore',
    category: 'retail',
    city: 'Yangon',
    type: 'Community Book Retailer',
    description: 'Community bookstore serving neighborhood families with affordable international children’s stories and student activity materials.',
    collaboration: 'Wholesale partner stocking U Book Store’s imported storybook collections and early math dominoes.',
    programsAdopted: ['Illustrated Storybooks', 'Math Dominoes', 'Drawing & Tracing Pads'],
    foundedOrScale: 'Neighborhood Landmark · Yangon',
    logoBg: 'bg-[#18181B]',
    logoAccent: '#DC2626',
    logoText: 'BOOK LINE'
  },
  {
    id: 'august',
    name: "August Children's Book",
    category: 'retail',
    city: 'Yangon',
    type: 'Modern Children Literature Store',
    description: 'Modern bookstore curating STEM reference materials, graphic novels, and progressive early learning aids.',
    collaboration: 'High-turnover retailer for Dav Pilkey Dog Man series and Knowledge Boosters Science Weather reference sets.',
    programsAdopted: ['Dog Man Series', 'Knowledge Boosters', 'Activity Board Games'],
    foundedOrScale: 'Retail Boutique · Yangon',
    logoBg: 'bg-[#0F172A]',
    logoAccent: '#0EA5E9',
    logoText: 'AUGUST'
  },
  {
    id: 'innwa',
    name: 'Innwa Books & Cafe',
    category: 'retail',
    city: 'Yangon',
    type: 'Flagship Bookstore & Lifestyle Cafe',
    description: 'One of Myanmar’s most beloved cultural and bookstore landmarks, uniting cozy cafe spaces with curated international and children’s literature.',
    collaboration: 'Official retail distributor for U Book Store catalog: Dav Pilkey Dog Man series, tactile STEM dominoes, and interactive reading activity boxes with prominent dedicated retail displays.',
    programsAdopted: ['Dav Pilkey Dog Man Series', 'STEM Activity Boxes', 'Wholesale Consignment'],
    foundedOrScale: '5 Flagship Branches · Yangon',
    logoBg: 'bg-[#18181B]',
    logoAccent: '#F59E0B',
    logoText: 'INNWA'
  },
  {
    id: 'we-distribution',
    name: 'WE Distribution',
    category: 'retail',
    city: 'Yangon',
    type: 'National Book & Stationery Distributor',
    description: 'Leading commercial distributor supplying school stationary, examination books, and imported reading series across upper and lower Myanmar.',
    collaboration: 'Bulk supply channel for U Book Store’s preschool workbooks and National Geographic student materials.',
    programsAdopted: ['Rainbow KG Bulk Supply', 'NatGeo Workbook Consignment', 'Logistics Corridor'],
    foundedOrScale: 'Nationwide Wholesale Distributor · Yangon',
    logoBg: 'bg-[#18181B]',
    logoAccent: '#DC2626',
    logoText: 'WE DIST.'
  },
  {
    id: 'shine',
    name: 'Shine Kids Educational Toys & Stationery',
    category: 'retail',
    city: 'Yangon',
    type: 'Kids Educational & Toy Retailer',
    description: 'Trusted retailer established in 2022 providing high-quality creative toys, student schoolbags, and interactive educational activity sets.',
    collaboration: 'Dedicated retail shelves featuring U Book Store’s Speller Junior, preschool readiness kits, and animal phonics boxes.',
    programsAdopted: ['Speller Junior', 'School Readiness Kits', 'Tactile Math Games'],
    foundedOrScale: 'Serving Families Since 2022 · Yangon',
    logoBg: 'bg-[#15803D]',
    logoAccent: '#F97316',
    logoText: 'SHINE'
  },
  {
    id: 'bm-book-villa',
    name: 'BM Book Villa',
    category: 'retail',
    city: 'Yangon',
    type: 'Premier Educational Book Center',
    description: 'Modern book showroom carrying extensive collections of international academic series, reference encyclopedias, and young learners literature.',
    collaboration: 'Official showroom partner displaying National Geographic Look courseware and Dav Pilkey bestselling titles.',
    programsAdopted: ['NatGeo Look Showcase', 'Dog Man Comic Collections', 'Activity Packs'],
    foundedOrScale: 'Premier Book Showroom · Yangon',
    logoBg: 'bg-[#0284C7]',
    logoAccent: '#0369A1',
    logoText: 'BM VILLA'
  },
  {
    id: 'budget-mommy',
    name: "Budget Mommy Children's Bookstore",
    category: 'retail',
    city: 'Yangon',
    type: 'Family-Focused Value Bookstore',
    description: 'Loved by thousands of mothers across Myanmar for curating top-quality international children’s books at accessible family prices.',
    collaboration: 'High-volume consignment partner for U Book Store’s 101 Crafty Stories, Magical Stories 5-Min Tales, and Rainbow Nursery packs.',
    programsAdopted: ['101 Crafty Stories', '5-Minute Tales', 'Rainbow Nursery Packs'],
    foundedOrScale: 'Family Community Leader · Yangon',
    logoBg: 'bg-[#92400E]',
    logoAccent: '#FACC15',
    logoText: 'BUDGET MOMMY'
  },
  {
    id: 'yar-pyae',
    name: 'Yar Pyae Bookshop',
    category: 'retail',
    city: 'Yangon',
    type: 'Historic Literary & Children Bookstore',
    description: 'Historic Yangon bookstore with decades of trusted community patronage, carrying both heritage literature and contemporary children’s picture books.',
    collaboration: 'Stocking U Book Store’s imported illustrated fairy tales, graphic novels, and early bilingual reading series.',
    programsAdopted: ['Illustrated Children Books', 'Bilingual Readers', 'Heritage Literature'],
    foundedOrScale: 'Historic Downtown Yangon',
    logoBg: 'bg-[#14532D]',
    logoAccent: '#FACC15',
    logoText: 'YAR PYAE'
  },
  {
    id: 'toon',
    name: 'Toon Children Bookstore',
    category: 'retail',
    city: 'Yangon',
    type: 'Playful Kids Book Concept Store',
    description: 'Colorful concept store blending reading nooks, graphic novels, comic subscriptions, and children’s illustrated fiction.',
    collaboration: 'Authorized reseller of Dav Pilkey Dog Man series and graphic novel companion titles.',
    programsAdopted: ['Dog Man Complete Series', 'Illustrated Comic Readers'],
    foundedOrScale: 'Playful Kids Hub · Yangon',
    logoBg: 'bg-[#EF4444]',
    logoAccent: '#22C55E',
    logoText: 'TOON'
  },
  {
    id: 'yangon-book-plaza',
    name: 'Yangon Book Plaza',
    category: 'retail',
    city: 'Yangon',
    type: 'Major Retail Book Center',
    description: 'Massive multi-publisher book shopping destination located at Than Zay, bustling with students, educators, and book collectors daily.',
    collaboration: 'Largest wholesale consignment buyer of DIR’s early childhood educational kits, preschool tracing workbooks, and phonics activity cards.',
    programsAdopted: ['Rainbow KG Retail Sets', 'Phonics Activity Cards', 'Direct Warehouse Supply'],
    foundedOrScale: 'Central Literary Hub · Than Zay, Yangon',
    logoBg: 'bg-[#334155]',
    logoAccent: '#F8FAFC',
    logoText: 'BOOK PLAZA'
  },
  {
    id: 'little-einstein',
    name: 'Little Einstein Educational Toys',
    category: 'retail',
    city: 'Yangon',
    type: 'STEM Learning Boutique',
    description: 'Specialty shop dedicated to science gadgets, building blocks, coding games, and brain-stimulating puzzle books.',
    collaboration: 'Direct distribution partner for Knowledge Boosters Science Weather sets and tactile math dominoes.',
    programsAdopted: ['Knowledge Boosters STEM', 'Tactile Math Games', 'Brain Puzzle Books'],
    foundedOrScale: 'STEM Specialty Shop · Yangon',
    logoBg: 'bg-[#EA580C]',
    logoAccent: '#84CC16',
    logoText: 'EINSTEIN'
  },
  {
    id: 'mercury',
    name: 'Mercury Book Store',
    category: 'retail',
    city: 'Mandalay',
    type: 'Mandalay Premier Book Center',
    description: 'Upper Myanmar’s foremost educational bookstore, providing school textbooks, stationery, and imported children’s fiction across Mandalay Region.',
    collaboration: 'Regional distribution partner for U Book Store, receiving weekly fast-tracked shipments via MTKN Express from DIR’s Yangon central warehouse.',
    programsAdopted: ['U Book Store Mandalay Hub', 'NatGeo Readers', 'Weekly Re-order Corridors'],
    foundedOrScale: 'Premier Mandalay Retail Center',
    logoBg: 'bg-[#18181B]',
    logoAccent: '#71717A',
    logoText: 'MERCURY'
  }
];

export const PARENT_GROUP_ENTITIES = [
  { name: 'Myint Thukha Nadi Co., Ltd', sector: 'Logistics & Holding Group HQ', id: 'mtkn-hq' },
  { name: 'MTKN Express', sector: 'Nationwide Freight & Courier Logistics', id: 'mtkn-express' },
  { name: 'U-Book Education', sector: 'Educational Resources & Publishing', id: 'u-book' },
  { name: 'Digital Information Resources (DIR)', sector: 'EdTech & School Courseware Provider', id: 'dir' },
  { name: 'Steam Mart', sector: 'STEM Kits & Academic Lab Equipment', id: 'steam-mart' },
  { name: 'U Book Store', sector: 'Kids Books & Activity Tools Distribution', id: 'u-book-store' },
  { name: 'Smart Trade Company Limited', sector: 'Multi-Investment Trading Co.', id: 'smart-trade' },
  { name: 'Thai Samsung Spare-Parts Distribution', sector: 'Electronics & Hardware Supply', id: 'samsung-parts' },
  { name: 'Win Smart Business Group Co., Ltd', sector: 'Commercial Enterprise Trading', id: 'win-smart' },
  { name: 'WIN Group', sector: 'Industrial & Wholesale Distribution', id: 'win-group' },
  { name: 'WAN Global Win & Aye Travel & Tour', sector: 'Travel & Corporate Hospitality', id: 'win-aye-travel' },
  { name: 'Win Digital Learning Hub (WDLH)', sector: 'Kids Digital, Robotics & STEM Academy', id: 'win-learning-hub' },
  { name: 'MTKN Logistics International', sector: 'Regional Cross-Border Freight', id: 'mtkn-logistics' },
  { name: 'MTKN Cargo Transport', sector: 'Heavy Transport & Fleet Network', id: 'mtkn-cargo' },
  { name: 'MTKN Express Delivery Services', sector: 'Same-Day City Delivery & Logistics', id: 'mtkn-delivery' },
  { name: 'MTKN Green Agriculture', sector: 'Agro Chemicals & Farming Tech', id: 'mtkn-agro' }
];

export const SERVICES_DATA: ServiceOffering[] = [
  {
    id: 'curriculum-courseware',
    title: 'Curriculum Courseware & Institutional Licensing',
    slideRef: 'Slide 5 & 6 · Core B2B Pillar',
    unit: 'Digital Information Resources Co., Ltd',
    summary:
      'Turnkey curriculum adoption solutions for Preschools, Private K-12, and International Schools. Sourcing, licensing, digital software deployment, and lesson plan mapping.',
    valueProposition:
      'Equips schools with internationally recognized learning standards (Jolly Learning UK, National Geographic Learning, Binary Logic) proven to improve student English fluency and academic assessment results.',
    targetClients: [
      'International Schools & K-12 Private Academies',
      'Preschool Networks & Early Childhood Centers',
      'Bilingual Schools & Examination Prep Centers'
    ],
    deliverables: [
      'Full student print workbooks & teacher master guides',
      'Classroom Presentation Tool (CPT) interactive whiteboard software',
      'Audio CD/MP3 pronunciation assets & animated video modules',
      'Diagnostic placement tests and end-of-term grading rubrics'
    ],
    metrics: '30+ Partner Schools · 100% Vetted Global Curricula',
    workflowSteps: [
      {
        step: '01',
        title: 'Institutional Academic Audit',
        detail: 'We assess your current grade structure, English CEFR targets, and classroom tech setup.'
      },
      {
        step: '02',
        title: 'Inspection Copies & Committee Evaluation',
        detail: 'Complimentary physical sample sets and whiteboard demo licenses sent to your board.'
      },
      {
        step: '03',
        title: 'Teacher Training & Software Deployment',
        detail: 'Certified pedagogical workshops for your teaching staff with in-service lesson planning.'
      },
      {
        step: '04',
        title: 'Local Warehouse Supply & Mid-Year Reorders',
        detail: 'On-demand buffer stock guaranteed from our Yangon logistics warehouse with zero customs delay.'
      }
    ],
    accentColor: '#2563EB',
    iconType: 'courseware'
  },
  {
    id: 'books-activities-distribution',
    title: 'Kids Books & Educational Activities Distribution',
    slideRef: 'Slide 5 & 16 · Retail & B2C/B2B Pillar',
    unit: 'U Book Store (UBS)',
    summary:
      'Curated distribution of bestselling children’s graphic novels, early readers, STEM reference kits, and hands-on tactile activity boxes across Myanmar.',
    valueProposition:
      'Transforms bookstore shelves into high-engagement children’s reading destinations. Provides reliable wholesale supply, promotional displays, and consignment terms.',
    targetClients: [
      'Independent Bookstores & National Retail Chains',
      'School Libraries & After-School Reading Corners',
      'Children’s Toy Boutiques & Lifestyle Cafes'
    ],
    deliverables: [
      'Official wholesale distribution of Dav Pilkey’s Dog Man series',
      'Rainbow Nursery & Kindergarten 12-book comprehensive packs',
      'Hands-on Math Sums, Dominoes, and Animal Phonics activity boxes',
      'Custom point-of-sale display racks and marketing collateral'
    ],
    metrics: '50+ Books & Activities · 50+ Retail Partners · 3+ Cities',
    workflowSteps: [
      {
        step: '01',
        title: 'Catalog & Margin Consultation',
        detail: 'Curated selection of high-velocity children titles matched to your retail foot-traffic.'
      },
      {
        step: '02',
        title: 'Consignment & Wholesale Terms',
        detail: 'Flexible commercial terms, dealer tier discounts, and promotional display support.'
      },
      {
        step: '03',
        title: 'Direct Nationwide Logistics Dispatch',
        detail: 'Fast tracked distribution through MTKN Express to Yangon, Mandalay, and regional centers.'
      },
      {
        step: '04',
        title: 'Restock Cycles & Seasonal Launches',
        detail: 'Priority reservation for new international title drops, back-to-school surges, and book fairs.'
      }
    ],
    accentColor: '#D97706',
    iconType: 'bookstore'
  },
  {
    id: 'ict-robotics-stem-classes',
    title: 'ICT, Robotics & STEM Academy Sessions',
    slideRef: 'Slide 5, 19 & 20 · EdTech Academy Pillar',
    unit: 'Win Digital Learning Hub (WDLH)',
    summary:
      'Practical, hands-on weekend and holiday academy sessions empowering young learners (ages 5–17) with mechanical engineering, Scratch block coding, and authentic Python.',
    valueProposition:
      'Bridges Myanmar’s digital skills gap by taking children from passive consumer screen time to active creators of robotics, algorithms, and technology innovations.',
    targetClients: [
      'Parents & Young Learners seeking 21st-Century Tech Fluency',
      'Private Schools seeking Weekend Co-Curricular Lab Partnerships',
      'High School Students preparing for Global Computing Examinations'
    ],
    deliverables: [
      '1-to-1 physical robotic assembly chassis, motors, and micro-controllers',
      'ISTE SEAL accredited computing syllabus (Digital Kids & Teens)',
      'Term project showcases: playable games, robotic obstacle solvers, and CLI tools',
      'Official DIR Student Achievement Certifications'
    ],
    metrics: '1-to-1 Robotic Kits · Certified Instructors · Weekend Batches',
    workflowSteps: [
      {
        step: '01',
        title: 'Free Diagnostic Trial Class',
        detail: 'Students attend a hands-on robotic build session to assess logical aptitude and baseline.'
      },
      {
        step: '02',
        title: 'Age-Appropriate Pathway Placement',
        detail: 'Placed in Junior Robotics (5–8), Game Coding (8–12), or Advanced Python (12–17).'
      },
      {
        step: '03',
        title: 'Hands-On Term Projects',
        detail: 'Weekly experiential lab time with personal physical kits, instructor debugging, and teamwork.'
      },
      {
        step: '04',
        title: 'Demonstration Day & Certification',
        detail: 'Parents attend final project exhibitions; students receive ISTE-aligned milestone certificates.'
      }
    ],
    accentColor: '#E11D48',
    iconType: 'stem'
  },
  {
    id: 'teacher-training-consultancy',
    title: 'Teacher Professional Development & Academic Consultation',
    slideRef: 'Slide 2 & 6 · Academic Quality Pillar',
    unit: 'DIR Academic Support Services',
    summary:
      'Comprehensive in-service teacher workshops, phonics pronunciation masterclasses, and digital whiteboard pedagogical training for client schools.',
    valueProposition:
      'Ensures successful classroom adoption by certifying teachers in modern communicative methodologies, interactive whiteboard tools, and student formative assessment.',
    targetClients: [
      'School Principals & Curriculum Coordinators',
      'Head of English & Primary Teachers',
      'Early Childhood Preschool Educators'
    ],
    deliverables: [
      'On-site or digital teacher training masterclasses with certified trainers',
      'Lesson planning templates, unit pacing guides, and sample test banks',
      'Annual Teacher Professional Development Certifications',
      'Quarterly classroom observation and pedagogical feedback consultations'
    ],
    metrics: '100+ Teachers Trained Annually · Certified Phonics & CEFR Pedagogy',
    workflowSteps: [
      {
        step: '01',
        title: 'Needs Assessment & Pacing Design',
        detail: 'Review academic calendar, weekly teaching hours, and teacher fluency levels.'
      },
      {
        step: '02',
        title: 'Hands-On Masterclass Workshop',
        detail: 'Intensive immersion in Jolly synthetic phonics actions or NatGeo communicative techniques.'
      },
      {
        step: '03',
        title: 'Classroom Tech Integration',
        detail: 'Hands-on training in operating digital whiteboard presentation tools and student LMS.'
      },
      {
        step: '04',
        title: 'Ongoing In-Service Coaching',
        detail: 'Direct hotline for teachers with refresher sessions before mid-term exams.'
      }
    ],
    accentColor: '#7C3AED',
    iconType: 'training'
  }
];

export const COMPANY_TIMELINE: TimelineEvent[] = [
  {
    year: '2005',
    title: 'Founding of Parent MTKN Group',
    milestone: 'April 28th, 2005',
    description:
      'Founded in Yangon, Myint Thuka Nadi Co., Ltd began as a dedicated trading and logistics enterprise, building bedrock infrastructure across Myanmar.',
    impactMetrics: 'Initial trading routes established across lower Myanmar',
    category: 'group',
    highlights: ['Headquartered in Yangon', 'Logistics network established', 'Multidisciplinary trade operations']
  },
  {
    year: '2012',
    title: 'Regional Footprint & 4+ Countries Expansion',
    milestone: 'Cross-Border Partnerships',
    description:
      'Expanded corporate logistics and import-export operations into Thailand, Singapore, China, and regional Southeast Asian markets with over 300 employees.',
    impactMetrics: '4+ Operating Countries · 300+ Workforce',
    category: 'expansion',
    highlights: ['Cross-border trading corridors', 'Sustainable supply chain partnerships', 'Logistics reliability benchmark']
  },
  {
    year: '2018',
    title: 'Incorporation of DIR Company Limited',
    milestone: 'Education Division Born',
    description:
      'Recognizing Myanmar’s critical need for vetted international learning standards, MTKN Group established Digital Information Resources Co., Ltd (DIR) as its dedicated education arm.',
    impactMetrics: 'Secured official distribution rights for Jolly Learning & NatGeo',
    category: 'dir',
    highlights: ['Incorporated in Yangon', 'B2B institutional school focus', 'First 10 partner schools enrolled']
  },
  {
    year: '2020',
    title: 'Digital Whiteboard & Remote Learning Hub',
    milestone: 'Digital Transformation',
    description:
      'Pioneered interactive digital classroom presentation tools (CPT) and launched Win Digital Learning Hub to deliver weekend STEM, robotics, and coding sessions.',
    impactMetrics: 'Deployed Jolly Classroom software across 25+ campuses',
    category: 'dir',
    highlights: ['Interactive touchscreen software', 'Win Digital Learning Hub weekend academy', 'Teacher remote LMS workshops']
  },
  {
    year: '2023',
    title: 'ISTE SEAL Accreditation & Bookstore Boom',
    milestone: 'Global Standard Validation',
    description:
      'Partnered with Binary Logic to introduce Digital Kids & Digital Teens with the prestigious ISTE SEAL (valid through 2026). U Book Store expanded to 50+ retail bookstores in 3+ cities.',
    impactMetrics: 'Official ISTE SEAL Certification · 50+ Retail Partners',
    category: 'accreditation',
    highlights: ['ISTE SEAL valid 2023–2026', 'U Book Store nationwide network', 'Dav Pilkey Dog Man distribution']
  },
  {
    year: '2026',
    title: 'Tri-Pillar National EdTech Leader',
    milestone: '21+ Years Group Legacy',
    description:
      'DIR stands as Myanmar’s definitive educational resource leader: uniting B2B courseware, nationwide bookstore distribution, and hands-on robotics labs under 500+ group professionals.',
    impactMetrics: '21+ Years Group Heritage · 500+ Staff · 30+ Partner Schools',
    category: 'expansion',
    highlights: ['3 integrated business pillars', 'Full K-12 CEFR & STEM continuum', 'Headquarters at Mayangone Yangon']
  }
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: 'u-win-naing',
    name: 'U Win Naing',
    role: 'Managing Director & Board Chairman',
    department: 'Executive Governance · MTKN & DIR Group',
    bio:
      'Over 22 years of executive stewardship leading Myint Thuka Nadi Group from a single trading venture into a diversified enterprise with 500+ professionals across Myanmar and Southeast Asia.',
    education: 'M.B.A. (International Business), B.Sc.',
    specialization: ['Corporate Strategy', 'Cross-Border Supply Chain', 'Public-Private Educational Partnerships'],
    keyQuote:
      'Our deep-rooted commitment is to equip Myanmar’s next generation with the exact international tools and confidence needed on the global stage.',
    avatarBg: 'bg-blue-600'
  },
  {
    id: 'dr-thida-myint',
    name: 'Dr. Thida Myint',
    role: 'Head of Academic Curricula & CEFR Standards',
    department: 'Academic Quality & School Services',
    bio:
      '18+ years in applied linguistics and curriculum design. Directs institutional alignment with Cambridge English, CEFR benchmarks, and National Geographic Learning implementations across partner schools.',
    education: 'Ph.D. in Applied Linguistics, M.A. in Curriculum Development',
    specialization: ['CEFR Mapping', 'Assessment Frameworks', 'Teacher In-Service Certifications'],
    keyQuote:
      'A great textbook is only as powerful as the pedagogical support behind it. We ensure every school receives ongoing teacher coaching.',
    avatarBg: 'bg-indigo-600'
  },
  {
    id: 'ko-aung-kyaw-moe',
    name: 'Ko Aung Kyaw Moe',
    role: 'Lead STEM & Robotics Engineering Specialist',
    department: 'Win Digital Learning Hub (WDLH)',
    bio:
      'Passionate robotics educator and mechatronics engineer. Architected the 3-stage WDLH hands-on curriculum spanning visual block coding, Micro:bit sensor cars, and secondary Python software development.',
    education: 'B.Eng. in Mechatronics & Computer Engineering',
    specialization: ['Robotics Prototyping', 'Python Pedagogy', 'ISTE Seal Educational Standards'],
    keyQuote:
      'We don’t just teach kids how to use technology—we empower them to build machines, code algorithms, and solve real-world community problems.',
    avatarBg: 'bg-rose-600'
  },
  {
    id: 'daw-sandar-win',
    name: 'Daw Sandar Win',
    role: 'Director of Retail Distribution & Publishing Partnerships',
    department: 'U Book Store & Wholesale Channels',
    bio:
      'Oversees nationwide wholesale and consignment operations across 50+ retail book centers and toy boutiques in Yangon, Mandalay, and regional cities. Manages global publisher licensing.',
    education: 'B.Com. in Marketing & Supply Chain Logistics',
    specialization: ['Retail Merchandising', 'Wholesale Consignment Operations', 'Publisher Relations'],
    keyQuote:
      'Reading must be fun, tactile, and immediately accessible. Our curated books bring genuine joy into homes and classrooms every day.',
    avatarBg: 'bg-amber-600'
  },
  {
    id: 'ma-ei-ei-phyo',
    name: 'Ma Ei Ei Phyo',
    role: 'Senior Phonics Trainer & Early Childhood Specialist',
    department: 'Jolly Phonics & Rainbow KG Division',
    bio:
      'Certified Jolly Phonics international master trainer who has trained over 400 kindergarten and early primary teachers across Myanmar in multi-sensory synthetic phonics and motor skill development.',
    education: 'Postgraduate Diploma in Early Childhood Education (Montessori & Synthetic Phonics)',
    specialization: ['Synthetic Phonics Methodology', 'Preschool Fine Motor Readiness', 'Classroom Whiteboard Animation'],
    keyQuote:
      'When a 4-year-old child unlocks the magic of blending sounds into words, a whole universe of independent curiosity opens up.',
    avatarBg: 'bg-emerald-600'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'kbtc-international',
    author: 'Daw May Thu Khaing',
    role: 'Head of Primary English Faculty',
    organization: 'KBTC International School',
    category: 'school',
    location: 'Yangon Campus',
    quote:
      'DIR’s support went far beyond delivering textbooks. Their in-service teacher workshops completely transformed how our primary faculty conduct communicative lessons. The National Geographic Look interactive whiteboard software keeps our young learners deeply captivated every period.',
    programAdopted: 'National Geographic Look (Levels 1–6) & Jolly Classroom',
    rating: 5,
    year: '2025',
    avatarBg: 'bg-blue-600',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'royal-smile-preschool',
    author: 'U Zaw Min Latt',
    role: 'Founder & Academic Director',
    organization: 'Royal Smile Pre School',
    category: 'school',
    location: 'Mandalay',
    quote:
      'The Rainbow KG Series perfectly bridges foundational mathematics and synthetic phonics for Asian preschool learners. With Jolly Classroom software, our 4 and 5-year-olds achieved remarkable sound blending accuracy, and parents notice the reading confidence within weeks.',
    programAdopted: 'Rainbow Nursery & Kindergarten + Jolly Phonics',
    rating: 5,
    year: '2024',
    avatarBg: 'bg-indigo-600',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'pegu-international',
    author: 'Daw Hnin Wut Yee',
    role: 'Secondary Academic Coordinator',
    organization: 'Pegu International School',
    category: 'school',
    location: 'Bago Region',
    quote:
      'Finding an internationally accredited computer science syllabus with the official ISTE SEAL was a milestone for our middle and high school. The Binary Logic Digital Teens Python modules provide our students with verified academic credentials for university admissions.',
    programAdopted: 'Binary Logic Digital Kids & Digital Teens (ISTE SEAL)',
    rating: 5,
    year: '2025',
    avatarBg: 'bg-emerald-600',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'wdlh-student-shwe-yi',
    author: 'Shwe Yi Htet',
    role: 'Grade 9 Student & Robotics Alum',
    organization: 'Win Digital Learning Hub',
    category: 'student',
    location: 'Mayangone Weekend Academy',
    quote:
      'I started building basic wheeled cars with gear ratios in Level 1, and now I code autonomous obstacle-avoidance robots in Python. Learning at WDLH isn’t staring at slides—we actually assemble real circuit micro-controllers, test, debug, and demo working machines.',
    programAdopted: 'WDLH Python & Sensor Robotics Lab',
    rating: 5,
    year: '2026',
    avatarBg: 'bg-rose-600',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'parent-khin-mar-lar',
    author: 'Daw Khin Mar Lar',
    role: 'Parent of 7-Year-Old Learner',
    organization: 'Win Digital Hub & Early Readers',
    category: 'student',
    location: 'Yangon',
    quote:
      'My son used to hesitate with English pronunciation and reading aloud in Grade 1. After four months with Jolly Classroom and Saturday morning robotics at Win Digital Hub, he reads storybooks independently and excitedly explains how Scratch code blocks work to his cousins!',
    programAdopted: 'Jolly Phonics Multi-Sensory & Scratch Junior',
    rating: 5,
    year: '2025',
    avatarBg: 'bg-purple-600',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'innwa-books-cafe',
    author: 'Ko Kyaw Thet Naing',
    role: 'Merchandising & Retail Operations Lead',
    organization: 'Innwa Books & Cafe',
    category: 'bookstore',
    location: 'Yangon Flagship',
    quote:
      'U Book Store is our most dependable children’s educational distributor. The Dav Pilkey Dog Man series and tactile STEM dominoes are among our highest velocity titles every weekend. Having a Yangon buffer warehouse guarantees we never run dry during book surges.',
    programAdopted: 'U Book Store Wholesale & Consignment Supply',
    rating: 5,
    year: '2025',
    avatarBg: 'bg-amber-600',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
  }
];


