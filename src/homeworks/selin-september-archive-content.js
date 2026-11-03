const ANSWER_SEQUENCE = [1, 3, 0, 2, 2, 0, 3, 1, 0, 3, 1, 2, 3, 1, 2, 0];
let questionIndex = 0;

const q = (question, correct, distractors) => {
  const answer = ANSWER_SEQUENCE[questionIndex++ % ANSWER_SEQUENCE.length];
  const options = distractors.slice(0, 3);
  options.splice(answer, 0, correct);
  return { type: 'mcq', question, options, answer };
};

const v = (word, engDesc, engExample, trWord, trDesc) => ({
  word, engDesc, engExample, trWord, trDesc, trExample: engExample
});

const makeVocabExercises = (items) => items.slice(0, 8).map((item, index) => {
  const others = [1, 3, 5].map(step => items[(index + step) % items.length].word);
  return q(`Which word or phrase means “${item.engDesc}”?`, item.word, others);
});

const makeTest = (items) => items.slice(0, 10).map(item => ({ ...item, options: [...item.options] }));

const listening = (title, source, url, focus) => ({
  level: 'A2+/early B1', title, source, url, focus,
  instructions: 'Listen once for the main idea. Listen again and note the target phrases, then use the transcript to check only after your second listen.',
  questions: [
    q('What should you identify on the first listen?', 'The main idea', ['Every individual word', 'Only the speaker’s accent', 'The page title']),
    q('What should you collect on the second listen?', 'Target phrases and key details', ['A full translation', 'Only proper names', 'Unrelated vocabulary']),
    q('When should you open the transcript?', 'After listening twice', ['Before the audio begins', 'Instead of listening', 'Only before the first listen']),
    q('What is the best response to an unfamiliar word?', 'Use the surrounding context first', ['Stop the audio permanently', 'Guess from spelling only', 'Ignore the whole sentence']),
    q('What should you do after checking?', 'Say or write one useful sentence', ['Memorise the entire transcript', 'Change the topic', 'Skip the target language'])
  ]
});

const reading = (id, title, content, highlightedWords, questions) => ({ id, title, content, highlightedWords, questions });

const SEP20_VOCAB = {
  1: [
    v('enjoy', 'like doing something', 'Maya enjoys learning languages.', 'keyif almak', 'bir şeyi yapmaktan hoşlanmak'),
    v('hate', 'strongly dislike something', 'Leo hates waiting in traffic.', 'nefret etmek', 'bir şeyi hiç sevmemek'),
    v('prefer', 'like one choice more than another', 'Nora prefers walking to driving.', 'tercih etmek', 'bir seçeneği daha çok istemek'),
    v('usually', 'on most occasions', 'Tariq usually works from home.', 'genellikle', 'çoğu zaman'),
    v('right now', 'at this exact moment', 'Iris is speaking right now.', 'şu anda', 'tam bu anda'),
    v('temporary', 'lasting for a limited time', 'Owen is staying in a temporary flat.', 'geçici', 'kısa süreli'),
    v('routine', 'a regular way of doing things', 'Her morning routine begins at seven.', 'rutin', 'düzenli yapılan işler'),
    v('question form', 'the structure used to ask something', 'Does he work here? is a question form.', 'soru biçimi', 'soru sormak için kullanılan yapı')
  ],
  2: [
    v('plan', 'an intention decided before the moment of speaking', 'Mina is going to study tonight.', 'plan', 'önceden verilmiş karar'),
    v('prediction', 'a statement about what may happen', 'The team will probably win.', 'tahmin', 'gelecekte olabilecek şey'),
    v('arrangement', 'a fixed personal plan with details', 'Ravi is meeting Zoe at six.', 'düzenlenmiş plan', 'ayrıntısı belirlenmiş kişisel plan'),
    v('spontaneous decision', 'a choice made at the moment of speaking', 'I will answer the phone.', 'anlık karar', 'konuşma anında verilen karar'),
    v('next week', 'the week after this one', 'We are travelling next week.', 'gelecek hafta', 'bu haftadan sonraki hafta'),
    v('probably', 'very likely but not certain', 'It will probably rain.', 'muhtemelen', 'büyük olasılıkla'),
    v('appointment', 'an arranged meeting at a specific time', 'Lena has a dentist appointment.', 'randevu', 'belirli saatte ayarlanmış görüşme'),
    v('schedule', 'a plan showing times and activities', 'The schedule changes on Friday.', 'program', 'zaman ve etkinlik planı')
  ],
  3: [
    v('advice', 'an opinion about what someone should do', 'You should rest is advice.', 'tavsiye', 'ne yapılması gerektiğine dair görüş'),
    v('suggestion', 'an idea offered for consideration', 'We could meet earlier.', 'öneri', 'değerlendirilmek üzere sunulan fikir'),
    v('obligation', 'something required by a rule or situation', 'Staff must wear an ID card.', 'zorunluluk', 'kural gereği yapılması gereken şey'),
    v('permission', 'being allowed to do something', 'Visitors can use this entrance.', 'izin', 'bir şeyi yapabilme hakkı'),
    v('prohibition', 'a rule that says something is not allowed', 'You must not park here.', 'yasak', 'bir şeye izin verilmemesi'),
    v('should', 'a modal used for advice', 'You should call the clinic.', '-meli / -malı', 'tavsiye veren kip'),
    v('could', 'a modal used for a possible suggestion', 'You could take the train.', 'yapabilirsin', 'olası öneri veren kip'),
    v('must', 'a modal used for strong obligation', 'Passengers must show a ticket.', 'zorunda olmak', 'güçlü zorunluluk kipi')
  ],
  4: [
    v('too', 'more than is needed or wanted', 'The bag is too heavy.', 'fazla', 'gerekenden çok'),
    v('enough', 'as much as is needed', 'The room is warm enough.', 'yeterince', 'gereken miktarda'),
    v('so', 'used before an adjective for emphasis', 'The film was so interesting.', 'çok / o kadar', 'sıfatı güçlendiren sözcük'),
    v('such', 'used before an adjective plus noun for emphasis', 'It was such a useful lesson.', 'öyle / böyle', 'sıfat ve isim grubunu güçlendiren sözcük'),
    v('article', 'a/an or the before a noun', 'An article can introduce a noun.', 'tanımlık', 'isimden önce gelen a/an/the'),
    v('specific', 'clearly identified and known', 'The refers to a specific object.', 'belirli', 'hangi şey olduğu bilinen'),
    v('intensifier', 'a word that strengthens meaning', 'So is an intensifier in so cold.', 'pekiştireç', 'anlamı güçlendiren sözcük'),
    v('result', 'what happens because of a situation', 'It was so late that we left.', 'sonuç', 'bir durumun ortaya çıkardığı şey')
  ]
};

