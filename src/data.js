// import meme from '../../assets/icons/king.png'
// import food from '../../assets/icons/maps-and-location.png'
// import hike from '../../assets/icons/mountain.png'
// import icecream from '../../assets/icons/ice-cream.png'
// import memory from '../../assets/icons/photography.png'
// import bud from '../../assets/icons/tree.png'

// var projectIcons = [meme, food, hike, icecream, memory, bud];

var projects = [
    {
        id: 1,
        name: "COVID-19 Map (U.S.)",
        photo: "",
        gif: "",
        description: "(IN DEVELOPMENT) An app that keeps track of the COVID-19 spread in the United States along with relevant numbers.",
        short: "In development",
        tools: ["React", "ArcGIS"],
        github: "https://github.com/madeleineprak/map-project",
        website: "",
        icon: "../../assets/icons/virus.png"
    },
    {
        id: 2,
        name: "It's the Little Things",
        photo: "",
        gif: "",
        description: "(IN DEVELOPMENT) My personal photo blog of some of my favorite things.",
        short: "In development",
        tools: ["React"],
        github: "https://github.com/madeleineprak/photo-blog",
        website: "",
        icon: "../../assets/icons/photography.png"
    },
    {
        id: 3,
        name: "Mom 'n Pop",
        photo: "../../assets/project-files/MomandPop.PNG",
        gif: "../../assets/project-files/MomandPop.gif",
        description: "A crowd-sourced interactive map app that keeps track of all the awesome local mom-and-pop shops in the Seattle area.",
        short: "Discover the local gems of Seattle restaurants",
        tools: ["Sequelize", "MapBox", "GeocoderAPI", "Materialize"],
        github: "https://github.com/madeleineprak/Mom-N-Pop",
        website: "https://momnpop.herokuapp.com/",
        icon: "../../assets/icons/maps-and-location.png"
    },
    {
        id: 4,
        name: "Hike Finder",
        photo: "../../assets/project-files/HikeFinder.PNG",
        gif: "../../assets/project-files/FindMyHike.gif",
        description: "An app where you can find a hike in any given area along with all the information you need to plan a trip there.",
        short: "Find a hike with all the necessary details for your trip",
        tools: ["Parsley.js", "GoogleDevelopers", "HikingProjectAPI"],
        github: "https://github.com/madeleineprak/Find-My-Hike",
        website: "https://madeleineprak.github.io/Find-My-Hike/",
        icon: "../../assets/icons/mountain.png"
    },
    {
        id: 5,
        name: "Get The Scoop",
        photo: "../../assets/project-files/GetTheScoop.PNG",
        gif: "../../assets/project-files/GetTheScoop.gif",
        description: "An app that keeps track of hacker news and lets you add personalized notes.",
        short: "Read daily HackerNews articles and add your own notes",
        tools: ["Mongoose", "Express", "Express-Handlebars", "Cheerio"],
        github: "https://github.com/madeleineprak/Get-The-Scoop",
        website: "https://fast-inlet-41689.herokuapp.com/",
        icon: "../../assets/icons/ice-cream.png"
    },
    // {
    //     id: 4,
    //     name: "Memory Game",
    //     photo: "../../assets/project-files/MemoryGame.PNG",
    //     gif: "../../assets/project-files/MemoryGame.gif",
    //     description: "A game where the user's goal is to click a unique image each time to get the most points.",
    //     short: "Play my version of the popular memory game",
    //     tools: ["React", "Unsplash API", "Bulma", "bulma-toast"],
    //     github: "https://github.com/madeleineprak/Memory-Game",
    //     website: "https://madeleineprak.github.io/Memory-Game/",
    //     icon: "../../assets/icons/photography.png"
    // },
    // {
    //     id: 5,
    //     name: "Hey Bud",
    //     photo: "../../assets/project-files/HeyBud.PNG",
    //     gif: "../../assets/project-files/HeyBud.gif",
    //     description: "A dating app but for friends. The user can take a survey and find a buddy that has the highest compatibility based on a number of survey questions.",
    //     short: "Take a survey to find your most compatible bud",
    //     tools: ["Express", "Heroku"],
    //     github: "https://github.com/madeleineprak/Friend-Finder",
    //     website: "https://heybud-devmadeleine.herokuapp.com/",
    //     icon: "../../assets/icons/tree.png"
    // },
    {
        id: 6,
        name: "Meme House",
        photo: "",
        gif: "",
        description: "A social platform to create, view, and share memes.",
        short: "Create, view, and share memes all in one spot",
        tools: ["React", "Mongoose", "Cloudinary", "Passport.js"],
        github: "https://github.com/madeleineprak/Meme-House",
        website: "https://meme-house-ggm.herokuapp.com/home",
        icon: "../../assets/icons/king.png"
    }
]

export default projects;