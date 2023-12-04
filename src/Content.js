import { motion } from "framer-motion"

function Content ({week, displaying, swapDisplaying, index}) {
    let num = (week - 1) * 5
    let content
    content = contentarr[num + index]
    
    return (
        [
            <motion.div className="day" onClick = {() => swapDisplaying()}>
                {displaying ? content:content.props.children[0] }
            </motion.div>
        ]
    )
}

let contentarr = [
<>
    <li>Monday - Object oriented programming, dot notation and data types</li>
        <div className="divider"></div>
        <p>Object oriented programming is a programming methodology based around creating objects with attributes and methods which can be called upon, an example of a method would be "console.log()" and calling upon an attribute would look like "objectName.attributeName". data types are the types of data that can be stored in a variable and the common data types are as follows:</p>
        <ul id="smallList">
            <li>String - a string of characters</li>
            <li>Number - a numerical value</li>
            <li>Bigint - an exceptionally large number</li>
            <li>Boolean - True or False</li>
            <li>Undefined - the data type wasn't initialized</li>
            <li>Null - the data type was initialized but the value is empty</li>
            <li>Object - a data type that references other data types and functions</li>
        </ul>
</>,
<>
<li>Tuesday - Coding fundamentals, computational thinking and variables</li>
                <div className="divider"></div>
                <p>Coding fundamentals can be broken down into 3 main categories:</p>
                <ul id = "smallList">
                    <li>Sequence - the order in which code is run</li>
                    <li>Selection - which code is run based on different conditions</li>
                    <li>Iteration - looping sections of code instead of writing it out multiple times</li>
                </ul>
                <p>A variable is a storage container for a single piece of data such as a string or a number</p>
                <image src="images/foundationcoding.png"></image>
</>,
<>
<li>Wednesday - Selectors (if and else), arrays and how to access them</li>
                <div className="divider"></div>
                <p>The most common way to select which code to run is an if statement which has the following syntax "if (condition) {"{code to execute if true}"}". If statements are often followed by an else statement which looks like "else {"{code to run if condition is false}"}".</p>
                <p> Arrays are a data type that are a sort of list of variables, to initialize an array you can put "arrayName = [example1,example2,example3]"(you can also initialize them with empty square brackets), you can access and alter an array using "arrayName[index]" where index is the location in the list starting from 0</p>
            <img src={process.env.PUBLIC_URL + "/images/arrays.png"} alt ="arrays"></img>
</>,
<>
<li>Thursday - Loops/Iteration(for and while) and functions and how to declare them</li>
                <div className="divider"></div>
<p>There are 2 main loops that people use when programming:</p>
                <ul id = "smallList">
                    <li>For Loop - a loop that runs a set number of times and is formatted as: "for {"((initializer)let i = 0;(condition) i < 10;(iterator) i++) {code to run each iteration}"}"</li>
                    <li>While Loop - a loop that runs until a condition is no longer true and is written as: "while (condition) {"{code to be run}"}"</li>
                </ul>
                <p>Functions are snippets of code that can be run by being called upon as well as taking parameters to produce a desired outcome, there are multiple ways to declare a function but my preferred way is:  {'\n'} "function functionName(parameter1,parameter2) {"{code to be run}"}" {'\n'} To call upon a function you can use the following syntax: {'\n'} functionName(parameters) {'\n'} The number of parameters a function can have are not limited and can be 0 or over a hundred depending on its use</p>
                <image src={process.env.PUBLIC_URL + "/images/whileLoop.png"}></image>
</>,
<>
<li>Friday - Javascript challenges</li>
                <div className="divider"></div>
                <p>The javascript challenges were basic challenges focused around functions and array manipulation</p>
</>, //end of week 1
<>
<li>Monday - Creating Objects in javascript and an introduction to HTML</li>
                <div className="divider"></div>
            <p>Objects are a type of data type that contains other data types, similar to an array however they can also contain functions as well, to declare an object you would use the syntax: "const objectName = {"{ attribute: value, attribute2: value}"}" and you would call upon it using dot notation such as "objectName.attribute2". to use a function in an object instead of doing "attribute: value" you would use "functionName: function() {"{code}"}" and you would call upon it using "objectName.functionName()"</p>
                <p>HTML (hyper text markup language) is the language used to add content to web pages, it is made up of tags and often paired with CSS, the most common HTML tags are:</p>
                <ul id="smallList">
                    <li>head - this is where all the metadata and file referencing goes</li>
                    <li>body - the main bulk of the content(text, images, links, pretty much everything you can see)</li>
                    <li>p - stands for paragraph, a basic line of text</li>
                    <li>h1-6 - headers are used as larger text which function as titles and subtitles</li>
                    <li>a - a link tag which has an attribute for links, "href="link""</li>
                    <li>li - a list item, often used similarly to a p tag but only in lists</li>
                    <li>ul - unordered list, a container for list items with bullet points</li>
                    <li>ol - ordered list, a container for list items with numbered points to show the order</li>
                    <li>div - a tag used to divide the page up into sections</li>
                </ul>
                <img src={process.env.PUBLIC_URL + "/images/htmltags.png"}></img>
</>,
<>
<li>Tuesday - Databases, intro to SQL and HTML attributes</li>
                <div className="divider"></div>
                <p>Databases are large tables of data that can be accessed and altered using SQL, SQL is a query language that lets you select items from a database with complex parameters, SQL is a language that is hard to break up into little bits so I have attached my notes which I often cross reference in a link below</p>
                <a href="SQLnotes.html" target="_blank">you can find my SQL notes here</a>
                <p>HTML attributes provide additional information about an element, such as a links "href="link"" or an images "src="image location"", it can also be used to specify things like width height and other attributes depending on the element type</p>
                <img src={process.env.PUBLIC_URL + "/images/sqltable.png"}></img>
</>,
<>
<li>Wednesday - Intro to CSS, our first project and github</li>
                <div className="divider"></div>
                <p>CSS (cascading style sheet) is a programming language that alters how html is represented on a page, this is done by specifying different attributes of tags using the format "body {"{ background-color: rgb(255,150,150);}"}", it is common practice to have a set of attributes that show up the most to be set as the standard css and then become more specific when you need to using classes and ids, to use classes and ids you have to give a tag an attribute of either "id="idName"" or "class="className"" and then in css you can reference the class using ".className {}" and an id using "#idName {}"</p>
                <p>there are a lot of attributes in css but the best way to go about it is trial and error and a general direction you want to go in</p>
                <p>Github is a source control software that allows you to backup and share files on a remote server, github allows you to branch and merge repositories(the name of a folder that is being shared) so that multiple people can work on the same project at the same time, it also allows frequent backups through commits and pushes which puts it onto and updates the remote server</p>
                <img src={process.env.PUBLIC_URL + "/images/github.jpg"}></img>
</>,
<>
<li>Thursday - SQL Challenges and creating and manipulating databases</li>
                <div className="divider"></div>
                <p>These were mainly table manipulation and query challenges involving new sql command words</p>
</>,
<>
<li>Friday - CSS presentations and Project work(this site)</li>
                <div className="divider"></div>
<p>Me and Eghosa presented about the CSS attribute Font and its related attributes</p>
</>, //end of week 2
<>
<li>Monday - Flexboxes and more project work</li> 
                <div className="divider"></div>
                <p>Flex boxes are a good way to organize and layout your site, it has multiple related attributes, flexboxes are a very expansive topic that I suggest reading up on</p> 
                <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="blank">You can read up on flexboxes here</a> 
                <p>Or you can read my wednesday notes which look into flexboxes more indepth</p> 
</>,
<>
<li>Tuesday - Project management and project work</li> 
                <div className="divider"></div>
                <p>We worked on a task around building a database for an archery club app as well as designing a ui for the app as well with a colour scheme of red with black and white, it also had some specific requirements such as being able to create an account, see average score, and look at older rounds as well as inputting new rounds</p> 
                <div className="horizontalContainer"> 
                    <img src={process.env.PUBLIC_URL + "/images/login page.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/home page.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/score page.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/account page.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/all scores.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/createedit account.png"} className="imgSideBySide"></img>
                </div> 
                <div className="horizontalContainer"> 
                    <img src={process.env.PUBLIC_URL + "/images/login.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/home.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/scores.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/account.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/all scores 2.png"} className="imgSideBySide"></img>
                    <img src={process.env.PUBLIC_URL + "/images/create edit account.png"} className="imgSideBySide"></img>
                </div>
</>,
<>
<li>Wednesday - Flex boxes in depth and project work</li> 
                <div className="divider"></div>
                <p>Because of the importance of flex boxes, here is a look into all of the settings related to and around flex boxes</p> 
                <p>To make a container a flex box you can initialize it with the line "display:flex;"</p> 
                <p>Flexbox has a lot of related attributes which are:</p> 
                <h4>Flex-direction - the direction items are stacked in</h4> 
                <ul id="smallList"> 
                    <li>Column - top to bottom</li> 
                    <li>Column-reverse - bottom to top</li> 
                    <li>Row - left to right</li> 
                    <li>Row-reverse - right to left</li> 
                </ul> 
                <h4>Flex-wrap - whether items should wrap or not</h4> 
                <ul id="smallList"> 
                    <li>Wrap - items will wrap if necessary</li> 
                    <li>Nowrap - items will not wrap (default)</li> 
                    <li>Wrap-reverse - items will wrap if necessary, in reverse order</li> 
                </ul> 
                <h4>Flex-flow - shorthand for setting both flex-direction and flex-wrap</h4> 
                <p>example: "flex-flow: row wrap;"</p> 
                <h4>Justify-content - used to align flex items</h4> 
                <ul id="smallList"> 
                    <li>Center - items will be aligned at the center of the container</li> 
                    <li>Flex-start - items will be aligned at the start of the container (default)</li> 
                    <li>Flex-end - items are aligned at the end of the container</li> 
                    <li>Space-around - displays items with space before, between, and after the lines</li> 
                </ul> 
                <h4>Align-items - also used to align flex items</h4> 
                <ul id="smallList"> 
                    <li>Center - aligns items in the middle of the container</li> 
                    <li>Flex-start - aligns items at the start of the container</li> 
                    <li>Flex-end - aligns items at the end of the container</li> 
                    <li>Stretch - stretches items to fill the container (default)</li> 
                    <li>Baseline - aligns items so that their baseline aligns</li> 
                </ul> 
                <h4>Align-content - aligns the flex lines</h4> 
                <ul id="smallList"> 
                    <li>Space-between - displays flex lines with equal space between them</li> 
                    <li>Space-around - displays the flex lines with space before, between, and after them</li> 
                    <li>Stretch - stretches the flex lines to take up remaining space (default)</li> 
                    <li>Center - displays the flex lines in the middle of the container</li> 
                    <li>Flex-start - displays the flex lines at the start of the container</li> 
                    <li>Flex-end - displays the flex lines at the end of the container</li> 
                </ul> 
                <p>This is all of the related attributes for flexboxes that I could find, and also the reason I do not enjoy doing css notes however knowing about these are essentially for properly styling a site</p> 
</>,
<>
<li>Thursday - Project management and project work</li> 
                <div className="divider"></div>
                <p>We learned more about the software development cycle as well as learning how to do pseudo code using a flowchart to show a program flow</p> 
                <p>The agile Workflow is an iterative workflow where you constantly repeat reviewing and developing the software until it is in a release ready state</p> 
                <p>The agile workflow is broken up into multiple steps:</p> 
                <ul id="smallList"> 
                    <li>Concept - the general idea and basic requirements of the software</li> 
                    <li>Design - fleshing out the concept with UI designs and pseudo code</li> 
                    <li>Develop - Coding feature and putting features into the main software</li> 
                    <li>Testing - testing all possible inputs including extremes to prevent it from breaking whilst a user is using the software</li> 
                    <li>Deploy - The code is deployed to a test group who will use the product and provide feedback</li> 
                    <li>Review - The current state of the software and all user reviews are considered and investigated to further improve user experience</li> 
                    <li>Release - The final product is released and is at a fully functional state with minimal bugs</li> 
                    <li>Maintenance - The software is updated and maintained regularly to squash any missed bugs and to further improve the software if necessary</li> 
                </ul> 
                <p>The stages Design, Develop, Testing, Deploy, Review are repeated until it is a release ready software, this is the iterative part of the agile workflow, one iteration is often referred to as a sprint</p> 
                <img src={process.env.PUBLIC_URL + "/images/agile.png"} id="bigDiagram"></img>
</>,
<>
<li>Friday - Code Wars challenges assessment and Project work</li> 
                <div className="divider"></div>
                <p>We did an assessment where we were given an hour to beat 3 katas (coding challenges) at the level of 8,7,6 Kyu (increasing difficulty in lower numbers), I found them relatively easy, with the most interesting part being researching the toString() method and how it can convert between decimal, binary and hexadecimal</p> 
                <p>I personally extremely enjoy the small coding challenges that code wars provides as they feel very similar to a puzzle game, giving me satisfaction with every single one I complete, my current honour (score) is at 350 and it will probably increase a lot more as I frequently use code wars in my free time to sort of detox from any violent or stressful games I play, or I go on code wars when I've run out of puzzle games to play and am still in the mood for a mental challenge</p> 
                <img src={process.env.PUBLIC_URL + "/images/logo.png"} id="smallDiagram"></img>
                <p>Aside form code wars, we worked on our project which is this site, which is due in today however I will continue to update this throughout the whole course as it is a good way to consolidate what I learned and look back at anything I might have missed</p> 
</>, // end of week 3
<>
<li>Monday - JSDOM introductions</li>
                    <div className="divider"></div>
                    <p>We started learning JSDOM which is how we connect the HTML and CSS to our javascript, this is done by grabbing elements using a multitude of ways, such as: tag, id, class. You can grab an element using the syntax shown below</p>
                    <img src={process.env.PUBLIC_URL + "/images/JSDOM1.png"} id="bigDiagram"></img>
                    <p>And you can access the CSS and HTML attributes of elements the same way you access regular objects, dot notation, which can be seen below</p>
                    <img src={process.env.PUBLIC_URL + "/images/JSDOM2.png"}></img>
</>,
<>
<li>Tuesday - SQL normalization and further JSDOM</li>
                    <div className="divider"></div>
                    <p>When you want to effectively store data without any redundant or inconsistent records you can break up your database into smaller, more managable databases, this process is called normalization and it helps by breaking down the tables until the values in each table are only dependant on that tables primary key and only that primary key</p>
                    <p>There are multiple keys involved in normalization</p>
                    <ul id="smallList">
                        <li>Primary Key - a unique identifier value for a record in a table</li>
                        <li>Foreign Key - a value from another table used to link to and access this tables records, often another tables primary key</li>
                        <li>Composite Key - a combination of multiple keys from seperate tables in a new bridging table to link the tables together</li>
                    </ul>
                    <p>The types of links between tables can also be broken down into 3 types</p>
                    <ul id="smallList">
                        <li>One to One - a single record links to single record in another table (one person to one medical history)</li>
                        <li>One to Many - a single record links to multiple records in another table (one author to many books)</li>
                        <li>Many to Many - multiple records link to multiple records in another table (multiple customers buy multiple products)</li>
                    </ul>
                    <p>As a general rule we want to avoid many to many relationships as it leads to redundant and inconsistent data, to break down many to many relationships we use normalisation which the first 3 steps of are:</p>
                    <ul id="smallList">
                        <li>1st normal form - a single cell holds one value (atomicity), there is a primary key, no duplicate rows or columns, each column has one value for each row in the table, each row must be unique</li>
                        <li>2nd normal form - 1st normal form must be met, all values that are dependant on the primary key stay in the main table, all values not dependant on the primary key are put in new tables where they are put in a way that they are all dependent on their tables primary key</li>
                        <li>3rd normal form - 2nd normal form must be met, has no transitive functional dependency(all values in each table must depend on only the primary key and no other values)</li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + "/images/normalization.png"} id="bigDiagram"></img>
                    <p>For the rest of the day we worked on more JSDOM challenges that showed more functionality like creating and destroying elements as well as setting timers and new event listeners like mouseover and mouseout which trigger when the mouse enters or leaves an element</p>
                    <p>We also did some work on a mini project involving getting information from a key pressed</p>
                    <a href="https://tomkeny.github.io/week-4-key-code/" target="blank">Click here to check it out!</a>
                    <img src={process.env.PUBLIC_URL + "/images/JSDOM3.png"} id="bigDiagram"></img>