const SEP20_GRAMMAR = {
  1: {
    title: 'Review with Explanation: Preferences and Present Time',
    desc: 'Bu paket, öğretmen notuna göre istisnai bir genel tekrar testidir; bu nedenle bilinen konular da kısa açıklamalarla verilir.',
    rules: [
      { label: 'like / love / enjoy / hate + -ing', text: 'Genel tercihlerden sonra fiilin -ing biçimini kullan.', example: 'Maya enjoys reading, but she hates waiting.' },
      { label: 'Present simple / present continuous', text: 'Rutin ve genel gerçeklerde present simple; şu an ve geçici durumlarda present continuous kullan.', example: 'Leo works in Ankara, but he is working in Izmir this month.' },
      { label: 'Question formation', text: 'Present simple sorularında do/does; present continuous sorularında am/is/are cümlenin başına gelir.', example: 'Does Nora drive? Is Nora driving now?' }
    ]
  },
  2: {
    title: 'Review with Explanation: Future Choices',
    desc: 'Gelecek anlatımında kararın türü ve planın ne zaman oluştuğu belirleyicidir.',
    rules: [
      { label: 'will', text: 'Konuşma anındaki kararlar, teklifler ve kanıta dayanmayan tahminlerde will kullan.', example: 'The phone is ringing. I will answer it.' },
      { label: 'be going to', text: 'Önceden verilmiş planlarda ve eldeki kanıta dayanan tahminlerde be going to kullan.', example: 'Look at those clouds. It is going to rain.' },
      { label: 'Present continuous for arrangements', text: 'Saat, yer veya kişi ayrıntısı belirlenmiş kişisel düzenlemelerde present continuous kullanılabilir.', example: 'We are meeting Ada at the station at six.' }
    ]
  },
  3: {
    title: 'Review with Explanation: Modals',
    desc: 'Modal fiilden sonra yalın fiil gelir; üçüncü tekil kişide -s eklenmez.',
    rules: [
      { label: 'should / could', text: 'Should tavsiye; could daha yumuşak bir öneri verir.', example: 'You should rest. You could call a friend.' },
      { label: 'must / have to', text: 'Must konuşanın güçlü zorunluluğunu; have to dış kural veya gerekliliği anlatabilir.', example: 'I must remember this. Staff have to wear badges.' },
      { label: 'mustn’t / don’t have to', text: 'Mustn’t yasak; don’t have to zorunlu olmama anlamındadır.', example: 'You mustn’t enter. You don’t have to wait.' }
    ]
  },
  4: {
    title: 'Review with Explanation: Articles and Intensifiers',
    desc: 'A/an, the ve too/enough/so/such kalıpları isim ve sıfat yapısına göre seçilir.',
    rules: [
      { label: 'a/an and the', text: 'İlk kez söylenen tekil sayılabilir isimde a/an; belirli veya daha önce söylenen isimde the kullan.', example: 'I saw a doctor. The doctor was very kind.' },
      { label: 'too / enough', text: 'Too olumsuz biçimde gerekenden fazlayı; enough yeterli miktarı anlatır. Enough sıfattan sonra gelir.', example: 'The box is too heavy. It is not strong enough.' },
      { label: 'so / such', text: 'So + adjective; such + a/an + adjective + singular noun kullan.', example: 'It was so useful. It was such a useful course.' }
    ]
  }
};

