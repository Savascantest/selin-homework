const q = (question, options, answer) => ({ type: 'mcq', question, options, answer });
const v = (word, engDesc, engExample, trWord, trDesc) => ({
  word, engDesc, engExample, trWord, trDesc, trExample: engExample
});

const DAY_1_VOCAB = [
  v('surname', 'a family name', 'Nora writes her surname on the form.', 'soyadı', 'aile adı'),
  v('marital status', 'whether someone is single, married or in another legal relationship', 'The form asks for marital status.', 'medeni durum', 'bekâr veya evli olma bilgisi'),
  v('occupation', 'a person’s job', 'Hugo lists his occupation as architect.', 'meslek', 'kişinin yaptığı iş'),
  v('citizenship', 'legal membership of a country', 'Mira has dual citizenship.', 'vatandaşlık', 'bir ülkeye yasal bağlılık'),
  v('gender', 'a person’s gender identity, often requested on forms', 'The optional form includes a gender field.', 'cinsiyet', 'kişinin cinsiyet kimliği'),
  v('sex', 'a biological classification used in some medical or official contexts', 'The medical form asks for sex at birth.', 'biyolojik cinsiyet', 'bazı tıbbi veya resmî bağlamlarda kullanılan sınıflandırma'),
  v('polite', 'showing good manners', 'Ravi is polite to every visitor.', 'kibar', 'iyi davranış gösteren'),
  v('serious', 'thoughtful and not playful', 'Lea looks serious during meetings.', 'ciddi', 'şakacı olmayan, düşünceli'),
  v('shy', 'nervous or quiet with unfamiliar people', 'Emre feels shy in a new group.', 'utangaç', 'yeni insanlarla çekingen'),
  v('hairdresser', 'a person who cuts and styles hair', 'Ayla works as a hairdresser.', 'kuaför', 'saç kesen ve şekillendiren kişi'),
  v('firefighter', 'a person who puts out fires and rescues people', 'Jon is training to become a firefighter.', 'itfaiyeci', 'yangın söndüren kişi'),
  v('accountant', 'a person who manages financial records', 'Zoe is an accountant at a small firm.', 'muhasebeci', 'mali kayıtları yöneten kişi'),
  v('make the bed', 'arrange the sheets and covers after sleeping', 'Tara makes the bed before breakfast.', 'yatağı toplamak', 'çarşaf ve örtüleri düzenlemek'),
  v('have a shower', 'wash your body under running water', 'Milo has a shower after jogging.', 'duş almak', 'akan su altında yıkanmak'),
  v('fall asleep', 'begin sleeping', 'Eva usually falls asleep before eleven.', 'uykuya dalmak', 'uyumaya başlamak'),
  v('have a break', 'stop working briefly to rest', 'The team has a break at ten.', 'mola vermek', 'kısa süre dinlenmek'),
  v('get to work', 'arrive at the workplace', 'Omar gets to work by eight thirty.', 'işe varmak', 'iş yerine ulaşmak'),
  v('leave the office', 'go away from the workplace', 'Clara leaves the office at six.', 'ofisten çıkmak', 'iş yerinden ayrılmak')
];

const DAY_2_VOCAB = [
  v('living room', 'the room used for relaxing and receiving guests', 'The sofa is in the living room.', 'oturma odası', 'dinlenme ve misafir odası'),
  v('dining room', 'the room where people eat meals', 'They put the large table in the dining room.', 'yemek odası', 'yemek yenilen oda'),
  v('hall', 'the space just inside an entrance or between rooms', 'There is a mirror in the hall.', 'hol', 'girişteki veya odalar arasındaki alan'),
  v('wardrobe', 'a tall cupboard for clothes', 'Mina keeps her coats in the wardrobe.', 'gardırop', 'giysi dolabı'),
  v('bedside table', 'a small table beside a bed', 'The lamp is on the bedside table.', 'komodin', 'yatağın yanındaki küçük masa'),
  v('armchair', 'a comfortable chair with side supports', 'Noah reads in the armchair.', 'koltuk', 'kollu rahat sandalye'),
  v('curtain', 'fabric that covers a window', 'The blue curtain is behind the sofa.', 'perde', 'pencereyi örten kumaş'),
  v('pillow', 'a soft support for the head in bed', 'There are two pillows on the bed.', 'yastık', 'baş için yumuşak destek'),
  v('shelf', 'a flat surface for storing or displaying things', 'The mugs are on the top shelf.', 'raf', 'eşya koymak için düz yüzey'),
  v('bookcase', 'a piece of furniture with shelves for books', 'A tall bookcase stands next to the window.', 'kitaplık', 'kitap raflı mobilya'),
  v('souvenir', 'an object kept as a memory of a place', 'The small sculpture is a souvenir from Rome.', 'hatıra eşyası', 'bir yeri hatırlatan eşya'),
  v('remote control', 'a device used to control equipment from a distance', 'The remote control is under the cushion.', 'uzaktan kumanda', 'cihazı uzaktan yöneten araç'),
  v('knitting', 'making fabric with yarn and needles', 'Rosa enjoys knitting in the evening.', 'örgü örme', 'ip ve şişle kumaş yapma'),
  v('join a club', 'become a member of a group', 'Leo wants to join a chess club.', 'kulübe katılmak', 'bir grubun üyesi olmak'),
  v('do a course', 'study a subject through organised lessons', 'Nina is doing a photography course.', 'kurs almak', 'düzenli derslere katılmak'),
  v('be good at', 'have skill in an activity', 'Felix is good at playing the violin.', 'bir şeyde iyi olmak', 'bir konuda becerikli olmak'),
  v('be worried about', 'feel anxious about something', 'Priya is worried about the climbing trip.', 'bir şey için endişelenmek', 'bir konu hakkında kaygı duymak'),
  v('cheer up', 'become happier or help someone feel happier', 'The funny message cheers Amir up.', 'neşelenmek', 'daha mutlu olmak')
];