</>,
<>
<li>Wednesday - Soundboard project</li> 
                    <div className="divider"></div>
                    <p>we were given a mini project where we can make a soundboard of our choosing or a drum kit that Leon has experience with so he would be able to provide more assistance, I decide that I wanted to make an octave from a piano which sounded great at the time, after 4 painful hours it was complete, the code is messy and very repetitive so if given time I will optimize and reduce the size of the code, you can check it out below</p>
                    <a href="https://tomkeny.github.io/Week4Project/" target="blank">Click here to see the piano project</a>
                    <p></p>
                    <img src={process.env.PUBLIC_URL + "/images/pianoEmulator.png"}></img>
                    <p>Afterword - I spent the entirety of wednesday night optimizing it and am honestly impressed with myself,I have brought down the number of lines from 300+ to 87 and it is now split into functions so adding more keys wouldn't add any more lines of code, I would just need to add more values to a few arrays</p>
</>,
<>
<li>Thursday - SQL Joins</li>
                    <div className="divider"></div>
                    <p>On Thursday we learned about SQL Joins, a way to connect multiple tables together by joining the tables at a specific data point</p>
                    <p>The syntax for joining tables is shown below:</p>
                    <p id="leftText">SELECT fieldsYouWantToDisplayFromBothTables {'\n'}
                        FROM 1stTable{'\n'}
                        JoinType JOIN 2ndTable ON 1stTableKey=2ndTableKey (the shared key from each table){'\n'}
                        WHERE condition (this line is optional)</p>
                        <p>Below is an example of a double join</p>
                        <img src={process.env.PUBLIC_URL + "/images/Join3.png"} id="bigDiagram"></img>
                        <p>The Join types are as follows:</p>
                        <ul id="smallList">
                            <li>INNER JOIN - returns records that match</li>
                            <li>LEFT JOIN - returns the entire left table and matched records from the right</li>
                            <li>RIGHT JOIN - returns the entire right table and matched records from the left</li>
                            <li>FULL OUTER JOIN - returns all records from both tables when their is a match in either table</li>
                        </ul>
                        <img src={process.env.PUBLIC_URL + "/images/Join4.png"}></img>
                        <p>{'\n'}Another Way to look at joins is as sewing tables together where, in the tables, the shared key matches</p>
                        <img src={process.env.PUBLIC_URL + "/images/Join1.png"} id="bigDiagram"></img>
                        <img src={process.env.PUBLIC_URL + "/images/Join2.png"} id="bigDiagram"></img>