const SEP20_PRACTICE = {
  1: [
    ['Maya enjoys ___ before work.', 'jogging', ['jog', 'jogs', 'to jogging']], ['Leo ___ coffee every morning.', 'drinks', ['is drinking', 'drink', 'drinking']],
    ['Look! Nora ___ across the road.', 'is running', ['runs', 'run', 'running']], ['___ Ravi work on Sundays?', 'Does', ['Do', 'Is', 'Has']],
    ['What ___ the children doing?', 'are', ['do', 'does', 'is']], ['I hate ___ in long queues.', 'waiting', ['wait', 'waits', 'to waiting']],
    ['Zoe usually ___ from home.', 'works', ['is working', 'work', 'worked']], ['This month, Zoe ___ in the main office.', 'is working', ['works', 'work', 'working']],
    ['Which sentence describes a routine?', 'Owen walks the dog every day.', ['Owen is walking the dog now.', 'Owen walked yesterday.', 'Owen will walk later.']],
    ['___ you listening right now?', 'Are', ['Do', 'Does', 'Is']], ['Mina does not mind ___ early.', 'leaving', ['leave', 'leaves', 'to leaving']],
    ['Tariq ___ not usually arrive late.', 'does', ['is', 'do', 'has']], ['Why ___ Iris smiling?', 'is', ['does', 'do', 'are']],
    ['We prefer ___ at home.', 'cooking', ['cook', 'cooks', 'to cooking']], ['Which question is correct?', 'Does Ada live nearby?', ['Does Ada lives nearby?', 'Is Ada live nearby?', 'Ada does live nearby?']]
  ],
  2: [
    ['The doorbell is ringing. I ___ it.', 'will answer', ['am going to answer yesterday', 'answering', 'will answered']], ['We bought the tickets. We ___ on Friday.', 'are travelling', ['will travelled', 'travel', 'travelling yesterday']],
    ['Look at the dark clouds. It ___.', 'is going to rain', ['will raining', 'rains yesterday', 'going rain']], ['I think robots ___ more common.', 'will become', ['are become', 'becoming', 'will became']],
    ['Mina ___ the dentist at ten tomorrow.', 'is seeing', ['sees every day', 'saw', 'will saw']], ['Which is a spontaneous offer?', 'I will carry that bag for you.', ['I am carrying it yesterday.', 'I carry it every day.', 'I am going to carried it.']],
    ['They have a plan. They ___ the kitchen.', 'are going to renovate', ['will renovated', 'renovated tomorrow', 'going renovate']], ['___ you meeting Leo tonight?', 'Are', ['Do', 'Will be', 'Is']],
    ['Where ___ the team going to stay?', 'is', ['do', 'does', 'are']], ['I promise I ___ you later.', 'will call', ['am call', 'called tomorrow', 'will called']],
    ['The train arrangement is fixed: we ___ at 7:30.', 'are leaving', ['leave yesterday', 'will left', 'going leave']], ['Choose the evidence-based prediction.', 'That glass is going to fall.', ['That glass fell tomorrow.', 'That glass is fall.', 'That glass will falling.']],
    ['___ they going to move house?', 'Are', ['Do', 'Is', 'Will']], ['What ___ you doing this weekend?', 'are', ['do', 'will be', 'is']],
    ['Which sentence is correct?', 'I think the test will be difficult.', ['I think the test is be difficult.', 'I think will difficult.', 'I think the test will difficult.']]
  ],
  3: [
    ['You look tired. You ___ rest.', 'should', ['mustn’t', 'can’t to', 'should to']], ['We ___ meet at the café instead.', 'could', ['could to', 'mustn’t to', 'are could']],
    ['Passengers ___ show a valid ticket.', 'have to', ['has to', 'must to', 'having']], ['You ___ touch this equipment.', 'mustn’t', ['don’t have to', 'should to', 'could to']],
    ['You ___ bring food; it is provided.', 'don’t have to', ['mustn’t', 'shouldn’t to', 'couldn’t to']], ['Which sentence gives advice?', 'You should speak to the manager.', ['You mustn’t speak.', 'You spoke yesterday.', 'You are speaking now.']],
    ['Marta ___ wear a uniform at work.', 'has to', ['have to', 'musts', 'is have']], ['We ___ leave now if we want.', 'can', ['can to', 'are can', 'cans']],
    ['___ I open the window?', 'Could', ['Mustn’t', 'Have', 'Am']], ['Drivers ___ stop at a red light.', 'must', ['must to', 'are must', 'musts']],
    ['Which means “not necessary”?', 'You don’t have to come.', ['You mustn’t come.', 'You should not came.', 'You cannot to come.']], ['Which means “forbidden”?', 'You mustn’t enter.', ['You don’t have to enter.', 'You could enter.', 'You should entering.']],
    ['Hugo ___ call the clinic for advice.', 'should', ['should to', 'is should', 'shoulds']], ['We ___ try the earlier train.', 'could', ['could to', 'are could', 'coulds']],
    ['Choose the correct modal structure.', 'Nina can swim.', ['Nina can to swim.', 'Nina cans swim.', 'Nina is can swim.']]
  ],
  4: [
    ['I saw ___ interesting exhibition.', 'an', ['a', 'the first mention', 'some one']], ['We entered a café. ___ café was quiet.', 'The', ['A', 'An', 'Some']],
    ['This suitcase is ___ heavy to carry.', 'too', ['enough', 'such', 'a']], ['The room is warm ___.', 'enough', ['too enough', 'such', 'an']],
    ['It was ___ exciting film.', 'such an', ['so an', 'such', 'too an']], ['The film was ___ exciting.', 'so', ['such', 'enough an', 'a']],
    ['Which sentence is correct?', 'It is such a useful tool.', ['It is so a useful tool.', 'It is such useful a tool.', 'It is too useful tool.']], ['Which sentence is correct?', 'The coffee is not hot enough.', ['The coffee is not enough hot.', 'The coffee too enough hot.', 'The coffee is such hot.']],
    ['She bought ___ umbrella.', 'an', ['a', 'the first mention', 'many']], ['Please close ___ door we opened.', 'the', ['a', 'an', 'some']],
    ['The task was ___ difficult that we asked for help.', 'so', ['such a', 'enough', 'an']], ['It was ___ difficult task that we asked for help.', 'such a', ['so', 'too a', 'enough a']],
    ['The box is light ___ for one person.', 'enough', ['too', 'such', 'so a']], ['There was ___ problem with the booking.', 'a', ['an', 'the first mention', 'many']],
    ['Which sentence shows excess?', 'The music is too loud.', ['The music is loud enough.', 'It is such music.', 'The music is a loud.']]
  ]
};