const DAY_3_VOCAB = [
  v('starter', 'a small first course of a meal', 'Lena orders soup as a starter.', 'başlangıç', 'yemeğin küçük ilk bölümü'),
  v('main course', 'the largest or central part of a meal', 'The main course is grilled fish.', 'ana yemek', 'yemeğin temel bölümü'),
  v('dessert', 'sweet food eaten after a meal', 'Kai chooses fruit for dessert.', 'tatlı', 'yemekten sonra yenilen tatlı yiyecek'),
  v('bill', 'the paper showing how much to pay', 'The waiter brings the bill.', 'hesap', 'ödenecek tutarı gösteren belge'),
  v('tip', 'extra money given for service', 'Marta leaves a tip for the server.', 'bahşiş', 'hizmet için verilen ek para'),
  v('dish', 'food prepared in a particular way', 'This rice dish is popular here.', 'yemek', 'belirli biçimde hazırlanmış yiyecek'),
  v('guilty pleasure', 'something enjoyable that a person feels slightly embarrassed about', 'Chocolate biscuits are Theo’s guilty pleasure.', 'gizli zevk', 'biraz utanarak keyif alınan şey'),
  v('salmon', 'a pink-fleshed fish', 'Ari cooks salmon with vegetables.', 'somon', 'pembe etli bir balık'),
  v('French fries', 'thin pieces of potato cooked in hot oil', 'The children share French fries.', 'patates kızartması', 'yağda kızartılmış ince patates'),
  v('honey', 'a sweet substance made by bees', 'Sana adds honey to her tea.', 'bal', 'arıların yaptığı tatlı madde'),
  v('butter', 'a soft yellow dairy product', 'Ben spreads butter on the bread.', 'tereyağı', 'sütten yapılan yumuşak sarı ürün'),
  v('crisps', 'thin fried slices of potato', 'The bowl contains a few crisps.', 'cips', 'ince kızarmış patates dilimleri'),
  v('cucumber', 'a long green vegetable', 'The salad has cucumber and tomato.', 'salatalık', 'uzun yeşil sebze'),
  v('peach', 'a soft round fruit with fuzzy skin', 'Iris buys two peaches.', 'şeftali', 'tüylü kabuklu yumuşak meyve'),
  v('order', 'ask for food or drink in a restaurant', 'Dario orders the vegetarian pasta.', 'sipariş vermek', 'restoranda yiyecek veya içecek istemek'),
  v('eat out', 'eat in a restaurant rather than at home', 'The neighbours eat out on Fridays.', 'dışarıda yemek', 'ev yerine restoranda yemek'),
  v('pick mushrooms', 'collect mushrooms outdoors', 'Mila never picks mushrooms alone.', 'mantar toplamak', 'doğada mantar toplamak'),
  v('take part in', 'participate in an activity', 'Rafi takes part in a cooking class.', 'katılmak', 'bir etkinliğe dahil olmak')
];

const DAY_4_VOCAB = [
  v('be born', 'come into the world', 'Ada was born in a coastal town.', 'doğmak', 'dünyaya gelmek'),
  v('emperor', 'a ruler of an empire', 'The emperor built a new library.', 'imparator', 'bir imparatorluğun hükümdarı'),
  v('poet', 'a person who writes poems', 'The poet wrote about ordinary life.', 'şair', 'şiir yazan kişi'),
  v('genius', 'a person with exceptional intelligence or creativity', 'People called the young inventor a genius.', 'dâhi', 'olağanüstü zeki veya yaratıcı kişi'),
  v('creator', 'a person who makes or invents something', 'The creator designed the first model.', 'yaratıcı', 'bir şeyi yapan veya icat eden kişi'),
  v('successful', 'achieving the result you wanted', 'Her first exhibition was successful.', 'başarılı', 'istenen sonuca ulaşan'),
  v('famous', 'known by many people', 'The scientist became famous after the discovery.', 'ünlü', 'birçok kişi tarafından bilinen'),
  v('unfortunately', 'used before bad or disappointing information', 'Unfortunately, the concert ended early.', 'ne yazık ki', 'kötü bir bilgi verirken kullanılır'),
  v('probably', 'very likely but not completely certain', 'They probably met during college.', 'muhtemelen', 'büyük olasılıkla'),
  v('compose', 'write music', 'The musician composed three short pieces.', 'beste yapmak', 'müzik yazmak'),
  v('become', 'start to be something different', 'Luca became an engineer in 2018.', 'olmak', 'farklı bir duruma geçmek'),
  v('meet', 'see and speak to someone for the first time', 'Mara met her mentor at a conference.', 'tanışmak', 'biriyle ilk kez görüşmek'),
  v('send', 'make something go to another person or place', 'Inez sent the letter yesterday.', 'göndermek', 'bir şeyi başka yere ulaştırmak'),
  v('tell', 'give information to someone', 'Owen told us the whole story.', 'anlatmak', 'birine bilgi vermek'),
  v('among', 'in the middle of three or more people or things', 'A small cottage stood among the trees.', 'arasında', 'üç veya daha fazla şeyin ortasında')
];

