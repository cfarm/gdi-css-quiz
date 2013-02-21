// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "CSS Quiz",
        "main":    "<p>This quiz is to evaluate your CSS knowledge for the <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/events/103820282/'>GDI Philly Intro to Sass class</a>.</p>",
        "results": "<h5>More CSS Resources</h5><ul><li><a target='_blank' href='http://girldevelopit.com/materials'>Girl Develop It Course Materials</a></li><li><a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS'>Mozilla Developer Network CSS Tutorials</a></li><li><a target='_blank' href='http://css-tricks.com/'>CSS-Tricks</a> for Demos, Tips, and Code Snippets</li></ul>",
        "level1":  "You're ready to take your CSS chops to the next level with Sass - <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/events/103820282/'>go sign up</a>!",
        "level2":  "You're ready to take your CSS chops to the next level with Sass - <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/events/103820282/'>go sign up</a>!",
        "level3":  "You should brush up on your CSS skills before taking them to the next level with Sass - we want you to be comfortable using CSS while learning all the new Sass-y stuff. Check out <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/#upcoming'>upcoming Girl Develop It classes</a> or review the <a target='_blank' href='http://girldevelopit.com/materials'>class materials</a> to beef up your skills.",
        "level4":  "You should brush up on your CSS skills before taking them to the next level with Sass - we want you to be comfortable using CSS while learning all the new Sass-y stuff. Check out <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/#upcoming'>upcoming Girl Develop It classes</a> or review the <a target='_blank' href='http://girldevelopit.com/materials'>class materials</a> to beef up your skills.",
        "level5":  "You should brush up on your CSS skills before taking them to the next level with Sass - we want you to be comfortable using CSS while learning all the new Sass-y stuff. Check out <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/#upcoming'>upcoming Girl Develop It classes</a> or review the <a target='_blank' href='http://girldevelopit.com/materials'>class materials</a> to beef up your skills." // no comma here
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
            "incorrect": "<p><span>Incorrect.</span> <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS'>Learn more about the role of Cascading Style Sheets in web documents</a>.</p>" // no comma here
        },
        { // Question 2
            "q": "What is the total width of this container when accounting for the box model? <br>#container {width: 100px; padding: 20px 10px;}",
            "a": [
                {"option": "110",    "correct": false},
                {"option": "120",     "correct": true},
                {"option": "100",      "correct": false},
                {"option": "140",   "correct": false} // no comma here
            ],
            "correct": "<p><span>You got it!</span> 100 pixels wide + 10 pixels of padding on each side = 120 pixels total width.</p>",
            "incorrect": "<p><span>Incorrect.</span> 100 pixels wide + 10 pixels of padding on each side = 120 pixels total width. <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/box_model'>Review the box model</a>.</p>" // no comma here
        },
        { // Question 3
            "q": "Which of the following is used to display links <strong>without</strong> an underline?",
            "a": [
                {"option": "{ text-decoration: no-underline; }",        "correct": false},
                {"option": "{ text-decoration: underline; }",           "correct": false},
                {"option": "{ text-decoration: 0; }",  "correct": false},
                {"option": "{ text-decoration: none; }",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Yup, you got it.</span></p>",
            "incorrect": "<p><span>Incorrect.</span> Check out this <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/text-decoration'>text-decoration documentation</a> to learn more.</p>" // no comma here
        },
        { // Question 4
            "q": "The # symbol specifies that the selector is...",
            "a": [
                {"option": "a class",        "correct": false},
                {"option": "an element",           "correct": false},
                {"option": "a tag",  "correct": false},
                {"option": "an ID",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> You know the difference between a class and an ID.</p>",
            "incorrect": "<p><span>Incorrect.</span> Check out this <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Getting_Started/Selectors'>CSS selector documentation</a> to review.</p>" // no comma here
        },
        { // Question 5
            "q": "What is the right margin value in the follow style? <br>#id {margin: 20px 30px 10px 50px; }",
            "a": [
                {"option": "20px",        "correct": false},
                {"option": "30px",           "correct": true},
                {"option": "10px",  "correct": false},
                {"option": "50px",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You know your CSS shorthand values!</p>",
            "incorrect": "<p><span>Incorrect.</span> Read up on <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties#Margin_and_Padding_Properties'>CSS shorthand for the margin property</a>.</p>" // no comma here
        },
        { // Question 6
            "q": "Which of the following are features of CSS3? (Choose all that apply)",
            "a": [
                {"option": "CSS gradients",        "correct": true},
                {"option": "box-sizing",           "correct": true},
                {"option": "media queries",  "correct": true},
                {"option": "background images",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right on!</span> Those are all part of the CSS3 spec.</p>",
            "incorrect": "<p><span>Incorrect.</span> Review the features of CSS3 on the <a target='_blank' href='https://developer.mozilla.org/en-US/docs/tag/CSS3'>Mozilla Developer Network</a>.</p>" // no comma here
        },
        { // Question 7
            "q": "Which of the following CSS selectors has the most <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Specificity'>specificity</a>?",
            "a": [
                {"option": "p.description a",        "correct": true},
                {"option": "p",           "correct": false},
                {"option": "p a",  "correct": false},
                {"option": ".description a",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> p.description a is the most <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Specificity'>specific</a> selector.</p>",
            "incorrect": "<p><span>Incorrect.</span> You should read up on <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Specificity'>CSS specificity</a> for more info</p>" // no comma here
        },
        { // Question 8
            "q": "Which of the following properties is used to set the stacking order of elements on a page (e.g., it makes an element overlap other elements)?",
            "a": [
                {"option": "margin",        "correct": false},
                {"option": "display",           "correct": false},
                {"option": "position",  "correct": false},
                {"option": "z-index",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You're a CSS genius.</p>",
            "incorrect": "<p><span>Incorrect.</span> The answer is <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Understanding_z-index'>z-index</a>, a tricky property to learn and use.</p>" // no comma here
        },
        { // Question 9
            "q": "How do you center a block-level element horizontally?",
            "a": [
                {"option": "{ align: center; }",        "correct": false},
                {"option": "{ float: middle; }",           "correct": false},
                {"option": "{ margin: 50%; }",  "correct": false},
                {"option": "{ margin: 0 auto; }",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You're a centering pro.</p>",
            "incorrect": "<p><span>Incorrect.</span> Check out the <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/margin#Examples'>margin property</a> to see how to center a <a target='_blank' href='https://developer.mozilla.org/en-US/docs/HTML/Block-level_elements'>block-level element</a>.</p>" // no comma here
        },
        { // Question 10
            "q": "How do you center an inline element horizontally?",
            "a": [
                {"option": "{ align: center; }",        "correct": false},
                {"option": "{ text-align: center; }",           "correct": true},
                {"option": "{ margin: 50%; }",  "correct": false},
                {"option": "{ margin: 0 auto; }",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Yup!</span> You're the centering expert.</p>",
            "incorrect": "<p><span>Incorrect.</span> Read up on <a target='_blank' href='https://developer.mozilla.org/en-US/docs/HTML/Inline_elements'>inline elements</a> and <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/text-align'>text align</a> to learn more.</p>" // no comma here
        } // no comma here
    ]
};