const SEP27_VOCAB = {
  1: [
    v('flatmate', 'a person who shares a flat', 'Nora shares a flat with Hugo.', 'ev arkadaşı', 'aynı daireyi paylaşan kişi'),
    v('landlord', 'a person who owns and rents out property', 'The landlord repairs the heating.', 'ev sahibi', 'evi kiraya veren kişi'),
    v('tenant', 'a person who pays to live in rented property', 'The tenant pays the rent monthly.', 'kiracı', 'kirada oturan kişi'),
    v('furnished', 'provided with furniture', 'The furnished flat has a sofa and bed.', 'eşyalı', 'mobilyaları bulunan'),
    v('mortgage', 'a long-term loan used to buy property', 'Mira applied for a mortgage.', 'konut kredisi', 'ev almak için uzun vadeli kredi'),
    v('move house', 'change the place where you live', 'Ravi is going to move house.', 'taşınmak', 'yaşanılan evi değiştirmek'),
    v('renovate', 'repair and improve a building', 'They plan to renovate the kitchen.', 'yenilemek', 'binayı onarıp geliştirmek'),
    v('real estate agent', 'a person who helps people buy or rent property', 'The agent showed us three flats.', 'emlakçı', 'ev alıp kiralamaya yardımcı kişi')
  ],
  2: [
    v('give birth', 'have a baby', 'The character gives birth in May.', 'doğum yapmak', 'bebek dünyaya getirmek'),
    v('pregnant', 'expecting a baby', 'The story follows a pregnant doctor.', 'hamile', 'bebek bekleyen'),
    v('adopt', 'legally become the parent of a child', 'The couple decided to adopt.', 'evlat edinmek', 'yasal olarak çocuk sahibi olmak'),
    v('settle down', 'begin a stable life in one place', 'Lena wants to settle down near her family.', 'düzen kurmak', 'istikrarlı bir hayata başlamak'),
    v('tell off', 'speak angrily because someone behaved badly', 'The coach told him off for arriving late.', 'azarlamak', 'yanlış davranış için sert konuşmak'),
    v('couple', 'two people in a romantic relationship', 'The couple moved into a new home.', 'çift', 'romantik ilişkideki iki kişi'),
    v('pray', 'speak to a god or express a religious hope', 'They prayed for good news.', 'dua etmek', 'dini biçimde dilekte bulunmak'),
    v('promise', 'say firmly that you will do something', 'Owen promised to call.', 'söz vermek', 'bir şeyi yapacağını kesin söylemek')
  ],
  3: [
    v('ecotourism', 'travel that aims to protect nature', 'The island supports ecotourism.', 'ekoturizm', 'doğayı korumayı amaçlayan turizm'),
    v('environmentally friendly', 'causing little harm to nature', 'The hotel uses environmentally friendly products.', 'çevre dostu', 'doğaya az zarar veren'),
    v('impact', 'a strong effect on something', 'Tourism has an impact on wildlife.', 'etki', 'bir şey üzerindeki güçlü sonuç'),
    v('pollution', 'harmful material in air, water or land', 'The city is reducing air pollution.', 'kirlilik', 'hava, su veya toprağa zararlı madde'),
    v('wildlife', 'animals and plants living naturally', 'The park protects local wildlife.', 'yaban hayatı', 'doğal ortamda yaşayan canlılar'),
    v('extinct', 'having no living members left', 'Some species may become extinct.', 'nesli tükenmiş', 'yaşayan üyesi kalmamış'),
    v('predict', 'say what you think will happen', 'Experts predict warmer summers.', 'tahmin etmek', 'ne olacağını söylemek'),
    v('in the near future', 'soon, but not immediately', 'Cars may change in the near future.', 'yakın gelecekte', 'çok uzak olmayan zamanda')
  ],
  4: [
    v('innovation', 'a useful new idea or method', 'The battery is an important innovation.', 'yenilik', 'yararlı yeni fikir veya yöntem'),
    v('prototype', 'the first model used for testing', 'The team tested a working prototype.', 'prototip', 'test için kullanılan ilk model'),
    v('hybrid', 'combining two different systems', 'They designed a hybrid engine.', 'hibrit', 'iki farklı sistemi birleştiren'),
    v('integrate', 'combine something into a larger system', 'The app integrates maps and payments.', 'entegre etmek', 'bir sistemi başka sisteme katmak'),
    v('remarkable', 'unusual and worth attention', 'The invention made remarkable progress.', 'dikkat çekici', 'olağan dışı ve önemli'),
    v('realistic', 'reasonable and close to real life', 'The prediction sounds realistic.', 'gerçekçi', 'gerçeğe uygun ve makul'),
    v('inspiration', 'an idea or person that encourages creation', 'Nature was the designer’s inspiration.', 'ilham', 'yaratmaya yönelten fikir'),
    v('come true', 'happen as hoped or predicted', 'The inventor’s dream came true.', 'gerçekleşmek', 'umut edildiği gibi olmak')
  ]
};

const SEP27_GRAMMAR = {
  1: { title: 'First Conditional', desc: 'Gerçekleşmesi mümkün gelecek durumlarında if + present simple, sonuç bölümünde will + yalın fiil kullan.', rules: [
    { label: 'If + present, will + verb', text: 'Koşul bölümünde will kullanma. İki bölümün sırası değişebilir.', example: 'If the rent increases, we will move house. We will move house if the rent increases.' },
    { label: 'Negative and question forms', text: 'Olumsuz sonuçta won’t; soruda Will + subject + verb yapısını kullan.', example: 'If the flat is unfurnished, we won’t take it. What will you do if the price rises?' }
  ]},
  2: { title: 'Verb or Adjective + Infinitive', desc: 'Want, would like, hope, plan, decide gibi fiillerden ve ready, happy, difficult gibi yapılardan sonra to + verb gelir.', rules: [
    { label: 'Verb + to-infinitive', text: 'İstek, plan ve karar bildiren fiillerden sonra to + yalın fiil kullan.', example: 'The couple hopes to adopt. They decided to settle down.' },
    { label: 'Adjective + to-infinitive', text: 'Duygu veya değerlendirme sıfatından sonra to + verb kullanılabilir.', example: 'They are happy to help. It is difficult to decide.' }
  ]},
  3: { title: 'Predictions: will, be going to, may and might', desc: 'Kesinlik derecesi ve eldeki kanıt, gelecek yapısını belirler.', rules: [
    { label: 'will / be going to', text: 'Genel tahminlerde will; mevcut kanıta dayalı tahminde be going to kullan.', example: 'Cities will change. Look at the smoke; the air is going to get worse.' },
    { label: 'may / might', text: 'May ve might kesin olmayan olasılığı anlatır ve ardından yalın fiil gelir.', example: 'Some animals may disappear. New laws might reduce pollution.' }
  ]},
  4: { title: 'Adjectives and -ly Adverbs', desc: 'Sıfat ismi tanımlar; zarf ise fiilin nasıl yapıldığını anlatır. Birçok zarf adjective + -ly ile oluşur.', rules: [
    { label: 'adjective + noun', text: 'Sıfat isimden önce veya be fiilinden sonra gelir.', example: 'It is a remarkable invention. The prototype is realistic.' },
    { label: 'verb + adverb', text: 'Zarf eylemin nasıl gerçekleştiğini anlatır. Easy → easily; careful → carefully gibi yazım değişikliklerine dikkat et.', example: 'The device works remarkably well. The engineer tested it carefully.' }
  ]}
};

