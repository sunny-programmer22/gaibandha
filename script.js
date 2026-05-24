const upazilaData = {
  'Gaibandha Sadar': {
    tagline: 'The administrative core and largest urban hub of the district.',
    info: [
      { label: 'Area', value: '324.05 sq km' },
      { label: 'Municipality', value: '1 (Gaibandha Pourosava)' },
      { label: 'Unions', value: '13' },
      { label: 'Rivers', value: 'Brahmaputra, Ghaghat, Jamuna' },
    ],
    description: 'Acts as the commercial and educational center of Gaibandha. The economy is highly service- and commerce-oriented compared to other upazilas. Main agricultural products include paddy, jute, potato, and mustard.',
    highlights: [
      'The Friendship Centre — an internationally acclaimed, award-winning unreinforced brick architectural structure mimicking ancient Buddhist monastic designs, complete with green grass rooftops.',
      'Gaibandha Government Boys\' High School — a historic institution established in 1885.',
      'The largest urban concentration in the district with most government offices and colleges.',
    ],
  },
  'Gobindaganj': {
    tagline: 'Known as the "Nucleus of Rangpur Division" — the second-largest upazila in Bangladesh by unions.',
    info: [
      { label: 'Area', value: '460.42 sq km' },
      { label: 'Municipality', value: '1 (Gobindaganj)' },
      { label: 'Unions', value: '17' },
      { label: 'Geography', value: 'Barind Tract (red soil) covers ~25% of area' },
    ],
    description: 'Connects Gaibandha seamlessly to Bogra and the rest of the country via the national highway. Highly industrialized compared to its neighbors. Famous for hosting the Rangpur Sugar Mills at Mahimaganj, large-scale wholesale markets, and massive rice/flour mills. Home to a notable Santal indigenous community.',
    highlights: [
      'Rangpur Sugar Mills — a major industrial sugar mill located at Mahimaganj.',
      'Bardhan Kuthi — remnants of an ancient Zamindar palace.',
      'Raja Birat City in Kamdia — ancient archaeological ruins dating back to the 8th century (Samtat Deb era).',
      'Barind Tract — one-fourth of the upazila sits on this historic red-soil region.',
    ],
  },
  'Sundarganj': {
    tagline: 'A vast agrarian upazila in the northernmost section of the district, defined by the Teesta river.',
    info: [
      { label: 'Area', value: '426.52 sq km' },
      { label: 'Municipality', value: '1' },
      { label: 'Unions', value: '15' },
      { label: 'Rivers', value: 'Teesta (heavily intersecting)' },
    ],
    description: 'Heavily intersected by the Teesta River, creating large swaths of seasonal river islands called chars. The economy is dominated by agriculture — rice, maize, chili, and groundnuts thrive on the fertile sandy riverbanks.',
    highlights: [
      'Bamondanga Zamidar Bari — a well-known historical landmark showcasing colonial-era architecture.',
      'Teesta Solar Park — a massive, modern renewable energy installation generating clean power for the national grid.',
      'Extensive char lands along the Teesta supporting unique riverine agriculture.',
    ],
  },
  'Phulchhari': {
    tagline: 'An intensely riverine region on the banks of the mighty Brahmaputra River.',
    info: [
      { label: 'Area', value: '306.53 sq km' },
      { label: 'Municipality', value: 'None' },
      { label: 'Unions', value: '7' },
      { label: 'Rivers', value: 'Brahmaputra, Jamuna' },
    ],
    description: 'Comprised primarily of riverine lowlands and expansive char lands. Highly susceptible to seasonal river erosion. The local economy revolves around fishing, cattle rearing on char pastures, and seasonal farming (corn, pulses, and jute).',
    highlights: [
      'Fulchari Ghat — a legendary transit point during the British and early Pakistan era, operating massive paddle steamers and train-ferry connections linking north Bengal to Dhaka.',
      'Historic British-era river ghat terminal — one of the oldest river transport hubs in the region.',
      'Expansive char lands and riverine ecosystems ideal for eco-tourism.',
    ],
  },
  'Saghata': {
    tagline: 'Located in the southeastern corner, bordering Bogra and the Jamuna River.',
    info: [
      { label: 'Area', value: '225.67 sq km' },
      { label: 'Municipality', value: 'None' },
      { label: 'Unions', value: '10' },
      { label: 'Rivers', value: 'Jamuna, Bangali' },
    ],
    description: 'Predominantly agricultural with traditionally very high jute production. Fishing is also a vital livelihood for hundreds of coastal families along the Jamuna. Shares many geographical similarities with Phulchhari.',
    highlights: [
      'High jute production — one of the leading jute-growing upazilas in the district.',
      'Badiakhali Railway Bridge — famously sabotaged by freedom fighters during the 1971 Liberation War to halt the advancement of occupation forces.',
      'Strategic role in the Liberation War with several historic battle sites.',
      'Jamuna riverbank communities and vibrant char culture.',
    ],
  },
  'Palashbari': {
    tagline: 'A major gateway upazila with the Dhaka-Rangpur National Highway cutting directly through it.',
    info: [
      { label: 'Area', value: '190.67 sq km' },
      { label: 'Municipality', value: 'None' },
      { label: 'Unions', value: '9' },
      { label: 'Highway', value: 'Dhaka-Rangpur National Highway' },
    ],
    description: 'Due to superior road connectivity, Palashbari has a booming transport-based economy, multiple cold storages, and busy highway trading bazaars. Key crops include banana, papaya, paddy, and a wide variety of winter vegetables dispatched daily to Dhaka.',
    highlights: [
      'Gateway highway hub — the strategic Dhaka-Rangpur highway intersection drives the local economy.',
      'Vegetable cold storage facilities — major produce distribution center for northern Bangladesh.',
      'High production of banana, papaya, and winter vegetables supplying Dhaka markets.',
    ],
  },
  'Sadullapur': {
    tagline: 'The agricultural powerhouse for horticulture and nursery businesses in mid-western Gaibandha.',
    info: [
      { label: 'Area', value: '227.97 sq km' },
      { label: 'Municipality', value: 'None' },
      { label: 'Unions', value: '11' },
      { label: 'Economy', value: 'Nursery & horticulture hub' },
    ],
    description: 'Widely known for producing high-quality vegetables and hosting expansive commercial plant nurseries. Farmers here supply saplings and flowers across the entire northern region of Bangladesh.',
    highlights: [
      'Nursery industry — the largest concentration of commercial plant nurseries in the district, supplying saplings and flowers across northern Bangladesh.',
      'Naldanga Zamidar Bari — a major cultural heritage site featuring historical ponds and structural ruins from the regional landlords of old.',
      'High-quality vegetable production supplying markets throughout the Rangpur division.',
    ],
  },
};

const placeData = {
  'naldanga-palace': {
    name: 'Naldanga Palace — A Zamindar Time Capsule',
    tagline: 'An 18th-century Indo-Saracenic mansion frozen in time.',
    info: [
      { label: 'Type', value: 'Zamindari Era Palace' },
      { label: 'Location', value: 'Sundarganj Upazila' },
      { label: 'Entry Fee', value: 'BDT 20' },
      { label: 'Guided Tour', value: 'BDT 100 (folklore tours)' },
    ],
    description: 'This crumbling yet majestic mansion in Sundarganj was once home to the influential Naldanga zamindars. The Indo-Saracenic architecture features terracotta arches, lotus ponds, and vine-draped durbar halls that evoke the opulence of the feudal era. Hidden chambers contain faded murals and local lore of royal intrigues. The palace grounds also include a family cemetery and a large pond with ancient banyan trees.',
    highlights: [
      'Terracotta arches and intricate floral motifs adorning the main facade.',
      'The grand durbar hall with faded but still visible frescoes.',
      'Lotus pond and surrounding gardens — a serene picnic spot.',
      'Guided folklore tours that narrate tales of zamindar intrigues and local legends.',
    ],
    img: 'A Zamindar Time Capsule.png',
  },
  'bardhan-kuthi': {
    name: 'Bardhan Kuthi — Colonial Trade Relic',
    tagline: 'A 19th-century British indigo factory turned museum.',
    info: [
      { label: 'Type', value: 'Colonial Indigo Factory' },
      { label: 'Location', value: 'Fulchhari Upazila' },
      { label: 'Entry Fee', value: 'BDT 10' },
      { label: 'Audio Guide', value: 'BDT 50' },
    ],
    description: 'Built in the 19th century as a British indigo factory, this red-brick warehouse now serves as a museum overlooking the Jamuna River. The collection includes artifacts from the Opium Wars era — rusted indigo processing machinery, colonial trade ledgers, and eerie underground cells once used to detain workers. The watchtower offers panoramic views of the river and surrounding char lands.',
    highlights: [
      'Rusted indigo-processing machinery and colonial-era trade artifacts.',
      'Underground detention cells — a sobering reminder of colonial exploitation.',
      'Watchtower climb offering panoramic views of the Jamuna River.',
      'Located adjacent to the historic Fulchhari river ghat.',
    ],
    img: 'Bardhan Kuthi.png',
  },
  'mir-bagan-mosque': {
    name: 'Mir Bagan Mosque',
    tagline: 'A 16th-century Sultanate-era gem nestled in a mango grove.',
    info: [
      { label: 'Type', value: 'Sultanate Mosque' },
      { label: 'Location', value: 'Saghata Upazila' },
      { label: 'Entry Fee', value: 'Free' },
      { label: 'Best Time', value: 'Annual Urs festival' },
    ],
    description: 'Tucked away in a serene mango grove in Saghata, this 16th-century mosque is a masterpiece of Sultanate-era architecture. The ornate terracotta mihrabs feature intricate floral motifs and Quranic calligraphy. The tranquil courtyards attract pilgrims throughout the year, especially during the annual urs fairs. New eco-trails (2025) link the mosque to nearby char villages, offering a combined cultural-nature experience.',
    highlights: [
      'Ornate terracotta mihrabs with delicate floral and calligraphic details.',
      'Annual urs fairs that draw pilgrims from across the district.',
      '2025 eco-trails connecting the mosque to nearby char villages.',
      'Peaceful mango grove setting perfect for meditation and photography.',
    ],
    img: 'Mir Bagan Mosque.png',
  },
  'balashi-ghat': {
    name: 'Balashi Ghat — Historic Ferry Crossing',
    tagline: 'Bangladesh\'s only rail ferry crossing (1938–1990s).',
    info: [
      { label: 'Type', value: 'Historic River Ghat' },
      { label: 'Location', value: 'Fulchhari Upazila' },
      { label: 'Boat Ride', value: 'BDT 100/hour' },
      { label: 'Access', value: 'Free' },
    ],
    description: 'Once Bangladesh\'s only rail ferry crossing from 1938 to the 1990s, Balashi Ghat is a historic river port in Fulchhari. Today, visitors can hop a country boat for dolphin-spotting cruises amid swirling eddies and char islands. Solar-powered eco-boats promote sustainable tourism. The ghat remains a vibrant hub where ferries unload goods amid the daily rhythm of fisherfolk life.',
    highlights: [
      'Historic rail ferry crossing — the only one of its kind in Bangladesh (1938–1990s).',
      'Country boat cruises for dolphin spotting and char island exploration.',
      'Solar-powered eco-boats promoting sustainable river tourism.',
      'Vibrant riverside life — watch ferries, fisherfolk, and local trade in action.',
    ],
    img: 'Balashi Ghat.jpg',
  },
  'dreamland-park': {
    name: 'Dreamland Educational Park',
    tagline: 'A 20-acre family haven blending recreation with learning.',
    info: [
      { label: 'Type', value: 'Amusement & Educational Park' },
      { label: 'Location', value: 'Gaibandha Sadar' },
      { label: 'Entry Fee', value: 'BDT 30' },
      { label: 'Full-Day Pass', value: 'BDT 200' },
    ],
    description: 'This 20-acre family park in Gaibandha Sadar blends amusement rides with educational zones. A central lake offers paddleboats (BDT 50/hour), while dedicated educational areas teach visitors about local ecology. The park also features VR history exhibits on King Birat and the Matsya Kingdom. Shaded trails, ice cream stalls, and picnic areas make it ideal for a full day of family fun.',
    highlights: [
      'Central lake with paddleboat rentals and fountain displays.',
      'VR history exhibits on King Birat and the ancient Matsya Kingdom.',
      'Amusement rides and playgrounds for children of all ages.',
      'Educational ecology zones showcasing local flora and riverine ecosystems.',
    ],
    img: 'Dreamland.png',
  },
  'sarovar-resort': {
    name: 'Sarovar Resort & Lakeside',
    tagline: 'An eco-resort with bamboo huts, infinity pools, and Teesta views.',
    info: [
      { label: 'Type', value: 'Eco-Resort' },
      { label: 'Location', value: 'Radhakrishnapur' },
      { label: 'Day Pass', value: 'BDT 200' },
      { label: 'Overnight', value: 'BDT 2,000' },
    ],
    description: 'Overlooking an artificial lake in Radhakrishnapur, this eco-resort offers bamboo huts, an infinity pool, and Teesta-view bonfires. The 2025 glamping tents host stargazing sessions. Guests can kayak across the lake (BDT 150) or join cooking classes to learn traditional river fish curries. The resort emphasizes sustainable tourism with solar power and locally sourced materials.',
    highlights: [
      'Bamboo huts and glamping tents with Teesta river views.',
      'Infinity pool overlooking the artificial lake.',
      'Kayaking (BDT 150) and stargazing sessions.',
      'Cooking classes featuring traditional river fish curries.',
    ],
    img: 'Resort.png',
  },
  'kantagir-temple': {
    name: 'Kantagir Temple Trails',
    tagline: 'A 15th-century temple complex hidden in remote sal forests.',
    info: [
      { label: 'Type', value: 'Hindu Temple Complex' },
      { label: 'Location', value: 'Ghoraghat Upazila' },
      { label: 'Entry Fee', value: 'Free' },
      { label: 'Guide', value: 'BDT 150' },
    ],
    description: 'Deep in the remote Ghoraghat Upazila, this 15th-century Hindu temple complex is enveloped by dense sal forests. Carved stone idols and hilltop shrines reward trekkers who navigate shaded trails rich with Garo folklore and birdwatching opportunities. The 2025 trail upgrades added interpretive signs explaining the site\'s history. Monsoon mists enhance the ethereal atmosphere, making it a photographer\'s paradise.',
    highlights: [
      'Ancient stone idols and hilltop shrines dating to the 15th century.',
      'Sal forest trekking routes rich with Garo folklore and birdlife.',
      '2025 interpretive trail signs explaining the temple\'s history and mythology.',
      'Ethereal monsoon mists creating a mystical atmosphere.',
    ],
    img: 'Kantagir.png',
  },
  'municipal-park': {
    name: 'Gaibandha Municipal Park (Pouro Park)',
    tagline: 'A 15-acre urban oasis in the heart of Gaibandha Sadar.',
    info: [
      { label: 'Type', value: 'Urban Public Park' },
      { label: 'Location', value: 'Gaibandha Sadar' },
      { label: 'Entry Fee', value: 'Free' },
      { label: 'Features', value: 'Yoga pavilions, jogging tracks, food kiosks' },
    ],
    description: 'This 15-acre urban oasis in the heart of Gaibandha Sadar is the city\'s green lung. Manicured lawns, a central fountain, and jogging tracks offer respite from urban life, with scenic views of surrounding paddy fields. Yoga pavilions host morning sessions, and food kiosks serve traditional pitha snacks. Evenings see families flying kites across the open lawns.',
    highlights: [
      'Central fountain with illuminated evening displays.',
      'Jogging tracks and yoga pavilions for morning exercise.',
      'Food kiosks serving traditional pitha and local snacks.',
      'Popular evening spot for kite flying and family gatherings.',
    ],
    img: 'Park.png',
  },
};

