// ══════════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════════

const SESSIONS = [
  // ── SPECIAL / OPENING ──
  {
    id: 's1',
    type: 'special',
    title: 'Welcoming Remarks',
    time: '9:00 – 9:15 AM',
    timeSort: 900,
    location: 'Rotunda – Virginia Room',
    building: 51,
    desc: 'Welcoming Remarks by Dr. Roger Byrne, Dean of Cook-Cole College of Arts and Sciences.',
    presenters: []
  },
  {
    id: 's2',
    type: 'special',
    title: 'Keynote Address & Award Ceremony',
    time: '1:00 – 2:00 PM',
    timeSort: 1300,
    location: 'Maugans – Martinelli Board Room (Bldg 42)',
    building: 42,
    desc: 'Keynote by Ms. Elizabeth Kostelny \'81, Former CEO of Preservation Virginia. Followed by the Incite Awards and Longwood Excellence in Research and Inquiry Awards.',
    presenters: [
      { name: 'Ms. Elizabeth Kostelny \'81', topic: 'Keynote Address — Distinguished Professional Achievement Alumni Award, Former CEO of Preservation Virginia', time: '1:10 PM' },
      { name: 'Dr. Hannah Dudley-Shotwell', topic: 'Presentation of Incite Awards', time: '1:40 PM' },
      { name: 'Dr. Amorette Barber', topic: 'Presentation of Longwood Excellence in Research and Inquiry Awards', time: '1:45 PM' }
    ]
  },
  // ── ORAL PRESENTATIONS ──
  {
    id: 'o1',
    type: 'oral',
    title: 'Communication Research (COMM 460/462)',
    subtitle: 'Live Streamed on YouTube',
    time: '9:00 AM – 1:00 PM',
    timeSort: 900,
    location: 'Blackwell Ballroom Balcony',
    building: 42,
    mentor: 'Dr. Stouffer & Dr. Hosterman',
    presenters: [
      { time: '9:05', name: 'Lily Beverley & Anna Davis', topic: 'The Impact of Short-Form Entertainment on Attention Span in College-Aged Individuals' },
      { time: '9:14', name: 'Lily Stohlman & Ella VanLuvender', topic: 'Social Media and Political Echo Chambers' },
      { time: '9:23', name: 'Kayleigh Kiefer & McKayla Moxcey', topic: 'The Impact of a Film\'s Sound Design on Audience Emotional Connection' },
      { time: '9:32', name: 'Taylor Blount & Stephanie Jennings', topic: 'Political Self-Disclosure in the College Classroom' },
      { time: '9:41', name: 'Madison Mocello & Akilah Williams', topic: 'Emotional Outcomes of Parasocial Relationships in Social Media and Traditional Channels' },
      { time: '9:50', name: 'Braden Emmerson', topic: 'Movie and Television Influence on Career Decisions' },
      { time: '9:59', name: 'Savannah Bartlett & Mari Patterson', topic: 'Digital Distortions: Examining Spreadable Misogynoir on Black Women\'s Identity Formation' },
      { time: '10:08', name: 'Josie Niswander & Emilio Salgado Garcia', topic: 'Emotional Engagement in Political and Non-Political Art' },
      { time: '10:17', name: 'Rachel Houston & Annabell Swabb', topic: 'Perceived Power and Physical Attractiveness in Criminals' },
      { time: '10:26', name: 'Amory Wheeler & Adriene Cote\'', topic: 'Political Ideology and Attitudes Towards Cancel Culture' },
      { time: '10:35', name: 'Michayla Pisa & Andrew Lindsay', topic: 'Codeswitching: Digital Media and Interpersonal Communication' },
      { time: '10:44', name: 'Maria Chavez-Alonso', topic: 'FOMO, Social Media Platform Use, and Perceived Social Connection' },
      { time: '11:00', name: 'Megan Gammon & Rosalie Showalter', topic: 'Media Influence on Constructions of Girlhood and Feminine Identity' },
      { time: '11:09', name: 'Britney Houtz & Nina Lavoie', topic: 'Instagram Self-Presentation and Identity Formation in College Students' },
      { time: '11:18', name: 'Kennedy Olsen & Emma Horne', topic: 'Parasocial Relationships on Social Media: Influencer Communication' },
      { time: '11:27', name: 'Tyler Bagent', topic: 'Political Awareness and Stress Levels Among College Students' },
      { time: '11:36', name: 'Kenji Carillo & Noah Schloman', topic: 'Credibility and "Tail" Culture in College Sports Betting' },
      { time: '11:45', name: 'Caroline Culbreth & Julia Glasser', topic: 'Emotional Echoes: How Music Affects Human Mood and Emotion' },
      { time: '11:54', name: 'Shannon Velardi', topic: 'Viewer Immersion Across Movie Theater and Streaming Platforms' },
      { time: '12:03', name: 'Carly Dolan & Kaylee Garrison', topic: 'Music, Identity, and Algorithmic Curation in the Lives of College Students' },
      { time: '12:12', name: 'Cami Lane & Ryan Stock', topic: 'What Factors Influence Individuals to Follow Social Media Influencers?' },
      { time: '12:21', name: 'Jose Ramos Flores & Alexandra Huerta', topic: 'Effectiveness of Nostalgia in Commercial Marketing' },
      { time: '12:30', name: 'Zach Caudill & Nick Jones', topic: 'Art Over Artist' }
    ]
  },
  {
    id: 'o2',
    type: 'oral',
    title: 'Biology 475: Animal Behavior',
    time: '9:15 AM – 1:00 PM',
    timeSort: 915,
    location: 'Rotunda – Prince Edward Room (Bldg 51)',
    building: 51,
    mentor: 'Dr. Adam Franssen',
    presenters: [
      { time: '9:15', name: 'Laura Honeycutt', topic: 'Stereotypical Behaviors of Bengal Tigers in Captivity' },
      { time: '9:30', name: 'Anna Magee', topic: 'Food Fighters: Budgies in Captivity' },
      { time: '9:45', name: 'Amélie Williams', topic: 'Meerkat Background and Behavior' },
      { time: '10:00', name: 'Mateo Kausek', topic: 'Analyzing the Blue and Gold Macaw\'s Social Behavioral Patterns' },
      { time: '10:15', name: 'Melisson Piercy', topic: 'Vigilance, Vocalization, and Social Structure: Black-Tailed Prairie Dogs' },
      { time: '10:30', name: 'Sydnie Jones', topic: 'Understanding the Behavior of African Cheetah' },
      { time: '10:45', name: 'Trinity Luxeder', topic: 'Behavioral Time Budgets of Chilean Flamingos in a Zoo Setting' },
      { time: '11:15', name: 'Jacqueline Drago', topic: 'Temperament of Sphenicus demersus (African Penguin) at the Metro Richmond Zoo' },
      { time: '11:30', name: 'Matthias Borneff', topic: 'Social Hierarchy Dynamics in a Captive Lion Pride' },
      { time: '11:45', name: 'Aidan McDuffie', topic: 'African Clawless Otter: A Behavioral Study' },
      { time: '12:00', name: 'Keira Trigg', topic: 'The Ethology of the Rüppell\'s Griffon Vulture' },
      { time: '12:15', name: 'Jocelyn Escobar', topic: 'Maternal Bonds of the "Ghost Cat of the Mountains"' },
      { time: '12:30', name: 'Makayla Seamster', topic: 'Chill Giants: An Observation Study of Capybaras' }
    ]
  },
  {
    id: 'o3',
    type: 'oral',
    title: 'Biology 450: Biology of Cancer',
    time: '9:30 – 11:00 AM',
    timeSort: 930,
    location: 'Rotunda – Room 108 (Bldg 51)',
    building: 51,
    mentor: 'Dr. Amorette Barber',
    presenters: [
      { time: '9:30', name: 'Jaedyn Colon, Aidan McDuffie, Camille Adenauer, Jacob Iddings', topic: 'A Comparison of Mutations in Neuroblastoma vs. Pheochromocytomas' },
      { time: '9:45', name: 'Keira Trigg, Jocelyn Escobar, Ja\'Mea Henderson, Rachel Danzitz', topic: 'A Comparative Analysis of Genomic Alterations in Small Cell Lung Cancer' },
      { time: '10:00', name: 'Lymaris Mayen, Sara Cox, Kendra DeFilippo, Makayla Seamster', topic: 'Comparing Genetic Mutations in Pediatric Ewing Sarcoma versus Adult Osteosarcoma' },
      { time: '10:15', name: 'Kimora Johnson, Emma Elwell, Kylie Houseknecht', topic: 'Divergent Patterns of TERT Mutation Across Bladder Cancer Types' },
      { time: '10:30', name: 'Alyson Cuthbertson, Logan Miller, Taylor Kneessi', topic: 'The Big Five: How the Top Five Genes Impact Cervical Cancer Survival' },
      { time: '10:45', name: 'Brianna Edgar, Gabi Quaresma, Angelina Scotece', topic: 'Comparative Analysis of IDH1 Gene Mutations Across Different Glioma Subtypes' }
    ]
  },
  {
    id: 'o4',
    type: 'oral',
    title: 'Cormier Honors & Independent Research',
    time: '9:30 AM – 12:50 PM',
    timeSort: 930,
    location: 'Rotunda – Room 115 (Bldg 51)',
    building: 51,
    mentor: 'Various Faculty Sponsors',
    presenters: [
      { time: '9:30', name: 'Emma Snead, Jay Geeslin', topic: 'Microplastics and Batrachochytrium dendrobatidis', mentor: 'Dr. Amanda Starr' },
      { time: '9:45', name: 'Zoe Sawyer', topic: 'Flocs Fuel Dead Zone in Chesapeake Bay Tidal Creek', mentor: 'Dr. Dina Leech' },
      { time: '10:00', name: 'Sarah Moore, Ellie Lowry, Frances Ulysse', topic: 'Mobile Phone Use, Attachment Style, and Motivation to Learn', mentor: 'Dr. Chris Bjornsen' },
      { time: '10:15', name: 'Claire Hollingsworth', topic: 'How Do Beliefs Impact Lifestyle?', mentor: 'Dr. CJ Alderson' },
      { time: '10:45', name: 'Austin Burnett', topic: 'Abortion Funds: An Unexplored Keystone of the Reproductive Justice Movement', mentor: 'Dr. Hannah Dudley-Shotwell' },
      { time: '11:00', name: 'Addison Carney', topic: 'It Takes a Village: Communities Supporting Child Brain Development After IPV Exposure', mentor: 'Dr. Lee Bidwell' },
      { time: '11:15', name: 'Claire Bain', topic: 'Exploring Challenges of Parents with Children Hospitalized in the PICU after Discharge', mentor: 'Dr. Scott Grether' },
      { time: '11:30', name: 'Destiny Carrington', topic: 'Race, Media, and Mock Drafts', mentor: 'Dr. Scott Grether' },
      { time: '11:45', name: 'Grace White', topic: 'Life Skill Group Design', mentor: 'Dr. Ian Danielson' },
      { time: '12:00', name: 'Savannah Farley', topic: 'Bridging the Gap: Improving Health Outcomes Through Integrated Care', mentor: 'Dr. Ian Danielsen' },
      { time: '12:15', name: 'Chase Gionis', topic: 'Inscryption and the Role of Alternate Reality Gaming in Critiquing Player Agency', mentor: 'Dr. Katrina Marks' },
      { time: '12:30', name: 'Madison Howell', topic: 'How Music Supports Child Development in Kindergarten', mentor: 'Dr. Jacqueline Secoy' }
    ]
  },
  {
    id: 'o5',
    type: 'oral',
    title: 'Biology 251: Intro to Ecology & Evolution',
    time: '9:45 – 11:30 AM',
    timeSort: 945,
    location: 'Rotunda – Virginia Room (Bldg 51)',
    building: 51,
    mentor: 'Dr. Ken Fortino & Dr. Jill Pestka',
    presenters: [
      { time: '9:45', name: 'Morgan Chiles, Abbey Felts, Grace Pierce, Ginny Doughty', topic: 'Plant Growth Correlation to Competition and Soil Quality' },
      { time: '9:55', name: 'Laniya Moses, Sydney O\'Hara-Wood, Seth Franzyshen', topic: 'How Proximity to Human Infrastructure Affects Biodiversity and Invasive Plants' },
      { time: '10:05', name: 'Matthew LaMotte, Cassidy Elliott, Liam Porter', topic: 'Analyzing Alien Plants Effects on Native Growth' },
      { time: '10:15', name: 'Skylar Edwards, Kealy Jarmillio, Arleth Gomez, Annah Snead', topic: 'The Impact of Invasive Species to Each Other' },
      { time: '10:25', name: 'Ayanna Wesley, Chelsey Williams, Phaba Childress, Sydnee Reed', topic: 'The Effects of Deforestation on Native Species' },
      { time: '10:35', name: 'Emma Hale, Leah Dimick, Grace Vanderploeg, Carly Voorhees', topic: 'Home‑Field Advantage: Do Native Plants Grow Better?' },
      { time: '10:45', name: 'Lee Burns, Aiden Jamerson, Livia Richardson', topic: 'How Pollution Affects Biodiversity in Local Aquatic Ecosystems' },
      { time: '11:00', name: 'Brittney Davis, Iszabella Flores, Albert Barrie', topic: 'Spatial Influence on Lonicera Japonica (Japanese Honeysuckle)' },
      { time: '11:15', name: 'Hunter Voelkner, Quinton Wade, Alexander McNiven', topic: 'Spider Habitat Effect on Species Frequency and Movement Speed' }
    ]
  },
  {
    id: 'o6',
    type: 'oral',
    title: 'Longwood Senior Thesis Program',
    time: '11:15 AM – 12:30 PM',
    timeSort: 1115,
    location: 'Rotunda – Room 116 (Bldg 51)',
    building: 51,
    mentor: 'Various Faculty Sponsors',
    presenters: [
      { time: '11:15', name: 'Rachel Danzitz', topic: 'Iron-Oxidizing Bacteria from Environmental Sampling', mentor: 'Dr. Bjoern Ludwar' },
      { time: '11:30', name: 'Sarah Lacy', topic: 'Quantifying Rates of Coastal Change along Smith Island, Maryland', mentor: 'Dr. Ravi Sankar' },
      { time: '11:45', name: 'Nicholas Duellman', topic: 'Development of Genomic Tools for Environmental DNA Detection of Freshwater Mussels', mentor: 'Prof. Jameson Hinkle' },
      { time: '12:00', name: 'James Daniel', topic: 'Design and Synthesis of Polyphenolic Hemibastadin Derivatives as Potential Biofilm Inhibitors', mentor: 'Dr. Andrew Yeagley' },
      { time: '12:15', name: 'Bryant Corbin', topic: 'The Chemical Nature of Colors: Exploration in Variance Between Natural and Synthetic Colorants', mentor: 'Dr. Sarah Porter' }
    ]
  },
  {
    id: 'o7',
    type: 'oral',
    title: 'Art 385: Critical Making Dream Exhibition',
    time: '1:00 – 3:15 PM',
    timeSort: 1300,
    location: 'Bedford – Room 111 (Bldg 8)',
    building: 8,
    mentor: 'Prof. Kathleen Kennedy',
    desc: 'Students from ART 385: Critical Making present research for their Dream Exhibition — acting as curators describing an exhibition of their own conception alongside the work of other artists.',
    presenters: [
      { name: 'Genevieve Bachman, Jade Caudill, Makenna Clark-Quigley, Alec Corwin, Julia Erk', topic: 'Critical Making Research Presentations' },
      { name: 'Molly Fowlkes, Shane Jackson, Sophie King, Savannah Smelley, Sam Staton', topic: 'Critical Making Research Presentations' },
      { name: 'Nayla Turpin, Liz Valentine, Ashley Whitehorne', topic: 'Critical Making Research Presentations' },
      { name: 'Onyinye Ugbomah-Otunuya', topic: 'Addressing the African Monolith' }
    ]
  },
  {
    id: 'o8',
    type: 'oral',
    title: 'English 320: Critical Theory',
    time: '2:00 – 5:30 PM',
    timeSort: 1400,
    location: 'Rotunda – Virginia Room (Bldg 51)',
    building: 51,
    mentor: 'Dr. Sean Barry',
    presenters: [
      { time: 'Panel 1', name: 'Chris Floyd', topic: 'Consciousness in The Walking Dead (2010-22)' },
      { time: 'Panel 1', name: 'Christian Mahmud', topic: 'Sexual Assault in Alien (1979)' },
      { time: 'Panel 1', name: 'Elizabeth Farrell', topic: 'Stephanie Meyer\'s The Host and the Sympathetic Parasite' },
      { time: 'Panel 1', name: 'Adriana Hornsby', topic: 'Water of the Womb: Perversion of the Mother in Spirited Away' },
      { time: 'Panel 2', name: 'Abigail Driscoll', topic: 'Feminism and Sexual Politics in T.S. Eliot\'s The Waste Land' },
      { time: 'Panel 2', name: 'Ella Dahl', topic: 'Nonsense in Waiting for Godot' },
      { time: 'Panel 2', name: 'Hannah Lane', topic: 'Evil\'s Discourses: Hobbits, Orcs, and Men in Tolkein\'s The Two Towers' },
      { time: 'Panel 2', name: 'Maria Williams', topic: 'Love and Labor in Dorothy Sayers\'s Gaudy Night' },
      { time: 'Panel 3', name: 'Emily Sowers', topic: 'Knowledge and Intention in Mary Shelley\'s Frankenstein' },
      { time: 'Panel 3', name: 'Jensen Auman', topic: 'Aunt Phillis\'s Cottage: Absence, Anxiety, and Anti-Tom Novels' },
      { time: 'Panel 3', name: 'Arianna Kerr', topic: 'Repetition, Silence, and Play in The Phantom of the Opera (1910)' },
      { time: 'Panel 4', name: 'Abby Vance', topic: 'Donnie Darko\'s Uncanny Smile' },
      { time: 'Panel 4', name: 'Vulcan Benson', topic: 'Women and Myth in Bless Me, Ultima' },
      { time: 'Panel 4', name: 'Noah McGuire', topic: 'Sgt. Pepper\'s Double Meanings' },
      { time: 'Panel 4', name: 'Nicole Samuel', topic: 'Lack in Harry Potter and the Sorcerer\'s Stone' }
    ]
  },
  {
    id: 'o9',
    type: 'oral',
    title: 'Honors & Independent Research (Afternoon)',
    time: '2:15 – 3:15 PM',
    timeSort: 1415,
    location: 'Rotunda – Room 115 (Bldg 51)',
    building: 51,
    mentor: 'Various Faculty Sponsors',
    presenters: [
      { time: '2:15', name: 'Emma Heisig, Ryan Urban', topic: 'Making Electricity Sing: AC/DC Circuits via Guitar Pedals', mentor: 'Dr. Tim Holmstrom' },
      { time: '2:30', name: 'Edward Corobana', topic: 'Transformer AI Architecture', mentor: 'Dr. Sanish Rai' },
      { time: '2:45', name: 'Alylah Peters', topic: 'Machine Learning Analysis of Building Sensor Data', mentor: 'Dr. Sanish Rai' },
      { time: '3:00', name: 'Raven Rutherford', topic: 'AI Comparisons at Higher Levels', mentor: 'Dr. Robert Marmorstein' }
    ]
  },
  {
    id: 'o10',
    type: 'oral',
    title: 'PRISM: Perspectives on Research in Science & Math',
    time: '2:15 – 3:45 PM',
    timeSort: 1415,
    location: 'Rotunda – Room 116 (Bldg 51)',
    building: 51,
    mentor: 'Various Faculty Sponsors',
    presenters: [
      { time: '2:15', name: 'Kimora Johnson', topic: 'Tiny Tenants: Microbial Communities of Disease-Infected Amphibians', mentor: 'Dr. Amanda Starr' },
      { time: '2:30', name: 'Sunshine Kimball', topic: 'An Anatomical Assessment of the Adult Skeleton of Xenopus', mentor: 'Dr. Stephanie Keer' },
      { time: '2:45', name: 'Jackson LoFiego', topic: 'Has Aimes Creek Lost Its Breath? Assessing Hypoxia Near Hull Springs', mentor: 'Dr. Dina Leech' },
      { time: '3:00', name: 'KB Wilebski-Koch', topic: 'Investigating Glebe Harbor\'s Public Sewer: Impacts on Aimes Creek', mentor: 'Dr. Karen Kinslow' },
      { time: '3:15', name: 'Laden Mohamedhaj', topic: 'Computational Modeling of Single Molecule Electronic Devices', mentor: 'Dr. Benjamin Topham' },
      { time: '3:30', name: 'Anya Swierkowski', topic: 'Sensor Data Spatial-Temporal Context Analysis and Application', mentor: 'Dr. Sanish Rai' }
    ]
  },
  {
    id: 'o11',
    type: 'oral',
    title: 'Honors & Independent Research (Late Afternoon)',
    time: '3:15 – 5:00 PM',
    timeSort: 1515,
    location: 'Rotunda – Prince Edward Room (Bldg 51)',
    building: 51,
    mentor: 'Various Faculty Sponsors',
    presenters: [
      { time: '3:15', name: 'Madison Johnson', topic: 'Taxes around Prince Edward' },
      { time: '3:30', name: 'Naiya Casimiro', topic: 'Perpetual or Performative?: Economic Behavior Without Explicit Immigration Cues', mentor: 'Dr. Adrienne Sudbury' },
      { time: '3:45', name: 'Zoe Nash', topic: 'No More Fairy Godmothers: Subverting Fairytale Structure in "Ashputtle"', mentor: 'Dr. Rhonda Brock-Servais' },
      { time: '4:00', name: 'Madeline Moeller', topic: 'Masculine Psychosis in "American Psycho" and "Mr. Clubb and Mr. Cuff"', mentor: 'Dr. Rhonda Brock-Servais' },
      { time: '4:15', name: 'Garrett F. Ward', topic: 'Subversion of American & Gendered Identities in Peter Straub\'s Worlds', mentor: 'Dr. Rhonda Brock-Servais' },
      { time: '4:30', name: 'Kara Burks', topic: 'The All-American Boy: Redefining the Teenage Protagonist Through Peter Straub', mentor: 'Dr. Rhonda Brock-Servais' },
      { time: '4:45', name: 'Edison Moscar', topic: 'The Intertextuality of Ghost Story and Arthurian Literature', mentor: 'Dr. Rhonda Brock-Servais' }
    ]
  },
  // ── POSTER SESSIONS ──
  {
    id: 'p1',
    type: 'poster',
    title: 'Poster Session I',
    subtitle: 'Art · Chemistry · Engineering · English · Nursing · Physics',
    time: '9:30 – 10:30 AM',
    timeSort: 930,
    location: 'Blackwell Ballroom (Bldg 42)',
    building: 42,
    desc: 'Courses: NURS 360, CHEM 332, CHEM 333, CHEM 452, PHYS 223, PHYS 470, ENGR 403, ART/ISCI 340, ENGL 319'
  },
  {
    id: 'p2',
    type: 'poster',
    title: 'Poster Session II',
    subtitle: 'English · Health · Kinesiology · Psychology · Independent Research',
    time: '10:40 – 11:40 AM',
    timeSort: 1040,
    location: 'Blackwell Ballroom (Bldg 42)',
    building: 42,
    desc: 'Courses: HPEP 402, KINS 470, PSYC 461, Independent Research, ENGL 319'
  },
  {
    id: 'p3',
    type: 'poster',
    title: 'Poster Session III',
    subtitle: 'Biology · Education · History · Psychology · Honors',
    time: '11:50 AM – 12:50 PM',
    timeSort: 1150,
    location: 'Blackwell Ballroom (Bldg 42)',
    building: 42,
    desc: 'Courses: HIST 408, HIST 222, BIOL 365, PSYC 337, EDUC 245 (Honors), Cormier Honors College. Also features World Studies 10 Honors from Fuqua High School!'
  },
  {
    id: 'p4',
    type: 'poster',
    title: 'Poster Session IV',
    subtitle: 'Anthropology · History · Nursing · Special Education · Citizen 410',
    time: '2:10 – 3:10 PM',
    timeSort: 1410,
    location: 'Blackwell Ballroom (Bldg 42)',
    building: 42,
    desc: 'Courses: NURS 230, HIST 409, ANTH 470, SPED 389, CTZN 410'
  },
  {
    id: 'p5',
    type: 'poster',
    title: 'Poster Session V',
    subtitle: 'Biology · Environmental Science · Nursing',
    time: '3:20 – 4:20 PM',
    timeSort: 1520,
    location: 'Blackwell Ballroom (Bldg 42)',
    building: 42,
    desc: 'Courses: NURS 230, BIOL 250, BIOL 250 Honors, BIOL 360, BIOL 330 Honors, BIOL 315, ENSC 201'
  },
  {
    id: 'p6',
    type: 'poster',
    title: 'Poster Session VI',
    subtitle: 'Finance · Independent Research · Honors',
    time: '4:30 – 5:30 PM',
    timeSort: 1630,
    location: 'Blackwell Ballroom (Bldg 42)',
    building: 42,
    desc: 'Courses: FINA 350, Independent Research, Cormier Honors College for Citizen Scholars'
  },
  // ── PERFORMANCES ──
  {
    id: 'perf1',
    type: 'perf',
    title: 'Theatre 389: Integrated Arts Theatre',
    time: '9:30 AM – 12:15 PM',
    timeSort: 930,
    location: 'CSTAC Room 101 (Bldg 17)',
    building: 17,
    mentor: 'Dr. Ronda Scarrow',
    presenters: [
      { time: '9:30', name: 'Mallory Logan, Addison Lahrman, Nadia Freidson', topic: 'Teaching Through the Arts: Voices from the Classroom' },
      { time: '9:50', name: 'Emily Kearns, Nyx Cash, Andrew Harker', topic: 'Theatrical Town Hall Meeting' },
      { time: '10:10', name: 'Abagail Reamer, Sarah Cleary, Molly Milby, Mia Shotts', topic: 'Live from the Classroom: Arts Integration in Action' },
      { time: '10:30', name: 'Sydney Shumway, Elexia Caruthers, Bailey Stratton, Hailey Dockum', topic: 'Sitcom Performance About Art Integration' },
      { time: '11:00', name: 'Dara Enzmann, Morgan Gregory, Courtney Hazlewood, Aubrie Seay, Lauren Ware, Madeline Esch', topic: 'Miss Polygon' },
      { time: '11:30', name: 'Grace Merrell, Samara Brown, Florence Delaney, Alivia Santore', topic: 'Hell\'s Classroom' },
      { time: '11:50', name: 'April Cherry, Emma Taylor, Jake Gaston, Skyler Childress', topic: 'Integrating the Arts into the Classroom' }
    ]
  },
  {
    id: 'perf2',
    type: 'perf',
    title: 'Independent Study in Theatre',
    time: '12:15 – 1:00 PM',
    timeSort: 1215,
    location: 'CSTAC Room 101 (Bldg 17)',
    building: 17,
    presenters: [
      { time: '12:15', name: 'Maggie Kittrell', topic: 'Senior Seminar Research', mentor: 'Prof. Bruce Speas' },
      { time: '12:30', name: 'Sara Conner', topic: 'Theatre Education and Artificial Intelligence', mentor: 'Dr. Ronda Scarrow' },
      { time: '12:45', name: 'Oz Kerns', topic: 'Senior Seminar Research', mentor: 'Prof. Bruce Speas' }
    ]
  },
  {
    id: 'perf3',
    type: 'perf',
    title: 'Music: Chamber Music Ensembles',
    time: '1:45 – 5:30 PM',
    timeSort: 1345,
    location: 'Molnar Recital Hall, Wygal Hall (Bldg 64)',
    building: 64,
    mentor: 'Dr. Lisa Edwards-Burrs, Dr. Emily Ilyes, Dr. Roland Karnatz & others',
    presenters: [
      { time: '1:45', name: 'Emily Christian, Nathan Hopkins, Johnniel Santiago-Borges', topic: 'The Impact of Instrumentation: Throughout the Eras of the Orchestra' },
      { time: '2:00', name: 'Rose Braun', topic: 'Senior Thesis: Music as a Beacon of Hope — Händel and Twenty-One Pilots' },
      { time: '3:00', name: 'Miyah Speller (soprano), Sarah Gates (piano)', topic: 'From the Diary of Sally Hemings by William Bolcom' },
      { time: '3:30', name: 'MUSC 322 Students', topic: 'Chalk Man (Gregory T.S. Walker) and Strange Fruit (Abel Meeropol) — Reflections on African-American Composers' },
      { time: '4:00', name: 'Graphic Animation Collaborative Projects with Music', topic: 'Elizabeth Welch/Keenen Jones · Jaidan Means/Erica Mai · Haley Thames' },
      { time: '4:00+', name: 'Chamber Ensembles', topic: 'Nielsen Serenata · Pergolesi Stabat Mater · Singelée Allegro de Concert · Poulenc Sonata · Beethoven Trio in E-flat' }
    ]
  },
  {
    id: 'perf4',
    type: 'perf',
    title: 'Citizen 410: Theatre as a Civic Space',
    time: '4:30 – 5:00 PM',
    timeSort: 1630,
    location: 'CSTAC Room 101 (Bldg 17)',
    building: 17,
    mentor: 'Prof. Jeffrey Todd Parrott',
    desc: 'A New Documentary Play Reading',
    presenters: [
      { name: 'Reaya Bajor, Payton Bunting, Sara Conner, Meredith Duffer, Ryan Griffin, Allison Hess', topic: 'A New Documentary Play Reading' },
      { name: 'Sydnie Jones, Nyla McEachin, Olivia McLoughlin, Jenna Mitchell, Ashley Nelson, Melisson Piercy', topic: '' },
      { name: 'Elvin Ramirez-Ramos, Jose Ramos Flores, Anna Rhodenizer, Olivia Sisk, Tom Spicer, Riley Stimpson, Claire Weisenburger, Gregory Windsor', topic: '' }
    ]
  },
  // ── ART SHOW ──
  {
    id: 'art1',
    type: 'art',
    title: 'Junior Art Show',
    subtitle: 'Studio Art & Graphic and Animation Design',
    time: '11:00 AM – 1:00 PM · Awards 11:30 AM',
    timeSort: 1100,
    location: 'Bedford Gallery (Bldg 8)',
    building: 8,
    desc: 'Opening reception for the annual Junior Show, featuring work from Studio Art and Graphic & Animation Design programs.',
    presenters: [
      { name: 'ART: Molly Fowlkes, Samantha Staton, Shane Jackson, Ashley Whitehorne', topic: 'Studio Art' },
      { name: 'ART: Elizabeth Valentin, Sophie King, Savannah Smelley, Genevieve Bachman', topic: 'Studio Art' },
      { name: 'ART: Makenna Clark-Quigley, Julia Erk, Jade Caudill', topic: 'Studio Art' },
      { name: 'GAND: Connor St. Louis, Connor Rivas, Haley Thames, Ashley Mazza, Valeria Solis', topic: 'Graphic & Animation Design' },
      { name: 'GAND: Sera Carter, Zoie Desouto, Anna Tate, Anna Keith, Mary Means', topic: 'Graphic & Animation Design' },
      { name: 'GAND: Libby Welch, Kaitlyn Balovich, Danielle Bradby, Heather Gregg', topic: 'Graphic & Animation Design' }
    ]
  },
  // ── CAREER ──
  {
    id: 'c1',
    type: 'career',
    title: 'Pathways to Medical Professions',
    time: '11:45 AM – 12:45 PM',
    timeSort: 1145,
    location: 'Chichester – Room G12 (Bldg 14)',
    building: 14,
    desc: 'For pre-health students. Featuring Dr. Kim Baskette (Radford Carilion) and Dr. Michael Joyce, M.D. (VCU School of Medicine) — a Longwood Biology graduate.'
  },
  {
    id: 'c2',
    type: 'career',
    title: 'Career Workshop: Criminology & Sociology',
    time: '11:45 AM – 12:45 PM',
    timeSort: 1145,
    location: 'Chichester – Room G03 (Bldg 14)',
    building: 14,
    desc: 'Turn research projects and coursework into strong resume content. Learn to highlight data analysis, writing, and problem-solving for employers and graduate schools.'
  },
  {
    id: 'c3',
    type: 'career',
    title: 'Career Development Open House — All Majors',
    time: '2:30 – 3:30 PM',
    timeSort: 1430,
    location: 'Maugans – Center for Career Success (Bldg 42)',
    building: 42,
    desc: 'Get personalized 1:1 feedback on turning research experience into cover letters, resume bullets, and LinkedIn profiles. Refreshments served.'
  }
];

const LOCATIONS = [
  { num: 51, name: 'Rotunda Hall', events: 'Welcoming Remarks, Biology oral sessions, Senior Thesis, Honors & Independent Research, English 320, PRISM' },
  { num: 42, name: 'Blackwell Ballroom & Maugans Alumni Center', events: 'All 6 Poster Sessions (Blackwell) · Keynote Address & Awards · Career Open House (Maugans)' },
  { num: 8, name: 'Bedford Hall', events: 'Junior Art Show (Bedford Gallery) · Art 385 Critical Making presentations' },
  { num: 17, name: 'CSTAC – Communication Studies & Theatre Arts Center', events: 'Theatre 389 · Independent Study in Theatre · Citizen 410' },
  { num: 64, name: 'Wygal Hall – Molnar Recital Hall', events: 'Music Chamber Ensembles, 1:45–5:30 PM' },
  { num: 14, name: 'Chichester Science Center', events: 'Career Workshops (Medical Professions & Criminology/Sociology)' },
  { num: 21, name: 'Brock Commons Garage', events: 'FREE PARKING for visitors — underneath building, off East Redford St.' }
];
