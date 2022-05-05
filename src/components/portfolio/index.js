import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "IMBD",
      id: "imbd",
      description: "A movie database web application that utilizes the TMBD API to provide a seamless and responsive research experience. 'It's Movie Night!'",
      liveUrl: "https://alexnj1.github.io/imbd/",
      gitHub: "https://github.com/Alexnj1/imbd"
    },
    {
      name: "C-S-S Neighborhood",
      id: "css",
      description: "This is a full stack application, hosted on heroku, that utilizes Node.js, Express.js, various NPM packages and various full stack web development concepts to create a small social-media style website specially for communication throughout a fictional community.",
      liveUrl: "https://sheltered-fortress-48000.herokuapp.com/homepage",
      gitHub: "https://github.com/Alexnj1/c-s-s"
    },
    {
      name: "Technology Blog",
      id: "tech-blog",
      description: "Utilizes Node.js, Express.js and a variety of third party NPM packages to create and manage a server for a blog post sharing webiste.",
      liveUrl: "https://protected-eyrie-05356.herokuapp.com/home/",
      gitHub: "https://github.com/Alexnj1/technology-blog"
    },
    {
      name: "Weather Dashboard",
      id: "weather-dashboard",
      description: "This online weather dashboard application allows the user to view weather conditions from cities all over the world. Includes the ability to view both current weather data and a future five day forecast, as well as save the user's last 5 searches.",
      liveUrl: "https://alexnj1.github.io/weather-dashboard/",
      gitHub: "https://github.com/Alexnj1/weather-dashboard"
    },
    {
      name: "Budget Tracker Pro",
      id: "budget-tracker",
      description: "A budget tracking application that utilizes IndexedDB and Service Worker functionality to offer a mobile-first PWA user-experience.",
      liveUrl: "https://immense-tundra-05674.herokuapp.com/",
      gitHub: "https://github.com/Alexnj1/budget-tracker-pro"
    },
    {
      name: "Taskmaster-Pro",
      id: "task-pro",
      description: "This application visually depicts tasks at various stages of completion and allows the user to easily make on the fly edits to a task's name, progress status, due date, etc. Built with Bootsrap, JQuery and JqueryUI.",
      liveUrl: "https://alexnj1.github.io/taskmaster-pro/",
      gitHub: "https://github.com/Alexnj1/taskmaster-pro"
    },
  ]
  return (
    <section>
      <h2 className="text-center fw-bold my-3">My Projects</h2>
      {projects.map((proj, i)=>(
      <div key={i} className="d-flex flex-column m-5 p-3 my-border card">
        <div className="text-center">
          <img className="p-image" src={require(`../../assets/images/${proj.id}.png`)}></img>
        </div>
        <div className="mx-auto text-center">
          <h3 className="fw-bold m-2">{proj.name}</h3>
          <p>{proj.description}</p>
          <a href={proj.liveUrl} target="_blank">View Deployed Application</a> <br></br>
          <a href={proj.gitHub} target="_blank">View GitHub Repository</a>
        </div>
      </div>
      ))}
      {/*  */}
    </section>
  );
}

export default Portfolio