</>,
<>
<li>Friday - Presenting soundboard</li>
                    <div className="divider"></div>
                    <p>We presented our soundboard miniprojects, mine was a piano project which you can find a link to in wednesdays entry</p>
</>, // end of week 4
<>
<li>Monday - Javascript engine and Higher Order Functions</li>
                    <div className="divider"></div>
                    <p>A javascript engine is an engine used to interpret javascript into machine code, this is done by putting javascript(source code) into a compiler which compiles it into machine code, some engines have a secondary compiler called an optimization compiler that re compiles the code multiple times to make it run faster and more efficiently</p>
                    <img src={process.env.PUBLIC_URL + "/images/jsengine.png"} id="bigDiagram"></img>
                    <p>Javascript engines are often made up of 2 main components</p>
                    <ul id="smallList">
                        <li>Memory heap: where data is stored, in charge of memory allocation</li>
                        <li>Call stack: The code being ran, in order. Keeps the flow of execution by running one line at a time</li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + "/images/jsenginestack.png"} id="bigDiagram"></img>
                    <p>There is a lot more to learn about javascript engines and the order of execution but it's much more than I think I can put in one day's notes so you can find out more by clicking <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="blank">here</a></p>
                    <p>We also learned about scope, scope is which variables can be accessed and from where, a good way to look at it is that you can look outward but not inward</p>
                    <ul id="smallList">
                        <li>Global scope: anything defined here can be accessed anywhere in your code, often put at the top of your code</li>
                        <li>Function scope: variables declared in the function can only be accessed in the function and cannot be accessed from outside the function</li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + "/images/scopediagram.png"} id="bigDiagram"></img>
                    <p>Execution context: the scope that a piece of code is run in</p>
                    <ul id="smallList">
                        <li>Global execution context: code ran in main</li>
                        <li>Global memory: data stored from code ran in main, often remains for the entirety of a program running</li>
                        <li>Local execution context: code ran in the scope of a function</li>
                        <li>Local memory: data stored from code inside a function, destroyed upon the function being completed</li>
                    </ul>
                    <p>Higher Order Functions: Fucntions that either take a function as a parameter or return a function</p>
                    <p>An example of a practical use of a HOF would be:</p>
                    <img src={process.env.PUBLIC_URL + "/images/HOF.png"}></img>
                    <p>You can look at another application of HOF <a href="https://www.w3schools.com/jsref/jsref_map.asp" target="blank">here</a></p>