const cultureData = {
  'folk-music': {
    name: 'Folk Music & Oral Traditions',
    tagline: 'Songs that echo across the vast plains and riverbanks of North Bengal.',
    info: [
      { label: 'Tradition', value: 'Bhawaiya, Charer Gan, Meyeli Geet' },
      { label: 'Region', value: 'Throughout Gaibandha' },
      { label: 'Performers', value: 'Gariyal (cart-drivers), Mahisal (herders), village women' },
      { label: 'Language', value: 'Rajbangshi / Rangpuri dialect' },
    ],
    description: 'Music in Gaibandha reflects the rural soul of North Bengal. Local songs tell stories of love, spiritual longing, and the struggles of farming life. The vast, lonely landscape of the riverine north has given birth to vocal styles that feel as expansive as the open plains.',
    highlights: [
      'Bhawaiya — a haunting style featuring a unique vocal breaking technique that mimics the vast, lonely plains. Traditionally sung by cart-drivers and buffalo herders.',
      'Charer Gan — folk ballads from shifting char (river island) communities, documenting the seasonal heartbreak of erosion and the joy of cultivating new lands.',
      'Meyeli Geet — marriage songs sung exclusively by village women during gaaye holud (turmeric ceremonies) and bridal departures.',
      'Oral traditions passed down through generations, with no written notation — each performance is a living recreation.',
    ],
  },
  'indigenous-culture': {
    name: 'Ethnic & Indigenous Culture',
    tagline: 'The vibrant Santal heritage that enriches Gaibandha\'s cultural fabric.',
    info: [
      { label: 'Community', value: 'Santal (indigenous)' },
      { label: 'Location', value: 'Primarily Gobindaganj Upazila' },
      { label: 'Festivals', value: 'Sohrai, Baha' },
      { label: 'Traditions', value: 'Archery, hand-woven attire, drum & flute music' },
    ],
    description: 'Gaibandha possesses a vibrant multicultural dimension thanks to its indigenous Santal population, primarily concentrated in Gobindaganj upazila. Their traditions, music, and festivals add a distinctive layer to the district\'s cultural identity, coexisting alongside the mainstream Bengali heritage.',
    highlights: [
      'Sohrai — a harvest festival honoring cattle and ancestors, featuring rhythmic group dancing to traditional dhak (drums) and tirio (bamboo flutes).',
      'Baha — the flower festival welcoming spring, with vibrant processions, songs, and community gatherings.',
      'Traditional archery — the Santal community retains deep historical links to archery as both a martial art and a sport.',
      'Hand-woven attire — distinct weaving techniques produce unique patterns and textiles that are culturally significant.',
    ],
  },
  'local-dialect': {
    name: 'Local Dialect & Language',
    tagline: 'A unique linguistic identity shaped by history, geography, and culture.',
    info: [
      { label: 'Language Family', value: 'Rajbangshi / Rangpuri' },
      { label: 'Influences', value: 'Assamese, Cooch Behari' },
      { label: 'Usage', value: 'Daily conversation, folk songs' },
      { label: 'Relation to Bengali', value: 'Mutually intelligible, distinct phonetics' },
    ],
    description: 'While standard Bengali is used in official and educational settings, the people of Gaibandha communicate in a unique regional dialect belonging to the Rajbangshi / Rangpuri linguistic group. This dialect has its own charm, shaped by centuries of cultural exchange and geographical isolation.',
    highlights: [
      'Softer phonetic patterns compared to standard Bengali, with unique vowel sounds and intonations.',
      'Distinct vocabulary influenced by historical proximity to Assam and Cooch Behar — words not found in standard Bengali.',
      'Variations in verb endings and grammatical constructions that set it apart from both standard Bengali and other northern dialects.',
      'Preserved in folk songs and oral traditions, where the dialect\'s melodic qualities come to the forefront.',
    ],
  },
  'festivals': {
    name: 'Festivals & Fairs (Mela)',
    tagline: 'Where community, faith, and celebration converge throughout the year.',
    info: [
      { label: 'Major Fairs', value: 'Raja Birat Mela, Paush Mela' },
      { label: 'Boat Race', value: 'Nouka Baich (monsoon)' },
      { label: 'Religious Festivals', value: 'Eid, Durga Puja, Buddha Purnima' },
      { label: 'Season', value: 'Year-round, peak in winter & monsoon' },
    ],
    description: 'Religious harmony is strong in Gaibandha — Eid, Durga Puja, and Buddha Purnima are all celebrated with communal warmth and participation. But the true heart of rural entertainment lies in the seasonal fairs (melas) that bring together people from all walks of life.',
    highlights: [
      'Raja Birat Mela — held annually in Gobindaganj near the ancient ruins of Raja Birat\'s kingdom. Draws thousands for crafts, circus acts, folk theatre, and traditional sweets.',
      'Paush Mela — celebrated on the last day of the Bengali month Paush to welcome the winter harvest. Village squares fill with stalls selling traditional winter rice cakes (Pitha).',
      'Nouka Baich (Boat Racing) — during monsoon when rivers swell, vibrant boat races take place across Phulchhari, Saghata, and Sadar upazilas, accompanied by high-energy drums and roaring crowds.',
      'All festivals feature communal dining, where traditional dishes are prepared and shared regardless of religious background.',
    ],
  },
  'culinary': {
    name: 'Culinary Heritage',
    tagline: 'River fish, aromatic rice, and slow-cooked traditions.',
    info: [
      { label: 'Key Ingredients', value: 'Fresh river fish, rice, taro, mustard oil' },
      { label: 'Signature Dish', value: 'Shidal (fermented fish cake)' },
      { label: 'Street Food', value: 'Chapa Pitha' },
      { label: 'Festival Dish', value: 'Alu Ghati with fish head' },
    ],
    description: 'The food culture of Gaibandha revolves around fresh river fish from the Teesta, Jamuna, and Brahmaputra, locally harvested rice varieties, and distinct northern culinary techniques that emphasize slow cooking and bold, earthy flavors.',
    highlights: [
      'Shidal (সিদল) — a prized regional delicacy made by fermenting small dried fish (Puti) with mashed taro stalks (Kachu), formed into dried cakes and prepared as a spicy paste or curry.',
      'Chapa Pitha — a savory rice cake stuffed with onions, green chilies, and sometimes shutki (dried fish), baked wrapped in leaves for an earthy aroma.',
      'Alu Ghati — a thick potato curry mashed into a gravy consistency, slow-cooked with local spices, served alongside large freshwater fish heads or beef during community feasts.',
      'Rasmanjuri — the undisputed pride of Gaibandha\'s sweet heritage. Small, soft balls of chhana (cottage cheese) in fragrant cardamom-infused kheer (condensed milk).',
    ],
  },
  'crafts': {
    name: 'Crafts & Rural Livelihoods',
    tagline: 'Generations of skill woven into everyday life.',
    info: [
      { label: 'Key Crafts', value: 'Shital Pati, jute weaving, nursery cultivation' },
      { label: 'Materials', value: 'Jute, date palm leaves, bamboo' },
      { label: 'Centers', value: 'Saghata, Phulchhari, Sadullapur' },
      { label: 'Economic Role', value: 'Primary/secondary livelihood for thousands' },
    ],
    description: 'Traditional crafts remain a vital part of daily life and the local economy in Gaibandha. These are not mere tourist products — they are functional items born from necessity, refined over generations, and integral to the rural way of life.',
    highlights: [
      'Shital Pati & Jute Crafts — Saghata and Phulchhari produce high-quality jute; local artisans create beautifully woven mats, ropes, baskets, and home decor items using techniques passed down for centuries.',
      'Nursery Culture — in Sadullapur, growing and grafting plants has transcended agriculture to become a community art form. Generations of expertise have transformed the upazila into a sprawling green canvas.',
      'Date palm sap harvesting — a winter tradition where skilled tappers collect sap for making gur (molasses) and various sweets.',
      'Bamboo and cane work — artisans across the district craft furniture, fishing traps, and household items from locally sourced bamboo.',
    ],
  },
  'rasmanjuri': {
    name: 'Rasmanjuri — The Pride of Gaibandha',
    tagline: 'The sweet that defines a district\'s culinary identity.',
    info: [
      { label: 'Type', value: 'Traditional Bengali Sweet' },
      { label: 'Base Ingredient', value: 'Chhana (cottage cheese)' },
      { label: 'Signature', value: 'Cardamom-infused kheer' },
      { label: 'Origin', value: 'Gaibandha District' },
    ],
    description: 'Small, soft balls of chhana (cottage cheese) submerged in a thick, fragrant cardamom-infused kheer (condensed milk) — this is Rasmanjuri, the undisputed pride of Gaibandha\'s culinary heritage. You cannot talk about Gaibandha without mentioning Rasmanjuri. Unlike the more widely known Roshogolla, Rasmanjuri has a uniquely rich, creamy texture with a pronounced cardamom fragrance that lingers on the palate.',
    highlights: [
      'Made from fresh chhana (cottage cheese) kneaded to a silky smooth consistency.',
      'The kheer (condensed milk base) is slow-reduced for hours with green cardamom pods.',
      'Unlike Roshogolla, Rasmanjuri is not soaked in syrup — the balls sit in thick, creamy kheer.',
      'Every sweet shop in Gaibandha has its own closely guarded family recipe.',
      'A must-try for any visitor — no trip to Gaibandha is complete without tasting it.',
    ],
  },
};

