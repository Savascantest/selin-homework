import React, { useState, useEffect } from 'react';
import { BookOpen, HelpCircle, Layers, CheckCircle, Brain, RefreshCw, ChevronLeft, ChevronRight, Check, Calendar, ExternalLink, Headphones } from 'lucide-react';
import { LISTENING_TASKS, UPGRADED_READINGS } from './selin-levelled-content';

const VOCAB_DAY_1 = [
  { word: "Hello, I don't think we've met.", engDesc: "A polite way to introduce yourself to someone new.", engExample: "Hello, I don't think we've met. My name is Arthur.", trWord: "Merhaba, sanırım tanışmadık.", trDesc: "Yeni biriyle tanışmak için kibar bir yol.", trExample: "Merhaba, sanırım tanışmadık. Benim adım Arthur." },
  { word: "By the way, I'm...", engDesc: "Used to add your name into a conversation casually.", engExample: "By the way, I'm Emily, the new designer.", trWord: "Bu arada, ben...", trDesc: "Sohbete günlük olarak adınızı eklemek için kullanılır.", trExample: "Bu arada, ben Emily, yeni tasarımcı." },
  { word: "Nice to meet you.", engDesc: "A common greeting when meeting someone for the first time.", engExample: "It is really nice to meet you, Mr. Smith.", trWord: "Tanıştığıma memnun oldum.", trDesc: "Biriyle ilk kez karşılaştığınızda kullanılan yaygın bir selamlama.", trExample: "Sizinle tanıştığıma gerçekten memnun oldum, Bay Smith." },
  { word: "easy-going", engDesc: "relaxed and not easily upset", engExample: "My manager is very easy-going about deadlines.", trWord: "uyumlu, rahat", trDesc: "rahat ve kolayca üzülmeyen", trExample: "Yöneticim teslim tarihleri konusunda çok rahattır." },
  { word: "polite", engDesc: "having good manners", engExample: "The children were incredibly polite during the dinner.", trWord: "kibar, nazik", trDesc: "iyi huylu olmak", trExample: "Çocuklar akşam yemeği sırasında inanılmaz derecede kibardılar." },
  { word: "smart", engDesc: "intelligent", engExample: "She came up with a smart solution to the problem.", trWord: "zeki", trDesc: "akıllı", trExample: "Soruna zekice bir çözüm buldu." },
  { word: "charming", engDesc: "pleasant and attractive", engExample: "The charming host made everyone feel welcome.", trWord: "çekici, karizmatik", trDesc: "hoş ve çekici", trExample: "Çekici ev sahibi herkesin kendini iyi hissetmesini sağladı." }
];

const VOCAB_DAY_2 = [
  { word: "listen to", engDesc: "to give attention with the ear", engExample: "I like to listen to music.", trWord: "dinlemek", trDesc: "kulak verip dikkat etmek", trExample: "Müzik dinlemeyi severim." },
  { word: "look at", engDesc: "to direct your eyes towards something", engExample: "Look at that beautiful bird!", trWord: "bakmak", trDesc: "gözlerini bir şeye yöneltmek", trExample: "Şu güzel kuşa bak!" },
  { word: "come up to", engDesc: "to approach someone", engExample: "A stranger came up to me and asked for directions.", trWord: "yanına gelmek, yaklaşmak", trDesc: "birine yaklaşmak", trExample: "Bir yabancı yanıma geldi ve yol sordu." },
  { word: "go out with", engDesc: "to date someone or spend time socially", engExample: "Are you going out with friends tonight?", trWord: "biriyle çıkmak / dışarı çıkmak", trDesc: "biriyle çıkmak veya sosyal olarak vakit geçirmek", trExample: "Bu gece arkadaşlarınla dışarı çıkıyor musun?" },
  { word: "wait for", engDesc: "to stay in a place until someone arrives", engExample: "I will wait for you at the station.", trWord: "beklemek", trDesc: "biri gelene kadar bir yerde kalmak", trExample: "Seni istasyonda bekleyeceğim." },
  { word: "And you?", engDesc: "A short way to return a question to the other person.", engExample: "I'm doing well. And you?", trWord: "Ya sen?", trDesc: "Bir soruyu karşı tarafa yöneltmenin kısa yolu.", trExample: "Ben iyiyim. Ya sen?" },
  { word: "annoying", engDesc: "causing irritation", engExample: "That loud noise is annoying.", trWord: "sinir bozucu", trDesc: "tahriş eden", trExample: "Şu yüksek ses sinir bozucu." }
];

const VOCAB_DAY_3 = [
  { word: "spend time on", engDesc: "to use time doing something", engExample: "I spend a lot of time on my hobbies.", trWord: "zaman harcamak", trDesc: "bir şeye zaman ayırmak", trExample: "Hobilerime çok zaman harcarım." },
  { word: "talk to / with", engDesc: "to communicate with someone", engExample: "I need to talk to the manager.", trWord: "biriyle konuşmak", trDesc: "biriyle iletişim kurmak", trExample: "Müdürle konuşmam gerek." },
  { word: "I'm just wondering.", engDesc: "Used to politely introduce a question.", engExample: "I'm just wondering, what time does the meeting start?", trWord: "Sadece merak ediyorum.", trDesc: "Bir soruyu kibarca sormak için kullanılır.", trExample: "Sadece merak ediyorum, toplantı saat kaçta başlıyor?" },
  { word: "jealous", engDesc: "envious of someone else", engExample: "He felt jealous of her success.", trWord: "kıskanç", trDesc: "başkasını kıskanan", trExample: "Onun başarısını kıskandı." },
  { word: "sensitive", engDesc: "easily hurt emotionally", engExample: "Don't yell at her, she is very sensitive.", trWord: "hassas", trDesc: "duygusal olarak çabuk incinen", trExample: "Ona bağırma, o çok hassas." },
  { word: "honest", engDesc: "always telling the truth", engExample: "He is an honest man.", trWord: "dürüst", trDesc: "her zaman doğruyu söyleyen", trExample: "O dürüst bir adam." },
  { word: "confident", engDesc: "sure of oneself", engExample: "She is a confident speaker.", trWord: "kendine güvenen", trDesc: "kendisinden emin", trExample: "Kendine güvenen bir konuşmacı." },
  { word: "generous", engDesc: "willing to give and share", engExample: "It was generous of you to pay.", trWord: "cömert", trDesc: "vermeye ve paylaşmaya istekli", trExample: "Ödeme yapman cömertçeydi." }
];

const VOCAB_DAY_4 = [
  { word: "This must be...", engDesc: "Used when deducing who someone is.", engExample: "You look like John's brother. This must be Mark.", trWord: "Bu ... olmalı", trDesc: "Birinin kim olduğunu tahmin ederken kullanılır.", trExample: "John'un kardeşine benziyorsun. Bu Mark olmalı." },
  { word: "I'm so bad with names.", engDesc: "Admitting you easily forget names.", engExample: "I'm so bad with names, please remind me yours.", trWord: "İsimler konusunda çok kötüyüm.", trDesc: "İsimleri kolayca unuttuğunuzu itiraf etmek.", trExample: "İsimler konusunda çok kötüyüm, lütfen bana adınızı hatırlatın." },
  { word: "What's your name again?", engDesc: "Used when you forgot someone's name.", engExample: "I'm sorry, what's your name again?", trWord: "Adın neydi acaba?", trDesc: "Birinin adını unuttuğunuzda kullanılır.", trExample: "Özür dilerim, adın neydi acaba?" },
  { word: "Nice talking to you.", engDesc: "A polite way to end a conversation.", engExample: "I have to go now, but nice talking to you.", trWord: "Seninle konuşmak güzeldi.", trDesc: "Bir konuşmayı bitirmenin kibar bir yolu.", trExample: "Şimdi gitmem gerek ama seninle konuşmak güzeldi." },
  { word: "silly", engDesc: "playful or foolish", engExample: "Stop being silly.", trWord: "aptalca, komik, şapşal", trDesc: "eğlenceli veya aptalca", trExample: "Şapşallık yapmayı bırak." },
  { word: "arrogant", engDesc: "exaggerated sense of one's importance", engExample: "His arrogant attitude is a problem.", trWord: "kibirli", trDesc: "kendi önemini abartan", trExample: "Kibirli tavrı bir sorun." },
  { word: "energetic", engDesc: "having a lot of energy", engExample: "The energetic dog ran all day.", trWord: "enerjik", trDesc: "çok enerjiye sahip", trExample: "Enerjik köpek bütün gün koştu." },
  { word: "big-hearted", engDesc: "kind and forgiving", engExample: "She is a big-hearted woman.", trWord: "yüce gönüllü", trDesc: "nazik ve bağışlayıcı", trExample: "O yüce gönüllü bir kadın." },
  { word: "beautiful inside and out", engDesc: "physically attractive and kind", engExample: "My sister is beautiful inside and out.", trWord: "içi dışı güzel", trDesc: "hem fiziksel hem de içsel olarak güzel", trExample: "Kız kardeşim içi dışı güzel biridir." }
];