export const NOVEMBER_CURRICULUM = {
  1: {
    title: 'Day 1: Personal Information & Daily Routines',
    vocab: DAY_1_VOCAB,
    grammar: { title: '15-Question Mixed Retrieval', desc: 'These topics are familiar. Use context and memory; no repeated rule explanation today.', rules: [] },
    grammarExercises: [
      q('Nora ___ an accountant at a travel company.', ['am', 'is', 'are', 'be'], 1),
      q('Which question asks about a person’s job?', ['Where are you from?', 'What is your occupation?', 'How old is the office?', 'When do you sleep?'], 1),
      q('Hugo ___ his hair before breakfast every day.', ['brush', 'brushes', 'is brush', 'brushed'], 1),
      q('Mira is very polite. ___ colleagues trust her.', ['His', 'Her', 'Its', 'Their'], 1),
      q('The firefighters ___ at the station now.', ['is', 'am', 'are', 'be'], 2),
      q('Omar ___ gets to work before nine; it happens almost every day.', ['rarely', 'usually', 'never', 'yesterday'], 1),
      q('Choose the correct article.', ['an engineer', 'a engineer', 'the engineer when first mentioned', 'engineer an'], 0),
      q('Clara and Jon ___ lunch at the office on Mondays.', ['has', 'have', 'having', 'is having'], 1),
      q('Which sentence is a present-simple question?', ['Does Lea leave the office at six?', 'Is Lea leave the office at six?', 'Lea does leave the office at six?', 'Did Lea leaves at six?'], 0),
      q('Ravi ___ watch TV before work.', ["doesn't", "don't", "isn't", "not"], 0),
      q('The form asks for ___ marital status.', ['you', 'your', 'yours', 'yourself'], 1),
      q('Tara ___ a shower after she goes jogging.', ['have', 'has', 'is have', 'having'], 1),
      q('Which word describes someone who does not talk much with new people?', ['polite', 'shy', 'intelligent', 'seriously'], 1),
      q('Ayla is ___ hairdresser in a busy salon.', ['a', 'an', 'some', 'any'], 0),
      q('Choose the natural routine sentence.', ['Milo falls asleep around eleven.', 'Milo fall asleep around eleven.', 'Milo is fall asleep around eleven.', 'Milo falling asleep around eleven.'], 0)
    ],
    vocabExercises: [
      q('Which word means “a family name”?', ['occupation', 'surname', 'citizenship', 'status'], 1),
      q('A person who manages financial records is an ___.', ['architect', 'artist', 'accountant', 'engineer'], 2),
      q('What happens before someone starts sleeping?', ['They leave the office.', 'They fall asleep.', 'They get dressed.', 'They have lunch.'], 1),
      q('Which phrase means “arrive at your workplace”?', ['get to work', 'go out', 'have a break', 'make the bed'], 0),
      q('Which quality means showing good manners?', ['serious', 'shy', 'polite', 'rich'], 2),
      q('Which detail belongs on a personal-information form?', ['marital status', 'bedside table', 'main course', 'curtain'], 0),
      q('Who puts out fires?', ['a cashier', 'a poet', 'a firefighter', 'a hairdresser'], 2),
      q('Which phrase means a short rest from work?', ['fall asleep', 'have a break', 'get dressed', 'walk the dog'], 1)
    ],
    test: [
      q('Eva ___ usually tired after work.', ['am', 'is', 'are', 'be'], 1),
      q('___ you make the bed every morning?', ['Do', 'Does', 'Are', 'Is'], 0),
      q('Kai never ___ TV before breakfast.', ['watch', 'watches', 'watching', 'is watch'], 1),
      q('Choose the correct phrase.', ['an occupation', 'a occupation', 'occupation an', 'some occupation for one job'], 0),
      q('These are Lena’s files. They are ___ files.', ['his', 'her', 'its', 'our'], 1),
      q('A person who designs buildings is an ___.', ['accountant', 'architect', 'artist', 'cashier'], 1),
      q('Which adverb means “on most days”?', ['never', 'usually', 'yesterday', 'once'], 1),
      q('Rosa ___ not work on Sundays.', ['do', 'does', 'is', 'has'], 1),
      q('Which question is correct?', ['Where does Amir work?', 'Where Amir does work?', 'Where do Amir works?', 'Where is Amir work?'], 0),
      q('After lunch, the team ___ a short break.', ['has', 'have', 'are have', 'having'], 0)
    ]
  },
  2: {
    title: 'Day 2: Home, Place & Free-Time Choices',
    vocab: DAY_2_VOCAB,
    grammar: { title: '15-Question Mixed Retrieval', desc: 'Retrieve familiar home, place and preference patterns without another explanation.', rules: [] },
    grammarExercises: [
      q('There ___ a bookcase next to the window.', ['are', 'is', 'be', 'have'], 1),
      q('There ___ two pillows on the bed.', ['is', 'are', 'has', 'be'], 1),
      q('The remote control is ___ the two cushions.', ['between', 'among', 'above', 'in front'], 0),
      q('Look at the lamp near you. ___ lamp is new.', ['This', 'That', 'These', 'Those'], 0),
      q('The chairs across the room are old. ___ chairs need repair.', ['This', 'That', 'These', 'Those'], 3),
      q('Mina enjoys ___ in the evening.', ['knit', 'knitting', 'knits', 'to knitting'], 1),
      q('Felix is good ___ playing chess.', ['in', 'on', 'at', 'for'], 2),
      q('Priya is worried ___ the climbing trip.', ['with', 'about', 'at', 'to'], 1),
      q('The painting is ___ the sofa, not below it.', ['above', 'under', 'between', 'behind'], 0),
      q('Which sentence is correct?', ['There are a sofa in the room.', 'There is a sofa in the room.', 'There be a sofa in the room.', 'There have a sofa in the room.'], 1),
      q('Rosa hates ___ late for her course.', ['arrive', 'arriving', 'arrives', 'to arriving'], 1),
      q('The balcony is ___ the bedroom and the kitchen.', ['between', 'under', 'behind of', 'next'], 0),
      q('Which question is correct?', ['Is there a wardrobe?', 'Are there a wardrobe?', 'There is a wardrobe?', 'Does there a wardrobe?'], 0),
      q('Leo wants to ___ a drama club.', ['join', 'member', 'take', 'play'], 0),
      q('Which sentence describes location clearly?', ['The shelf is above the desk.', 'The shelf above the desk is.', 'Above is shelf the desk.', 'The shelf does above the desk.'], 0)
    ],
    vocabExercises: [
      q('Where do people normally keep hanging clothes?', ['wardrobe', 'shelf', 'bucket', 'curtain'], 0),
      q('What is a comfortable chair with side supports?', ['bookcase', 'armchair', 'tablecloth', 'hall'], 1),
      q('Which object controls a television from across the room?', ['souvenir', 'remote control', 'pillow', 'candle'], 1),
      q('Which room is used mainly for eating meals?', ['hall', 'bathroom', 'dining room', 'balcony'], 2),
      q('Which phrase means becoming a member of a group?', ['join a club', 'pick mushrooms', 'cheer up', 'make the bed'], 0),
      q('A small table beside a bed is a ___.', ['bedside table', 'bookcase', 'beanbag', 'shelf'], 0),
      q('Which phrase describes skill?', ['be worried about', 'be good at', 'be angry with', 'be bored with'], 1),
      q('A souvenir helps you remember ___.', ['a place or experience', 'a grammar rule only', 'a bill', 'an occupation'], 0)
    ],
    test: [
      q('There ___ three rooms in the flat.', ['is', 'are', 'has', 'be'], 1),
      q('The mug is ___ the shelf.', ['on', 'between of', 'in front', 'among two'], 0),
      q('___ cushions here are soft.', ['This', 'That', 'These', 'Those over there'], 2),
      q('Nina is interested ___ art.', ['at', 'in', 'on', 'for'], 1),
      q('A curtain usually covers a ___.', ['window', 'floor', 'plate', 'book'], 0),
      q('Which is a room?', ['wardrobe', 'living room', 'pillow', 'remote control'], 1),
      q('Amir does not mind ___ gardening.', ['do', 'doing', 'does', 'to doing'], 1),
      q('The chair is ___ the desk and the bookcase.', ['between', 'above', 'under', 'behind'], 0),
      q('Which question is correct?', ['Are there any shelves?', 'Is there any shelves?', 'There are shelves?', 'Do there shelves?'], 0),
      q('To study photography in organised lessons, you can ___.', ['do a course', 'join a bill', 'make a shelf', 'order a club'], 0)
    ]
  },
  3: {
    title: 'Day 3: Food, Restaurants & Quantities',
    vocab: DAY_3_VOCAB,
    grammar: { title: '15-Question Mixed Retrieval', desc: 'Use familiar food, determiner and quantity patterns in complete situations.', rules: [] },
    grammarExercises: [
      q('We need ___ rice for the main course.', ['a', 'an', 'some', 'many'], 2),
      q('There are not ___ eggs in the fridge.', ['much', 'many', 'a little', 'an'], 1),
      q('How ___ milk is left?', ['many', 'much', 'any many', 'lots'], 1),
      q('How ___ peaches did Kai buy?', ['much', 'many', 'a lot', 'some'], 1),
      q('The waiter brought ___ menu to our table.', ['a', 'an', 'some', 'any'], 0),
      q('Would you like ___ honey in your tea?', ['some', 'many', 'an', 'a few'], 0),
      q('We do not have ___ salmon today.', ['some', 'any', 'many of', 'a'], 1),
      q('There is ___ butter, so we can make sandwiches.', ['a few', 'a little', 'many', 'an'], 1),
      q('There are ___ carrots in the basket.', ['a little', 'much', 'a few', 'an'], 2),
      q('Which sentence is correct?', ['I would like a steak.', 'I would like steak a.', 'I like would a steak.', 'I would a steak liking.'], 0),
      q('Marta ordered soup ___ a starter.', ['as', 'at', 'on', 'with'], 0),
      q('The chef needs ___ oil, but not a lot.', ['a little', 'a few', 'many', 'an'], 0),
      q('Which noun is usually uncountable?', ['egg', 'banana', 'rice', 'biscuit'], 2),
      q('Which phrase is polite in a café?', ['Give me tea.', 'Can I have a tea, please?', 'Tea now.', 'I am tea.'], 1),
      q('They left ___ tip after paying the bill.', ['a', 'an', 'many', 'any'], 0)
    ],
    vocabExercises: [
      q('What comes before the main course?', ['bill', 'starter', 'tip', 'dessert'], 1),
      q('What do you ask for when you want to pay?', ['menu', 'dish', 'bill', 'chef'], 2),
      q('Which food is made by bees?', ['butter', 'honey', 'salmon', 'rice'], 1),
      q('Which phrase means eating at a restaurant?', ['eat out', 'go jogging', 'fall asleep', 'cheer up'], 0),
      q('Which word means extra money for good service?', ['order', 'tip', 'starter', 'dish'], 1),
      q('What is normally sweet and served after a meal?', ['dessert', 'main course', 'steak', 'pepper'], 0),
      q('Which item is a fruit?', ['cucumber', 'peach', 'butter', 'salmon'], 1),
      q('A guilty pleasure is something you ___.', ['secretly enjoy', 'must repair', 'always hate', 'use as furniture'], 0)
    ],
    test: [
      q('There is not ___ sugar.', ['many', 'much', 'a few', 'an'], 1),
      q('We bought ___ apples.', ['a little', 'a few', 'much', 'an'], 1),
      q('Can I have ___ menu, please?', ['a', 'an', 'many', 'any of'], 0),
      q('The ___ prepares the food.', ['waiter', 'chef', 'bill', 'tip'], 1),
      q('Would you like ___ water?', ['some', 'many', 'a few', 'an'], 0),
      q('How ___ biscuits are in the box?', ['much', 'many', 'a little', 'an'], 1),
      q('What follows a main course?', ['dessert', 'starter', 'menu', 'order'], 0),
      q('We do not have ___ French fries.', ['some', 'any', 'a little', 'an'], 1),
      q('Which is a complete restaurant phrase?', ['order a dish', 'order on dish', 'dish an order', 'make a bill eating'], 0),
      q('A small amount of uncountable food is ___.', ['a few', 'a little', 'many', 'an'], 1)
    ]
  },
  4: {
    title: 'Day 4: New Rules — Among & Past-Simple Families',
    vocab: DAY_4_VOCAB,
    grammar: {
      title: 'New Rules: Place and Past-Time Patterns',
      desc: 'Bugünün yeni konuları among kullanımı ve geçmiş zaman fiillerini mantıklı ses/değişim aileleriyle öğrenmektir. Örnekler İngilizcedir.',
      rules: [
        { label: 'between / among', text: 'Between çoğunlukla iki kişi veya şey arasındaki ilişkiyi; among ise üç ya da daha fazla kişi veya şeyin oluşturduğu grubun içini anlatır.', example: 'The café is between the bank and the station. A small cottage stands among the trees.' },
        { label: 'Regular past: verb + -ed', text: 'Düzenli fiiller geçmişte çoğunlukla -ed alır. Yazım değişikliklerini de fiille birlikte öğren: live → lived, study → studied, stop → stopped.', example: 'Nora studied history and worked in a museum.' },
        { label: 'Irregular verbs as families', text: 'Düzensiz fiilleri alfabetik ezberlemek yerine benzer değişim gösteren aileler hâlinde çalış. Aşağıdaki tablolar V1 ve V2 biçimlerini birlikte gösterir.', example: 'Ravi bought a book, taught a class and gave it to a friend.' }
      ],
      tables: [
        { title: 'The -ought / -aught family', intro: 'Similar endings make recall easier.', columns: ['V1', 'V2', 'Example'], rows: [
          ['buy', 'bought', 'Mira bought a biography.'],
          ['think', 'thought', 'Owen thought about the question.'],
          ['teach', 'taught', 'Lea taught music for two years.'],
          ['bring', 'brought', 'Kai brought an old photograph.']
        ]},
        { title: 'Vowel-change families', intro: 'Notice the shared sound or spelling movement.', columns: ['Pattern', 'V1 → V2', 'Example'], rows: [
          ['i → a', 'drink → drank', 'Rosa drank tea after dinner.'],
          ['i → a', 'begin → began', 'The concert began at eight.'],
          ['ee → e', 'meet → met', 'Tariq met the poet in 2019.'],
          ['come → came', 'come → came', 'The visitors came early.'],
          ['take → took', 'take → took', 'Nina took a photograph.']
        ]},
        { title: 'Common one-step changes', intro: 'Keep each V1–V2 pair together.', columns: ['V1', 'V2', 'Example'], rows: [
          ['become', 'became', 'Luca became an architect.'],
          ['give', 'gave', 'Amir gave a short speech.'],
          ['know', 'knew', 'Zoe knew the answer.'],
          ['say', 'said', 'Ben said goodbye.'],
          ['see', 'saw', 'Marta saw the exhibition.'],
          ['send', 'sent', 'Iris sent the invitation.'],
          ['tell', 'told', 'Noah told a funny story.']
        ]}
      ]
    },
    grammarExercises: [
      q('A small statue stood ___ the flowers.', ['between', 'among', 'under two', 'next'], 1),
      q('The pharmacy is ___ the bank and the café.', ['among', 'between', 'inside three', 'above of'], 1),
      q('Yesterday Mira ___ a book about a famous poet.', ['buy', 'buys', 'bought', 'buyed'], 2),
      q('The teacher ___ us about the emperor.', ['tell', 'tells', 'told', 'telled'], 2),
      q('Ravi ___ a new idea during the meeting.', ['think', 'thought', 'thinked', 'thinking'], 1),
      q('The concert ___ at eight last night.', ['begin', 'began', 'begun', 'begined'], 1),
      q('Lea ___ music before she became a manager.', ['teach', 'taught', 'teached', 'teaches'], 1),
      q('We ___ the architect at an exhibition.', ['meet', 'met', 'meeted', 'meeting'], 1),
      q('Which sentence is correct?', ['Nina take a photograph yesterday.', 'Nina took a photograph yesterday.', 'Nina taked a photograph yesterday.', 'Nina takes a photograph yesterday.'], 1),
      q('Omar ___ the invitation on Friday.', ['send', 'sent', 'sended', 'sends'], 1),
      q('The young artist ___ famous after the exhibition.', ['become', 'became', 'becomed', 'becomes'], 1),
      q('The child sat ___ a group of adults.', ['between', 'among', 'next of', 'behind of'], 1),
      q('Choose the regular past form.', ['studied', 'studyed', 'study', 'studies yesterday'], 0),
      q('The guide ___ us an old palace.', ['showed', 'show', 'shown', 'showd'], 0),
      q('Which pair belongs to the same -ought/-aught family?', ['buy–bought and teach–taught', 'meet–met and see–saw', 'give–gave and send–sent', 'come–came and know–knew'], 0)
    ],
    vocabExercises: [
      q('Who writes poems?', ['creator', 'poet', 'emperor', 'engineer'], 1),
      q('Which word means “known by many people”?', ['poor', 'cheap', 'famous', 'unlucky'], 2),
      q('Which phrase means entering the world as a baby?', ['become', 'be born', 'compose', 'meet'], 1),
      q('Who makes or invents something?', ['creator', 'listener', 'cashier', 'member'], 0),
      q('Which adverb introduces disappointing information?', ['probably', 'successfully', 'unfortunately', 'yesterday'], 2),
      q('What does a composer do?', ['writes music', 'builds houses', 'serves food', 'cuts hair'], 0),
      q('Which verb means giving information to someone?', ['tell', 'meet', 'see', 'come'], 0),
      q('Among normally places something inside a group of ___.', ['three or more', 'exactly two only', 'no people or things', 'one object'], 0)
    ],
    test: [
      q('They ___ the famous creator in 2020.', ['meet', 'met', 'meeted', 'meeting'], 1),
      q('A bench stood ___ the trees.', ['between two', 'among', 'on of', 'next'], 1),
      q('The poet ___ three letters yesterday.', ['send', 'sent', 'sended', 'sends'], 1),
      q('Which is the past of buy?', ['buyed', 'bought', 'brought', 'buys'], 1),
      q('Ada ___ an architect after university.', ['become', 'became', 'becomed', 'becomes'], 1),
      q('Which is a regular past form?', ['worked', 'workt', 'wrought', 'works yesterday'], 0),
      q('The guide ___ us the truth.', ['tell', 'told', 'telled', 'tells yesterday'], 1),
      q('Use between when the relationship is mainly ___.', ['inside a large group', 'with two people or things', 'in the past', 'about quantity'], 1),
      q('Which pair is correct?', ['teach–taught', 'teach–teached', 'teach–thought', 'teach–teach'], 0),
      q('Mira ___ the sculpture at the museum.', ['saw', 'seed', 'see', 'seen yesterday'], 0)
    ]
  }
};

