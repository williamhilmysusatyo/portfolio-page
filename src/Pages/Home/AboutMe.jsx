export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/profile-image.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Overview</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            William Hilmy Susatyo is a highly motivated 
            computer science student who has a lot of interest in data science, 
            cloud computing, and web development, as proven by his outstanding 
            achievement and active involvement in various projects and research 
            related to those fields.
            </p>
            <p className="hero--section-description">
            During his high school period, 
            he went to the Netherlands as an exchange student. 
            His effort to strive allowed him to participate in the final 
            round of the Netherlands Mathematics Competition, although he 
            wasn't native. He strongly believes that all kinds of experiences 
            that one has already done might give certain value that may lead one 
            to be a better person.
            </p>
          </div>
        </div>
      </section>
    );
  }