const SEP27_PRACTICE = {
  1: [
    ['If the rent rises, we ___ a cheaper flat.', 'will find', ['find yesterday', 'will found', 'are finding always']], ['We will call the landlord if the heating ___.', 'breaks', ['will break', 'breaking', 'broke tomorrow']],
    ['If the flat is furnished, I ___ it.', 'will consider', ['considered tomorrow', 'will considered', 'considering']], ['What ___ you do if the agent calls?', 'will', ['do', 'are', 'did']],
    ['If we share the flat, the rent ___ lower.', 'will be', ['is be', 'will being', 'was tomorrow']], ['They ___ a mortgage if they save enough.', 'will get', ['get yesterday', 'will got', 'getting']],
    ['If the kitchen needs work, we ___ it.', 'will renovate', ['renovated tomorrow', 'will renovated', 'renovating']], ['The tenant will complain if the lift ___ again.', 'stops', ['will stop', 'stop', 'stopped tomorrow']],
    ['If I move house, I ___ near the station.', 'will live', ['lived tomorrow', 'will lived', 'living']], ['___ you buy the flat if the bank agrees?', 'Will', ['Do', 'Are', 'Did']],
    ['If the landlord does not repair it, we ___.', 'will leave', ['left tomorrow', 'will left', 'leaving']], ['Choose the correct condition.', 'If the price falls, we will buy it.', ['If the price will fall, we buy it.', 'If the price fell tomorrow, we will bought it.', 'If price falling, we buy.']],
    ['The agent will email us if a flat ___ available.', 'becomes', ['will become', 'become', 'became tomorrow']], ['If it is unfurnished, we ___ furniture.', 'will need', ['needed tomorrow', 'will needed', 'needing']],
    ['Which question is correct?', 'Where will you live if you move?', ['Where you will live if move?', 'Where do you will live?', 'Where will live you?']]
  ],
  2: [
    ['The couple wants ___ near their family.', 'to live', ['living to', 'live to', 'lived']], ['They decided ___ a baby next year.', 'to have', ['having to', 'have to yesterday', 'had']],
    ['Marta hopes ___ good news.', 'to hear', ['hearing to', 'hear to', 'heard']], ['It is difficult ___ a big decision quickly.', 'to make', ['making to', 'make to', 'made']],
    ['Owen promised ___ after the appointment.', 'to call', ['calling to', 'call to', 'called']], ['They would like ___ a larger home.', 'to rent', ['renting to', 'rent to', 'rented']],
    ['Lena is happy ___ the family.', 'to help', ['helping to', 'help to yesterday', 'helped']], ['The coach told Amir ___ on time.', 'to arrive', ['arriving to', 'arrive to', 'arrived']],
    ['Which sentence is correct?', 'They plan to settle down.', ['They plan settling down to.', 'They plan settle to down.', 'They planned to settling.']], ['The child learned ___ the new word.', 'to say', ['saying to', 'say to', 'said']],
    ['We are ready ___ the discussion.', 'to begin', ['beginning to', 'begin to yesterday', 'began']], ['It was kind of Ravi ___ support them.', 'to offer', ['offering to', 'offer to yesterday', 'offered']],
    ['The couple expects ___ soon.', 'to move', ['moving to', 'move to yesterday', 'moved']], ['They agreed ___ the plan.', 'to change', ['changing to', 'change to yesterday', 'changed']],
    ['Choose the natural structure.', 'Nina hopes to become a nurse.', ['Nina hopes becoming a nurse to.', 'Nina hope to became a nurse.', 'Nina hopes become to a nurse.']]
  ],
  3: [
    ['Cities ___ more electric buses in the future.', 'will use', ['will used', 'using', 'used tomorrow']], ['Some species ___ become extinct.', 'may', ['may to', 'mays', 'are may']],
    ['The new law ___ reduce pollution, but we are not certain.', 'might', ['might to', 'mights', 'is might']], ['Look at the river level. It ___.', 'is going to flood', ['will flooded', 'going flood', 'floods yesterday']],
    ['I think ecotourism ___ grow.', 'will', ['is will', 'will to', 'wills']], ['Wildlife ___ recover if habitats improve.', 'may', ['may to', 'mays', 'is may']],
    ['Which prediction is least certain?', 'The plan might work.', ['The plan worked yesterday.', 'The plan works daily.', 'The plan is a plan.']], ['We ___ see cleaner cities one day.', 'will', ['will to', 'are will', 'willed']],
    ['The temperature ___ rise in the near future.', 'may', ['may to', 'mays', 'is may']], ['Those dark clouds mean it ___.', 'is going to storm', ['will stormed', 'storming yesterday', 'going storm']],
    ['___ robots replace some jobs?', 'Will', ['Do will', 'Are will', 'Did']], ['People ___ travel differently in 2050.', 'might', ['might to', 'mights', 'are might']],
    ['If pollution falls, wildlife ___ return.', 'will', ['will to', 'is will', 'wills']], ['Which sentence is correct?', 'New technology may help farmers.', ['New technology may to help farmers.', 'New technology mays help farmers.', 'New technology is may help farmers.']],
    ['Choose the evidence-based form.', 'The damaged tree is going to fall.', ['The tree will fell yesterday.', 'The tree going fall.', 'The tree is fall tomorrow.']]
  ],
  4: [
    ['The engineer tested the prototype ___.', 'carefully', ['careful', 'care', 'more careful noun']], ['It is a ___ design.', 'remarkable', ['remarkably', 'remark', 'remarking']],
    ['The device works ___.', 'reliably', ['reliable', 'reliability noun', 'rely adjective']], ['The prediction sounds ___.', 'realistic', ['realistically', 'reality adverb', 'realise']],
    ['The team integrated the feature ___.', 'successfully', ['successful', 'success noun', 'succeed adjective']], ['It was an ___ simple solution.', 'amazingly', ['amazing noun only', 'amazedly', 'amazement']],
    ['The app updates ___.', 'regularly', ['regular', 'regulation', 'regular noun']], ['The inventor explained the idea ___.', 'clearly', ['clear', 'clearness', 'cleared adjective']],
    ['Choose the adjective.', 'an incredible invention', ['invented incredibly', 'works incredible', 'incredibly prototype']], ['Choose the adverb.', 'The robot moved quickly.', ['The quick robot.', 'A quickly robot.', 'Quickly is machine.']],
    ['Easy becomes ___.', 'easily', ['easyly', 'easiful', 'easiness adjective']], ['Sad becomes ___.', 'sadly', ['sadness adverb', 'saddly', 'sad adjective after verb']],
    ['The result was ___.', 'surprising', ['surprisingly moved', 'surprise adverb', 'surprisingly noun']], ['The result changed the plan ___.', 'surprisingly', ['surprising', 'surprise adjective', 'surprised noun']],
    ['Which sentence is correct?', 'The hybrid engine runs quietly.', ['The hybrid engine runs quietness.', 'The quietly engine runs.', 'The engine quiet runs.']]
  ]
};

