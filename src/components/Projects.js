import "./../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Django E-Commerce Web Application",
      description:
        "Developed a full-stack e-commerce platform using Python, Django, and MySQL. Implemented user authentication, product listing, cart management, order processing, and efficient database models using Django ORM. Ensured secure login, proper session handling, and smooth user experience.",
      tech: ["Python", "Django", "MySQL", "Django ORM"],
    },
    {
      title: "Full-Stack E-Commerce Web Application with Razorpay",
      description:
        "Built a full-stack e-commerce system enabling users to browse products, place orders, and make secure online payments using Razorpay. Implemented payment verification workflow, order status tracking in user dashboard, and an admin panel to manage products and orders while ensuring data integrity and reliability.",
      tech: ["Python", "Django", "Razorpay", "MySQL"],
    },
    {
      title: "Cybersecurity Toolkit using Django",
      description:
        "Built a Django-based cybersecurity web application focused on web security awareness. Implemented secure authentication and authorization mechanisms and included tools based on OWASP Top 10 fundamentals to help users understand common web vulnerabilities and secure coding practices.",
      tech: ["Python", "Django", "OWASP", "Web Security"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
