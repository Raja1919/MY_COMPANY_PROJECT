import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="about-page-container">
      <h2 className="text-center">About Us</h2>
      <p>
        Welcome to Our Company! We are dedicated to providing high-quality
        services and products to our customers.
      </p>
      <p>
        At Our Company, we believe in [core belief or value]. Our mission is to
        [describe your mission or purpose]. We strive for excellence and
        customer satisfaction in everything we do.
      </p>
      <h3>Our Team</h3>
      <p>
        Meet the amazing individuals who make up our team. Our team consists of
        skilled professionals with expertise in [industry/domain]. We are
        passionate about delivering top-notch solutions and services to our
        clients.
      </p>
      <div className="team-members">
        <div className="team-member">
          <img src="/images/team-member1.jpg" alt="Team Member 1" />
          <h4>John Doe</h4>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="/images/team-member2.jpg" alt="Team Member 2" />
          <h4>Jane Smith</h4>
          <p>Chief Operating Officer</p>
        </div>
      </div>
      <h3>Company History</h3>
      <p>
        Since our establishment in [Year], Our Company has been at the forefront
        of [industry/domain]. Over the years, we have achieved significant
        milestones and garnered recognition for our commitment to excellence.
      </p>
      <p>
        Our journey began with a vision to [describe the initial goal or vision].
        Today, we stand proud as a [brief description of current status, e.g.,
        industry leader, innovator, etc.].
      </p>
    </div>
  );
};

export default About;