function buildCurriculum(vocabSet, grammarSet, practiceSet, titles) {
  return Object.fromEntries([1, 2, 3, 4].map(day => {
    const grammarExercises = practiceSet[day].map(([prompt, correct, distractors]) => q(prompt, correct, distractors));
    return [day, {
      title: titles[day], vocab: vocabSet[day], grammar: grammarSet[day], grammarExercises,
      vocabExercises: makeVocabExercises(vocabSet[day]), test: makeTest(grammarExercises)
    }];
  }));
}

export const SEP20_CURRICULUM = buildCurriculum(SEP20_VOCAB, SEP20_GRAMMAR, SEP20_PRACTICE, {
  1: 'Day 1: Preferences & Present Time', 2: 'Day 2: Future Choices', 3: 'Day 3: Advice, Permission & Obligation', 4: 'Day 4: Articles & Intensifiers'
});

export const SEP27_CURRICULUM = buildCurriculum(SEP27_VOCAB, SEP27_GRAMMAR, SEP27_PRACTICE, {
  1: 'Day 1: Homes & First Conditional', 2: 'Day 2: Family Plans & Infinitives', 3: 'Day 3: Ecology & Predictions', 4: 'Day 4: Innovation & Adverbs'
});

const sharedReadingQuestions = (details) => [
  q('What is the central situation?', details[0], details.slice(1, 4)),
  q('What challenge appears?', details[4], details.slice(5, 8)),
  q('What action helps?', details[8], details.slice(9, 12)),
  q('What language focus fits the text?', details[12], details.slice(13, 16)),
  q('What is the main lesson?', details[16], details.slice(17, 20))
];