</>,
<>
<li>Tuesday - SQL tasks and Promises in Javascript</li>
                    <div className="divider"></div>
                    <p>On Tuesday we spent the morning doing an SQL task that involved normalizing, building and then querying a database</p>
                    <p>In the afternoon we covered a lot of content starting with synchronus and asynchronous code, synchronous code is code that runs line by line whilst asynchronous code runs alongside other lines of code, this can be seen in the SetTimeOut function as it is an asynchronus function so it will run everything in the call stack before it runs the contents of SetTimeOut as it is added to the bottom of the call stack, no matter where it is in the code</p>
                    <p>A callback function is a function that waits for another function to finish before it activates, this can be seen here</p>
                    <img src={process.env.PUBLIC_URL + "/images/callback.png"}></img>
                    <p>Promises are a type of built in function that allow you to do something once the function is ran or fails to run, you can check which state a promise is in by console.log-ing it, the 3 states are: Pending, Resolved and Rejected. You can catch the output from a promise rejection(error) using .catch which listenes to a specified block of code to see if it throws an error, this can be seen below</p>
                    <img src={process.env.PUBLIC_URL + "/images/catch.png"}></img>
                    <p>Another way of having a function wait would be to define a function as asynchronous and use the await keyword, to define an asynchronous function you use the async keyword like shown here</p>
                    <img src={process.env.PUBLIC_URL + "/images/async.png"}></img>
                    <p>We also covered some week 8 material that I didn't fully understand so look forward to an actual explanation of parse and fetch from week 8</p>
                    <img src={process.env.PUBLIC_URL + "/images/parsefetch.png"}></img>
</>,
<>
<li>Wednesday - Classes and Github Branches</li>
                    <div className="divider"></div>
                    <p>On friday we learned about classes, classes are templates for objects and can be declared using the class keyword, classes contain a constructor to initialize its properties, constructors take parameters which are passed into the object upon object creation.{`\n`}
                    Classes can sloe contain methods which can be called upon with the syntax "objectName.MethodName()"</p>
                    <img src={process.env.PUBLIC_URL + "/images/class.png"} id="mediumDiagram"></img>
                    <p>Classes can also inherit properties and methods from their parents when told to do so, this done using the extends keyword. There is also the keyword super which takes the initializer from the parent class for a property</p>
                    <img src={process.env.PUBLIC_URL + "/images/inheritance.png"} id="mediumDiagram"></img>
                    <p></p>
                    <div class="divider"></div>
                    <h2>Collaborative Github</h2>
                    <p>Github Branching is used to take a copy of the current state of a project and work on the copy so that multiple people can take copies and work simultaneously and merge their copies back into the actual project</p>
                    <img src={process.env.PUBLIC_URL + "/images/branches.png"} id="mediumDiagram"></img>
                    <p>Github Branching is a large topic but it breaks down to source control best practices, these practices are:</p>
                    <ul id="smallList">
                        <li>Avoid coding directly on the master branch as it can lead to conflicts and loss of work</li>
                        <li>Split features being developed into seperate branches and merge them into master one by one once the features are mostly bug free</li>
                        <li>When a conflict arises, sit down with the person who wrote the conflicting code whilst resolving the conflicts or you will end up deleting important code that you don't understand</li>
                        <li>Name branches reasonably, when people look back at your code down the line "branch 12" won't mean anything but "form input handler" will</li>
                        <li>Check with peers before you put in a merge request as they may spot glaring issues that could affect other bits of code</li>
                    </ul>
                    <p className="tinyTitle">Inviting Collaborators</p>
                    <p>To invite collaborators, first open the repository in browser and select settings on the bar at the top{`\n`}
                    One of the first options should be collaborators under the access headline{`\n`}
                    Next select "Add people" it should be a green button{`\n`}
                    Now you just need to enter their email, username or full name and click "Add name to this repository"</p>
                    <img src={process.env.PUBLIC_URL + "/images/settingsGit.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/collaborators.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/addCollaborators.png"} id="mediumDiagram"></img>
                    <p className="tinyTitle">Creating a branch</p>
                    <p>To create a branch first open github desktop on the repository you want to branch and select the "current branch" button{`\n`}
                    Select the branch that you want to branch from, this is typically the main or master branch{`\n`}
                    From there click "New Branch" and give it an appropriate name and click "Create Branch"{`\n`}
                    You now have a branch to work on that won't affect the main or master branch until merging which I will go into later on</p>
                    <img src={process.env.PUBLIC_URL + "/images/newBranch.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/createBranch.png"} id="mediumDiagram"></img>
                    <p className="tinyTitle">Merging</p>
                    <p>To merge a branch to another branch or the master/main branch you first need to open the branch that you want to merge into{`\n`}
                    Hover over "Branch" and select "Merge into current branch"{`\n`}
                    Select the branch you want to merge into the current branch and click "Create a merge commit"{`\n`}
                    If a Merge conflict shows up, follow the guide <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github" target="blank">here</a></p>
                    <img src={process.env.PUBLIC_URL + "/images/selectBranch.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/mergeToCurrent.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/mergeCommit.png"} id="mediumDiagram"></img>
</>,
<>
<li>Thursday - SQL tasks extended</li>
                    <div className="divider"></div>
                    <p>On thursday we finished the SQL tasks we were set on tuesday morning, these tasks involved: creating, manipulating and querrying a normalized database</p>
