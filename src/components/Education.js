import "./../styles/Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="edu-title">Education</h2>
      <p className="edu-subtitle">
        My academic foundation and learning journey
      </p>

      <div className="education-grid">

        {/* MCA */}
        <div className="edu-card glow">
          <div className="edu-icon">🎓</div>
          <h3>MCA</h3>
          <p className="edu-degree">Master of Computer Applications (Pursuing)</p>
          <p className="edu-school">
            Sinhgad Institute of Management, Pune, Maharashtra
          </p>
          <span className="edu-year">2024 – Present (Expected: 2026)</span>
        </div>

        {/* BCA */}
        <div className="edu-card glow">
          <div className="edu-icon">💻</div>
          <h3>BCA</h3>
          <p className="edu-degree">Bachelor of Computer Applications</p>
          <p className="edu-school">
            Marwari College, Ranchi, Jharkhand
          </p>
          <span className="edu-year">2020 – 2023 | 69.67%</span>
        </div>

        {/* 12th */}
        <div className="edu-card">
          <div className="edu-icon">📘</div>
          <h3>12th</h3>
          <p className="edu-degree">Higher Secondary</p>
          <p className="edu-school">
            Cambrian Public School, Ranchi, Jharkhand
          </p>
          <span className="edu-year">2018 – 2020 | 65%</span>
        </div>

        {/* 10th */}
        <div className="edu-card">
          <div className="edu-icon">📗</div>
          <h3>10th</h3>
          <p className="edu-degree">Secondary School</p>
          <p className="edu-school">
            Holy Public School, Gaya, Bihar
          </p>
          <span className="edu-year">2018 | 65%</span>
        </div>

      </div>
    </section>
  );
}

export default Education;
