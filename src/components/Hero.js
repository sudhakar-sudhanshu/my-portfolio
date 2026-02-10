import "./../styles/Hero.css";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="hero-tag">Full Stack Developer</p>

          <h1 className="hero-title">
            <span className="reveal">Hi, I’m</span>
            <span className="reveal highlight">Sudhakar</span>
          </h1>

          <p className="hero-desc">
            Full Stack Developer skilled in React and Django, focused on building fast, scalable, and real-world web applications with clean UI and strong backend logic.
          </p>

          {/* SOCIAL BUTTONS */}
          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/sudhakar-sudhanshu/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn linkedin"
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://github.com/sudhakar-sudhanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn github"
            >
              💻 GitHub
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="photo-glow">
            <img src={profile} alt="Sudhakar" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