</>,
<>
<li>Friday - Inquirer</li>
                    <div className="divider"></div>
                    <p>Inquirer is a javascript package that allows the console to take inputs, to install inquirer you first need to type "npm install inquirer", then add ""type": "module", " to packages.json, then you can use inquirer in scripts by putting "import inquirer from "inquirer";" at the top of the script</p>
                    <img src={process.env.PUBLIC_URL + "/images/install.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/packages.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/import.png"} id="mediumDiagram"></img>
                    <p>To use inquiries you need to use the keywords async and await, inquiries are made up of 3 required parts and multiple optional parts, the required parts are:</p>
                    <ul id="smallList">
                        <li>name - the name of property that will hold the result</li>
                        <li>type - the type of input it takes, the most common being input and confirm</li>
                        <li>message - the message printed to the log to prompt an input</li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + "/images/inquiryExample.png"} id="mediumDiagram"></img>
                    <p>We also learned how to import functions from other javascript files using the syntax "import {"{ function names }"} from "file location";"</p>
                    <img src={process.env.PUBLIC_URL + "/images/importFunctions.png"} id="mediumDiagram"></img>
</>,  // end of week 5
<>
<li>Monday - Group Project Start</li>
                    <div className="divider"></div>
                    <p>We did the planning for our group project which will be submitted friday where I will go into more detail</p>
</>,
<>
<li>Tuesday - Coding Paradigms</li>
                    <div className="divider"></div>
                    <p>On tuesday we looked at coding paradigms which are different styles of programming languages, 3 of which are:</p>
                    <p className="tinyTitle">Procedural</p>
                    <ul id="smallList">
                        <li>procedural - group instructions into procedures</li>
                        <li>object-oriented - groups instructions with the part of the state they operate on</li>
                        <li>classic languages include: Pascal, C, Basic</li>
                        <li>can group a set of lines into a procedure (a function)</li>
                        <li>any program that has a start and end is procedural</li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + "/images/procedural.png"} id="mediumDiagram"></img>
                    <p className="tinyTitle">Event Driven</p>
                    <ul id="smallList">
                        <li>flow of the program is controlled by events </li>
                        <li>a main loop that wait for an event then handles the events</li>
                        <li>events could be a button, a key or tripping an alarm, anything that can give a signal to trigger an event</li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + "/images/eventDriven.jpg"} id="mediumDiagram"></img>
                    <p className="tinyTitle">Object Oriented</p>
                    <ul id="smallList">
                        <li>programs are built from a number of related objects</li>
                        <li>classes are coded elements that contain attributes and have behaviours</li>
                        <li>Classes,0bjects represent things like a person, a bank account or a ball</li>
                        <li>objects can work together if some of the data and methods fit</li>
                        <li>objects are created from a template(a class)</li>
                        <li>new classes can be created by altering or adding to old classes</li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + "/images/objectOrientedProgramming.png"} id="mediumDiagram"></img>
                    <p>A lot of programming languages work extremely similarly however they use different syntax, almost all programming languages use at least one of the paradigms I have mentioned in this day's notes</p>
</>,
<>
<li>Wednesday - Group Project Work</li>
                    <div className="divider"></div>
                    <p>On wednesday we spent the whole day working on our group projects, I will go into more detail of our group project on friday</p>
