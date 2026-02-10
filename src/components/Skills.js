import "./../styles/Skills.css";

function Skills() {
  const skills = [
    "Python Programming",
    "Java Programming",
    "Data Structures & Algorithms (Basics)",
    "Object-Oriented Programming (OOP)",
    "SQL & Database Management",
    "Web Development (Frontend + Backend)",
    "REST API Design & Integration",
    "Django & FastAPI Frameworks",
    "Software Development Life Cycle (SDLC)",
    "Git & Version Control",
    "Problem Solving & Debugging",
    "Operating Systems Fundamentals",
    "Web Security & OWASP Basics",
    "Generative AI Fundamentals",
    "System Thinking & Logical Reasoning",
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
