# Questionnaire Trivia Game

This game is a student project for a course. I decided to make a "guessing" game using React. The game's structure will consist of 5 things: 
*Originally the idea was to use MUI as well, but i realized that React 18 and MUI didnt work together as well as I'd hoped so i decided to not use Material UI. 
(Mainly the module material-ui/core was not working with my React version)

1. A question (fetched from an API: https://the-trivia-api.com/api/questions)
2. 4 answer options (buttons) out of which 1 is correct (Also fetched from the API)
3. Then the chosen answer is pressed, a feedback on whether the question was correct or not.
4. A point counter on the top of the screen, which resets every game.
5. A "Next Question" button which you will use to acquire a new question after answering.

## Used modules

- React 18
- React Bootstrap
- Ant design
- React Router Dom (outdated)

## Part 1 - Module Installation and Project creation

I started my project by creating a repository folder for it, inside which i then created the app using Git Bash

![kuva](https://user-images.githubusercontent.com/105205141/235855711-4ab169e1-5436-4f52-b0a5-d2859487e065.png)

I moved into the app folder i created to install modules:

    cd questionnaire-app

After this i decided to install all the required modules using npm:

    npm install antd
    npm install react-bootstrap
    npm install react-router-dom
    
Origianlly i also installed these two modules, but i ended up not using them due to errors being caused by them:

    npm install @mui/material @emotion/react @emotion/styled (old)
    npm install @material-ui/core (tried it until realized it doesnt work properly)
    
now i had an app with the desired modules to begin with and i proceeded to launch my React app in order to quickly assess if something worked or not during the coding.

    npm start
    
![kuva](https://user-images.githubusercontent.com/105205141/235857032-9960019b-a7f3-42ad-bf0d-f84fa0abe2ae.png)

## Part 2 - Designing the App

I decided to plan out what I want the app to look like and what it will consist of.

At first I wanted to create a site which had a Home page from which you could navigate to the Game itself using a button but also to your current results by going to the Results page by pressing a button. I ended up removing the Results page due to some issues with sending the score data to another site (when I leave the game to the results page it was either outdated or empty). I also wanted to use the App.js file as an overlay of sorts (Headers and footers for both pages). In the end i ended up with a simpler version which didn't have the results page:

1. App.js = Overlay for both Pages
2. Home Page
3. Quiz Page

## Part 3 - App.js

I started to design the site using a simple structure of a function with only a return statement returning the overlay. I decided to remove the Header because it didn't end up looking good in the pages but originally it had one. 

This is the final version of the App.js:

![kuva](https://user-images.githubusercontent.com/105205141/235858902-8f1615c8-46bc-484f-a35f-5fef8c328540.png)

In the Routes section we are defining the two routes we will be using, "/quiz" and "/". These will then be used by the site to navigate from different pages.

The footer consists of a simple div with the name of the game and the current year. In a real and fully released game we could for example use this footer to put contact information and a simple navigation section as well as things like license information and copyright tags.

## Part 4 - HomePage.js

This will be a very simple Home page for the site, which will consist of a simple title, footer and a big button for starting the game. 

![kuva](https://user-images.githubusercontent.com/105205141/235859901-95e45d20-26f8-4541-964a-8605cf1bbe36.png)

In the button we will be using a reference link to the Routes that we designed in the App.js file. So the /quiz will lead us to the Quiz page once we've created it. 

This is what the Home page looks like once there is a QuizPage that the link can find (otherwise it will show an error because it cant find the QuizPage.js):

![kuva](https://user-images.githubusercontent.com/105205141/235860613-492d7873-6886-43de-b0fe-81a5623e5ffd.png)

## Part 5 - QuizPage.js

This is where almost all of the work hours went in.

!NOTE: I kept updating the return statement during every alteration I made in order to make sure that things were working correctly (or in any way at all).
You can read the finished return statement at the bottom of this section.

at first i decided to create the const-variables that I'm going to need:
        
     const QuizPage = () => {
        const [questions, setQuestions] = useState([]);
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [score, setScore] = useState(0);
        const [showAnswer, setShowAnswer] = useState(false);
        
 Now to acquiring the questions and answers themselves. I created a fetchQuestions function that tries to acquire a batch of 10 questions from the API (the link limit is 20 but I figured out that when you're using a free version of the API, the limit of the questions in one fetch is 10.

![kuva](https://user-images.githubusercontent.com/105205141/235861721-e5c90a24-af12-4277-baa1-2f156badb171.png)

The biggest issue with this API that I decided to use was that it wasnt using the same structural format as most APIs I've encountered. Instead of data.results being the parent for all the JSON data provided, it was simply directly under Data. This baffled me for a long while and while I somehow accidentally managed to acquire the answers to the questions from the API, it took me several hours to figure out how to get the questions successfully. My questions ended up being undefined because I wasn't looking for them in the right place. 

Now that I had the data successfully being fetched, I could move on to printing the question on the return statement. I also printed the answers as buttons. There would be 3 incorrect answers as buttons and one correct one. At the start I decided to keep it simple and made it so the fourth one was always the correct one, in order to check the functionality of answering right or wrong and seeing if the code had any issues with the button pressing. This was my Answer handling funtion:

![kuva](https://user-images.githubusercontent.com/105205141/235864533-1fb2c37a-010d-4251-b583-178e5beeb0bd.png)

So it would return a simple message regarding whether or not you were right, and also increase the player's score based on that.

I also made a button for switching from one question to the next. This was the handler function for that button:

![kuva](https://user-images.githubusercontent.com/105205141/235865061-370c8978-b09c-468d-879f-c8e311040f93.png)


I came to realize that when the game ran out of questions (10 acquired from the fetch) It would always crash. This was later fixed by making it so that when the questions end, the game officially ends, stating "You've answered all questions!" and printing the score of this game. To do this I used Ant Design's clever Result component, which prints out a smart little pop-up notification.

Once the questions and answers were successfully printing and pressing the answers didn't break anything in the program, I decided it was time to shuffle the answer options so the location of the correct answer was random:

![kuva](https://user-images.githubusercontent.com/105205141/235863790-98f3af0e-d3d9-462c-852c-02c2f083e608.png)

I created these shuffleArray and shuffleArray functions to do just that. They would later be called in the return statement to successfully shuffle the answers.

![kuva](https://user-images.githubusercontent.com/105205141/235864183-e1762694-796e-47a3-96c8-fa464519b7b5.png)

![kuva](https://user-images.githubusercontent.com/105205141/235864262-913c5724-e122-4ac2-9cd2-ca3b69429f90.png)

Right before the return statement begins, I created this useEffect hook:

![kuva](https://user-images.githubusercontent.com/105205141/235865641-d4d8594c-729b-4d26-acbe-1c125c301fa5.png)

The code then checks if the questions array is empty or not. If it is, it displays a "Loading..." message. This is a common pattern for handling asynchronous data loading in React components.

After the questions have been fetched, the code sets the currentQuestion constant to the current question object, which is located at the currentQuestionIndex position in the questions array.

The code then shuffles the answer options for the current question using the shuffleAnswers function.

I then added a Navbar to my return statement to make the site look nicer. The navbar became the place that stores the current score of the game. I then started by making a Container inside which I added the whole structure of the game:

1. An Ant Design Typography would print the question
2. A div would contain the buttons for the answers which would be shuffled using the shuffleArray() function
3. After that div a new would be used to show the Answer as an Ant Design Result component
4. Then there would be a Button for the Next Question which will only be shown if the current index of the question is smaller than 9 (starting from 0 so 10th question)
5. When the final question is answered, it will print another Ant Design Result component with the Score and the message saying "You've answered all questions!"

The return statement in two parts:

![kuva](https://user-images.githubusercontent.com/105205141/235870080-70321e16-46e9-42ce-91aa-aa4df6ebcfd6.png)


This is the finished Quiz page:

![kuva](https://user-images.githubusercontent.com/105205141/235868595-b5e2b1a7-6a66-432d-a5b5-c213b6d237d3.png)
![kuva](https://user-images.githubusercontent.com/105205141/235870187-b7ac4656-35ef-4289-94fd-6fa021a07786.png)


### *BONUS* I decided to add a bit of visual assistance to the question answering, to make it less grey and white and boring looking (the visuals were secondary in this project). This visual assistance consisted of icons. When the answer was correct, the popup would have a green success icon, when incorrect it would be a red "X". In addition, after every question the Result component printing the correct answer would also print a larger red X UNLESS the score of the player reaches 5. at which point the game is essentially won.

Looking back at this afterwards, perhaps the big Red X when answering correctly but the score being under 5 was not the most ideal option. Also if you answer the last question (10th) as the 5th point correctly, you would recieve 2 green success notifications:

![kuva](https://user-images.githubusercontent.com/105205141/235868289-05ec8e95-008d-410b-9d06-a962e9b2518b.png)

I ended up not having time to make a simple restart game button, but essentially creating it would be simple and easy, since there is no data to be saved in the site you could just make a button that refreshes the site.


### Sources used during this project:

The Trivia API Documentation: https://the-trivia-api.com/docs/v2/

Ant Design Documentation: https://ant.design/docs/react/introduce

Simple Getting Started Guide on React Bootstrap: https://react-bootstrap.github.io/getting-started/introduction

Tutorial for React Router Dom: https://reactrouter.com/en/main/start/tutorial

(During the struggle with the FetchQuestions functions data, I also used the help of OpenAI ChatGPT: https://chat.openai.com/ (PS: DIDN'T HELP))
