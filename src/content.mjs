// Landing page copy. EN is the default (served at /), DA at /da/.
// Research facts link to the original papers (DOI). Keep claims modest: most exposure studies are in children;
// the adult evidence (Pliner 1982) shows that repeated tasting raises liking in adults too.

const refs = {
  pliner82: { label: 'Pliner, P. (1982). The effects of mere exposure on liking for edible substances. Appetite, 3(3), 283–290.', url: 'https://doi.org/10.1016/S0195-6663(82)80026-3' },
  birch82: { label: 'Birch, L. L. & Marlin, D. W. (1982). I don’t like it; I never tried it. Appetite, 3(4), 353–360.', url: 'https://doi.org/10.1016/S0195-6663(82)80053-6' },
  wardle03: { label: 'Wardle, J., Herrera, M.-L., Cooke, L. & Gibson, E. L. (2003). European Journal of Clinical Nutrition, 57, 341–348.', url: 'https://doi.org/10.1038/sj.ejcn.1601541' },
  pliner92: { label: 'Pliner, P. & Hobden, K. (1992). Development of a scale to measure the trait of food neophobia in humans. Appetite, 19(2), 105–120.', url: 'https://doi.org/10.1016/0195-6663(92)90014-W' },
  kauer15: { label: 'Kauer, J., Pelchat, M. L., Rozin, P. & Zickgraf, H. F. (2015). Adult picky eating. Appetite, 90, 219–228.', url: 'https://doi.org/10.1016/j.appet.2015.03.001' },
  zickgraf16: { label: 'Zickgraf, H. F. & Schepps, K. (2016). Fruit and vegetable intake and dietary variety in adult picky eaters. Food Quality and Preference, 54, 39–50.', url: 'https://doi.org/10.1016/j.foodqual.2016.06.012' },
};