function openModal(title, tagline, info, description, highlights) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalTagline').textContent = tagline;

  const infoGrid = document.getElementById('modalInfoGrid');
  infoGrid.innerHTML = info.map(item => `
    <div class="modal-info-item">
      <div class="label">${item.label}</div>
      <div class="value">${item.value}</div>
    </div>
  `).join('');

  document.getElementById('modalDescription').textContent = description;

  const highlightsList = document.getElementById('modalHighlights');
  highlightsList.innerHTML = highlights.map(h => `<li>${h}</li>`).join('');

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openUpazilaModal(name) {
  const data = upazilaData[name];
  if (!data) return;
  openModal(name, data.tagline, data.info, data.description, data.highlights);
}

function openPlaceModal(key) {
  const data = placeData[key];
  if (!data) return;
  openModal(data.name, data.tagline, data.info, data.description, data.highlights);
}

function openCultureModal(key) {
  const data = cultureData[key];
  if (!data) return;
  openModal(data.name, data.tagline, data.info, data.description, data.highlights);
}

function openPersonModal(key) {
  const data = personData[key];
  if (!data) return;
  openModal(data.name, data.tagline, data.info, data.description, data.highlights);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

const personData = {
  'akhtaruzzaman-elias': {
    name: 'Akhtaruzzaman Elias',
    tagline: 'One of the most powerful and critically acclaimed novelists in Bengali literature.',
    category: 'Literature & Arts',
    info: [
      { label: 'Born', value: '1943 (Gotiya, Saghata)' },
      { label: 'Died', value: '1997' },
      { label: 'Notable Works', value: 'Chilekothar Sepai, Khwabnama' },
      { label: 'Awards', value: 'Ekushey Padak, Bangla Academy Award' },
    ],
    description: 'One of the most powerful and critically acclaimed novelists and short story writers in Bengali literature. He was born in his maternal uncle\'s house in Gotiya village under Saghata upazila. Literary Legacy: Though he wrote only two novels — Chilekothar Sepai (The Soldier in the Attic, 1987) and Khwabnama (The Tale of Dreams, 1996) — and 22 short stories, his work completely transformed modern Bengali fiction. His writing captures the political, social, and psychological realities of the working class and historical movements with incredible precision. Recognition: He was posthumously awarded the Ekushey Padak in 1999, along with several other prestigious awards like the Bangla Academy Literary Award.',
    highlights: [
      'Posthumously awarded the Ekushey Padak in 1999, one of Bangladesh\'s highest civilian honors.',
      'His novel Khwabnama is considered a masterpiece of Bengali magical realism.',
      'Won the Bangla Academy Literary Award for his contributions to Bengali literature.',
      'His works are studied in university curricula across Bangladesh and West Bengal.',
    ],
  },
  'tulsi-lahiri': {
    name: 'Tulsi Lahiri',
    tagline: 'Pioneering playwright, actor, and director who reshaped modern Bengali theater and early cinema.',
    category: 'Literature & Arts',
    info: [
      { label: 'Born', value: '1897 (Naldanga, Sadullapur)' },
      { label: 'Died', value: '1959' },
      { label: 'Key Works', value: 'Chheratar, Dukher Imam' },
      { label: 'Affiliation', value: 'IPTA (Indian People\'s Theatre Association)' },
    ],
    description: 'A pioneering playwright, actor, director, and music composer who reshaped modern Bengali theater and early cinema. Born in the Naldanga Zamindar family of Sadullapur upazila, he initially trained as a lawyer before dedicating his life to the arts. Key Works: His legendary plays Chheratar (1950) and Dukher Imam (1947) realistically portrayed the horrific realities of the 1943 Bengal Famine and the struggles of the rural poor. Contribution: He was deeply involved with the Indian People\'s Theatre Association (IPTA) and composed songs that were heavily praised by Kazi Nazrul Islam.',
    highlights: [
      'His play Dukher Imam (1947) was a powerful critique of feudal exploitation during the Bengal Famine.',
      'Deeply involved with the Indian People\'s Theatre Association (IPTA), a progressive cultural movement.',
      'Composed songs that were heavily praised by Kazi Nazrul Islam, Bangladesh\'s national poet.',
      'Pioneered the use of realist theater to address social and political issues in Bengal.',
    ],
  },
  'shah-abdul-hamid': {
    name: 'Shah Abdul Hamid',
    tagline: 'First Speaker of the Jatiyo Sangsad of independent Bangladesh.',
    category: 'Politics & Statecraft',
    info: [
      { label: 'Born', value: '1900 (Gumaniganj, Gobindaganj)' },
      { label: 'Died', value: '1972' },
      { label: 'Position', value: 'First Speaker of Jatiyo Sangsad' },
      { label: 'Party', value: 'Awami League' },
    ],
    description: 'A core political figure in the foundational history of Bangladesh, born in Gumaniganj Union of Gobindaganj upazila. Historical Milestone: He had the distinct honor of serving as the first Speaker of the Jatiyo Sangsad (then known as the Constituent Assembly or Gono Parishad) after Bangladesh gained independence. Career: A brilliant lawyer and social organizer, he joined the Awami League in 1955 and was elected to the Central Law Assembly in the historic 1970 elections, subsequently helping draft the nation\'s early legislative frameworks.',
    highlights: [
      'First Speaker of the Parliament of independent Bangladesh.',
      'Helped draft the nation\'s early legislative frameworks as part of the Constituent Assembly.',
      'Elected to the Central Law Assembly in the landmark 1970 general elections.',
      'Played a crucial role in the transition to Bangladeshi statehood.',
    ],
  },
  'abu-hussain-sarkar': {
    name: 'Abu Hussain Sarkar',
    tagline: 'Chief Minister of East Pakistan who abolished the Zamindari system and founded Bangla Academy.',
    category: 'Politics & Statecraft',
    info: [
      { label: 'Born', value: '1885 (Khordo Komorpur, Sadullapur)' },
      { label: 'Died', value: '1969' },
      { label: 'Position', value: 'Chief Minister of East Pakistan (1955)' },
      { label: 'Legacy', value: 'Founded Bangla Academy, abolished zamindari system' },
    ],
    description: 'A prominent politician and anti-British revolutionary born in Khordo Komorpur village of Sadullapur upazila. He was deeply influenced by leaders like Mahatma Gandhi and Maulana Abul Kalam Azad. Key Accomplishments: He served as the Chief Minister of East Pakistan in 1955 and the health minister of Pakistan in 1956. Cultural Legacy: During his brief tenure as Chief Minister, his government passed the landmark Purbo Bango Projasotto Ayen (which abolished the oppressive British Zamindari system). He also inaugurated the Bangla Academy on December 3, 1955, establishing a central institution for the preservation of Bengali culture.',
    highlights: [
      'Inaugurated the Bangla Academy on December 3, 1955, establishing a central institution for Bengali culture.',
      'As Chief Minister, passed the Purbo Bango Projasotto Ayen abolishing the British Zamindari system.',
      'Deeply involved in the anti-British independence movement, inspired by Gandhi.',
      'Served as Health Minister of Pakistan in 1956, contributing to public health policy.',
    ],
  },
  'fazle-rabbi-miah': {
    name: 'Fazle Rabbi Miah',
    tagline: 'Seven-time Member of Parliament and Deputy Speaker of the National Parliament.',
    category: 'Politics & Statecraft',
    info: [
      { label: 'Born', value: '1946' },
      { label: 'Died', value: '2022' },
      { label: 'Constituency', value: 'Gaibandha-5 (Saghata-Phulchhari)' },
      { label: 'Position', value: 'Deputy Speaker of Parliament' },
    ],
    description: 'A respected modern-day politician and lawyer who represented the Gaibandha-5 (Saghata-Phulchhari) constituency. Career: He was elected as a Member of Parliament an impressive seven times. He served as the Deputy Speaker of the National Parliament and was widely respected for his neutral governance of parliamentary sessions, legislative expertise, and local developmental work.',
    highlights: [
      'Elected as Member of Parliament seven times — a testament to his enduring popularity.',
      'Served as Deputy Speaker of the Jatiyo Sangsad with a reputation for impartiality.',
      'Known for extensive local development work in Saghata and Phulchhari upazilas.',
      'Respected across party lines for his legislative expertise and parliamentary conduct.',
    ],
  },
  'kazi-badruddoza': {
    name: 'Dr. Kazi M. Badruddoza',
    tagline: 'World-renowned agronomist who transformed Bangladesh\'s farming systems.',
    category: 'Science & Civil Service',
    info: [
      { label: 'Born', value: '1927' },
      { label: 'Died', value: '2023' },
      { label: 'Position', value: 'Director General, BARI' },
      { label: 'Award', value: 'Independence Day Award (Swadhinata Padak)' },
    ],
    description: 'A world-renowned agronomist and agricultural scientist who completely transformed Bangladesh\'s farming systems. Impact: He served as the Director General of the Bangladesh Agricultural Research Institute (BARI). He is credited with discovering and introducing several high-yielding varieties of wheat and modern vegetables that helped steer Bangladesh away from famine post-independence. Accolades: He was awarded the Independence Day Award (Swadhinata Padak), the highest civilian honor in the country, for his immense contributions to science and food security.',
    highlights: [
      'Awarded the Independence Day Award (Swadhinata Padak), Bangladesh\'s highest civilian honor.',
      'Introduced high-yielding wheat varieties that revolutionized cereal production in Bangladesh.',
      'As Director General of BARI, led research that significantly improved national food security.',
      'His work helped Bangladesh move from chronic food deficit toward self-sufficiency.',
    ],
  },
  'tim-nurunnabi-chowdhury': {
    name: 'T. I. M. Nurunnabi Chowdhury',
    tagline: 'First Muslim ICS officer from the Gaibandha region.',
    category: 'Science & Civil Service',
    info: [
      { label: 'Born', value: '1885 (Chondiya, Phulchhari)' },
      { label: 'Died', value: '1948' },
      { label: 'Position', value: 'ICS Officer, District Judge' },
      { label: 'Education', value: 'Calcutta University (English Literature)' },
    ],
    description: 'An early pioneer of administrative leadership from the region, born in Chondiya village under Phulchhari upazila. Historical Fact: After studying English Literature at Calcutta University, he broke barriers by being appointed as an Indian Civil Service (ICS) Officer in 1919. He was the first Muslim ICS Officer from the Gaibandha region, later working as a District Judge and Deputy Magistrate. He played a key role in inspiring Muslims of North Bengal to pursue English education.',
    highlights: [
      'First Muslim ICS (Indian Civil Service) officer from the entire Gaibandha region.',
      'Studied English Literature at Calcutta University, then one of Asia\'s finest institutions.',
      'Served as District Judge and Deputy Magistrate, known for integrity and fairness.',
      'Played a key role in inspiring Muslims of North Bengal to pursue English education.',
    ],
  },
  'badiul-alam': {
    name: 'Badiul Alam (Bir Uttam)',
    tagline: 'Fearless fighter awarded Bir Uttam — the second-highest gallantry award in Bangladesh.',
    category: 'Valiant Freedom Fighters',
    info: [
      { label: 'Award', value: 'Bir Uttam' },
      { label: 'Role', value: 'Mukti Bahini commander' },
      { label: 'Campaign', value: '1971 Liberation War' },
      { label: 'Rank', value: 'Second-highest gallantry award' },
    ],
    description: 'A fearless fighter who displayed immense bravery during the 1971 Liberation War, earning the second-highest gallantry award in Bangladesh.',
    highlights: [
      'Awarded Bir Uttam, the second-highest gallantry award of Bangladesh.',
      'Displayed extraordinary bravery in multiple encounters during the Liberation War.',
      'Inspired fellow freedom fighters through his unwavering commitment to the cause.',
      'A symbol of Gaibandha\'s proud contribution to the nation\'s independence.',
    ],
  },
  'md-mahabub-elahi-ronju': {
    name: 'Md. Mahabub Elahi Ronju (Bir Protik)',
    tagline: 'Commander of the famous "Ronju Company" of the Mukti Bahini.',
    category: 'Valiant Freedom Fighters',
    info: [
      { label: 'Award', value: 'Bir Protik' },
      { label: 'Role', value: 'Company Commander, Mukti Bahini' },
      { label: 'Unit', value: 'Ronju Company' },
      { label: 'Sector', value: 'Gaibandha & Rangpur' },
    ],
    description: 'A valiant freedom fighter who served as the commander of the famous "Ronju Company" of the Mukti Bahini. He led critical operations in the Gaibandha and greater Rangpur sectors to liberate the area from occupation forces.',
    highlights: [
      'Awarded Bir Protik for gallantry during the 1971 Liberation War.',
      'Commanded the legendary "Ronju Company" of Mukti Bahini fighters.',
      'Led critical liberation operations across Gaibandha and Rangpur sectors.',
      'His tactical leadership was instrumental in multiple successful guerrilla missions.',
    ],
  },
  'tulsi-lahiri': {
    name: 'Tulsi Lahiri',
    tagline: 'Pioneering playwright, actor, and director who reshaped Bengali theater.',
    category: 'Literature & Arts',
    info: [
      { label: 'Born', value: '1897 (Naldanga, Sadullapur)' },
      { label: 'Died', value: '1959' },
      { label: 'Key Works', value: 'Chheratar, Dukher Imam' },
      { label: 'Affiliation', value: 'IPTA (Indian People\'s Theatre Association)' },
    ],
    description: 'A pioneering playwright, actor, director, and music composer who reshaped modern Bengali theater and early cinema. Born in the Naldanga Zamindar family of Sadullapur upazila, he initially trained as a lawyer before dedicating his life to the arts. His legendary plays Chheratar (1950) and Dukher Imam (1947) realistically portrayed the horrific realities of the 1943 Bengal Famine and the struggles of the rural poor.',
    highlights: [
      'His play Dukher Imam (1947) was a powerful critique of feudal exploitation during the Bengal Famine.',
      'Deeply involved with the Indian People\'s Theatre Association (IPTA), a progressive cultural movement.',
      'Composed songs that were heavily praised by Kazi Nazrul Islam, Bangladesh\'s national poet.',
      'Pioneered the use of realist theater to address social and political issues in Bengal.',
    ],
  },
  'shah-abdul-hamid': {
    name: 'Shah Abdul Hamid',
    tagline: 'First Speaker of the Jatiyo Sangsad of Bangladesh.',
    category: 'Politics & Statecraft',
    info: [
      { label: 'Born', value: '1900 (Gumaniganj, Gobindaganj)' },
      { label: 'Died', value: '1972' },
      { label: 'Position', value: 'First Speaker of Jatiyo Sangsad' },
      { label: 'Party', value: 'Awami League' },
    ],
    description: 'A core political figure in the foundational history of Bangladesh, born in Gumaniganj Union of Gobindaganj upazila. He had the distinct honor of serving as the first Speaker of the Jatiyo Sangsad (then known as the Constituent Assembly or Gono Parishad) after Bangladesh gained independence. A brilliant lawyer and social organizer, he joined the Awami League in 1955 and was elected to the Central Law Assembly in the historic 1970 elections.',
    highlights: [
      'First Speaker of the Parliament of independent Bangladesh.',
      'Helped draft the nation\'s early legislative frameworks as part of the Constituent Assembly.',
      'Elected to the Central Law Assembly in the landmark 1970 general elections.',
      'Played a crucial role in the transition to Bangladeshi statehood.',
    ],
  },
  'abu-hussain-sarkar': {
    name: 'Abu Hussain Sarkar',
    tagline: 'Chief Minister of East Pakistan and architect of the Bangla Academy.',
    category: 'Politics & Statecraft',
    info: [
      { label: 'Born', value: '1885 (Khordo Komorpur, Sadullapur)' },
      { label: 'Died', value: '1969' },
      { label: 'Position', value: 'Chief Minister of East Pakistan (1955)' },
      { label: 'Legacy', value: 'Founded Bangla Academy, abolished zamindari system' },
    ],
    description: 'A prominent politician and anti-British revolutionary born in Khordo Komorpur village of Sadullapur upazila. He was deeply influenced by leaders like Mahatma Gandhi and Maulana Abul Kalam Azad. He served as the Chief Minister of East Pakistan in 1955 and the health minister of Pakistan in 1956. His government passed the landmark Purbo Bango Projasotto Ayen which abolished the oppressive British Zamindari system.',
    highlights: [
      'Inaugurated the Bangla Academy on December 3, 1955, establishing a central institution for Bengali culture.',
      'As Chief Minister, abolished the oppressive British Zamindari system in East Bengal.',
      'Deeply involved in the anti-British independence movement, inspired by Gandhi.',
      'Served as Health Minister of Pakistan in 1956, contributing to public health policy.',
    ],
  },
  'fazle-rabbi-miah': {
    name: 'Fazle Rabbi Miah',
    tagline: 'Seven-time MP and Deputy Speaker of the National Parliament.',
    category: 'Politics & Statecraft',
    info: [
      { label: 'Born', value: '1946' },
      { label: 'Died', value: '2022' },
      { label: 'Constituency', value: 'Gaibandha-5 (Saghata-Phulchhari)' },
      { label: 'Position', value: 'Deputy Speaker of Parliament' },
    ],
    description: 'A respected modern-day politician and lawyer who represented the Gaibandha-5 (Saghata-Phulchhari) constituency. He was elected as a Member of Parliament an impressive seven times. He served as the Deputy Speaker of the National Parliament and was widely respected for his neutral governance of parliamentary sessions, legislative expertise, and local developmental work.',
    highlights: [
      'Elected as Member of Parliament seven times — a testament to his enduring popularity.',
      'Served as Deputy Speaker of the Jatiyo Sangsad with a reputation for impartiality.',
      'Known for extensive local development work in Saghata and Phulchhari upazilas.',
      'Respected across party lines for his legislative expertise and parliamentary conduct.',
    ],
  },
  'kazi-badruddoza': {
    name: 'Dr. Kazi M. Badruddoza',
    tagline: 'World-renowned agronomist who transformed Bangladesh\'s farming.',
    category: 'Science & Civil Service',
    info: [
      { label: 'Born', value: '1927' },
      { label: 'Died', value: '2023' },
      { label: 'Position', value: 'Director General, BARI' },
      { label: 'Award', value: 'Independence Day Award' },
    ],
    description: 'A world-renowned agronomist and agricultural scientist who completely transformed Bangladesh\'s farming systems. He served as the Director General of the Bangladesh Agricultural Research Institute (BARI). He is credited with discovering and introducing several high-yielding varieties of wheat and modern vegetables that helped steer Bangladesh away from famine post-independence.',
    highlights: [
      'Awarded the Independence Day Award (Swadhinata Padak), Bangladesh\'s highest civilian honor.',
      'Introduced high-yielding wheat varieties that revolutionized cereal production in Bangladesh.',
      'As Director General of BARI, led research that significantly improved national food security.',
      'His work helped Bangladesh move from chronic food deficit toward self-sufficiency.',
    ],
  },
  'tim-nurunnabi-chowdhury': {
    name: 'T. I. M. Nurunnabi Chowdhury',
    tagline: 'First Muslim ICS officer from the Gaibandha region.',
    category: 'Science & Civil Service',
    info: [
      { label: 'Born', value: '1885 (Chondiya, Phulchhari)' },
      { label: 'Died', value: '1948' },
      { label: 'Position', value: 'ICS Officer, District Judge' },
      { label: 'Education', value: 'Calcutta University (English Literature)' },
    ],
    description: 'An early pioneer of administrative leadership from the region, born in Chondiya village under Phulchhari upazila. After studying English Literature at Calcutta University, he broke barriers by being appointed as an Indian Civil Service (ICS) Officer in 1919. He was the first Muslim ICS Officer from the Gaibandha region, later working as a District Judge and Deputy Magistrate.',
    highlights: [
      'First Muslim ICS (Indian Civil Service) officer from the entire Gaibandha region.',
      'Studied English Literature at Calcutta University, then one of Asia\'s finest institutions.',
      'Served as District Judge and Deputy Magistrate, known for integrity and fairness.',
      'Played a key role in inspiring Muslims of North Bengal to pursue English education.',
    ],
  },
  'badiul-alam': {
    name: 'Badiul Alam (Bir Uttam)',
    tagline: 'Fearless freedom fighter awarded Bir Uttam — second-highest gallantry award.',
    category: 'Valiant Freedom Fighters',
    info: [
      { label: 'Award', value: 'Bir Uttam' },
      { label: 'Role', value: 'Mukti Bahini commander' },
      { label: 'Campaign', value: '1971 Liberation War' },
      { label: 'Rank', value: 'Second-highest gallantry award' },
    ],
    description: 'A fearless freedom fighter who displayed immense bravery during the 1971 Liberation War. He earned the Bir Uttam, the second-highest gallantry award in Bangladesh, for his extraordinary courage and leadership in combat operations against the Pakistani occupation forces.',
    highlights: [
      'Awarded Bir Uttam, the second-highest gallantry award of Bangladesh.',
      'Displayed extraordinary bravery in multiple encounters during the Liberation War.',
      'Inspired fellow freedom fighters through his unwavering commitment to the cause.',
      'A symbol of Gaibandha\'s proud contribution to the nation\'s independence.',
    ],
  },
  'md-mahabub-elahi-ronju': {
    name: 'Md. Mahabub Elahi Ronju (Bir Protik)',
    tagline: 'Commander of the famous "Ronju Company" of Mukti Bahini.',
    category: 'Valiant Freedom Fighters',
    info: [
      { label: 'Award', value: 'Bir Protik' },
      { label: 'Role', value: 'Company Commander, Mukti Bahini' },
      { label: 'Unit', value: 'Ronju Company' },
      { label: 'Sector', value: 'Gaibandha & Rangpur' },
    ],
    description: 'A valiant freedom fighter who served as the commander of the famous "Ronju Company" of the Mukti Bahini. He led critical operations in the Gaibandha and greater Rangpur sectors to liberate the area from occupation forces. His leadership and tactical acumen were instrumental in several successful guerrilla operations.',
    highlights: [
      'Awarded Bir Protik for gallantry during the 1971 Liberation War.',
      'Commanded the legendary "Ronju Company" of Mukti Bahini fighters.',
      'Led critical liberation operations across Gaibandha and Rangpur sectors.',
      'His tactical leadership was instrumental in multiple successful guerrilla missions.',
    ],
  },
};

function renderPersonalities() {
  const grid = document.getElementById('personGrid');
  if (!grid) return;
  const cats = ['Literature & Arts', 'Politics & Statecraft', 'Science & Civil Service', 'Valiant Freedom Fighters'];
  let html = '';
  cats.forEach(cat => {
    const items = Object.entries(personData).filter(([, d]) => d.category === cat);
    if (!items.length) return;
    html += `<div style="grid-column:1/-1;margin-top:${html ? '16' : '0'}px;"><h3 style="font-size:1.05rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;">${cat}</h3></div>`;
    items.forEach(([key, d]) => {
      html += `<div class="person-card" data-person="${key}">
        <div class="person-img">${d.name.charAt(0)}</div>
        <h3>${d.name}</h3>
        <div class="person-role">${d.tagline}</div>
        <p>${d.description.substring(0, 120)}...</p>
      </div>`;
    });
  });
  grid.innerHTML = html;
}

const geoData = {
  'river-systems': {
    name: 'River Systems of Gaibandha',
    tagline: 'Six major rivers shape the district\'s geography and livelihood.',
    info: [
      { label: 'Major Rivers', value: 'Brahmaputra, Jamuna, Teesta, Ghaghat, Bangali, Karatoya' },
      { label: 'River Density', value: 'One of the highest in Bangladesh' },
      { label: 'Impact', value: 'Fertile floodplains, chars, erosion' },
      { label: 'Economic Role', value: 'Fishing, agriculture, transport' },
    ],
    description: 'Gaibandha is defined by its rivers. The Brahmaputra enters from Assam and forms the eastern boundary. Its main distributary, the Jamuna, flows south along the district\'s edge. The Teesta joins near Chilmari after crossing Sundarganj. The Ghaghat passes through Sadar, the Bangali borders Saghata, and the historic Karatoya flows through the west. These rivers create the chars — fertile river islands that support thousands of families.',
    highlights: [
      'The Brahmaputra is one of the largest rivers in the world by discharge, carrying immense sediment loads that build char lands.',
      'The Jamuna is known for its highly braided, unstable channels that shift dramatically each monsoon season.',
      'The Teesta Barrage upstream controls irrigation for vast areas of northern Bangladesh.',
      'The Karatoya is mentioned in ancient Hindu texts including the Mahabharata.',
      'During monsoon, the rivers can swell to several kilometers wide, submerging low-lying areas.',
    ],
  },
  'brahmaputra': {
    name: 'Brahmaputra River',
    tagline: 'One of the world\'s mightiest rivers, shaping Gaibandha\'s eastern boundary.',
    info: [
      { label: 'Length', value: '2,900 km (total)' },
      { label: 'Origin', value: 'Tibet (as Yarlung Tsangpo)' },
      { label: 'Entry to BD', value: 'Near Chilmari, Kurigram' },
      { label: 'Role in Gaibandha', value: 'Forms eastern boundary, creates chars' },
    ],
    description: 'The Brahmaputra is one of the largest rivers in the world by discharge and sediment load. It enters Bangladesh from Assam and flows south past Chilmari before joining the Teesta. In Gaibandha, its massive braided channels create extensive char lands and sandbars. The river is the lifeblood of the district\'s char communities, providing fish, fertile silt, and transport routes — but also bringing annual erosion and displacement.',
    highlights: [
      'Carries over 600 million tons of sediment annually, building and reshaping chars.',
      'Supports the endangered Ganges river dolphin and the Bengal monitor lizard.',
      'Historically navigable by large steamers during the British era.',
      'The Old Brahmaputra branch leaves the mainstream south of Gaibandha.',
      'Char communities depend on the river for fishing, farming, and daily transport.',
    ],
  },
  'jamuna': {
    name: 'Jamuna River',
    tagline: 'The main distributary of the Brahmaputra within Bangladesh.',
    info: [
      { label: 'Length in BD', value: '~240 km' },
      { label: 'Formation', value: 'Main distributary of Brahmaputra' },
      { label: 'Width', value: '3–8 km during monsoon' },
      { label: 'Confluence', value: 'Merges with Padma near Chandpur' },
    ],
    description: 'The Jamuna is the main distributary of the Brahmaputra within Bangladesh, flowing due south along Gaibandha\'s eastern edge. It is known for its highly braided, unstable channels that shift dramatically each monsoon season, constantly reshaping the landscape. The river receives the combined waters of the Baral, Atrai, and Hurasagar before merging with the Padma.',
    highlights: [
      'One of the most dynamic river systems in the world — channels shift by kilometers each year.',
      'Creates the massive char lands of Fulchhari, Saghata, and Sundarganj upazilas.',
      'Historically the site of the only rail-ferry crossing in Bangladesh (Balashi Ghat, 1938–1990s).',
      'Fishing is a primary livelihood for thousands of families along its banks.',
      'Home to diverse aquatic life including the Gangetic dolphin, otters, and numerous fish species.',
    ],
  },
  'teesta': {
    name: 'Teesta River (Tista)',
    tagline: 'One of the largest tributaries of the Brahmaputra, vital for irrigation.',
    info: [
      { label: 'Length', value: '~414 km total' },
      { label: 'Origin', value: 'Sikkim, India (Himalayas)' },
      { label: 'Key Feature', value: 'Teesta Barrage for irrigation' },
      { label: 'Role', value: 'Heavily intersects Sundarganj Upazila' },
    ],
    description: 'The Teesta is one of the largest tributaries of the Brahmaputra. It originates in the Himalayas of Sikkim and flows through West Bengal before entering Bangladesh near Nilphamari. The river heavily intersects Sundarganj Upazila in Gaibandha, creating vast seasonal chars. The Teesta Barrage upstream controls irrigation for much of northern Bangladesh.',
    highlights: [
      'The Teesta Barrage irrigates thousands of hectares across northern Bangladesh.',
      'Creates extensive char lands in Sundarganj, supporting unique riverine agriculture.',
      'The river is a major source of sand and gravel for construction.',
      'Annual flooding enriches farmland but also causes erosion and displacement.',
      'Water sharing between India and Bangladesh is a significant geopolitical issue.',
    ],
  },
  'ghaghat': {
    name: 'Ghaghat, Bangali & Karatoya Rivers',
    tagline: 'Smaller rivers with outsized historical and cultural significance.',
    info: [
      { label: 'Ghaghat', value: 'Flows through Gaibandha Sadar' },
      { label: 'Bangali', value: 'Forms border of Saghata Upazila' },
      { label: 'Karatoya', value: 'Mentioned in the Mahabharata' },
      { label: 'Significance', value: 'Historical, agricultural, drainage' },
    ],
    description: 'These smaller but significant rivers flow through Gaibandha\'s interior. The Ghaghat passes through Gaibandha Sadar and is central to the district headquarters\' geography. The Bangali borders Saghata Upazila. The historic Karatoya — mentioned in the Mahabharata and other ancient texts — flows through the western reaches of the district, connecting to the broader Ganges-Brahmaputra system.',
    highlights: [
      'The Karatoya is one of the oldest rivers mentioned in Hindu scriptures, once a mighty channel.',
      'The Ghaghat shapes the daily life of Gaibandha town, providing drainage and water.',
      'The Bangali River creates fertile floodplains for high jute production in Saghata.',
      'These rivers support local fishing communities and small-scale agriculture.',
      'Historically, these rivers were larger and more navigable than they are today.',
    ],
  },
  'char-land': {
    name: 'Char Land Formation',
    tagline: 'Dynamic river islands that define life in Gaibandha.',
    info: [
      { label: 'What are Chars?', value: 'Mid-channel river islands of silt and sand' },
      { label: 'Formation', value: 'Monsoon flooding + dry season accretion' },
      { label: 'Concentration', value: 'Highest in Fulchhari, Saghata, Sundarganj' },
      { label: 'Population', value: 'Hundreds of thousands of char dwellers' },
    ],
    description: 'Chars are mid-channel river islands formed from silt and sand deposited by the Brahmaputra, Jamuna, and Teesta rivers. These fertile but unstable landmasses are in constant flux — eroded during monsoon and rebuilt in the dry season. Gaibandha has one of the highest concentrations of char land in Bangladesh. Char dwellers live in extreme vulnerability, facing annual displacement, yet these lands support rich agriculture and unique riverine biodiversity.',
    highlights: [
      'Chars can appear, disappear, and shift location within a single monsoon season.',
      'Despite instability, chars are intensively farmed for rice, maize, pulses, and vegetables.',
      'Char communities are among the most climate-vulnerable populations in Bangladesh.',
      'NGOs like Friendship operate floating hospitals and schools to serve char dwellers.',
      'The Ganges river dolphin is occasionally sighted in the channels around chars.',
    ],
  },
  'climate-overview': {
    name: 'Climate of Gaibandha',
    tagline: 'A subtropical monsoon climate shaped by rivers and seasonal rhythms.',
    info: [
      { label: 'Annual Rainfall', value: '~2,200 mm' },
      { label: 'Summer Temp', value: 'Up to 35°C (Mar–Jun)' },
      { label: 'Winter Temp', value: '10–25°C (Nov–Feb)' },
      { label: 'Best Season', value: 'October to March' },
    ],
    description: 'Gaibandha has a subtropical monsoon climate with three distinct seasons. Summer (March–June) is hot and humid with pre-monsoon storms (Kalbaishakhi). The monsoon (July–October) brings heavy rainfall that swells the rivers dramatically. Winter (November–February) is cool and dry with clear skies — the ideal visiting season. The riverine ecosystem supports over 150 bird species and diverse aquatic life.',
    highlights: [
      'Annual rainfall averages ~2,200 mm, with most falling during the monsoon (June–September).',
      'Pre-monsoon nor\'westers (Kalbaishakhi) can bring destructive storms with hail and strong winds.',
      'Winter fog is common from December to January, sometimes disrupting transport.',
      'Climate change is increasing the frequency and intensity of floods and erosion.',
      'The district experiences some of the highest river erosion rates in Bangladesh.',
    ],
  },
  'summer': {
    name: 'Summer Season (March–June)',
    tagline: 'Hot, humid, and alive with pre-monsoon storms.',
    info: [
      { label: 'Temperature', value: 'Up to 35°C' },
      { label: 'Humidity', value: 'High (70–85%)' },
      { label: 'Key Feature', value: 'Kalbaishakhi storms' },
      { label: 'Crops', value: 'Aus rice, jute planting' },
    ],
    description: 'Summer in Gaibandha is hot and humid, with temperatures reaching 35°C. The season is marked by Kalbaishakhi — violent nor\'wester storms that bring sudden rain, hail, and strong winds. These storms provide relief from the heat but can damage crops. Summer is the season for Aus rice cultivation and jute planting.',
    highlights: [
      'Kalbaishakhi storms can reach wind speeds of 60–100 km/h.',
      'Summer is the season for local fruit harvests — mangoes, jackfruit, and litchis.',
      'The heat peaks in April–May before the monsoon breaks.',
      'Farmers prepare their land for the main Aman rice crop during this period.',
      'Evenings are often lively with cultural programs and outdoor gatherings.',
    ],
  },
  'monsoon': {
    name: 'Monsoon Season (July–October)',
    tagline: 'When the rivers swell and the chars transform.',
    info: [
      { label: 'Rainfall', value: '~1,500 mm (bulk of annual)' },
      { label: 'River Level', value: 'Rises 3–6 meters' },
      { label: 'Impact', value: 'Flooding, erosion, boat races' },
      { label: 'Activities', value: 'Fishing, Nouka Baich, Aman cultivation' },
    ],
    description: 'The monsoon brings heavy rainfall that causes the district\'s rivers to swell dramatically, often rising 3–6 meters. Flooding is a regular occurrence, with some areas submerged for weeks. However, the monsoon is also a time of celebration — vibrant Nouka Baich (boat races) take place and the Aman rice crop thrives in the floodwaters.',
    highlights: [
      'Over 70% of annual rainfall occurs during the monsoon months.',
      'River erosion peaks during this season, with entire villages sometimes lost.',
      'Nouka Baich (boat racing) is a thrilling traditional sport held on swollen rivers.',
      'The chars are at their most dynamic — some disappear, others grow.',
      'Despite challenges, the monsoon brings life-giving water for the main Aman rice crop.',
    ],
  },
  'winter': {
    name: 'Winter Season (November–February)',
    tagline: 'Cool, crisp, and the best time to visit Gaibandha.',
    info: [
      { label: 'Temperature', value: '10–25°C' },
      { label: 'Humidity', value: 'Low (50–65%)' },
      { label: 'Sky', value: 'Clear and sunny' },
      { label: 'Harvest', value: 'Aman rice, winter vegetables' },
    ],
    description: 'Winter is the most pleasant season in Gaibandha, with cool and dry weather, clear skies, and temperatures ranging 10–25°C. This is the peak harvest season for Aman rice and winter vegetables. Morning fog sometimes lingers until late morning, creating a mystical landscape over the rivers and fields.',
    highlights: [
      'The best season for tourists — comfortable for exploring all outdoor sites.',
      'Peak harvest time for Aman rice, the largest rice crop of the year.',
      'Winter vegetables — cauliflower, cabbage, tomato, bean — are at their best.',
      'Morning fog over the Brahmaputra and Jamuna creates stunning photographic opportunities.',
      'Local fairs (Poush Mela) celebrate the winter harvest with traditional foods and crafts.',
    ],
  },
  'flora-fauna': {
    name: 'Flora & Fauna',
    tagline: 'Rich riverine biodiversity in the wetlands and char areas.',
    info: [
      { label: 'Bird Species', value: '150+ resident and migratory' },
      { label: 'Key Animals', value: 'River dolphins, otters, turtles, monitor lizards' },
      { label: 'Vegetation', value: 'Sundori, bamboo, water hyacinth, reeds' },
      { label: 'Threatened Species', value: 'Ganges river dolphin (endangered)' },
    ],
    description: 'The riverine ecosystem of Gaibandha supports diverse flora and fauna. Common vegetation includes sundori trees, bamboo groves, various aquatic plants, and water hyacinths that carpet the river edges. Wildlife includes the endangered Ganges river dolphin, smooth-coated otters, various turtle species, Bengal monitor lizards, and over 150 resident and migratory bird species that flock to the wetlands and char areas.',
    highlights: [
      'The Ganges river dolphin (Platanista gangetica) is occasionally sighted in the Jamuna and Brahmaputra.',
      'Migratory birds from Siberia and Central Asia visit the wetlands during winter.',
      'The char grasslands support a unique ecosystem adapted to annual flooding.',
      'Bamboo groves are a common sight, used extensively for construction and crafts.',
      'Fish diversity is high — including catfish, carp, snakeheads, and the prized hilsa (seasonal).',
    ],
  },
};

const transportData = {
  'bus': {
    name: 'By Bus — Dhaka to Gaibandha',
    tagline: '~264 km, 6–7 hours via the N5 highway.',
    info: [
      { label: 'Distance', value: '~264 km' },
      { label: 'Duration', value: '6–7 hours' },
      { label: 'Fare', value: 'BDT 700–1,200' },
      { label: 'Operators', value: 'Shanto, Shyamoli, S.R., Alhamra, Orin' },
    ],
    description: 'Direct buses to Gaibandha depart from Dhaka\'s Gabtoli and Kolayanpur terminals. Major operators include Shanto Travels (offering both AC and Non-AC coaches), Shyamoli N.R. Travels, S.R. Travels, Alhamra Paribahan, and Orin Travels. The journey covers approximately 264 km and takes 6–7 hours depending on traffic. Fares start from BDT 700. Local bus services connect Gaibandha town to all 7 upazilas.',
    highlights: [
      'AC and Non-AC options available from multiple operators.',
      'Buses depart throughout the day, with early morning and overnight services.',
      'The N5 highway passes through Palashbari and Gaibandha Sadar.',
      'Local buses, CNG auto-rickshaws, and tempos connect upazilas.',
      'Book tickets online via bdtickets.com or at the counter.',
    ],
  },
  'train': {
    name: 'By Train — Bangladesh Railway',
    tagline: 'Gaibandha Railway Station connects to major cities.',
    info: [
      { label: 'Station', value: 'Gaibandha Railway Station' },
      { label: 'From Dhaka', value: '7–8 hours' },
      { label: 'Fare Range', value: 'BDT 80–450' },
      { label: 'Key Train', value: 'Nilsagar Express' },
    ],
    description: 'Gaibandha Railway Station is located near the town center, approximately 0.9 km from Shah Abdul Hamid Stadium. Long-distance trains connect Gaibandha to Dhaka, Rangpur, Bogra, and Saidpur. The Nilsagar Express and other services run daily. Travel time from Dhaka is approximately 7–8 hours with fares ranging from BDT 80 to BDT 450 depending on class. The station is a key transport hub for the district.',
    highlights: [
      'Direct train services from Dhaka to Gaibandha run twice daily.',
      'The Nilsagar Express is the most popular service on this route.',
      'Station is within walking distance of the town center.',
      'Rickshaws and CNG auto-rickshaws are readily available outside the station.',
      'The Gaibandha–Rangpur line passes through the historic Badiakhali Railway Bridge.',
    ],
  },
  'air': {
    name: 'By Air — Saidpur Airport (SPD)',
    tagline: 'Nearest airport, ~90 km from Gaibandha.',
    info: [
      { label: 'Airport Code', value: 'SPD' },
      { label: 'Location', value: 'Saidpur, Nilphamari' },
      { label: 'Distance', value: '~90 km from Gaibandha' },
      { label: 'Flight Time', value: '55 min from Dhaka' },
    ],
    description: 'The nearest airport is Saidpur Airport (SPD) in Nilphamari, about 90 km north-west of Gaibandha town. Daily flights from Dhaka are operated by Biman Bangladesh, US-Bangla Airlines, Air Astra, and Novo Air. Flight time is approximately 55 minutes. From Saidpur, travelers can hire a car or take a bus for the 1.5-hour road journey to Gaibandha. Fares from Dhaka start at approximately BDT 5,850.',
    highlights: [
      'Multiple daily flights from Dhaka to Saidpur.',
      'Airlines: Biman Bangladesh, US-Bangla, Air Astra, Novo Air.',
      'Biman Bangladesh operates morning (08:00) and evening (19:45) flights.',
      'Road from Saidpur to Gaibandha takes ~1.5 hours by car.',
      'Alternative: fly to Saidpur and continue by bus or hired car.',
    ],
  },
  'river-ports': {
    name: 'River Ports & Ghats',
    tagline: 'Historic river crossings and active inland ports.',
    info: [
      { label: 'Main Port', value: 'Fulchhari Ghat (Balashi Ghat)' },
      { label: 'Historical Role', value: 'Only rail-ferry crossing in BD (1938–1990s)' },
      { label: 'Active Ghats', value: 'Bonarpara, Balashi, and smaller char ghats' },
      { label: 'Transport', value: 'Country boats, ferries, cargo vessels' },
    ],
    description: 'Gaibandha\'s river ports are vital transport links. Fulchhari Ghat (Balashi Ghat) was once Bangladesh\'s only rail-ferry crossing from 1938 to the 1990s, connecting northern and central Bangladesh. Today, country boats provide local transport across the Brahmaputra and Jamuna. Bonarpara Ghat in Saghata serves passenger and cargo vessels. Numerous smaller ghats dot the riverbanks, serving char communities with daily boat services.',
    highlights: [
      'Balashi Ghat was the only rail-ferry crossing in Bangladesh for over 50 years.',
      'Country boats available for char island transport (BDT 100/hour).',
      'Solar-powered eco-boats now operate at Balashi Ghat.',
      'Bonarpara Ghat is a key cargo terminal for jute and agricultural products.',
      'River ports are lifelines for char communities with no road access.',
    ],
  },
  'bridges': {
    name: 'Bridges of Gaibandha',
    tagline: 'Historic and modern bridges connecting the district.',
    info: [
      { label: 'Key Bridge', value: 'Badiakhali Railway Bridge' },
      { label: 'Modern', value: 'Several LGED concrete bridges' },
      { label: 'Liberation War', value: 'Badiakhali Bridge sabotaged in 1971' },
      { label: 'Road Bridges', value: 'New bridges on N5 and rural roads' },
    ],
    description: 'Gaibandha has several notable bridges. The Badiakhali Railway Bridge on the Gaibandha–Rangpur line was famously sabotaged by freedom fighters during the 1971 Liberation War to halt the advancement of Pakistani forces. The Fulchhari Rail Bridge crosses the Brahmaputra tributaries. Under LGED projects, numerous modern concrete bridges have been constructed across the district\'s many rivers and canals, improving rural connectivity.',
    highlights: [
      'Badiakhali Railway Bridge — a historic site from the 1971 Liberation War.',
      'Fulchhari Rail Bridge connects the riverine upazila to the rail network.',
      'LGED has built dozens of concrete bridges improving rural access.',
      'Many bridges are essential for char communities during monsoon floods.',
      'Bridge construction continues under the UCRIP climate resilience project.',
    ],
  },
  'road-network': {
    name: 'Road Network',
    tagline: 'Over 1,700 km of roads linking the district.',
    info: [
      { label: 'National Highway', value: 'N5 (Dhaka–Rangpur)' },
      { label: 'Paved Roads', value: 'Over 1,700 km' },
      { label: 'Key Corridor', value: 'Palashbari–Gaibandha Sadar' },
      { label: 'Local Transport', value: 'CNG, tempo, rickshaw, nosimon' },
    ],
    description: 'The N5 National Highway (Dhaka–Rangpur) passes directly through Palashbari and Gaibandha Sadar, making these upazilas major transport corridors. Over 1,700 km of paved roads connect all upazilas and most union parishads. Local transport options include CNG auto-rickshaws, tempos (three-wheelers), rickshaws, and nosimon (locally modified motorized vans). Rural roads are mostly brick or gravel surface.',
    highlights: [
      'The N5 highway links Gaibandha to Dhaka (south) and Rangpur (north).',
      'Palashbari is a strategic highway hub with cold storage facilities.',
      'Local transport: CNG (BDT 10–20 per km), tempo, rickshaw.',
      'Road conditions in char areas remain challenging, especially during monsoon.',
      'LGED continues to upgrade rural roads under infrastructure projects.',
    ],
  },
};

const religiousData = {
  'shah-sultan-gazi': {
    name: 'Mirer Bagan Shah Sultan Gazi Mosque',
    tagline: 'One of the oldest mosques in the region (c. 1308 CE).',
    info: [
      { label: 'Location', value: 'Dariyapur, Gaibandha Sadar' },
      { label: 'Established', value: '~1308 CE' },
      { label: 'Founder', value: 'Sufi saint Shah Sultan Gazi' },
      { label: 'Also Known As', value: 'Mir Bagan Jame Mosque & Mazar Sharif' },
    ],
    description: 'One of the oldest mosques in the region, believed to be established around 1308 CE by the revered Sufi saint Shah Sultan Gazi. Known as Mir Bagan Jame Mosque and Mazar Sharif, it is considered a wish-fulfillment shrine — drawing pilgrims from across the district and beyond. The mosque was renovated in the 14th century by Qari Karim Bux who came from Mymensingh. The site features both the mosque and the mazar (tomb) of Shah Sultan Gazi.',
    highlights: [
      'Over 700 years old — one of the earliest Muslim sites in northern Bengal.',
      'Known locally as a "wish-fulfillment shrine" — pilgrims come for blessings.',
      'The mazar (tomb) of Shah Sultan Gazi is adjacent to the mosque.',
      'Renovated by Qari Karim Bux in the 14th century.',
      'Annual urs (death anniversary) draws thousands of devotees.',
    ],
  },
  'pracheen-masta': {
    name: 'Pracheen Masta Masjid',
    tagline: 'An ancient mosque rich with folklore in Gobindaganj.',
    info: [
      { label: 'Location', value: 'Gobindaganj Upazila' },
      { label: 'Period', value: 'Several centuries old' },
      { label: 'Style', value: 'Sultanate-era architecture' },
      { label: 'Status', value: 'Active mosque & landmark' },
    ],
    description: 'An ancient mosque with several centuries of history, located in Gobindaganj Upazila. Rich with local folklore, it stands as one of the landmark religious structures of Gobindaganj. The mosque features traditional Sultanate-era architectural elements including terracotta ornamentation and a multi-domed prayer hall.',
    highlights: [
      'Several centuries old with rich local folklore attached to its founding.',
      'Features traditional Sultanate-era terracotta and architectural details.',
      'An active place of worship serving the local community.',
      'One of the key heritage sites of Gobindaganj Upazila.',
      'Surrounded by stories passed down through generations.',
    ],
  },
  'kashtha-kali': {
    name: 'Kashtha Kali Mandir (Wooden Kali Temple)',
    tagline: 'A historic wooden temple, ~200 years old.',
    info: [
      { label: 'Location', value: 'Bharatkhali, Gaibandha' },
      { label: 'Age', value: '~200 years' },
      { label: 'Material', value: 'Primarily wood construction' },
      { label: 'Significance', value: 'Key Hindu pilgrimage site' },
    ],
    description: 'A historic Hindu temple built approximately 200 years ago in Bharatkhali, constructed primarily from wood — a rare architectural style in Bangladesh. It serves as a key pilgrimage site for the Hindu community and draws devotees for rituals and festivals throughout the year. The temple\'s wooden architecture is a testament to traditional Bengali craftsmanship.',
    highlights: [
      'Rare example of traditional wooden temple architecture in Bangladesh.',
      '~200 years old — a testament to enduring craftsmanship.',
      'Key pilgrimage site for the Hindu community of northern Bangladesh.',
      'Annual festivals draw devotees from across the district.',
      'The wooden structure requires ongoing preservation efforts.',
    ],
  },
  'madan-mahan': {
    name: 'Sri-Sri Madan Mahan Ziub Kali Mandir',
    tagline: 'A prominent Hindu temple in Gobindaganj.',
    info: [
      { label: 'Location', value: 'Gobindaganj Upazila' },
      { label: 'Type', value: 'Kali Mandir (Hindu temple)' },
      { label: 'Significance', value: 'Major annual pujas' },
      { label: 'Community', value: 'Serves Hindu population of Gobindaganj' },
    ],
    description: 'A prominent Hindu temple in Gobindaganj Upazila, the Sri-Sri Madan Mahan Ziub Kali Mandir reflects the enduring presence of Hindu worship centers in Gaibandha. It hosts annual pujas that attract devotees from surrounding areas. The temple is an important center for religious and cultural activities for the Hindu community of Gobindaganj.',
    highlights: [
      'Hosts major annual pujas with large community participation.',
      'Reflects the rich Hindu heritage of Gobindaganj Upazila.',
      'Serves as a cultural and religious center for the local Hindu community.',
      'Annual festivals feature traditional rituals, music, and communal dining.',
      'One of several active Hindu temples in Gaibandha district.',
    ],
  },
  'varatkhali': {
    name: 'Varatkhali Kastho Mandir',
    tagline: 'A historic wooden temple in Gaibandha Sadar.',
    info: [
      { label: 'Location', value: 'Gaibandha Sadar' },
      { label: 'Material', value: 'Wood construction' },
      { label: 'Type', value: 'Hindu temple' },
      { label: 'Status', value: 'Active place of worship' },
    ],
    description: 'Another historic wooden temple structure located in Gaibandha Sadar, showcasing the traditional temple architecture of northern Bengal. Like the Kashtha Kali Mandir, it represents the region\'s unique wooden temple-building tradition. The temple remains an active place of worship for the local Hindu community.',
    highlights: [
      'Showcases traditional wooden temple architecture of northern Bengal.',
      'Actively used for worship by the local Hindu community.',
      'Part of Gaibandha\'s rich multi-religious heritage.',
      'The wooden construction is increasingly rare and culturally significant.',
      'Located within easy reach of Gaibandha town center.',
    ],
  },
  'churches': {
    name: 'Christian Churches & Other Faiths',
    tagline: 'Small but active religious communities.',
    info: [
      { label: 'Christian Population', value: '~2,920 (2011 census)' },
      { label: 'Locations', value: 'Gaibandha Sadar, Gobindaganj' },
      { label: 'Buddhist Population', value: '~50 (2011 census)' },
      { label: 'Other Faiths', value: '~2,849 (2011 census)' },
    ],
    description: 'Gaibandha has a small Christian community of approximately 2,920 people, with churches serving the congregation primarily in the urban areas of Gaibandha Sadar and Gobindaganj. Buddhist places of worship are also present but limited in number. The district is known for its tradition of religious harmony, with community-led initiatives promoting interfaith coexistence. In August 2024, a "march of harmony" was organized in Gaibandha town to foster inter-religious unity.',
    highlights: [
      'Christian community primarily concentrated in urban areas.',
      'Small Buddhist community maintains places of worship.',
      'Gaibandha has a strong tradition of interfaith harmony.',
      'A "march of harmony" was held in 2024 promoting religious unity.',
      'All major religious festivals — Eid, Durga Puja, Buddha Purnima, Christmas — are celebrated with communal warmth.',
    ],
  },
};

const adminData = {
  'dc-office': {
    name: 'Deputy Commissioner (DC) Office',
    tagline: 'The chief administrative authority of Gaibandha District.',
    info: [
      { label: 'Current DC', value: 'Mohammad Masudur Rahman Molla' },
      { label: 'Established', value: '1984 (district formation)' },
      { label: 'Location', value: 'Gaibandha Sadar' },
      { label: 'Role', value: 'Chief administrative officer' },
    ],
    description: 'The Deputy Commissioner is the chief administrative officer of Gaibandha District, heading the district administration. The current DC is Mohammad Masudur Rahman Molla. The DC office oversees all government departments at the district level, including law and order, land administration, development activities, and public welfare programs. The office is located in the heart of Gaibandha town.',
    highlights: [
      'The DC is the ceremonial head of the district administration.',
      'Oversees all government departments at the district level.',
      'Responsible for law and order, land administration, and development.',
      'The DC office provides one-stop services for certificates and citizen charters.',
      'Emergency helpline: 999. DC helpline: 333.',
    ],
  },
  'district-structure': {
    name: 'District Administrative Structure',
    tagline: '7 upazilas, 3 municipalities, 82 unions.',
    info: [
      { label: 'Upazilas', value: '7' },
      { label: 'Municipalities', value: '3 (Gaibandha, Gobindaganj, Sundarganj)' },
      { label: 'Union Parishads', value: '82' },
      { label: 'Villages', value: '1,244' },
    ],
    description: 'Gaibandha District is divided into 7 upazilas (sub-districts), 3 municipalities (Gaibandha Pourosava, Gobindaganj, and Sundarganj), 82 union parishads, 27 wards, 1,101 mouzas, 56 mahallas, and 1,244 villages. The district also corresponds to 5 parliamentary constituencies (Gaibandha-1 through Gaibandha-5) in the Jatiya Sangsad.',
    highlights: [
      'Gobindaganj is the largest upazila by area (460.42 sq km).',
      'Palashbari is the smallest upazila (185.24 sq km).',
      'Gaibandha town is the district headquarters and largest urban center.',
      'The district has 5 seats in the national parliament.',
      'Postal code: 5700. Area code: 0541. ISO: BD-19.',
    ],
  },
  'digital-services': {
    name: 'Digital Services & Citizen Charter',
    tagline: 'Modernizing public service delivery.',
    info: [
      { label: 'Digital Payment', value: 'Nagad for tax & trade licence' },
      { label: 'Coverage', value: '81 unions across the district' },
      { label: 'Platform', value: 'Nagad digital payment system' },
      { label: 'Services', value: 'Holding tax, trade licence fees' },
    ],
    description: 'Gaibandha is at the forefront of digital service delivery in Bangladesh. Union holding tax and trade licence fees can now be paid digitally via Nagad across 81 unions in the district. The DC office offers one-stop services for certificates, land records, and citizen charters. A training workshop on the digital payment method was held at the DC conference room to train officials.',
    highlights: [
      'Citizens can pay holding tax digitally using their unique ID.',
      'Trade licence fees are also collected digitally via Nagad.',
      'One-stop service center at DC office for certificates and land records.',
      'Digital payment reduces corruption and improves transparency.',
      'Part of the national Digital Bangladesh initiative.',
    ],
  },
};

const ngoData = {
  'sks': {
    name: 'SKS Foundation',
    tagline: 'One of Gaibandha\'s most prominent local non-profits.',
    info: [
      { label: 'Headquarters', value: 'Gaibandha' },
      { label: 'Founded', value: '1980s' },
      { label: 'Key Facilities', value: 'SKS Hospital, SKS Inn, SKS School & College' },
      { label: 'Sectors', value: 'Microfinance, healthcare, education, women\'s empowerment, disaster relief' },
    ],
    description: 'SKS Foundation is one of the most prominent local non-profit organizations in Gaibandha. The organization runs SKS Hospital, a specialized healthcare facility serving the district, and SKS Inn, a 4-star eco-resort set on 19.2 acres of lush rural land. Their work spans microfinance, healthcare, education (SKS School & College), women\'s empowerment, and disaster relief across northern Bangladesh.',
    highlights: [
      'SKS Hospital is a key healthcare provider in Gaibandha district.',
      'SKS Inn is a 4-star eco-resort with conference halls, children\'s zone, boating, and zoo.',
      'SKS School & College provides education from primary to higher secondary level.',
      'Microfinance programs support thousands of women entrepreneurs.',
      'Active in disaster relief and climate adaptation across northern Bangladesh.',
    ],
  },
  'friendship': {
    name: 'Friendship NGO',
    tagline: 'Floating hospitals and community development on the chars.',
    info: [
      { label: 'Founded', value: '2002 by Runa Khan' },
      { label: 'Headquarters', value: 'Dhaka (active in Gaibandha chars)' },
      { label: 'Employees', value: '~5,000 (70% from local communities)' },
      { label: 'Sectors', value: 'Health, Education, Disaster Management, Good Governance, Economic Development, Cultural Preservation' },
    ],
    description: 'Friendship is an international NGO founded by Runa Khan in 2002. It operates floating hospitals and community development programs on the chars (river islands) of the Brahmaputra and Jamuna rivers — including Gaibandha\'s remote char communities. Friendship converted a barge into its first floating hospital in 2002. The organization now has six sectors: Health, Education, Disaster Management and Infrastructure Development, Good Governance, Sustainable Economic Development, and Cultural Preservation.',
    highlights: [
      'Pioneered the floating hospital concept to reach remote char communities.',
      'Over 70% of its 5,000 employees are recruited from local communities.',
      'Runs schools, healthcare centers, and disaster preparedness programs on chars.',
      'Also active in cultural preservation — documenting folk music and oral traditions.',
      'International network with entities in Luxembourg, Netherlands, UK, France, and Belgium.',
    ],
  },
  'brac': {
    name: 'BRAC',
    tagline: 'Bangladesh\'s largest development organization.',
    info: [
      { label: 'Founded', value: '1972' },
      { label: 'Headquarters', value: 'Dhaka' },
      { label: 'Global Reach', value: 'Active in 11 countries' },
      { label: 'In Gaibandha', value: 'Microfinance, agriculture, education, ultra-poor graduation' },
    ],
    description: 'BRAC, Bangladesh\'s largest development organization, operates extensive programs in Gaibandha. Their focus includes microfinance services for rural women, agriculture extension programs helping farmers adopt modern techniques, adolescent empowerment initiatives, and ultra-poor graduation programs that provide assets and training to help the poorest families build sustainable livelihoods.',
    highlights: [
      'Microfinance programs reach thousands of rural women in Gaibandha.',
      'Agriculture extension services help farmers improve crop yields.',
      'Ultra-poor graduation programs provide livestock, training, and stipends.',
      'Adolescent clubs empower girls with life skills and financial literacy.',
      'BRAC\'s work in char areas is particularly critical for remote communities.',
    ],
  },
  'ucrip': {
    name: 'Urban Climate Resilient Infrastructure Project (UCRIP)',
    tagline: 'Building climate resilience in Gaibandha Pourashava.',
    info: [
      { label: 'Funding', value: 'German Government (KfW)' },
      { label: 'Implementing Agency', value: 'LGED' },
      { label: 'Program', value: 'CCAUD Phase III' },
      { label: 'Focus Area', value: 'Gaibandha Pourashava' },
    ],
    description: 'The Urban Climate Resilient Infrastructure Project (UCRIP) is the third phase of the Climate Change Adapted Urban Development (CCAUD) Program, funded by the German government through KfW and implemented by LGED. The project works in Gaibandha Pourashava to enhance resilience against climate change impacts. Investment measures include flood protection infrastructure, drainage improvement, climate-adapted urban infrastructure, and capacity development for local officials.',
    highlights: [
      'Part of a long-term German-Bangladesh cooperation on climate adaptation.',
      'Focuses on flood protection and drainage in Gaibandha town.',
      'Includes capacity development for local government officials.',
      'Ramboll (Denmark) conducted feasibility studies for the project.',
      'Paves the way for financing, implementation, and execution of climate resilience measures.',
    ],
  },
  'microfinance': {
    name: 'Microfinance & Cooperatives',
    tagline: 'Financial services for rural communities.',
    info: [
      { label: 'Major MFIs', value: 'Grameen Bank, ASA, TMSS, BRAC' },
      { label: 'Local Cooperatives', value: 'Multiple across all upazilas' },
      { label: 'Beneficiaries', value: 'Farmers, fisherfolk, women entrepreneurs' },
      { label: 'Purpose', value: 'Agriculture, livestock, small trade' },
    ],
    description: 'Multiple microfinance institutions operate in Gaibandha including Grameen Bank, ASA, TMSS, and local cooperative societies. These organizations provide small loans to farmers, fisherfolk, and women entrepreneurs who lack access to formal banking. The loans support livelihoods in agriculture, livestock rearing, small trade, and seasonal businesses. Microfinance has been instrumental in reducing poverty in rural areas, particularly for women who make up the majority of borrowers.',
    highlights: [
      'Grameen Bank pioneered microfinance in Bangladesh and operates actively in Gaibandha.',
      'ASA is one of the largest MFIs globally with significant presence in the district.',
      'TMSS focuses on women\'s empowerment through microfinance in northern Bangladesh.',
      'Local cooperative societies provide savings and loan services at the union level.',
      'Microfinance has helped thousands of families escape extreme poverty.',
    ],
  },
  'local-initiatives': {
    name: 'Local Initiatives & Community Organizations',
    tagline: 'Grassroots organizations serving Gaibandha\'s communities.',
    info: [
      { label: 'Key Groups', value: 'GSA-SUST, upazila welfare orgs, youth clubs' },
      { label: 'Focus Areas', value: 'Education, disaster response, cultural preservation' },
      { label: 'Indigenous Focus', value: 'Santal rights and char development projects' },
      { label: 'Collaboration', value: 'Work with district administration and international NGOs' },
    ],
    description: 'Numerous local initiatives and community organizations operate across Gaibandha. The Gaibandha Student Association at SUST (GSA-SUST) actively works on education sponsorship and cultural programs. Various upazila-level welfare organizations focus on disaster response, health awareness, and education. District-level NGOs collaborate on projects for Santal indigenous rights and char land development. Youth clubs and community-based organizations thrive in every upazila.',
    highlights: [
      'GSA-SUST provides education sponsorship for underprivileged students.',
      'Upazila welfare organizations coordinate disaster response and relief.',
      'Indigenous rights projects support Santal communities in Gobindaganj.',
      'Char development initiatives work on climate adaptation and livelihood support.',
      'Youth clubs organize sports, cultural events, and environmental awareness programs.',
    ],
  },
};

const sportData = {
  'stadium': {
    name: 'Shah Abdul Hamid Stadium',
    tagline: 'The district\'s primary multi-purpose sports venue.',
    info: [
      { label: 'Location', value: 'Gaibandha Sadar' },
      { label: 'Established', value: '1958 (as sports club)' },
      { label: 'Renamed', value: '2009 (after Shah Abdul Hamid)' },
      { label: 'Capacity', value: 'Multi-purpose (grass surface)' },
    ],
    description: 'Shah Abdul Hamid Stadium is the district\'s primary sports venue, located in Gaibandha Sadar near the Koborosthan (cemetery). It originated as a subdivisional sports club in 1958. Originally known as Gaibandha District Stadium, it was renamed in 2009 to honor Shah Abdul Hamid, the first Speaker of the Jatiya Sangsad. The stadium hosts cricket matches, football tournaments, cultural concerts, and political rallies. It is owned and operated by the National Sports Council.',
    highlights: [
      'Renamed in 2009 after Shah Abdul Hamid, first Speaker of Bangladesh Parliament.',
      'Hosts the annual DC Gold Cup Football Tournament with 8 upazila teams.',
      'Venue for National Cricket League lower-tier matches.',
      'Also hosts cultural concerts — featured rock band Nagar Baul in 2022.',
      'Located 0.9 km from Gaibandha Railway Station for easy access.',
    ],
  },
  'dc-gold-cup': {
    name: 'DC Gold Cup Football Tournament',
    tagline: 'Annual district-wide football competition.',
    info: [
      { label: 'Organizer', value: 'District Administration & DSA' },
      { label: 'Teams', value: '8 (all upazilas)' },
      { label: 'Venue', value: 'Shah Abdul Hamid Stadium' },
      { label: 'Established', value: 'Annual event' },
    ],
    description: 'The DC Gold Cup Football Tournament is an annual district-level football competition organized by the Gaibandha District Administration in cooperation with the District Sports Association (DSA). All eight upazilas field teams that compete at the Shah Abdul Hamid Stadium. The tournament was inaugurated with much fanfare, with the DC personally opening the event. The 2025 edition featured an opening match between Sadar Upazila and Fulchhari Upazila.',
    highlights: [
      'All 7 upazilas plus the municipality field teams in the tournament.',
      'Opened by the Deputy Commissioner in a formal ceremony.',
      'Draws large crowds and generates significant local excitement.',
      'Promotes grassroots football talent in the district.',
      'Senior officials, DSA members, and local dignitaries attend the event.',
    ],
  },
  'cricket': {
    name: 'Cricket in Gaibandha',
    tagline: 'Growing cricket culture at the district level.',
    info: [
      { label: 'Team', value: 'Gaibandha Cricket Team' },
      { label: 'Venue', value: 'Shah Abdul Hamid Stadium' },
      { label: 'League', value: 'National Cricket League (lower-tier)' },
      { label: 'Development', value: 'Local academies at the stadium' },
    ],
    description: 'Cricket is growing in popularity in Gaibandha. The Gaibandha Cricket Team represents the district in regional and national tournaments. The Shah Abdul Hamid Stadium hosts matches during the National Cricket League lower-tier rounds. Local cricket academies train young cricketers at the stadium, providing coaching and facilities for aspiring players. Several notable players from the region have trained or competed at the venue.',
    highlights: [
      'Gaibandha Cricket Team competes in the National Cricket League.',
      'The stadium has hosted NCL matches with international standard facilities.',
      'Private cricket academies operate at the stadium grounds.',
      'Young cricketers from Gaibandha have gone on to play at divisional and national levels.',
      'The DSA promotes cricket alongside football in schools and colleges.',
    ],
  },
  'nouka-baich': {
    name: 'Nouka Baich (Boat Racing)',
    tagline: 'Monsoon thrill on Gaibandha\'s mighty rivers.',
    info: [
      { label: 'Season', value: 'Monsoon (July–September)' },
      { label: 'Locations', value: 'Phulchhari, Saghata, Sadar upazilas' },
      { label: 'Boat Type', value: 'Long canoes (nouka)' },
      { label: 'Features', value: 'High-energy drums, roaring crowds' },
    ],
    description: 'Nouka Baich (boat racing) is one of Gaibandha\'s most thrilling traditional sports. During the monsoon season when the rivers swell, vibrant boat races take place across Phulchhari, Saghata, and Sadar upazilas. Long canoes (nouka) manned by teams of rowers race to the rhythmic beat of high-energy drums, with roaring crowds lining the riverbanks. The event is a major cultural celebration that brings communities together.',
    highlights: [
      'Traditional sport that has been practiced for centuries in Bengal.',
      'Races are held during the monsoon when rivers are at their fullest.',
      'Teams of rowers synchronize their strokes to drum beats.',
      'Major event in Phulchhari, Saghata, and Sundarganj upazilas.',
      'The winning team earns prestige and prizes in their community.',
    ],
  },
  'other-sports': {
    name: 'Other Sports in Gaibandha',
    tagline: 'Badminton, volleyball, kabaddi, and athletics.',
    info: [
      { label: 'Popular Sports', value: 'Badminton, volleyball, kabaddi, athletics' },
      { label: 'Organization', value: 'Gaibandha District Sports Association (DSA)' },
      { label: 'Level', value: 'School, college, and upazila competitions' },
      { label: 'Promotion', value: 'DSA Facebook page: facebook.com/GaibandhaDSA' },
    ],
    description: 'Beyond football and cricket, badminton, volleyball, kabaddi, and athletics are popular at school and college levels across Gaibandha. The Gaibandha District Sports Association (DSA) actively promotes and organizes events throughout the year. They manage inter-upazila competitions, school sports meets, and talent identification programs. The DSA maintains an active Facebook page to promote sports and share event updates.',
    highlights: [
      'Badminton is widely played in schools, colleges, and community clubs.',
      'Volleyball tournaments are held at upazila and district levels.',
      'Kabaddi, Bangladesh\'s traditional team sport, has a strong following.',
      'Athletics events are part of annual school and college sports days.',
      'The DSA Facebook page (facebook.com/GaibandhaDSA) shares event updates.',
    ],
  },
  'cultural-clubs': {
    name: 'Cultural Clubs & Organizations',
    tagline: 'Blending sports with arts and culture.',
    info: [
      { label: 'Activities', value: 'Folk theatre, music, seasonal fairs' },
      { label: 'Art Forms', value: 'Jatra, Bhawaiya, Mela' },
      { label: 'Coverage', value: 'All 7 upazilas' },
      { label: 'Audience', value: 'Inter-college and community events' },
    ],
    description: 'Various cultural clubs and organizations operate across Gaibandha\'s upazilas, organizing a vibrant mix of sports and cultural activities. They produce folk theatre (Jatra) performances, music concerts featuring traditional Bhawaiya songs, seasonal fairs (mela), and inter-college cultural competitions. These organizations play a vital role in preserving Gaibandha\'s rich cultural heritage while providing entertainment and community engagement.',
    highlights: [
      'Jatra (folk theatre) remains popular in rural areas of the district.',
      'Bhawaiya music performances showcase the unique vocal tradition of North Bengal.',
      'Seasonal fairs (mela) combine sports competitions with cultural performances.',
      'Inter-college cultural competitions discover young talent.',
      'Cultural clubs collaborate with the DSA for combined sports-and-arts events.',
    ],
  },
};

const galleryImages = [
  { src: 'A Zamindar Time Capsule.png', label: 'Naldanga Palace' },
  { src: 'Bardhan Kuthi.png', label: 'Bardhan Kuthi' },
  { src: 'Mir Bagan Mosque.png', label: 'Mir Bagan Mosque' },
  { src: 'Balashi Ghat.jpg', label: 'Balashi Ghat' },
  { src: 'Dreamland.png', label: 'Dreamland Park' },
  { src: 'Resort.png', label: 'Sarovar Resort' },
  { src: 'Kantagir.png', label: 'Kantagir Temple' },
  { src: 'Park.png', label: 'Municipal Park' },
];

function filterPlaces(type) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector('.filter-btn[data-filter="' + type + '"]');
  if (activeBtn) activeBtn.classList.add('active');
  document.querySelectorAll('.place-card').forEach(card => {
    if (type === 'all') {
      card.classList.remove('hidden');
    } else {
      if (card.classList.contains('badge-' + type)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });
}

window.addEventListener('scroll', function () {
  const btn = document.getElementById('scrollTop');
  if (window.scrollY > 400) { btn.classList.add('visible'); } else { btn.classList.remove('visible'); }
});
document.getElementById('scrollTop').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });


