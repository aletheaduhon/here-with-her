/* ==========================================================================
   HERE WITH HER — CONTENT DATA FILE
   --------------------------------------------------------------------------
   Every word on the site lives in this file. Layout and styling live in
   assets/styles.css, assets/app.js and scripts/generate.js.

   After editing, run:   node scripts/generate.js
   and commit the changed files. See README.md for step-by-step recipes.

   SECTIONS (search for these headings):
     1. SITE SETTINGS      – site URL, languages
     2. UI TEXT            – buttons, labels, footer note
     3. HOME PAGE          – explainer cards, picker intro
     4. QUIZ               – questions, answers, score messages
     5. AUDIENCES          – one entry per audience page (partner, teen, ...)
   ========================================================================== */

const SITE = {
  // 1. SITE SETTINGS ------------------------------------------------------
  // Your real address, no trailing slash. Used for link-preview tags only.
  siteUrl: "https://here-with-her.vercel.app",

  // The first language is the default and lives at the site root (/partner).
  // Others live in a folder (/es/partner). To add one, copy the whole
  // `en: { ... }` block below, rename the key, and translate the text.
  defaultLang: "en",
  languageNames: { en: "English" },
};

const CONTENT = {
  en: {
    // 2. UI TEXT ----------------------------------------------------------
    ui: {
      siteName: "Here With Her",
      tagline: "Helping the people around her understand perimenopause",
      skipToContent: "Skip to content",
      homeLink: "Home",
      backLink: "Back to all pages",
      languageLabel: "Language",
      printButton: "Print this page",
      footerNote:
        "Shares general information to help families understand perimenopause. It isn’t medical advice. Talk with a doctor about symptoms or treatment.",
      footerPrivacy:
        "No accounts. No tracking. Nothing you type here is saved or sent anywhere.",

      noticeDefaultHeading: "What you might notice",
      helpsHeading: "What helps",
      doesntHeading: "What doesn’t help",
      sayHeading: "Things you can say",
      notSayLabel: "What not to say",
      notSayInstead: "Try this instead",
      readNextHeading: "Not who you were looking for?",

      forHerLabel: "For her",
      forHerIntro:
        "This part is just for you. Send this page to someone, with a message in your own words.",
      openerLabel: "A way to start the conversation",
      messageLabel: "Your message (edit it any way you like)",
      copyButton: "Copy message and link",
      copiedMessage: "Copied. Now paste it into a text or email.",
      copyFailed: "Couldn’t copy. Select the text and copy it by hand.",
      shareButton: "Share",
      pageLinkLabel: "This page’s link",

      storyPageOf: "Page {n} of {total}",
      storyPrev: "Back",
      storyNext: "Next page",
      storyAgain: "Read again",
      storyRegionLabel: "The story, one page at a time",
      grownUpHeading: "A note for the grown-up reading this",

      quizHeading: "How well does your family get it?",
      quizIntro: "{total} quick true-or-false questions. There’s no wrong way to learn.",
      quizNeedsJs: "The quiz needs JavaScript turned on. Everything else on this site works without it.",
      quizTrue: "True",
      quizFalse: "False",
      quizQuestionOf: "Question {n} of {total}",
      quizCorrect: "Right.",
      quizIncorrect: "Not quite.",
      quizNext: "Next question",
      quizSeeScore: "See my score",
      quizScore: "You got {score} out of {total}",
      quizRetake: "Retake the quiz",

      pickerHeading: "Who are you to her?",
      pickerIntro: "Pick the one that fits. Each page is written just for that person.",

      doctorHeading: "When it’s time to talk to a doctor",
      doctorBody:
        "Perimenopause is normal, but that doesn’t mean she has to put up with it. If symptoms get in the way of her sleep, work, mood, or relationships, a doctor can talk through what’s going on and what choices she has. Other health problems can look like perimenopause, so checking in is worthwhile. If something feels urgent or unsafe, call your local emergency number.",

      shareSiteHeading: "Know someone who needs this?",
      shareSiteButton: "Share this site",
      shareSiteMessage: "Here With Her explains perimenopause to the people around her:",
      shareSiteCopied: "Link copied.",
      footerToday: "Say how I feel today",
      footerQuiz: "Family quiz",

      todayStatesHeading: "How I’m feeling today",
      todayStatesIntro: "Tap the one that fits. It fills in your message below, and you can change it.",
      todayBuilderHeading: "In my own words",
      todayBuilderIntro:
        "Finish any of these sentences. Skip the ones you don’t want. Then add them to your message.",
      todayBuilderAdd: "Add to my message",
      todayAdded: "Added to your message.",
      todayNothing: "Type something in at least one box first.",
      todayMessageHeading: "Your message",
      toolsHeading: "Quick tools",
    },

    // 3. HOME PAGE --------------------------------------------------------
    home: {
      meta: {
        title: "Here With Her | Perimenopause, explained for the people around her",
        description:
          "A free, plain-language guide to perimenopause for partners, teens, kids, family, friends, and coworkers, with a page she can send to each of them.",
        imageHeadline: "Here With Her",
        imageSub: "Perimenopause, explained for the people who love her",
      },
      hero: {
        kicker: "For the women going through it, and the people beside them",
        title: "She’s going through something real.",
        intro:
          "Perimenopause is the stretch of years before periods stop for good. Hormones rise and fall, and her sleep, mood, and energy can change with them. Most people never learn about it. This site fixes that, one page at a time.",
        forHerHint:
          "If you’re the one going through it: pick who you want to reach below. Each page ends with a box to send it to them.",
      },
      explainer: {
        heading: "Perimenopause in plain words",
        cards: [
          {
            heading: "What it is",
            body: "The “in-between” time before menopause. Her body slowly makes different amounts of the hormones estrogen and progesterone. They don’t drop in a straight line. They bounce around, which is why some days feel normal and some don’t.",
          },
          {
            heading: "When it happens",
            body: "Often in her 40s, but sometimes earlier. It can last a few years or closer to ten. Menopause is the day she’s gone 12 months in a row without a period. Perimenopause is the time leading up to that day.",
          },
          {
            heading: "What it can affect",
            body: "Periods that change, hot flashes, night sweats, poor sleep, tiredness, a short fuse, feeling anxious or low, trouble finding words, and a foggy head. Every woman’s mix is different.",
          },
        ],
      },
      symptoms: {
        heading: "Common signs of perimenopause",
        intro: "Every woman’s mix is different. Having some of these doesn’t mean anything on its own. It’s a way to put words to what she may be feeling.",
        items: [
          "Periods that change: shorter, longer, heavier, lighter, or skipped",
          "Hot flashes",
          "Night sweats",
          "Trouble sleeping",
          "Feeling worn out",
          "Mood changes or a short fuse",
          "Anxiety or feeling low",
          "Brain fog or lost words",
          "Aches in joints or muscles",
          "Changes in interest in sex",
        ],
        note: "A general list, not a diagnosis. A doctor can help her figure out what’s behind any of it.",
      },
      tools: {
        cards: [
          { slug: "today", label: "Say how I feel today", blurb: "A quick message she can send in seconds" },
          { slug: "quiz", label: "The family quiz", blurb: "Send it to see how well your family gets it" },
        ],
      },
    },

    // 4. QUIZ -------------------------------------------------------------
    // To add a question, copy one entry and change the text.
    //   answer: true  means the statement is TRUE; false means it is FALSE.
    quiz: {
      scoreMessages: [
        // Shown by score. `min` is the lowest score for that message.
        { min: 0, text: "Everyone starts somewhere. Read a page or two and try again." },
        { min: 4, text: "A good start. You’re already ahead of most people." },
        { min: 8, text: "Nice work. You really get it." },
        { min: 10, text: "Perfect score. She’s lucky to have you." },
      ],
      questions: [
        {
          statement: "Perimenopause only starts after a woman is 50.",
          answer: false,
          explanation:
            "It often starts in her 40s, and sometimes in her mid-30s. Menopause itself is usually around 51, but the years before it can bring changes much sooner.",
        },
        {
          statement: "Mood swings and a short temper can be part of perimenopause.",
          answer: true,
          explanation:
            "Changing hormones can affect mood, and poor sleep makes it harder. It isn’t about the people around her, and it isn’t something she can just switch off.",
        },
        {
          statement: "Hot flashes are the only symptom.",
          answer: false,
          explanation:
            "Hot flashes are the famous one, but there’s a long list: bad sleep, tiredness, anxiety, brain fog, joint aches, and changing periods. Many women notice the other things first.",
        },
        {
          statement: "If she seems quieter or cancels plans, she probably doesn’t care about you.",
          answer: false,
          explanation:
            "Often she’s worn out or didn’t sleep. Cancelling is usually about her energy, not about you. A kind “no pressure, I’m here” goes a long way.",
        },
        {
          statement: "Perimenopause can last for several years.",
          answer: true,
          explanation:
            "For many women it lasts four years or so, and for some it’s much longer. That’s why patience and support matter. This isn’t a rough week.",
        },
        {
          statement: "The best way to help is to tell her to calm down and fix it.",
          answer: false,
          explanation:
            "Fixing and “calm down” tend to make things worse. Listening, asking what would help, and doing a little more around the house work better. A doctor is the right person for questions about treatment.",
        },
        {
          statement: "Menopause and perimenopause mean the same thing.",
          answer: false,
          explanation:
            "Perimenopause is the run-up, the years of changing hormones. Menopause is a single point: 12 months in a row with no period.",
        },
        {
          statement: "Poor sleep can make other symptoms feel worse.",
          answer: true,
          explanation:
            "When you’re short on sleep, everything is harder: mood, memory, patience, and energy. That’s why night sweats and bad nights matter so much.",
        },
        {
          statement: "Every woman has the same symptoms in perimenopause.",
          answer: false,
          explanation:
            "Some women barely notice it. Others have a long list. Her experience may be very different from her mom’s, her friend’s, or what you’ve read.",
        },
        {
          statement: "She could feel better if she just tried harder.",
          answer: false,
          explanation:
            "These changes are physical, and willpower doesn’t switch them off. Understanding and practical help work better. A doctor can talk with her about choices.",
        },
      ],
    },

    // 5. AUDIENCES --------------------------------------------------------
    // One entry per page. The order here is the order of the picker on the
    // home page. See README.md, "Add a new audience page".
    //
    //   slug          the clean URL, e.g. "partner" becomes /partner
    //   picker        the tile on the home page
    //   meta          title, description and preview-image text for link previews
    //   hero          top of the page
    //   notice        "what they might notice" list
    //   helps/doesnt  the two cards
    //   say           things to say
    //   notSay        the screenshot-ready card
    //   extraSections OPTIONAL extra blocks, shown between the intro and "notice"
    //   extraSectionsAfter  OPTIONAL extra blocks, shown after "things to say"
    //                 (add skipInPrint: true to a block to leave it off the printout)
    //   story         OPTIONAL read-together story (used on /kids)
    //   grownUpNote   OPTIONAL note shown with the story
    //   forHer        suggested opener + editable message
    audiences: [
      // ---------------------------------------------------------------- PARTNER
      {
        slug: "partner",
        symptomCard: true,
        picker: { label: "Her partner", blurb: "What’s happening and how to be on her side" },
        meta: {
          title: "For her partner | Here With Her",
          description:
            "What perimenopause is doing to her body, what you might notice, and how to help. A plain-language page for partners.",
          imageHeadline: "For her partner",
          imageSub: "What’s going on, and how to be on her side",
        },
        hero: {
          kicker: "For her partner",
          title: "She isn’t different. Her hormones are.",
          intro:
            "Someone who loves you sent you this page. She’s in perimenopause, the years before menopause. It’s common, it’s real, and it can last a while. Five minutes here will help both of you.",
        },
        extraSections: [
          {
            heading: "What’s happening in her body",
            skipInPrint: true, // leaves this block out of the one-page printout
            paragraphs: [
              "Two hormones, estrogen and progesterone, help run her cycle. They also touch sleep, mood, body temperature, and memory.",
              "In perimenopause, those hormones stop following a steady pattern. They spike, dip, and surprise her. That’s why she can feel fine on Monday and rough on Tuesday, with no clear reason.",
            ],
          },
        ],
        notice: {
          items: [
            "Bad nights: waking up hot, or waking at 3 a.m. and not falling back asleep",
            "Sudden heat, sweating, or needing a window open when you’re cold",
            "Being short on patience, or crying over small things, then feeling bad about it",
            "Forgetting words or losing her train of thought",
            "Less interest in sex, or sex that feels different",
            "Pulling back from plans because she’s worn out",
          ],
        },
        helps: [
          "Asking “What would help today?” and meaning it",
          "Taking things off her plate without being asked",
          "Keeping the bedroom cool and not taking it personally if she kicks off the covers",
          "Listening without trying to fix it",
          "Learning about it yourself, like you’re doing now",
          "Staying calm when she’s snappy, then talking later when you’re both rested",
        ],
        doesnt: [
          "“Calm down”",
          "Joking about hot flashes or her mood",
          "Guessing what she needs instead of asking",
          "Taking her short temper as a sign about the two of you",
          "Treating it as “just a phase”",
          "Pushing a fix when she wants to be heard",
        ],
        say: [
          "“That sounds exhausting. I’m here.”",
          "“Want me to handle dinner tonight?”",
          "“I read about this. Tell me what it’s like for you.”",
          "“It’s not your fault, and it’s not too much for me.”",
          "“Would you like me to come to your next appointment?”",
        ],
        notSay: {
          quote: "“Are you sure it’s not just stress?”",
          instead: "“That sounds hard. What would help right now?”",
        },
        extraSectionsAfter: [
          {
            heading: "Supporting her at doctor visits",
            paragraphs: [
              "Only she can decide what to ask and what to do about her symptoms. A doctor is the right person for that. Your job is to make the visit easier.",
            ],
            items: [
              "Ask if she’d like company, and be fine with either answer",
              "Offer to help her write down questions beforehand",
              "In the room, let her speak first. Add details only if she asks you to",
              "Take notes so she can focus on the conversation",
              "Afterward, ask how she’s feeling about it before you share opinions",
            ],
          },
        ],
        forHer: {
          opener:
            "“I’ve been wanting to tell you what’s been going on with me lately. I found something that explains it better than I can.”",
          message:
            "Hi love. I’ve been going through perimenopause and I want you to understand it. This page explains what’s happening and what helps. Could you read it and then we can talk?",
        },
      },

      // ------------------------------------------------------------------ TEEN
      {
        slug: "teen",
        picker: { label: "Her teen", blurb: "Short, honest, and not embarrassing" },
        meta: {
          title: "For teens | Here With Her",
          description:
            "A quick, honest explainer for teens about why your mom or a woman you love may seem different lately. It’s not your fault.",
          imageHeadline: "For teens",
          imageSub: "A quick explainer. It’s not your fault.",
        },
        hero: {
          kicker: "For teens",
          title: "Why Mom (or someone you love) seems different",
          intro:
            "You may have noticed she’s more tired, more sensitive, or short with you sometimes. Here’s the quick version of what’s going on. No lecture.",
        },
        extraSections: [
          {
            heading: "Think of it as puberty in reverse",
            paragraphs: [
              "When you hit puberty, your hormones changed a lot. Your mood, sleep, and body all went along for the ride. Her body is going through a similar kind of change now, just in the other direction.",
              "It’s called perimenopause. It can last several years. It’s normal, and it happens to nearly every woman.",
            ],
          },
        ],
        notice: {
          items: [
            "She’s more tired than usual",
            "She gets hot all of a sudden and opens windows or fans herself",
            "Her mood can flip fast, and she may snap or tear up",
            "She forgets things or loses her words",
            "She might skip stuff she normally enjoys",
          ],
        },
        helps: [
          "Saying “Want me to do the dishes?” without being asked",
          "Giving her a minute if she seems overwhelmed",
          "Telling her something good about your day",
          "A hug, if she’s a hug person",
          "Being patient when she repeats herself",
        ],
        doesnt: [
          "Rolling your eyes or making hot flash jokes",
          "Taking a snappy moment personally",
          "Piling on extra drama at home when she’s worn out",
          "Googling scary stuff and bringing it up",
        ],
        say: [
          "“Hey, are you okay? Can I help with anything?”",
          "“I get that it’s not about me.”",
          "“Thanks for everything you do.”",
          "“I looked this up. Is it like what the page says?”",
        ],
        notSay: {
          quote: "“You’re being so dramatic.”",
          instead: "“Rough day? Want to sit with me for a bit?”",
        },
        forHer: {
          opener:
            "“You know how I’ve been kind of off lately? There’s a reason, and I want to tell you about it. It’s not you.”",
          message:
            "Hey, I’ve been more tired and moody lately, and there’s a reason. It’s called perimenopause. This page explains it quickly, with no lecture. It’s definitely not your fault. Read it when you have a few minutes?",
        },
      },

      // ------------------------------------------------------------------ KIDS
      {
        slug: "kids",
        picker: { label: "Her little kids", blurb: "A story to read together" },
        meta: {
          title: "Mom’s Big Change | Here With Her",
          description:
            "A six-page read-together story that helps young children understand why a grown-up they love feels hot, tired, or grumpy sometimes.",
          imageHeadline: "Mom’s Big Change",
          imageSub: "A story to read together",
        },
        hero: {
          kicker: "For little kids",
          title: "Mom’s Big Change",
          intro:
            "A short story to read together, one page at a time. The grown-up note is below it.",
        },
        story: {
          heading: "Mom’s Big Change",
          pages: [
            {
              art: "sun",
              text: "Mom’s body is going through a big change. Grown-ups’ bodies change too, not just kids’ bodies. Hers is changing in a way that takes a few years.",
            },
            {
              art: "fan",
              text: "Sometimes Mom gets hot, very hot, all of a sudden. She might open a window or hold up a fan. It’s called a hot flash. It goes away after a little while.",
            },
            {
              art: "moon",
              text: "Sometimes Mom doesn’t sleep well. When she’s tired, she might want to sit and rest. That doesn’t mean she doesn’t want to play with you. She is just very sleepy.",
            },
            {
              art: "cloud",
              text: "Sometimes Mom gets grumpy, or sad for no reason. Her body makes some feelings bigger. It is never, ever because of you. You didn’t do anything wrong.",
            },
            {
              art: "hands",
              text: "You can help! You can give a hug. You can say, “Do you need a rest?” You can draw her a picture, or bring her a cup of water. Small things help a lot.",
            },
            {
              art: "heart",
              text: "Mom loves you just the same, all the time, even on the hot days and the grumpy days. This big change won’t last forever, and you are not alone. You are here with her.",
            },
          ],
        },
        grownUpNote: {
          paragraphs: [
            "Kids notice when something shifts at home, and they often decide it must be their fault. A short, calm story can lift that weight.",
            "Read it at a quiet moment, not in the middle of a hard one. Let them ask questions. It’s fine to say “I don’t know” or “I’ll tell you more when you’re older.”",
            "Keep your explanation true and simple. You don’t need to share details about your body or health.",
          ],
        },
        notice: {
          items: [
            "Mom feels hot all of a sudden",
            "Mom is sleepy and wants to rest",
            "Mom gets grumpy or teary sometimes",
            "Mom forgets little things",
          ],
        },
        helps: [
          "A hug or a drawing",
          "Asking “Do you need a rest?”",
          "A cup of cool water",
          "Using your quiet voice when she’s tired",
        ],
        doesnt: [
          "Thinking it’s your fault (it’s never your fault)",
          "Asking again and again when she’s tired",
          "Hiding your feelings from her",
        ],
        say: [
          "“I love you, Mom.”",
          "“Do you want a hug?”",
          "“Is your hot flash over now?”",
        ],
        notSay: {
          quote: "“Why are you always so grumpy?”",
          instead: "“Are you having a hard day? I can help.”",
        },
        forHer: {
          opener:
            "“I want to read you a story about something happening in my body. Want to snuggle up?”",
          message:
            "Hi! I’m sharing a short story to read together with the kids. It explains why I sometimes feel hot, tired, or grumpy. It’s about six pages and there’s a note for the grown-up reading it.",
        },
      },

      // ---------------------------------------------------------------- FAMILY
      {
        slug: "family",
        picker: { label: "Family and friends", blurb: "Why she may cancel, and how to stay close" },
        meta: {
          title: "For family and friends | Here With Her",
          description:
            "Why someone you love may cancel plans or seem quieter, and how to stay supportive without making it awkward.",
          imageHeadline: "For family and friends",
          imageSub: "Why she may cancel, and how to stay close",
        },
        hero: {
          kicker: "For family and friends",
          title: "If she’s been harder to reach lately",
          intro:
            "She sent you this page because she wants you to understand. She’s in perimenopause, and it can change how much energy she has for plans and conversations. It isn’t about you.",
        },
        extraSections: [
          {
            heading: "Why she may cancel or seem quieter",
            paragraphs: [
              "When you haven’t slept, everything takes more effort. Add hot flashes, anxious moments, and a foggy head, and an evening out can feel like a mountain. So she cancels, or goes quiet in a group.",
              "It usually has nothing to do with how much she cares about you. Often she’s embarrassed or doesn’t know how to explain it.",
            ],
          },
        ],
        notice: {
          items: [
            "Last-minute cancelling, even on things she was excited about",
            "Being quieter in group conversations",
            "Seeming on edge, or tearing up over small things",
            "Needing a cooler room, fewer layers, or to step outside",
            "Forgetting what you just talked about",
          ],
        },
        helps: [
          "Keeping the invitation open: “No pressure, I’ll ask again”",
          "Suggesting low-key plans like a walk or a short coffee",
          "Letting her leave early with no questions",
          "Texting just to check in, with no need to reply",
          "Helping out with something practical",
        ],
        doesnt: [
          "Making her explain every time she cancels",
          "Taking it personally or keeping score",
          "Pointing out that she seems different",
          "Telling her story to others without asking",
          "Joking about her “hormones”",
        ],
        say: [
          "“No worries at all. Let’s do it when you feel up to it.”",
          "“I’m thinking of you. No need to reply.”",
          "“Want to just sit on the porch instead?”",
          "“Thanks for telling me. Tell me what helps.”",
        ],
        notSay: {
          quote: "“You never come out anymore.”",
          instead: "“I miss you. Whenever you’re up for it, I’m here.”",
        },
        forHer: {
          opener:
            "“I’ve been cancelling more than I’d like, and I want you to know it’s not about you.”",
          message:
            "Hi. I wanted to explain why I’ve been cancelling plans and seeming quieter. I’m going through perimenopause. This page explains it better than I could. It means a lot to me that you’d read it.",
        },
      },

      // ------------------------------------------------------------------ WORK
      {
        slug: "work",
        picker: { label: "Her coworkers", blurb: "A short, professional version" },
        meta: {
          title: "For colleagues and managers | Here With Her",
          description:
            "A short, professional overview of perimenopause at work, with practical adjustments that help.",
          imageHeadline: "For colleagues and managers",
          imageSub: "Perimenopause at work: a short guide",
        },
        hero: {
          kicker: "For colleagues and managers",
          title: "Perimenopause at work: a short guide",
          intro:
            "A colleague has chosen to share this with you. Perimenopause is the transition before menopause, and it is common among women in their 40s and early 50s. Some days it affects focus, energy, or comfort. A few small adjustments can make a real difference.",
        },
        notice: {
          heading: "What may show up at work",
          items: [
            "Tiredness after poor sleep",
            "Sudden feeling of heat, or needing air and a cooler space",
            "Trouble with concentration or finding words",
            "Needing short breaks at unpredictable times",
            "Feeling more anxious or on edge in high-pressure moments",
          ],
        },
        extraSectionsAfter: [
          {
            heading: "Practical adjustments",
            paragraphs: [
              "What helps differs from person to person. The best step is to ask her what would be useful. Common examples:",
            ],
            items: [
              "A desk near a window or vent, or a small fan",
              "Flexible start times or the option to work from home some days",
              "Permission to step out for a few minutes without explaining",
              "Meeting notes or agendas ahead of time",
              "A relaxed dress code, or a place to cool down",
              "A clear, private way to talk about workload",
            ],
          },
        ],
        helps: [
          "Treating what she shares as private",
          "Asking what, if anything, would help",
          "Judging her on her work, not on a hard day",
          "Making adjustments simple and quiet",
        ],
        doesnt: [
          "Sharing her situation with others",
          "Jokes about age or hormones",
          "Assuming she’s less capable",
          "Questioning breaks or time away",
        ],
        say: [
          "“Thanks for telling me. What would help?”",
          "“Take the time you need. I’ve got this covered.”",
          "“This stays between us.”",
          "“Would it help to adjust the schedule for a while?”",
        ],
        notSay: {
          quote: "“Is it that time of the month?”",
          instead: "“What would make this week easier?”",
        },
        forHer: {
          opener:
            "“I’d like to give you some context about something that may affect my work. Would you have ten minutes this week?”",
          message:
            "Hi. I’m sharing a short page about perimenopause, which I’m experiencing. It may affect my energy or focus on some days, and a few small adjustments would help. I’d be glad to talk it through whenever suits you. I’d appreciate you keeping this between us.",
        },
      },
      // ---------------------------------------------------------- GRANDPARENTS
      {
        slug: "grandparents",
        picker: { label: "Older relatives", blurb: "Her parents, aunts, and grandparents" },
        meta: {
          title: "For older relatives | Here With Her",
          description:
            "A gentle, respectful page for parents, aunts, and grandparents about what perimenopause is and how to support her.",
          imageHeadline: "For older relatives",
          imageSub: "A gentle guide to what she’s going through",
        },
        hero: {
          kicker: "For parents, aunts, and grandparents",
          title: "A newer way of talking about what she’s going through",
          intro:
            "She sent you this because she wants you close, not because anything is wrong with her. Many women of earlier generations went through this quietly, with little information. Today we talk about it more, and it helps to have family in her corner.",
        },
        extraSections: [
          {
            heading: "What’s different now",
            paragraphs: [
              "Doctors and researchers know much more than they used to. Women are also more willing to say out loud what they’re feeling. If you went through it yourself, your own experience may have been very different from hers, and that’s okay.",
            ],
          },
        ],
        notice: {
          items: [
            "She may be more tired than you’re used to seeing her",
            "She may feel hot when others are cold",
            "She may be more emotional, or quicker to snap, and then feel bad about it",
            "She may forget things or lose her words",
            "She may cancel visits when she’s worn out",
          ],
        },
        helps: [
          "Listening first, without comparing",
          "Saying “thank you for telling me”",
          "Keeping visits easy, and meeting her where she is",
          "Offering a hand with the kids or the house",
          "Letting her lead how much she shares",
        ],
        doesnt: [
          "“Back in my day we just got on with it”",
          "Comparing her to how you handled it",
          "Telling her it’s all in her head",
          "Passing her story on to other relatives",
        ],
        say: [
          "“Thank you for telling me. How can I help?”",
          "“That sounds really hard.”",
          "“I’m proud of you for looking into this.”",
          "“Come over whenever you’re up to it. No pressure.”",
        ],
        notSay: {
          quote: "“I went through it and I was fine.”",
          instead: "“It sounds like it’s been hard. I’m here if you want to talk.”",
        },
        forHer: {
          opener:
            "“There’s something I’d like to share with you about what I’ve been going through. I’d love for you to understand.”",
          message:
            "Hi. I wanted to share something with you. I’m in perimenopause, which is the time before menopause. It’s the reason I’ve been more tired lately. This page explains it simply. I’d love for you to read it, and then we can talk if you’d like.",
        },
      },

      // ---------------------------------------------------------------- FRIEND
      {
        slug: "friend",
        picker: { label: "A close friend or sister", blurb: "Be the one she can be real with" },
        meta: {
          title: "For a close friend or sister | Here With Her",
          description:
            "How to be the friend or sister she can be honest with while she goes through perimenopause.",
          imageHeadline: "For a close friend or sister",
          imageSub: "Be the one she can be real with",
        },
        hero: {
          kicker: "For a close friend or sister",
          title: "She chose you because you’re safe",
          intro:
            "Out of everyone she knows, she picked you to tell. Perimenopause can feel lonely, because many women don’t talk about it. Having one person who gets it makes a big difference.",
        },
        notice: {
          items: [
            "She seems more tired or quieter than usual",
            "She’s a bit more up and down",
            "She jokes about it, then goes quiet",
            "She says she feels like she’s “losing it,” or doesn’t feel like herself",
            "She’s relieved when someone just listens",
          ],
        },
        helps: [
          "Being a safe place: no advice unless she asks",
          "Checking in with a simple text",
          "Doing something low-key together, like a walk or coffee",
          "Sharing your own experience only if she wants to hear it",
          "Keeping what she tells you private",
        ],
        doesnt: [
          "Trying to top her story with yours",
          "Diagnosing her or telling her what to take",
          "Joking along when she isn’t laughing",
          "Telling mutual friends",
        ],
        say: [
          "“That sounds exhausting. Do you want to vent or want ideas?”",
          "“You’re not losing it. You’re going through something real.”",
          "“Want company on a walk?”",
          "“I’ve got you, no matter what.”",
        ],
        notSay: {
          quote: "“Oh, everyone goes through that. You’ll be fine.”",
          instead: "“That sounds really hard. Tell me more.”",
        },
        forHer: {
          opener:
            "“Can I tell you something I haven’t told many people? I’ve been going through some changes, and I trust you.”",
          message:
            "Hey you. I haven’t told many people this, but I’m in perimenopause. It’s been a lot. This page explains it better than I can. Could you read it? I just want someone in my corner.",
        },
      },

      // --------------------------------------------------------------- MANAGER
      {
        slug: "manager",
        picker: { label: "Her manager or HR", blurb: "Support, privacy, and simple adjustments" },
        meta: {
          title: "For managers and HR | Here With Her",
          description:
            "A short guide for managers and HR on supporting an employee going through perimenopause, with respect for privacy.",
          imageHeadline: "For managers and HR",
          imageSub: "Supporting an employee through perimenopause",
        },
        hero: {
          kicker: "For managers and HR",
          title: "Supporting an employee through perimenopause",
          intro:
            "An employee has chosen to tell you she is in perimenopause, the transition before menopause. It is common in women in their 40s and early 50s. With a little flexibility, most people keep doing their best work.",
        },
        notice: {
          heading: "What may show up",
          items: [
            "Tiredness or trouble concentrating after poor sleep",
            "Needing a cooler space, or a few minutes out of a meeting",
            "Needing breaks at unpredictable times",
            "Occasional stress, or lost words, in high-pressure moments",
          ],
        },
        extraSectionsAfter: [
          {
            heading: "Practical steps you can take",
            paragraphs: [
              "Start by asking her what would help. Her answer matters more than any list. Rules and rights differ by country and employer, so check your company’s policies, and talk with HR if you’re not sure.",
            ],
            items: [
              "Keep the conversation private, and agree together who else needs to know, if anyone",
              "Offer flexibility in start times or place of work, where the job allows",
              "Make it easy to step out for a few minutes",
              "Look at the workspace: temperature, airflow, a nearby window",
              "Share agendas and notes ahead of meetings",
              "Check in later, and adjust if needed",
            ],
          },
        ],
        helps: [
          "Thanking her for telling you",
          "Keeping what she shares confidential",
          "Judging the work, not a hard day",
          "Making support simple and quiet",
        ],
        doesnt: [
          "Asking for medical details she hasn’t offered",
          "Telling her team without her OK",
          "Jokes about age or hormones",
          "Quietly passing her over for opportunities",
        ],
        say: [
          "“Thank you for telling me. What would help?”",
          "“This stays between us.”",
          "“Let’s look at what we can adjust for a while.”",
          "“Let me know if anything changes.”",
        ],
        notSay: {
          quote: "“Are you sure you can handle this project right now?”",
          instead: "“What would make this project work for you?”",
        },
        forHer: {
          opener:
            "“I’d like to share something so you have the full picture, and ask for a couple of small adjustments. Do you have 15 minutes this week?”",
          message:
            "Hi. I’d like to talk with you about some health changes I’m going through. I’m in perimenopause, and some days it affects my sleep and focus. This page explains it briefly. A couple of small adjustments would help, and I’d appreciate you keeping this confidential. When would be a good time to talk?",
        },
      },

      // -------------------------------------------------------- ADULT CHILDREN
      {
        slug: "adult-children",
        picker: { label: "Her grown kids", blurb: "For adult children of a woman in perimenopause" },
        meta: {
          title: "For grown children | Here With Her",
          description:
            "A page for adult sons and daughters about what their mom may be going through in perimenopause, and how to help.",
          imageHeadline: "For grown children",
          imageSub: "What your mom may be going through",
        },
        hero: {
          kicker: "For grown children",
          title: "Your mom is going through a big change",
          intro:
            "You may have noticed she’s tired, moody, or forgetful. It’s easy to chalk it up to age or stress. For many women in their 40s and 50s, it’s perimenopause, the years before menopause. Knowing that can change how you show up for her.",
        },
        notice: {
          items: [
            "She seems more worn out or less like herself",
            "She’s quick to cry, or quick to snap",
            "She forgets things or repeats herself",
            "She cancels or leaves early",
            "She brings up health, or avoids the topic",
          ],
        },
        helps: [
          "Asking how she’s really doing, and listening",
          "Taking something off her plate",
          "Being patient when she forgets or repeats",
          "Offering to go to appointments, if she wants you there",
          "Calling just to talk",
        ],
        doesnt: [
          "Telling her she’s overreacting",
          "Treating it like a joke",
          "Assuming she’s just getting old",
          "Taking her moods personally",
        ],
        say: [
          "“Mom, how are you really doing?”",
          "“I read about this. Is that what you’ve been feeling?”",
          "“Can I take something off your plate this week?”",
          "“I’m here for you, and I’m not going anywhere.”",
        ],
        notSay: {
          quote: "“You’re being dramatic, Mom.”",
          instead: "“That sounds like a lot. What would help?”",
        },
        forHer: {
          opener:
            "“I wanted to explain why I’ve been different lately. It isn’t about you.”",
          message:
            "Hi sweetheart. I wanted to share something with you. I’m in perimenopause, which is why I’ve been more tired and up and down. This page explains it. It would mean a lot if you read it. I love you.",
        },
      },
    ],


    // 6. TOOL PAGES ------------------------------------------------------
    // Two pages that aren’t audience pages: /today (quick messages) and /quiz.
    tools: {
      today: {
        slug: "today",
        meta: {
          title: "How I’m feeling today | Here With Her",
          description:
            "A quick way to tell the people around her how today is going, with a message she can edit and send.",
          imageHeadline: "How I’m feeling today",
          imageSub: "A quick message you can send in seconds",
        },
        hero: {
          kicker: "A quick tool",
          title: "Say how today is going, in seconds",
          intro:
            "On some days, explaining is too much. Pick how you feel, change the words if you like, and send it. Nothing you type here is saved.",
        },
        states: [
          { label: "Rough night of sleep", message: "Rough night, and I’m running on empty today. Please go easy on me. There’s nothing to fix. I’ll be better soon." },
          { label: "Hot and foggy", message: "It’s a hot flash and foggy-brain kind of day. If I lose my words or open all the windows, that’s perimenopause, not you." },
          { label: "Low energy", message: "Low energy today. I might need to skip plans or leave early. It’s not about you, and I’d love to try again soon." },
          { label: "On edge", message: "I’m feeling on edge today. If I snap, it’s my hormones, not you. I’ll be okay, and I may need a little space." },
          { label: "Need some help", message: "Today I could really use some help. Could you take care of dinner or the kids tonight? Thank you for being on my team." },
          { label: "Doing okay", message: "Good day today. Thank you for being patient on the harder ones. It means a lot." },
        ],
        builder: [
          { label: "What’s hardest lately", starter: "The hardest part lately is", placeholder: "sleeping through the night" },
          { label: "What I wish people knew", starter: "What I wish people knew is", placeholder: "it isn’t about them" },
          { label: "What helps me", starter: "What helps me is", placeholder: "a quiet evening and a cool room" },
        ],
        defaultMessage: "Hi. Here’s how I’m doing today:",
      },
      quiz: {
        slug: "quiz",
        meta: {
          title: "How well does your family get it? | Here With Her",
          description:
            "A quick true-or-false quiz about perimenopause. Take it, then send it to your family.",
          imageHeadline: "How well does your family get it?",
          imageSub: "A quick true-or-false quiz",
        },
        hero: {
          kicker: "A quick quiz",
          title: "How well does your family get it?",
          intro:
            "Take the quiz, and then send it to the people around you. It’s a gentle way to start the conversation.",
        },
        forHer: {
          opener:
            "“I found this quiz about what I’ve been going through. Want to see how you do?”",
          message:
            "Hi. I found a short quiz about perimenopause, which is what I’ve been going through. It takes about two minutes. Could you try it and tell me what you think?",
        },
      },
    },
  },
};

if (typeof module !== "undefined") module.exports = { SITE, CONTENT };
