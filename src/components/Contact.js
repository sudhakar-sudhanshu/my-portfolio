import "./../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Let’s connect and build something impactful together
      </p>

      <div className="contact-card">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <div>
            <p className="contact-label">Email</p>
            <a
              href="mailto:sudhakarsudhanshu1975@gmail.com"
              className="contact-value"
            >
              sudhakarsudhanshu1975@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <div>
            <p className="contact-label">Phone</p>
            <a href="tel:+919508701081" className="contact-value">
              +91 9508701081
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