const CURRICULUM = {
  1: {
    title: "Day 1: Present Tenses & First Impressions",
    vocab: VOCAB_DAY_1,
    grammar: {
      title: "Present Simple vs. Present Continuous",
      desc: "Understanding when to use each tense is key to accurately describing personalities and behaviors.",
      rules: [
        { label: "Present Simple", text: "Use for permanent states, facts, and general routines (e.g., true personality).", example: "David is an easy-going manager. She always speaks politely." },
        { label: "Present Continuous", text: "Use for actions happening right now, or temporary behaviors.", example: "She is being incredibly charming today. They are acting polite for the guests." }
      ]
    },
    grammarExercises: [
      { type: 'mcq', question: "Which tense do we use to talk about actions happening right now?", options: ["Present Continuous", "Present Simple", "Past Simple", "Future Simple"], answer: 0 },
      { type: 'mcq', question: "Which sentence describes someone's permanent personality?", options: ["He is acting nice.", "He is a very smart boy.", "They are being silly.", "I am feeling tired."], answer: 1 },
      { type: 'fill', question: "Listen! The baby ________ right now.", options: ["is crying", "cries", "cry", "crying"], answer: 0 },
      { type: 'fill', question: "My teacher ________ clearly every day.", options: ["is speaking", "speak", "speaks", "speaking"], answer: 2 },
      { type: 'mcq', question: "He ________ (usually / wear) glasses, but today he ________ (wear) contacts.", options: ["is usually wearing / wears", "usually wears / is wearing", "usually wears / wears", "is wearing / wears"], answer: 1 },
      { type: 'mcq', question: "She usually (be) ______ very polite, but right now she (act) ______ rude.", options: ["is / is acting", "is acting / acts", "acts / is acting", "is / acts"], answer: 0 },
      { type: 'mcq', question: "Look at the stage! The actor ________ (smile) at the audience.", options: ["is smiling", "smiles", "smile", "smiled"], answer: 0 },
      { type: 'mcq', question: "I really like him. He always says 'please' and 'thank you'. He is so ________.", options: ["charming", "polite", "easy-going", "smart"], answer: 1 },
      { type: 'order', question: "Put in order: acting / are / why / you / so / strange / ?", words: ["strange", "acting", "are", "you", "so", "why", "?"], answer: ["why", "are", "you", "acting", "so", "strange", "?"] },
      { type: 'order', question: "Put in order: smart / is / a / very / woman / she", words: ["she", "is", "a", "very", "smart", "woman"], answer: ["she", "is", "a", "very", "smart", "woman"] },
      { type: 'fill', question: "Why ________ they laughing so loudly?", options: ["is", "are", "do", "does"], answer: 1 },
      { type: 'fill', question: "She ________ not usually this easy-going.", options: ["is", "does", "are", "has"], answer: 0 }
    ],
    vocabExercises: [
      { type: 'mcq', question: "How do you casually add your name into a conversation?", options: ["What's your name?", "Hello, I don't think we've met.", "By the way, I'm...", "Nice to meet you."], answer: 2 },
      { type: 'mcq', question: "A person who learns very quickly and is intelligent is:", options: ["Polite", "Easy-going", "Smart", "Charming"], answer: 2 },
      { type: 'tf', question: "True or False: 'Charming' means someone is unpleasant to be around.", options: ["True", "False"], answer: 1 },
      { type: 'fill', question: "Hello, I don't ________ we've met.", options: ["know", "think", "believe", "see"], answer: 1 },
      { type: 'mcq', question: "Which adjective means relaxed and not easily upset?", options: ["Polite", "Smart", "Charming", "Easy-going"], answer: 3 },
      { type: 'tf', question: "True or False: 'Polite' translates to 'kibar' or 'nazik' in Turkish.", options: ["True", "False"], answer: 0 },
      { type: 'fill', question: "The host was very ________; he made everyone laugh and feel welcome.", options: ["smart", "easy-going", "charming", "polite"], answer: 2 },
      { type: 'mcq', question: "What is a common greeting when you are introduced to someone for the first time?", options: ["Nice to meet you.", "By the way, I'm...", "See you later.", "I don't think we've met."], answer: 0 },
      { type: 'tf', question: "True or False: 'Uyumlu' in English is 'easy-going'.", options: ["True", "False"], answer: 0 },
      { type: 'fill', question: "That was a ________ decision! You saved us a lot of money.", options: ["charming", "polite", "smart", "easy-going"], answer: 2 },
      { type: 'mcq', question: "What is a polite way to introduce yourself to a stranger?", options: ["Hello, I don't think we've met.", "Nice to meet you.", "By the way, I'm...", "I'm smart."], answer: 0 },
      { type: 'tf', question: "True or False: 'Tanıştığıma memnun oldum' means 'By the way, I'm...'.", options: ["True", "False"], answer: 1 },
      { type: 'mcq', question: "If someone is always saying 'please', they are:", options: ["Smart", "Polite", "Charming", "Easy-going"], answer: 1 }
    ],
    readings: [
      { id: 1, title: "The Networking Event", content: "At a tech conference, two engineers cross paths near the coffee machine. '**Hello, I don't think we've met.** My name is Leo,' he says. The other smiles. 'Hi Leo, **nice to meet you**. **By the way, I'm** Sam.' Leo notices that Sam is very **easy-going**. Right now, they are discussing new software, and Sam is offering very **smart** ideas. He is definitely a **charming** person to work with.", highlightedWords: ["Hello, I don't think we've met.", "nice to meet you", "By the way, I'm", "easy-going", "smart", "charming"], questions: [
        { type: 'mcq', question: "Where does this interaction take place?", options: ["At a school", "At a tech conference", "At a restaurant", "In a park"], answer: 1 },
        { type: 'mcq', question: "What is Sam doing right now?", options: ["Offering smart ideas", "Drinking tea", "Leaving", "Sleeping"], answer: 0 },
        { type: 'tf', question: "True or False: Leo thinks Sam is very polite.", options: ["True", "False"], answer: 1 }
      ]},
      { id: 2, title: "A Helpful Student", content: "In the classroom, the teacher is observing the students. One student, Mia, is always extremely **polite**. She is currently helping a classmate with a difficult math problem. She is very **smart** and finds the answers quickly. A new student approaches them. '**Hello, I don't think we've met.** Can I join your group?' the new student asks. Mia replies warmly, '**Nice to meet you**. Of course!'", highlightedWords: ["polite", "smart", "Hello, I don't think we've met.", "Nice to meet you"], questions: [
        { type: 'mcq', question: "What is Mia doing right now?", options: ["Reading a book", "Helping a classmate", "Eating lunch", "Talking to the teacher"], answer: 1 },
        { type: 'mcq', question: "How does Mia react to the new student?", options: ["She ignores them", "She says no", "She replies warmly", "She gets angry"], answer: 2 },
        { type: 'tf', question: "True or False: Mia is described as easy-going.", options: ["True", "False"], answer: 1 }
      ]},
      { id: 3, title: "Weekend Relaxation", content: "On Sundays, my uncle is normally very **easy-going**. He just reads the paper and drinks tea. Today, however, he is being quite **charming** and entertaining the kids in the garden. 'Wow, you are full of energy today! **By the way, I'm** going to the store, do you need anything?' my aunt asks. My uncle gives a **polite** nod. 'Just some coffee, please. **Nice to meet you**... wait, you're my wife!' he jokes.", highlightedWords: ["easy-going", "charming", "By the way, I'm", "polite", "Nice to meet you"], questions: [
        { type: 'mcq', question: "What does the uncle normally do on Sundays?", options: ["Goes shopping", "Entertains kids", "Reads the paper", "Cooks dinner"], answer: 2 },
        { type: 'mcq', question: "What is the uncle doing today?", options: ["Sleeping", "Working", "Entertaining the kids", "Reading"], answer: 2 },
        { type: 'tf', question: "True or False: The aunt introduces herself to the uncle.", options: ["True", "False"], answer: 1 }
      ]}
    ],
    test: [
      { type: 'mcq', question: "Which word means 'relaxed and not easily upset'?", options: ["Polite", "Easy-going", "Smart", "Charming"], answer: 1 },
      { type: 'mcq', question: "Right now, she ________ to the radio.", options: ["listen", "listens", "is listening", "are listening"], answer: 2 },
      { type: 'mcq', question: "Hello, I don't think we've ________. I'm Mark.", options: ["see", "met", "know", "meet"], answer: 1 },
      { type: 'mcq', question: "He is always saying nice things to everyone. He is very ________.", options: ["smart", "charming", "easy-going", "polite"], answer: 3 },
      { type: 'mcq', question: "We ________ (usually / walk) to work, but today we are driving.", options: ["are usually walking", "usually walk", "usually walks", "is walking"], answer: 1 },
      { type: 'mcq', question: "Look! The children ________ (play) nicely together.", options: ["are playing", "play", "plays", "is playing"], answer: 0 },
      { type: 'mcq', question: "Which phrase means 'Sohbete günlük olarak adınızı eklemek'?", options: ["Nice to meet you.", "Hello.", "By the way, I'm...", "And you?"], answer: 2 },
      { type: 'mcq', question: "She solves math problems in seconds. She is extremely ________.", options: ["polite", "charming", "easy-going", "smart"], answer: 3 },
      { type: 'mcq', question: "I ________ learning a lot of new words today.", options: ["am", "is", "are", "do"], answer: 0 },
      { type: 'mcq', question: "A person who is pleasant, attractive, and makes people feel welcome is:", options: ["easy-going", "smart", "polite", "charming"], answer: 3 },
      // Write-in questions
      { type: 'write', question: "Fill in the blank: _____ (to be) you enjoying the party?", answer: ["are"] },
      { type: 'write', question: "Fill in the blank: Nice to _____ you, Sarah.", answer: ["meet"] },
      { type: 'write', question: "Fill in the blank: Hello, I don't think we've _____. I'm James.", answer: ["met"] },
      { type: 'write', question: "Fill in the blank: By the _____, I'm Emily.", answer: ["way"] },
      { type: 'write', question: "Fill in the blank: Right now, they _____ (to be) acting very polite.", answer: ["are", "'re"] }
    ]
  },
  2: {
    title: "Day 2: Verbs + Prepositions",
    vocab: VOCAB_DAY_2,
    grammar: {
      title: "Common Verbs with Prepositions",
      desc: "Many verbs in English are followed by specific prepositions. You must memorize these combinations.",
      rules: [
        { label: "Listen to / Look at", text: "Use 'to' with listen, and 'at' with look.", example: "I am listening TO music. Look AT that bird!" },
        { label: "Wait for / Go out with", text: "Use 'for' when anticipating something/someone. Use 'with' for social dates.", example: "Wait FOR me! I am going out WITH my friends." },
        { label: "Come up to", text: "Use 'up to' when approaching someone.", example: "A man came UP TO me on the street." }
      ]
    },
    grammarExercises: [
      { type: 'mcq', question: "I always listen ________ music when I study.", options: ["at", "for", "to", "with"], answer: 2 },
      { type: 'mcq', question: "Please look ________ the board.", options: ["at", "to", "for", "with"], answer: 0 },
      { type: 'mcq', question: "Who are you going out ________ tonight?", options: ["for", "to", "at", "with"], answer: 3 },
      { type: 'fill', question: "She is waiting ________ the bus.", options: ["to", "at", "with", "for"], answer: 3 },
      { type: 'order', question: "Put in order: looking / are / what / at / you / ?", words: ["what", "are", "you", "looking", "at", "?"], answer: ["what", "are", "you", "looking", "at", "?"] },
      { type: 'order', question: "Put in order: music / listen / to / I / everyday", words: ["I", "listen", "to", "music", "everyday"], answer: ["I", "listen", "to", "music", "everyday"] },
      { type: 'fill', question: "A stranger came up ________ me and asked for money.", options: ["at", "to", "for", "with"], answer: 1 },
      { type: 'mcq', question: "Are you waiting ________ someone?", options: ["to", "at", "for", "with"], answer: 2 },
      { type: 'mcq', question: "Don't look ________ me like that!", options: ["to", "at", "for", "with"], answer: 1 },
      { type: 'mcq', question: "I like to go out ________ my sister on weekends.", options: ["at", "to", "for", "with"], answer: 3 },
      { type: 'fill', question: "He loves to listen ________ podcasts.", options: ["to", "at", "for", "with"], answer: 0 },
      { type: 'fill', question: "They came ________ to us and said hello.", options: ["up", "down", "in", "out"], answer: 0 }
    ],
    vocabExercises: [
      { type: 'mcq', question: "If a sound makes you angry, it is:", options: ["Sensitive", "Annoying", "Jealous", "Polite"], answer: 1 },
      { type: 'mcq', question: "To direct your eyes towards something means to:", options: ["look at", "listen to", "wait for", "go out with"], answer: 0 },
      { type: 'tf', question: "True or False: We say 'listen at music'.", options: ["True", "False"], answer: 1 },
      { type: 'fill', question: "A man decided to ________ up to me and ask a question.", options: ["look", "listen", "come", "wait"], answer: 2 },
      { type: 'mcq', question: "How do you translate 'beklemek' to English?", options: ["look at", "wait for", "listen to", "come up to"], answer: 1 },
      { type: 'fill', question: "Are you going ________ with him tonight?", options: ["to", "at", "with", "out"], answer: 3 },
      { type: 'mcq', question: "Which verb phrase means 'to approach someone'?", options: ["Listen to", "Come up to", "Go out with", "Wait for"], answer: 1 },
      { type: 'tf', question: "True or False: 'Annoying' translates to 'sinir bozucu'.", options: ["True", "False"], answer: 0 },
      { type: 'fill', question: "I like to ________ to podcasts on my way to work.", options: ["look", "wait", "listen", "come"], answer: 2 },
      { type: 'mcq', question: "What is a short way to ask the same question back to someone?", options: ["And you?", "Look at", "Come up to", "Annoying"], answer: 0 },
      { type: 'tf', question: "True or False: 'Wait for' means to leave a place quickly.", options: ["True", "False"], answer: 1 },
      { type: 'mcq', question: "Which phrase means 'biriyle çıkmak'?", options: ["wait for", "go out with", "come up to", "look at"], answer: 1 },
      { type: 'fill', question: "I am fine. ________ you?", options: ["And", "Are", "Do", "Is"], answer: 0 }
    ],
    readings: [
      { id: 1, title: "Waiting at the Station", content: "I am at the station to **wait for** my train. I usually **listen to** music on my headphones. Suddenly, a very loud man sits next to me. He is very **annoying**. He asks, 'Are you going to London?' I say, 'Yes. **And you?**' He says yes and continues talking loudly.", highlightedWords: ["wait for", "listen to", "annoying", "And you?"], questions: [
        { type: 'mcq', question: "What is the narrator waiting for?", options: ["A bus", "A friend", "A train", "A taxi"], answer: 2 },
        { type: 'mcq', question: "How does the narrator describe the loud man?", options: ["Charming", "Polite", "Annoying", "Smart"], answer: 2 },
        { type: 'tf', question: "True or False: The narrator asks the man if he is going to London.", options: ["True", "False"], answer: 0 }
      ]},
      { id: 2, title: "A Strange Encounter", content: "I am walking in the park. I stop to **look at** some beautiful flowers. Suddenly, a dog decides to **come up to** me. The owner runs over. 'I'm so sorry!' he says. I smile and say, 'It's okay. Are you taking him for a walk?' He replies, 'Yes. **And you?** Are you just relaxing?'", highlightedWords: ["look at", "come up to", "And you?"], questions: [
        { type: 'mcq', question: "What is the narrator looking at?", options: ["A dog", "Flowers", "The sky", "A tree"], answer: 1 },
        { type: 'mcq', question: "What comes up to the narrator?", options: ["A cat", "A bird", "A dog", "A child"], answer: 2 },
        { type: 'tf', question: "True or False: The dog's owner is angry.", options: ["True", "False"], answer: 1 }
      ]},
      { id: 3, title: "Friday Night", content: "It's Friday night and I want to **go out with** my friends. We plan to meet at a cafe. I arrive early, so I sit and **look at** the menu. I **wait for** them for 20 minutes. Finally, they arrive. They are usually very punctual, so this delay is a bit **annoying**.", highlightedWords: ["go out with", "look at", "wait for", "annoying"], questions: [
        { type: 'mcq', question: "Who is the narrator going out with?", options: ["Family", "Friends", "Colleagues", "No one"], answer: 1 },
        { type: 'mcq', question: "What does the narrator look at?", options: ["A book", "The menu", "Their phone", "The window"], answer: 1 },
        { type: 'tf', question: "True or False: The friends are usually late.", options: ["True", "False"], answer: 1 }
      ]}
    ],
    test: [
      { type: 'mcq', question: "Please don't ________ at me like that.", options: ["listen", "wait", "look", "go"], answer: 2 },
      { type: 'mcq', question: "She is waiting ________ the bus.", options: ["to", "at", "with", "for"], answer: 3 },
      { type: 'mcq', question: "He is so ________; he never stops talking loudly.", options: ["annoying", "smart", "easy-going", "polite"], answer: 0 },
      { type: 'mcq', question: "A man decided to come ________ to me on the street.", options: ["up", "down", "in", "out"], answer: 0 },
      { type: 'mcq', question: "Are you going out ________ friends later?", options: ["at", "to", "for", "with"], answer: 3 },
      { type: 'mcq', question: "I love to listen ________ jazz music.", options: ["at", "for", "to", "with"], answer: 2 },
      { type: 'mcq', question: "I am fine. ________ you?", options: ["And", "Are", "Do", "Is"], answer: 0 },
      { type: 'mcq', question: "Which preposition follows 'look'?", options: ["at", "to", "for", "with"], answer: 0 },
      { type: 'mcq', question: "He is ________ for his package to arrive.", options: ["looking", "waiting", "listening", "going"], answer: 1 },
      { type: 'mcq', question: "I'm going ________ with Sarah tonight.", options: ["in", "up", "out", "on"], answer: 2 },
      // Write-in questions
      { type: 'write', question: "Fill in the blank: I love to listen _____ jazz music.", answer: ["to"] },
      { type: 'write', question: "Fill in the blank: He wants to go out _____ her.", answer: ["with"] },
      { type: 'write', question: "Fill in the blank: A stranger came _____ to me.", answer: ["up"] },
      { type: 'write', question: "Fill in the blank: Look _____ that beautiful sunset!", answer: ["at"] },
      { type: 'write', question: "Fill in the blank: I am waiting _____ the train.", answer: ["for"] }
    ]
  },
  3: {
    title: "Day 3: Likes/Dislikes + Verb-ing",
    vocab: VOCAB_DAY_3,
    grammar: {
      title: "Likes & Dislikes + Verb-ing (Gerunds)",
      desc: "When we talk about activities we enjoy or dislike, we often use a verb followed by another verb ending in '-ing'.",
      rules: [
        { label: "Positive feelings", text: "like, love, enjoy + verb-ing", example: "I enjoy reading. She loves spending time outdoors." },
        { label: "Negative feelings", text: "dislike, hate, can't stand + verb-ing", example: "He hates waiting in line. I can't stand listening to loud music." },
        { label: "Neutral", text: "don't mind + verb-ing", example: "I don't mind walking in the rain." }
      ]
    },
    grammarExercises: [
      { type: 'mcq', question: "I really enjoy ________ time with my family.", options: ["spend", "to spend", "spending", "spent"], answer: 2 },
      { type: 'mcq', question: "She hates ________ for the bus in the cold.", options: ["wait", "waiting", "to waiting", "waits"], answer: 1 },
      { type: 'fill', question: "We don't mind ________ early on weekends.", options: ["waking", "wake", "woke", "to wake"], answer: 0 },
      { type: 'fill', question: "He loves ________ to classical music.", options: ["listen", "listening", "listened", "to listening"], answer: 1 },
      { type: 'order', question: "Put in order: reading / enjoy / I / books / night / at", words: ["enjoy", "reading", "books", "I", "at", "night"], answer: ["I", "enjoy", "reading", "books", "at", "night"] },
      { type: 'order', question: "Put in order: waiting / she / hates / line / in", words: ["in", "line", "she", "waiting", "hates"], answer: ["she", "hates", "waiting", "in", "line"] },
      { type: 'mcq', question: "Do you like ________ in the sea?", options: ["swim", "swimming", "swam", "to swimming"], answer: 1 },
      { type: 'mcq', question: "They can't stand ________ early.", options: ["get up", "got up", "getting up", "to getting up"], answer: 2 },
      { type: 'fill', question: "I dislike ________ in heavy traffic.", options: ["drive", "driving", "drove", "driven"], answer: 1 },
      { type: 'fill', question: "She loves ________ to new people.", options: ["talking", "talk", "talked", "to talking"], answer: 0 },
      { type: 'mcq', question: "I don't mind ________ the dishes.", options: ["wash", "washed", "washing", "to wash"], answer: 2 },
      { type: 'mcq', question: "He hates ________ lies.", options: ["tell", "telling", "told", "tells"], answer: 1 }
    ],
    vocabExercises: [
      { type: 'mcq', question: "Someone who always tells the truth is:", options: ["Generous", "Confident", "Honest", "Jealous"], answer: 2 },
      { type: 'mcq', question: "If you give a lot to others, you are:", options: ["Generous", "Sensitive", "Annoying", "Smart"], answer: 0 },
      { type: 'tf', question: "True or False: 'Confident' means being unsure of yourself.", options: ["True", "False"], answer: 1 },
      { type: 'fill', question: "I need to talk ________ the teacher about my grades.", options: ["at", "to", "on", "for"], answer: 1 },
      { type: 'mcq', question: "Which phrase is used to politely introduce a question?", options: ["This must be...", "Nice to meet you.", "What's your name again?", "I'm just wondering."], answer: 3 },
      { type: 'mcq', question: "How do you translate 'zaman harcamak' to English?", options: ["go out with", "spend time on", "wait for", "listen to"], answer: 1 },
      { type: 'tf', question: "True or False: 'Jealous' means you are happy for someone.", options: ["True", "False"], answer: 1 },
      { type: 'fill', question: "I usually ________ a lot of time on my hobbies on Sundays.", options: ["spend", "talk", "wait", "listen"], answer: 0 },
      { type: 'mcq', question: "Which word means 'kendine güvenen' in Turkish?", options: ["Honest", "Generous", "Confident", "Jealous"], answer: 2 },
      { type: 'tf', question: "True or False: 'Honest' means someone who lies a lot.", options: ["True", "False"], answer: 1 },
      { type: 'fill', question: "Don't yell at him, he is very ________.", options: ["sensitive", "arrogant", "smart", "generous"], answer: 0 },
      { type: 'mcq', question: "To communicate with someone is to:", options: ["look at", "talk to", "wait for", "come up to"], answer: 1 },
      { type: 'tf', question: "True or False: Generous people like to share.", options: ["True", "False"], answer: 0 }
    ],
    readings: [
      { id: 1, title: "A Confident Speaker", content: "My boss is a very **confident** woman. She loves speaking in public. However, she hates **spending time on** paperwork. I need to **talk to** her about a new project today. '**I'm just wondering**, do you have five minutes?' I ask her. She is always **honest** with her feedback.", highlightedWords: ["confident", "spending time on", "talk to", "I'm just wondering", "honest"], questions: [
        { type: 'mcq', question: "What does the boss love doing?", options: ["Paperwork", "Speaking in public", "Sleeping", "Eating"], answer: 1 },
        { type: 'mcq', question: "What does the narrator need to talk to the boss about?", options: ["A holiday", "A new project", "Lunch", "A problem"], answer: 1 },
        { type: 'tf', question: "True or False: The boss is usually dishonest.", options: ["True", "False"], answer: 1 }
      ]},
      { id: 2, title: "A Generous Friend", content: "Tom is the most **generous** person I know. He enjoys helping people. Yesterday, I wanted to **talk with** him. He was helping a neighbor. Some people get **jealous** of how well-liked he is, but he doesn't mind. He is very **honest** and never expects anything in return.", highlightedWords: ["generous", "talk with", "jealous", "honest"], questions: [
        { type: 'mcq', question: "What does Tom enjoy doing?", options: ["Sleeping", "Helping people", "Reading", "Running"], answer: 1 },
        { type: 'mcq', question: "Why do some people get jealous of Tom?", options: ["Because he is rich", "Because he is well-liked", "Because he is smart", "Because he is tall"], answer: 1 },
        { type: 'tf', question: "True or False: Tom expects people to pay him back.", options: ["True", "False"], answer: 1 }
      ]},
      { id: 3, title: "The Sensitive Artist", content: "Maria is a very **sensitive** artist. She loves painting outdoors. However, she hates it when people **talk to** her while she works. One day, a man approached her. '**I'm just wondering**, what are you painting?' he asked. She didn't want to be rude, but she prefers **spending time on** her art quietly.", highlightedWords: ["sensitive", "talk to", "I'm just wondering", "spending time on"], questions: [
        { type: 'mcq', question: "What does Maria love doing?", options: ["Talking to people", "Painting outdoors", "Singing", "Sleeping"], answer: 1 },
        { type: 'mcq', question: "How does Maria feel when people talk to her while working?", options: ["She loves it", "She hates it", "She doesn't mind", "She is happy"], answer: 1 },
        { type: 'tf', question: "True or False: Maria answered the man rudely.", options: ["True", "False"], answer: 1 }
      ]}
    ],
    test: [
      { type: 'mcq', question: "I enjoy ________ time with my friends.", options: ["spending", "spend", "to spend", "spent"], answer: 0 },
      { type: 'mcq', question: "She is a very ________ person; she never lies.", options: ["generous", "jealous", "honest", "smart"], answer: 2 },
      { type: 'mcq', question: "He hates ________ early in the morning.", options: ["wake", "waking", "to wake", "woke"], answer: 1 },
      { type: 'mcq', question: "I'm just ________, what time does the movie start?", options: ["wondering", "asking", "looking", "talking"], answer: 0 },
      { type: 'mcq', question: "He likes to ________ a lot of time on his garden.", options: ["wait", "look", "spend", "listen"], answer: 2 },
      { type: 'mcq', question: "They love ________ to new restaurants.", options: ["go", "going", "to going", "went"], answer: 1 },
      { type: 'mcq', question: "She gets ________ when her sister gets more attention.", options: ["polite", "jealous", "honest", "generous"], answer: 1 },
      { type: 'mcq', question: "I need to talk ________ you about the meeting.", options: ["at", "to", "in", "on"], answer: 1 },
      { type: 'mcq', question: "He is always ________; he speaks confidently in public.", options: ["confident", "jealous", "sensitive", "shy"], answer: 0 },
      { type: 'mcq', question: "I don't mind ________ you with your homework.", options: ["help", "helping", "to help", "helped"], answer: 1 },
      // Write-in questions
      { type: 'write', question: "Fill in the blank: I enjoy _____ (read) books at night.", answer: ["reading"] },
      { type: 'write', question: "Fill in the blank: She hates _____ (wait) in line.", answer: ["waiting"] },
      { type: 'write', question: "Fill in the blank: I need to talk _____ the manager.", answer: ["to", "with"] },
      { type: 'write', question: "Fill in the blank: She was very _____; she gave us free tickets.", answer: ["generous"] },
      { type: 'write', question: "Fill in the blank: I'm just _____, where is the bathroom?", answer: ["wondering"] }
    ]
  },
  4: {
    title: "Day 4: Grammar Revision & Personalities",
    vocab: VOCAB_DAY_4,
    grammar: {
      title: "Grammar Revision",
      desc: "Let's practice everything we've learned: Present tenses, verbs with prepositions, and gerunds after likes/dislikes.",
      rules: [] // Empty rules block for Day 4
    },
    grammarExercises: [
      { type: 'write', question: "She usually ________ (act) very politely.", answer: ["acts"] },
      { type: 'write', question: "Right now, he ________ (be) very annoying.", answer: ["is being", "'s being"] },
      { type: 'write', question: "I enjoy ________ (listen) to music.", answer: ["listening"] },
      { type: 'write', question: "Look ________ that beautiful car!", answer: ["at"] },
      { type: 'order', question: "Put in order: is / out / going / he / friends / with", words: ["friends", "going", "he", "out", "with", "is"], answer: ["he", "is", "going", "out", "with", "friends"] },
      { type: 'order', question: "Put in order: hate / I / for / waiting / buses", words: ["waiting", "I", "buses", "for", "hate"], answer: ["I", "hate", "waiting", "for", "buses"] },
      { type: 'write', question: "They love ________ (spend) time together.", answer: ["spending"] },
      { type: 'write', question: "A stranger came up ________ me.", answer: ["to"] },
      { type: 'order', question: "Put in order: currently / working / they / are", words: ["working", "they", "currently", "are"], answer: ["they", "are", "currently", "working"] },
      { type: 'write', question: "I don't mind ________ (help) you.", answer: ["helping"] }
    ],
    vocabExercises: [
      { type: 'mcq', question: "What is the opposite of 'modest' or 'humble'?", options: ["Polite", "Arrogant", "Smart", "Big-hearted"], answer: 1 },
      { type: 'tf', question: "True or False: 'Energetic' means you are very tired.", options: ["True", "False"], answer: 1 },
      { type: 'fill', question: "I'm so ________ with names. Could you tell me yours again?", options: ["good", "bad", "sad", "happy"], answer: 1 },
      { type: 'mcq', question: "A person who is 'içi dışı güzel' is:", options: ["Big-hearted", "Beautiful inside and out", "Energetic", "Silly"], answer: 1 },
      { type: 'mcq', question: "If someone is very kind and forgiving, they are:", options: ["Annoying", "Big-hearted", "Arrogant", "Smart"], answer: 1 },
      { type: 'tf', question: "True or False: 'Silly' behavior is usually very serious.", options: ["True", "False"], answer: 1 },
      { type: 'fill', question: "She is always running around; she is so ________.", options: ["silly", "charming", "energetic", "arrogant"], answer: 2 },
      { type: 'mcq', question: "What does 'kibirli' mean in English?", options: ["Silly", "Arrogant", "Big-hearted", "Charming"], answer: 1 },
      { type: 'tf', question: "True or False: A 'big-hearted' person is mean and selfish.", options: ["True", "False"], answer: 1 },
      { type: 'fill', question: "You look like Sarah's sister. This ________ be Emma!", options: ["must", "can", "should", "will"], answer: 0 },
      { type: 'mcq', question: "Which phrase is used to end a conversation politely?", options: ["Arrogant", "Nice talking to you.", "What's your name again?", "This must be..."], answer: 1 },
      { type: 'tf', question: "True or False: Being 'silly' means you are being playful or foolish.", options: ["True", "False"], answer: 0 },
      { type: 'fill', question: "I'm sorry, what's your name ________?", options: ["again", "now", "before", "after"], answer: 0 }
    ],
    readings: [
      { id: 1, title: "The Weekend Getaway", content: "Sarah is usually very easy-going, but today she is acting a bit sensitive. Mark, who is normally very **energetic**, is sleeping. He is a **big-hearted** guy. Jane is telling a **silly** story. Tom is being a bit **arrogant**. 'You look familiar. **This must be** John's friend,' someone says to Tom. Tom replies, 'Yes. **Nice talking to you**,' and walks away.", highlightedWords: ["energetic", "big-hearted", "silly", "arrogant", "This must be", "Nice talking to you"], questions: [
        { type: 'mcq', question: "Why is Sarah acting differently?", options: ["She is energetic.", "She is acting sensitive.", "She is arrogant.", "She is sleeping."], answer: 1 },
        { type: 'mcq', question: "What is Mark doing right now?", options: ["Helping others", "Sleeping", "Acting arrogant", "Telling a story"], answer: 1 },
        { type: 'tf', question: "True or False: Jane is telling a serious story.", options: ["True", "False"], answer: 1 }
      ]},
      { id: 2, title: "A New Colleague", content: "David is shaking hands right now. Emma is watching him. She thinks he is **beautiful inside and out**. The boss comes up to David. 'I'm sorry, **I'm so bad with names**. **What's your name again?**' the boss asks. David laughs, 'I'm David. **Nice talking to you**, sir.' David is not **arrogant** at all.", highlightedWords: ["beautiful inside and out", "I'm so bad with names", "What's your name again?", "Nice talking to you", "arrogant"], questions: [
        { type: 'mcq', question: "What does Emma think of David?", options: ["He is arrogant", "He is beautiful inside and out", "He is silly", "He is annoying"], answer: 1 },
        { type: 'mcq', question: "What problem does the boss have?", options: ["He is bad with names", "He is angry", "He is late", "He is tired"], answer: 0 },
        { type: 'tf', question: "True or False: David is very arrogant.", options: ["True", "False"], answer: 1 }
      ]},
      { id: 3, title: "The Forgetful Host", content: "At the dinner party, the host comes up to me. 'I'm so sorry, **I'm so bad with names**. **What's your name again?**' he asks. I laugh. 'It's okay, I'm Paul.' The host is usually very charming, but right now he is acting a bit **silly** because he forgot everyone's name. He is a **big-hearted** person, though.", highlightedWords: ["I'm so bad with names", "What's your name again?", "silly", "big-hearted"], questions: [
        { type: 'mcq', question: "What problem does the host have?", options: ["He is arrogant.", "He has no food.", "He is bad with names.", "He is jealous."], answer: 2 },
        { type: 'mcq', question: "How is the host acting right now?", options: ["Charming", "Silly", "Energetic", "Annoying"], answer: 1 },
        { type: 'tf', question: "True or False: The host is a big-hearted person.", options: ["True", "False"], answer: 0 }
      ]}
    ],
    test: [
      { type: 'mcq', question: "Look at that baby! She ________ (smile) at you.", options: ["is smiling", "smiles", "smile", "smiled"], answer: 0 },
      { type: 'mcq', question: "I can't stand him. He thinks he is better than everyone else. He is so ________.", options: ["polite", "arrogant", "generous", "easy-going"], answer: 1 },
      { type: 'mcq', question: "A person who is always moving and very active is:", options: ["Energetic", "Silly", "Confident", "Charming"], answer: 0 },
      { type: 'mcq', question: "Why are you ________ so silly today?", options: ["acting", "act", "acts", "acted"], answer: 0 },
      { type: 'mcq', question: "I enjoy ________ time with my friends.", options: ["spending", "spend", "to spend", "spent"], answer: 0 },
      { type: 'mcq', question: "She is perfectly kind and attractive. She is beautiful inside and ________.", options: ["in", "out", "away", "over"], answer: 1 },
      { type: 'mcq', question: "He is waiting ________ the bus.", options: ["to", "at", "for", "with"], answer: 2 },
      { type: 'mcq', question: "I don't mind ________ you with your bags.", options: ["helping", "help", "to help", "helped"], answer: 0 },
      { type: 'mcq', question: "Are you going out ________ them tonight?", options: ["to", "at", "with", "for"], answer: 2 },
      { type: 'mcq', question: "You look exactly like the photos. This ________ be Sarah!", options: ["must", "can", "should", "will"], answer: 0 },
      // Write-in questions
      { type: 'write', question: "Fill in the blank: Stop being so _____! Be serious for a minute.", answer: ["silly"] },
      { type: 'write', question: "Fill in the blank: She is beautiful inside and _____.", answer: ["out"] },
      { type: 'write', question: "Fill in the blank: I'm so _____ with names, I forgot yours.", answer: ["bad"] },
      { type: 'write', question: "Fill in the blank: Right now, he _____ (to be) being very arrogant.", answer: ["is", "'s"] },
      { type: 'write', question: "Fill in the blank: I'm sorry, what's your name _____?", answer: ["again"] }
    ]
  }
};

