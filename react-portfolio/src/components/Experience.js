import React from 'react';

const experiences = [
  {
    date: "May 2025 – Present",
    title: "Fullstack Developer",
    company: "Dhampur Green • New Delhi",
    responsibilities: [
      "Developed and stewarded Dhampur Green's Shopify eCommerce platform using Liquid, JavaScript, HTML/CSS, and Tailwind",
      "Integrated essential Shopify apps including Rebuy, Bitespeed, Judge.me, and DTDC Connect for enhanced sales and customer engagement",
      "Implemented dynamic features such as variant SKUs, metafields, advanced filters, and sorting options",
      "Enhanced site performance, SEO, and analytics through Hotjar, Google tools, and CRO practices"
    ]
  },
  {
    date: "Oct 2024 – Jan 2025",
    title: "Frontend Developer, Intern",
    company: "12R • Remote, Hyderabad",
    responsibilities: [
      "Developed and enhanced frontend of a boxing sports event platform using React.js, JavaScript, HTML, and CSS",
      "Built and styled core pages—Home, Events, Fighters, Contact—with clean UI and responsive layouts",
      "Collaborated with designers and backend developers to deliver seamless, fully responsive experience across devices",
      "Optimized performance through lazy loading, code splitting, and efficient component structuring",
      "Integrated REST API endpoints to dynamically render event schedules, fighter data, and ticketing details"
    ]
  },
  {
    date: "May 2023 – June 2023",
    title: "Frontend Developer, Intern",
    company: "Octanet • Remote, Bengaluru",
    responsibilities: [
      "Developed visually appealing and user-friendly websites utilizing HTML, CSS, and JavaScript",
      "Implemented responsive web design techniques to ensure optimal display across various devices",
      "Boosted user engagement by creating dynamic web pages with interactive elements and real-time updates"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-date">{exp.date}</div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