</>,
<>
<li>Thursday - MongoDB</li>
                    <div className="divider"></div>
                    <p>On thursday we covered a lot so this is going to be a long one</p>
                    <p>First we had a brief mention of the stack which goes in the order:</p>
                    <ul id="smallList">
                        <li>Users</li>
                        <li>Front End UX</li>
                        <li>Web Interfaces</li>
                        <li>Server Applications</li>
                        <li>Database</li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + "/images/fullstack.png"} id="mediumDiagram"></img>
                    <p className="tinyTitle">NoSQL</p>
                    <p>NoSQL stands for Not Only SQL, NoSQL is a more flexible version of SQL that has the following key properties:</p>
                    <ul id="smallList">
                        <li>Does not rquire a fixed schema</li>
                        <li>Can dynamically add fields</li>
                        <li>Scales horizontally, documents can stretch which lets it handle large amounts of data without significant performance decrease</li>
                        <li>Can continue to operate in the event of hardware failures</li>
                        <li>NoSQL has a fast read write speed, especially with large data sets</li>
                        <li>NoSQL can be cheaper to set up and maintain</li>
                    </ul>
                    <p>An example of a NoSQL database management tool would be MongoDB</p>
                    <p className="tinyTitle">MongoDB</p>
                    <p>The key features around MongoDB are:</p>
                    <ul id="smallList">
                        <li>Open source</li>
                        <li>Uses JSON like documents</li>
                        <li>Highly scaleable</li>
                        <li>No pre-defined schemas</li>
                        <li>Tables and data structures are mutable</li>
                        <li>Can run on a single server or be distributed</li>
                    </ul>
                    <p>MongoDB doesn't use the same words as SQL, the 3 parts of storing data are:</p>
                    <ul id="smallList">
                        <li>Database - similar to an SQL database but more flexible</li>
                        <li>Collection - equivalent to a table however it's size is mutable</li>
                        <li>Document - the same as a row but can contain nested arrays or sub-documents</li>
                    </ul>
                    <p>Before we move onto how to use MongoDB, a quick explanation of the syntax they use. MongoDBShell uses JSON which stands for JavaScript Object Notation, the things you need to know to use it are:</p>
                    <ul id="smallList">
                        <li>Data is stored in key value pairs</li>
                        <li>Data is seperated by commas</li>
                        <li>Curly braces hold objects</li>
                        <li>Square brackets hold arrays</li>
                    </ul>
                    <p>Now we can get into how to use MongoDB, first you will need to load up MongoDB compass and MongoDBShell, on compass, copy the url string that it gives you, it should be similar to "mongodb://localhost:27017" and then click connect</p>
                    <img src={process.env.PUBLIC_URL + "/images/mongoConnect.png"} id="mediumDiagram"></img>
                    <p>From here we want to now go to MongoDBShell and type in the url we coppied earlier and hit enter, this will connect the shell to the compass and allow you to use MongoDBShell commands</p>
                    <img src={process.env.PUBLIC_URL + "/images/mongoshellconnect.png"} id="mediumDiagram"></img>
                    <p>Once you are connected to your Compass you will need to create a database in compass so that you can use it to make collections and start setting up a proper database, to do this you click the + icon next to databases and fill in the required information, once you've done that you can go back to MongoDBShell</p>
                    <img src={process.env.PUBLIC_URL + "/images/mongocreate.png"} id="mediumDiagram"></img>
                    <p>Once you are back in shell you will need to type in "use databaseName" where database name is the name of the database you created, from here you can use the commands in the following list to insert, edit, delete and querry data. (// and after are a description of the command)</p>
                    <ul id="smallList">
                        <p>Setup and querry</p>
                        <li>use databasename  // selects the database to use</li>
                        <li>db.createCollection("collectionname")  // creates a collection</li>
                        <li>db.collectionname.find()  // shows all records in a collection</li>
                        <li>db.collectionname.find( {`{Id: "_0123"}`} )  // shows all records that match the collection</li>
                        <p>Insert</p>
                        <li>db.collectionname.insertOne({`{key: value, name: "dave"}`})  //inserts a single record</li>
                        <li>db.collectionname.insertMany([{`{document1},{document2}`}])  // inserts multiplee records</li>
                        <p>Delete</p>
                        <li>db.collectionname.deleteOne({`{condition}`})  // deletes the first record that matches the condition</li>
                        <li>db.collectionname.deleteAll({`{condition}`})  // deletes all records that match the condition</li>
                        <p>Update/Replace</p>
                        <li>db.collectionname.updateOne({`{condition}, {$set: {fieldname: newvalue}}`})  // updates a value in one record</li>
                        <li>db.collectionname.updateMany({`{condition}, {$set: {fieldname: newvalue}}`})  // updates multiple records</li>
                        <li>db.collectionname.replaceOne({`{condition}, {new record}`})  // replaces a record with a new one</li>
                    </ul>
</>,
<>
<li>Friday - Project Presentation</li>
                    <div className="divider"></div>
                    <p>On friday morning we presented our project which was a small turn based combat game with a puzzle at the end, The first thing we did was make a user flow so that we could get a general plan in mind for what it was going to look like and how it was going to function</p>
                    <img src={process.env.PUBLIC_URL + "/images/generalFlow.png"} id="bigDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/combatFlow.png"} id="bigDiagram"></img>
                    <p>We also set up a miro board to show what needed to be done, what people where doing and what was already done. We also put what was essential and what was a could have on the board as well</p>
                    <img src={process.env.PUBLIC_URL + "/images/miroBoard.png"} id="bigDiagram"></img>
                    <p>After planning was done we got stuck into the code where we set up some basic things like the classes that we were going to use as well as the properties they would have so that we could referance them elsewhere, we also set up different files for each bit of code so that nothing got cluttered or overlapped</p>
                    <img src={process.env.PUBLIC_URL + "/images/fileNames.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/tombOfMythralis.png"} id="bigDiagram"></img>
                    <p>The first class we made was the character class that enemy and player extend off which had the base properties of: health, attack, defence and name which were the properties that were going to be used everywhere and by all created objects</p>
                    <img src={process.env.PUBLIC_URL + "/images/characterClass.png"} id="mediumDiagram"></img>
                    <p>I'm not going to go too in depth into the code but the combat system basically used a while loop that would advance the "turn" on each iteration and would do so until the player or enemy health went below 0, this worked alongside a queue array that would activate certain functions based on the turn number passed in if the current turn and the turn in the queue so it would take the name and object passed in with the turn number and do an action to the object based on the name passed in</p>
                    <img src={process.env.PUBLIC_URL + "/images/combatLoop.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/turnCheck.png"} id="bigDiagram"></img>
                    <p>The combat would start with taking the players input, running a function based on that input and then doing a random enemy move based on the enemy, and then doing any functions that are set to activate on this turn from the queue, this loop would repeat until either the player or the enemy are dead</p>
                    <img src={process.env.PUBLIC_URL + "/images/combatFunction.png"} id="bigDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/enemyTurn.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/playerInput.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/choseMove.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/showMove.png"} id="mediumDiagram"></img>
                    <p>The final functions were a maze puzzle that would display only 2 spots away from the player so they had limited visibility, this was done using a 2D array where each eelement was considered a coordinate and used to check for what was on each space, this worked great and gave a nice finish to the project, getting out showed you a bit of victory dialogue and how long it took you to get out</p>
                    <img src={process.env.PUBLIC_URL + "/images/MazeEnter.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/Maze.png"} id="mediumDiagram"></img>
                    <p>For this project we used github which allowed us to collaboratively work on the same piece of code, splitting up the files also helped avoid merge conflicts as we wouldn't be working on the same file most of the time, we used plenty of branches to avoid having to do constant conflict resolutions and we decided to complete a feature and then merge it in and deal with conflicts once a feature was complate rather than every commit</p>
                    <img src={process.env.PUBLIC_URL + "/images/ProjectBranches.png"} id="mediumDiagram"></img>
                    <p>There's plenty more I could go into but this is starting to get really long, if you want to check out the code which has comments for readability you can find it <a href="https://github.com/TomKeny/Week6EscapeRoom" target="blank">here</a>, if you want to run it, just type into the console "node ./index.js" in your coding IDE</p>
</>,  // end of week 6
<>
<li>Monday - Introduction To React</li>
                    <div className="divider"></div>
                    <p>React is a library used to create user interfaces by combining HTML and javascript in a programming language called JSX or JavaScript XML, react rerenders updated elements to constantly keep the site in sync whilst not having to refresh or reload the page</p>
                    <p>The main appeal of react is creating reusable components that are much faster to use than copying over elements multiple times where you'd have to manually set up each one, components are basically the functions of HTML</p>
                    <p>React creates a tree of elements that start off as one element, the root, below is an example of how the the elemnts work like a tree, the files also tend to come out this way</p>
                    <img src={process.env.PUBLIC_URL + "/images/RootTree.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/react1.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/react2.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/react3.png"} id="bigDiagram"></img>
                    <p>To create a react app, you need: npm, webpack, babel compiler, react and reactDOM and a development server to use locally</p>
                    <p>The steps to set up a react app are:</p>
                    <ul id="smallList">
                        <li>npm install create-react-app  //this installs the package used to create react apps</li>
                        <li>npx create-react-app appname  //this creates the react app, name has to be lowercase</li>
                        <li>npm start  //starts the app</li>
                    </ul>
                    <p>You can use a react fragment to group together multiple elements together without adding more divs to the tree, you can declare a fragment in 2 ways:</p>
                    <ul id="smallList">
                        <li>&lt;&gt;</li>
                        <li>&lt;/&gt;</li>
                        <li>&lt;fragment&gt;</li>
                        <li>&lt;/fragment&gt;</li>
                    </ul>
                    <p>React uses a system called components that are similar to functions that return HTML elements, an example of one would be:</p>
                    <ul id="smallList">
                        <li>function componentName () {"{"}</li>
                        <li>	return (</li>
                        <li>		&lt;p&gt;text&lt;/p&gt;</li>
                        <li>	)</li>
                        <li>{"}"}</li>
                        <li>export default componentName</li>
                    </ul>
                    <p>You can also pass in javascript into the html using {"{}"}</p>
                    <img src={process.env.PUBLIC_URL + "/images/Jsinhtml.png"} id="mediumDiagram"></img>
                    <p>You can pass things into components using something called props, anything in line whith the component being called will be attached to an object that is passed as a parameter, this is hard to explain so an example can be seen here:</p>
                    <img src={process.env.PUBLIC_URL + "/images/Articles.png"} id="mediumDiagram"></img>
                    <img src={process.env.PUBLIC_URL + "/images/Props.png"} id="mediumDiagram"></img>
                <p>You can use the passed in props in 2 ways, dot notation using the props object or interpreting the objects properties straight into variables using {"{propertyNames}"}</p>
                    <img src={process.env.PUBLIC_URL + "/images/propsObject.png"} id="mediumDiagram"></img>