function toggleDarkMode() {
  const html = document.documentElement;
  const btn = document.getElementById('darkToggle');
  if (html.getAttribute('data-theme') === 'dark') {
    html.removeAttribute('data-theme');
    btn.textContent = '\u2600\uFE0F';
    localStorage.setItem('gaibandha-theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    btn.textContent = '\uD83C\uDF19';
    localStorage.setItem('gaibandha-theme', 'dark');
  }
}
(function () {
  const saved = localStorage.getItem('gaibandha-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loader').classList.add('hidden');
  }, 600);
});

function fetchWeather() {
  fetch('https://wttr.in/Gaibandha?format=j1')
    .then(r => r.json())
    .then(data => {
      const c = data.current_condition[0];
      document.getElementById('weatherTemp').textContent = c.temp_C + '\u00B0C';
      document.getElementById('weatherDesc').textContent = c.weatherDesc[0].value;
      document.getElementById('weatherHumidity').textContent = c.humidity + '%';
      document.getElementById('weatherWind').textContent = c.windspeedKmph + ' km/h';
    })
    .catch(function () {
      document.getElementById('weatherTemp').textContent = '--\u00B0C';
      document.getElementById('weatherDesc').textContent = 'Weather unavailable';
    });
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.upazila-row').forEach(row => {
    row.addEventListener('click', function () {
      openUpazilaModal(this.getAttribute('data-upazila'));
    });
  });

  document.querySelectorAll('.place-card').forEach(card => {
    card.addEventListener('click', function () {
      const mapQuery = this.getAttribute('data-map');
      if (mapQuery) {
        window.open('https://www.google.com/maps/search/' + encodeURIComponent(mapQuery), '_blank');
        return;
      }
      openPlaceModal(this.getAttribute('data-place'));
    });
  });

  document.querySelectorAll('[data-culture]').forEach(el => {
    el.addEventListener('click', function () {
      openCultureModal(this.getAttribute('data-culture'));
    });
  });

  document.querySelectorAll('tr[data-map]').forEach(row => {
    row.addEventListener('click', function () {
      window.open('https://www.google.com/maps/search/' + encodeURIComponent(this.getAttribute('data-map')), '_blank');
    });
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);

  document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      filterPlaces(this.getAttribute('data-filter'));
    });
  });

  // Dark mode toggle
  const dt = document.getElementById('darkToggle');
  if (dt) dt.addEventListener('click', toggleDarkMode);

  // Set initial dark toggle icon
  if (dt && document.documentElement.getAttribute('data-theme') === 'dark') {
    dt.textContent = '\uD83C\uDF19';
  } else if (dt) {
    dt.textContent = '\u2600\uFE0F';
  }

  // Weather
  fetchWeather();

  // Render personalities
  renderPersonalities();
  document.querySelectorAll('.person-card').forEach(card => {
    card.addEventListener('click', function () {
      openPersonModal(this.getAttribute('data-person'));
    });
  });

  // Geography & environment clickable cards
  function openGeoModal(key) {
    const data = geoData[key];
    if (!data) return;
    openModal(data.name, data.tagline, data.info, data.description, data.highlights);
  }
  document.querySelectorAll('[data-geo]').forEach(el => {
    el.addEventListener('click', function () {
      openGeoModal(this.getAttribute('data-geo'));
    });
  });

  // Transport clickable cards
  function openTransportModal(key) {
    const data = transportData[key];
    if (!data) return;
    openModal(data.name, data.tagline, data.info, data.description, data.highlights);
  }
  document.querySelectorAll('[data-transport]').forEach(el => {
    el.addEventListener('click', function () {
      openTransportModal(this.getAttribute('data-transport'));
    });
  });

  // Religious sites clickable cards
  function openReligiousModal(key) {
    const data = religiousData[key];
    if (!data) return;
    openModal(data.name, data.tagline, data.info, data.description, data.highlights);
  }
  document.querySelectorAll('[data-religious]').forEach(el => {
    el.addEventListener('click', function () {
      openReligiousModal(this.getAttribute('data-religious'));
    });
  });

  // District administration clickable cards
  function openAdminModal(key) {
    const data = adminData[key];
    if (!data) return;
    openModal(data.name, data.tagline, data.info, data.description, data.highlights);
  }
  document.querySelectorAll('[data-admin]').forEach(el => {
    el.addEventListener('click', function () {
      openAdminModal(this.getAttribute('data-admin'));
    });
  });

  // NGO clickable cards
  function openNgoModal(key) {
    const data = ngoData[key];
    if (!data) return;
    openModal(data.name, data.tagline, data.info, data.description, data.highlights);
  }
  document.querySelectorAll('[data-ngo]').forEach(el => {
    el.addEventListener('click', function () {
      openNgoModal(this.getAttribute('data-ngo'));
    });
  });

  // Sports clickable cards
  function openSportModal(key) {
    const data = sportData[key];
    if (!data) return;
    openModal(data.name, data.tagline, data.info, data.description, data.highlights);
  }
  document.querySelectorAll('[data-sport]').forEach(el => {
    el.addEventListener('click', function () {
      openSportModal(this.getAttribute('data-sport'));
    });
  });

  // Gallery lightbox - clicking gallery item opens the place modal
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
      const key = this.getAttribute('data-gallery-place');
      if (key && placeData[key]) openPlaceModal(key);
    });
  });
});