export const NOVEMBER_LISTENING = {
  1: {
    level: 'A2 · Natural English',
    title: 'My Day',
    source: 'ELLLO · Views #1554',
    url: 'https://www.elllo.org/english/1551/1554-Nat-Verbs-Schedule.htm',
    focus: 'Daily routines, work schedules and present-simple details',
    instructions: 'Listen once for the order of the day. Listen again and note routine verbs and frequency words.',
    questions: [
      q('What time does Natalie wake up?', ['At 6:00', 'At 7:00', 'At 7:30', 'At 9:00'], 1),
      q('What does she prefer to drink in the morning?', ['Coffee', 'Tea', 'Orange juice', 'Hot chocolate'], 3),
      q('How many classes does she have in the morning?', ['Two', 'Three', 'Four', 'Five'], 1),
      q('Where does she usually eat lunch?', ['At school', 'At home', 'At a café', 'On the train'], 0),
      q('What does she often do after getting home?', ['She goes running.', 'She changes into pyjamas and watches TV.', 'She prepares lessons.', 'She meets students.'], 1)
    ]
  },
  2: {
    level: 'A2 · Natural English',
    title: "Meg's Place",
    source: 'ELLLO · Views #1419',
    url: 'https://www.elllo.org/english/1401/1419-MegTodd-Places-House.htm',
    focus: 'Rooms, furniture, there is/are and describing a home',
    instructions: 'Listen once for the general picture of the flat. Listen again and draw a simple plan with the objects you hear.',
    questions: [
      q('Where is Meg’s apartment?', ['Near the train station', 'Beside a beach', 'Outside the city', 'Above a school'], 0),
      q('How many rooms does it have?', ['Two', 'Three', 'Four', 'Five'], 1),
      q('Why does she have a single bed?', ['She dislikes large beds.', 'The bedroom is small.', 'The bed was free.', 'The sofa becomes a bed.'], 1),
      q('What does Meg not own?', ['A laptop', 'A microwave', 'A television', 'A washing machine'], 2),
      q('Where is the washing machine?', ['In the kitchen', 'In the hall', 'On the balcony', 'Beside the bed'], 2)
    ]
  },
  3: {
    level: 'A1–A2 · Everyday English',
    title: 'Ordering in a Café',
    source: 'British Council LearnEnglish',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/ordering-cafe',
    focus: 'Food, drink, polite requests and paying',
    instructions: 'Listen first for each customer’s order. Listen again and note polite phrases, prices and changes to an order.',
    questions: [
      q('What does the first customer finally order?', ['Apple juice', 'Coffee', 'Mint tea', 'Water'], 0),
      q('What does the second customer order with mint tea?', ['A steak', 'Lemon cake', 'French fries', 'Soup'], 1),
      q('Does the second customer eat in?', ['Yes', 'No, it is take-away', 'The audio does not say', 'Only the cake is take-away'], 1),
      q('What does another customer order?', ['A chocolate-chip cookie', 'Salmon', 'A main course', 'A peach'], 0),
      q('Which request is polite?', ['Give me juice.', 'Can I have an apple juice, please?', 'I want juice now.', 'Juice!'], 1)
    ]
  },
  4: {
    level: 'A2 · Natural English',
    title: 'Life History',
    source: 'ELLLO · Views #1572',
    url: 'https://elllo.org/english/1551/1572-Meg-Was-Were-Life.htm',
    focus: 'Life events, was/were and common past-simple verbs',
    instructions: 'Listen once for the timeline. Listen again and write the V1 form next to each past verb you hear.',
    questions: [
      q('When was Meg born?', ['1969', '1984', '1987', '2003'], 1),
      q('When did she graduate from high school?', ['1987', '1993', '2003', '2010'], 2),
      q('How old was she when she got her first job?', ['13', '14', '17', '20'], 2),
      q('Where did she work?', ['At a wedding-dress shop', 'At a museum', 'At a school', 'At a café'], 0),
      q('What was Todd’s first unofficial job?', ['A hairdresser', 'A dishwasher', 'An accountant', 'A firefighter'], 1)
    ]
  }
};

