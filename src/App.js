import { useEffect } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const App = () => {
  //years of experience:
  const date = new Date();
  const years = date.getFullYear() - 2021;

  /* JUMP TO SECTION */
  useEffect(() => {
    [...document.querySelectorAll(".control")].forEach((button) => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });
  }, []);

  /* SAVING PREFERRED THEME TO THE LOCAL STORAGE */
  // check for saved 'darkMode' in localStorage
  let darkMode = localStorage.getItem("darkMode");

  const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add("light-mode");
    // 2. Update darkMode in localStorage
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove("light-mode");
    // 2. Update darkMode in localStorage
    localStorage.setItem("darkMode", null);
  };

  // If the user already visited and enabled darkMode
  // start things off with it on
  if (darkMode === "enabled") {
    enableDarkMode();
  }

  // Website Theme
  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");

    //onClick:
    // get their darkMode setting
    darkMode = localStorage.getItem("darkMode");

    // if it not current enabled, enable it
    if (darkMode !== "enabled") {
      enableDarkMode();
      // if it has been enabled, turn it off
    } else {
      disableDarkMode();
    }
  };

  /* READ MORE/LESS */
  const readMoreOrLess = (e) => {
    const current = e.target;
    window.location.replace("/#about");
    const isReadMoreBtn = current.className.includes("read-more-btn");
    if (!isReadMoreBtn) {
      return;
    }

    const currentText = e.target.parentNode.querySelector(".read-more-text");
    currentText.classList.toggle("read-more-text--show");
    current.textContent = current.textContent.includes("Read More")
      ? "Read Less . . ."
      : "Read More . . .";
  };

  return (
    <>
      <Header />
      <header className="container header active" id="home">
        <div className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
            <div className="image">
              <img src="img/my-photo.png" alt="personal" />
            </div>
          </div>
          <div className="right-header">
            <h1 className="name">
              Hi, <br />
              I'm <span>Ismail Chbiki.</span>
              <br />
              A Software Engineer
              <br />& Full Stack Developer
            </h1>
            <p>
              I am a second year
              <span style={{ color: "var(--color-secondary)" }}>
                Software Engineering
              </span>
              student at Fontys University of Applied Sciences in Eindhoven, The
              Netherlands.
              <br />
              I love building and developing software.
              <br />
              <br />
              Click&nbsp;
              <u
                className="control"
                data-id="about"
                style={{ cursor: "pointer", color: "var(--color-secondary)" }}
              >
                here
              </u>
              &nbsp;to find out more about me.
            </p>

            {/* <!-- <div className="btn-con">
            <a href="" className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon"><em className="fas fa-download"></em></span>
            </a>
          </div> --> */}
          </div>
        </div>
      </header>
      <main>
        <section className="container about" id="about">
          <div className="main-title">
            <h2>
              About <span>me</span>
              <span style={{ display: "none" }} className="bg-text">
                My Records
              </span>
            </h2>
          </div>
          <div className="about-container">
            <div className="left-about">
              <div className="read-more-container">
                <div className="container-about-me">
                  <p>
                    Hi, It is really nice to have you passing by.
                    <br />
                    Allow me to introduce myself.
                    <br />
                    <span className="read-more-text">
                      <br />
                      I am a fourth semester Software Engineering student based
                      in The Netherlands and studying at Fontys University of
                      Applied Sciences.
                      <br />
                      My study program is an HBO-ICT, a 4-year broad bachelor
                      program. Find all the details about the program
                      <a
                        href="https://fontys.edu/Bachelors-Masters/Bachelors/Information-Communication-Technology-Eindhoven/Courses/Bachelor-ICT-Software-Engineering.htm"
                        target="_blank"
                      >
                        <u
                          style={{
                            cursor: "pointer",
                            color: "var(--color-secondary)",
                          }}
                        >
                          here
                        </u>
                      </a>
                      .
                      <br />
                      <br />
                      <strong>About My ICT Program & current semester</strong>
                      <br />
                      For this semester 4, my specialization is
                      <a
                        href="https://www.studynavigatorfontysict.nl/specialisations/ict-smart-mobile/"
                        target="_blank"
                      >
                        <u
                          style={{
                            cursor: "pointer",
                            color: "var(--color-secondary)",
                          }}
                        >
                          Smart Mobile
                        </u>
                      </a>
                      In which, we cover Mobile Apps development with SwiftUI &
                      Kotlin for IOS & Android native Apps, as well as PWA
                      (Progressive Web Application) development with HTML5,
                      CSS3, & JS for Cross-platform Apps.
                      <br />
                      <br />
                      <strong>About The Previous Semesters</strong>
                      <br />
                      <em>In semester 3</em>, we covered the Full Stack
                      development of dynamic web apps using React for the
                      frontend and Java/Spring Boot for the backend as well as
                      SQL and NoSQL Databases.
                      <br />
                      We also covered DevOps using Docker, CI/CD and automated
                      testing for both ends using a wide range of tools and
                      libraries.
                      <br />
                      <em>In semester 2</em>, we also developed Web Apps, and
                      Desktop Apps for Windows using C#, Razor Pages, MVC,
                      ASP.NET Core, and WPF
                      <br />
                      <br />
                      During all these semesters, there was a huge emphasis on
                      writing clean code with solid, maintainable, and scalable
                      architecture by sticking to OOP & the design principles
                      (SOLID, DRY, Separation of Concerns, code readability,
                      etc)
                      <br />
                      There was also a great emphasis on The Apps Security (e.g.
                      SQL injection, Secure APIs, etc).
                      <br />
                      <br />
                      <strong>Before ICT Career</strong>
                      <br />
                      Before getting hooked to software engineering, I had a
                      very different interesting and exciting life.
                      <br />I used to be a kitesurfing coach (I hold an
                      <a
                        href="https://www.ikointl.com/course/instructor-level-3"
                        style={{
                          cursor: "pointer",
                          color: "var(--color-secondary)",
                        }}
                        target="_blank"
                      >
                        <u>IKO level 3 </u>
                      </a>
                      certification.) and a watersports instructor, coaching and
                      teaching the international community (in 3 languages) in
                      several kitesurf world destinations.
                      <br />
                      <br />
                      This is my
                      <a
                        href="https://www.youtube.com/c/IsmailChbiki"
                        style={{
                          cursor: "pointer",
                          color: "var(--color-secondary)",
                        }}
                        target="_blank"
                      >
                        <u>YouTube </u>
                      </a>
                      channel where I used to share some of my past watersports'
                      experiences.
                      <br />
                      I got into watersports coaching after I got my BA in
                      English Studies & Linguistics as I was a watersports’
                      addict and passionate.
                      <br />
                      I was also an English & French translator and teacher
                      teaching in several schools and languages centers.
                      <br />
                      <br />
                      <strong>Currently</strong>
                      <br />
                      For the time being, what I enjoy the most is being on my
                      laptop coding for most of the time and getting more in
                      depth in technologies.
                      <br />
                      <br />
                      <strong>Driving Motivation</strong>
                      <br />
                      Since I started programming almost two years ago, I learnt
                      a lot and still learning, and the more I learn, the more I
                      want to learn. I could already create interesting and cool
                      stuff during school projects with little experience and
                      got the feeling that the world of IT has so much potential
                      for those who get to know it inside out.
                      <br />
                      <br />
                      <strong>Ambition</strong>
                      <br />
                      My ambition is that I want to keep learning until I become
                      so good to translate any idea into reality.
                    </span>
                  </p>
                  <span onClick={readMoreOrLess} className="read-more-btn">
                    Read More . . .
                  </span>
                  {/* <!-- <div className="btn-con">
              <a href="#" className="main-btn">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon"><em className="fas fa-download"></em></span>
              </a>
            </div> --> */}
                </div>
              </div>
            </div>
            <br />
            <h4 className="stat-title">My Records</h4>
            <div className="right-about">
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">10+</p>
                  <p className="small-text">Projects Completed</p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  {}
                  <p className="large-text">{years}+</p>
                  <p className="small-text">Years of experience</p>
                </div>
              </div>
              {/* <!-- <div className="about-item">
              <div className="abt-text">
                <p className="large-text">300+</p>
                <p className="small-text">
                  Happy <br />
                  Clients
                </p>
              </div>
            </div> --> */}
              {/* <!-- <div className="about-item">
              <div className="abt-text">
                <p className="large-text">400+</p>
                <p className="small-text">
                  Customer <br />
                  reviews
                </p>
              </div>
            </div> --> */}
            </div>
          </div>
          <div className="about-stats">
            <h4 className="stat-title">My Skills</h4>
            <div className="progress-bars">
              <div className="progress-bar">
                <p className="prog-title">html5</p>
                <div className="progress-con">
                  <p className="prog-text">60%</p>
                  <div className="progress">
                    <span className="html"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">css3</p>
                <div className="progress-con">
                  <p className="prog-text">40%</p>
                  <div className="progress">
                    <span className="css"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">javascript</p>
                <div className="progress-con">
                  <p className="prog-text">50%</p>
                  <div className="progress">
                    <span className="js"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">ReactJS</p>
                <div className="progress-con">
                  <p className="prog-text">50%</p>
                  <div className="progress">
                    <span className="react"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">C#</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="c-sharp"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Java</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="java"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Databases</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="databases"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">DevOps</p>
                <div className="progress-con">
                  <p className="prog-text">40%</p>
                  <div className="progress">
                    <span className="devops"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Git</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="git"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Scrum</p>
                <div className="progress-con">
                  <p className="prog-text">85%</p>
                  <div className="progress">
                    <span className="scrum"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="stat-title">My Timeline</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="tl-icon">
                <em className="fas fa-briefcase"></em>
              </div>
              <p className="tl-duration">2021 - 2024</p>
              <h5>
                Student<span> - Fontys University of Applied Sciences</span>
              </h5>
              <p>
                Bachelor ICT & Software Engineering: <br />
                Learning about the different technologies & the programming
                languages and their usage and implications on the development of
                a Software Solution.
              </p>
            </div>
            {/* <!-- <div className="timeline-item">
            <div className="tl-icon">
              <em className="fas fa-briefcase"></em>
            </div>
            <p className="tl-duration">2008 - 2011</p>
            <h5>Software Engineer<span> - Boogle, Inc.</span></h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div> --> */}
            {/* <!-- <div className="timeline-item">
            <div className="tl-icon">
              <em className="fas fa-briefcase"></em>
            </div>
            <p className="tl-duration">2016 - 2017</p>
            <h5>C++ Programmer<span> - Slime Tech</span></h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div> --> */}
            {/* <!-- <div className="timeline-item">
            <div className="tl-icon">
              <em className="fas fa-briefcase"></em>
            </div>
            <p className="tl-duration">2009 - 2013</p>
            <h5>Business Degree<span> - Sussex University</span></h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div> --> */}
            {/* <!-- <div className="timeline-item">
            <div className="tl-icon">
              <em className="fas fa-briefcase"></em>
            </div>
            <p className="tl-duration">2013 - 2016</p>
            <h5>Computer Science Degree<span> - Brookes University</span></h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div> --> */}
            {/* <!-- <div className="timeline-item">
            <div className="tl-icon">
              <em className="fas fa-briefcase"></em>
            </div>
            <p className="tl-duration">2017 - present</p>
            <h5>3d Animation<span> - Brighton University</span></h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div> --> */}
          </div>
        </section>
        <section
          style={{ display: "none" }}
          className="container"
          id="portfolio"
        >
          <div className="main-title">
            <h2>
              My <span>Portfolio</span>
              <span className="bg-text">My Work</span>
            </h2>
          </div>
          <p className="port-text">
            Here is some of my work that I've done in various programming
            languages.
          </p>
          <div className="portfolios">
            <div className="portfolio-item">
              <div className="image">
                <img src="img/port1.jpg" alt="portfolio" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <em className="fab fa-github"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-behance"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-youtube"></em>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="img/port2.jpg" alt="portfolio" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <em className="fab fa-github"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-behance"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-youtube"></em>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="img/port3.jpg" alt="portfolio" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <em className="fab fa-github"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-behance"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-youtube"></em>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="img/port4.jpg" alt="portfolio" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <em className="fab fa-github"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-behance"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-youtube"></em>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="img/port5.jpg" alt="portfolio" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <em className="fab fa-github"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-behance"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-youtube"></em>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="img/port2.jpg" alt="portfolio" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <em className="fab fa-github"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-behance"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-youtube"></em>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="img/port7.jpg" alt="portfolio" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <em className="fab fa-github"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-behance"></em>
                  </a>
                  <a href="#" className="icon">
                    <em className="fab fa-youtube"></em>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ display: "none" }} className="container" id="blogs">
          <div className="blogs-content">
            <div className="main-title">
              <h2>
                My <span>Blogs</span>
                <span className="bg-text">My Blogs</span>
              </h2>
            </div>
            <div className="blogs">
              <div className="blog">
                <img src="img/port6.jpg" alt="portfolio" />
                <div className="blog-text">
                  <h4>How to Create Your Own Website</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div className="blog">
                <img src="img/blog1.jpg" alt="portfolio" />
                <div className="blog-text">
                  <h4>How to Become an Expert in Web Design</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div className="blog">
                <img src="img/blog2.jpg" alt="portfolio" />
                <div className="blog-text">
                  <h4>Become a Web Designer in 10 Days</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div className="blog">
                <img src="img/blog3.jpg" alt="portfolio" />
                <div className="blog-text">
                  <h4>Debbuging made easy with Web Inspector</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div className="blog">
                <img src="img/port1.jpg" alt="portfolio" />
                <div className="blog-text">
                  <h4>Get started with Web Design and UI Design</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div className="blog">
                <img src="img/port3.jpg" alt="portfolio" />
                <div className="blog-text">
                  <h4>This is what you need to know about Web Design</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container contact" id="contact">
          <div className="contact-container">
            <div className="main-title">
              <h2>
                Contact <span>Me</span>
                <span style={{ display: "none" }} className="bg-text">
                  Contact
                </span>
              </h2>
            </div>
            <div className="contact-content-con">
              <div className="left-contact">
                <h4>Contact me here</h4>
                <p>
                  For any inquiries, collaborations, job offers, freelance
                  works, etc.
                  <br />
                  Please feel free to drop me a message.
                  <br />I will reply as soon as possible.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="icon">
                      <em className="fas fa-map-marker-alt"></em>
                      <span>Location :</span>
                    </div>
                    <p>The Netherlands</p>
                  </div>
                  <div style={{ display: "none" }} className="contact-item">
                    <div className="icon">
                      <em className="fas fa-envelope"></em>
                      <span>Email :</span>
                    </div>
                    <p>
                      <span>contact@gmail.com</span>
                    </p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <em className="fas fa-user-graduate"></em>
                      <span>Education :</span>
                    </div>
                    <p>
                      <span>Fontys University, The Netherlands</span>
                    </p>
                  </div>
                  <div style={{ display: "none" }} className="contact-item">
                    <div className="icon">
                      <em className="fas fa-user-graduate"></em>
                      <span>Mobile Number :</span>
                    </div>
                    <p>
                      <span>0000000000</span>
                    </p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <em className="fas fa-globe-africa"></em>
                      <span>Languages :</span>
                    </div>
                    <p>
                      <span>English, French, Arabic, Basic Dutch</span>
                    </p>
                  </div>
                </div>
                <div className="contact-icons">
                  <div className="contact-icon">
                    <a
                      href="https://www.linkedin.com/in/ismailchbiki/"
                      target="_blank"
                    >
                      <em className="fab fa-linkedin"></em>
                    </a>
                    <a href="https://github.com/ismailchbiki" target="_blank">
                      <em className="fab fa-github"></em>
                    </a>
                    <a
                      href="https://www.instagram.com/ismail_chbiki/"
                      target="_blank"
                    >
                      <em className="fab fa-instagram"></em>
                    </a>
                    <a href="https://twitter.com/Ismailchbiki" target="_blank">
                      <em className="fab fa-twitter"></em>
                    </a>
                    <a
                      href="https://www.youtube.com/c/IsmailChbiki"
                      target="_blank"
                    >
                      <em className="fab fa-youtube"></em>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-contact">
                <form
                  action="https://formsubmit.co/5eb3c1cdba70608c0db127f8c3298133"
                  method="POST"
                  className="contact-form"
                >
                  <div className="input-control i-c-2">
                    <input
                      type="text"
                      name="Name"
                      placeholder="* YOUR NAME"
                      required
                    />
                    <input
                      type="email"
                      name="Email"
                      placeholder="* YOUR EMAIL"
                      required
                    />
                  </div>
                  <div className="input-control">
                    <input
                      type="text"
                      name="Subject"
                      placeholder="* ENTER SUBJECT"
                      required
                    />
                  </div>
                  <div className="input-control">
                    <textarea
                      name="Message"
                      id=""
                      cols="15"
                      rows="8"
                      placeholder="* Message Here..."
                      required
                    ></textarea>
                    <span>* Required fields</span>
                  </div>
                  <div className="submit-btn">
                    <a className="main-btn">
                      <span className="btn-text">
                        <button
                          type="submit"
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "var(--color-white)",
                            fontSize: "21px",
                          }}
                        >
                          Submit
                        </button>
                      </span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="controls">
        <div className="control active-btn" data-id="home">
          <div className="item">
            <div className="tooltip">Homepage</div>
            <em className="fas fa-home"></em>
          </div>
        </div>
        <div className="control" data-id="about">
          <div className="item">
            <div className="tooltip">About</div>
            <em className="fas fa-user"></em>
          </div>
        </div>
        {/* <!-- <div className="control" data-id="portfolio">
        <em className="fas fa-briefcase"></em>
      </div> --> */}
        {/* <!-- <div className="control" data-id="blogs">
        <em className="far fa-newspaper"></em>
      </div> --> */}
        <div className="control" data-id="contact">
          <div className="item">
            <div className="tooltip">Contact</div>
            <em className="fas fa-envelope-open"></em>
          </div>
        </div>
      </div>
      <div onClick={() => toggleTheme()} className="theme-btn">
        <div className="item">
          <div className="tooltip">Theme</div>
          <em className="fas fa-adjust"></em>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