</>,
<>
<li>Tuesday - MongoDB Atlas and React States</li>
                    <div className="divider"></div>
                    <p>On Tuesday morning we set up a mongoDB atlas account and cluster to start learning how to interact with cloud based databases, this worked similarly to mongoDB compass and MongoSH so the only completely new parts to learn were the connection strings to compass and mongoSH</p>
                    <p>We also learned about the different selection operators which are:</p>
                    <ul id="smallList">
                        <li>$eq:  //values are equal</li>
                        <li>$ne:  //values are not equal</li>
                        <li>$gt:  // value is greater than another value</li>
                        <li>$gte:  // value is greater than or equal to another value</li>
                        <li>$lt:  //value is less than another value</li>
                        <li>$lte:  //value is less than or equal to another value</li>
                        <li>$in:  //value is matched within an array</li>
                        <li>$all:  //value appears in the array at some point</li>
                    </ul>
                    <p>Some examples of how to use these would be:</p>
                    <ul id="smallList">
                        <li>db.Cars.find({"{stock: {$gte: 15}}"})  //finds all records where stock is greater than or equal to 15</li>
                        <li>db.Cars.find({`{Fuel: {$all: ["Petrol","Hybrid"]}}`})  //finds all records where Fuel contains "Petrol" and "Hybrid" at some point in any order</li>
                    </ul>
                    <p>Another thing we learned about was aggregate which allows you to group data together and $count: which returns the number of values of what you put into it</p>
                    <p>db.Cars.aggregate([{`{$count: "Model"}`}]){`\n`}Would return the number of "Model"s</p>
                    <div className="divider"></div>
                    <h2>React States</h2>
                    <p>In the afternoon we learned about react states which are a way of passing values through the program that will be tracked so that other elements can be updated, when the state changes, all associated objects rerender. It is good practice to create the state in the root folder and have it be passed down through props for other components to use</p>
                    <p>To use states you first have to import it:</p>
                    <img src={process.env.PUBLIC_URL + "/images/importUseState.png"}></img>
                    <p>Once imported you can set up and use a state using the following syntax:</p>
                    <img src={process.env.PUBLIC_URL + "/images/settingUseState.png"} id="mediumDiagram"></img>
                    <p>We also took a look into the map function that lets you iterate through all element in an array, you can do this with an index or without an index based on your needs</p>
                    <img src={process.env.PUBLIC_URL + "/images/mapComponents.png"} id="mediumDiagram"></img>
                    <p></p>
                    <img src={process.env.PUBLIC_URL + "/images/mapWithIndex.png"} id="mediumDiagram"></img>
                    <p>Another thing we were taught is one of the ways to edit the state along with a new operator, the ... or spread operator which copies all the element sof the array it is paired with which we used to create a copy of state, alter it and then set the state to this new updated version</p>
                    <p>Functions used to update the state are often passed down through props and should be passed using empty functions () {"=>"} functionName so they are not called whilst being set</p>
                    <img src={process.env.PUBLIC_URL + "/images/updateState.png"} id="bigDiagram"></img>
                    <p></p>
                    <img src={process.env.PUBLIC_URL + "/images/onClickDelete.png"} id="bigDiagram"></img>
</>,
<>
<li>Wednesday - Conditional Rendering</li>
                    <div className="divider"></div>
                    <p>On wednesday we learned about conditional rendering which is rendering or not rendering certain elements based off of conditional statements</p>
                    <p>There are 3 types of conditional rendering:</p>
                    <ul id="smallList">
                        <li>Short circuit - using && or || after a condition and followed by an expression will complete the expression if the condition is true && or the condition is false || </li>
                        <img src={process.env.PUBLIC_URL + "/images/conditionalshortcircuit.png"} id="mediumDiagram"></img>
                        <li>If Statements - a value is passed to a component and it will return elements based on an if statement inside the component</li>
                        <img src={process.env.PUBLIC_URL + "/images/consitionalIf.png"} id="mediumDiagram"></img>
                        <li>Ternary Operators - using a ? after a condition and putting 2 expressions seperated by a : where the first expression will be expressed if the condition is true and the second will be expressed if the condition is false</li>
                        <img src={process.env.PUBLIC_URL + "/images/conditionaltertiary.png"} id="mediumDiagram"></img>
                    </ul>
                    <p>We also learned how to take an input using a form, where you can use a form submission to update values using event.target.value in an event</p>
                    <img src={process.env.PUBLIC_URL + "/images/event.png"} id="mediumDiagram"></img>
</>,
<>
<li>Thursday - MongoDB in vs code</li>
                    <div className="divider"></div>
                    <p>On Thursday we learned how to link mongoDB atlas to vs code and use code to manipulate databases</p>
                    <p>To start you need to install 2 packages, mongodb and express. The commands to install them are{`\n`}npm i -s mongodb{`\n`}npm i -s express</p>
                    <p>From here there is a set layout to follow, the code is fairly complicated so the best way to illustrate it is to show the layout, you start by connecting to the database, then you make changes or query the database and then you disconnect from the database</p>
                    <img src={process.env.PUBLIC_URL + "/images/mongovslayout.png"} id="bigDiagram"></img>
                    <p>You can find a link to all the different basic mongodb command functions <a href="https://github.com/TomKeny/MongoDBinVS" target="blank">here</a></p>
</>,
<>
<li>Friday - To Do list project</li>
                    <div className="divider"></div>
                    <p>On Friday we were given time to work on our to do list applications, my application was in a good state so I have decided to allocate this time to moving my journal to react which is this current link</p>
                    <p>You can find my To Do list project <a href="https://tomkeny.github.io/ToDoList/" target="blank">here</a></p>
</>, // end of week 7
<>
<li>Monday - React Component Lifecycle</li>
                    <div className="divider"></div>
                    <p>On Monday we learned about the lifecycle of react components</p>
                    <p>Components have a set life cycle, first they are mounted where a constructor creates the initial values and it is added to the render queue, this is then sent on its way to update the DOM which triggers the component mounted event, after this they stay rendered until updated through new props, a new state or a forced update, this will update the DOM with the changes and trigger the component updated event, finally when a component is told to stop rendering it will be taken off the render queue and trigger the component unrendered event</p>
                    <ul id="smallList">
                        <li>Mounting - when a component is first added to the render queue</li>
                        <li>Updating - when a components conent changes and is rerendered</li>
                        <li>Unmounting - when a component is taken off the render queue</li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + "/images/FunctionalComponentLifeCycle.png"} id="bigDiagram"></img>
                    <p></p>
                    <p>You can use the events triggered by mounting, updating and unmounting using the following syntax for functional components</p>
                    <img src={process.env.PUBLIC_URL + "/images/functionalComponentMounting.png"} id="mediumDiagram"></img>
