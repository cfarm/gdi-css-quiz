// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "CSS Quiz",
        "main":    "<p>This quiz is to evaluate your CSS knowledge for the <a href='http://www.meetup.com/Girl-Develop-It-Philadelphia/events/103820282/'>GDI Philly Intro to Sass class</a>.</p>",
        "results": "<h5>More CSS Resources</h5><ul><li><a href='http://girldevelopit.com/materials'>Girl Develop It Course Materials</a></li><li><a href='https://developer.mozilla.org/en-US/docs/CSS'>Mozilla Developer Network CSS Tutorials</a></li><li><a href='http://css-tricks.com/'>CSS-Tricks</a> for Demos, Tips, and Code Snippets</li></ul>",
        "level1":  "You're ready to take your CSS chops to the next level with Sass - <a href='http://www.meetup.com/Girl-Develop-It-Philadelphia/events/103820282/'>go sign up</a>!",
        "level2":  "You're ready to take your CSS chops to the next level with Sass - <a href='http://www.meetup.com/Girl-Develop-It-Philadelphia/events/103820282/'>go sign up</a>!",
        "level3":  "You should brush up on your CSS skills before taking your CSS chops to the next level - we want you to be comfortable using CSS while learning all the new Sass-y stuff. Check out <a href='http://www.meetup.com/Girl-Develop-It-Philadelphia/#upcoming'>upcoming Girl Develop It classes</a> or review the <a href='http://girldevelopit.com/materials'>class materials</a> to beef up your skills.",
        "level4":  "You should brush up on your CSS skills before taking your CSS chops to the next level - we want you to be comfortable using CSS while learning all the new Sass-y stuff. Check out <a href='http://www.meetup.com/Girl-Develop-It-Philadelphia/#upcoming'>upcoming Girl Develop It classes</a> or review the <a href='http://girldevelopit.com/materials'>class materials</a> to beef up your skills.",
        "level5":  "You should brush up on your CSS skills before taking your CSS chops to the next level - we want you to be comfortable using CSS while learning all the new Sass-y stuff. Check out <a href='http://www.meetup.com/Girl-Develop-It-Philadelphia/#upcoming'>upcoming Girl Develop It classes</a> or review the <a href='http://girldevelopit.com/materials'>class materials</a> to beef up your skills." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "CSS is used to...",
            "a": [
                {"option": "lend structure to the document",      "correct": false},
                {"option": "script the interactions on the page",     "correct": false},
                {"option": "style the presentation of the document",      "correct": true},
                {"option": "update content in the document ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>You got it-</span> Cascading Style Sheets control the presentation of a webpage.</p>",
            "incorrect": "<p><span>Incorrect.</span> <a href='https://developer.mozilla.org/en-US/docs/CSS'>Learn more about the role of Cascading Style Sheets in web documents</a>.</p>" // no comma here
        },
        { // Question 2
            "q": "What is the total width of this container when accounting for the box model? <br>#container {width: 100px; padding: 20px 10px;}",
            "a": [
                {"option": "110",    "correct": false},
                {"option": "120",     "correct": true},
                {"option": "100",      "correct": false},
                {"option": "140",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 times a year in Michigan.</p>" // no comma here
        },
        { // Question 3
            "q": "Which of the following is used to display links <strong>without</strong> an underline?",
            "a": [
                {"option": "{ text-decoration: no-underline; }",        "correct": false},
                {"option": "{ text-decoration: underline; }",           "correct": false},
                {"option": "{ text-decoration: 0; }",  "correct": false},
                {"option": "{ text-decoration: none; }",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> You can indeed buy a car on Ebay or in a used car lot.</p>",
            "incorrect": "<p><span>No.</span> You can't buy a car at the zoo or in a grocery store, try Ebay or a used car lot instead.</p>" // no comma here
        },
        { // Question 4
            "q": "The # symbol specifies that the selector is...",
            "a": [
                {"option": "a class",        "correct": false},
                {"option": "an element",           "correct": false},
                {"option": "a tag",  "correct": false},
                {"option": "an ID",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 5
            "q": "What is the right margin value in the follow style? <br>#id {margin: 20px 30px 10px 50px; }",
            "a": [
                {"option": "20px",        "correct": false},
                {"option": "30px",           "correct": true},
                {"option": "10px",  "correct": false},
                {"option": "50px",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 6
            "q": "Which property is used to change the size of text?",
            "a": [
                {"option": "font-scale",        "correct": false},
                {"option": "font-style",           "correct": false},
                {"option": "font-size",  "correct": true},
                {"option": "text-size",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 7
            "q": "Which of the following CSS selectors has the most <a href='https://developer.mozilla.org/en-US/docs/CSS/Specificity'>specificity</a>?",
            "a": [
                {"option": "p.description a",        "correct": true},
                {"option": "p",           "correct": false},
                {"option": "p a",  "correct": false},
                {"option": ".description a",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 8
            "q": "How do you center a block-level element horizontally?",
            "a": [
                {"option": "{ align: center; }",        "correct": false},
                {"option": "{ float: middle; }",           "correct": false},
                {"option": "{ margin: 50%; }",  "correct": false},
                {"option": "{ margin: 0 auto; }",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 9
            "q": "How do you center a block-level element horizontally?",
            "a": [
                {"option": "{ align: center; }",        "correct": false},
                {"option": "{ float: middle; }",           "correct": false},
                {"option": "{ margin: 50%; }",  "correct": false},
                {"option": "{ margin: 0 auto; }",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 10
            "q": "How do you center an inline element horizontally?",
            "a": [
                {"option": "{ align: center; }",        "correct": false},
                {"option": "{ text-align: center; }",           "correct": true},
                {"option": "{ margin: 50%; }",  "correct": false},
                {"option": "{ margin: 0 auto; }",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        } // no comma here
    ]
};