export const SEP20_READINGS = {
  1: [reading('s20-d1', 'A Different Working Week', `Marta normally works in a quiet accounting office. She arrives at eight thirty, checks financial reports and has lunch with the same two colleagues. She enjoys solving detailed problems, but she dislikes attending long meetings without a clear purpose. Her routine is predictable, and she usually feels comfortable with it.

This month, however, the company is moving to a new building. Marta is working with a temporary project team. She is answering questions from builders, choosing furniture and helping colleagues pack files. She is not doing her usual reports every morning because the move requires immediate attention. At first, she hates changing her schedule, but she begins to enjoy working with people from other departments.

One afternoon, a colleague asks, “Do you prefer working alone or with a team?” Marta explains that she generally prefers quiet work, but she does not mind collaborating when everyone has a clear responsibility. The experience shows her that a permanent preference and a temporary situation can exist together. Her routine describes what usually happens; the present project explains what is happening now.`, ['routine', 'enjoys', 'dislikes', 'is working', 'prefers'], sharedReadingQuestions(['A temporary office move', 'A holiday', 'A restaurant visit', 'A sports event', 'Her routine changes', 'The office closes forever', 'She loses her job', 'She dislikes accounting', 'Clear team responsibilities', 'Buying a car', 'Ignoring colleagues', 'Cancelling the move', 'Present simple and present continuous', 'Past perfect', 'Passive voice', 'Reported speech', 'Preferences can stay stable during temporary change', 'Routines never change', 'Teams are always better', 'Accounting is easy']))],
  2: [reading('s20-d2', 'Plans for a Busy Saturday', `Lena has organised a busy Saturday with three friends. They are meeting at the station at nine because they have tickets for a morning exhibition. After the exhibition, they are having lunch near the river. These arrangements include times, places and other people, so Lena has written them in her calendar.

The weather forecast shows dark clouds. Lena thinks it is going to rain, so she puts an umbrella in her bag. Her friend Hugo has not checked the forecast and says, “I think the weather will be fine.” When Hugo realises he has forgotten his ticket, Lena makes a quick decision: “I will show the booking email on my phone.”

In the afternoon, the group plans to visit an outdoor market, but the rain becomes heavy. They are not going to stay outside. Instead, they decide to see a film. Lena calls the cinema and books four seats. The day changes, but the friends can still explain each future choice: fixed arrangements, earlier plans, predictions from evidence and decisions made at the moment of speaking.`, ['are meeting', 'is going to rain', 'will be', 'will show', 'plans'], sharedReadingQuestions(['Friends have a planned day out', 'A work interview', 'A family argument', 'A house move', 'Rain changes the plan', 'The station closes', 'Nobody has tickets', 'Lunch is cancelled first', 'They choose an indoor film', 'They go home immediately', 'They wait outside', 'They buy a car', 'Future forms', 'Past simple only', 'Articles only', 'Comparatives', 'Different future forms express different kinds of decisions', 'All future forms are identical', 'Plans never change', 'Weather is always certain']))],
  3: [reading('s20-d3', 'Rules at the Community Workshop', `A neighbourhood workshop lets residents borrow tools and learn simple repair skills. New members receive a short guide. They have to show identification when they register, and they must return borrowed tools on time. Visitors can watch a class before joining, but they cannot use electrical equipment without a supervisor.

During the first session, Amir wants to repair a chair. The instructor looks at the broken leg and gives advice: “You should remove the old screw first. You could use this smaller tool.” Amir asks whether he must buy any materials. The instructor explains that he does not have to buy basic screws because the workshop provides them.

A red sign near one machine says that users must not touch it during maintenance. Amir initially thinks this means the machine is optional, but the instructor clarifies the difference. Must not expresses prohibition; do not have to means something is not necessary. By the end of the class, Amir understands that modals help people distinguish advice, suggestions, permission, obligation and rules that protect everyone.`, ['have to', 'must', 'can', 'should', 'must not'], sharedReadingQuestions(['A community repair workshop', 'A hospital', 'A restaurant', 'A travel agency', 'Members must learn different rules', 'Nobody owns tools', 'The building is empty', 'Amir dislikes chairs', 'The instructor explains each modal meaning', 'Amir leaves', 'They cancel the class', 'A neighbour buys everything', 'Modal verbs', 'Future continuous', 'Past perfect', 'Relative clauses', 'Similar-looking rules can have different meanings', 'Every modal means prohibition', 'Advice is always an order', 'Rules are unnecessary']))],
  4: [reading('s20-d4', 'A Small but Useful Studio', `Iris visits a studio that a young designer rents near the city centre. It is a small room in an old building, but the designer has organised it carefully. There is a desk beside the window and an adjustable lamp above it. The room is not large enough for heavy machines, so the designer uses compact tools.

On the desk, Iris notices an unusual wooden model. The designer explains that it is a prototype for a folding shelf. The first version was too weak, but the new one is strong enough to hold several books. Iris says, “That is such a clever idea.” The designer replies that the mechanism looks simple only because the team tested it so carefully.

Later, Iris sees a photograph of a larger workshop. The photograph shows the specific place where the final product will be made. She now understands the articles: a studio introduces one place, while the studio refers back to it. She also notices how too, enough, so and such express different degrees and results.`, ['a studio', 'the studio', 'too weak', 'strong enough', 'such a clever idea'], sharedReadingQuestions(['A visit to a design studio', 'A wedding', 'A train delay', 'A medical appointment', 'The space and first prototype have limits', 'The designer has no ideas', 'Iris loses a book', 'The building closes', 'A stronger compact design', 'A larger desk', 'A new landlord', 'A restaurant booking', 'Articles and intensifiers', 'Conditionals', 'Gerunds only', 'Reported speech', 'Small differences in structure change meaning', 'All articles are optional', 'Too and enough are identical', 'Design needs no testing']))]
};