export const content = {
  en: {
    lang: 'en', locale: 'en_US', path: '/', alt: { lang: 'da', path: '/da/', label: 'Dansk' },
    title: 'Tastewise – Help for picky eaters | Learn to like new foods',
    description: 'Tastewise helps picky adults learn to like new foods with gentle, step-by-step exposure: look, smell, touch, taste. A personal plan, eat-out help and a kind turtle guide.',
    ogTitle: 'Picky eater? Learn to like food, one small step at a time.',
    nav: { how: 'How it works', features: 'Features', science: 'Research', faq: 'FAQ', download: 'Get the app' },
    hero: {
      eyebrow: 'For adults who are picky eaters',
      h1: 'Picky eater? <em>Learn to like</em> food, one small step at a time.',
      lead: 'Tastewise is a gentle coach for grown-ups who find new foods hard. A friendly turtle guides you from looking and smelling to touching and tasting, at your pace, with no pressure and no judgement.',
      bubble: 'Stopping is never failing. We go at your pace.',
      note: 'Free to download for iPhone and Android. Tastewise Pro includes a 7-day free trial.',
    },
    feel: { title: 'Does this sound familiar?', items: ['You order the same safe dish every time', 'Dinner invitations make you nervous', 'Textures can feel wrong before you even taste', 'A smell can end the meal for you', 'You would like to eat more widely, but not be pushed'], outro: 'You are not being difficult. Many adults feel this way, and researchers study it as a real pattern, not a personality flaw.' },
    how: {
      kicker: 'How it works', title: 'Small, brave steps your senses can keep up with',
      lead: 'Instead of “just try it”, Tastewise breaks a food into tiny steps. Each calm, repeated meeting with a food makes the next one easier.',
      steps: [
        { k: 'look', icon: 'eye', t: 'Look', d: 'Get used to how the food looks on your plate. No eating needed.' },
        { k: 'smell', icon: 'smell', t: 'Smell', d: 'Notice the smell and how your body feels. Calm, nervous or unsafe is all fine.' },
        { k: 'touch', icon: 'hand', t: 'Touch', d: 'Feel the texture with your fingers or lips, the step many people skip.' },
        { k: 'taste', icon: 'fork', t: 'Taste', d: 'A tiny bite when you are ready. Then repeat until it feels ordinary.' },
      ],
    },
    show: {
      kicker: 'Inside the app', title: 'Made around you',
      items: [
        { img: 'o_plan', t: 'Your personal plan', d: 'Built from your goals, foods and hardest triggers.' },
        { img: 'a_stepscr', t: 'Check in with your body', d: 'Every step asks how you feel. You set the pace.' },
        { img: 'a_home', t: 'Today’s brave bite', d: 'One small, clear step each day.' },
        { img: 'a_explain', t: 'Explain cards', d: 'Kind words for partners, hosts and colleagues.' },
      ],
    },
    features: {
      kicker: 'Features', title: 'Everything a picky adult actually needs',
      items: [
        { icon: 'plan', c: 'i1', t: 'A personal plan', d: 'Tell us your goals, the foods you avoid and what makes it hard. You get a plan with a first mission that feels doable.' },
        { icon: 'heart', c: 'i4', t: 'Your taste archetype', d: 'Texture Detective, Scent Tracker, Safety Seeker and more. Understand why food feels the way it does for you.' },
        { icon: 'plate', c: 'i2', t: 'Eat-out plans', d: 'Going to a restaurant or a friend’s dinner? Get a calm plan for what to order and how to handle it.' },
        { icon: 'card', c: 'i3', t: 'Explain cards', d: 'Short, honest messages you can share so others understand, without having to defend yourself.' },
        { icon: 'flag', c: 'i5', t: 'Challenges, streaks and milestones', d: 'Themed challenges and small wins that add up. The numbers only go up.' },
        { icon: 'bell', c: 'i6', t: 'Meal-time missions', d: 'A gentle nudge on your lock screen right before you eat, so today’s brave bite actually happens.' },
      ],
    },
    turtle: {
      title: 'A guide that never rushes you',
      text: 'Choose how the turtle talks to you: cheerleader, gentle, straightforward or mindful. It celebrates small wins and reminds you that stopping is part of the process.',
      quote: '“It’s perfectly fine to feel nervous. You set the pace.”', quoteBy: 'Your turtle, before every tasting',
    },
    science: {
      kicker: 'Honest proof', title: 'Built on what research says about liking food',
      lead: 'Tastewise is new, so we will not show you made-up reviews. Here is the research the method is built on.',
      facts: [
        { big: 'Repeat', p: 'In a classic study with adults, tasting unfamiliar foods more often made people like them more.', ref: 'pliner82' },
        { big: '5–10×', p: 'Early studies found that preferences rose with the number of exposures, and that 5 to 10 tastes could change how much a food is liked.', ref: 'birch82' },
        { big: 'Exposure', p: 'In a randomised trial, repeated tasting increased liking for an unfamiliar vegetable more than rewards did.', ref: 'wardle03' },
        { big: 'Real', p: 'Researchers describe adult picky eating as its own pattern, with its own experiences and challenges, and study how it can change.', ref: 'kauer15' },
        { big: 'Variety', p: 'Adult picky eaters tend to eat a narrower range of foods, including fewer fruits and vegetables.', ref: 'zickgraf16' },
        { big: 'Neophobia', p: 'Fear of new foods is a measurable trait in adults, not just a childhood phase.', ref: 'pliner92' },
      ],
      honest: 'Most exposure research was done with children, and results vary from person to person. Tastewise is a self-help tool, not treatment. If eating affects your health, weight or daily life, please talk to a doctor or psychologist.',
    },
    faq: {
      title: 'Questions and answers',
      items: [
        ['Who is Tastewise for?', 'Tastewise is made for adults who are picky eaters or find new foods difficult and want to eat more widely, feel calmer at meals and eat with others without stress.'],
        ['Is Tastewise a treatment for ARFID or an eating disorder?', 'No. Tastewise is a self-help and habit tool, not medical treatment. If you think you may have ARFID or another eating disorder, if you are losing weight, or if eating affects your health or daily life, please talk to your doctor, a psychologist or a dietitian. Many people use tools like this alongside professional support.'],
        ['Do I have to eat foods I don’t want to?', 'Never. You choose the foods and the pace. Each step starts with simply looking. You can stop at any time, and stopping is never counted as failing.'],
        ['How does gradual food exposure work?', 'You meet a food in small steps: look, smell, touch and then taste. Calm, repeated meetings help many people get used to new foods. Research on repeated tasting shows liking often grows with exposure.'],
        ['How long does it take?', 'It is different for everyone. Most people need several calm meetings with a food before it feels ordinary. Your plan sets a realistic first goal and adjusts as you go.'],
        ['Can it help me eat out at restaurants?', 'Yes. The eat-out feature helps you plan what to order before you go, and explain cards help you tell partners, hosts or colleagues what helps, in your own words.'],
        ['What does it cost?', 'Tastewise is free to download. Tastewise Pro unlocks the full plan and all features, with a 7-day free trial, then a yearly or monthly subscription. Prices are shown in the app in your local currency, and you can cancel any time in your App Store or Google Play settings.'],
        ['What happens to my data?', 'We only collect what the app needs to work and to improve it. No ads, no selling of data and no tracking across other companies’ apps. You can delete your account in the app. Read our privacy policy for details.'],
        ['Which languages does Tastewise speak?', 'Tastewise is available in 15 languages, including English, Danish, German, French, Spanish, Italian, Portuguese (Brazil), Dutch, Swedish, Norwegian, Finnish, Polish, Czech, Turkish and Indonesian.'],
      ],
    },
    final: { title: 'Ready for your first brave bite?', text: 'Get your personal plan in a few minutes. Start with just looking.' },
    badges: { ios1: 'Download on the', ios2: 'App Store', and1: 'Get it on', and2: 'Google Play', soon: 'Coming soon to the App Store and Google Play.' },
    footer: { about: 'Tastewise helps adults who are picky eaters learn to like new foods, one small step at a time. Not medical advice.', product: 'Product', legal: 'Legal', contact: 'Contact', privacy: 'Privacy policy', terms: 'Terms of use', deleteAccount: 'Delete your account', rights: 'All rights reserved.' },
    refs,
  },
  da: {
    lang: 'da', locale: 'da_DK', path: '/da/', alt: { lang: 'en', path: '/', label: 'English' },
    title: 'Tastewise – Hjælp til kræsne voksne | Lær at kunne lide ny mad',
    description: 'Tastewise hjælper kræsne voksne med at lære at kunne lide ny mad med blide små skridt: se, dufte, røre, smage. En personlig plan, hjælp til at spise ude og en venlig skildpadde som guide.',
    ogTitle: 'Kræsen med mad? Lær at kunne lide mad, ét lille skridt ad gangen.',
    nav: { how: 'Sådan virker det', features: 'Funktioner', science: 'Forskning', faq: 'Spørgsmål', download: 'Hent appen' },
    hero: {
      eyebrow: 'Til voksne, der er kræsne med mad',
      h1: 'Kræsen med mad? <em>Lær at kunne lide</em> det, ét lille skridt ad gangen.',
      lead: 'Tastewise er en blid coach til voksne, der synes, ny mad er svær. En venlig skildpadde guider dig fra at se og dufte til at røre og smage, i dit tempo, uden pres og uden at dømme.',
      bubble: 'At stoppe er aldrig at fejle. Vi går i dit tempo.',
      note: 'Gratis at hente til iPhone og Android. Tastewise Pro har 7 dages gratis prøve.',
    },
    feel: { title: 'Kender du det?', items: ['Du bestiller den samme sikre ret hver gang', 'Middagsinvitationer gør dig nervøs', 'Konsistensen føles forkert, før du overhovedet smager', 'En lugt kan afslutte måltidet for dig', 'Du vil gerne spise bredere, men ikke presses'], outro: 'Du er ikke besværlig. Mange voksne har det sådan, og forskere studerer det som et reelt mønster, ikke som en karakterbrist.' },
    how: {
      kicker: 'Sådan virker det', title: 'Små, modige skridt, som dine sanser kan følge med i',
      lead: 'I stedet for “smag nu bare” deler Tastewise en madvare op i små skridt. Hvert roligt, gentaget møde med maden gør det næste lettere.',
      steps: [
        { k: 'look', icon: 'eye', t: 'Se', d: 'Vænn dig til, hvordan maden ser ud på tallerkenen. Du skal ikke spise noget.' },
        { k: 'smell', icon: 'smell', t: 'Dufte', d: 'Mærk duften, og hvordan din krop har det. Rolig, nervøs eller utryg er alt sammen fint.' },
        { k: 'touch', icon: 'hand', t: 'Røre', d: 'Mærk konsistensen med fingre eller læber. Det skridt springer mange over.' },
        { k: 'taste', icon: 'fork', t: 'Smage', d: 'En lille bid, når du er klar. Gentag, til det føles helt almindeligt.' },
      ],
    },
    show: {
      kicker: 'Inde i appen', title: 'Bygget op omkring dig',
      items: [
        { img: 'o_plan', t: 'Din personlige plan', d: 'Bygget på dine mål, madvarer og dine sværeste triggere.' },
        { img: 'a_stepscr', t: 'Mærk efter i kroppen', d: 'Hvert skridt spørger, hvordan du har det. Du bestemmer tempoet.' },
        { img: 'a_home', t: 'Dagens modige bid', d: 'Ét lille, tydeligt skridt hver dag.' },
        { img: 'a_explain', t: 'Forklar-kort', d: 'Venlige ord til kæresten, værten og kollegerne.' },
      ],
    },
    features: {
      kicker: 'Funktioner', title: 'Alt det, en kræsen voksen faktisk har brug for',
      items: [
        { icon: 'plan', c: 'i1', t: 'En personlig plan', d: 'Fortæl om dine mål, den mad du undgår, og hvad der gør det svært. Du får en plan med en første mission, der føles til at gå til.' },
        { icon: 'heart', c: 'i4', t: 'Din smagsarketype', d: 'Tekstur-detektiv, Duftsporer, Tryghedssøger og flere. Forstå, hvorfor mad føles, som den gør for dig.' },
        { icon: 'plate', c: 'i2', t: 'Planer til at spise ude', d: 'Skal du på restaurant eller til middag hos venner? Få en rolig plan for, hvad du kan bestille, og hvordan du klarer det.' },
        { icon: 'card', c: 'i3', t: 'Forklar-kort', d: 'Korte, ærlige beskeder, du kan dele, så andre forstår, uden at du skal forsvare dig.' },
        { icon: 'flag', c: 'i5', t: 'Udfordringer, streaks og milepæle', d: 'Temaforløb og små sejre, der lægges sammen. Tallene går kun op.' },
        { icon: 'bell', c: 'i6', t: 'Missioner ved måltidet', d: 'Et blidt skub på låseskærmen lige før du spiser, så dagens modige bid faktisk bliver til noget.' },
      ],
    },
    turtle: {
      title: 'En guide, der aldrig har travlt',
      text: 'Vælg, hvordan skildpadden taler til dig: som et heppekor, blid og venlig, ligefrem eller som en mindful guide. Den fejrer små sejre og minder dig om, at det er en del af processen at stoppe.',
      quote: '“Det er helt fint at være nervøs. Du bestemmer tempoet.”', quoteBy: 'Din skildpadde, før hver smagning',
    },
    science: {
      kicker: 'Ærlig dokumentation', title: 'Bygget på det, forskningen siger om at kunne lide mad',
      lead: 'Tastewise er ny, så vi viser dig ikke opdigtede anmeldelser. Her er den forskning, metoden bygger på.',
      facts: [
        { big: 'Gentag', p: 'I et klassisk studie med voksne kom deltagerne til at kunne lide ukendte fødevarer mere, jo oftere de smagte dem.', ref: 'pliner82' },
        { big: '5–10×', p: 'Tidlige studier fandt, at præferencen steg med antallet af møder med maden, og at 5 til 10 smagninger kunne ændre, hvor godt den blev kunnet lide.', ref: 'birch82' },
        { big: 'Gentagelse', p: 'I et randomiseret forsøg øgede gentagne smagninger glæden ved en ukendt grøntsag mere end belønninger gjorde.', ref: 'wardle03' },
        { big: 'Reelt', p: 'Forskere beskriver kræsenhed hos voksne som et selvstændigt mønster med egne oplevelser og udfordringer og undersøger, hvordan det kan ændre sig.', ref: 'kauer15' },
        { big: 'Variation', p: 'Kræsne voksne spiser typisk færre forskellige fødevarer, blandt andet færre frugter og grøntsager.', ref: 'zickgraf16' },
        { big: 'Neofobi', p: 'Frygt for ny mad er et målbart træk hos voksne, ikke kun en fase i barndommen.', ref: 'pliner92' },
      ],
      honest: 'Det meste forskning i gentagne smagninger er lavet med børn, og resultaterne varierer fra person til person. Tastewise er et selvhjælpsværktøj, ikke behandling. Hvis maden påvirker dit helbred, din vægt eller din hverdag, så tal med din læge eller en psykolog.',
    },
    faq: {
      title: 'Spørgsmål og svar',
      items: [
        ['Hvem er Tastewise til?', 'Tastewise er lavet til voksne, der er kræsne med mad eller synes, at ny mad er svær, og som gerne vil spise bredere, være mere rolige ved måltiderne og spise sammen med andre uden stress.'],
        ['Er Tastewise behandling af ARFID eller en spiseforstyrrelse?', 'Nej. Tastewise er et selvhjælps- og vaneværktøj, ikke medicinsk behandling. Hvis du tror, du kan have ARFID eller en anden spiseforstyrrelse, hvis du taber dig, eller hvis maden påvirker dit helbred eller din hverdag, så tal med din læge, en psykolog eller en diætist. Mange bruger værktøjer som dette sammen med professionel hjælp.'],
        ['Skal jeg spise mad, jeg ikke vil?', 'Aldrig. Du vælger maden og tempoet. Hvert skridt starter med bare at se på den. Du kan stoppe når som helst, og at stoppe tæller aldrig som at fejle.'],
        ['Hvordan virker gradvis tilvænning til mad?', 'Du møder en madvare i små skridt: se, dufte, røre og så smage. Rolige, gentagne møder hjælper mange med at vænne sig til ny mad. Forskning i gentagne smagninger viser, at man ofte kommer til at kunne lide maden mere med tiden.'],
        ['Hvor lang tid tager det?', 'Det er forskelligt fra person til person. De fleste har brug for flere rolige møder med en madvare, før den føles almindelig. Din plan sætter et realistisk første mål og tilpasser sig undervejs.'],
        ['Kan appen hjælpe mig med at spise på restaurant?', 'Ja. Funktionen til at spise ude hjælper dig med at planlægge, hvad du kan bestille, før du tager af sted, og forklar-kortene hjælper dig med at fortælle kæreste, vært eller kolleger, hvad der hjælper, med dine egne ord.'],
        ['Hvad koster det?', 'Tastewise er gratis at hente. Tastewise Pro låser hele planen og alle funktioner op med 7 dages gratis prøve og derefter 349 kr. om året eller 79 kr. om måneden. Du kan altid opsige i dine indstillinger i App Store eller Google Play.'],
        ['Hvad sker der med mine data?', 'Vi indsamler kun det, appen skal bruge for at virke og blive bedre. Ingen reklamer, intet salg af data og ingen sporing på tværs af andre virksomheders apps. Du kan slette din konto i appen. Læs mere i vores privatlivspolitik.'],
        ['Hvilke sprog findes Tastewise på?', 'Tastewise findes på 15 sprog, blandt andet dansk, engelsk, tysk, fransk, spansk, italiensk, portugisisk (Brasilien), hollandsk, svensk, norsk, finsk, polsk, tjekkisk, tyrkisk og indonesisk.'],
      ],
    },
    final: { title: 'Klar til din første modige bid?', text: 'Få din personlige plan på få minutter. Start med bare at kigge.' },
    badges: { ios1: 'Hent i', ios2: 'App Store', and1: 'Nu på', and2: 'Google Play', soon: 'Kommer snart i App Store og Google Play.' },
    footer: { about: 'Tastewise hjælper voksne, der er kræsne med mad, med at lære at kunne lide ny mad, ét lille skridt ad gangen. Ikke medicinsk rådgivning.', product: 'Produkt', legal: 'Juridisk', contact: 'Kontakt', privacy: 'Privatlivspolitik', terms: 'Vilkår', deleteAccount: 'Slet din konto', rights: 'Alle rettigheder forbeholdes.' },
    refs,
  },
};
