export const LISTENING_TASKS = {
  1: {
    level: 'A2 · Natural English',
    title: 'My Day',
    source: 'ELLLO · Views #1554',
    url: 'https://www.elllo.org/english/1551/1554-Nat-Verbs-Schedule.htm',
    focus: 'Present simple routines and details about a teacher’s day',
    instructions: 'Listen once without the script and choose the main details. Listen again with the script open and notice the present-simple verbs.',
    questions: [
      { type: 'mcq', question: 'What time does Natalie wake up?', options: ['At 6:00', 'At 7:00', 'At 7:30', 'At 9:00'], answer: 1 },
      { type: 'mcq', question: 'What does she prefer to drink in the morning?', options: ['Coffee', 'Tea', 'Orange juice', 'Hot chocolate'], answer: 3 },
      { type: 'mcq', question: 'How many classes does she have in the morning?', options: ['Two', 'Three', 'Four', 'Five'], answer: 1 },
      { type: 'tf', question: 'True or False: Natalie usually eats lunch away from school.', options: ['True', 'False'], answer: 1 },
      { type: 'mcq', question: 'What does she often do after getting home?', options: ['She goes running.', 'She changes into pajamas and watches TV.', 'She prepares lessons.', 'She meets students.'], answer: 1 }
    ]
  },
  2: {
    level: 'A2 · Natural English',
    title: 'Days of the Week',
    source: 'ELLLO · Views #1558',
    url: 'https://www.elllo.org/english/1551/1558-Meg-Days-of-Week.htm',
    focus: 'Weekly routines, time expressions and prepositions',
    instructions: 'First listen for the speakers’ weekly schedules. On the second listen, write down phrases with on, in and at.',
    questions: [
      { type: 'mcq', question: 'Which day is Meg’s busiest day?', options: ['Monday', 'Wednesday', 'Thursday', 'Saturday'], answer: 2 },
      { type: 'mcq', question: 'When does Todd do his boring activities?', options: ['On Friday', 'On Saturday', 'On Sunday', 'On Wednesday'], answer: 1 },
      { type: 'mcq', question: 'What does Meg do on Sunday morning?', options: ['She goes hiking.', 'She goes to church.', 'She plays futsal.', 'She teaches a class.'], answer: 1 },
      { type: 'tf', question: 'True or False: Todd works at school on Wednesdays.', options: ['True', 'False'], answer: 1 },
      { type: 'mcq', question: 'What does Todd do on Tuesday nights?', options: ['He plays futsal.', 'He meets friends for dinner.', 'He cleans his apartment.', 'He studies Japanese.'], answer: 0 }
    ]
  },
  3: {
    level: 'A2 · Natural English',
    title: 'Likes and Favorites',
    source: 'ELLLO · Views #1553',
    url: 'https://www.elllo.org/english/1551/1553-Natalie-Likes-Favorites.htm',
    focus: 'Likes, dislikes, preferences and activities',
    instructions: 'Listen once for the topics they discuss. Listen again and notice how Natalie explains the reasons for her preferences.',
    questions: [
      { type: 'mcq', question: 'What is Natalie’s favorite color?', options: ['Blue', 'Purple', 'Green', 'Red'], answer: 1 },
      { type: 'mcq', question: 'Why does she prefer thin pizza?', options: ['It is cheaper.', 'It has no cheese.', 'She can have more toppings without feeling too full.', 'She makes it herself.'], answer: 2 },
      { type: 'mcq', question: 'Why does Natalie like winter?', options: ['She loves the snow.', 'She likes cold rain.', 'She stays indoors.', 'She dislikes summer sports.'], answer: 0 },
      { type: 'mcq', question: 'How often is she taking tennis lessons?', options: ['Every day', 'Once a month', 'About twice a week', 'Only in winter'], answer: 2 },
      { type: 'tf', question: 'True or False: Natalie says she prefers serious films to comedies.', options: ['True', 'False'], answer: 1 }
    ]
  },
  4: {
    level: 'A2 · Natural English',
    title: 'Guess the Celebrity',
    source: 'ELLLO · Views #1559',
    url: 'https://www.elllo.org/english/1551/1559-Shantel-SubjectPronoun-Celebrities.htm',
    focus: 'Describing people and making deductions from clues',
    instructions: 'Listen without reading and try to guess each person. Then use the script to collect the adjectives and facts that helped you.',
    questions: [
      { type: 'mcq', question: 'Who is the first celebrity they guess?', options: ['Beyoncé', 'Taylor Swift', 'Jackie Chan', 'Lionel Messi'], answer: 1 },
      { type: 'mcq', question: 'Which clues describe Lionel Messi?', options: ['American and a singer', 'Argentinian and a footballer', 'Jamaican and a runner', 'Funny and in martial-arts films'], answer: 1 },
      { type: 'mcq', question: 'How is Jackie Chan described?', options: ['Funny and good at martial arts', 'Young and blonde', 'Arrogant and slow', 'A famous rapper'], answer: 0 },
      { type: 'tf', question: 'True or False: The speakers describe Beyoncé as married to a famous rapper.', options: ['True', 'False'], answer: 0 },
      { type: 'mcq', question: 'Which person is from Jamaica and runs very fast?', options: ['Lionel Messi', 'Jackie Chan', 'Usain Bolt', 'Cristiano Ronaldo'], answer: 2 }
    ]
  }
};

