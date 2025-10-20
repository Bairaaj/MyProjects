import './App.css'; // Ensure this is at the top of your file
import HtmlArray from './Utility/Utilitys.jsx';
const Main = () =>{
  console.log("Main Rendered");
  return(
    <div id='grid-container'>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
const NavBar = () =>{
  console.log("NavBar Rendered");
  return (
    <div className = 'navbar'>
      <a href='#aboutNav' id="MeSelect">About Me</a>
      <a href='#skillNav' id='SkillSelect'>Skills</a>
      <a href='#projectsNav' id="ProjectSelect">Projects</a>
      <a href='#contactNav' id='ConactSelect'>Contact</a>
    </div>
  )
}

const AboutMe = () =>{
  console.log("AboutMe Rendered");
  return(
    <div id='aboutNav'className="about-me">
      <div id='MeDesc'>
        <h1>Hello, My Name is Adrian Baira</h1>
        <p>
          I am currently working on my development process and expanding my knowledge of technology.
          I am a Filipino Canadian, living in Edmonton, Canada. I love tinkering with electronics and cars,
          doing all sorts of things, and experiencing life and having fun along the way.
        </p>
      </div>
      <div id='MEImage'>
        <img src='blah.gif' alt="Adrian Baira" width="200" height="200" />
        <h3>A Little About Me</h3>
        <p>
        My hobbies are playing volleyball, working out, and snowboarding,
        and I’m starting to tip my toes into collecting pokemon cards.
        </p>
      </div>
      
      
      
    </div>
  );
}


const Skills = () =>{
  console.log("Skills Rendered");
  console.log(HtmlArray().length);
  let randomNumber = Math.floor(Math.random() * (HtmlArray().length));
  let imageOne = randomNumber;
  let imageTwo = null;
  let imageThree = null;
  if (HtmlArray().length > 0)
    {
      // Ensure unique random numbers for imageTwo and imageThree
      do {
        imageTwo = Math.floor(Math.random() * (HtmlArray().length));
      } while (imageTwo === imageOne);
        
      do {
      imageThree = Math.floor(Math.random() * (HtmlArray().length));
      } while (imageThree === imageOne || imageThree === imageTwo);

      console.log(
        imageOne,
        imageTwo,
        imageThree
      );
    } 
    
  return(
    <div id='skillNav' className="skills">
      
      <h1>Programming Languages</h1>
      {
        HtmlArray().length > 0 ? (
          <div>
            {HtmlArray()[imageOne]}
            {HtmlArray()[imageTwo]}
            {HtmlArray()[imageThree]}
          </div>
      ) : null}
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
    <div id='projectsNav'className="projects">
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
    <div id='contactNav'className="contact">
      <h1>Contact Me</h1>
      <p>Email: ajbaira@hotmail.com</p>
      <p>Phone: 780-905-3413</p>
      <a href="www.linkedin.com/in/adrian-baira-3bb774304" target='_blank' rel='noopener noreferrer'> Linkdin Profile</a>
      <br></br>
      <a href="https://github.com/Bairaaj" target='_blank' rel='noopener noreferrer'> GitHub Profile</a>
      <br></br>
      <input type="text" placeholder="Your Email Address" />
      <br></br>
      <textarea placeholder="Your Message"></textarea>
      <br></br>
      <button type="submit">Send Message</button>

      <p>If you'd like to communicate with me </p>
    </div>
    )
}




export {Main};
export {NavBar};