const readingPermutations = [
  [0, 1, 2, 3], [1, 0, 2, 3], [1, 2, 0, 3], [1, 2, 3, 0],
  [2, 1, 0, 3], [0, 2, 3, 1], [2, 3, 1, 0], [3, 0, 1, 2]
];
let readingQuestionIndex = 0;
const readingQuestion = (question, options, answer) => {
  const correct = options[answer];
  const order = readingPermutations[readingQuestionIndex++ % readingPermutations.length];
  const shuffled = order.map(index => options[index]);
  return q(question, shuffled, shuffled.indexOf(correct));
};

export const NOVEMBER_READINGS = {
  1: [
    {
      id: 'nov-d1-r1', title: 'A New Team Schedule',
      content: `Nora has recently started a new job at an architecture company. On her first morning, she fills in a staff form with her surname, citizenship and occupation. Then her manager introduces her to the team. One colleague is quiet and serious, another is energetic, and the receptionist is especially polite. Nora feels shy at first, but everyone gives her time to settle in.

Her daily routine begins early. She wakes up at six thirty, makes the bed and has a shower before breakfast. She usually gets to work at eight fifteen because the office opens at eight thirty. In the morning, she checks drawings and talks to engineers. At eleven, the team has a short break. Nora often has lunch with two colleagues, but she sometimes eats alone when a project is busy.

Nora leaves the office at five thirty. At home, she makes a simple dinner, searches the internet for design ideas and calls her sister. She rarely watches television on weekdays because she falls asleep before eleven. The routine is demanding, but it helps her feel confident in the new role.`,
      highlightedWords: ['surname', 'occupation', 'polite', 'gets to work', 'has a break'],
      questions: [
        readingQuestion('What information does Nora put on the staff form?', ['Personal and job information', 'A restaurant order', 'Furniture measurements', 'A shopping list'], 0),
        readingQuestion('Why does she arrive before eight thirty?', ['The office opens at eight thirty.', 'She has a class.', 'She cooks lunch.', 'The trains stop.'], 0),
        readingQuestion('What does Nora do during the morning?', ['Checks drawings and talks to engineers', 'Teaches music', 'Cuts hair', 'Works in a restaurant'], 0),
        readingQuestion('When might she eat lunch alone?', ['When a project is busy', 'Every Monday', 'When the office is closed', 'After eleven at night'], 0),
        readingQuestion('Why does she rarely watch TV on weekdays?', ['She goes to sleep early.', 'She has no television.', 'She dislikes all programmes.', 'Her sister takes it.'], 0)
      ]
    },
    {
      id: 'nov-d1-r2', title: 'The People Behind the Jobs',
      content: `A local careers group invites five professionals to speak to young adults. Ravi is a firefighter, Marta is an accountant, Lena is a nurse, Hugo is an IT specialist and Ayla is a hairdresser. Their occupations are different, but their daily habits share several features. Each person needs to communicate clearly, arrive on time and remain calm when a problem appears.

Ravi gets to work before sunrise twice a week. He checks equipment and trains with his team. Marta starts later, but she often stays in the office until six because financial reports require careful attention. Lena works changing shifts at a clinic. She sometimes has lunch at unusual times, while Hugo usually takes a break at the same time every day. Ayla spends most of the day speaking to customers and standing.

During the discussion, one participant assumes that confident people are never shy. Lena disagrees. She explains that a person can feel shy in a new situation and still be intelligent, kind and professional. The speakers agree that a job title gives only limited information. Habits and character show how someone actually works with other people.`,
      highlightedWords: ['firefighter', 'accountant', 'occupation', 'shy', 'confident'],
      questions: [
        readingQuestion('What skill do all five professionals need?', ['Clear communication', 'Cooking', 'Painting', 'Skiing'], 0),
        readingQuestion('Who sometimes works changing shifts?', ['Lena', 'Marta', 'Hugo', 'Ayla'], 0),
        readingQuestion('Why might Marta stay until six?', ['Reports need careful attention.', 'She is taking a course.', 'Customers arrive for haircuts.', 'She trains firefighters.'], 0),
        readingQuestion('What idea does Lena challenge?', ['Confident people can never be shy.', 'All jobs start early.', 'Accountants work outdoors.', 'Nurses never have lunch.'], 0),
        readingQuestion('What is the text’s main message?', ['A job title does not show a whole person.', 'One occupation is best.', 'Habits are unimportant.', 'Professional people never change.'], 0)
      ]
    }
  ],
  2: [
    {
      id: 'nov-d2-r1', title: 'The Apartment Above the Bakery',
      content: `Mila moves into a small apartment above a bakery. The flat has a living room, a bedroom, a kitchen and a narrow hall. There is no dining room, so she places a round table beside the kitchen window. A tall bookcase stands between the table and the balcony door. Her favourite armchair is in front of the bookcase, with a reading lamp next to it.

At first, several boxes stand around the furniture, and Mila cannot find anything. The remote control is under a pillow, two mugs are behind the curtains, and a framed photograph is on the kitchen shelf. She spends Saturday organising the rooms. She puts clothes in the wardrobe, books in the bookcase and souvenirs on the top shelf.

By evening, the apartment feels calmer. A friend brings a small painting and hangs it above the sofa. Mila lights a candle, makes tea and sits in the armchair. The rooms are not large, but each object now has a clear place. She realises that a comfortable home depends less on size than on practical choices and personal details.`,
      highlightedWords: ['living room', 'bookcase', 'between', 'remote control', 'wardrobe'],
      questions: [
        readingQuestion('Why is the table near the kitchen?', ['There is no dining room.', 'The bedroom is full.', 'The bakery needs it.', 'The balcony is closed.'], 0),
        readingQuestion('Where is the armchair?', ['In front of the bookcase', 'Behind the wardrobe', 'Under the table', 'On the balcony'], 0),
        readingQuestion('Where does Mila find the remote control?', ['Under a pillow', 'On a shelf', 'In a box', 'Behind a curtain'], 0),
        readingQuestion('What does her friend bring?', ['A painting', 'A sofa', 'A wardrobe', 'A remote control'], 0),
        readingQuestion('What does Mila learn?', ['Practical choices can make a small home comfortable.', 'A home must be large.', 'Furniture should stay in boxes.', 'Personal objects create disorder.'], 0)
      ]
    },
    {
      id: 'nov-d2-r2', title: 'A Club for Different Interests',
      content: `A community centre starts a Saturday club for adults who want to try new activities. At the first meeting, twelve people sit in a circle and describe their interests. Nina is interested in art and wants to do a painting course. Felix is good at chess but curious about drama. Rosa loves knitting, while Amir wants to learn the violin. Two other members are excited about climbing but nervous about bungee jumping.

The organiser explains that the club cannot run every activity at once. Members must choose four courses for the first month. At first, people speak only about their own preferences. Then Rosa suggests combining interests. The art group can design posters for the drama performance, and the knitting group can make simple costume pieces. Chess players can organise quiet games while musicians rehearse in another room.

The plan cheers everyone up because nobody needs to abandon an interest. Felix joins the drama group and agrees to help with chess later. Nina starts a club noticeboard and invites members to add new ideas. By the end of the meeting, the centre feels less like a building with separate rooms and more like a community where different skills support one another.`,
      highlightedWords: ['interested in', 'good at', 'knitting', 'join', 'cheers everyone up'],
      questions: [
        readingQuestion('What course does Nina want to do?', ['Painting', 'Chess', 'Climbing', 'Cooking'], 0),
        readingQuestion('Why can the club not offer everything immediately?', ['It must choose four courses first.', 'Nobody has interests.', 'The building is closing.', 'Members refuse to cooperate.'], 0),
        readingQuestion('How can the art group help drama?', ['By designing posters', 'By teaching chess', 'By cooking food', 'By closing the rooms'], 0),
        readingQuestion('What does Felix decide to join?', ['The drama group', 'The knitting group', 'The climbing group', 'The cooking group'], 0),
        readingQuestion('What changes during the meeting?', ['Members find ways for interests to support one another.', 'Everyone chooses the same hobby.', 'The club is cancelled.', 'People leave without a plan.'], 0)
      ]
    }
  ],
  3: [
    {
      id: 'nov-d3-r1', title: 'A Table for Four',
      content: `Four colleagues decide to eat out after finishing a difficult project. They choose a small restaurant with a short seasonal menu. For a starter, Marta orders tomato soup, while Kai and Lena share a plate of grilled vegetables. Ben skips the starter because he wants to leave room for dessert.

The waiter explains that there is not much salmon left, but there are several steaks and a lot of vegetarian pasta. Marta chooses the salmon with rice. Kai orders steak and asks for French fries instead of potatoes. Lena has pasta with a little cheese, and Ben orders a chicken dish with beans. They also request some bread and a large bottle of water for the table.

During the meal, the group discusses healthy choices and guilty pleasures. Kai says crisps are his weakness, while Lena loves biscuits with honey. When dessert arrives, they share peach cake and strawberries. The portions are small, but everyone feels satisfied. Ben asks for the bill, checks the total and leaves a tip. The evening is relaxed because ordering together encourages them to talk about preferences without judging one another.`,
      highlightedWords: ['starter', 'main course', 'dessert', 'bill', 'tip'],
      questions: [
        readingQuestion('Why does Ben skip the starter?', ['He wants dessert later.', 'He dislikes the restaurant.', 'He has already paid.', 'There are no starters.'], 0),
        readingQuestion('Which food is limited?', ['Salmon', 'Pasta', 'Bread', 'Beans'], 0),
        readingQuestion('What change does Kai request?', ['French fries instead of potatoes', 'Soup instead of steak', 'Honey instead of water', 'Rice instead of vegetables'], 0),
        readingQuestion('What do they share for dessert?', ['Peach cake and strawberries', 'Biscuits and crisps', 'Salmon and rice', 'Bread and butter'], 0),
        readingQuestion('Who asks for the bill?', ['Ben', 'Marta', 'Kai', 'Lena'], 0)
      ]
    },
    {
      id: 'nov-d3-r2', title: 'The Market Cooking Class',
      content: `Rafi takes part in a weekend cooking class that begins at an outdoor market. The chef gives each pair a shopping list and a limited budget. Rafi works with Sana. They need some rice, a little oil, two cucumbers, three carrots, a few tomatoes and a piece of salmon. They already have salt, pepper and butter at the kitchen.

At the first stall, there are many vegetables but not much fruit. Sana buys the cucumbers and carrots, while Rafi compares two kinds of rice. At another stall, they find fresh salmon and ask how much they need for four people. The seller recommends a medium piece and explains how to keep it cold.

Back in the kitchen, the pairs prepare different dishes. Rafi and Sana cook salmon with vegetable rice. Another pair makes chicken pasta, and a third group prepares a bean salad. The chef reminds everyone that good cooking is not only about following a recipe. Cooks must also manage quantities, taste carefully and make practical decisions. At lunch, the class shares every dish and discusses which ingredients they might change next time.`,
      highlightedWords: ['takes part in', 'some rice', 'a little oil', 'many vegetables', 'how much'],
      questions: [
        readingQuestion('Where does the class begin?', ['At an outdoor market', 'In a restaurant', 'At a farm', 'In a school hall'], 0),
        readingQuestion('Which ingredients do they already have?', ['Salt, pepper and butter', 'Rice and salmon', 'Carrots and tomatoes', 'Chicken and pasta'], 0),
        readingQuestion('What is limited at the first stall?', ['Fruit', 'Vegetables', 'Rice', 'Fish'], 0),
        readingQuestion('What does the seller explain?', ['How to keep the salmon cold', 'How to grow carrots', 'How to make pasta', 'How to order dessert'], 0),
        readingQuestion('What broader skill does the chef teach?', ['Managing quantities and making decisions', 'Memorising one recipe', 'Avoiding all changes', 'Cooking without tasting'], 0)
      ]
    }
  ],
  4: [
    {
      id: 'nov-d4-r1', title: 'The Poet Among the Scientists',
      content: `In 1912, a young poet named Elias attended a public lecture at a city library. He sat among university students, engineers and doctors, although he had never studied science formally. The speaker described new ideas about radio waves and communication. Elias listened carefully and wrote several notes in the back of a poetry book.

After the lecture, he met an engineer called Marta Vale. She showed him a small device that sent a signal across the room. Elias thought the machine was extraordinary. He asked many questions, and Marta gave simple explanations. Their conversation began an unusual friendship. Marta taught Elias basic physics, while he introduced her to modern poetry.

Over the next decade, Elias composed poems about cities, machines and invisible messages. His work became successful because it connected technical change with ordinary emotions. Unfortunately, some critics disliked the mixture at first. Later, readers recognised that he had seen an important link between art and science. A chance meeting among strangers changed his creative direction and gave Marta a new interest as well.`,
      highlightedWords: ['among', 'met', 'thought', 'gave', 'became'],
      questions: [
        readingQuestion('Where did Elias sit?', ['Among students and professionals', 'Between two empty chairs only', 'On the stage', 'Outside the library'], 0),
        readingQuestion('What did Marta show him?', ['A signalling device', 'A painting', 'A restaurant menu', 'A violin'], 0),
        readingQuestion('What did they teach each other?', ['Physics and poetry', 'Cooking and skiing', 'Accounting and law', 'Chess and gardening'], 0),
        readingQuestion('Why did his work become successful?', ['It connected technology with emotion.', 'It copied old poems.', 'It avoided ordinary life.', 'It explained one machine only.'], 0),
        readingQuestion('What changed Elias’s direction?', ['A chance meeting', 'A job advertisement', 'A family argument', 'A restaurant visit'], 0)
      ]
    },
    {
      id: 'nov-d4-r2', title: 'A Creator Who Changed Course',
      content: `Mara Voss was born in a farming village, but she became a well-known designer of simple household tools. As a child, she watched relatives repair furniture and kitchen equipment instead of throwing it away. She studied engineering in the city and worked for a large manufacturer for six years.

In 2008, Mara saw a broken water pump among a group of machines waiting for disposal. She took it apart and found that one small piece had failed. The company planned to replace the entire machine, but Mara thought this was wasteful. She drew a new part, sent the design to a local workshop and tested the repair. The pump worked again.

Mara left the manufacturer the following year and started a small company. Her team created products with parts that ordinary people could replace. At first, sales grew slowly. Then a famous environmental writer told readers about the idea, and orders increased. Mara became successful without making the most expensive product. She gave customers something more useful: the ability to understand, maintain and repair the objects they owned.`,
      highlightedWords: ['was born', 'became', 'saw', 'took', 'sent'],
      questions: [
        readingQuestion('What influenced Mara as a child?', ['Relatives repairing objects', 'A famous poet', 'A restaurant job', 'A sports club'], 0),
        readingQuestion('Where did she find the broken pump?', ['Among machines for disposal', 'Between two books', 'At a market', 'In her bedroom'], 0),
        readingQuestion('What caused the problem?', ['One small failed part', 'The entire design', 'No water supply', 'A missing customer'], 0),
        readingQuestion('What helped orders increase?', ['A writer shared the idea.', 'Prices doubled.', 'The company stopped repairs.', 'Mara returned to farming.'], 0),
        readingQuestion('What did customers gain?', ['The ability to repair products', 'Free restaurant meals', 'A larger house', 'A poetry course'], 0)
      ]
    }
  ]
};