export const UPGRADED_READINGS = {
  1: [
    {
      id: 'd1-r1',
      title: 'The New Project Partner',
      content: `When Lena first meets Daniel at work, she thinks he is quiet and rather serious. He speaks politely, listens carefully, and does not say much about himself. Because of this, Lena decides that he is probably shy. However, during their first project meeting, she notices a different side of his personality.

Daniel is leading the meeting today because their manager is away. He is explaining the plan clearly, answering difficult questions, and encouraging everyone to share ideas. He normally works quietly at his desk, but today he is being energetic and confident. Lena realizes that his usual calm behavior does not mean that he lacks confidence.

During the lunch break, Daniel tells her that he enjoys meeting new people, although he needs time to feel comfortable in a new group. Lena understands that first impressions can be incomplete. A person’s permanent character and their behavior in one particular situation are not always the same. By the end of the day, she sees Daniel as thoughtful, capable, and easy-going rather than simply shy.`,
      highlightedWords: ['politely', 'shy', 'energetic', 'confident', 'easy-going'],
      questions: [
        { type: 'mcq', question: 'Why does Lena initially think Daniel is shy?', options: ['He refuses to work.', 'He speaks quietly and says little about himself.', 'He arrives late.', 'He dislikes the project.'], answer: 1 },
        { type: 'mcq', question: 'Why is Daniel leading the meeting today?', options: ['He is the new manager.', 'The manager is away.', 'Lena asks him to leave.', 'The team is very small.'], answer: 1 },
        { type: 'mcq', question: 'What does Lena learn about first impressions?', options: ['They are always correct.', 'Quiet people cannot be confident.', 'One situation may not show a person’s full character.', 'Personality changes every day.'], answer: 2 },
        { type: 'tf', question: 'True or False: Daniel usually behaves energetically at his desk.', options: ['True', 'False'], answer: 1 },
        { type: 'mcq', question: 'Which sentence describes temporary behavior?', options: ['Daniel is thoughtful.', 'Daniel enjoys meeting people.', 'Daniel is leading the meeting today.', 'Daniel needs time in new groups.'], answer: 2 }
      ]
    },
    {
      id: 'd1-r2',
      title: 'A Different Side of Mrs Grant',
      content: `Mrs Grant teaches history at a secondary school. Her students usually describe her as organized, fair, and calm. She begins every lesson on time and explains difficult ideas with simple examples. She rarely raises her voice, even when the class is noisy.

This week, however, the school is preparing for an international visitor. Mrs Grant is arranging a welcome event, so her routine is completely different. She is running between classrooms, speaking quickly on the phone, and asking students to help with decorations. Some students think she is being impatient, but she is actually worried that the event will not be ready on time.

On Friday, the visitor arrives and everything goes well. Mrs Grant thanks the students for their hard work and gives them extra time to talk to the guest. The class understands that she is not normally impatient; she was simply behaving differently under pressure. They also discover that she is charming with visitors and surprisingly funny when she is not concentrating on a lesson plan.`,
      highlightedWords: ['organized', 'calm', 'impatient', 'under pressure', 'charming'],
      questions: [
        { type: 'mcq', question: 'How does Mrs Grant usually behave?', options: ['Calmly and fairly', 'Impatiently and rudely', 'Nervously and quietly', 'Carelessly'], answer: 0 },
        { type: 'mcq', question: 'Why is her routine different this week?', options: ['She is changing schools.', 'She is preparing a welcome event.', 'Her students have an exam.', 'She is learning history.'], answer: 1 },
        { type: 'mcq', question: 'What causes some students to misunderstand her behavior?', options: ['She is under pressure and speaks quickly.', 'She cancels the event.', 'She refuses their help.', 'She dislikes the visitor.'], answer: 0 },
        { type: 'tf', question: 'True or False: The welcome event is unsuccessful.', options: ['True', 'False'], answer: 1 },
        { type: 'mcq', question: 'What surprising quality do the students notice?', options: ['She is lazy.', 'She is funny.', 'She is jealous.', 'She is dishonest.'], answer: 1 }
      ]
    }
  ],
  2: [
    {
      id: 'd2-r1',
      title: 'Waiting for the Right Conversation',
      content: `Arda has recently started working in a busy design office. He likes the job, but he is still learning how people communicate there. On Monday morning, he needs to talk to his manager about a new idea. He goes up to her desk, but she is speaking to an important client, so he decides to wait for a better moment.

At lunchtime, Arda looks at his notes and tries to organize his explanation. He wants to ask for more time on the project because the team is waiting for information from another company. His colleague Nina listens to his plan and suggests a clearer way to present it. She reminds him to focus on the solution, not only the problem.

In the afternoon, the manager comes up to Arda and asks about the project. He explains the delay calmly and shows her the revised schedule. She listens to him carefully and agrees to the change. Arda learns that choosing the right moment and preparing a clear message can make a difficult conversation much easier.`,
      highlightedWords: ['talk to', 'wait for', 'looks at', 'listens to', 'comes up to'],
      questions: [
        { type: 'mcq', question: 'Why does Arda wait before speaking to his manager?', options: ['She is talking to a client.', 'He has lost his notes.', 'The project is finished.', 'Nina asks him to leave.'], answer: 0 },
        { type: 'mcq', question: 'What information is the team waiting for?', options: ['A new office address', 'Information from another company', 'The manager’s phone number', 'A lunch order'], answer: 1 },
        { type: 'mcq', question: 'What advice does Nina give?', options: ['Ignore the delay.', 'Focus on a solution.', 'Cancel the project.', 'Send no message.'], answer: 1 },
        { type: 'tf', question: 'True or False: The manager refuses to change the schedule.', options: ['True', 'False'], answer: 1 },
        { type: 'mcq', question: 'What is the main lesson of the text?', options: ['All delays are avoidable.', 'Preparation improves difficult conversations.', 'Managers dislike questions.', 'Emails are always better than speaking.'], answer: 1 }
      ]
    },
    {
      id: 'd2-r2',
      title: 'A Friday Plan That Changed',
      content: `Mina plans to go out with two friends on Friday evening. They agree to meet at a small restaurant near the station at seven o’clock. Mina arrives early and looks at the menu while she waits for them. At seven fifteen, nobody has arrived, and she begins to feel annoyed.

She sends a message to the group. One friend replies immediately and explains that the underground has stopped because of a technical problem. The other friend is waiting for a bus in heavy traffic. Instead of complaining, Mina looks for another solution. She calls a café near their neighborhood and asks whether it has a free table later that evening.

The friends finally meet at eight thirty. Their original plan has changed, but they still enjoy the evening. They talk about how a short message can prevent misunderstandings. Mina admits that she was annoyed because she did not know what was happening, not because her friends were late. Next time, they decide to contact one another as soon as a problem begins.`,
      highlightedWords: ['go out with', 'looks at', 'waits for', 'annoyed', 'contact'],
      questions: [
        { type: 'mcq', question: 'Where do the friends originally plan to meet?', options: ['At a café near home', 'At a restaurant near the station', 'At Mina’s office', 'At a bus stop'], answer: 1 },
        { type: 'mcq', question: 'Why is one friend delayed?', options: ['The underground has stopped.', 'She forgets the plan.', 'The café is closed.', 'She is still working.'], answer: 0 },
        { type: 'mcq', question: 'What does Mina do instead of continuing to complain?', options: ['She goes home.', 'She finds another meeting place.', 'She cancels the evening.', 'She waits without messaging.'], answer: 1 },
        { type: 'tf', question: 'True or False: Mina is mainly upset because she has no information.', options: ['True', 'False'], answer: 0 },
        { type: 'mcq', question: 'What do the friends decide to do in future?', options: ['Never use public transport.', 'Always meet before seven.', 'Communicate quickly when a problem starts.', 'Avoid restaurants.'], answer: 2 }
      ]
    }
  ],
  3: [
    {
      id: 'd3-r1',
      title: 'Finding Time for What Matters',
      content: `Elif enjoys learning new skills, but her working week is often crowded. She used to spend most evenings watching short videos because she felt too tired to begin anything serious. Although the videos helped her relax, she was disappointed that she never made progress on the hobbies she talked about.

At the beginning of the year, Elif chose two activities that genuinely mattered to her: photography and Italian. She dislikes following strict schedules, so she created a flexible routine. She spends twenty minutes on Italian before breakfast three times a week, and she takes photographs during one long walk at the weekend.

After two months, the routine is becoming natural. Elif still enjoys watching videos, but she no longer lets them fill every free moment. She has also joined an online photography group, where members give honest but friendly feedback. She sometimes feels sensitive about criticism, yet she knows it helps her improve. Elif has learned that enjoying an activity is important, but making regular time for it is what turns an interest into a real skill.`,
      highlightedWords: ['spend', 'dislikes', 'enjoys', 'honest', 'sensitive'],
      questions: [
        { type: 'mcq', question: 'Why was Elif disappointed with her old evenings?', options: ['She worked too much.', 'She made little progress on her hobbies.', 'She disliked all videos.', 'She had no internet.'], answer: 1 },
        { type: 'mcq', question: 'Why does she use a flexible routine?', options: ['She dislikes strict schedules.', 'She has stopped working.', 'Her teacher requires it.', 'Photography is easy.'], answer: 0 },
        { type: 'mcq', question: 'How does the photography group help her?', options: ['It buys her equipment.', 'It gives useful feedback.', 'It teaches Italian.', 'It plans her weekends.'], answer: 1 },
        { type: 'tf', question: 'True or False: Elif has completely stopped watching videos.', options: ['True', 'False'], answer: 1 },
        { type: 'mcq', question: 'What is the writer’s main point?', options: ['Talent is more important than practice.', 'Regular time helps an interest become a skill.', 'Hobbies should always be competitive.', 'Criticism should be avoided.'], answer: 1 }
      ]
    },
    {
      id: 'd3-r2',
      title: 'The Community Garden Team',
      content: `A group of neighbors has turned an empty area behind their building into a community garden. Some members love growing vegetables, while others prefer designing quiet places to sit. Hasan enjoys doing practical work and does not mind carrying heavy bags of soil. Nora loves planning, but she hates waiting for people who arrive late.

At first, their different personalities cause small problems. Nora gives instructions confidently, and some people think she is being arrogant. Hasan rarely explains his ideas, so the others sometimes believe he is not interested. During a team meeting, they decide to talk honestly about how they prefer to work.

The conversation changes the group. Nora begins asking for opinions before making decisions, and Hasan starts sharing his ideas more clearly. They discover that both of them are generous with their time and want the same result. By the end of spring, the garden has vegetables, flowers, and a comfortable table where neighbors can talk with one another. Their differences have not disappeared, but they now use those differences to make the project stronger.`,
      highlightedWords: ['enjoys', 'does not mind', 'hates waiting', 'arrogant', 'generous'],
      questions: [
        { type: 'mcq', question: 'What practical work does Hasan enjoy?', options: ['Writing instructions', 'Carrying soil', 'Designing posters', 'Cooking vegetables'], answer: 1 },
        { type: 'mcq', question: 'Why do some members misunderstand Nora?', options: ['She arrives late.', 'Her confident instructions seem arrogant.', 'She avoids planning.', 'She refuses to work.'], answer: 1 },
        { type: 'mcq', question: 'What improves the team?', options: ['A larger budget', 'An honest conversation', 'A new manager', 'Fewer members'], answer: 1 },
        { type: 'tf', question: 'True or False: Hasan and Nora discover that they want different results.', options: ['True', 'False'], answer: 1 },
        { type: 'mcq', question: 'How does the group use personality differences in the end?', options: ['To make the project stronger', 'To choose a winner', 'To avoid communication', 'To end the garden project'], answer: 0 }
      ]
    }
  ],
  4: [
    {
      id: 'd4-r1',
      title: 'Remembering More Than a Name',
      content: `At a professional event, Derya meets dozens of people in one evening. She is usually good at starting conversations, but remembering every name is difficult. When she meets someone for the second time, she sometimes says, “I’m sorry, I’m so bad with names. What’s your name again?” Most people respond kindly because the question is honest and polite.

Derya begins using a simple strategy. After each introduction, she repeats the person’s name and connects it to one detail from the conversation. She remembers “Marta—mountain hiking” and “Kerem—children’s books.” Later, these details help her continue the conversation instead of asking only general questions.

Near the end of the event, Derya recognizes a woman she met earlier. “This must be Leyla, the architect who loves old buildings,” she thinks. She is correct. Leyla is impressed that Derya remembers both her name and her interest. Their second conversation feels warmer and more natural. Derya realizes that remembering a personal detail shows genuine attention; it is more meaningful than simply remembering a name.`,
      highlightedWords: ['I’m so bad with names', 'What’s your name again?', 'honest', 'This must be', 'genuine attention'],
      questions: [
        { type: 'mcq', question: 'Why do people usually react kindly when Derya forgets a name?', options: ['She changes the subject.', 'Her question is honest and polite.', 'They have also forgotten her.', 'She leaves immediately.'], answer: 1 },
        { type: 'mcq', question: 'What is Derya’s memory strategy?', options: ['Write every name on her hand.', 'Connect each name with a personal detail.', 'Avoid second conversations.', 'Use only general questions.'], answer: 1 },
        { type: 'mcq', question: 'Why is Leyla impressed?', options: ['Derya knows her employer.', 'Derya remembers her name and interest.', 'Derya is an architect.', 'Derya brings her a book.'], answer: 1 },
        { type: 'tf', question: 'True or False: Derya believes remembering details can show real attention.', options: ['True', 'False'], answer: 0 },
        { type: 'mcq', question: 'What does “This must be Leyla” express?', options: ['A request', 'A confident deduction', 'A past habit', 'A dislike'], answer: 1 }
      ]
    },
    {
      id: 'd4-r2',
      title: 'The Personality Behind the Profile',
      content: `A small company is choosing a team leader for a six-month project. Two candidates appear very different. On paper, Marcus looks confident and energetic. He speaks quickly in the interview and describes several successful projects. Priya is quieter. She pauses before answering and gives careful examples of how she supported previous teams.

Some interviewers first assume that Marcus must be the stronger leader because he creates a powerful first impression. However, the company also asks both candidates to complete a group task. Marcus shares many ideas, but he does not always listen to other people. Priya asks questions, notices when one participant is uncomfortable, and helps the group reach a decision.

The interviewers realize that confidence can be shown in different ways. Marcus is excellent at presenting, while Priya is calm, sensitive, and generous with attention. Neither personality is automatically better, but Priya’s style matches the needs of this particular project. She receives the position because the team requires someone who can build trust and include different opinions. The decision is based on observed behavior, not only on the candidates’ first impressions.`,
      highlightedWords: ['confident', 'energetic', 'first impression', 'sensitive', 'generous'],
      questions: [
        { type: 'mcq', question: 'Why does Marcus initially seem like the stronger leader?', options: ['He knows the interviewers.', 'He creates a confident first impression.', 'He is quieter than Priya.', 'He has no project experience.'], answer: 1 },
        { type: 'mcq', question: 'What does Priya do during the group task?', options: ['She controls every idea.', 'She helps the group include different people.', 'She refuses to speak.', 'She leaves the decision to Marcus.'], answer: 1 },
        { type: 'mcq', question: 'Why is Priya selected?', options: ['Her style fits the project’s needs.', 'She speaks the fastest.', 'Marcus withdraws.', 'She has the longest résumé.'], answer: 0 },
        { type: 'tf', question: 'True or False: The text suggests there is only one effective leadership personality.', options: ['True', 'False'], answer: 1 },
        { type: 'mcq', question: 'What evidence changes the interviewers’ opinion?', options: ['The candidates’ photographs', 'Their behavior in a group task', 'A written grammar test', 'A personal recommendation'], answer: 1 }
      ]
    }
  ]
};