</>,
<>
<li>Tuesday - APIs</li>
                    <div className="divider"></div>
                    <p>An API (Application Programming Interface) is an way intermediary between front end and backend software to inteface using requests that return json objects, the software that requests data is known as the client and the information provided to the response is called a resource. There are 5 different ways to interact with APIs</p>
                    <ul id="smallList">
                        <li>GET - retrieve a resource from the backend</li>
                        <li>POST - creates a new resource</li>
                        <li>PUT - update an existing resource</li>
                        <li>PATCH - only modifies parts of the content of a resource</li>
                        <li>DELETE - deletes a resource from the backend</li>
                    </ul>
                    <p>Whilst working with mongoDB there were 3 packages needed to interact with a mongoDB database</p>
                    <ul id="smallList">
                        <li>express - a package that provides a set of features and tools for web app development and APIs</li>
                        <li>Mongoose - an object data modelling library for mongoDB that simplifies mongoDB and node.js applications</li>
                        <li>MongoDB - a package that allows connecting to a mongoDB database</li>
                    </ul>
                    <p>Calling an API repeatedly can be an issue so we usually do it when new data needs to be fetched or we use a useEffect hook to fetch the data for initial startup</p>
                    <img src={process.env.PUBLIC_URL + "/images/APIuseEffect.png"} id="mediumDiagram"></img>
                    <p>Another good practice is to provide the user with an error when we fail to fetch data from the API, this is often done using the try, throw, catch syntax</p>
                    <img src={process.env.PUBLIC_URL + "/images/APIError.png"} id="mediumDiagram"></img>
</>,
<>
<li>Wednesday - API Project</li>
                    <div className="divider"></div>
                    <p>On wednesday we were given time to work on a react project that includes an API, I decided on using a random colour API to create a colour pallete maker which takes in a hue (base color), a value (higher is closer to white, lower is closer to black) and a number for how big the pallete should be</p>
                    <img src={process.env.PUBLIC_URL + "/images/colorPalleteApp.png"} id="bigDiagram"></img>
                    <p>A link to the site can be found <a href="https://tomkeny.github.io/thirdapp/" target="blank">here</a></p>
</>,
<>
<li>Thursday - C#</li>
                    <div className="divider"></div>
                    <p>On Thursday we went over the basics of C#</p>
                    <p>We started off by going over object oriented programming, which is a way to use code to represent "things" or objects which have properties</p>
                    <ul id="smallList">
                        <li>classes are blueprints used to create objects</li>
                        <li>classes can inherit properties and methods from other classes, this is called inheritance</li>
                        <li>classes can be used as a template to create entries for databases</li>
                    </ul>
                    <p>After reviewing object oriented programming we looked into C# which has 4 key properties as a programming language</p>
                    <ul id="smallList">
                        <li>simple, modern, compiled language</li>
                        <li>developed mainly for windows</li>
                        <li>object oriented</li>
                        <li>Extremely portable, similar to other C languages</li>
                    </ul>
                    <p>We also took a quick look into the .NET frameworks main features</p>
                    <ul id="smallList">
                        <li>programming framework</li>
                        <li>allows different languages to communicate with each other</li>
                        <li>extensive, pre-created code and functions</li>
                    </ul>
                    <p>To create a .NET C# project you do the following steps <br></br>1. in an empty folder on visual code press ctrl + shift + p<br></br>2. select .net new project<br></br>3. select Console App and name the program<br></br>4. hit enter and navigate to the program.cs file</p>
                    <p>Now that you are in your C# file, here are the basic rules of C#</p>
                    <ul id="smallList">
                        <li>every self contained line of code ends in ;</li>
                        <li>code is seperated by blocks using {"{}"}</li>
                        <li>you have to specify variable data type whilst initializing a variable</li>
                        <li>namespaces are used to organize and contain code for classes and other namespaces</li>
                        <li>every line of code ran in c# must be in a class</li>
                        <li>the default function that is run automatically is Main()</li>
                    </ul>
                    <p>A few useful commands to know are:</p>
                    <ul id="smallList">
                        <li>Console.ReadLine();  takes in a console input as a string</li>
                        <li>Console.WriteLine(); writes to the console</li>
                        <li>Convert.Totypetoconvertto(value to convert); converts to a data type, example Convert.ToInt32("13");</li>
                        <li>datatype.Parse(value to convert); will convert the value given to the specified data type if possible</li>
                        <li>using System;   allows us to use classes from the System namespace</li>
                    </ul>
                    <p>The 5 main data types used in C# are:</p>
                    <ul id="smallList">
                        <li>int - Whole numbers</li>
                        <li>double - Floating point or decimal numbers</li>
                        <li>char - a single character</li>
                        <li>string - multiple characters or text</li>
                        <li>bool - boolean or true and false</li>
                    </ul>
                    <p>Methods or functions in classes have multiple different security levels which helps seperate code</p>
                    <ul id="smallList">
                        <li>public - code is accessible for all classes</li>
                        <li>private - code is accessible in the same class</li>
                        <li>protected - code is accessible from within the same class and within classes that inherited from from the protected class</li>
                    </ul>
</>,
<>
<li>Friday - API Project feedback</li>
                    <div className="divider"></div>
                    <p>On Friday we gave each other feedback on our API projects, you can find a link to my API project in wednesdays entry</p>
</>, // end of week 8
<>
<li>Monday - Full Stack Intro</li>
                    <div className="divider"></div>
                    <p>On monday we started the process of full stack development includi9ng creating functions for the CRUD operations</p>
                    <img src={process.env.PUBLIC_URL + "/images/crudOps.jpg"} id="mediumDiagram"></img>
                    <p>We also learned about .env in full stack which are environment variables that are more secure than regular variables, the key properties of .env variables are:</p>
                    <ul id="smallList">
                        <li>can be used for values that don't change often, API keys, URLs</li>
                        <li>access the env object using process.env</li>
                        <li>DotEnv is a package that automatically loads environment variables from a .env file into the process.env (auto installed with create-react-app)</li>
                        <li>create at the top level of your backend file structure</li>
                        <li>standard naming convention in all caps (PORT=4000)</li>
                        <li>connection string with username and password go here (MONGODB_URL="connection string")</li>
                    </ul>
</>,
<>
<li>Tuesday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Wednesday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Thursday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Friday - </li>
                    <div className="divider"></div>
</>, // end of week 9
<>
<li>Monday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Tuesday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Wednesday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Thursday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Friday - </li>
                    <div className="divider"></div>
</>, // end of week 10
<>
<li>Monday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Tuesday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Wednesday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Thursday - </li>
                    <div className="divider"></div>
</>,
<>
<li>Friday - </li>
                    <div className="divider"></div>
</>, // end of week 11
]

export default Content