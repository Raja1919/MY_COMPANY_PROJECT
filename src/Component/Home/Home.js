import React from "react";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="Home">
        <header>
          <h1>Welcome to My Company</h1>
          <p>Your Trusted Partner in [Your Industry]</p>
        </header>

        <section>
          <h2>About Us</h2>
          <p>
            My Company is a leading provider of innovative [Your
            Products/Services] with a strong commitment to [Your Company
            Values]. We have been serving our clients since [Year of
            Establishment], and our team of experts is dedicated to [Your
            Mission].
          </p>
        </section>

        <section>
          <h2>Our Services</h2>
          <ul>
            <li>
              <strong>[Service 1]:</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Proin vitae consectetur justo.
            </li>
            <li>
              <strong>[Service 2]:</strong> Sed euismod purus in nisi ultricies,
              eu laoreet quam luctus.
            </li>
            <li>
              <strong>[Service 3]:</strong> Fusce non ex ac arcu accumsan
              viverra.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <p>At My Company, we differentiate ourselves through:</p>
          <ul>
            <li>Quality products and services</li>
            <li>Customer-centric approach</li>
            <li>Innovation and technology</li>
            <li>Commitment to sustainability</li>
          </ul>
        </section>

        <section>
          <h2>Client Testimonials</h2>
          <div className="testimonial">
            <p>
              "My Company exceeded our expectations. Their attention to detail
              and commitment to excellence are commendable."
            </p>
            <p>- John Doe, CEO of XYZ Corporation</p>
          </div>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            Have questions or want to learn more about our services?{" "}
            <a href="/contact">Contact us</a> today.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