export const SEP27_READINGS = {
  1: [reading('s27-d1', 'The Flat Near the Station', `Nora and Hugo want to rent a flat together. A real estate agent shows them a furnished apartment near the station. The living room is bright, but the bedrooms are small. The landlord has recently renovated the kitchen, and the monthly rent includes water but not electricity.

Nora studies the contract carefully. If the landlord allows pets, she will bring her cat. If the rent increases after six months, the flatmates will look for another place. Hugo asks what will happen if one tenant moves out early. The agent explains that the remaining tenant will need to find a new flatmate or pay the full rent.

The two friends like the location, but they do not decide immediately. They compare the cost with an unfurnished flat farther from the centre. If they choose the cheaper place, they will need to buy furniture. If they choose the furnished flat, moving will be easier. Their decision depends on realistic conditions, so the first conditional helps them discuss possible consequences clearly.`, ['real estate agent', 'furnished', 'landlord', 'tenant', 'first conditional'], sharedReadingQuestions(['Friends compare rental flats', 'A family adopts a child', 'Tourists visit a forest', 'Engineers test a robot', 'Each choice has a cost', 'The station closes', 'The agent refuses to speak', 'The friends own both flats', 'They compare conditions and consequences', 'They buy immediately', 'They ignore the contract', 'They move abroad', 'First conditional', 'Past perfect', 'Passive voice', 'Gerunds', 'Possible future choices need clear conditions', 'Renting is always cheap', 'Furniture has no cost', 'Contracts are unnecessary']))],
  2: [reading('s27-d2', 'A New Chapter for Two Families', `Mira and Owen have been together for several years and want to settle down. They would like to live near both families, but their jobs are in different cities. They decide to list their priorities before making a final choice. Mira hopes to work remotely, while Owen plans to apply for a position closer to her parents.

The couple also wants to become parents. They are happy to discuss several possibilities and have begun learning about adoption. Their friends sometimes ask personal questions, but Mira prefers to answer only when she feels comfortable. Owen promises to support that decision. Both of them believe it is important to speak respectfully about pregnancy, birth and adoption.

During a family dinner, a relative tells a child off for interrupting. Mira uses the moment to explain that adults also need to communicate calmly. The couple is ready to make changes, but they do not expect every decision to be easy. Verb and adjective patterns help them express intentions: want to, decide to, hope to, ready to and difficult to.`, ['settle down', 'would like to', 'plans to', 'adoption', 'ready to'], sharedReadingQuestions(['A couple plans a stable future', 'A landlord raises rent', 'A town reduces pollution', 'A team creates a prototype', 'Jobs and family locations differ', 'Nobody supports them', 'They dislike children', 'They have no choices', 'They list priorities and communicate', 'They leave without talking', 'They cancel all plans', 'They tell everyone off', 'Verb/adjective + infinitive', 'First conditional only', 'Adverbs', 'Articles', 'Respectful planning needs clear language', 'Personal questions must always be answered', 'Every decision is easy', 'Families should decide everything']))],
  3: [reading('s27-d3', 'The Island’s Tourism Plan', `A small island depends on visitors, but local residents worry about pollution and damage to wildlife. The council invites business owners, scientists and residents to discuss ecotourism. A marine biologist explains that some birds may leave the island if noise continues to increase. Plastic waste might also harm fish near the beach.

The group considers several changes. Hotels are going to replace single-use bottles because they already have a funded plan. Tour companies may use smaller groups, and guides will explain how visitors can protect nesting areas. One owner predicts that these rules will reduce profits, but another believes environmentally friendly travel will attract responsible visitors.

No prediction is completely certain. However, the island has evidence that change is necessary: damaged paths, crowded beaches and less wildlife in some areas. The council will review the results next year. If the new programme works, more businesses might join. The discussion shows how will, be going to, may and might express plans, evidence and different levels of possibility.`, ['ecotourism', 'pollution', 'wildlife', 'may', 'will'], sharedReadingQuestions(['An island plans greener tourism', 'A couple rents a flat', 'A family moves', 'An inventor builds a robot', 'Tourism affects nature', 'There are no visitors', 'Hotels have no plans', 'Wildlife is increasing everywhere', 'The group proposes practical limits', 'They ban every visitor', 'They ignore the evidence', 'They close all hotels', 'Prediction forms', 'Articles only', 'Past perfect', 'Gerunds', 'Future language can show different certainty levels', 'Every prediction is certain', 'Business and nature cannot coexist', 'Evidence is irrelevant']))],
  4: [reading('s27-d4', 'A Remarkable Prototype', `A small engineering team develops a hybrid delivery bicycle for crowded city streets. The first prototype combines an electric motor with ordinary pedals. It looks unusual, but it moves quietly and uses much less energy than a small van. The designers carefully measure how the bicycle performs on hills and in heavy traffic.

During testing, the battery suddenly loses power. The team responds quickly and discovers a loose connection. An engineer integrates a simple warning light into the control panel so riders can see the problem early. The second test goes remarkably well. The bicycle carries several packages easily and stops safely in wet weather.

The team’s prediction is realistic: the bicycle will not replace every delivery vehicle, but it may reduce short van journeys. A local company agrees to test five bicycles for three months. The designers are genuinely excited because their idea is moving beyond the workshop. Their inspiration came from ordinary couriers, and now the first part of their plan may come true. Adjectives describe the product; adverbs describe how it works.`, ['hybrid', 'prototype', 'carefully', 'quickly', 'realistic'], sharedReadingQuestions(['A team tests a delivery bicycle', 'A family adopts a child', 'Tourists rent a flat', 'A poet writes a song', 'The battery fails during testing', 'The bicycle is too large', 'Nobody can ride it', 'The city bans deliveries', 'They add a warning light', 'They remove the pedals', 'They cancel the project', 'They buy a van', 'Adjectives and adverbs', 'First conditional only', 'Articles only', 'Gerunds', 'Careful testing turns ideas into useful innovation', 'Every prototype works immediately', 'Adverbs describe nouns', 'Innovation needs no evidence']))]
};

export const SEP20_LISTENING = {
  1: listening('Love It or Hate It', 'ELLLO · Views #1504', 'https://www.elllo.org/english/1501/1504-MegTodd-FreeTime-Gerunds.htm', 'Preferences and gerunds'),
  2: listening('Changing Plans', 'British Council LearnEnglish', 'https://learnenglish.britishcouncil.org/free-resources/listening/a2/changing-plans', 'Future arrangements and changing decisions'),
  3: listening('A Morning Briefing', 'British Council LearnEnglish', 'https://learnenglish.britishcouncil.org/free-resources/listening/a2/morning-briefing', 'Rules, instructions and obligations'),
  4: listening('Understanding an Explanation', 'British Council LearnEnglish', 'https://learnenglish.britishcouncil.org/free-resources/listening/a2/understanding-explanation', 'Following an explanation and noticing emphasis')
};

export const SEP27_LISTENING = {
  1: listening("Meg's Place", 'ELLLO · Views #1419', 'https://www.elllo.org/english/1401/1419-MegTodd-Places-House.htm', 'Homes, renting and household details'),
  2: listening('An Invitation to a Party', 'British Council LearnEnglish', 'https://learnenglish.britishcouncil.org/free-resources/listening/a2/invitation-party', 'Family, social plans and directions'),
  3: listening('May and Might', 'ELLLO · A2 Grammar', 'https://www.elllo.org/class/A2/A2-12-May-Might.html', 'Possible future events'),
  4: listening('Will: Future Tense', 'ELLLO · A2 Grammar', 'https://www.elllo.org/class/A2/A2-04-Will.html', 'Predictions and future decisions')
};
