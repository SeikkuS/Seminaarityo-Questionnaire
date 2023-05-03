# Questionnaire Trivia Game

This game is a student project for a course. I decided to make a "guessing" game using React. The game's structure will consist of 5 things: 
*Originally the idea was to use MUI as well, but i realized that React 18 and MUI didnt work together as well as I'd hoped so i decided to not use Material UI. 
(Mainly the module material-ui/core was not working with my React version)

1. A question (fetched from an API: https://the-trivia-api.com/api/questions)
2. 4 answer options (buttons) out of which 1 is correct
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