export default function App() {
  const [currentDay, setCurrentDay] = useState(1);
  const [activeTab, setActiveTab] = useState('grammar');

  // Compute cumulative vocabulary up to currentDay
  const cumulativeVocab = [];
  for (let i = 1; i <= currentDay; i++) {
    cumulativeVocab.push(...CURRICULUM[i].vocab);
  }

  const dayData = {
    ...CURRICULUM[currentDay],
    readings: UPGRADED_READINGS[currentDay],
    listening: LISTENING_TASKS[currentDay],
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'grammar':
        return <GrammarSection grammarData={dayData.grammar} exercises={dayData.grammarExercises} />;
      case 'flashcards':
        return <FlashcardsStacked vocabulary={cumulativeVocab} />;
      case 'vocab-exercises':
        return <QuizEngine title={`Day ${currentDay} Vocab Exercises`} questions={dayData.vocabExercises} />;
      case 'reading':
        return <ReadingSection readings={dayData.readings} />;
      case 'listening':
        return <ListeningSection task={dayData.listening} />;
      case 'test':
        return <QuizEngine title={`Day ${currentDay} Final Test`} questions={dayData.test} />;
      default:
        return <GrammarSection grammarData={dayData.grammar} exercises={dayData.grammarExercises} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 pb-12">
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 shadow-md">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Brain className="w-8 h-8 text-blue-200" />
              <h1 className="text-2xl font-bold tracking-tight">Personality & Tenses Hub</h1>
            </div>
            <p className="text-blue-100 text-sm md:text-base font-medium">Master Adjectives & Present Tenses</p>
          </div>
          
          {/* Day Selector */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {[1, 2, 3, 4].map(day => (
              <button
                key={day}
                onClick={() => {
                  setCurrentDay(day);
                  setActiveTab('grammar'); // Reset tab when changing day
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all shadow-sm
                  ${currentDay === day 
                    ? 'bg-white text-blue-800 ring-2 ring-blue-300 ring-offset-2 ring-offset-blue-700' 
                    : 'bg-blue-800/50 text-blue-100 hover:bg-blue-700/80 border border-blue-600/50'
                  }`}
              >
                <Calendar className="w-4 h-4" />
                Day {day}
              </button>
            ))}
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto flex overflow-x-auto no-scrollbar px-2 sm:px-0">
          <TabButton id="grammar" label="Grammar" icon={<BookOpen className="w-4 h-4" />} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton id="flashcards" label="Flashcards" icon={<Layers className="w-4 h-4" />} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton id="vocab-exercises" label="Vocab Exercises" icon={<HelpCircle className="w-4 h-4" />} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton id="reading" label="Reading" icon={<BookOpen className="w-4 h-4" />} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton id="listening" label="Listening" icon={<Headphones className="w-4 h-4" />} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton id="test" label="Final Test" icon={<CheckCircle className="w-4 h-4" />} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 md:p-10 min-h-[60vh] transition-all duration-300 relative overflow-hidden">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
}

function TabButton({ id, label, icon, activeTab, setActiveTab }) {
  const isActive = activeTab === id;
  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base transition-colors whitespace-nowrap border-b-2
        ${isActive 
          ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
          : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
        }`}
    >
      {icon}
      {label}
    </button>
  );
}

function GrammarSection({ grammarData, exercises }) {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">{grammarData.title}</h2>
        {grammarData.desc && <p className="text-slate-600 text-lg">{grammarData.desc}</p>}
      </div>

      {grammarData.rules && grammarData.rules.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {grammarData.rules.map((rule, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm relative overflow-hidden">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span className="bg-blue-200 text-blue-800 p-1.5 rounded-md text-xs">Rule</span>
                {rule.label}
              </h3>
              <p className="text-slate-700 mb-4 font-medium">{rule.text}</p>
              <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-inner">
                 <div className="flex gap-2 items-start">
                   <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                   <p className="text-slate-800 italic">"{rule.example}"</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pt-8 border-t border-slate-200 mt-12">
        <QuizEngine title="Grammar Practice" questions={exercises} hideTitleBorder={true} />
      </div>
    </div>
  );
}

function FlashcardsStacked({ vocabulary }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset index if vocabulary changes (e.g., day changes)
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [vocabulary]);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
    }, 150);
  };

  if (!vocabulary || vocabulary.length === 0) return <div>No vocabulary loaded.</div>;

  const currentCard = vocabulary[currentIndex];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col items-center max-w-2xl mx-auto min-h-[500px]">
      <div className="mb-6 text-center w-full flex justify-between items-end">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-1">Vocabulary Stack</h2>
          <p className="text-slate-500 text-sm">Click the card to flip. Vocabulary is cumulative!</p>
        </div>
        <div className="text-slate-400 font-semibold text-lg">
          {currentIndex + 1} / {vocabulary.length}
        </div>
      </div>
      
      <div 
        className="relative w-full h-[350px] cursor-pointer perspective-1000 group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front (English) */}
          <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
             <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">ENGLISH</div>
             <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-4 capitalize">{currentCard.word}</h3>
             <p className="text-slate-600 text-lg mb-6 italic">"{currentCard.engDesc}"</p>
             <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 w-full">
               <p className="text-slate-700 font-medium">{currentCard.engExample}</p>
             </div>
          </div>
          
          {/* Back (Turkish) */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 bg-blue-600 text-white border-2 border-blue-700 rounded-2xl shadow-lg text-center">
             <div className="absolute top-4 right-4 bg-blue-800 text-blue-100 text-xs font-bold px-2 py-1 rounded">TÜRKÇE</div>
             <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 capitalize">{currentCard.trWord}</h3>
             <p className="text-blue-100 text-lg mb-6 italic">"{currentCard.trDesc}"</p>
             <div className="bg-blue-700/50 p-4 rounded-lg border border-blue-500 w-full">
               <p className="text-white font-medium">{currentCard.trExample}</p>
             </div>
          </div>

        </div>

        {/* Decorative stacked cards effect underneath */}
        <div className="absolute -z-10 w-[95%] h-full bg-slate-100 border border-slate-200 rounded-2xl top-3 left-1/2 -translate-x-1/2 shadow-sm"></div>
        <div className="absolute -z-20 w-[90%] h-full bg-slate-50 border border-slate-200 rounded-2xl top-6 left-1/2 -translate-x-1/2 shadow-sm"></div>
      </div>

      <div className="flex gap-4 mt-12 w-full justify-center">
        <button 
          onClick={handlePrev}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all font-semibold shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" /> Previous
        </button>
        <button 
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg"
        >
          Next <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
}

function ReadingSection({ readings }) {
  const formatText = (text, highlightedWords) => {
    let formattedText = text;
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<span class="text-indigo-700 font-bold">$1</span>');
    highlightedWords.forEach(word => {
      // Escape word for regex just in case
      const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
      formattedText = formattedText.replace(regex, `<span class="bg-yellow-100 text-yellow-800 font-semibold px-1 rounded border-b-2 border-yellow-300">$&</span>`);
    });
    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Reading Practice</h2>
        <p className="text-slate-500">Read the texts and answer the questions below them.</p>
      </div>

      {readings.map((text, idx) => (
        <div key={text.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 border-b border-slate-200 p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-500" />
              Text {idx + 1}: {text.title}
            </h3>
          </div>
          <div className="p-6 md:p-8 text-slate-700 text-lg leading-relaxed border-b border-slate-100 bg-white whitespace-pre-line">
            {formatText(text.content, text.highlightedWords)}
          </div>
          <div className="bg-slate-50 p-6 md:p-8">
             <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
               <HelpCircle className="w-5 h-5 text-indigo-500"/> Comprehension Questions
             </h4>
             <QuizEngine title="" questions={text.questions} isSubQuiz={true} />
          </div>
        </div>
      ))}
    </div>
  );
}

function QuizEngine({ title, questions, hideTitleBorder = false, isSubQuiz = false }) {
  const [answers, setAnswers] = useState({});
  const [orderAnswers, setOrderAnswers] = useState({});
  const [textAnswers, setTextAnswers] = useState({}); // For fill in the blanks
  
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Reset internal state if questions array changes (e.g., when day changes)
  useEffect(() => {
    handleReset();
  }, [questions]);

  const handleSelect = (qIndex, oIndex) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIndex]: oIndex }));
  };

  const handleOrderSelect = (qIndex, word) => {
    if (submitted) return;
    setOrderAnswers(prev => {
      const currentOrder = prev[qIndex] || [];
      if (currentOrder.includes(word)) {
        return { ...prev, [qIndex]: currentOrder.filter(w => w !== word) };
      } else {
        return { ...prev, [qIndex]: [...currentOrder, word] };
      }
    });
  };

  const handleTextChange = (qIndex, val) => {
    if (submitted) return;
    setTextAnswers(prev => ({ ...prev, [qIndex]: val }));
  };

  const handleSubmit = () => {
    let currentScore = 0;
    questions.forEach((q, i) => {
      if (q.type === 'order') {
        const userOrder = orderAnswers[i] || [];
        if (JSON.stringify(userOrder) === JSON.stringify(q.answer)) {
          currentScore++;
        }
      } else if (q.type === 'write') {
        const userAns = (textAnswers[i] || "").trim().toLowerCase();
        const correctAnswers = Array.isArray(q.answer) 
          ? q.answer.map(a => a.toLowerCase()) 
          : [q.answer.toLowerCase()];
        
        if (correctAnswers.includes(userAns)) {
          currentScore++;
        }
      } else {
        if (answers[i] === q.answer) currentScore++;
      }
    });
    setScore(currentScore);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setOrderAnswers({});
    setTextAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const allAnswered = questions.every((q, i) => {
    if (q.type === 'order') {
      return (orderAnswers[i] && orderAnswers[i].length === q.words.length);
    } else if (q.type === 'write') {
      return (textAnswers[i] && textAnswers[i].trim().length > 0);
    }
    return answers[i] !== undefined;
  });

  return (
    <div className={`w-full mx-auto animate-in fade-in duration-500 ${isSubQuiz ? '' : 'max-w-3xl'}`}>
      {title && (
        <h2 className={`text-2xl font-bold text-slate-800 mb-6 ${hideTitleBorder ? '' : 'border-b pb-4'}`}>{title}</h2>
      )}
      
      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          
          let qStatus = 'unanswered';
          if (submitted) {
             if (q.type === 'order') {
                const userOrder = orderAnswers[qIndex] || [];
                qStatus = JSON.stringify(userOrder) === JSON.stringify(q.answer) ? 'correct' : 'wrong';
             } else if (q.type === 'write') {
                const userAns = (textAnswers[qIndex] || "").trim().toLowerCase();
                const correctAnswers = Array.isArray(q.answer) ? q.answer.map(a => a.toLowerCase()) : [q.answer.toLowerCase()];
                qStatus = correctAnswers.includes(userAns) ? 'correct' : 'wrong';
             } else {
                qStatus = answers[qIndex] === q.answer ? 'correct' : 'wrong';
             }
          }

          let containerStyle = "bg-white border-slate-200 shadow-sm";
          if (qStatus === 'correct') containerStyle = "bg-green-50 border-green-200";
          if (qStatus === 'wrong') containerStyle = "bg-red-50 border-red-200";

          return (
            <div key={qIndex} className={`p-5 sm:p-6 rounded-xl border ${containerStyle}`}>
              <h4 className="font-semibold text-lg text-slate-800 mb-4 flex items-start gap-2">
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-sm shrink-0 mt-0.5">{qIndex + 1}</span>
                {q.question}
              </h4>
              
              {/* Multiple Choice, True/False, Fill in blanks (options array) */}
              {(q.type === 'mcq' || q.type === 'tf' || q.type === 'fill') && (
                <div className="space-y-3">
                  {q.options.map((opt, oIndex) => {
                    const isSelected = answers[qIndex] === oIndex;
                    const showCorrect = submitted && oIndex === q.answer;
                    const showWrong = submitted && isSelected && oIndex !== q.answer;

                    let btnStyle = "border-slate-200 bg-white hover:bg-slate-50 text-slate-700";
                    if (isSelected && !submitted) btnStyle = "border-blue-500 bg-blue-50 text-blue-800 ring-1 ring-blue-500";
                    if (showCorrect) btnStyle = "border-green-500 bg-green-500 text-white font-medium";
                    if (showWrong) btnStyle = "border-red-500 bg-red-500 text-white font-medium";

                    return (
                      <button
                        key={oIndex}
                        onClick={() => handleSelect(qIndex, oIndex)}
                        disabled={submitted}
                        className={`w-full text-left px-5 py-3 rounded-lg border transition-all ${btnStyle} ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Sentence Ordering */}
              {q.type === 'order' && (
                <div className="space-y-4">
                  <div className="min-h-[50px] p-3 border-2 border-dashed border-slate-300 rounded-lg flex flex-wrap gap-2 bg-slate-50/50">
                    {(orderAnswers[qIndex] || []).map((word, wIndex) => (
                       <button 
                        key={`sel-${wIndex}`}
                        onClick={() => handleOrderSelect(qIndex, word)}
                        disabled={submitted}
                        className={`px-3 py-1.5 bg-blue-100 text-blue-800 rounded shadow-sm border border-blue-200 font-medium ${submitted ? 'cursor-default' : 'cursor-pointer hover:bg-blue-200'}`}
                       >
                         {word}
                       </button>
                    ))}
                    {!(orderAnswers[qIndex] && orderAnswers[qIndex].length > 0) && (
                      <span className="text-slate-400 italic text-sm self-center px-2">Click words below to build sentence...</span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {q.words.map((word, wIndex) => {
                      const isSelected = (orderAnswers[qIndex] || []).includes(word);
                      if (isSelected) return null;
                      
                      return (
                        <button
                          key={`pool-${wIndex}`}
                          onClick={() => handleOrderSelect(qIndex, word)}
                          disabled={submitted}
                          className={`px-3 py-1.5 bg-white text-slate-700 rounded shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors ${submitted ? 'cursor-default opacity-50' : 'cursor-pointer'}`}
                        >
                          {word}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Write In (Text Input) */}
              {q.type === 'write' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={textAnswers[qIndex] || ''}
                    onChange={(e) => handleTextChange(qIndex, e.target.value)}
                    disabled={submitted}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all
                      ${submitted && qStatus === 'correct' ? 'border-green-500 bg-green-50 text-green-900' : ''}
                      ${submitted && qStatus === 'wrong' ? 'border-red-500 bg-red-50 text-red-900' : ''}
                      ${!submitted ? 'border-slate-300 focus:ring-blue-500 focus:border-blue-500' : ''}
                    `}
                    placeholder="Type your answer here..."
                  />
                </div>
              )}

              {/* Feedback Message */}
              {submitted && qStatus === 'wrong' && (
                <div className="mt-4 text-sm text-red-700 bg-red-100/50 p-3 rounded-md border border-red-200 flex flex-col gap-1">
                  <span className="font-bold flex items-center gap-1"><HelpCircle className="w-4 h-4"/> Correct Answer:</span> 
                  <span className="font-mono text-base ml-5">
                    {q.type === 'order' 
                      ? q.answer.join(" ") 
                      : q.type === 'write' 
                        ? (Array.isArray(q.answer) ? q.answer.join(" OR ") : q.answer)
                        : q.options[q.answer]
                    }
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-8 py-3 rounded-xl font-bold text-white transition-all shadow-md w-full sm:w-auto ${allAnswered ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg' : 'bg-slate-300 cursor-not-allowed'}`}
          >
            Submit Answers
          </button>
        ) : (
          <div className="flex flex-col sm:flex-row items-center w-full justify-between gap-4">
            <div className={`text-xl font-bold px-6 py-3 rounded-xl border shadow-sm w-full sm:w-auto text-center ${score === questions.length ? 'bg-green-100 border-green-300 text-green-800' : 'bg-white border-slate-200 text-slate-800'}`}>
              Your Score: <span className={score === questions.length ? 'text-green-700' : 'text-blue-600'}>{score} / {questions.length}</span>
            </div>
            <button
              onClick={handleReset}
              className="flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors w-full sm:w-auto"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ListeningSection({ task }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center">
        <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center">
          <Headphones className="w-7 h-7" />
        </div>
        <span className="inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide">{task.level}</span>
        <h2 className="text-3xl font-bold text-slate-800 mt-3">{task.title}</h2>
        <p className="text-slate-500 mt-2">{task.instructions}</p>
      </div>

      <div className="bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-700">{task.source}</p>
          <h3 className="text-xl font-bold text-slate-800 mt-1">Focus: {task.focus}</h3>
          <p className="text-slate-600 mt-3">Listen twice, then return here to complete the questions.</p>
        </div>
        <a href={task.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-violet-700 text-white font-bold hover:bg-violet-800 transition-colors shadow-md">
          Open listening <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Listening Check</h3>
        <QuizEngine title="" questions={task.questions} isSubQuiz={true} />
      </div>
    </div>
  );
}
