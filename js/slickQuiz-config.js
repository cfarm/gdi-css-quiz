// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "JavaScript Basics Quiz",
        "main":    "<p>This quiz is to evaluate your JavaScript basics knowledge for the <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/events/228782436/'>GDI Philly Intermediate JavaScript class</a>.</p>",
        "results": "<h5>More JavaScript Resources</h5><ul><li><a target='_blank' href='http://girldevelopit.com/materials'>Girl Develop It Course Materials</a></li><li><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>Mozilla Developer Network JavaScript Tutorials</a></li><li><a target='_blank' href='https://github.com/rmurphey/js-assessment'>JS Assessment</a></li></ul>",
        "level1":  "You're ready to take your JavaScript skills to the next level with Intermediate JS - <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/events/228782436/'>go sign up</a>!",
        "level2":  "You're ready to take your JavaScript skills to the next level with Intermediate JS - <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/events/228782436/'>go sign up</a>!",
        "level3":  "You should brush up on your JavaScript basics before attempting to learn more advanced topics. Check out <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/#upcoming'>upcoming Girl Develop It classes</a> or review the <a target='_blank' href='http://cfarm.github.io/gdi-intro-js'>Intro to JavaScript class materials</a> to beef up your skills.",
        "level4":  "You should brush up on your JavaScript basics before attempting to learn more advanced topics. Check out <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/#upcoming'>upcoming Girl Develop It classes</a> or review the <a target='_blank' href='http://cfarm.github.io/gdi-intro-js'>Intro to JavaScript class materials</a> to beef up your skills.",
        "level5":  "You should brush up on your JavaScript basics before attempting to learn more advanced topics. Check out <a target='_blank' href='http://www.meetup.com/Girl-Develop-It-Philadelphia/#upcoming'>upcoming Girl Develop It classes</a> or review the <a target='_blank' href='http://cfarm.github.io/gdi-intro-js'>Intro to JavaScript class materials</a> to beef up your skills." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "JavaScript is often used to...",
            "a": [
                {"option": "lend structure to a website",      "correct": false},
                {"option": "respond to a user's interactions on the page",     "correct": true},
                {"option": "style the presentation of a webpage",      "correct": true},
                {"option": "update content in a webpage ",     "correct": true} // no comma here
            ],
            "correct": "<p><span>You got it-</span> JavaScript can be used to respond to user's input, add styles to your page, and even load content and HTML.</p>",
            "incorrect": "<p><span>Incorrect.</span> <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#What_is_JavaScript'>Learn more about the role of JavaScript in web documents</a>.</p>" // no comma here
        },
        { // Question 2
            "q": "Which of the following is not a valid variable declaration in Javascript?",
            "a": [
                {"option": "var $kittens = 5;",    "correct": false},
                {"option": "var kittens = 5;",     "correct": false},
                {"option": "var kittens = undefined",      "correct": false},
                {"option": "var 5kittens = 5;",   "correct": true} // no comma here
            ],
            "correct": "<p><span>You got it!</span> Variable names cannot start with numbers.</p>",
            "incorrect": "<p><span>Incorrect.</span> Variable names need to start with a letter, $, or _. Variable names can only be made of letters, numbers, $, or _. And variable values can be special values like undefined or null. <a target='_blank' href='http://cfarm.github.io/gdi-intro-js/class1.html#/13'>Review variable naming and values</a>.</p>" // no comma here
        },
        { // Question 3
            "q": "Which of the following arithmetic operations finds the remainder of a divided by b?",
            "a": [
                {"option": "a - b",        "correct": false},
                {"option": "a / b",           "correct": false},
                {"option": "a * b",  "correct": false},
                {"option": "a % b",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Yup, you nailed it. The modulus operator gives the remainder. Check out this list of <a target='_blank' href='http://cfarm.github.io/gdi-intro-js/class1.html#/20'>arithmetic operators</a> to learn more. </span></p>",
            "incorrect": "<p><span>Incorrect.</span> Check out this list of <a target='_blank' href='http://cfarm.github.io/gdi-intro-js/class1.html#/20'>arithmetic operators</a> to learn more.</p>" // no comma here
        },
        { // Question 4
            "q": "Which function will print the name 'Maru the cat' to the console, given an argument of 'Maru'?",
            "a": [
                {"option": "function printName(catName) { console.log(catName + ' the cat'); }",        "correct": true},
                {"option": "function printName(catName) { return 'Maru the cat'; }",           "correct": false},
                {"option": "function printName(catName) { var message = catName + ' the cat'); console.log(message) }",  "correct": true},
                {"option": "function printName(catName) { console.print(catName + ' the cat'); }",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Both functions will print the message 'Maru the cat' to the console when called with an input of 'Maru.'</p>",
            "incorrect": "<p><span>Incorrect.</span> Check out this <a target='_blank' href='http://cfarm.github.io/gdi-intro-js/class1.html#/26'>lesson about JavaScript functions</a> to review.</p>" // no comma here
        },
        { // Question 5
            "q": "What's the return value from this function when inputting the number 100 for the 'total' argument? <span style='font-weight: normal'><br>function calculateTip(total) {<br>&nbsp;&nbsp;&nbsp;&nbsp;var tipPercent = 0.20; <br>&nbsp;&nbsp;&nbsp;&nbsp;return (total * tipPercent);<br>}</span>",
            "a": [
                {"option": "200",        "correct": false},
                {"option": "20",           "correct": true},
                {"option": "10",  "correct": false},
                {"option": "50",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You know your function syntax and math operators!</p>",
            "incorrect": "<p><span>Incorrect.</span> Check out this <a target='_blank' href='http://cfarm.github.io/gdi-intro-js/class1.html#/26'>lesson about JavaScript functions</a> to review.</p>" // no comma here
        },
        { // Question 6
            "q": "What message will be printed to the console? <br><span style='font-weight: normal'>var awesomeGroup = 'GDI Philly';<br>function whatIsAwesome() {<br>&nbsp;&nbsp;&nbsp;&nbsp;var awesomeGroup = 'Girl Develop It';<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log (awesomeGroup + ' is pretty awesome.');<br>}<br>whatIsAwesome();</span>",
            "a": [
                {"option": "Girl Develop It is pretty awesome.",        "correct": true},
                {"option": "GDI Philly is pretty awesome.",           "correct": false},
                {"option": "GDI is pretty awesome.",           "correct": false},
                {"option": "awesomeGroup is pretty awesome.",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right on!</span> You remember the difference between local and global scope.</p>",
            "incorrect": "<p><span>Incorrect.</span> <a target='_blank' href='http://cfarm.github.io/gdi-intro-js/class2.html#/2'>Review how local and global variable scope works</a>.</p>" // no comma here
        },
        { // Question 7
            "q": "Which color will be logged to the console?<br><span style='font-weight:normal'>var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];<br>for (var i = 0; i < rainbowColors.length; i++) {<br>&nbsp;&nbsp;if (i === 3) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(rainbowColors[i];<br>&nbsp;&nbsp;}<br>}</span>",
            "a": [
                {"option": "Red", "correct": false},
                {"option": "Orange", "correct": false},
                {"option": "Yellow", "correct": false},
                {"option": "Green", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> The string 'Green' is at position 3 inside the rainbowColors array, and will be printed to the console.</p>",
            "incorrect": "<p><span>Incorrect.</span> The string 'Green' is at position 3 inside the rainbowColors array, and will be printed to the console. Remember that in JavaScript, array positions start counting at 0 - so the first element is the 0 index, the second is 1, and so on.</p>" // no comma here
        },
        { // Question 8
            "q": "Which of the following statements will set the 'age' property of the myKitten object to equal the number 3?<br><span style='font-weight: normal;'>var myKitten = {<br>&nbsp;&nbsp;&nbsp;&nbsp;age: 2,<br>&nbsp;&nbsp;&nbsp;&nbsp;name: 'Fluffy',<br>&nbsp;&nbsp;&nbsp;&nbsp;furColor: 'orange'<br>}</span>",
            "a": [
                {"option": "myKitten.age = '3';",        "correct": false},
                {"option": "myKitten.age = 3;",           "correct": true},
                {"option": "myKitten['age'] = 3;",  "correct": true},
                {"option": "myKitten[age] = '3';",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You can update objects using both bracket notation and dot notation.</p>",
            "incorrect": "<p><span>Incorrect.</span> Remember, you can update objects using both bracket notation and dot notation. <a target='_blank' href='http://cfarm.github.io/gdi-intro-js/class3.html#/2'>Review how to set and get values in objects</a>.</p>" // no comma here
        },
        { // Question 9
            "q": "What does the acronym DOM stand for?",
            "a": [
                {"option": "Document Orientation Model",        "correct": false},
                {"option": "Document Object Management",           "correct": false},
                {"option": "Document Object Model",  "correct": true},
                {"option": "Document Object Math",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> The DOM tree represents the structure of an HTML page so we can access and manipulate elements within it with JavaScript.</p>",
            "incorrect": "<p><span>Incorrect.</span> Learn more about the <a target='_blank' href='http://cfarm.github.io/gdi-intro-js/class3.html#/9'>DOM</a> and how it represents the structure of an HTML page so we can access and manipulate elements with JavaScript.</p>" // no comma here
        },
        { // Question 10
            "q": "Which type of events can be used to collect input from a user through an HTML form with Javascript?",
            "a": [
                {"option": "onload event",        "correct": false},
                {"option": "onsave event",           "correct": false},
                {"option": "submit event",  "correct": true},
                {"option": "onclick event",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Yup!</span> You're a form events expert. Learn about even more <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/Events'>JavaScript events</a>.</p>",
            "incorrect": "<p><span>Incorrect.</span> Read up on <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/Events'>JavaScript events</a>.</p>" // no comma here
        } // no comma here
    ]
};