function balanceQuestions(questions, offset = 0) {
  return questions.map((item, index) => {
    if (!Array.isArray(item.options) || item.options.length !== 4 || !Number.isInteger(item.answer)) return item;
    const correct = item.options[item.answer];
    const distractors = item.options.filter((_, optionIndex) => optionIndex !== item.answer);
    const target = (index * 3 + Math.floor(index / 4) + offset) % 4;
    const options = [...distractors];
    options.splice(target, 0, correct);
    return { ...item, options, answer: target };
  });
}

for (const day of [1, 2, 3, 4]) {
  NOVEMBER_CURRICULUM[day].grammarExercises = balanceQuestions(NOVEMBER_CURRICULUM[day].grammarExercises, day);
  NOVEMBER_CURRICULUM[day].vocabExercises = balanceQuestions(NOVEMBER_CURRICULUM[day].vocabExercises, day + 1);
  NOVEMBER_CURRICULUM[day].test = balanceQuestions(NOVEMBER_CURRICULUM[day].test, day + 2);
  NOVEMBER_LISTENING[day].questions = balanceQuestions(NOVEMBER_LISTENING[day].questions, day + 3);
  NOVEMBER_READINGS[day].forEach((reading, index) => {
    reading.questions = balanceQuestions(reading.questions, day + index);
  });
}
