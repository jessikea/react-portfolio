import { project1, project2, project3, project4, project5} from "./assets"

const projects= [
    {
        id: 1,
        name: "Study Buddy",
        tech: "JavaScript, Html",
        description: "StuddyBuddy is a quiz app that allows users to play a quiz game and save their scores. The StuddyBuddy used two APIs, a quiz API and a dictionary API.",
        image: project1,
        github: "https://github.com/ssnakeoil/the-study-buddy",
        deployed: "https://ssnakeoil.github.io/the-study-buddy/"
    },
    {
        id: 2,
        name: "Note Taker",
        tech:"Express",
        description: "Note Taker is an application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.",
        image: project2,
        github: "https://github.com/jessikea/note-taker-app",
        deployed:"https:note-taker-app-jt.herokuapp.com/"
    },
    { 
        id: 3,
        name: "Studdy Buddies",
        tech: "JavaScript, Express, Node, MySQL, Sequelize, Handlebars, CSS",
        description: "StudyBuddies was a extension to StudyBuddy. Bringing in 2 new buddies such as Flash, a flashcard buddy, and Brainstorm, a buddy that allows users to post and comment on ideas.",
        image: project3,
        github: "https://github/ssnakeoil/study-buddies",
        deployed: "https://study-buddies.herokuapp.com"
    },
    {
        id: 4,
        name: "Password Generator",
        tech: "JavaScript",
        description: "Password Generator is an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.",
        image: project4,
        github: "https://github.com/jessikea/password-generator-challenge",
        deployed: "https://jessikea.github.io/password-generator-challenge/"
    },
    {
        id: 5,
        name:"PokeDecks",
        tech: "JavaScript, React, CSS",
        description: "PokeDecks is a fun application that allows users to search for their favorite Pokemon and create a deck of cards. The application uses the PokeAPI to retrieve Pokemon data.  The application uses local storage to save the user's deck." ,
        image: project5,
        github: "https://github.com/ssnakeoil/pokeDecks",
        deployed: "https://pokedecks.herokuapp.com/"
    }
]

export default projects;









