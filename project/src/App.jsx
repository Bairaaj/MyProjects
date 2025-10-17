import './App.css'; // Ensure this is at the top of your file
import HtmlArray from './Utility.jsx';
const Main = () =>{
  console.log("Main Rendered");
  return(
    <div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}
const NavBar = () =>{
  console.log("NavBar Rendered");
  return (
    <div className = 'navbar'>
      <a href='#about' id="MeSelect">About Me</a>
      <a href='#skills' id='SkillSelect'>Skills</a>
      <a href='#projects' id="ProjectSelect">Projects</a>
      <a href='#contact' id='ConactSelect'>Contact</a>
    </div>
  )
}

const AboutMe = () =>{
  console.log("AboutMe Rendered");
  return(
    <div className="about-me">
      <h1>About Me</h1>
      <h3>My Name is Adrian Baira</h3>
      <img src='blah.gif' alt="Adrian Baira" width="200" height="200" />
      <p>
        I am currently working on my development process and expanding my knowledge of technology.
        I am a Filipino Canadian, living in Edmonton, Canada. I love tinkering with electronics and cars,
        doing all sorts of things, and experiencing life and having fun along the way.
      </p>
      <p>
        A little things about myself. My hobbies are playing volleyball, working out, and snowboarding,
        and I’m starting to tip my toes into collecting pokemon cards.
      </p>
    </div>
  );
}


const Skills = () =>{
  console.log("Skills Rendered");
  return(
    <div className="skills">
      <img src='./assets/C++.png'/>
      <h1>Programming Languages</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>C</li>
        <li>C++</li>
        <li>Python</li>
        <li>SQL</li>
        <li>C# (Intermediate)</li>
      </ul>
      <h1>Development Tools</h1>
      <ul>
        <li>Visual Studio Code</li>
        <li>Git</li>
        <li>Visual Studio</li>
        <li>SQL Server Management</li>
      </ul>

      <h1>Other Skills</h1>
      <ul>
        <li>Multi Tasking</li>
        <li>TeamWork and Collaboration</li>
      </ul>
    </div>
  );
}

const Projects = () =>{
  console.log("Projects Rendered");
  return(
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        <li>Portfolio Website (This Website)</li>
        <li>Resume Builder (In Development)</li>
        <li>Workout App (In Development)</li>
        <li>Expensess Tracker (In Devleopment)</li>
        <li>Automated Connect 4 Board Game</li>
        <li>Motion Activated Door system (Mini Prototype)</li>
      </ul>
    </div>
  );
}

const Contact = () =>{
  console.log("Contact Rendered");
  return(
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Email: ajbaira@hotmail.com</p>
      <p>Phone: 780-905-3413</p>
      <a href="www.linkedin.com/in/adrian-baira-3bb774304" target='_blank' rel='noopener noreferrer'> Linkdin Profile</a>
      <br></br>
      <a href="https://github.com/Bairaaj" target='_blank' rel='noopener noreferrer'> GitHub Profile</a>


      <p>If you'd like to communicate with me </p>
    </div>
    )
}




export {Main};
export {NavBar};